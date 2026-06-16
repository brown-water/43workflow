# Navy AQD Display Titles Reference

This document provides display-optimized short titles for Additional Qualification Designation (AQD) codes. These titles are designed for use on Officer Summary Records (OSR) or digital officer cards where space is limited.

## 🛠 Transformation Logic
- **Bureaucratic Cleanup:** Terms like 'Functional Area Certified' $\rightarrow$ `CERT`, 'Management' $\rightarrow$ `MGMT`, 'Level' $\rightarrow$ `LVL`.
- **Aviation Intelligence:** Prioritizes Aircraft Type + ACTC Level (e.g., `F-18 LVL 3`) over generic descriptions.
- **Acquisition Logic:** Appends `CAP` (Critical Acquisition Position) or `KLP` (Key Leadership Position) based on AQD suffix.
- **Medical Clarity:** Formats as `Specialty: Sub-specialty` to ensure the most specific qualification is visible first.

## 📂 AQD Mappings by Category

### ASW & Undersea Warfare

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `BA1` | **ASW Non-Towed** | ASW Qualified - Qualified Non-Towed Array |
| `BA2` | **ASW Towed** | ASW Qualified - Qualified Towed Array |
| `BA3` | **ASW Key Mgr** | ASW Qualified - Key Manager |
| `BA4` | **ASW IUSS** | ASW Qualified - IUSS |
| `BA5` | **ASW IUSS Exp** | ASW Qualified - IUSS Experienced |
| `BA6` | **ASW TASWWO** | ASW Qualified - Theater Anti-Submarine Warfare Watch Officer (TASWWO) |
| `BA7` | **ASW TASW BWC** | ASW Qualified - Theater Anti-Submarine Warfare Battle Watch Captain (TASW BWC) |
| `BA8` | **ASW UCS** | ASW Qualified - Undersea Combat Systems Qualified |
| `BA9` | **IUSS SURTASS** | ASW Qualified - IUSS SURTASS Mission Commander |
| `BAA` | **ASW Acoustic** | ASW Qualified - Acoustic Watch Officer |
| `BAB` | **ASW IUSS Mstr** | ASW Qualified - IUSS Master |
| `BB0` | **BWC** | Staff Officer - Battle Watch Captain |
| `BB1` | **BWC – C10F** | Staff Officer - Battle Watch Captain – C10F |
| `BB2` | **BWC – C2F** | Staff Officer - Battle Watch Captain – C2F |
| `BB3` | **BWC – C3F** | Staff Officer - Battle Watch Captain – C3F |
| `BB4` | **BWC – C4F** | Staff Officer - Battle Watch Captain – C4F |
| `BB5` | **BWC – C5F** | Staff Officer - Battle Watch Captain – C5F |
| `BB6` | **BWC – C6F** | Staff Officer - Battle Watch Captain – C6F |
| `BB7` | **BWC – C7F** | Staff Officer - Battle Watch Captain – C7F |
| `BBF` | **BWC – USFF** | Staff Officer - Battle Watch Captain – USFF |
| `BBP` | **BWC – CPF** | Staff Officer - Battle Watch Captain – CPF |
| `BBZ` | **Staff OFF Maritime** | Staff Officer - Maritime |
| `BC8` | **Naval Aviation Supply OFF QUAL** | Naval Aviation Supply Officer - Qualified |
| `BD1` | **Naval Aviation Observer QUAL** | Naval Aviation Observer - Qualified |
| `BE1` | **AAW QUAL** | Anti-Air Warfare - Qualified |
| `BF1` | **AAW Technical Expert** | Anti-Air Warfare (Supersedes BE) - Technical Expert |
| `BG1` | **AAW Operational Expert** | Anti-Air Warfare (Supersedes BE) - Operational Expert |
| `BH0` | **Military Deception Planner** | Military Deception - Planner |
| `BI1` | **CW Basic** | Cryptologic Warfare (CW) - Basic |
| `BI3` | **CW/IW IO Coordinator/ Planner** | Crytologic Warfare (IW) - IO Coordinator/Planner |
| `BI4` | **IW NIOC OPS Director** | Information Warfare (IW) - NIOC Operations Director |
| `BIA` | **CW Tactical Airborne** | Cryptologic Warfare (CW) - Tactical Airborne |
| `BIS` | **CW Tactical Surface** | Cryptologic Warfare (CW) - Tactical Surface |
| `BIU` | **CW Tactical Subsurface** | Cryptologic Warfare (CW) - Tactical Subsurface |
| `BIW` | **CW Tactical NSW Spt** | Cryptologic Warfare (CW) - Tactical Naval Special Warfare Support |
| `BK1` | **Reserve Director (RPD) QUAL** | Reserve Program Director (RPD) - Qualified |
| `BL1` | **EW Apprentice** | Electromagnetic Warfare - Apprentice |
| `BL2` | **EW Journeyman** | Electromagnetic Warfare - Journeyman |
| `BL3` | **EW Expert** | Electronic Warfare - Expert |
| `BM1` | **MD Basic LVL BMD** | Missile Defense - Basic Level BMD |
| `BM2` | **MD Senior LVL BMD** | Missile Defense - Senior Level BMD |
| `BM3` | **MD MIPS course completion** | Missile Defense - MIPS course completion |
| `BM4` | **MD Junior Technical Engineer Supervisor** | Missile Defense - Junior Technical Engineer Supervisor |
| `BM5` | **MD Senior Technical Engineer Supervisor** | Missile Defense - Senior Technical Engineer Supervisor |
| `BN1` | **MW Basic** | Mine Warfare - Basic  |
| `BN2` | **MW QUAL Tactical Planner (Mining)** | Mine Warfare - Qualified Tactical Planner (Mining) |
| `BN3` | **MW Basic LVL (Counter Measures)** | Mine Warfare - Basic Level (Counter Measures) |
| `BN4` | **MW QUAL Tactical Planner (Counter Measures)** | Mine Warfare - Qualified Tactical Planner (Counter Measures) |
| `BN5` | **MW QUAL Operational** | Mine Warfare - Qualified Operational |
| `BO2` | **CNO Cyber Mission Leader** | Computer Network Operations (CNO) - Cyber Mission Leader |
| `BO3` | **CNO Cyber Service Planner** | Computer Network Operations (CNO) - Cyber Service Planner |
| `BO4` | **CNO Cyber Joint Planner** | Computer Network Operations (CNO) - Cyber Joint Planner |
| `BOC` | **CNO TI Cap Dev** | Computer Network Operations (CNO) - Technical Integration Officer – Capability Development |
| `BOD` | **CNO TI DCO** | Computer Network Operations (CNO) - Technical Integration Officer – Defensive Cyberspace Operations (DCO) |
| `BOO` | **CNO TI OCO** | Computer Network Operations (CNO) - Technical Integration Officer – Offensive Cyberspace Operations (OCO) |
| `BQ1` | **NRST LVL 1** | Navy Reserve Science and Technology Officer - Level 1 |
| `BQ2` | **NRST LVL 2** | Navy Reserve Science and Technology Officer - Level 2 |
| `BR0` | **Indo-Pac Cadre Entry QUAL** | Regional Cadre - Indo-Pacific Cadre Entry Qualified |
| `BR1` | **Indo-Pac Cadre Basic QUAL** | Regional Cadre - Indo-Pacific Cadre Basic Qualified |
| `BR2` | **Indo-Pac Cadre Fully Proficient QUAL** | Regional Cadre - Indo-Pacific Cadre Fully Proficient Qualified |
| `BR3` | **Indo-Pac Cadre Master** | Regional Cadre - Indo-Pacific Cadre Master  |
| `BR4` | **Indo-Pac Cadre Expert** | Regional Cadre - Indo-Pacific Cadre Expert |
| `BR5` | **Indo-Pac Cadre in Abeyance** | Regional Cadre - Indo-Pacific Cadre in  Abeyance  |
| `BS1` | **TLAM SEC OFF** | TLAM - Shipboard Engagement Control Officer |
| `BS2` | **TLAM Strike OFF** | TLAM - Shipboard Strike Officer Qualified |
| `BS3` | **TLAM Strike Exec** | TLAM - Strike Execution Officer |
| `BS4` | **TLAM Sr Strike** | TLAM - Senior Strike Officer TLAM OIC |
| `BS5` | **TLAM Planner** | TLAM - Mission Planner |
| `BS6` | **TLAM LNO** | TLAM - Liaison Officer |
| `BT1` | **Parachutist Static-line QUAL** | Parachutist - Static-line Qualified  |
| `BT2` | **Parachutist Freefall QUAL** | Parachutist - Freefall Qualified |
| `BU1` | **STO QUAL** | Special Technical Operations - Qualified |
| `BV1` | **SAP (SAP) Experienced Administrator** | Special Access Programs (SAP) - Experienced Administrator |
| `BV2` | **SAP (SAP) Experienced End User** | Special Access Programs (SAP) - Experienced End User |
| `BV3` | **SAP (SAP) Eligible** | Special Access Programs (SAP) - Eligible |
| `BX1` | **ExpW** | Expeditionary Warfare -  |
| `BX2` | **ExpW Fleet Marine Force (FMF) Warfare OFF** | Expeditionary Warfare - Fleet Marine Force (FMF) Warfare Officer |
| `BX3` | **ExpW Basic** | Expeditionary Warfare - Basic |
| `BYB` | **RMCT LVL B** | Requirements Management Certification Training (RMCT) - Level B |
| `BYC` | **RMCT LVL C** | Requirements Management Certification Training (RMCT) - Level C |
| `BZ1` | **Staff Fires LVL 1** | Staff Fires Officer - Staff Fires Level 1 |
| `BZ2` | **Staff Fires LVL 2** | Staff Fires Officer - Staff Fires Level 2 |
| `BZ3` | **Staff Fires LVL 3** | Staff Fires Officer - Staff Fires Level 3 |
| `BZA` | **Staff FIRES JOFE GRAD** | Staff FIRES - Graduate – Joint Operational Fires and Effects Course |
| `BZB` | **Staff FIRES Experienced** | Staff FIRES - Experienced |
| `BZC` | **Staff FIRES Advanced** | Staff FIRES - Advanced |

### Acquisition Management

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `A2E` | **Maj Mgr Elig** | Major Program Manager - Eligible |
| `A31` | **Acq Flag Elig** | Acquisition Line Community - Flag Eligible |
| `AA2` | **MGMT LVL 2** | Program Management - Level 2 Functional Area Certified |
| `AA4` | **MGMT LVL 4** | Program Management - Level 4 Functional Area Certified |
| `AAK` | **MGMT KLP** | Program Management - Key Leadership Position (KLP) |
| `AAN` | **MGMT Non-Crit** | Program Management - Non-Critical Acquisition Billet |
| `AAC` | **MGMT CAP** | Program Management - Critical Acquisition Position (CAP) |
| `AB2` | **Biz Cost Est LVL 2** | Business - Cost Estimating - Level 2 Functional Area  Certified |
| `AB3` | **Biz Cost Est LVL 3** | Business - Cost Estimating - Level 3 Functional Area Certified |
| `ABK` | **Biz Cost Est KLP** | Business - Cost Estimating - Key Leadership Position (KLP) |
| `ABN` | **Biz Cost Est Non-Crit** | Business - Cost Estimating - Non-Critical Acquisition Billet |
| `ACA` | **Contracting Cert** | Contracting - Contracting Professional Certified |
| `ACC` | **Contracting CAP** | Contracting - Critical Acquisition Position (CAP) |
| `ACK` | **Contracting KLP** | Contracting - Key Leadership Position (KLP) |
| `ACN` | **Contracting Non-Crit** | Contracting - Non-Critical Acquisition Billet |
| `ABC` | **Biz Cost Est CAP** | Business - Cost Estimating - Critical Acquisition Position (CAP) |
| `AK2` | **Biz Fin MGMT LVL 2** | Business -Financial Management - Level 2 Functional Area Certified |
| `AK4` | **Biz Fin MGMT LVL 4** | Business -Financial Management - Level 4 Functional Area Certified |
| `AKK` | **Biz Fin MGMT KLP** | Business - Financial Management - Key Leadership Position (KLP) |
| `AKN` | **Biz Fin MGMT Non-Crit** | Business - Financial Management - Non-Critical Acquisition Billet |
| `AKC` | **Biz Fin MGMT CAP** | Business - Financial Management - Critical Acquisition Position (CAP) |
| `AL1` | **LCL LVL 1** | Life Cycle Logistics - Level 1 Functional Area Certified |
| `AL3` | **LCL LVL 3** | Life Cycle Logistics - Level 3 Functional Area Certified |
| `ALK` | **LCL KLP** | Life Cycle Logistics - Key Leadership Position (KLP) |
| `ALN` | **LCL Non-Crit** | Life Cycle Logistics - Non-Critical Acquisition Billet |
| `ALC` | **LCL CAP** | Life Cycle Logistics - Critical Acquisition Position (CAP) |
| `AN1` | **Eng & Tech MGMT LVL 1** | Engineering and Technical Management - Level 1 Functional Area Certified |
| `AN2` | **Eng & Tech MGMT LVL 2** | Engineering and Technical Management - Level 2 Functional Area Certified |
| `ANK` | **Eng & Tech MGMT KLP** | Engineering and Technical Management - Key Leadership Position (KLP) |
| `ANN` | **Eng & Tech MGMT Non-Crit** | Engineering and Technical Management - Non-Critical Acquisition Billet |
| `APM` | **DoN Acq Prof** | DoN Acquisition Professional Member - Fully Qualified |
| `ANC` | **Eng & Tech MGMT CAP** | Engineering and Technical Management - Critical Acquisition Position (CAP) |
| `AT1` | **T&E LVL 1** | Test & Evaluation - Level 1 Functional Area Certified |
| `AT2` | **T&E LVL 2** | Test & Evaluation - Level 2 Functional Area Certified |
| `ATK` | **T&E KLP** | Test & Evaluation - Key Leadership Position (KLP) |
| `ATN` | **T&E Non-Crit** | Test & Evaluation - Non-Critical Acquisition Billet |
| `ATC` | **T&E CAP** | Test & Evaluation - Critical Acquisition Billet |

### Aviation (Fixed Wing)

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `DA0` | **Any Aircraft LVL II** | Light Attack - Pilot/NFO |
| `DA6` | **AV-8 LVL I** | Light Attack - Pilot |
| `DA7` | **F-18 LVL II** | Light Attack - Pilot/NFO |
| `DAA` | **Any Fighter LVL V** | Strike Warfare - Instructor |
| `DAB` | **All LVL I** | Attack - Strike Leader Graduate |
| `DAP` | **Aviator Permanent** | Aviator - Permanent |
| `DB0` | **Any Fighter LVL II** | Fighter - Pilot/NFO |
| `DB1` | **F-18E LVL V** | Fighter/Strike - Strike Fighter Tactics Instructor (SFTI) |
| `DB2` | **F-35C LVL I** | Fighter/Strike - Pilot |
| `DB3` | **F-5 Pilot** | Fighter/Strike - Pilot |
| `DB6` | **F-18E LVL I** | Fighter/Strike - Pilot/NFO |
| `DB7` | **FA-18E LVL V** | Fighter/Strike - TOPGUN Fighter Graduate |
| `DB8` | **F-18E Adversary GRAD** | Fighter/Strike - Adversary Graduate |
| `DB9` | **F-18E LVL V** | Fighter/Strike - TOPGUN Instructor |
| `DBA` | **F-16 Pilot/NFO** | Fighter - Pilot/NFO |
| `DBB` | **F-35C LVL IV** | Fighter - F-35 Package Commander/Team Lead |
| `DC5` | **MQ-4C LVL III** | Combat Support - ISR Patrol |
| `DC6` | **MQ-4C LVL IV** | Combat Support - Instructor ISR Patrol |
| `DCF` | **FA-18F FAC(A)** | Combat Support - Forward Air Controller (Airborne)/ FAC(A) |
| `DD1` | **E LVL I** | Combat Support - ECM Recon |
| `DD8` | **E-6B LVL I** | Combat Support - COMM |
| `DDA` | **E-6B Mercury Tactics** | Combat Support - Mercury Tactics Instructor |
| `DDB` | **EA-18G LVL V** | Combat Support - Growler Tactics Instructor |
| `DDC` | **EA-18G LVL IV** | Combat Support - Growler SEAD Lead |
| `DDD` | **EA-18G LVL III** | Combat Support - Growler Element Lead |
| `DE4` | **C-20 or C-37 Medium Jet Pilot** | Transport - Medium Jet Pilot |
| `DE5` | **C-40 Heavy Jet Pilot** | Transport - Heavy Jet Pilot |
| `DF0` | **Any ASW Aviator Training** | CNATRA - ASW Aviator Training |
| `DF5` | **P-8A LVL I** | Patrol - ASW Aviator |
| `DF6` | **P-8A LVL IV** | Patrol - ASW Instructor |
| `DF7` | **P-8A LVL V** | Patrol - Poseidon Weapons & Tactics Instructor (WTI) Pilot |
| `DF8` | **P-8A LVL 300** | Patrol - Advanced Airborne Sensor Tactical Officer  |
| `DG0` | **Any Pilot** | Jet - Pilot |
| `DG1` | **Any Instructor (Fleet Experience)** | CNATRA - Instructor (Fleet Experience) |
| `DG2` | **Any jet. Non-fleet experience Jet instructor** | CNATRA - Non-fleet experience Jet instructor |
| `DG3` | **Any Pilot** | Composite Jet - Pilot |
| `DG5` | **All. Pilot Training Jet** | CNATRA - Pilot Training Jet |
| `DG6` | **Any NFO Training-RIO** | CNATRA - NFO Training-RIO |
| `DG7` | **Any NFO Training-AJN** | CNATRA - NFO Training-AJN |
| `DG8` | **All. ASW NFO Instructor** | CNATRA - ASW NFO Instructor |
| `DG9` | **Any jet ASW NFO Instructor** | CNATRA - ASW NFO Instructor |
| `DGA` | **E-6B LVL IV** | CNATRA - TACOMO COMM NFO Instructor |
| `DH3` | **E-2D LVL I** | Airborne Command & Control - Pilot/NFO |
| `DH4` | **E-2D INSTR** | E-2D - CAPC Instructor/ CICO Instructor |
| `DH5` | **E-2D LVL V** | Airborne Command & Control - Hawkeye Weapons & Tactics Instructor (WTI) |
| `DI3` | **CMV-22B LVL I** | Tiltrotor - Transport Pilot |
| `DI4` | **CMV-22B LVL IV** | Tiltrotor - Flight Lead (TFL) Instructor |
| `DI5` | **CMV-22B LVL V** | Tiltrotor - Logistics Tactics Instructor (LTI) Pilot |
| `DIP` | **Instructor Permanent** | Instructor - Permanent |
| `DJ0` | **Any ASW** | Patrol - ASW |
| `DJ4` | **P-3C ASW** | Patrol - ASW |
| `DK0` | **ECM ECM/ELINT Training** | CNATRA - ECM/ELINT Training |
| `DK2` | **EP-3E LVL I** | Combat Support - ECM/ELINT Pilot/NFO |
| `DK6` | **SP P-3 LVL III** | Combat Support - Special Projects Pilot/NFO |
| `DK7` | **P-3 LVL 400I** | Special Projects - Instructor |
| `DK9` | **SP P-3 LVL V** | Training - Aries Weapons and Tactics Instructor (WTI) Pilot |
| `DL0` | **AEW Instructor Pilot** | Airborne Early Warning  - Instructor Pilot |
| `DL3` | **E-2C LVL I** | VAW - Airborne Command & Control Pilot |
| `DL4` | **E-2C LVL IV** | Airborne Early Warning - CAPC Instructor/ CICO Instructor Pilot |
| `DL5` | **E-2C LVL V** | Airborne Early Warning - Hawkeye Weapons and Tactics Instructor (WTI) Pilot |
| `DPI` | **UC-12 Utility Pilot** | Combat Support - Utility Pilot |
| `DQ4` | **C-130 Pilot** | Transport Heavy - Pilot |
| `DR0` | **Any Medium Transport LVL II** | Transport - Pilot |
| `DS0` | **Any (Carrier Trans) Pilot** | Carrier Transport - Pilot |
| `DS2` | **C-2A LVL I** | CVN Transport - Carrier Onboard  Delivery (COD) Pilot |
| `DS3` | **C-2A LVL IV** | CVN Transport - Carrier Transport Plane Commander (CTPC) Instructor Pilot |
| `DS4` | **C-2A LVL V** | CVN Transport - Logistics Tactics Instructor (LTI) Pilot |
| `DT0` | **Any Pilot** | General Prop - Pilot |
| `DT1` | **Any Prop Fleet Experience Prop Instructor** | Training - Prop - Fleet Experience Prop Instructor |
| `DT2` | **Any Prop Non-Fleet experience Prop Instructor** | CNATRA - Non-Fleet experience Prop Instructor |
| `DT3` | **Any Prop Pilot/NFO** | Composite - Pilot/NFO |
| `DT4` | **P-3C LVL V** | Training - Orion Weapons & Tactics Instructor (WTI) Pilot |
| `DT5` | **Any Prop Pilot Training** | CNATRA - Prop Pilot Training |
| `DT6` | **Any Prop LVL III** | CNATRA - NFO NAV Training |
| `DT7` | **Any Prop LVL III** | CNATRA - NFO ATDS Training |
| `DT8` | **Any Prop LVL III** | CNATRA - NFO AEW Training |
| `DU1` | **All Commander CMD** | Command (Unit) - Commander Command |
| `DU2` | **All Second Commander CMD** | Command (Unit) - Second Commander Command |
| `DU3` | **All Captain CMD** | Command (Unit) - Captain Command |
| `DUT` | **P-8A/MQ-4C LVL 300** | Combat Support - Maritime Patrol Mission Commander |
| `DUV` | **F-18/F-35C LVL III** | Combat Support - Air Interdiction Mission Commander |
| `DUW` | **F-18/MH-60 LVL III** | Combat Support - Rescue Mission Commander |
| `DUX` | **EA-18G LVL III SEAD** | Combat Support - SEAD Mission Commander |
| `DUY` | **E2C LVL III TAC C2** | Combat Support - TAC C2 Mission Commander |
| `DUZ` | **MH-60 LVL III MRW** | Combat Support - Maritime Rotary Wing Mission Commander |
| `DV0` | **Any Helicopter LVL II** | ASW - Pilot |
| `DV5` | **MH-60R LVL I** | Anti-Submarine Warfare - Pilot |
| `DW0` | **Any helicopter LVL I** | Combat Support - SAR/MCM/Logistics Pilot |
| `DW1` | **UH-3 Attack/SAR/ Logistics Pilot** | Combat Support - Attack/SAR/Logistics Pilot |
| `DW4` | **A SAR/Logistics Pilot** | Combat Support - SAR/Logistics Pilot |
| `DW7` | **CH-53 LVL II** | Combat Support - SAR/Logistics |
| `DW8` | **MH-53 LVL I** | Combat Support - SAR/MCM/Logistics Pilot |
| `DWA` | **MH-60S LVL I** | Combat Support - BASIC/PQM Pilot |
| `DWB` | **MH-60S LVL II SAR** | Combat Support - SAR/Logistics Pilot |
| `DWC` | **MH-60S LVL II CSAR** | Combat Support - Combat SAR Pilot |
| `DWD` | **MH-60S LVL II MW** | Combat Support - Mine Warfare Pilot |
| `DWE` | **MH-60S LVL III SpW** | Combat Support - Special Warfare Pilot |
| `DY0` | **Any Helicopter Helo Instructor Pilot (Fleet Experience)** | General - Helo Instructor Pilot (Fleet Experience) |
| `DY1` | **Any Helicopter Helo Instructor Pilot (Fleet Experience)** | Rotary Wing - Helo Instructor Pilot (Fleet Experience) |
| `DY2` | **H-60 LVL V** | Rotary Wing - Seahawk Weapons & Tactics Instructor (WTI) Pilot |
| `DY3` | **Any Helicopter Helo Instructor Pilot (Fleet Experience)** | Composite - Helo Instructor Pilot (Fleet Experience) |
| `DY5` | **Any Helicopter Pilot Training** | Rotary Wing - Pilot Training |
| `DY8` | **MQ-8 LVL 1** | Rotary Wing - MQ-8 Air Vehicle Operator (AVO) |
| `DY9` | **Helo INSTR** | Helo - MQ-8 Air Vehicle Operator (AVO) Instructor |
| `DZ2` | **Any UAV Vehicle** | Unspecified - Vehicle |
| `DZ3` | **Any UAS Vehicle** | Training/Experience - Vehicle |
| `DZ7` | **Any UAS Non-Fleet Experienced UAS** | Training/Experience - Non-Fleet Experienced UAS |
| `DZ8` | **Any UAV Vehicle** | Unmanned Air - Vehicle |
| `DZ9` | **Training/ Experience F-35 Mission Planning OFF** | Training/Experience - F-35 Mission Planning Officer |
| `DZA` | **JAOC2C GRAD** | Training/Experience - Graduate – Joint Air Operations Command and Control Course (JAOC2C GRAD) |
| `DZB` | **AOC EXER** | Training/Experience - AOC experience – Exercise Only (AOC EXER) |
| `DZC` | **AOC QUAL** | Training/Experience - AOC Qualified (AOC QUAL) |
| `DZD` | **AOC OP EXP** | Training/Experience - AOC Operational Experience (AOC OP EXP) |
| `DZE` | **NALE LNO EMB** | Training/Experience - Naval and Amphibious Liaison Element (NALE) Liaison Officer, Embarked (NALE LNO EMB) |
| `DZF` | **AOC OPS IQT GRAD** | Training/Experience - Graduate – AOC Combat Operations IQT course (AOC OPS) |
| `DZG` | **AOC PLANS IQT GRAD** | Training/Experience - Graduate – AOC Combat Plans IQT course (AOC PLANS) |
| `DZH` | **AOC AIRSPACE GRAD** | Training/Experience - Graduate – AOC Airspace IQT course (AOC AIRSPACE) |
| `DZI` | **AOC STRAT GRAD** | Training/Experience - Graduate – AOC Strategy IQT course (AOC STRAT) |
| `DZJ` | **AOC ISR GRAD** | Training/Experience - Graduate – AOC ISR IQT course (AOC ISR) |
| `DZK` | **AOC PR GRAD** | Training/Experience - Graduate – AOC Personnel Recovery IQT course (AOC PR) |
| `DZL` | **AOC ICO GRAD** | Training/Experience - Graduate – AOC ICO IQT course (AOC ICO) |
| `DZM` | **C2WAC GRAD** | Joint Air Operations - Graduate – Command & Control Warrior Advanced Course (C2WAC GRAD) |
| `DZN` | **J/CSSC or ACSLC GRAD** | Training/Experience - Graduate – Joint or Combined Senior Staff Course (J/CSSC) Or Air Component Senior leader Course (ACSLC) |
| `DZP` | **TacMobile** | Training/Experience - TacMobile |
| `DZQ` | **ASO GRAD** | Training/Experience - Graduate – Aviation Safety Officer course (ASO GRAD) |
| `DZR` | **Avionics** | Training/Experience - Avionics |
| `DZS` | **MISR WTI GRAD** | Training/Experience - MISR WTI GRAD |
| `DZT` | **CRMI GRAD** | Training/Experience - Graduate - Crew Resource Management Instructor (CRMI GRAD) |

