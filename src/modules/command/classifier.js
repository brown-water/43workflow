/**
 * src/modules/command/classifier.js
 * 
 * CommandClassifier encapsulates command classification, cohort grouping,
 * and personnel aggregates. It isolates the domain grouping rules
 * from the CommandModule UI renderer.
 */

export class CommandClassifier {
  /**
   * Determines if a command is a double-seat F-18F squadron.
   * 
   * @param {Object} command 
   * @returns {boolean}
   */
  static isF18F(command) {
    const name = (command.name || '').toUpperCase();
    return name.includes('VFA-122') || name.includes('F-18F') || name.includes('SHARP');
  }

  /**
   * Classifies a list of officers assigned to a command into operational cohorts.
   * 
   * Invariants:
   * - Deterministic output: officers are partitioned uniquely.
   * - No mutations: does not mutate the inputs.
   * 
   * @param {Object[]} officers 
   * @param {Object} command 
   * @returns {Record<string, Object[]>}
   */
  static classifyCohort(officers, command) {
    const groups = {
      'FRONT OFFICE': [],
      'DEPARTMENT HEADS': [],
      'TRAINING OFFICER': [],
      'SUPER JO': [],
      'PILOTS (131X)': [],
      'WSO (132X)': [],
      'POUNDERS': []
    };

    let remaining = [...officers];

    // Extract Front Office (CO, XO, PXO)
    groups['FRONT OFFICE'] = remaining.filter(o => 
      o.billetTitle === 'SQN CO' || o.billetTitle === 'SQN XO' || o.billetTitle === 'PXO'
    );
    remaining = remaining.filter(o => !groups['FRONT OFFICE'].includes(o));

    // Sort remaining by BSC ascending for stable partition logic
    remaining.sort((a, b) => {
      const bscA = a.bsc || '99999';
      const bscB = b.bsc || '99999';
      return bscA.localeCompare(bscB);
    });

    const isF18F = this.isF18F(command);

    if (isF18F) {
      // F-18F logic: 2 lowest BSC of 1310 and 1320 (excluding Front Office) go to Dept Heads
      const pilots = remaining.filter(o => o.designator === '1310' || o.designator === '1311');
      const wsos = remaining.filter(o => o.designator === '1320' || o.designator === '1321');
      
      const dhPilots = pilots.slice(0, 2);
      const dhWsos = wsos.slice(0, 2);
      
      groups['DEPARTMENT HEADS'] = [...dhPilots, ...dhWsos];
      remaining = remaining.filter(o => !groups['DEPARTMENT HEADS'].includes(o));
    } else {
      // Standard community logic: SQN DEPT HD go to Department Heads
      groups['DEPARTMENT HEADS'] = remaining.filter(o => o.billetTitle === 'SQN DEPT HD');
      remaining = remaining.filter(o => !groups['DEPARTMENT HEADS'].includes(o));
    }

    // Partition remaining junior officers into designator-based flight cohorts and pounders
    remaining.forEach(o => {
      if (o.designator === '1310' || o.designator === '1311') {
        groups['PILOTS (131X)'].push(o);
      } else if (o.designator === '1320' || o.designator === '1321') {
        groups['WSO (132X)'].push(o);
      } else {
        groups['POUNDERS'].push(o);
      }
    });

    return groups;
  }

  /**
   * Fully classifies a list of officers assigned to a command.
   * 
   * @param {Object[]} officers 
   * @param {Object} command 
   * @returns {Object} Grouped structure along with metadata and counts
   */
  static classify(officers, command) {
    const isF18F = this.isF18F(command);
    const groups = this.classifyCohort(officers, command);

    const pilotsCount = officers.filter(o => o.designator && o.designator.startsWith('131')).length;
    const wsosCount = officers.filter(o => o.designator && o.designator.startsWith('132')).length;

    return {
      groups,
      isF18F,
      pilotsCount,
      wsosCount
    };
  }
}
