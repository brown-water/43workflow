# How-To: The OAIS & FITREP Data Ingestion Pipeline

**Overview**
This guide details the process for extracting the raw data from the Navy's mainframe and FITREP systems and using Microsoft 365 (Power Automate and Excel Power Query) to transform it into the clean `state.csv` and `SUBEVAL_DDMMYY.csv` files required by the Master Planner's Reconciliation Engine.

Since the Master Planner operates as a Zero-Install HTML/JS application, it cannot directly access the secure MIAP environments. This pipeline acts as the "Read Bridge."

---

## Phase 1: Manual Data Extraction (The Daily Drop)

Because of the strict Security Moat, the initial pull of data must be done manually by the Placement Officer or Detailer with CAC access.

### Step 1.1: Extracting the OAIS (Mainframe) Data
1. Log into **MIAP** and launch your **Reflection Web** or **Reflection Desktop** session for the Mainframe.
2. Execute the standard macro or query to generate the daily personnel dump (e.g., `SUPPLY_sYNTH.txt`).
3. Connect to the **MECH FTP** server.
4. Download the `SUPPLY_sYNTH.txt` (or similarly named `%` or `?` delimited text file) to your local machine.
5. **Action:** Move this file into your designated local **"Watch Folder"** (e.g., `C:\Users\YourName\OneDrive - Navy\43workflow_watch\`).

### Step 1.2: Extracting the FITREP Data
1. Navigate to the authoritative system for longitudinal FITREP data (e.g., BOL, NSIPS, or local command repositories).
2. Generate the report containing the necessary fields (SSN/DoD ID, RS Name, ITA, RSCA, Summary Groups).
3. Export this data as a CSV file.
4. **Action:** Rename the file to standard format: `SUBEVAL_DDMMYY.csv` (e.g., `SUBEVAL_090526.csv`).
5. **Action:** Move this file into the same **"Watch Folder"** used in Step 1.1.

---

## Phase 2: Transformation via Excel Power Query (Optional but Recommended)

If the raw `SUPPLY_sYNTH.txt` file is too poorly formatted (`?` delimiters, broken columns) to be processed cleanly by basic Power Automate logic, use Excel's Power Query to clean it.

1. Create a "Master ETL Workbook" in Excel and save it to your OneDrive.
2. Go to **Data > Get Data > From File > From Folder**.
3. Point it to your local **Watch Folder**.
4. Set up a Power Query transformation that:
   - Filters to only the most recent `SUPPLY_sYNTH.txt`.
   - Splits the data by the specific delimiter (e.g., `%` or `?`).
   - Renames the columns based on our `headers.csv` dictionary.
5. Load the transformed data into a Table in the workbook.
6. **Workflow:** Whenever you drop a new file into the Watch Folder, simply open this workbook, click **Data > Refresh All**, and save.

---

## Phase 3: The Power Automate Workflow

This flow takes the cleaned data (either from the Watch Folder directly or via the Excel ETL workbook) and makes it available to the Master Planner HTML application.

### Prerequisites
- A Microsoft 365 account with Power Automate access.
- A designated SharePoint Document Library or a specific OneDrive folder that acts as the "Application Backend Directory" (where the HTML file lives or reads from).

### Building the Flow: "Sync 43workflow Data"

**Trigger:**
*   **Option A (Fully Automated):** `When a file is created or modified (properties only)` in your OneDrive **Watch Folder**.
*   **Option B (Manual/Button):** `Manually trigger a flow`. (Recommended if you are using the Excel Power Query step in Phase 2, so you can refresh the Excel file first).

**Actions:**

1.  **Get File Content:**
    *   Action: `Get file content` (OneDrive for Business or SharePoint).
    *   Target the cleaned `state.csv` (or the Master ETL Workbook output) and the `SUBEVAL_DDMMYY.csv` file.

2.  **Convert to JSON (If required by your HTML app):**
    *   *Note: If your Master Planner's Reconciliation Engine is designed to parse CSVs natively using a library like PapaParse, you can skip this step and just copy the CSVs.*
    *   If you need JSON: Use a 3rd party connector (like Plumsail) or an Office Script to parse the CSV text and map it to a JSON array.

3.  **Update the Application State:**
    *   Action: `Create file` or `Update file` (SharePoint or OneDrive).
    *   **File Path:** The directory where your Master Planner HTML file looks for its data (e.g., `/43workflow_app_data/`).
    *   **File Name:** Overwrite the existing `oais_state.csv` and `fitrep_state.csv` (or `.json`) so the Master Planner always has a consistent file name to fetch.
    *   **File Content:** The output from Step 1 (or Step 2).

4.  **Notification (Optional):**
    *   Action: `Post a message in a chat or channel` (Teams) or `Send an email` (Outlook).
    *   Message: "✅ 43workflow Data Sync Complete. The Master Planner now reflects the latest OAIS and FITREP data as of [Current Time]."

---

## Summary of the Daily Process for the User

Once set up, the "5-Step ETL Drill" is reduced to this daily habit:

1. Download the two raw files (`SUPPLY_sYNTH.txt` and `SUBEVAL_DDMMYY.csv`) from MIAP/BOL.
2. Save them into the OneDrive Watch Folder.
3. *(If using Power Query)* Open the Master ETL Excel file and hit "Refresh All", then Save.
4. Click the Power Automate "Sync Data" button (or let it trigger automatically).
5. Open the Master Planner HTML file. The system will now automatically diff the new data against your Intent and highlight any "Gotcha Moments."