### Aviation (Rotary/LSO)

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `EA5` | **E Field QUAL** | LSO - Field Qualified |
| `EAU` | **F-35C Field LSO** | Field Qualified - Landing Signal Officer |
| `EAY` | **F-18 Field LSO** | Field Qualified - Landing Signal Officer |
| `EA8` | **C-2 Landing Signal OFF** | Field Qualified - Landing Signal Officer |
| `EB8` | **C-2 Landing Signal OFF** | Squadron - Landing Signal Officer |
| `EBU` | **F-35C Sqdn LSO** | Squadron - Landing Signal Officer |
| `EBY` | **F-18 Sqdn LSO** | Squadron - Landing Signal Officer |
| `EC8` | **C-2 Landing Signal OFF** | Wing - Landing Signal Officer |
| `ECG` | **Training Jet WING LSO** | LSO - WING LSO CVN |
| `ECU` | **F-35C Wing LSO** | Wing - Landing Signal Officer |
| `ECY` | **F-18 Wing LSO** | Wing - Landing Signal Officer |
| `ED2` | **Training Jet TRV LSO CVN** | LSO - TRV LSO CVN |
| `EDU` | **F-35C Train LSO** | Training - Landing Signal Officer |
| `EDY` | **F-18 Train LSO** | Training - Landing Signal Officer |
| `EF5` | **E SFV LSO CVN** | LSO - SFV LSO CVN |
| `EF8` | **C-2 Landing Signal OFF** | Staff - Landing Signal Officer |
| `EFU` | **F-35C Staff LSO** | Staff - Landing Signal Officer |
| `EFY` | **F-18 Staff LSO** | Staff - Landing Signal Officer |
| `ER8` | **Training C-2 Landing Signal OFF** | Training - Landing Signal Officer |
| `EY8` | **C-2 Landing Signal OFF** | Graduate - Landing Signal Officer |
| `EYU` | **OTHER/F-35C Schl GRAD** | LSO - School Graduate |
| `EYY` | **F-18 School GRAD** | LSO - School Graduate |
| `EZ5` | **E School GRAD** | LSO - School Graduate |
| `EZ8` | **C-2 School GRAD** | LSO - School Graduate |
| `EZU` | **OTHER/F-35C Schl GRAD** | LSO - School Graduate |
| `EZY` | **F-18 School GRAD** | LSO - School Graduate |

### Category F

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `FA1` | **QUAL Middle East, South Asia Region (CENTCOM)** | Qualified - Middle East, South Asia Region (CENTCOM) |
| `FA2` | **QUAL East Asia, Pacific Region (INDOPACOM)** | Qualified - East Asia,   Pacific Region (INDOPACOM) |
| `FA3` | **QUAL Western Hemisphere Region (SOUTHCOM)** | Qualified - Western Hemisphere Region (SOUTHCOM) |
| `FA4` | **QUAL Europe, Eurasia Region (EUCOM)** | Qualified - Europe, Eurasia Region (EUCOM) |
| `FA5` | **QUAL Africa (AFRICOM)** | Qualified - Africa (AFRICOM) |
| `FE1` | **Foreign Expertise Foreign Generalist** | Foreign Expertise - Foreign Generalist |
| `FFQ` | **Flying QUAL** | Flying - Qualified |
| `FM1` | **Milestone Selected** | Milestone - Selected |
| `FM2` | **Milestone Completed** | Milestone - Completed |
| `FM3` | **Milestone Major Selected** | Milestone - Major Selected |
| `FM4` | **Milestone Major Completed** | Milestone - Major Completed |
| `FS1` | **SCWDP 2.0 Awareness/ Foundational** | Security Cooperation Workforce Development Program (SCWDP) 2.0 - Awareness/ Foundational |
| `FS2` | **SCWDP 2.0 Practitioner** | Security Cooperation Workforce Development Program (SCWDP) 2.0 - Practitioner |
| `FS3` | **SCWDP 2.0 Expert** | Security Cooperation Workforce Development Program (SCWDP) 2.0 - Expert |
| `FS4` | **SCWDP 2.0 Executive** | Security Cooperation Workforce Development Program (SCWDP) 2.0 - Executive |
| `FT1` | **In Training Middle East, South Asia Region (CENTCOM)** | In Training - Middle East, South Asia Region (CENTCOM) |
| `FT2` | **In Training East Asia, Pacific Region (INDOPACOM)** | In Training - East Asia, Pacific Region (INDOPACOM) |
| `FT3` | **In Training Western Hemisphere Region (SOUTHCOM)** | In Training - Western Hemisphere Region (SOUTHCOM) |
| `FT4` | **In Training Europe, Eurasia Region (EUCOM)** | In Training - Europe, Eurasia Region (EUCOM) |
| `FT5` | **In Training Africa (AFRICOM)** | In Training - Africa (AFRICOM) |

### Category I

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `IL1` | **Logistics Maintenance** | Logistics - Maintenance |
| `IL2` | **Logistics Advanced** | Logistics - Advanced |
| `IL3` | **Logistics Support** | Logistics - Support |
| `IL4` | **Logistics Depot** | Logistics - Depot |
| `IL5` | **Logistics Major FRC** | Logistics - Major FRC |
| `IL6` | **Logistics PAMO PQS** | Logistics - PAMO PQS |

### Category N

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `NAVAL WARFARE (GENERAL)` | **** |  -  |
| `NR1` | **Financial MGMT CDFM** | Financial Management - CDFM |
| `NR2` | **Financial MGMT CDFM-A** | Financial Management - CDFM-A |
| `NS1` | **DoD Financial MGMT Certification LVL 1** | DoD Financial Management Certification - Level 1 |
| `NS2` | **DoD Financial MGMT Certification LVL 2** | DoD Financial Management Certification - Level 2 |
| `NS3` | **DoD Financial MGMT Certification LVL 3** | DoD Financial Management Certification - Level 3 |

### Category O

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `OCEANOGRAPHY (METOC)` | **** |  -  |

### Command & Leadership

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `CA1-6` | **Grade LVL* CMD** | Division Officer - Grade level* |
| `CB1-6` | **Grade LVL* CMD** | Department Head - Grade level* |
| `CBB` | **SIM Dept Head** | Shore Installation Management - Department Head |
| `CBC` | **SIM XO** | Shore Installation Management - Executive Officer |
| `CBD` | **SIM OIC** | Shore Installation Management - Officer in Charge |
| `CBE` | **SIM Shore CMD** | Shore Installation Management - Shore Command |
| `CBF` | **SIM Maj Shore CMD** | Shore Installation Management - Major Shore Command |
| `CBJ` | **SIM Post-Maj Shore CMD** | Shore Installation Management - Post-Major Shore Command |
| `CC1-6` | **Grade LVL* CMD** | Executive Officer - Grade level* |
| `CD1-6` | **Grade LVL* CMD** | Officer-in-charge - Grade level* |
| `CE1-6` | **Grade LVL* CMD** | Shore Command - Grade level* |
| `CF1-6` | **Grade LVL* CMD** | Major Shore Command - Grade level* |
| `CG1-6` | **Grade LVL* CMD** | Deputy Project Manager - Grade level* |
| `CH1-6` | **Grade LVL* CMD** | Major Project Manager - Grade level* |
| `CHAPLAIN CORPS (CHC)` | **CMD** |  -  |

### Education & Scholarships

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `211` | **Burke Scholar** | Scholarship - Burke Scholar |
| `213` | **Daedalian Sch** | Scholarship - Daedalian Scholar |
| `214` | **Fulbright Sch** | Scholarship - Fulbright Scholar |
| `215` | **Guggenheim Sch** | Scholarship - Guggenheim Scholar |
| `216` | **Hertz Scholar** | Scholarship - Hertz Scholar |
| `217` | **Morrison Scholar** | Scholarship - Morrison Scholar |
| `218` | **NSF Scholar** | Scholarship - National Science Foundation Program |
| `219` | **Olmsted Scholar** | Scholarship - Olmsted Scholar |
| `221` | **Rhodes Scholar** | Scholarship - Rhodes Scholar |
| `222` | **Scholarship Winston Churchill Foundation** | Scholarship - Winston Churchill Foundation |
| `223` | **Other Scholar** | Scholarship - Other Scholarship |
| `224` | **Faculty Scholar** | Scholarship - Faculty |
| `225` | **PE Staff Sch** | Scholarship - Physical Education Staff |
| `226` | **Conrad Scholar** | Scholarship - Conrad Scholar |
| `227` | **ExecAnal/WC Cert** | Scholarship - Executive Analysis for the Warfare Commander Certificate |
| `229` | **Op Law GRAD** | Scholarship - Operational Law Graduate |
| `231` | **JCS Intern** | Scholarship - JCS Intern |
| `233` | **WH Fellowship** | Scholarship - White House Fellowship |
| `234` | **Legislative Flwp** | Scholarship - Legislative Fellowship |
| `235` | **Legislative Assignment** | Legislative - Assignment |
| `241` | **Asia-Pac Sch** | Scholarship - Asia –Pacific |
| `242` | **W Hemisphere Sch** | Scholarship - Western Hemisphere |
| `243` | **Africa Studies** | Scholarship - Africa Studies Concentration |
| `244` | **Mid East Studies** | Scholarship - Middle East Studies Concentration |
| `245` | **Corp Strat Plan** | Scholarship - Corporate Strategic Planning |
| `246` | **EURASIA Studies** | Scholarship - EURASIA Studies Concentration |
| `247` | **Theater/Natl Strat** | Scholarship - Theater/ National Strategic Planner |
| `248` | **Insur & Terror** | Scholarship - Insurgency and Terrorism |
| `249` | **IO/C2/BSA Sch** | Scholarship - Information Operations, Command and Control and Battle Space Awareness |
| `24A` | **PolMil Scholar** | Scholarship - Politico-Military Masters Scholar |
| `24B` | **Moreau Scholar** | Scholarship - Arthur S Moreau Scholar |
| `24C` | **Fed Exec Fellow** | Scholarship - Federal Executive Fellow |
| `24D` | **Hudson Fellow** | Scholarship - Hudson Fellow |
| `24E` | **CFR Fellow** | Scholarship - CFR Navy Fellow |
| `24F` | **SECDEF Exec Flw** | Scholarship - SECDEF Executive Fellow |
| `24G` | **SECNAV TwI** | Scholarship - SECNAV Tours with Industry |
| `24H` | **FSEP Scholar** | Scholarship - Fleet Scholars Education Program (FSEP) |
| `24I` | **AFVentures Fellowship** | AFVentures - Fellowship |
| `24J` | **Defense Advanced Research Projects Agency (DARPA) Fellowship** | Defense Advanced Research Projects Agency (DARPA) - Fellowship |
| `261` | **Leadership Training Courses Instructor** | Leadership Training Courses - Instructor |
| `271` | **Halsey Alpha** | Scholarship - Halsey Group Alfa |
| `272` | **Halsey Bravo** | Scholarship - Halsey Group Bravo |
| `273` | **Gravely Group** | Scholarship - Gravely Group |
| `275` | **Mahan Scholar** | Scholarship - Mahan Scholars |
| `276` | **HS/HD Scholar** | Scholarship - Homeland Security / Homeland Defense (HS/HD) |
| `278` | **Holloway Group** | Scholarship - Holloway Group |
| `279` | **Humanitarian Assistance Disaster Relief** | Humanitarian Assistance - Disaster Relief |
| `282` | **Jr IRGE Screened** | Education - Junior In-residence Graduate Education (IRGE) Screened |
| `283` | **Sr IRGE Screened** | Education - Senior In-residence Graduate Education (IRGE) Screened |
| `284` | **IGEP/VGEP** | Education - Immediate Graduate Education Program/Voluntary Graduate Education Program (IGEP/VGEP) |
| `285` | **IRGE Complete** | Education - In-residence Graduate Education (IRGE) Completed |
| `286` | **Human Factor/Primary Prevention Analysis** | Human Factor/Primary Prevention - Analysis |
| `287` | **Ops Anal Computational OPS Research** | Operations Analysis  - Computational Operations Research |
| `288` | **Ops Anal Warfare Analysis** | Operations Analysis  - Warfare Analysis |
| `289` | **Ops Anal Manpower Analysis** | Operations Analysis  - Manpower Analysis |
| `290` | **Ops Anal Data Science** | Operations Analysis  - Data Science |
| `291` | **SWIC Fellow** | Strategic Warfighting Innovation Cell (SWIC) - Fellow |
| `292` | **Warrior Toughness** | Warrior Toughness - Command Advisor |
| `293` | **Cert Coach LVL 1** | Certified Navy Coach - Level 1 |
| `294` | **Cert Coach LVL 2** | Certified Navy Coach - Level 2 |
| `295` | **Cred Coach LVL 2** | Credentialed Navy Coach - Level 2 |
| `296` | **Cert Coach LVL 3** | Certified Navy Coach - Level 3 |
| `297` | **Cred Coach LVL 3** | Credentialed Navy Coach - Level 3 |
| `298` | **Cert Coach LVL 4** | Certified Navy Coach - Level 4 |
| `299` | **Cred Coach LVL 4** | Credentialed Navy Coach - Level 4 |
| `29A` | **Cert Coach LVL 5** | Certified Navy Coach - Level 5 |
| `29B` | **Cred Coach LVL 5** | Credentialed Navy Coach - Level 5 |
| `29D` | **Adv Warrior T Trainer** | Advanced Warrior Toughness - Trainer |
| `29E` | **Adv Warrior T Master Trainer** | Advanced Warrior Toughness - Master Trainer |
| `29H` | **MASCAL** | Mass - Casualty Operations |
| `29I` | **Reintegration Phase III** | Reintegration - Phase III |
| `29L` | **Ops Anal Warfare Analysis - Intermediate** | Operations Analysis - Warfare Analysis - Intermediate |
| `29M` | **Ops Anal Manpower Analysis - Intermediate** | Operations Analysis - Manpower Analysis - Intermediate |
| `29N` | **Ops Anal Warfare Analysis - Advanced** | Operations Analysis - Warfare Analysis - Advanced |
| `29P` | **Ops Anal Manpower Analysis - Advanced** | Operations Analysis - Manpower Analysis - Advanced |
| `29Q` | **Ops Anal Cross- Disciplinary Advanced** | Operations Analysis - Cross- Disciplinary Advanced |
| `29R` | **WH Presid Badge** | White House Military Office - Presidential Service Badge Qualified |
| `29S` | **Safety PROF** | Safety - Professional |
| `2A1` | **PMP PMP Select** | Permanent Military Professor - PMP Select |
| `2A2` | **PMP PMP QUAL** | Permanent Military Professor - PMP Qualified |
| `2A3` | **PMI PMI Select** | Permanent Military Instructor - PMI Select |
| `2A4` | **PMI PMI QUAL** | Permanent Military Instructor - PMI Qualified |
| `2B1` | **Eisenhower School Supply Chain MGMT Concentration** | Eisenhower School - Supply Chain Management Concentration Program |
| `2C1` | **Continuous Process Improvement (CPI) Green Belt Certified** | Continuous Process Improvement (CPI) - Green Belt Certified |
| `2C2` | **Continuous Process Improvement (CPI) Black Belt Certified** | Continuous Process Improvement (CPI) - Black Belt Certified |
| `2C5` | **Combat System SPEC Intermediate LVL** | Combat System Specialist - Intermediate Level |
| `2D1` | **CMD Qualification Eligible** | Command Qualification Program - Eligible |
| `2D2` | **CMD Qualification CMD QUAL** | Command Qualification Program - Command Qualified |
| `2D3` | **CMD Qualification Major CMD QUAL** | Command Qualification Program - Major Command Qualified |
| `2D4` | **CMD Qualification Major CMD Screen** | Command Qualification Program - Major Command Screen |
| `2F1` | **Facilitator RDIVLOC/RILC** | Facilitator - RDIVLOC/RILC |
| `2F2` | **Facilitator SOLC** | Facilitator - SOLC |
| `2GI` | **NAVIG Inspector** | NAVIG - Inspector |
| `2GV` | **NAVIG Investigator** | NAVIG - Investigator |
| `2II` | **INSURV Inspector** | INSURV - Inspector |
| `2MT` | **MTS** | Master - Training Specialist |
| `2N1` | **NR Augm CO/OIC Eligible** | Navy Reserve Augment Unit Commanding Officer/Officer In Charge Qualification - Eligible |
| `2N2` | **NR Augm CMD Qual CMD Complete** | Navy Reserve Augment Unit Command Qualification - Command Complete |
| `2N3` | **** |  -  |
| `2N4` | **** |  -  |
| `2N5` | **CMD Qualification Junior Strategic Weapons CMD Qualification** | Command Qualification  - Junior Strategic Weapons Command Qualification |
| `2N6` | **CMD Qualification Senior Strategic Weapons CMD Qualification** | Command Qualification  - Senior Strategic Weapons Command Qualification |
| `2P2` | **PMP Cert** | Project Management - Certified Project Management Professional (PMP) |
| `2PT` | **CFL** | Physical Readiness Program - Command Fitness Leader |

