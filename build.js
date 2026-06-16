/**
 * build.js
 * 
 * Vanilla Node.js compiler script (zero dependencies) to stitch modular front-end code
 * (HTML templates, CSS styles, and JS modules) into a single monolithic target file
 * for offline, zero-install NMCI deployments.
 */

const fs = require('fs');
const path = require('path');

// Target paths
const SRC_DIR = path.join(__dirname, 'src');
const DIST_DIR = path.join(__dirname, 'dist');
const TARGET_FILE = path.join(DIST_DIR, 'index.html');
const BASE_TEMPLATE = path.join(SRC_DIR, 'index.html');

// Define Core JS load order to preserve topological dependency hierarchy
const coreFiles = [
  path.join(SRC_DIR, 'core', 'schema.js'),
  path.join(SRC_DIR, 'schema.js'),
  path.join(SRC_DIR, 'core', 'ingestion.js'),
  path.join(SRC_DIR, 'ingestion.js'),
  path.join(SRC_DIR, 'core', 'diffEngine.js'),
  path.join(SRC_DIR, 'diffEngine.js'),
  path.join(SRC_DIR, 'core', 'store.js'),
  path.join(SRC_DIR, 'core', 'assessment.js')
];

/**
 * Recursively scans directory for files matching filter
 */
function getFilesRecursive(dir, filter) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursive(fullPath, filter));
    } else if (filter(fullPath)) {
      results.push(fullPath);
    }
  });
  return results;
}

/**
 * Cleans and transforms JS module content to plain Javascript
 */