### Engineering Duty

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `800` | **Reg Prof Engr** | Registered Professional Engineer (PROENG) |
| `801` | **SWO-EDO TCT Candidate** | SWO-EDO TCT Program Candidate |

### Expeditionary/Naval Construction

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `LA5` | **Surface Afloat Head** | Surface Afloat - Department Head |
| `LA6` | **QUAL Chaplain Corps** | Qualified - Chaplain Corps |
| `LA7` | **QUAL Medical** | Qualified - Medical Department |
| `LA8` | **QUAL Supply Corps** | Qualified - Supply Corps |
| `LA9` | **QUAL Surface Warfare** | Qualified - Surface Warfare |
| `LAB` | **AEI Steam Cert** | Advanced Engineering Instructors (AEI) - Completed Steam Specialty Training |
| `LAC` | **AEI Certified** | Advanced Engineering Instructors (AEI) - Certified AEI |
| `LAD` | **AEI Diesel Cert** | Advanced Engineering Instructors (AEI) - Completed Diesel Specialty Training |
| `LAG` | **AEI Gas Turbine Cert** | Advanced Engineering Instructors (AEI) - Completed Gas Turbine Specialty Training |
| `LAH` | **AEI Hybrid Cert** | Advanced Engineering Instructors (AEI) - Completed Hybrid Specialty Training |
| `LAS` | **AEI Selected** | Advanced Engineering Instructors (AEI) - Selected AEI |
| `LB2` | **QUAL OOD Fleet Maneuvers Task Group/Force OPS** | Qualified OOD - Fleet Maneuvers Task Group/Force Operations |
| `LB3` | **QUAL OOD CDO Underway** | Qualified OOD - CDO Underway |
| `LC1` | **Engineering EOOW (Steam)** | Engineering - EOOW (Steam) |
| `LC2` | **Engineering EOOW (Diesel)** | Engineering - EOOW (Diesel) |
| `LC3` | **Engineering EOOW (Gas Turbine)** | Engineering - EOOW (Gas Turbine) |
| `LC5` | **Engineering EOOW (CVN)** | Engineering - EOOW (CVN) |
| `LC6` | **Engineering EOOW (LCS, Lockheed Martin Hull)** | Engineering - EOOW (LCS, Lockheed Martin Hull) |
| `LC7` | **Engineering EOOW (LHD/LHA Gas Turbine Electric)** | Engineering - EOOW (LHD/LHA Gas Turbine Electric) |
| `LC8` | **Engineering EOOW (ZUMWALT Class DDG Gas Turbine Electric)** | Engineering - EOOW (ZUMWALT Class DDG Gas Turbine Electric) |
| `LC9` | **Engineering EOOW (LCS, General Dynamics Hull)** | Engineering - EOOW (LCS, General Dynamics Hull) |
| `LD9` | **Weapons Control QUAL** | Weapons Control - Qualified |
| `LF6` | **Evaluator/ Tactical Action OFF QUAL in Non-NTDS equipped unit** | Evaluator/ Tactical Action Officer - Qualified in Non-NTDS equipped unit |
| `LF7` | **Evaluator/ Tactical Action OFF QUAL in NTDS equipped unit** | Evaluator/ Tactical Action Officer - Qualified in NTDS equipped unit |
| `LF9` | **Weapons Systems Employment Hostile Engagement/Combat** | Weapons Systems Employment - Hostile Engagement/Combat |
| `LG1` | **Navigation Expert Surface Ship** | Navigation Expert - Surface Ship |
| `LG2` | **Navigation Expert Navigator/ Assistant Navigator, CVN** | Navigation Expert - Navigator/ Assistant Navigator, CVN |
| `LK8` | **Executive OFF Afloat Surface Screened** | Executive Officer Afloat - Surface Screened |
| `LK9` | **Executive OFF Afloat (LCDR and above) Unspecified** | Executive Officer Afloat (LCDR and above) - Unspecified |
| `LN1` | **CMD LT CMD** | Command - LT Command |
| `LN2` | **CMD LCDR CMD** | Command - LCDR Command |
| `LN3` | **CMD CDR CMD** | Command - CDR Command |
| `LN4` | **CMD CAPT CMD** | Command - CAPT Command |
| `LN7` | **CMD QUAL Surface CMD Commander** | Command - Qualified Surface Command Commander |
| `LN8` | **CMD Sequential CMD Captain** | Command - Sequential Command Captain |
| `LN9` | **Combat Air Controller** | Combat - Air Controller |
| `LOA` | **OFF ED Option** | Option Officer - ED Option |
| `LOB` | **OFF IP Option** | Option Officer - IP Option |
| `LOC` | **OFF IW Option** | Option Officer - IW Option |
| `LOD` | **OFF OCN Option** | Option Officer - OCN Option |
| `LOE` | **OFF Intel Option** | Option Officer - Intelligence Option |
| `LQ1` | **NCAGS Basic LVL 1** | NCAGS - Basic Level 1 |
| `LQ2` | **NCAGS Basic LVL 2** | NCAGS - Basic Level 2 |
| `LQA` | **NCAGS SCT Afloat** | NCAGS - Shipping Coordination Team (SCT) Afloat |
| `LQN` | **NCAGS Convoy Nav** | NCAGS - Convoy Navigator |
| `LQP` | **NCAGS Convoy Plan** | NCAGS - Convoy Planner |
| `LQW` | **NCAGS MSCAT WO** | NCAGS - Maritime Security Center Augmentation Teams (MSCAT) Watch Officer |
| `LS0` | **Spec Career Path Education and Training MGMT** | Specialty Career Path - Education and Training Management |
| `LS1` | **Spec Career Path MD** | Specialty Career Path - Missile Defense |
| `LS2` | **Spec Career Path AT/FP** | Specialty Career Path - AT/FP |
| `LS3` | **Spec Career Path Anti-Submarine Warfare** | Specialty Career Path - Anti-Submarine Warfare |
| `LS4` | **Spec Career Path MW** | Specialty Career Path - Mine Warfare |
| `LS5` | **Spec Career Path Shore Installation MGMT** | Specialty Career Path - Shore Installation Management |
| `LS6` | **Spec Career Path Strategic Sealift** | Specialty Career Path - Strategic Sealift |
| `LS7` | **Spec Career Path Financial MGMT** | Specialty Career Path - Financial Management |
| `LS8` | **Spec Career Path Naval Operational Planner** | Specialty Career Path - Naval Operational Planner |
| `LS9` | **Spec Career Path Ops Anal** | Specialty Career Path - Operations Analysis |
| `LT1` | **TDL ICO QUAL** | Tactical Digital Information Link (TDL) Officer - Qualified  Interface Control Officer (ICO) |
| `LT2` | **TDL JICO QUAL** | Tactical Digital Information Link (TDL) Officer - Qualified Joint Interface Control Officer (JICO) |
| `LT3` | **JICO Tour Cmplt** | Joint Interface Control Officer (JICO)  - Tour Complete |
| `LTS` | **JICO Screened** | Joint Interface Control Officer (JICO) - Screened |
| `LV1` | **Naval Culture Workshop (NCW) Facilitator** | Naval Culture Workshop (NCW) - Facilitator |
| `LV2` | **Naval Culture Workshop (NCW) Lead Facilitator** | Naval Culture Workshop (NCW) - Lead Facilitator |

### Human Resources

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `RA1` | **Human Resource OFF PHR** | Human Resource Officer - PHR |
| `RA2` | **Human Resource OFF SPHR** | Human Resource Officer - SPHR |
| `RA3` | **Human Resource OFF GPHR** | Human Resource Officer - GPHR |
| `RA4` | **Human Resource OFF CPT** | Human Resource Officer - CPT |
| `RB4` | **HR Milestone Assignment Lieutenant Commander** | HR Milestone Assignment - Lieutenant Commander |
| `RB5` | **HR Milestone Assignment Commander** | HR Milestone Assignment - Commander |
| `RB6` | **HR Milestone Assignment Captain** | HR Milestone Assignment - Captain |
| `RDX*` | **Development Relative experience indicated by code.** | Development - Relative experience indicated by code. |
| `REX*` | **MGMT Relative experience indicated by code.** | Management - Relative experience indicated by code. |
| `RFX*` | **Recruiting Relative experience indicated by code.** | Recruiting - Relative experience indicated by code. |
| `RGX*` | **Requirements Relative experience indicated by code.** | Requirements - Relative experience indicated by code. |
| `RH4` | **HR Headquarters Lieutenant Commander** | HR Headquarters - Lieutenant Commander |
| `RH5` | **HR Headquarters Commander** | HR Headquarters - Commander |
| `RIA` | **Force Dev Novice** | Force Development - Novice |
| `RIB` | **Force Dev Interm** | Force Development - Intermediate |
| `RIC` | **Force Dev Advanced** | Force Development - Advanced |
| `RID` | **Force Dev Expert** | Force Development - Expert |
| `RJA` | **Force Mgmt Novice** | Force Management - Novice |
| `RJB` | **Force Mgmt Interm** | Force Management - Intermediate |
| `RJC` | **Force Mgmt Advanced** | Force Management - Advanced |
| `RJD` | **Force Mgmt Expert** | Force Management - Expert |
| `RKA` | **Force Req&Res Novice** | Force Requirements and Resourcing - Novice |
| `RKB` | **Force Req&Res Interm** | Force Requirements and Resourcing - Intermediate |
| `RKC` | **Force Req&Res Adv** | Force Requirements and Resourcing - Advanced |
| `RKD` | **Force Req&Res Expert** | Force Requirements and Resourcing - Expert |
| `RIX*` | **Force Dev Relative experience indicated by code** | Force Development - Relative experience indicated by code |
| `RJX*` | **Force Mgmt Relative experience indicated by code** | Force Management - Relative experience indicated by code |
| `RKX*` | **Force Req & Res Relative experience indicated by code** | Force Requirements and Resourcing - Relative experience indicated by code |
| `RL4` | **HR Leadership Lieutenant Commander** | HR Leadership - Lieutenant Commander |
| `RL5` | **HR Leadership Commander** | HR Leadership - Commander |
| `RLC` | **HR Lead Maj CMD Elig** | HR Leadership - Major Command Eligible |
| `RLS` | **HR Lead Sea Duty** | HR Leadership - HR Sea Duty |
| `RMX*` | **Manpower Requirements Relative experience indicated by code** | Manpower Requirements - Relative experience indicated by code |
| `RNX*` | **N1 Relative experience indicated by code** | N1 - Relative experience indicated by code |
| `ROX*` | **Financial MGMT Relative experience indicated by code** | Financial Management - Relative experience indicated by code |
| `RPX*` | **Personnel Pay and Policy** | Personnel Pay and Policy -  |

### Hydrography

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `MH1` | **Hydrographer Naval Hydrographer** | Hydrographer - Naval Hydrographer |
| `MH2` | **Hydrographer Apprentice Naval Hydrographer** | Hydrographer - Apprentice Naval Hydrographer |
| `MO1` | **Meteorology and Oceanography OFF Basic** | Meteorology and Oceanography Officer - Basic |

### Information Professional

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `GA1` | **IP Basic Qualification** | Information Professional - Basic Qualification |
| `GA2` | **IP Intermediate Qualification** | Information Professional - Intermediate Qualification |
| `GA3` | **IP Advanced Qualification** | Information Professional - Advanced Qualification |
| `GA5` | **IW Strike Group Staff Tactical Action OFF (SGSTAO)** | Information Warfare - Strike Group Staff Tactical Action Officer (SGSTAO) |
| `GA6` | **IP Knowledge MGMT OFF (KM)** | Information Professional - Knowledge Management Officer (KM) |
| `GA7` | **IW Information Assurance OFF (IA)** | Information Warfare - Information Assurance Officer (IA) |
| `GA8` | **IW Chief Information OFF (CIO)** | Information Warfare - Chief Information Officer (CIO) |
| `GA9` | **IW Individual Augmentee** | Information Warfare - Individual Augmentee |
| `GB1` | **Milestone LCDR** | Milestone - LCDR |
| `GB2` | **Milestone CDR** | Milestone - CDR |
| `GB3` | **Milestone CAPT** | Milestone - CAPT |
| `GB4` | **Milestone IW Commander Afloat (CDR)** | Milestone - Information Warfare Commander Afloat (CDR) |
| `GB5` | **Milestone IW Commander Afloat Captain (CAPT)** | Milestone - Information Warfare Commander Afloat Captain (CAPT) |
| `GB6` | **Milestone IW Commander Numbered Fleet Captain (CAPT)** | Milestone - Information Warfare Commander Numbered Fleet Captain (CAPT) |
| `GC0` | **IW Community (IWC) Qualification IW** | Information  Warfare Community (IWC) Qualification Program - Information Warfare |
| `GC1` | **IW Community Qualification IW OFF Intermediate Course** | Information  Warfare Community Qualification Program - Information Warfare Officer Intermediate Course |
| `GC2` | **IWC JFTOC WO** | IWC Qualification Program - JFTOC Watch Officer |
| `GC3` | **Milestone IW Community LCDR Leadership** | Milestone - Information Warfare Community LCDR Leadership |
| `GC4` | **IWC BCA CWO** | IWC Qualification Program - BCA CWO |
| `GUI` | **UW Spt TASW WO** | Undersea Warfare Support - TASW Watch Officer |
| `GQ1` | **Quebec Watch IW Watch OFF (IWWO)** | Quebec Watch - Information Warfare Watch Officer (IWWO) |
| `GW1` | **WTI (WTI) EW (EW)** | Warfare Tactics Instructor (WTI) - Electronic Warfare (EW) |
| `GW2` | **WTI Intel Ops** | Warfare Tactics Instructor (WTI) - Intelligence Operations (Intel Ops) |
| `GW3` | **WTI METOC** | Warfare Tactics Instructor (WTI) - Meteorology / Oceanography (METOC) |
| `GW4` | **WTI Info Ops** | Warfare Tactics Instructor (WTI) - Information Operations (Info Ops) |
| `GW5` | **WTI Space** | Warfare Tactics Instructor (WTI) - Space |
| `GW6` | **WTI C2/CO** | Warfare Tactics Instructor (WTI) - Command and Control/Cyber Space Operations (C2/CO) |
| `GWI` | **WTI Instructor** | Warfare Tactics Instructor (WTI) - Instructor |

### Joint/Acquisition Support

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `U1A` | **JS Acquisition** | Joint Staff  - Acquisition |
| `U1C` | **JS Civil Affairs** | Joint Staff  - Civil Affairs |
| `U1D` | **JS Detainee OPS** | Joint Staff  - Detainee Operations |
| `U1F` | **JS Finance** | Joint Staff  - Finance |
| `U1H` | **JS Human Resources** | Joint Staff  - Human Resources |
| `U1I` | **JS Intelligence** | Joint Staff  - Intelligence |
| `U1L` | **JS Logistics** | Joint Staff  - Logistics |
| `U1M` | **JS Medical** | Joint Staff  - Medical |
| `U1O` | **JS OPS** | Joint Staff  - Operations |
| `U1P` | **JS Planning** | Joint Staff  - Planning |
| `U1T` | **JS Training** | Joint Staff  - Training |
| `U1X` | **JS Improvised Explosive Device** | Joint Staff  - Improvised Explosive Device |
| `U2A` | **MNL HQ Acquisition** | Multinational HQ  - Acquisition |
| `U2C` | **MNL HQ Civil Affairs** | Multinational HQ  - Civil Affairs |
| `U2D` | **MNL HQ Detainee OPS** | Multinational HQ  - Detainee Operations |
| `U2F` | **MNL HQ Finance** | Multinational HQ  - Finance |
| `U2H` | **MNL HQ Human Resources** | Multinational HQ  - Human Resources |
| `U2I` | **MNL HQ Intelligence** | Multinational HQ  - Intelligence |
| `U2L` | **MNL HQ Logistics** | Multinational HQ  - Logistics |
| `U2M` | **MNL HQ Medical** | Multinational HQ  - Medical |
| `U2O` | **MNL HQ OPS** | Multinational HQ  - Operations |
| `U2P` | **MNL HQ Planning** | Multinational HQ  - Planning |
| `U2T` | **MNL HQ Training** | Multinational HQ  - Training |
| `U2X` | **MNL HQ Improvised Explosive Device** | Multinational HQ  - Improvised Explosive Device |
| `U3A` | **CCMD LVL Acquisition** | Combatant Commander Level - Acquisition |
| `U3C` | **CCMD LVL Civil Affairs** | Combatant Commander Level - Civil Affairs |
| `U3D` | **CCMD LVL Detainee OPS** | Combatant Commander Level - Detainee Operations |
| `U3F` | **CCMD LVL Finance** | Combatant Commander Level - Finance |
| `U3H` | **CCMD LVL Human Resources** | Combatant Commander Level - Human Resources |
| `U3I` | **CCMD LVL Intelligence** | Combatant Commander Level - Intelligence |
| `U3L` | **CCMD LVL Logistics** | Combatant Commander Level - Logistics |
| `U3M` | **CCMD LVL Medical** | Combatant Commander Level - Medical |
| `U3O` | **CCMD LVL OPS** | Combatant Commander Level - Operations |
| `U3P` | **CCMD LVL Planning** | Combatant Commander Level - Planning |
| `U3T` | **CCMD LVL Training** | Combatant Commander Level - Training |
| `U3X` | **CCMD LVL Improvised Explosive Device** | Combatant Commander Level - Improvised Explosive Device |
| `U4A` | **Flt/Div Staff Acquisition** | Fleet/Division Staff - Acquisition |
| `U4C` | **Flt/Div Staff Civil Affairs** | Fleet/Division Staff - Civil Affairs |
| `U4D` | **Flt/Div Staff Detainee OPS** | Fleet/Division Staff - Detainee Operations |
| `U4F` | **Flt/Div Staff Finance** | Fleet/Division Staff - Finance |
| `U4H` | **Flt/Div Staff Human Resources** | Fleet/Division Staff - Human Resources |
| `U4I` | **Flt/Div Staff Intelligence** | Fleet/Division Staff - Intelligence |
| `U4L` | **Flt/Div Staff Logistics** | Fleet/Division Staff - Logistics |
| `U4M` | **Flt/Div Staff Medical** | Fleet/Division Staff - Medical |
| `U4O` | **Flt/Div Staff OPS** | Fleet/Division Staff - Operations |
| `U4P` | **Flt/Div Staff Planning** | Fleet/Division Staff - Planning |
| `U4T` | **Flt/Div Staff Training** | Fleet/Division Staff - Training |
| `U4X` | **Flt/Div Staff Improvised Explosive Device** | Fleet/Division Staff - Improvised Explosive Device |
| `U5A` | **JTF Acquisition** | Joint Task Force - Acquisition |
| `U5C` | **JTF Civil Affairs** | Joint Task Force - Civil Affairs |
| `U5D` | **JTF Detainee OPS** | Joint Task Force - Detainee Operations |
| `U5F` | **JTF Finance** | Joint Task Force - Finance |
| `U5H` | **JTF Human Resources** | Joint Task Force - Human Resources |
| `U5I` | **JTF Intelligence** | Joint Task Force - Intelligence |
| `U5L` | **JTF Logistics** | Joint Task Force - Logistics |
| `U5M` | **JTF Medical** | Joint Task Force - Medical |
| `U5O` | **JTF OPS** | Joint Task Force - Operations |
| `U5P` | **JTF Planning** | Joint Task Force - Planning |
| `U5T` | **JTF Training** | Joint Task Force - Training |
| `U5X` | **JTF Improvised Explosive Device** | Joint Task Force - Improvised Explosive Device |
| `U6A` | **Other Acquisition** | Other - Acquisition |
| `U6C` | **Other Civil Affairs** | Other - Civil Affairs |
| `U6D` | **Other Detainee OPS** | Other - Detainee Operations |
| `U6F` | **Other Finance** | Other - Finance |
| `U6H` | **Other Human Resources** | Other - Human Resources |
| `U6I` | **Other Intelligence** | Other - Intelligence |
| `U6L` | **Other Logistics** | Other - Logistics |
| `U6M` | **Other Medical** | Other - Medical |
| `U6O` | **Other OPS** | Other - Operations |
| `U6P` | **Other Planning** | Other - Planning |
| `U6T` | **Other Training** | Other - Training |
| `U6X` | **Other Improvised Explosive Device** | Other - Improvised Explosive Device |
| `U7S` | **NATO Staff OFF** | NATO - Staff Officer |