function processJSContent(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Strip import statements (handles multi-line and standard ES6 syntax)
  content = content.replace(/import\s+[\s\S]*?\s+from\s+['"].*?['"];?/g, '');
  
  // 2. Strip standard named export keywords, leaving function/class definitions
  content = content.replace(/\bexport\s+(async\s+)?(function|class|const|let|var)\b/g, '$1$2');
  
  // 3. Strip export block lists (e.g. export { func1, func2 };)
  content = content.replace(/\bexport\s*\{[\s\S]*?\}\s*;?/g, '');
  
  // 4. Strip default export declarations
  content = content.replace(/\bexport\s+default\s+.*?;?/g, '');
  
  return `\n// --- Compiled Module: ${path.relative(__dirname, filePath)} ---\n${content}`;
}

/**
 * Builds the monolithic deployable asset
 */
function compile() {
  const startTime = Date.now();
  console.log('\x1b[36m%s\x1b[0m', '⚡ Starting Monolithic Compilation Cycle...');
  
  try {
    // 1. Verify source index exists
    if (!fs.existsSync(BASE_TEMPLATE)) {
      throw new Error(`Base template file not found at: ${BASE_TEMPLATE}`);
    }
    
    // 2. Aggregate CSS
    console.log('🔍 Aggregating scoped styles...');
    const cssFilter = (file) => path.extname(file) === '.css';
    const cssFiles = getFilesRecursive(SRC_DIR, cssFilter);
    let aggregatedCSS = '';
    cssFiles.forEach(file => {
      aggregatedCSS += `\n/* Scoped style from: ${path.relative(__dirname, file)} */\n`;
      aggregatedCSS += fs.readFileSync(file, 'utf8') + '\n';
    });
    
    // 3. Aggregate HTML templates
    console.log('🔍 Parsing component HTML templates...');
    const htmlTemplateFilter = (file) => file.endsWith('.template.html');
    const templateFiles = getFilesRecursive(SRC_DIR, htmlTemplateFilter);
    let inlinedTemplates = '\n<!-- --- Compiled Component Templates --- -->\n';
    templateFiles.forEach(file => {
      const filename = path.basename(file, '.template.html');
      // Namespace template by kebab-case name
      const templateId = `template-${filename}`;
      const content = fs.readFileSync(file, 'utf8');
      inlinedTemplates += `<template id="${templateId}">\n${content}\n</template>\n\n`;
    });
    
    // 4. Aggregate and De-Module Javascript
    console.log('🔍 Stitching topological script order...');
    let stitchedJS = '';
    const compiledList = [];
    
    // Load Core Modules first
    coreFiles.forEach(filePath => {
      if (fs.existsSync(filePath)) {
        stitchedJS += processJSContent(filePath);
        compiledList.push(filePath);
      }
    });
    
    // Gather and compile other modules (e.g. in modules/ and components/ subfolders)
    const isOtherJs = (file) => {
      const ext = path.extname(file);
      const name = path.basename(file);
      return ext === '.js' && 
             !compiledList.includes(file) && 
             name !== 'generateSyntheticData.js' && 
             name !== 'testParser.js' &&
             name !== 'build.js';
    };
    const otherJsFiles = getFilesRecursive(SRC_DIR, isOtherJs);
    otherJsFiles.forEach(filePath => {
      stitchedJS += processJSContent(filePath);
      compiledList.push(filePath);
    });
    
    // 5. Parse base HTML and perform insertions
    let baseHtml = fs.readFileSync(BASE_TEMPLATE, 'utf8');
    
    // Inline additional styles inside standard <style> block
    if (aggregatedCSS.trim()) {
      const styleTagIndex = baseHtml.indexOf('</style>');
      if (styleTagIndex !== -1) {
        baseHtml = baseHtml.substring(0, styleTagIndex) + '\n' + aggregatedCSS + baseHtml.substring(styleTagIndex);
      } else {
        // Fallback: prepend in head
        baseHtml = baseHtml.replace('</head>', `<style>${aggregatedCSS}</style>\n</head>`);
      }
    }
    
    // Inline component templates inside body
    if (templateFiles.length > 0) {
      baseHtml = baseHtml.replace('</body>', `${inlinedTemplates}\n</body>`);
    }
    
    // Extract inline script inside base HTML, strip its module imports and replace
    console.log('🔍 Processing main UI app controllers...');
    const scriptStartRegex = /<script\s+type\s*=\s*['"]module['"]\s*>/i;
    const scriptStartIndex = baseHtml.search(scriptStartRegex);
    
    if (scriptStartIndex !== -1) {
      const afterScriptTag = baseHtml.substring(scriptStartIndex);
      const scriptEndIndex = afterScriptTag.indexOf('</script>');
      if (scriptEndIndex !== -1) {
        const fullScriptBlock = afterScriptTag.substring(0, scriptEndIndex);
        const scriptContent = fullScriptBlock.replace(scriptStartRegex, '');
        
        // Strip imports and exports from main block
        const processedMainScript = scriptContent
          .replace(/import\s+[\s\S]*?\s+from\s+['"].*?['"];?/g, '')
          .replace(/\bexport\s+(async\s+)?(function|class|const|let|var)\b/g, '$1$2')
          .replace(/\bexport\s*\{[\s\S]*?\}\s*;?/g, '')
          .replace(/\bexport\s+default\s+.*?;?/g, '');
          
        const unifiedCode = stitchedJS + '\n' + processedMainScript;
        
        // Insert compiled script as non-module pure Javascript
        baseHtml = baseHtml.substring(0, scriptStartIndex) + 
                   `<script>\n${unifiedCode}\n</script>` + 
                   afterScriptTag.substring(scriptEndIndex + 9);
      }
    }
    
    // Ensure target output folder exists
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR, { recursive: true });
    }
    
    // Write stitched output
    fs.writeFileSync(TARGET_FILE, baseHtml, 'utf8');
    
    const duration = Date.now() - startTime;
    console.log('\x1b[32m%s\x1b[0m', `✔ Monolithic build completed successfully in ${duration}ms!`);
    console.log(`  📂 Target Asset: ${path.relative(__dirname, TARGET_FILE)}`);
    console.log(`  🎨 Style Sheets Concatenated: ${cssFiles.length}`);
    console.log(`  🎖️ Templates Inlined: ${templateFiles.length}`);
    console.log(`  💾 Javascript Modules Stitched: ${compiledList.length}`);
    
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', '✖ Compilation failed with error:');
    console.error(error.message);
  }
}

// Check arguments for Watch command
const isWatch = process.argv.includes('--watch') || process.argv.includes('-w');

// Execute Initial Build
compile();

// Watch Mode
if (isWatch) {
  console.log('\x1b[35m%s\x1b[0m', '\n🔭 Monitoring "src/" directory for live updates... Press Ctrl+C to exit.');
  
  let watchTimeout = null;
  fs.watch(SRC_DIR, { recursive: true }, (eventType, filename) => {
    if (filename) {
      // Exclude temporary or target files
      if (filename.includes('dist') || filename.startsWith('.')) return;
      
      // Debounce trigger to allow editor batch-saving operations
      clearTimeout(watchTimeout);
      watchTimeout = setTimeout(() => {
        console.log(`\n📬 Live update detected in: ${filename}`);
        compile();
      }, 100);
    }
  });
}