### Joint/International

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `J1A` | **JS Acquisition** | Joint Staff - Acquisition |
| `J1C` | **JS Civil Affairs** | Joint Staff - Civil Affairs |
| `J1D` | **JS Detainee OPS** | Joint Staff - Detainee Operations |
| `J1F` | **JS Finance** | Joint Staff - Finance |
| `J1H` | **JS Human Resources** | Joint Staff - Human Resources |
| `J1I` | **JS Intelligence** | Joint Staff - Intelligence |
| `J1L` | **JS Logistics** | Joint Staff - Logistics |
| `J1M` | **JS Medical** | Joint Staff - Medical |
| `J1O` | **JS OPS** | Joint Staff - Operations |
| `J1P` | **JS Planning** | Joint Staff - Planning |
| `J1T` | **JS Training** | Joint Staff - Training |
| `J1X` | **JS Improvised Explosive Device** | Joint Staff - Improvised Explosive Device |
| `J2A` | **MNL HQ Acquisition** | Multinational HQ - Acquisition |
| `J2C` | **MNL HQ Civil Affairs** | Multinational HQ - Civil Affairs |
| `J2D` | **MNL HQ Detainee OPS** | Multinational HQ - Detainee Operations |
| `J2F` | **MNL HQ Finance** | Multinational HQ - Finance |
| `J2H` | **MNL HQ Human Resources** | Multinational HQ - Human Resources |
| `J2I` | **MNL HQ Intelligence** | Multinational HQ - Intelligence |
| `J2L` | **MNL HQ Logistics** | Multinational HQ - Logistics |
| `J2M` | **MNL HQ Medical** | Multinational HQ - Medical |
| `J2O` | **MNL HQ OPS** | Multinational HQ - Operations |
| `J2P` | **MNL HQ Planning** | Multinational HQ - Planning |
| `J2T` | **MNL HQ Training** | Multinational HQ - Training |
| `J2X` | **MNL HQ Improvised Explosive Device** | Multinational HQ - Improvised Explosive Device |
| `J3A` | **CCMD LVL Acquisition** | Combatant Commander Level - Acquisition |
| `J3C` | **CCMD LVL Civil Affairs** | Combatant Commander Level - Civil Affairs |
| `J3D` | **CCMD LVL Detainee OPS** | Combatant Commander Level - Detainee Operations |
| `J3F` | **CCMD LVL Finance** | Combatant Commander Level - Finance |
| `J3H` | **CCMD LVL Human Resources** | Combatant Commander Level - Human Resources |
| `J3I` | **CCMD LVL Intelligence** | Combatant Commander Level - Intelligence |
| `J3L` | **CCMD LVL Logistics** | Combatant Commander Level - Logistics |
| `J3M` | **CCMD LVL Medical** | Combatant Commander Level - Medical |
| `J3O` | **CCMD LVL OPS** | Combatant Commander Level - Operations |
| `J3P` | **CCMD LVL Planning** | Combatant Commander Level - Planning |
| `J3T` | **CCMD LVL Training** | Combatant Commander Level - Training |
| `J3X` | **CCMD LVL Improvised Explosive Device** | Combatant Commander Level - Improvised Explosive Device |
| `J4A` | **Flt/Div Staff Acquisition** | Fleet/Division Staff - Acquisition |
| `J4C` | **Flt/Div Staff Civil Affairs** | Fleet/Division Staff - Civil Affairs |
| `J4D` | **Flt/Div Staff Detainee OPS** | Fleet/Division Staff - Detainee Operations |
| `J4F` | **Flt/Div Staff Finance** | Fleet/Division Staff - Finance |
| `J4H` | **Flt/Div Staff Human Resources** | Fleet/Division Staff - Human Resources |
| `J4I` | **Flt/Div Staff Intelligence** | Fleet/Division Staff - Intelligence |
| `J4L` | **Flt/Div Staff Logistics** | Fleet/Division Staff - Logistics |
| `J4M` | **Flt/Div Staff Medical** | Fleet/Division Staff - Medical |
| `J4O` | **Flt/Div Staff OPS** | Fleet/Division Staff - Operations |
| `J4P` | **Flt/Div Staff Planning** | Fleet/Division Staff - Planning |
| `J4T` | **Flt/Div Staff Training** | Fleet/Division Staff - Training |
| `J4X` | **Flt/Div Staff Improvised Explosive Device** | Fleet/Division Staff - Improvised Explosive Device |
| `J5A` | **JTF Acquisition** | Joint Task Force - Acquisition |
| `J5C` | **JTF Civil Affairs** | Joint Task Force - Civil Affairs |
| `J5D` | **JTF Detainee OPS** | Joint Task Force - Detainee Operations |
| `J5F` | **JTF Finance** | Joint Task Force - Finance |
| `J5H` | **JTF Human Resources** | Joint Task Force - Human Resources |
| `J5I` | **JTF Intelligence** | Joint Task Force - Intelligence |
| `J5L` | **JTF Logistics** | Joint Task Force - Logistics |
| `J5M` | **JTF Medical** | Joint Task Force - Medical |
| `J5O` | **JTF OPS** | Joint Task Force - Operations |
| `J5P` | **JTF Planning** | Joint Task Force - Planning |
| `J5T` | **JTF Training** | Joint Task Force - Training |
| `J5X` | **JTF Improvised Explosive Device** | Joint Task Force - Improvised Explosive Device |
| `J6A` | **Other Acquisition** | Other - Acquisition |
| `J6B` | **Other AFPAK Hands** | Other - AFPAK Hands |
| `J6C` | **Other Civil Affairs** | Other - Civil Affairs |
| `J6D` | **Other Detainee OPS** | Other - Detainee Operations |
| `J6F` | **Other Finance** | Other - Finance |
| `J6H` | **Other Human Resources** | Other - Human Resources |
| `J6I` | **Other Intelligence** | Other - Intelligence |
| `J6L` | **Other Logistics** | Other - Logistics |
| `J6M` | **Other Medical** | Other - Medical |
| `J6O` | **Other OPS** | Other - Operations |
| `J6P` | **Other Planning** | Other - Planning |
| `J6T` | **Other Training** | Other - Training |
| `J6X` | **Other Improvised Explosive Device** | Other - Improvised Explosive Device |
| `J7A` | **PEP Indo-PACOM** | PEP - Indo-PACOM |
| `J7B` | **PEP Europe** | PEP - Europe |
| `J7C` | **PEP Indo-PACOM Follow on Tour** | PEP - Indo-PACOM Follow on Tour |
| `J7D` | **PEP Europe Follow on Tour** | PEP - Europe Follow on Tour |
| `JC1` | **TAC QUAL** | Terminal Attack Controller - Qualified |
| `JC2` | **TAC Instructor** | Terminal Attack Controller - Instructor |
| `JC3` | **Joint TAC Evaluator JTAC-E** | Joint Terminal Attack Controller Evaluator - JTAC-E |
| `JD1` | **JDA Billet JDA Billet** | Joint Billet - JDA Billet |
| `JD2` | **JDA Billet JDA Critical Billet** | Joint Billet - JDA Critical Billet |
| `JEA` | **Exec LVL Op War Crs** | Executive Level - Operational Level of Warfare Course |
| `JJ1` | **Joint OPS Planning and Execution System (JOPES) JOPES Proficiency** | Joint Operations Planning and Execution System (JOPES) - JOPES Proficiency |
| `JN1` | **NEPLO QUAL** | Navy Emergency Preparedness Liaison Officer (NEPLO) - Qualified |
| `JOM` | **OpLvl C2 Maritime** | Operational Level Command and Control - Maritime |
| `JP1` | **Flt Cdr OpPlnr (Education)** | Joint and Maritime Operational Planner - Fleet Commander Level Operational Planner (Education) |
| `JP2` | **Flt Cdr OpPlnr (Experience)** | Joint and Maritime Operational Planner - Fleet Commander Level Operational Planner (Experience) |
| `JP3` | **Flt Cdr OpPlnr (Education and Experience)** | Joint and Maritime Operational Planner - Fleet Commander Level Operational Planner  (Education and Experience) |
| `JPM` | **Joint Maritime Plnr** | Joint - Maritime Operational Planner |
| `JPN` | **Joint Ops Planner** | Joint - Operational Planner |
| `JS1` | **JQual JPME GRAD** | Joint Qualification - JPME Graduate |
| `JS2` | **JQual Full Joint Tour Credit** | Joint Qualification - Full Joint Tour Credit |
| `JS4` | **JQual JQS LVL II** | Joint Qualification - JQS Level II |
| `JS5` | **JQual Joint QUAL OFF (JQO) JQS LVL III** | Joint Qualification - Joint Qualified Officer (JQO) JQS Level III |
| `JS6` | **JQual JQS LVL IV** | Joint Qualification - JQS Level IV |
| `JS7` | **JQual JPME Phase I GRAD** | Joint Qualification - JPME Phase I Graduate |
| `JS8` | **JQual JPME Phase II GRAD** | Joint Qualification - JPME Phase II Graduate |
| `JS9` | **JQual COS Takeout JQO JQS LVL III** | Joint Qualification - COS Takeout JQO JQS Level III |
| `JSA` | **JQual AJPME** | Joint Qualification - AJPME |
| `JSF` | **JQual JDA Flag** | Joint Qualification - Joint Duty Assignment (JDA) for Flag |
| `JSM` | **Staff Maritime** | Staff - Maritime |
| `JSR` | **JQual JDA Deferred** | Joint Qualification - Joint Duty Assignment required after one tour deferral |
| `JT1` | **Theater Special OPS CMD Staff Preparation Course GRAD** | Theater Special Operations Command Staff Preparation Course - Graduate |

### Legal & JAG

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `4AK` | **Alaska Bar** |  - Lawyer, Alaska Bar |
| `4AL` | **Alabama Bar** |  - Lawyer, Alabama Bar |
| `4AR` | **Arkansas Bar** |  - Lawyer, Arkansas Bar |
| `4AS` | **Admiralty SPEC** |  - Admiralty Specialist |
| `4AZ` | **Arizona Bar** |  - Lawyer, Arizona Bar |
| `4CA` | **California Bar** |  - Lawyer, California Bar |
| `4CO` | **Colorado Bar** |  - Lawyer, Colorado Bar |
| `4CT` | **Connecticut Bar** |  - Lawyer, Connecticut Bar |
| `4DC` | **District of Columbia Bar** |  - Lawyer, District of Columbia Bar |
| `4DE` | **Delaware Bar** |  - Lawyer, Delaware Bar |
| `4FL` | **Florida Bar** |  - Lawyer, Florida Bar |
| `4GA` | **Georgia Bar** |  - Lawyer, Georgia Bar |
| `4GU` | **Guam Bar** |  - Lawyer, Guam Bar |
| `4HI` | **Hawaii Bar** |  - Lawyer, Hawaii Bar |
| `4IA` | **Iowa Bar** |  - Lawyer, Iowa Bar |
| `4ID` | **Idaho Bar** |  - Lawyer, Idaho Bar |
| `4IL` | **Illinois Bar** |  - Lawyer, Illinois Bar |
| `4JF` | **Judge Advocate Fleet QUAL** |  - Judge Advocate Fleet Qualified |
| `4KS` | **Kansas Bar** |  - Lawyer, Kansas Bar |
| `4KY` | **Kentucky Bar** |  - Lawyer, Kentucky Bar |
| `4L2` | **Military Justice Litigation SPEC II (LIT SPEC II)** |  - Military Justice Litigation Specialist II (LIT SPEC II) |
| `4LA` | **Louisiana Bar** |  - Lawyer, Louisiana Bar |
| `4LE` | **Military Justice Litigation Expert (LIT EXP)** |  - Military Justice Litigation Expert (LIT EXP) |
| `4LS` | **Military Justice Litigation SPEC (LIT SPEC)** |  - Military Justice Litigation Specialist (LIT SPEC) |
| `4MA` | **Massachusetts Bar** |  - Lawyer, Massachusetts Bar |
| `4MD` | **Maryland Bar** |  - Lawyer, Maryland Bar |
| `4ME` | **Maine Bar** |  - Lawyer, Maine Bar |
| `4MI` | **Michigan Bar** |  - Lawyer, Michigan Bar |
| `4MN` | **Minnesota Bar** |  - Lawyer, Minnesota Bar |
| `4MO` | **Missouri Bar** |  - Lawyer, Missouri Bar |
| `4MS` | **Mississippi Bar** |  - Lawyer, Mississippi Bar |
| `4MT` | **Montana Bar** |  - Lawyer, Montana Bar |
| `4NC` | **North Carolina Bar** |  - Lawyer, North Carolina Bar |
| `4ND` | **North Dakota Bar** |  - Lawyer, North Dakota Bar |
| `4NE` | **Nebraska Bar** |  - Lawyer, Nebraska Bar |
| `4NH` | **New Hampshire Bar** |  - Lawyer, New Hampshire Bar |
| `4NI` | **National Security - Intelligence Law (INTEL LAW)** |  - National Security - Intelligence Law (INTEL LAW) |
| `4NJ` | **New Jersey Bar** |  - Lawyer, New Jersey Bar |
| `4NM` | **New Mexico Bar** |  - Lawyer, New Mexico Bar |
| `4NS` | **National Security - Cyberspace Law (CYBERSPACE LAW)** |  - National Security - Cyberspace Law (CYBERSPACE LAW) |
| `4NV` | **Nevada Bar** |  - Lawyer, Nevada Bar |
| `4NY` | **New York Bar** |  - Lawyer, New York Bar |
| `4OH` | **Ohio Bar** |  - Lawyer, Ohio Bar |
| `4OK` | **Oklahoma Bar** |  - Lawyer, Oklahoma Bar |
| `4OR` | **Oregon Bar** |  - Lawyer, Oregon Bar |
| `4PA` | **Pennsylvania Bar** |  - Lawyer, Pennsylvania Bar |
| `4PR` | **Puerto Rico Bar** |  - Lawyer, Puerto Rico Bar |
| `4RI` | **Rhode Island Bar** |  - Lawyer, Rhode Island Bar |
| `4SC` | **South Carolina Bar** |  - Lawyer, South Carolina Bar |
| `4SD` | **South Dakota Bar** |  - Lawyer, South Dakota Bar |
| `4TC` | **Special Trial Counsel** |  - Special Trial Counsel |
| `4TN` | **Tennessee Bar** |  - Lawyer, Tennessee Bar |
| `4TX` | **Texas Bar** |  - Lawyer, Texas Bar |
| `4UT` | **Utah Bar** |  - Lawyer, Utah Bar |
| `4VA` | **Virginia Bar** |  - Lawyer, Virginia Bar |
| `4VC` | **Victim Legal Counsel (VLC)** |  - Victim Legal Counsel (VLC) |
| `4VI` | **Virgin Islands Bar** |  - Lawyer, Virgin Islands Bar |
| `4VT` | **Vermont Bar** |  - Lawyer, Vermont Bar |
| `4WA` | **Washington Bar** |  - Lawyer, Washington Bar |
| `4WI` | **Wisconsin Bar** |  - Lawyer, Wisconsin Bar |
| `4WV` | **West Virginia Bar** |  - Lawyer, West Virginia Bar |
| `4WY` | **Wyoming Bar** |  - Lawyer, Wyoming Bar |

### Medical & Health Services

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `60N` | **Cont/Ops: Medical Regulator** | Contingency/ Operational - Medical Regulator |
| `62A` | **Medical: Adolescent Medicine SPEC** | Any Medical Corps Specialty - Adolescent Medicine Specialist |
| `62B` | **Medical: Allergy/ Immunologist** | Any Medical Corps Specialty - Allergy/ Immunologist |
| `62C` | **Medical: Critical Care** | Any Medical Corps Specialty - Critical Care |
| `62D` | **Medical: Faculty Development** | Any Medical Corps Specialty - Faculty Development |
| `62E` | **Medical: Geriatric Medicine** | Any Medical Corps Specialty - Geriatric Medicine |
| `62F` | **Medical: Hand Surgery** | Any Medical Corps Specialty - Hand Surgery |
| `62G` | **Medical: Sports Medicine SPEC** | Any Medical Corps Specialty - Sports Medicine Specialist |
| `62J` | **Medical: Pain Medicine** | Any Medical Corps Specialty - Pain Medicine |
| `62L` | **Medical: Clinical Epidemiology** | Any Medical Corps Specialty - Clinical Epidemiology |
| `62M` | **Medical: Sleep Medicine** | Any Medical Corps Specialty - Sleep Medicine |
| `64A` | **Dental: Advanced Education in General Dentistry** | Dental - Advanced Education in General Dentistry |
| `64B` | **Dental: General Practice Residency** | Dental - General Practice Residency |
| `64C` | **Dental: Advanced Clinical (ACP) in Exodontia** | Dental - Advanced Clinical Program (ACP) in Exodontia |
| `64E` | **Dental: Forensic Dentistry** | Dental - Forensic Dentistry |
| `67A` | **Exec Med Staff: Executive Medicine** | Executive Medicine Staff - Executive Medicine |
| `67B` | **Exec Med Staff: Expeditionary Medicine** | Executive Medicine Staff - Expeditionary Medicine |
| `67F` | **Exec Med Staff: Reserve Liaison OFF** | Executive Medicine Staff - Reserve Liaison Officer |
| `67G` | **Exec Med Staff: Managed Care Coordinator** | Executive Medicine Staff - Managed Care Coordinator |
| `67H` | **Exec Med Staff: Ambulatory Care Administration (ACA) OFF** | Executive Medicine Staff - Ambulatory Care Administration (ACA) Officer |
| `67I` | **Exec Med Staff: Credentialed Health Care Administrator (CHCA)** | Executive Medicine Staff - Credentialed  Health Care Administrator (CHCA) |
| `68H` | **Any Medical Designator: Health Promotion Coordinator** | Any Medical Department Designator - Health Promotion Coordinator |
| `68I` | **Any Medical Designator: Health Care MGMT** | Any Medical Department Designator - Health Care Management |
| `68J` | **Any Medical Designator: Public Health Emergency OFF (PHEO)** | Any Medical Department Designator - Public Health Emergency Officer (PHEO) |
| `68K` | **Any Medical Designator: Alternate Public Health Emergency OFF (APHEO)** | Any Medical Department Designator - Alternate Public Health Emergency Officer (APHEO) |
| `68L` | **Any Medical Designator: Clinical Informatics** | Any Medical Department Designator - Clinical Informatics |
| `68M` | **Exec Med Staff: Health Security Cooperation OFF** | Executive Medicine Staff - Health Security Cooperation Officer |
| `68N` | **Clinical Informatics: Expert** | Clinical Informatics - Expert |
| `68O` | **Medical Milestone Qualification: Medical Milestone Eligible** | Medical Milestone Qualification Program - Medical Milestone Eligible |
| `68P` | **Medical Milestone Qualification: Medical Milestone Eligible** | Medical Milestone Qualification Program - Medical Milestone Eligible |
| `68R` | **Navy Medicine Quality and Safety Leadership Academy (NMQSLA) Scholar: NMQSLA GRAD** | Navy Medicine Quality and Safety Leadership Academy (NMQSLA) Scholar - NMQSLA Graduate |
| `68S` | **Any Medical: Sexual Assault Forensic Examiner** | Any Medical Department - Sexual Assault Forensic Examiner |
| `69F` | **Nursing HCS: Post Anesthesia Care Nursing** | Nursing Health Care Services - Post Anesthesia Care Nursing |
| `69K` | **Nursing: Peds Intensive Care Nursing** | Nursing - Pediatric Intensive Care Nursing |
| `69L` | **Nursing: Labor, Delivery and Recovery (LDR) Experienced Nurse** | Nursing - Labor, Delivery and Recovery (LDR) Experienced Nurse |
| `69O` | **Nursing HCS: Ambulatory Care Nursing** | Nursing Health Care Services - Ambulatory Care Nursing |
| `69P` | **Nursing HCS: Acute Care Nurse Practitioner/Emergency Nurse Practitioner** | Nursing Health Care Services - Acute Care Nurse Practitioner/Emergency Nurse Practitioner |
| `69Q` | **Nursing HCS: Wound Care Nursing** | Nursing Health Care Services - Wound Care Nursing |
| `6AA` | **Aviation Med: Aviation Medical Examiner** | Aviation Medicine - Aviation Medical Examiner |
| `6AB` | **Aviation Med: General Flight OFF** | Aviation Medicine - General Flight Officer |
| `6AC` | **Aviation Med: Naval Aviator (Naval Flight OFF (NFO))/ Aeromedical OFF** | Aviation Medicine - Naval Aviator (Naval Flight Officer (NFO))/ Aeromedical Officer |
| `6AE` | **Aviation Med: Naval Aviator (Pilot)/ Aeromedical OFF** | Aviation Medicine - Naval Aviator (Pilot)/ Aeromedical Officer |
| `6AG` | **Aviation Med: Aerospace Medicine (Preventive Medicine)** | Aviation Medicine - Aerospace Medicine (Preventive Medicine) |
| `6AJ` | **Aviation Med: Flight Nurse** | Aviation Medicine - Flight Nurse |
| `6AM` | **Aviation Med: Aeromedical Safety OFF** | Aviation Medicine - Aeromedical Safety Officer |
| `6AN` | **Aviation Med: Aerospace Optometrist** | Aviation Medicine - Aerospace Optometrist |
| `6BG` | **Anesthesia: Cardiothoracic** | Anesthesia - Cardiothoracic |
| `6BH` | **Anesthesia: Neurosurgical** | Anesthesia - Neurosurgical |
| `6BI` | **Anesthesia: Obstetrical** | Anesthesia - Obstetrical |
| `6BK` | **Anesthesia: Peds** | Anesthesia - Pediatric |
| `6BL` | **Anesthesia: Regional Anesthesia** | Anesthesia - Regional Anesthesia |
| `6CD` | **Surgical: Cardiothoracic Surgery** | Surgical - Cardiothoracic Surgery |
| `6CE` | **Surgical: Colon & Rectal Surgery** | Surgical - Colon & Rectal Surgery |
| `6CG` | **Surgical: Laparodendoscopic Surgery** | Surgical - Laparodendoscopic Surgery |
| `6CH` | **Surgical: Peds Surgery** | Surgical - Pediatric Surgery |
| `6CI` | **Surgical: Peripheral Vascular Surgery** | Surgical - Peripheral Vascular Surgery |
| `6CJ` | **Surgical: Plastic Surgery** | Surgical - Plastic Surgery |
| `6CL` | **Surgical: Surgical Oncology** | Surgical - Surgical Oncology |
| `6CM` | **Surgical: Trauma Surgeon** | Surgical - Trauma Surgeon |
| `6DD` | **Neuro Surg: Complex Spinal Neuro Surg** | Neurological Surgery - Complex Spinal Neurological Surgery |
| `6DE` | **Neuro Surg: Skull Base Neuro Surg** | Neurological Surgery - Skull Base Neurological Surgery |
| `6DF` | **Neuro Surg: Peds Neurosurgery** | Neurological Surgery - Pediatric Neurosurgery |
| `6DG` | **Neuro Surg: Neurovascular Neuro Surg** | Neurological Surgery - Neurovascular Neurological Surgery |
| `6EG` | **Obstetrics/Gynecology (OB/GYN): Gynecologic Oncology** | Obstetrics/Gynecology (OB/GYN) - Gynecologic Oncology |
| `6EH` | **Obstetrics/Gynecology (OB/GYN): Maternal Fetal Medicine** | Obstetrics/Gynecology (OB/GYN) - Maternal Fetal Medicine |
| `6EI` | **Obstetrics/Gynecology (OB/GYN): Reproductive Endocrinology** | Obstetrics/Gynecology (OB/GYN) - Reproductive Endocrinology |
| `6EJ` | **Obstetrics/Gynecology (OB/GYN): Urogynecology and Pelvic Surgery** | Obstetrics/Gynecology (OB/GYN) - Urogynecology and Pelvic Surgery |
| `6FA` | **Field Medicine: Marine Corps Medical OFF** | Field Medicine - Marine Corps Medical Department Officer |
| `6FC` | **Field Medicine: Fleet Marine Force Medical Logistics** | Field Medicine - Fleet Marine Force Medical Logistics |
| `6FD` | **Field Medicine: Surface Experienced Medical OFF** | Field Medicine - Surface Experienced Medical Officer |
| `6FE` | **Field Medicine: Senior Marine Corps Staff OFF** | Field Medicine - Senior Marine Corps Staff Officer |
| `6GA` | **Ophthalm: Aviation Optometry** | Ophthalmology - Aviation Optometry |
| `6GE` | **Ophthalm: Cornea and External Disease** | Ophthalmology - Cornea and External Disease |
| `6GF` | **Ophthalm: Glaucoma** | Ophthalmology - Glaucoma |
| `6GG` | **Ophthalm: Neuro- ophthalmology/ Surgical Neuro- ophthalmology** | Ophthalmology - Neuro- ophthalmology/ Surgical  Neuro- ophthalmology |
| `6GH` | **Ophthalm: Oculoplastics** | Ophthalmology - Oculoplastics |
| `6GI` | **Ophthalm: Ophthalmic Pathology Surgery** | Ophthalmology - Ophthalmic Pathology Surgery |
| `6GJ` | **Ophthalm: Retina Vitreous Surgery** | Ophthalmology - Retina Vitreous Surgery |
| `6GK` | **Ophthalm: Strabismus** | Ophthalmology - Strabismus |
| `6HD` | **Ortho Surg: Foot and Ankle Surgery** | Orthopaedic Surgery - Foot and Ankle Surgery |
| `6HF` | **Ortho Surg: Orthopaedic Oncology** | Orthopaedic Surgery - Orthopaedic Oncology |
| `6HG` | **Ortho Surg: Peds Ortho Surg** | Orthopaedic Surgery - Pediatric Orthopaedic Surgery |
| `6HH` | **Ortho Surg: Spine Surgery** | Orthopaedic Surgery - Spine Surgery |
| `6HI` | **Ortho Surg: Sports Surgery** | Orthopaedic Surgery - Sports Surgery |
| `6HJ` | **Ortho Surg: Total Joint** | Orthopaedic Surgery - Total Joint |
| `6HK` | **Ortho Surg: Trauma Surgery** | Orthopaedic Surgery - Trauma Surgery |
| `6HL` | **Ortho Surg: Orthopaedic Physicians Assistant** | Orthopaedic Surgery - Orthopaedic Physicians Assistant |
| `6ID` | **ENT: Facial Plastics and Reconstructive Surgery** | Otolaryngology - Facial Plastics and Reconstructive Surgery |
| `6IE` | **ENT: Head and Neck Surgery** | Otolaryngology - Head and Neck Surgery |
| `6IF` | **ENT: Neurotology** | Otolaryngology - Neurotology |
| `6IG` | **ENT: Peds ENT** | Otolaryngology - Pediatric Otolaryngology |
| `6IH` | **ENT: Laryngology** | Otolaryngology - Laryngology |
| `6II` | **ENT: Rhinology** | Otolaryngology - Rhinology |
| `6JD` | **Urologic: Endocrinologic Urologist** | Urologic - Endocrinologic Urologist |
| `6JE` | **Urologic: Female Urology** | Urologic - Female Urology |
| `6JF` | **Urologic: Infertility Urology** | Urologic - Infertility Urology |
| `6JG` | **Urologic: Peds Urology** | Urologic - Pediatric Urology |
| `6JH` | **Urologic: Urinary Stone Disease** | Urologic - Urinary Stone Disease |
| `6JI` | **Urologic: Urologic Oncology** | Urologic - Urologic Oncology |
| `6KL` | **Prev/Occ Med: Radiation Safety OFF** | Preventive/ Occupational Medicine - Radiation Safety Officer |
| `6KM` | **Prev/Occ Med: Medical Laser Safety OFF (MLSO)** | Preventive/ Occupational Medicine - Medical Laser Safety Officer (MLSO) |
| `6LC` | **PM&R: Electroneuromyographic SPEC** | Physical Medicine and Rehabilitation - Electroneuromyographic Specialist |
| `6LD` | **PM&R: Musculoskeletal Screener** | Physical Medicine and Rehabilitation - Musculoskeletal Screener |
| `6LJ` | **PM&R: Upper Extremity Neuromusculo-skeletal Evaluator (UENMSE)** | Physical Medicine and Rehabilitation - Upper Extremity Neuromusculo-skeletal Evaluator (UENMSE) |
| `6LN` | **PM&R: Spinal Cord Rehabilitation SPEC** | Physical Medicine and Rehabilitation - Spinal Cord Rehabilitation Specialist |
| `6MA` | **Pathology: Anatomic and Clinical** | Pathology - Anatomic and Clinical |
| `6MD` | **Pathology: Blood Bank Pathologist** | Pathology - Blood Bank Pathologist |
| `6MF` | **Pathology: Cytopathologist** | Pathology - Cytopathologist |
| `6MG` | **Pathology: Dermatopathologist** | Pathology - Dermatopathologist |
| `6MH` | **Pathology: Forensic Pathologist** | Pathology - Forensic Pathologist |
| `6MI` | **Pathology: Hemato-pathologist** | Pathology - Hemato-pathologist |
| `6MK` | **Pathology: Neuro- pathologist** | Pathology - Neuro- pathologist |
| `6ML` | **Pathology: Surgical Pathologist** | Pathology - Surgical Pathologist |
| `6NE` | **Dermatology: Dermatologic Surgery** | Dermatology - Dermatologic Surgery |
| `6NF` | **Dermatology: Dermato-pathology** | Dermatology - Dermato-pathology |
| `6NH` | **Dermatology: Photobiologist** | Dermatology - Photobiologist |
| `6OA` | **Cont/Ops: Operational Forces Medical Liaison Services (OFMLS) OFF** | Contingency/ Operational - Operational Forces Medical Liaison Services (OFMLS) Officer |
| `6OB` | **Cont/Ops: Shipboard Assignment** | Contingency/ Operational - Shipboard Assignment |
| `6OC` | **Cont/Ops: Hospital Ship Assignment** | Contingency/ Operational - Hospital Ship Assignment |
| `6OD` | **Cont/Ops: En Route Care – Advanced** | Contingency/ Operational - En Route Care – Advanced  |
| `6OE` | **Cont/Ops: En-route Care** | Contingency/ Operational - En-route Care |
| `6OF` | **Cont/Ops: Forward Deployable Preventive Medicine Unit (FDPMU)** | Contingency/ Operational - Forward Deployable Preventive Medicine Unit (FDPMU) |
| `6OG` | **Cont/Ops: Hospitalist** | Contingency/Operational - Hospitalist |
| `6OH` | **Cont/Ops: Humanitarian Assistance/Disaster Response** | Contingency/ Operational - Humanitarian Assistance/Disaster Response |
| `6OI` | **Cont/Ops: PROF Medical CBRN OFF** | Contingency/ Operational - Professional Medical CBRN Officer |
| `6OJ` | **Cont/Ops: Associate Medical CBRN OFF** | Contingency/ Operational - Associate Medical CBRN Officer |
| `6OK` | **Cont/Ops: Human Performance SPEC** | Contingency/ Operational - Human Performance Specialist |
| `6OL` | **Cont/Ops: Navy Expeditionary Medical OFF (NEMDO)** | Contingency/ Operational - Navy Expeditionary Medical Department Officer (NEMDO) |
| `6OO` | **Ops/Cont: EM Services Medical Director** | Operational/Contingency - Emergency Medicine Services Medical Director |
| `6OR` | **Cont/Ops: CATF Surgeon** | Contingency/ Operational - CATF Surgeon |
| `6OS` | **Cont/Ops: SERE Certified Psychologist** | Contingency/ Operational - SERE Certified Psychologist |
| `6OT` | **Cont/Ops: C4 Trained Plus Ortho Surg Enhancement Module** | Contingency/ Operational - C4 Trained Plus Ortho Surg Enhancement Module |
| `6OU` | **Cont/Ops: Fleet Hospital Assignment** | Contingency/ Operational - Fleet Hospital Assignment |
| `6OV` | **Cont/Ops: SPEC in Blood Banking** | Contingency/ Operational - Specialist in Blood Banking |
| `6OW` | **Cont/Ops: Trauma Team Trained OFF (TTTO)** | Contingency/ Operational - Trauma Team Trained Officer (TTTO) |
| `6OX` | **Cont/Ops: Operational Psychology** | Contingency/ Operational - Operational Psychology |
| `6OY` | **Ops/Cont: Trained Trauma Team OFF Advanced** | Operational/Contingency - Trained Trauma Team Officer Advanced |
| `6OZ` | **Medical: Simulationist** | Medical - Simulationist |
| `6PD` | **EM: EM Services** | Emergency Medicine - Emergency Medicine Services |
| `6PE` | **EM: Medical Toxicology** | Emergency Medicine - Medical Toxicology |
| `6PF` | **EM: Peds EM** | Emergency Medicine - Pediatric Emergency Medicine |
| `6PG` | **EM: Emergency Ultrasound** | Emergency Medicine - Emergency Ultrasound |
| `6PH` | **EM: EM Physician Assistant** | Emergency Medicine - Emergency Medicine Physician Assistant |
| `6QF` | **Family Practice: Obstetrics (Additional Training)** | Family Practice - Obstetrics (Additional Training) |
| `6RF` | **Int Med: Allergy Immunologist DLI** | Internal Medicine - Allergy Immunologist DLI |
| `6RG` | **Int Med: Cardiology, General** | Internal Medicine - Cardiology, General |
| `6RH` | **Int Med: Cardiac Electrophysiologist** | Internal Medicine - Cardiac Electrophysiologist |
| `6RI` | **Int Med: Interventional Cardiologist** | Internal Medicine - Interventional Cardiologist |
| `6RK` | **Int Med: Endocrinologist** | Internal Medicine - Endocrinologist |
| `6RL` | **Int Med: Gastroenterologist** | Internal Medicine - Gastroenterologist |
| `6RM` | **Int Med: Hepatology** | Internal Medicine - Hepatology |
| `6RN` | **Int Med: Hematologist** | Internal Medicine - Hematologist |
| `6RO` | **Int Med: Oncologist** | Internal Medicine - Oncologist |
| `6RP` | **Int Med: Infectious Diseases SPEC** | Internal Medicine - Infectious Diseases Specialist |
| `6RQ` | **Int Med: Nephrology** | Internal Medicine - Nephrology |
| `6RR` | **Int Med: Pulmonologist** | Internal Medicine - Pulmonologist |
| `6RS` | **Int Med: Rheumatologist** | Internal Medicine - Rheumatologist |
| `6RT` | **Int Med: Advanced Endoscopic Training** | Internal Medicine - Advanced Endoscopic Training |
| `6RV` | **Int Med: Tropical Medicine** | Internal Medicine - Tropical Medicine |
| `6RW` | **Int Med: Interventional Pulmonologist** | Internal Medicine - Interventional Pulmonologist |
| `6TG` | **Neurology: Neurophysiologist** | Neurology - Neurophysiologist |
| `6UA` | **Undersea Med: Undersea Medical Examiner** | Undersea Medicine - Undersea Medical Examiner |
| `6UD` | **Undersea Med: Diver** | Undersea Medicine - Diver |
| `6UE` | **Undersea Med: Undersea Occupation Medicine** | Undersea Medicine - Undersea Occupation Medicine |
| `6UF` | **Undersea Med: Hyperbaric Medicine Researcher** | Undersea Medicine - Hyperbaric Medicine Researcher |
| `6UG` | **Undersea Med: Hyperbaric Medicine Clinician** | Undersea Medicine - Hyperbaric Medicine Clinician |
| `6UM` | **Undersea Med: Submarine** | Undersea Medicine - Submarine |
| `6VG` | **Peds: Peds Cardiologist** | Pediatric - Pediatric Cardiologist |
| `6VH` | **Peds: Child/Sexual Abuse SPEC** | Pediatric - Child/Sexual Abuse Specialist |
| `6VI` | **Peds: Peds Intensivist/ Critical Care** | Pediatric - Pediatric Intensivist/ Critical Care |
| `6VJ` | **Peds: Developmental Pediatrician** | Pediatric - Developmental Pediatrician |
| `6VK` | **Peds: Peds Endocrinologist** | Pediatric - Pediatric Endocrinologist |
| `6VL` | **Peds: Peds Gastroenterologist** | Pediatric - Pediatric Gastroenterologist |
| `6VN` | **Peds: Peds Hematologist-Oncologist** | Pediatric - Pediatric Hematologist-Oncologist |
| `6VO` | **Peds: Genetic Dysmorphology** | Pediatric - Genetic Dysmorphology |
| `6VP` | **Peds: Peds Infectious Disease SPEC** | Pediatric - Pediatric Infectious Disease Specialist |
| `6VQ` | **Peds: Peds Nephrology** | Pediatric - Pediatric Nephrology |
| `6VR` | **Peds: Peds Pulmonologist** | Pediatric - Pediatric Pulmonologist |
| `6VU` | **Peds: Child Neurologist** | Pediatric - Child Neurologist |
| `6VV` | **Peds: Neonatologist** | Pediatric - Neonatologist |
| `6XD` | **Psych: Addiction Psych** | Psychiatry - Addiction Psychiatry |
| `6XG` | **Psych: Aviation Psych** | Psychiatry - Aviation Psychiatry |
| `6XH` | **Psych: Child/Adolescent Psych** | Psychiatry - Child/Adolescent Psychiatry |
| `6XK` | **Psych: Consultation/ Liaison Psych** | Psychiatry - Consultation/ Liaison Psychiatry |
| `6XL` | **Psych: Forensic Psych** | Psychiatry - Forensic Psychiatry |
| `6YD` | **Rad: Imaging** | Diagnostic Radiology - Imaging |
| `6YE` | **Rad: Interventional/ Vascular Radiology** | Diagnostic Radiology - Interventional/ Vascular Radiology |
| `6YF` | **Rad: Neuro-Radiology** | Diagnostic Radiology - Neuro-Radiology |
| `6YG` | **Rad: Nuclear Radiology** | Diagnostic Radiology - Nuclear Radiology |
| `6YI` | **Rad: Peds Radiologist** | Diagnostic Radiology - Pediatric Radiologist |
| `6YK` | **Rad: Diagnostic Imaging Physicist** | Diagnostic Radiology - Diagnostic Imaging Physicist |
| `6ZA*` | **Educational/ Ethics: Instructor** | Educational/ Ethics - Instructor |
| `6ZB*` | **Educational/ Ethics: Assistant Professor** | Educational/ Ethics - Assistant Professor |
| `6ZC*` | **Educational/ Ethics: Associate Professor** | Educational/ Ethics - Associate Professor |
| `6ZD*` | **Educational/ Ethics: Full Professor** | Educational/ Ethics - Full Professor |
| `6ZE` | **Educational/ Ethics: Medical Ethicist** | Educational/ Ethics - Medical Ethicist |
| `6ZF` | **Educational/ Ethics: Researcher** | Educational/ Ethics - Researcher |
| `6ZG` | **Educational/ Ethics: Residency Director** | Educational/ Ethics - Residency Program Director |

### Public Affairs

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `7A1` | **Accreditation Complete** | Accreditation - Complete |
| `7A2` | **Accreditation Complete** | Accreditation - Complete |
| `7C1` | **Certification Complete** | Certification - Complete |
| `7C2` | **Certification Complete** | Certification - Complete |
| `7IC` | **Independent Complete** | Independent - Complete |
| `7IQ` | **Public Affairs QUAL** | Public Affairs - Qualified |
| `7M1` | **Milestone CMD PAO and Special Advisor** | Milestone - Command PAO and Special Advisor |
| `7M2` | **Milestone Enterprise PAO and Special Advisor** | Milestone - Enterprise PAO and Special Advisor |

### Recruiting

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `HA1` | **Navy Recruiting Region Region Commander** | Navy Recruiting Region - Region Commander |
| `HA2` | **Navy Recruiting Region Staff OFF** | Navy Recruiting Region - Staff Officer |
| `HA3` | **Navy Recruiting Region Chief of Staff** | Navy Recruiting Region - Chief of Staff |
| `HB1` | **Navy Talent Acquisition Group Commanding OFF** | Navy Talent Acquisition Group - Commanding Officer |
| `HB3` | **Navy Talent Acquisition Group OFF Recruiter** | Navy Talent Acquisition Group - Officer Recruiter |
| `HC1` | **Navy Talent Acquisition Group Executive OFF** | Navy Talent Acquisition Group - Executive Officer |
| `HD1` | **Programs OFF QUAL** | Programs Officer - Qualified |
| `HG1` | **Navy Recruiting CMD General** | Navy Recruiting Command - General |
| `HG2` | **Navy Recruiting CMD Headquarters Staff OFF** | Navy Recruiting Command - Headquarters Staff Officer |
| `HG3` | **Navy Recruiting CMD General** | Navy Recruiting Command - General |
| `HH2` | **United States Naval Academy Blue and Gold OFF LVL 1** | United States Naval Academy Blue and Gold Officer - Level 1 |
| `HH3` | **United States Naval Academy Blue and Gold OFF LVL 2** | United States Naval Academy Blue and Gold Officer - Level 2 |

### Religious & Chaplain

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `51S` | **Chaplain Corps Career Status** | Chaplain Corps  - Career Status |
| `531` | **Pastoral Care Board Certified** | Pastoral Care - Board Certified |
| `541` | **CHC Milestone Assignment Commander** | CHC Milestone Assignment - Commander |
| `548` | **CHC Milestone Assignment Commander** | CHC Milestone Assignment - Commander |
| `55F` | **Fleet Marine Force (FMF) QUAL** | Fleet Marine Force (FMF) - Qualified |
| `56F` | **USCG QUAL** | USCG - Qualified |
| `5AC` | **Adventist Advent Christian Church** | Adventist - Advent Christian Church |
| `5AG` | **Adventist Advent Christian General Conference** | Adventist - Advent Christian General Conference |
| `5AJ` | **Adventist Jehovah’s Witness** | Adventist - Jehovah’s Witness |
| `5AM` | **Adventist Church of God, General Conference (Morrow, GA)** | Adventist - Church of God, General Conference (Morrow, GA) |
| `5AS` | **Adventist General Conference of Seventh-Day Adventists United States** | Adventist - General Conference of Seventh-Day Adventists United States |
| `5AV` | **Adventist Churches** | Adventist - Adventist Churches |
| `5BA` | **Baptist American Baptist Churches in the USA** | Baptist - American Baptist Churches in the USA |
| `5BB` | **Baptist Churches** | Baptist - Baptist Churches |
| `5BC` | **Baptist Southern Baptist Convention** | Baptist - Southern Baptist Convention |
| `5BD` | **Baptist New Testament Association of Independent Baptist Churches** | Baptist - New Testament Association of Independent Baptist Churches |
| `5BE` | **Baptist Conservative Baptist Association of America** | Baptist - Conservative Baptist Association of America |
| `5BF` | **Baptist National Association of Free Will Baptists** | Baptist - National Association of Free Will Baptists |
| `5BG` | **Baptist General Association of General Baptists** | Baptist - General Association of General Baptists |
| `5BH` | **Baptist Alliance of Baptists, Inc.** | Baptist - Alliance of Baptists, Inc. |
| `5BI` | **Baptist General Convention of Texas** | Baptist - Baptist General Convention of Texas |
| `5BJ` | **Baptist General Conference** | Baptist - Baptist General Conference |
| `5BK` | **Baptist Cooperative Baptist Fellowship, INC.** | Baptist - Cooperative Baptist Fellowship, INC. |
| `5BL` | **Baptist Liberty Baptist Fellowship for Church Planting, Inc.** | Baptist - Liberty Baptist Fellowship for Church Planting, Inc. |
| `5BM` | **Baptist Missionary Association of America** | Baptist - Baptist Missionary Association of America |
| `5BN` | **Baptist National Baptist Convention of America, Inc.** | Baptist - National Baptist Convention of America, Inc. |
| `5BO` | **Baptist Original Free Will Baptists Convention** | Baptist - Original Free Will Baptists Convention |
| `5BP` | **Baptist Progressive National Baptist Convention, Inc.** | Baptist - Progressive National Baptist Convention, Inc. |
| `5BQ` | **Baptist National Missionary Baptist Convention of America** | Baptist - National Missionary Baptist Convention of America |
| `5BR` | **Baptist General Association of Regular Baptist Churches** | Baptist - General Association of Regular Baptist Churches |
| `5BS` | **Baptist Seventh-Day Baptists General Conference USA and Canada** | Baptist - Seventh-Day Baptists General Conference USA and Canada |
| `5BT` | **Baptist North American Baptist Conference** | Baptist - North American Baptist Conference |
| `5BU` | **Baptist National Baptist Convention, USA, Inc.** | Baptist - National Baptist Convention, USA, Inc. |
| `5BV` | **Baptist The Sovereign Grace Baptist Association of Churches** | Baptist - The Sovereign Grace Baptist Association of Churches |
| `5BW` | **Baptist World Baptist Fellowship, Inc.** | Baptist - World Baptist Fellowship, Inc. |
| `5BX` | **Baptist American Baptist Association** | Baptist - American Baptist Association |
| `5BY` | **Baptist National Association of Baptist Churches** | Baptist - National Association of Baptist Churches |
| `5CA` | **Catholic Apostolic Catholic Orthodox Church** | Catholic - Apostolic Catholic Orthodox Church |
| `5CC` | **Catholic Churches** | Catholic - Catholic Churches |
| `5CH` | **Catholic Old Holy Catholic Church, Archdiocese of Christ the King** | Catholic - Old Holy Catholic Church, Archdiocese of Christ the King |
| `5CL` | **Catholic Liberal Catholic Church** | Catholic - Liberal Catholic Church |
| `5CN` | **Catholic National Catholic Apostolic Church in the USA** | Catholic - National Catholic Apostolic Church in the USA |
| `5CP` | **Catholic Polish National Catholic Church of America** | Catholic - Polish National Catholic Church of America |
| `5CR` | **Catholic The Roman Catholic Church** | Catholic - The Roman Catholic Church |
| `5CU` | **Catholic United Catholic Church of America** | Catholic - United Catholic Church of America |
| `5DL` | **Latter-Day Saints The Church of Jesus Christ of Latter-Day Saints** | Latter-Day Saints - The Church of Jesus Christ of Latter-Day Saints |
| `5DR` | **Latter-Day Saints Community of Christ (Reorganized Church of Jesus Christ of Latter-Day Saints)** | Latter-Day Saints - Community of Christ (Reorganized Church of Jesus Christ of Latter-Day Saints) |
| `5EA` | **Episcopalian The Anglican Catholic Church** | Episcopalian - The Anglican Catholic Church |
| `5EC` | **Episcopalian The Episcopal Church** | Episcopalian - The Episcopal Church |
| `5ED` | **Episcopalian The Communion of Evangelical Episcopal Churches** | Episcopalian - The Communion of Evangelical Episcopal Churches |
| `5EH` | **Episcopalian The Holy Catholic Church (Anglican Rite)** | Episcopalian - The Holy Catholic Church (Anglican Rite) |
| `5EI` | **Episcopalian Anglican Mission in the Americas** | Episcopalian - Anglican Mission in the Americas |
| `5EK` | **Episcopalian The Anglican Church in America** | Episcopalian - The Anglican Church in America |
| `5EM` | **Episcopalian The Episcopal Missionary Church** | Episcopalian - The Episcopal Missionary Church |
| `5EN` | **Episcopalian Anglican Church in North America** | Episcopalian - Anglican Church in North America |
| `5EO` | **Episcopalian Orthodox Anglican Church** | Episcopalian - Orthodox Anglican Church |
| `5EP` | **Episcopalian Philippine Independent Catholic Church** | Episcopalian - Philippine Independent Catholic Church |
| `5EQ` | **Episcopalian Philippine Independent Catholic Church, Military Diocese** | Episcopalian - Philippine Independent Catholic Church, Military Diocese |
| `5ER` | **Episcopalian The Reformed Episcopal Church** | Episcopalian - The Reformed Episcopal Church |
| `5ET` | **Episcopalian Jurisdiction of Armed Forces and Chaplaincy** | Episcopalian - Jurisdiction of Armed Forces and Chaplaincy |
| `5EU` | **Episcopalian United Episcopal Church of North America** | Episcopalian - United Episcopal Church of North America |
| `5EV` | **Episcopalian The Evangelical Episcopal Church** | Episcopalian - The Evangelical Episcopal Church |
| `5EX` | **Episcopalian Charismatic Episcopal Church** | Episcopalian - Charismatic Episcopal Church |
| `5FA` | **Fundamentalist Independent Churches Affiliated** | Fundamentalist - Independent Churches Affiliated |
| `5FB` | **Fundamentalist Independent Fundamental Bible** | Fundamentalist - Independent Fundamental Bible |
| `5FC` | **Fundamentalist Bible Churches Chaplaincy** | Fundamentalist - Bible Churches Chaplaincy |
| `5FD` | **Fundamentalist Berean Fundamental Church Council, Inc.** | Fundamentalist - Berean Fundamental Church Council, Inc. |
| `5FE` | **Fundamentalist Evangelical Church Alliance** | Fundamentalist - Evangelical Church Alliance |
| `5FF` | **Fundamentalist Fundamental Churches** | Fundamentalist - Fundamental Churches |
| `5FG` | **Fundamentalist Associated Gospel Churches** | Fundamentalist - Associated Gospel Churches |
| `5FH` | **Fundamentalist Foundation Baptist Fellowship International** | Fundamentalist - Foundation Baptist Fellowship International |
| `5FI` | **Fundamentalist American Council of Christian Churches** | Fundamentalist - American Council of  Christian Churches |
| `5FK` | **Fundamentalist Bible Fellowship Church** | Fundamentalist - Bible Fellowship Church |
| `5FM` | **Fundamentalist Union of Messianic Jewish Congregations** | Fundamentalist - Union of Messianic Jewish Congregations |
| `5FO` | **Fundamentalist Calvary Baptist Church (All Points Baptist Mission)** | Fundamentalist - Calvary Baptist Church (All Points Baptist Mission) |
| `5FT` | **Fundamentalist Baptist Bible Fellowship International** | Fundamentalist - Baptist Bible Fellowship International |
| `5FX` | **Fundamentalist Grace Gospel Fellowship** | Fundamentalist - Grace Gospel Fellowship |
| `5GC` | **Restorationist Christian Churches and Churches of Christ** | Restorationist - Christian Churches and Churches of Christ |
| `5GE` | **Restorationist Christian Church (Disciples of Christ)** | Restorationist - Christian Church (Disciples of Christ) |
| `5GG` | **Restorationist Churches** | Restorationist - Restorationist Churches |
| `5GT` | **Restorationist Tioga River Christian Conference** | Restorationist - Tioga River Christian Conference |
| `5GX` | **Restorationist Church of Christ** | Restorationist - Church of Christ |
| `5HA` | **Holiness Church of God Ministries (Anderson, IN)** | Holiness - Church of God Ministries (Anderson, IN) |
| `5HC` | **Holiness Churches of Christ in Christian Union** | Holiness - Churches of Christ in Christian Union |
| `5HF` | **Holiness Free Methodist Church of North America** | Holiness - Free Methodist Church of North America |
| `5HG` | **Holiness Church of God (Holiness)** | Holiness - Church of God (Holiness) |
| `5HH` | **Holiness Churches** | Holiness - Holiness Churches |
| `5HK` | **Holiness Missionary Church, Inc.** | Holiness - Missionary Church, Inc. |
| `5HM` | **Holiness The Wesleyan Church** | Holiness - The Wesleyan Church |
| `5HN` | **Holiness Church of the Nazarene** | Holiness - Church of the Nazarene |
| `5HS` | **Holiness Salvation Army, The** | Holiness - Salvation Army, The |
| `5HU` | **Holiness The Church of Christ (Holiness) USA** | Holiness - The Church of Christ (Holiness) USA |
| `5II` | **Islamic Islam** | Islamic - Islam |
| `5IM` | **Islamic American Muslim Armed Forces And Veterans Affairs Council** | Islamic - American Muslim Armed Forces And Veterans Affairs Council |
| `5IN` | **Islamic Society of North America** | Islamic - Islamic Society of North America |
| `5JA` | **Jewish The Rabbinical Assembly (Conservative)** | Jewish - The Rabbinical Assembly (Conservative) |
| `5JJ` | **Jewish Judaism** | Jewish - Judaism |
| `5JO` | **Jewish Rabbinical Council of America (Orthodox)** | Jewish - Rabbinical Council of America (Orthodox) |
| `5JP` | **Jewish Pirchei Shoshanim** | Jewish - Pirchei Shoshanim |
| `5JR` | **Jewish Central Conference of American Rabbis** | Jewish - Central Conference of American Rabbis |
| `5JS` | **Jewish The Shul** | Jewish - The Shul |
| `5JW` | **Jewish Chaplains Council (Jewish Welfare Board)** | Jewish - Jewish Chaplains Council (Jewish Welfare Board) |
| `5KB` | **Eastern Religions Buddhism** | Eastern Religions - Buddhism |
| `5KC` | **Eastern Religions Buddhist Churches of America** | Eastern Religions - Buddhist Churches of America |
| `5KD` | **Eastern Religions Chinmaya Mission West** | Eastern Religions - Chinmaya Mission West |
| `5KF` | **Eastern Religions Baha’I Faith** | Eastern Religions - Baha’I Faith |
| `5KH` | **Eastern Religions Hinduism** | Eastern Religions - Hinduism |
| `5LA` | **Lutheran The American Association of Lutheran Churches** | Lutheran - The American Association of Lutheran Churches |
| `5LB` | **Lutheran Church of the Lutheran Brethren** | Lutheran - Church of the Lutheran Brethren |
| `5LC` | **Lutheran Conservative Lutheran Association** | Lutheran - Conservative Lutheran Association |
| `5LD` | **Lutheran Evangelical Lutheran Conference and Ministerium** | Lutheran - Evangelical Lutheran Conference and Ministerium |
| `5LE` | **Lutheran Evangelical Lutheran Church in America** | Lutheran - Evangelical Lutheran Church in America |
| `5LF` | **Lutheran Association of Free Lutheran Congregations** | Lutheran - Association of Free Lutheran Congregations |
| `5LI` | **Lutheran Congregations in Mission for Christ** | Lutheran - Lutheran Congregations in Mission for Christ |
| `5LL` | **Lutheran Churches** | Lutheran - Lutheran Churches |
| `5LM` | **Lutheran The Lutheran Church-Missouri Synod** | Lutheran - The Lutheran Church-Missouri Synod |
| `5MB` | **Methodist Church of the United Brethren in Christ** | Methodist - Church of the United Brethren in Christ |
| `5MC` | **Methodist Christian Methodist Episcopal Church** | Methodist - Christian Methodist Episcopal Church |
| `5ME` | **Methodist African Methodist Episcopal Church** | Methodist - African Methodist Episcopal Church |
| `5MG` | **Methodist Evangelical Congregational Church** | Methodist - Evangelical Congregational Church |
| `5MI` | **Methodist The Association of Independent Methodists** | Methodist - The Association of Independent Methodists |
| `5MM` | **Methodist Churches** | Methodist - Methodist Churches |
| `5MN` | **Methodist Free Methodist Church of North America** | Methodist - Free Methodist Church of North America |
| `5MP` | **Methodist Iglesia Metodista De Puerto Rico** | Methodist - Iglesia Metodista De Puerto Rico |
| `5MQ` | **Methodist Primitive Methodist** | Methodist - Primitive Methodist |
| `5MR` | **Methodist Moravian Church In America** | Methodist - Moravian Church In America |
| `5MS` | **Methodist The Southern Methodist Church** | Methodist - The Southern Methodist Church |
| `5MT` | **Methodist The Congregational Methodist Church** | Methodist - The Congregational Methodist Church |
| `5MU` | **Methodist The United Methodist Church** | Methodist - The United Methodist Church |
| `5MV` | **Methodist The Evangelical Methodist Church** | Methodist - The Evangelical Methodist Church |
| `5MZ` | **Methodist African Methodist Episcopal Zion Church** | Methodist - African Methodist Episcopal Zion Church |
| `5NA` | **Independent Denomination American Missionary Fellowship** | Independent Denomination - American Missionary Fellowship |
| `5NB` | **Independent Denomination Communion of Convergence Churches, Inc.** | Independent Denomination - Communion of Convergence Churches, Inc. |
| `5ND` | **Independent Denomination Churches of Christ** | Independent Denomination - Churches of Christ |
| `5NE` | **Independent Denomination Christian Evangelical Churches of America, Inc.** | Independent Denomination - Christian Evangelical Churches of America, Inc. |
| `5NF` | **Independent Denomination Church of God in North America** | Independent Denomination - Church of God in North America |
| `5NK` | **Independent Denomination Korean Evangelical Church of America** | Independent Denomination - Korean Evangelical Church of America |
| `5NM` | **Independent Denomination Messianic Jewish Congregations, Union of** | Independent Denomination - Messianic Jewish Congregations, Union of |
| `5NN` | **Independent Denomination Missionary Church, Inc** | Independent Denomination - Missionary Church, Inc |
| `5NU` | **Independent Denomination Unaffiliated Baptist Churches of America** | Independent Denomination - Unaffiliated Baptist Churches of America |
| `5NW` | **Independent Denomination The World Council of Independent Christian Churches** | Independent Denomination - The World Council of Independent Christian Churches |
| `5OA` | **Orthodox American Carpatho-Russian Orthodox Diocese of the USA** | Orthodox - American Carpatho-Russian Orthodox Diocese of the USA |
| `5OB` | **Orthodox Assembly of Canonical Orthodox Bishops of the USA** | Orthodox - Assembly of Canonical Orthodox Bishops of the USA |
| `5OC` | **Orthodox The Orthodox Church in America** | Orthodox - The Orthodox Church in America |
| `5OE` | **Orthodox Eastern Orthodox Churches** | Orthodox - Eastern Orthodox Churches |
| `5OF` | **Orthodox Federated Orthodox Catholic Churches United Sacramentally** | Orthodox - Federated Orthodox Catholic Churches United Sacramentally |
| `5OG` | **Orthodox Greek Orthodox Archdiocese of Vasiloupolis** | Orthodox - Greek Orthodox Archdiocese of Vasiloupolis |
| `5OI` | **Orthodox Federated Orthodox Catholic Churches International** | Orthodox - Federated Orthodox Catholic Churches International |
| `5ON` | **Orthodox Antiochian Orthodox Christian Archdiocese of North America** | Orthodox - Antiochian Orthodox Christian Archdiocese of North America |
| `5OO` | **Orthodox Churches** | Orthodox - Orthodox Churches |
| `5OR` | **Orthodox Syro-Russian Orthodox Catholic Church (Romano Byzantine Synod)** | Orthodox - Syro-Russian Orthodox Catholic Church (Romano Byzantine Synod) |
| `5OS` | **Orthodox Serbian Orthodox Church in North and South America** | Orthodox - Serbian Orthodox Church in North and South America |
| `5OU` | **Orthodox Ukrainian Orthodox Church of the USA** | Orthodox - Ukrainian Orthodox Church of the USA |
| `5OX` | **Orthodox Syrian Eastern Orthodox Exarchate in America** | Orthodox - Syrian Eastern Orthodox Exarchate in America |
| `5PA` | **Pentecostal/ Charismatic I General Council of Assemblies of God** | Pentecostal/Charismatic I - General Council of Assemblies of God |
| `5PB` | **Pentecostal/ Charismatic I Full Gospel Baptist Church Fellowship, Inc.** | Pentecostal/Charismatic I - Full Gospel Baptist Church Fellowship, Inc. |
| `5PC` | **Pentecostal/ Charismatic I The Church of God in Christ, Inc.** | Pentecostal/Charismatic I - The Church of God in Christ, Inc. |
| `5PD` | **Pentecostal/ Charismatic I Full Gospel** | Pentecostal/Charismatic I - Full Gospel |
| `5PE` | **Pentecostal/ Charismatic I Elim Fellowship** | Pentecostal/Charismatic I - Elim Fellowship |
| `5PF` | **Pentecostal/ Charismatic I International Church of the Foursquare Gospel** | Pentecostal/Charismatic I - International Church of the Foursquare Gospel |
| `5PG` | **Pentecostal/ Charismatic I The Church of God of Prophecy** | Pentecostal/Charismatic I - The Church of God of Prophecy |
| `5PH` | **Pentecostal/ Charismatic I Pentecostal Holiness Church, International** | Pentecostal/Charismatic I - Pentecostal Holiness Church, International |
| `5PI` | **Pentecostal/ Charismatic I Church of Our Lord Jesus Christ of the Apostolic Faith, Inc.** | Pentecostal/Charismatic I - Church of Our Lord Jesus Christ of the Apostolic Faith, Inc. |
| `5PJ` | **Pentecostal/ Charismatic I Pentecostal Church of God, Inc. (Joplin, MO)** | Pentecostal/Charismatic I - Pentecostal Church of God, Inc. (Joplin, MO) |
| `5PK` | **Pentecostal/ Charismatic I Grace Churches International** | Pentecostal/Charismatic I - Grace Churches International |
| `5PL` | **Pentecostal/ Charismatic I Full Gospel Fellowship of Churches and Ministers International** | Pentecostal/Charismatic I - Full Gospel Fellowship of Churches and Ministers International |
| `5PM` | **Pentecostal/ Charismatic I Bethel Ministerial Association, Inc.** | Pentecostal/Charismatic I - Bethel Ministerial Association, Inc. |
| `5PO` | **Pentecostal/ Charismatic I Global Network of Christian Ministries** | Pentecostal/Charismatic I - Global Network of Christian Ministries |
| `5PP` | **Pentecostal/ Charismatic I Pentecostal Churches** | Pentecostal/Charismatic I - Pentecostal Churches |
| `5PQ` | **Pentecostal/ Charismatic I Pentecostal Churches of the Apostolic Faith Association** | Pentecostal/Charismatic I - Pentecostal Churches of the Apostolic Faith Association |
| `5PR` | **Pentecostal/ Charismatic I Church On The Rock International** | Pentecostal/Charismatic I - Church On The Rock International |
| `5PS` | **Pentecostal/ Charismatic I Open Bible Standard Churches, Inc.** | Pentecostal/Charismatic I - Open Bible Standard Churches, Inc. |
| `5PT` | **Pentecostal/ Charismatic I Church of God (Cleveland, TN)** | Pentecostal/Charismatic I - Church of God (Cleveland, TN) |
| `5PU` | **Pentecostal/ Charismatic I United Pentecostal Church International** | Pentecostal/Charismatic I - United Pentecostal Church International |
| `5PV` | **Pentecostal/ Charismatic I Vineyard Christian Fellowship Church of Cobb County, Inc** | Pentecostal/Charismatic I - Vineyard Christian Fellowship Church of Cobb County, Inc |
| `5PW` | **Pentecostal/ Charismatic I Pentecostal Assemblies of the World, Inc.** | Pentecostal/Charismatic I - Pentecostal Assemblies of the World, Inc. |
| `5PX` | **Pentecostal/ Charismatic I Calvary Chapel of Costa Mesa** | Pentecostal/Charismatic I - Calvary Chapel of Costa Mesa |
| `5PZ` | **Pentecostal/ Charismatic I Association of Evangelical Gospel Assemblies Ministries International, Inc.** | Pentecostal/Charismatic I - Association of Evangelical Gospel Assemblies Ministries International, Inc. |
| `5QA` | **Brethren/Quaker The Brethren Church, (Ashland, OH)** | Brethren/Quaker - The Brethren Church, (Ashland, OH) |
| `5QB` | **Brethren/Quaker Brethren Churches** | Brethren/Quaker - Brethren Churches |
| `5QE` | **Brethren/Quaker Evangelical Friends Church International** | Brethren/Quaker - Evangelical Friends Church International |
| `5QF` | **Brethren/Quaker Friends (Quakers)** | Brethren/Quaker - Friends (Quakers) |
| `5QG` | **Brethren/Quaker The Fellowship of Grace Brethren Churches** | Brethren/Quaker - The Fellowship of Grace Brethren Churches |
| `5QK` | **Brethren/Quaker Kansas Yearly Meeting of Friends** | Brethren/Quaker - Kansas Yearly Meeting of Friends |
| `5QQ` | **Brethren/Quaker European Free Churches** | Brethren/Quaker - European Free Churches |
| `5QS` | **Brethren/Quaker Schwenkfelder Churches** | Brethren/Quaker - Schwenkfelder Churches |
| `5RA` | **Ref/Pres/Cong The Associate Reformed Presbyterian Church** | Ref/Pres/Cong - The Associate Reformed Presbyterian Church |
| `5RB` | **Ref/Pres/Cong The Cumberland Presbyterian Church** | Ref/Pres/Cong - The Cumberland Presbyterian Church |
| `5RC` | **Ref/Pres/Cong National Association of Congregational Christian Churches** | Ref/Pres/Cong - National Association of Congregational Christian Churches |
| `5RD` | **Ref/Pres/Cong Christian Reformed Church in North America** | Ref/Pres/Cong - Christian Reformed Church in North America |
| `5RF` | **Ref/Pres/Cong Reformed Church in America** | Ref/Pres/Cong - Reformed Church in America |
| `5RG` | **Ref/Pres/Cong Churches of God, General Conference** | Ref/Pres/Cong - Churches of God, General Conference |
| `5RI` | **Ref/Pres/Cong Presbyterian Church in America** | Ref/Pres/Cong - Presbyterian Church in America |
| `5RJ` | **Ref/Pres/Cong Bible Presbyterian Church (General Synod)** | Ref/Pres/Cong - Bible Presbyterian Church (General Synod) |
| `5RK` | **Ref/Pres/Cong Korean Presbyterian Church of America** | Ref/Pres/Cong - Korean Presbyterian Church of America |
| `5RM` | **Ref/Pres/Cong The Cumberland Presbyterian Church in America** | Ref/Pres/Cong - The Cumberland Presbyterian Church in America |
| `5RN` | **Ref/Pres/Cong Reformed Presbyterian Church of North America** | Ref/Pres/Cong - Reformed Presbyterian Church of North America |
| `5RO` | **Ref/Pres/Cong The Orthodox Presbyterian Church** | Ref/Pres/Cong - The Orthodox Presbyterian Church |
| `5RP` | **Ref/Pres/Cong The Presbyterian Church (USA)** | Ref/Pres/Cong - The Presbyterian Church (USA) |
| `5RQ` | **Ref/Pres/Cong Conservative Congregational Christian Conference** | Ref/Pres/Cong - Conservative Congregational Christian Conference |
| `5RR` | **Ref/Pres/Cong Reformed and Presbyterian Churches** | Ref/Pres/Cong - Reformed and Presbyterian Churches |
| `5RS` | **Ref/Pres/Cong The Congregational Christian Church in American Samoa** | Ref/Pres/Cong - The Congregational Christian Church in American Samoa |
| `5RU` | **Ref/Pres/Cong United Church of Christ** | Ref/Pres/Cong - United Church of Christ |
| `5RV` | **Ref/Pres/Cong Evangelical Presbyterian Church** | Ref/Pres/Cong - Evangelical Presbyterian Church |
| `5RW` | **Ref/Pres/Cong International Council of Community Churches** | Ref/Pres/Cong - International Council of Community Churches |
| `5RX` | **Ref/Pres/Cong Korean-American Presbyterian Church** | Ref/Pres/Cong - Korean-American Presbyterian Church |
| `5RY` | **Ref/Pres/Cong Presbyterian and Reformed Joint Commission on Chaplains** | Ref/Pres/Cong - Presbyterian and Reformed Joint Commission on Chaplains |
| `5RZ` | **Ref/Pres/Cong Presbyterian Conference for Chaplains and Military** | Ref/Pres/Cong - Presbyterian Conference for Chaplains and Military |
| `5SC` | **Scientist The First Church of Christ, Scientist** | Scientist - The First Church of Christ, Scientist |
| `5SR` | **Scientist United Church of Religious Science** | Scientist - United Church of Religious Science |
| `5SU` | **Scientist Association of Unity Churches** | Scientist - Association of Unity Churches |
| `5TA` | **Non-Denominational Independent St Andrews Evangelical Church** | Non-Denominational Independent - St Andrews Evangelical Church |
| `5TB` | **Non-Denominational Independent Cedar Mill Bible Church** | Non-Denominational Independent - Cedar Mill Bible Church |
| `5TC` | **Non-Denominational Independent Church of the Living God** | Non-Denominational Independent - Church of the Living God |
| `5TD` | **Non-Denominational Independent The Woodfield Church** | Non-Denominational Independent - The Woodfield Church |
| `5TE` | **Non-Denominational Independent Evangel Fellowship International** | Non-Denominational Independent - Evangel Fellowship International |
| `5TF` | **Non-Denominational Independent Central Bible Church** | Non-Denominational Independent - Central Bible Church |
| `5TG` | **Non-Denominational Independent Community Church of Greenwood, Inc.** | Non-Denominational Independent - Community Church of Greenwood, Inc. |
| `5TK` | **Non-Denominational Independent Columbia Bible Church** | Non-Denominational Independent - Columbia Bible Church |
| `5TM` | **Non-Denominational Independent Camelback Bible Church** | Non-Denominational Independent - Camelback Bible Church |
| `5TP` | **Non-Denominational Independent Grace Place** | Non-Denominational Independent - Grace Place |
| `5TR` | **Non-Denominational Independent Coral Ridge Christian Fellowship** | Non-Denominational Independent - Coral Ridge Christian Fellowship |
| `5TU` | **Non-Denominational Independent Westgate Chapel** | Non-Denominational Independent - Westgate Chapel |
| `5TW` | **Non-Denominational Independent Westside Christian Family Chapel** | Non-Denominational Independent - Westside Christian Family Chapel |
| `5TX` | **Non-Denominational Independent Christ Community Church** | Non-Denominational Independent - Christ Community Church |
| `5UU` | **Unitarian The Unitarian Universalist Association** | Unitarian - The Unitarian Universalist Association |
| `5VA` | **Evangelical Asbury Bible Churches** | Evangelical - Asbury Bible Churches |
| `5VB` | **Evangelical Plymouth Brethren** | Evangelical - Plymouth Brethren |
| `5VE` | **Evangelical The Evangelical Covenant Church** | Evangelical - The Evangelical Covenant Church |
| `5VF` | **Evangelical Free Church of America** | Evangelical - Evangelical Free Church of America |
| `5VM` | **Evangelical Christian and Missionary Alliance** | Evangelical - Christian and Missionary Alliance |
| `5VN` | **Evangelical National Association of Evangelicals** | Evangelical - National Association of Evangelicals |
| `5VP` | **Evangelical Bible Protestant Church** | Evangelical - Bible Protestant Church |
| `5VV` | **Evangelical Churches** | Evangelical - Evangelical Churches |
| `5WA` | **Pentecostal/ Charismatic II Assemblies of God, International Fellowship** | Pentecostal/Charismatic II - Assemblies of God, International Fellowship |
| `5WB` | **Pentecostal/ Charismatic II Pentecostal Church of God, Inc** | Pentecostal/Charismatic II - Pentecostal Church of God, Inc |
| `5WC` | **Pentecostal/ Charismatic II Chaplaincy Full Gospel Churches, Inc.** | Pentecostal/Charismatic II - Chaplaincy Full Gospel Churches, Inc. |
| `5WD` | **Pentecostal/ Charismatic II United Evangelical Churches** | Pentecostal/Charismatic II - United Evangelical Churches |
| `5WE` | **Pentecostal/ Charismatic II Evangel Fellowship International** | Pentecostal/Charismatic II - Evangel Fellowship International |
| `5WF` | **Pentecostal/ Charismatic II Full Faith Church of Love** | Pentecostal/Charismatic II - Full Faith Church of Love |
| `5WG` | **Pentecostal/ Charismatic II Association of International Gospel Assemblies, Inc.** | Pentecostal/Charismatic II - Association of International Gospel Assemblies, Inc. |
| `5WH` | **Pentecostal/ Charismatic II Harvest Network International** | Pentecostal/Charismatic II - Harvest Network International |
| `5WI` | **Pentecostal/ Charismatic II Christ-Immanuel Ministerial Association** | Pentecostal/Charismatic II - Christ-Immanuel Ministerial Association |
| `5WJ` | **Pentecostal/ Charismatic II Christ's Church Fellowship** | Pentecostal/Charismatic II - Christ's Church Fellowship |
| `5WK` | **Pentecostal/ Charismatic II Kingsway Fellowship International** | Pentecostal/Charismatic II - Kingsway Fellowship International |
| `5WL` | **Pentecostal/ Charismatic II Liberty Fellowship of Churches And Ministers, Inc.** | Pentecostal/Charismatic II - Liberty Fellowship of Churches And Ministers, Inc. |
| `5WM` | **Pentecostal/ Charismatic II Fellowship of Churches And Ministers International** | Pentecostal/Charismatic II - Fellowship of Churches And Ministers International |
| `5WN` | **Pentecostal/ Charismatic II Faith Christian Fellowship International Church, Inc.** | Pentecostal/Charismatic II - Faith Christian Fellowship International Church, Inc. |
| `5WO` | **Pentecostal/ Charismatic II Christian Church of North America** | Pentecostal/Charismatic II - Christian Church of North America |
| `5WP` | **Pentecostal/ Charismatic II International Ministerial Fellowship** | Pentecostal/Charismatic II - International Ministerial Fellowship |
| `5WQ` | **Pentecostal/ Charismatic II Pentecostal Free Will Baptist Church, Inc** | Pentecostal/Charismatic II - Pentecostal Free Will Baptist Church, Inc |
| `5WR` | **Pentecostal/ Charismatic II Rhema Bible Church** | Pentecostal/Charismatic II - Rhema Bible Church |
| `5WS` | **Pentecostal/ Charismatic II The Coalition of Spirit-Filled Churches** | Pentecostal/Charismatic II - The Coalition of Spirit-Filled Churches |
| `5WT` | **Pentecostal/ Charismatic II Trinity Full Gospel Fellowship** | Pentecostal/Charismatic II - Trinity Full Gospel Fellowship |
| `5WU` | **Pentecostal/ Charismatic II United Full Gospel Church** | Pentecostal/Charismatic II - United Full Gospel Church |
| `5WV` | **Pentecostal/ Charismatic II Victory Christian Center** | Pentecostal/Charismatic II - Victory Christian Center |
| `5WW` | **Pentecostal/ Charismatic II International Convention of Faith Ministries, Inc.** | Pentecostal/Charismatic II - International Convention of Faith Ministries, Inc. |
| `5WX` | **Pentecostal/ Charismatic II International Christian Church** | Pentecostal/Charismatic II - International Christian Church |
| `5WY` | **Pentecostal/ Charismatic II Maranatha Christian Fellowship, Inc.** | Pentecostal/Charismatic II - Maranatha Christian Fellowship, Inc. |
| `5WZ` | **Pentecostal/ Charismatic II New Generation Church** | Pentecostal/Charismatic II - New Generation Church |
| `5XC` | **Unclassified Iglesia Ni Christo** | Unclassified - Iglesia Ni Christo |
| `5XG` | **Unclassified General Church of The New Jerusalem** | Unclassified - General Church of The New Jerusalem |
| `5XJ` | **Unclassified General Church of the New Jerusalem** | Unclassified - General Church of the New Jerusalem |
| `5YS` | **Spiritualist The Swedenborgian Church** | Spiritualist - The Swedenborgian Church |
| `5YU` | **Spiritualist Holy Spirit Association for the Unification of World Christianity** | Spiritualist - Holy Spirit Association for the Unification of World Christianity |

### Sailing & General Skills

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `111` | **Sailing Inshore Skipper (B)** | Sailing - Inshore Skipper (B) |
| `112` | **Sailing Costal Skipper (D-CS)** | Sailing - Costal Skipper (D-CS) |
| `113` | **Sailing Offshore Skipper(D-OS)** | Sailing - Offshore Skipper(D-OS) |
| `114` | **Sailing Master Skipper(E-MS)** | Sailing - Master Skipper(E-MS) |
| `115` | **Sailing Inshore Instructor** | Sailing - Inshore Instructor |
| `116` | **Yard Patrol Craftmaster** | Yard Patrol  - Craftmaster |

### Security & Law Enforcement

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `PA1` | **NSF OFF Basic** | Navy Security Force Officer - Basic |
| `PA2` | **NSF OFF Advanced** | Navy Security Force Officer - Advanced |
| `PB1` | **Installation Security OFF (ISO) CONUS** | Installation Security Officer (ISO) - CONUS |
| `PB2` | **Installation Security OFF (ISO) OCONUS** | Installation Security Officer (ISO) - OCONUS |
| `PC1` | **AT/FP OFF Base or Activity** | Force Protection/ Antiterrorism Officer - Base or Activity |
| `PC2` | **AT/FP OFF Staff** | Force Protection/ Antiterrorism Officer - Staff |
| `PD1` | **SSP Sec OFF** | Strategic Systems Programs - Security Officer |
| `PE1` | **STAAT Staff or Activity** | Security Training Assistance and Assessments Team - Staff or Activity |
| `PROFESSIONAL DEVELOPMENT (GENERAL)` | **** |  -  |
| `PS1` | **Afloat Sec OFF Staff** | Afloat Security Officer - Staff |
| `PS2` | **Afloat Sec OFF Afloat** | Afloat Security Officer - Afloat |

### Space & Technical

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `VR1` | **Space OFF - Acquisition LVL 1** | Space Officer - Acquisition - Level 1 |
| `VR2` | **Space OFF - Acquisition LVL 2** | Space Officer - Acquisition - Level 2 |
| `VR3` | **Space OFF - Acquisition LVL 3** | Space Officer - Acquisition - Level 3 |
| `VS5` | **Space OFF -OPS Basic** | Space Officer -Operations - Basic |
| `VS6` | **Space OFF -OPS LVL 1** | Space Officer -Operations - Level 1 |
| `VS7` | **Space OFF -OPS LVL 2** | Space Officer -Operations - Level 2 |
| `VS8` | **Space OFF -OPS LVL 3** | Space Officer -Operations - Level 3 |
| `VV5` | **SIWC2 Critical Major CMD/ Senior Staff** | SIWC2 Critical - Major Command/ Senior Staff |
| `VX1` | **Naval C4 Basic** | Naval C4 - Naval C4 Basic |
| `VX2` | **Naval C4 OPS** | Naval C4 - Naval C4 Operations |
| `VX3` | **Naval C4 Technical Expert** | Naval C4 - Naval C4 Technical Expert |
| `VX4` | **Naval C4 QUAL Operational Commander (Captain and Commander billet only)** | Naval C4 - Qualified Operational Commander (Captain and Commander billet only) |

### Special Warfare/NSW

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `QC1` | **Division OFF Served** | Division Officer - Served |
| `QC9` | **Division OFF QUAL** | Division Officer - Qualified |
| `QD2` | **Head Eligible** | Department Head - Eligible |
| `QD9` | **Head Served** | Department Head - Served |
| `QE1` | **Executive OFF Served** | Executive Officer - Served |
| `QF1` | **Commander CMD Served** | Commander Command - Served |
| `QF2` | **Commander CMD Acquisitions Eligible** | Commander Command - Acquisitions Eligible |
| `QF3` | **Commander CMD Served Acquisitions** | Commander Command - Served Acquisitions |
| `QG1` | **Major CMD Served** | Major Command - Served |
| `QG2` | **Major CMD Eligible** | Major Command - Eligible |
| `QH1` | **Human Resources Staff Experience** | Human Resources - Staff Experience |
| `QI1` | **Undersea Operational Experience** | Undersea - Operational Experience |
| `QI7` | **Undersea SDV Navigator** | Undersea - SDV Navigator |
| `QI8` | **Undersea Dry Combat Submersible (DCS) Pilot** | Undersea - Dry Combat Submersible (DCS) Pilot |
| `QI9` | **Undersea QUAL** | Undersea - Qualified |
| `QK1` | **Combat Support (CS) and Combat Service Support (CSS) Operational Experience** | Combat Support (CS) and Combat Service Support (CSS) - Operational Experience |
| `QK2` | **Combat Support (CS) and Combat Service Support (CSS) CMD** | Combat Support (CS) and Combat Service Support (CSS) - Command |
| `QK3` | **Combat Support (CS) and Combat Service Support (CSS) Staff Experience** | Combat Support (CS) and Combat Service Support (CSS) - Staff Experience |
| `QL1` | **Surface Operational Experience** | Surface - Operational Experience |
| `QL2` | **Surface Division OFF** | Surface - Division Officer |
| `QL3` | **Surface Assistant Head** | Surface - Assistant Department Head |
| `QL4` | **Surface Head** | Surface - Department Head |
| `QL5` | **Surface Requirements** | Surface - Requirements |
| `QL6` | **Surface OPS** | Surface - Operations |
| `QL7` | **Surface CMD Chief Warrant OFF** | Surface - Command Chief Warrant Officer |
| `QL8` | **Surface Maritime Mission Commander (MMC) QUAL** | Surface - Maritime Mission Commander (MMC) Qualified |
| `QM1` | **Reconnaissance Operational Experience** | Reconnaissance - Operational Experience |
| `QM8` | **Reconnaissance ASOTC** | Reconnaissance - ASOTC |
| `QM9` | **Reconnaissance ASOTMC** | Reconnaissance - ASOTMC |
| `QN1` | **Training Staff Experience** | Training - Staff Experience |
| `QN2` | **Training SWCC** | Training - SWCC |
| `QN3` | **SEAL Training** | SEAL - Training |
| `QO1` | **Special Warfare Technician Division OFF** | Special Warfare Technician - Division Officer |
| `QO2` | **Special Warfare Technician Assistant Head** | Special Warfare Technician - Assistant Department Head |
| `QO3` | **Special Warfare Technician Head** | Special Warfare Technician - Department Head |
| `QO4` | **Special Warfare Technician CMD Chief Warrant OFF** | Special Warfare Technician - Command Chief Warrant Officer |
| `QO5` | **Special Warfare Technician OPS** | Special Warfare Technician - Operations |
| `QO6` | **Special Warfare Technician Requirements** | Special Warfare Technician - Requirements |

### Submarine Warfare

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `S*N0` | **Nuc Trained OFF General** | Nuclear Trained Officer - General |
| `S*N1` | **Nuc Trained OFF Engineer QUAL** | Nuclear Trained Officer - Engineer Qualified |
| `S*N2` | **Nuc Trained OFF Served Engineer** | Nuclear Trained Officer - Served Engineer |
| `S*N3` | **Nuc Trained OFF Served Post Engineer** | Nuclear Trained Officer - Served Post Engineer |
| `SC2` | **CMD QUAL for Nuclear CMD** | Command - Qualified for Nuclear Command |
| `SC4` | **CMD Served SSN CMD** | Command - Served SSN Command |
| `SC5` | **CMD Served SSBN CMD** | Command - Served SSBN Command |
| `SC6` | **CMD Served Post SSN/SSBN CMD** | Command - Served Post SSN/SSBN Command |
| `SC7` | **CMD Served ASR CMD** | Command - Served ASR Command |
| `SC8` | **CMD Served Major CMD** | Command - Served Major Command |
| `SD7` | **SCUBA Trained OFF QUAL** | SCUBA Trained Officer - Qualified |
| `SEP` | **Sub Embedded Psych** | Submarine Embedded - Psychiatrist, Psychologist, Social worker, or Other mental health professional |
| `SN9` | **Nuc Trained OFF NR Support Billet** | Nuclear Trained Officer - NR Support Billet |
| `SP0` | **Nuc Wpns Strategic Weapons OFF QUAL** | Nuclear Weapons - Strategic Weapons Officer Qualified |
| `SP1` | **Nuc Wpns Nuclear CMD and Control (NC2)** | Nuclear Weapons - Nuclear Command and Control (NC2) |
| `SP2` | **Nuc Wpns SSBN AWEPS** | Nuclear Weapons - SSBN AWEPS |
| `SP3` | **Nuc Wpns SSBN WEPS** | Nuclear Weapons - SSBN WEPS |
| `SP4` | **Nuc Wpns SSBN NAV** | Nuclear Weapons - SSBN NAV |
| `SP5` | **Nuc Wpns SSBN XO** | Nuclear Weapons - SSBN XO |
| `SP6` | **Nuc Wpns Junior Technical Supervisor** | Nuclear Weapons - Nuclear Weapons Junior Technical Supervisor |
| `SP7` | **Nuc Wpns Senior Technical Supervisor** | Nuclear Weapons - Nuclear Weapons Senior Technical Supervisor |
| `SP8` | **Nuc Wpns General Strategic Policy** | Nuclear Weapons - General Strategic Policy |
| `SPA` | **Nuc Wpns Strat Exp** | Nuclear Weapons - Any Strategic Weapons Experience |
| `SPI` | **Nuc Wpns Int Strat Ed** | Nuclear Weapons - Intermediate Strategic Deterrence Education |
| `SPS` | **Nuc Wpns Sr Strat Ed** | Nuclear Weapons - Senior Strategic Deterrence Education |
| `SPACE AND ELECTRONIC WARFARE (SEW)` | **** |  -  |
| `SQ1` | **Submarine QUAL SC OFF Supply Corps** | Submarine Qualified SC Officer - Supply Corps |
| `SR1` | **Submarine Rescue OFF** | Submarine Rescue - Submarine Rescue Officer |
| `ST0` | **Tactics UW Practitioner** | Tactics - Undersea Warfare Practitioner |
| `ST1` | **Tactics UW Tactics Instructor** | Tactics - Undersea Warfare Tactics Instructor |
| `SU0` | **Submarine QUAL ED OFF General** | Submarine Qualified ED Officer - General |
| `SV1` | **Submarine QUAL Enlisted Submarine QUAL** | Submarine Qualified - Enlisted Submarine Qualified |
| `SV2` | **Submarine QUAL LDO/CWO QUAL in Submarines** | Submarine Qualified - LDO/CWO Qualified in Submarines |
| `SV3` | **Submarine QUAL IP Officers QUAL in Submarine Communications** | Submarine Qualified - IP Officers Qualified in Submarine Communications |
| `SW**1` | **Deep Submergence Staff** | Deep Submergence - Staff |
| `SW**2` | **Deep Submergence Operational** | Deep Submergence - Operational |
| `SZ1` | **Unmanned** | Unmanned -  |

### Supply & Civil Engineer Corps

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `903` | **SC Auditing** | Auditing (SC AUDIT) |
| `910` | **SC Food Svc Ops** | Food Service Operations (SC FOODSRVOPS) |
| `918` | **SC Cont Ops** | Supply Corps Officer Contingency Operations Assignment (SC JNTTADTOPS) |
| `919` | **SC Cont Ops LVL2** | Supply Corps Officer Contingency Operations Assignment Level 2 (SC 2JNTTADTOPS) |
| `920` | **SC Trans MGMT** | Transportation Management (SC TRNMGT) |
| `928` | **SC 1st Op Tour** | Completed First Operational Tour (COMP1 OPTOUR) |
| `929` | **SC 2nd Op Tour** | Completed Second Operational Tour (COMP2 OPTOUR) |
| `92A` | **SC Asgn 2nd Tur** | Assignment Second Operational Tour (ASGN2 OPTOUR) |
| `92B` | **SC LCDR Op Tour** | Completed Lieutenant Commander Operational Tour (LCDR OPTOUR) |
| `92E` | **ERP w/SAP Cert** | ERP Certificate with SAP Program (ERP W SAP CERT) |
| `935` | **SC CDR Milestone** | Commander Supply Corps Officer Milestone Completed (SC CDRMLSTNCMP) |
| `937` | **SC CDR Mlstn Sel** | Commander Supply Corps Officer Milestone Select (SC CDRMLSTNSEL) |
| `939` | **SC Ord Logistics** | Ordnance Logistics Ammo (SC ORDLOG) |
| `93A` | **SC Shore CMD** | Shore Command Complete (SC CMD COMP) |
| `93B` | **SC Maj Shore CMD** | Major Shore Command Complete (SC MAJCMD COMP) |
| `93E` | **NESCO** | Navy Expeditionary Supply Corps Officer Warfare Qualification (NESCO) |
| `940` | **SC Ship Outfitting** | Ship Outfitting (SC SHIPOUT) |
| `943` | **SC JIIM Ops** | Joint, Interagency, International, or Multinational Operations (SC JIIMOPS) |
| `945` | **SC NR Exp** | Naval Reactors Experience (SC NR EXP) |
| `949` | **SC Instructor** | Supply Corps School Instructor (SC INSTRUCTOR) |
| `950` | **CEC EIT** | Engineer in Training (CEC EIT) |
| `951` | **Registered PROF Engineer (CEC PE)** | Registered Professional Engineer (CEC PE) |
| `952` | **CEC Reg Arch** | Registered Architect (CEC RA) |
| `953` | **Architect ARE** | Architect ARE |
| `954` | **Architect AXP** | Architect AXP |
| `960` | **SCW** | Seabee Combat Warfare (SCW) |
| `965` | **LCDR CMD** | LCDR Command |
| `966` | **CDR Expeditionary CMD** | CDR Expeditionary Command |
| `967` | **Expeditionary Major CMD** | Expeditionary Major Command |
| `9L1` | **OLW OFF, 1 Tour (OLWOFF1)** | OLW Officer, 1 Tour (OLWOFF1) |
| `9L2` | **OLW OFF, 2 or more Tours (OLWOFF2)** | OLW Officer, 2 or more Tours (OLWOFF2) |
| `9L3` | **Operational Contract Support** | Operational Contract Support |
| `9P1` | **PW LVL 1 Cert** | Public Works Level 1 Career Field Certified |
| `9P2` | **PW LVL 2 Cert** | Public Works Level 2 Career Field Certified |
| `9P3` | **PW LVL 3 Cert** | Public Works Level 3 Career Field Certified |
| `9X1` | **SC LRCMOC Dir** | Director, Logistics Readiness Center, Maritime Operations Center (SC LRCMOC DIR) |

### Surface Warfare (Missile/AEGIS)

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `KA6` | **QUAL Surface Missile Systems OFF AEGIS** | Qualified Surface Missile Systems Officer - AEGIS |
| `KA7` | **Littoral Combat Ship Operator LCS, General Dynamics Hull** | Littoral Combat Ship Operator - LCS, General Dynamics Hull |
| `KA8` | **Littoral Combat Ship Operator LCS, Lockheed Martin Hull** | Littoral Combat Ship Operator - LCS, Lockheed Martin Hull |
| `KD1` | **Surf Nuc Pwr Nuclear Propulsion Operator** | Surface Nuclear Power - Nuclear Propulsion Operator |
| `KD2` | **Surf Nuc Pwr Nuclear Ship Engineer** | Surface Nuclear Power - Nuclear Ship Engineer |
| `KD4` | **Surf Nuc Pwr LDO and WO Nuclear Power Operator** | Surface Nuclear Power - LDO and WO Nuclear Power Operator |
| `KD6` | **Surf Nuc Pwr Trainee** | Surface Nuclear Power - Trainee |
| `KD7` | **Surf Nuc Pwr Naval Reactors QUAL** | Surface Nuclear Power - Naval Reactors Qualified |
| `KD8` | **Surf Nuc Pwr Nuclear Qualifying Assignment Billet** | Surface Nuclear Power - Nuclear Qualifying Assignment Billet |
| `KD9` | **Surf Nuc Pwr NR Support Billet** | Surface Nuclear Power - NR Support Billet |
| `KG0` | **EOD Head** | Explosive Ordnance Disposal - Department Head |
| `KG1` | **EOD Basic** | Explosive Ordnance Disposal - Basic |
| `KG5` | **EOD EOD Warfare** | Explosive Ordnance Disposal - EOD Warfare |
| `KG6` | **EOD Executive OFF** | Explosive Ordnance Disposal - Executive Officer |
| `KG7` | **EOD CDR CMD** | Explosive Ordnance Disposal - CDR Command |
| `KG8` | **EOD Major CMD** | Explosive Ordnance Disposal - Major Command |
| `KH9` | **Riverine Warfare Experienced** | Riverine Warfare - Experienced |
| `KI1` | **River, Coastal, and Combatant Craft Unconventional Warfare Experienced** | River, Coastal, and Combatant Craft Unconventional Warfare - Experienced |
| `KJ1` | **Drydocking OFF General** | Drydocking Officer - General |
| `KJ2` | **Drydocking OFF Floating Drydock** | Drydocking Officer - Floating Drydock |
| `KK1` | **EO Mgmt Basic** | Expendable Ordnance Management - Basic |
| `KK2` | **EO Mgmt Operational** | Expendable Ordnance Management - Operational |
| `KK3` | **EO Mgmt Master** | Expendable Ordnance Management - Master |
| `KL0` | **QUAL Diving OFF Basic** | Qualified Diving Officer - Basic |
| `KM1` | **Ship Salvage Diving OFF Basic** | Ship Salvage Diving Officer - Basic |
| `KM2` | **Ship Salvage Diving OFF Operational** | Ship Salvage Diving Officer - Operational |
| `KN1` | **Mixed Gas Basic** | Mixed Gas - Basic |
| `KN2` | **Mixed Gas Operational** | Mixed Gas - Operational |
| `KP0` | **SBHF Sat Dive WO QUAL** | Shore Based Hyperbaric Facility Saturation Dive Watch Officer - Qualified |
| `KP1` | **SBHF Sat Dive WO Basic** | Shore Based Hyperbaric Facility Saturation Dive Watch Officer - Basic |
| `KP2` | **SBHF Sat Dive WO Operational** | Shore Based Hyperbaric Facility Saturation Dive Watch Officer - Operational |
| `KS1` | **Surface Warfare Enterprise SWE OFF** | Surface Warfare Enterprise - SWE Officer |
| `KV1` | **Heavy Lift Docking Observer** | Heavy Lift - Docking Observer |
| `KV2` | **Heavy Lift Project OFF** | Heavy Lift - Project Officer |
| `KV3` | **Software Acquisition Software Project OFF** | Software Acquisition - Software Project Officer |
| `KV4` | **Software Acquisition Software Manager** | Software Acquisition - Software Program Manager |
| `KW1` | **WTI ASW/SUW** | Warfare Tactics Instructor (WTI) - Surface and Anti-Submarine (ASW/SUW) |
| `KW2` | **WTI Integrated Air MD (IAMD)** | Warfare Tactics Instructor - Integrated Air Missile Defense (IAMD) |
| `KW3` | **WTI AMW** | Warfare Tactics Instructor - Amphibious Warfare (AMW) |
| `KW4` | **WTI (WTI) MW** | Warfare Tactics Instructor (WTI) - Mine Warfare |
| `KW5` | **Adversary Warfare Tactics Lead VARMITT IAMD** | Adversary Warfare Tactics Lead - VARMITT IAMD |
| `KWC` | **WTI Prod Tour Cmplt** | Warfare Tactics Instructor - Production Tour Complete |
| `KWS` | **WTI Select** | Warfare Tactics Instructor - Select |
| `KX1` | **SuASW Adv ASW** | Surface Anti- Submarine Warfare (SuASW) - Advanced ASW Officer |

### Targeting & Intelligence

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `3A1` | **Targeting USN Targeting OFF** | Targeting - USN Targeting Officer |
| `3A2` | **Targeting Joint Targeting School GRAD** | Targeting - Joint Targeting School Graduate |
| `3A3` | **Aviation Intelligence OFF** | Aviation Intelligence - Aviation Intelligence Officer |
| `3F1` | **Foreign Disclosure OFF** | Foreign Disclosure - Officer |
| `3H2` | **HUMINT Naval Attaché** | HUMINT - Naval Attaché |
| `3H4` | **HUMINT Navy FORMICA Debriefer** | HUMINT - Navy FORMICA Debriefer |
| `3H5` | **HUMINT Military Source OPS Category II** | HUMINT - Military Source Operations Category II |
| `3H6` | **HUMINT Military Source OPS Category I** | HUMINT - Military Source Operations Category I |
| `3H7` | **HUMINT Defense Interrogator** | HUMINT - Defense Interrogator |
| `3H9` | **HUMINT Defense Strategic Debriefer** | HUMINT - Defense Strategic Debriefer |
| `3I1` | **Intelligence OFF Qualification Basic** | Intelligence Officer Qualification - Basic |
| `3K0` | **Chief Warrant OFF Geospatial Interpretation / Targeting (GEOINT/Targeting)** | Chief Warrant Officer - Geospatial Interpretation / Targeting (GEOINT/Targeting) |
| `3K3` | **Chief Warrant OFF Counterintelligence/Human Intelligence (CI/HUMINT)** | Chief Warrant Officer - Counterintelligence/Human Intelligence (CI/HUMINT) |
| `3K6` | **Chief Warrant OFF OPINTEL** | Chief Warrant Officer - OPINTEL |
| `3M1` | **Force Mgmt Intelligence MPTE Planning** | Force Management - Intelligence MPTE Planning |
| `3M2` | **Force Mgmt Intelligence Resource MGMT** | Force Management - Intelligence Resource Management |
| `3M3` | **Force Mgmt Intelligence Adaptive/ Campaign Planning** | Force Management - Intelligence Adaptive/ Campaign Planning |
| `3M4` | **Force Mgmt Intelligence Integrated Component OPS** | Force Management - Intelligence Integrated Component Operations |
| `3M5` | **Force Mgmt Senior Intelligence Manager** | Force Management - Senior Intelligence Program Manager |
| `3O1` | **Operational Fleet Intelligence Watch OFF (FIWO)** | Operational - Fleet Intelligence Watch Officer (FIWO) |
| `3Q1` | **Special Warfare Support NSW Intelligence** | Special Warfare Support - NSW Intelligence |
| `3Q2` | **Special Warfare Support NSW Intelligence Experience** | Special Warfare Support - NSW Intelligence Experience |
| `3Q3` | **Special Warfare Support Special OPS Forces Intelligence** | Special Warfare Support - Special Operations Forces Intelligence |
| `3R1` | **ISR Mgmt Collection Manager** | ISR Management - Collection Manager |
| `3R2` | **ISR Mgmt Collection / ISR Requirements MGMT** | ISR Management - Collection / ISR Requirements Management |
| `3R3` | **ISR Mgmt ISR Architecture MGMT** | ISR Management - ISR  Architecture Management |
| `3R4` | **ISR Mgmt ISR Architecture Resource MGMT** | ISR Management - ISR Architecture Resource Management |
| `3R8` | **ISR Mgmt ISRT Architecture MGMT GRAD** | ISR Management - ISRT Architecture Management Graduate |
| `3R9` | **ISR Mgmt Navy Collection MGMT Course GRAD** | ISR Management - Navy Collection Management Course Graduate |
| `3W1` | **Aviation Intelligence Weapons and Tactics OFF Course GRAD** | Aviation Intelligence Weapons and Tactics Officer - Course Graduate |
| `3X1` | **CI/HUMINT OFF** | CI/HUMINT - CI/HUMINT Officer |
| `3X2` | **CI/HUMINT MGMT** | CI/HUMINT - CI/HUMINT Management |
| `3X3` | **CI/HUMINT Cyber** | CI/HUMINT - CI/HUMINT Cyber |
| `3X4` | **CI/HUMINT Operational Support** | CI/HUMINT - Operational Support |
| `3X5` | **CI/HUMINT Advance Operational Support** | CI/HUMINT - Advance Operational Support |
| `3Y1` | **CI OFF** | CI - CI Officer |
| `3Y2` | **CI Advance CI OFF** | CI - Advance CI Officer |

### Training & Facilitation

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `TC1` | **Afloat Tactical Advisor QUAL** | Afloat Tactical Advisor - Qualified |
| `TC2` | **Afloat Tactical Advisor Experienced** | Afloat Tactical Advisor - Experienced |
| `TC3` | **Afloat Tactical Advisor Advanced** | Afloat Tactical Advisor - Advanced |
| `TD1` | **Deck OFF Chief Mate** | Deck Officer - Chief Mate |
| `TD2` | **Deck OFF Second Mate** | Deck Officer - Second Mate |
| `TD3` | **Deck OFF Third Mate** | Deck Officer - Third Mate |
| `TE1` | **Engineer OFF, Motor First Assistant Engineer** | Engineer Officer, Motor - First Assistant Engineer |
| `TE2` | **Engineer OFF, Motor Second Assistant Engineer** | Engineer Officer, Motor - Second Assistant Engineer |
| `TE3` | **Engineer OFF, Motor Third Assistant Engineer** | Engineer Officer, Motor - Third Assistant Engineer |
| `TG1` | **Engineer OFF, Gas Turbine First Assistant Engineer** | Engineer Officer, Gas Turbine - First Assistant Engineer |
| `TG2` | **Engineer OFF, Gas Turbine Second Assistant Engineer** | Engineer Officer, Gas Turbine - Second Assistant Engineer |
| `TG3` | **Engineer OFF, Gas Turbine Third Assistant Engineer** | Engineer Officer, Gas Turbine - Third Assistant Engineer |
| `TP1` | **Strategic Sealift OFF (SSO) Warfare QUAL** | Strategic Sealift Officer (SSO) - Warfare Qualified |

