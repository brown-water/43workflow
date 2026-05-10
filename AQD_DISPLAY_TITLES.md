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
| `BA1` | **ASW QUAL QUAL Non-Towed Array** | ASW Qualified - Qualified Non-Towed Array |
| `BA2` | **ASW QUAL QUAL Towed Array** | ASW Qualified - Qualified Towed Array |
| `BA3` | **ASW QUAL Key Manager** | ASW Qualified - Key Manager |
| `BA4` | **ASW QUAL IUSS** | ASW Qualified - IUSS |
| `BA5` | **ASW QUAL IUSS Experienced** | ASW Qualified - IUSS Experienced |
| `BA6` | **ASW QUAL Theater Anti-Submarine Warfare Watch OFF (TASWWO)** | ASW Qualified - Theater Anti-Submarine Warfare Watch Officer (TASWWO) |
| `BA7` | **ASW QUAL Theater Anti-Submarine Warfare Battle Watch Captain (TASW BWC)** | ASW Qualified - Theater Anti-Submarine Warfare Battle Watch Captain (TASW BWC) |
| `BA8` | **ASW QUAL Undersea Combat Systems QUAL** | ASW Qualified - Undersea Combat Systems Qualified |
| `BA9` | **ASW QUAL IUSS SURTASS Mission Commander** | ASW Qualified - IUSS SURTASS Mission Commander |
| `BAA` | **ASW QUAL Acoustic Watch OFF** | ASW Qualified - Acoustic Watch Officer |
| `BAB` | **ASW QUAL IUSS Master** | ASW Qualified - IUSS Master |
| `BB0` | **Staff OFF Battle Watch Captain** | Staff Officer - Battle Watch Captain |
| `BB1` | **Staff OFF Battle Watch Captain – C10F** | Staff Officer - Battle Watch Captain – C10F |
| `BB2` | **Staff OFF Battle Watch Captain – C2F** | Staff Officer - Battle Watch Captain – C2F |
| `BB3` | **Staff OFF Battle Watch Captain – C3F** | Staff Officer - Battle Watch Captain – C3F |
| `BB4` | **Staff OFF Battle Watch Captain – C4F** | Staff Officer - Battle Watch Captain – C4F |
| `BB5` | **Staff OFF Battle Watch Captain – C5F** | Staff Officer - Battle Watch Captain – C5F |
| `BB6` | **Staff OFF Battle Watch Captain – C6F** | Staff Officer - Battle Watch Captain – C6F |
| `BB7` | **Staff OFF Battle Watch Captain – C7F** | Staff Officer - Battle Watch Captain – C7F |
| `BBF` | **Staff OFF Battle Watch Captain – USFF** | Staff Officer - Battle Watch Captain – USFF |
| `BBP` | **Staff OFF Battle Watch Captain – CPF** | Staff Officer - Battle Watch Captain – CPF |
| `BBZ` | **Staff OFF Maritime** | Staff Officer - Maritime |
| `BC8` | **Naval Aviation Supply OFF QUAL** | Naval Aviation Supply Officer - Qualified |
| `BD1` | **Naval Aviation Observer QUAL** | Naval Aviation Observer - Qualified |
| `BE1` | **Anti-Air Warfare QUAL** | Anti-Air Warfare - Qualified |
| `BF1` | **Anti-Air Warfare (Supersedes BE) Technical Expert** | Anti-Air Warfare
(Supersedes BE)
 - Technical Expert |
| `BG1` | **Anti-Air Warfare (Supersedes BE) Operational Expert** | Anti-Air Warfare
(Supersedes BE)
 - Operational Expert |
| `BH0` | **Military Deception Planner** | Military Deception - Planner |
| `BI1` | **Cryptologic Warfare (CW) Basic** | Cryptologic Warfare (CW) - Basic |
| `BI3` | **Crytologic Warfare (IW) IO Coordinator/ Planner** | Crytologic Warfare (IW) - IO Coordinator/
Planner
 |
| `BI4` | **Information Warfare (IW) NIOC OPS Director** | Information Warfare (IW) - NIOC Operations Director |
| `BIA` | **Cryptologic Warfare (CW) Tactical Airborne** | Cryptologic Warfare (CW) - Tactical Airborne |
| `BIS` | **Cryptologic Warfare (CW) Tactical Surface** | Cryptologic Warfare (CW) - Tactical Surface |
| `BIU` | **Cryptologic Warfare (CW) Tactical Subsurface** | Cryptologic Warfare (CW) - Tactical Subsurface |
| `BIW` | **Cryptologic Warfare (CW) Tactical Naval Special Warfare Support** | Cryptologic Warfare (CW) - Tactical Naval Special Warfare Support |
| `BK1` | **Reserve Director (RPD) QUAL** | Reserve Program Director (RPD) - Qualified |
| `BL1` | **Electromagnetic Warfare Apprentice** | Electromagnetic Warfare - Apprentice |
| `BL2` | **Electromagnetic Warfare Journeyman** | Electromagnetic Warfare - Journeyman |
| `BL3` | **Electronic Warfare Expert** | Electronic Warfare - Expert |
| `BM1` | **Missile Defense Basic LVL BMD** | Missile Defense - Basic Level BMD |
| `BM2` | **Missile Defense Senior LVL BMD** | Missile Defense - Senior Level BMD |
| `BM3` | **Missile Defense MIPS course completion** | Missile Defense - MIPS course completion |
| `BM4` | **Missile Defense Junior Technical Engineer Supervisor** | Missile Defense - Junior Technical Engineer Supervisor |
| `BM5` | **Missile Defense Senior Technical Engineer Supervisor** | Missile Defense - Senior Technical Engineer Supervisor |
| `BN1` | **Mine Warfare Basic** | Mine Warfare - Basic  |
| `BN2` | **Mine Warfare QUAL Tactical Planner (Mining)** | Mine Warfare - Qualified Tactical Planner (Mining) |
| `BN3` | **Mine Warfare Basic LVL (Counter Measures)** | Mine Warfare - Basic Level (Counter Measures) |
| `BN4` | **Mine Warfare QUAL Tactical Planner (Counter Measures)** | Mine Warfare - Qualified Tactical Planner (Counter Measures) |
| `BN5` | **Mine Warfare QUAL Operational** | Mine Warfare - Qualified Operational |
| `BO2` | **Computer Network OPS (CNO) Cyber Mission Leader** | Computer Network Operations
(CNO)
 - Cyber Mission Leader |
| `BO3` | **Computer Network OPS (CNO) Cyber Service Planner** | Computer Network Operations
(CNO)
 - Cyber Service Planner |
| `BO4` | **Computer Network OPS (CNO) Cyber Joint Planner** | Computer Network Operations
(CNO)
 - Cyber Joint Planner |
| `BOC` | **Computer Network OPS (CNO) Technical Integration OFF – Capability Development** | Computer Network Operations
(CNO)
 - Technical Integration Officer – Capability Development |
| `BOD` | **Computer Network OPS (CNO) Technical Integration OFF – Defensive Cyberspace OPS (DCO)** | Computer Network Operations
(CNO)
 - Technical Integration Officer – Defensive Cyberspace Operations (DCO) |
| `BOO` | **Computer Network OPS (CNO) Technical Integration OFF – Offensive Cyberspace OPS (OCO)** | Computer Network Operations
(CNO)
 - Technical Integration Officer – Offensive Cyberspace Operations (OCO) |
| `BQ1` | **Navy Reserve Science and Technology OFF LVL 1** | Navy Reserve Science and Technology Officer - Level 1 |
| `BQ2` | **Navy Reserve Science and Technology OFF LVL 2** | Navy Reserve Science and Technology Officer - Level 2 |
| `BR0` | **Regional Cadre Indo-Pacific Cadre Entry QUAL** | Regional Cadre - Indo-Pacific Cadre Entry Qualified |
| `BR1` | **Regional Cadre Indo-Pacific Cadre Basic QUAL** | Regional Cadre - Indo-Pacific Cadre Basic Qualified |
| `BR2` | **Regional Cadre Indo-Pacific Cadre Fully Proficient QUAL** | Regional Cadre - Indo-Pacific Cadre Fully Proficient Qualified |
| `BR3` | **Regional Cadre Indo-Pacific Cadre Master** | Regional Cadre - Indo-Pacific Cadre Master  |
| `BR4` | **Regional Cadre Indo-Pacific Cadre Expert** | Regional Cadre - Indo-Pacific Cadre Expert |
| `BR5` | **Regional Cadre Indo-Pacific Cadre in Abeyance** | Regional Cadre - Indo-Pacific Cadre in  Abeyance  |
| `BS1` | **TLAM Shipboard Engagement Control OFF** | TLAM - Shipboard Engagement Control Officer |
| `BS2` | **TLAM Shipboard Strike OFF QUAL** | TLAM - Shipboard Strike Officer 
Qualified
 |
| `BS3` | **TLAM Strike Execution OFF** | TLAM - Strike Execution Officer |
| `BS4` | **TLAM Senior Strike OFF TLAM OIC** | TLAM - Senior Strike Officer TLAM OIC |
| `BS5` | **TLAM Mission Planner** | TLAM - Mission Planner |
| `BS6` | **TLAM Liaison OFF** | TLAM - Liaison Officer |
| `BT1` | **Parachutist Static-line QUAL** | Parachutist - Static-line Qualified  |
| `BT2` | **Parachutist Freefall QUAL** | Parachutist - Freefall Qualified |
| `BU1` | **Special Technical OPS QUAL** | Special Technical Operations - Qualified |
| `BV1` | **Special Access Programs (SAP) Experienced Administrator** | Special Access Programs (SAP) - Experienced Administrator |
| `BV2` | **Special Access Programs (SAP) Experienced End User** | Special Access Programs (SAP) - Experienced End User |
| `BV3` | **Special Access Programs (SAP) Eligible** | Special Access Programs (SAP) - Eligible |
| `BX1` | **Expeditionary Warfare** | Expeditionary Warfare -  |
| `BX2` | **Expeditionary Warfare Fleet Marine Force (FMF) Warfare OFF** | Expeditionary Warfare - Fleet Marine Force (FMF)
Warfare Officer
 |
| `BX3` | **Expeditionary Warfare Basic** | Expeditionary Warfare - Basic |
| `BYB` | **Requirements MGMT Certification Training (RMCT) LVL B** | Requirements Management Certification Training (RMCT) - Level B |
| `BYC` | **Requirements MGMT Certification Training (RMCT) LVL C** | Requirements Management Certification Training (RMCT) - Level C |
| `BZ1` | **Staff Fires OFF Staff Fires LVL 1** | Staff Fires Officer - Staff Fires Level 1 |
| `BZ2` | **Staff Fires OFF Staff Fires LVL 2** | Staff Fires Officer - Staff Fires Level 2 |
| `BZ3` | **Staff Fires OFF Staff Fires LVL 3** | Staff Fires Officer - Staff Fires Level 3 |
| `BZA` | **Staff FIRES GRAD – Joint Operational Fires and Effects Course** | Staff FIRES - Graduate – Joint Operational Fires and Effects Course |
| `BZB` | **Staff FIRES Experienced** | Staff FIRES - Experienced |
| `BZC` | **Staff FIRES Advanced** | Staff FIRES - Advanced |

### Acquisition Management

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `A2E` | **Major Manager Eligible** | Major Program Manager - Eligible |
| `A31` | **Acquisition Line Community Flag Eligible** | Acquisition Line Community - Flag Eligible |
| `AA2` | **MGMT LVL 2** | Program Management - Level 2 Functional Area Certified |
| `AA4` | **MGMT LVL 4** | Program Management - Level 4 Functional Area Certified |
| `AAC` | **MGMT CAP** | Program Management - Critical Acquisition Position (CAP) |
| `AAK` | **MGMT KLP** | Program Management - Key Leadership Position (KLP) |
| `AAN` | **MGMT Non-Crit** | Program Management - Non-Critical Acquisition Billet |
| `AB2` | **Business - Cost Estimating LVL 2** | Business - Cost Estimating - Level 2 Functional Area  Certified |
| `AB3` | **Business - Cost Estimating LVL 3** | Business - Cost Estimating - Level 3 Functional Area Certified |
| `ABC` | **Business - Cost Estimating CAP** | Business - Cost Estimating - Critical Acquisition Position (CAP) |
| `ABK` | **Business - Cost Estimating KLP** | Business - Cost Estimating - Key Leadership Position (KLP) |
| `ABN` | **Business - Cost Estimating Non-Crit** | Business - Cost Estimating - Non-Critical Acquisition Billet |
| `ACA` | **Contracting Contracting PROF Certified** | Contracting - Contracting Professional Certified |
| `ACC` | **Contracting CAP** | Contracting - Critical Acquisition Position (CAP) |
| `ACK` | **Contracting KLP** | Contracting - Key Leadership Position (KLP) |
| `ACN` | **Contracting Non-Crit** | Contracting - Non-Critical Acquisition Billet |
| `ACQUISITION` | ** Non-Crit** |  -  |
| `AK2` | **Business -Financial MGMT LVL 2** | Business -Financial Management - Level 2 Functional Area Certified |
| `AK4` | **Business -Financial MGMT LVL 4** | Business -Financial Management - Level 4 Functional Area Certified |
| `AKC` | **Business -Financial MGMT CAP** | Business -Financial Management - Critical Acquisition Position (CAP)  |
| `AKK` | **Business -Financial MGMT KLP** | Business -Financial Management - Key Leadership Position (KLP) |
| `AKN` | **Business -Financial MGMT Non-Crit** | Business -Financial Management - Non-Critical Acquisition Billet |
| `AL1` | **Life Cycle Logistics LVL 1** | Life Cycle Logistics - Level 1 Functional Area Certified |
| `AL3` | **Life Cycle Logistics LVL 3** | Life Cycle Logistics - Level 3 Functional Area Certified |
| `ALC` | **Life Cycle Logistics CAP** | Life Cycle Logistics - Critical Acquisition Position (CAP) |
| `ALK` | **Life Cycle Logistics KLP** | Life Cycle Logistics - Key Leadership Position (KLP) |
| `ALN` | **Life Cycle Logistics Non-Crit** | Life Cycle Logistics - Non-Critical Acquisition Billet |
| `AN1` | **Engineering and Technical MGMT LVL 1** | Engineering and Technical Management - Level 1 Functional Area Certified |
| `AN2` | **Engineering and Technical MGMT LVL 2** | Engineering and Technical Management - Level 2 Functional Area Certified |
| `ANC` | **Engineering and Technical MGMT CAP** | Engineering and Technical Management - Critical Acquisition Position (CAP) |
| `ANK` | **Engineering and Technical MGMT KLP** | Engineering and Technical Management - Key Leadership Position (KLP) |
| `ANN` | **Engineering and Technical MGMT Non-Crit** | Engineering and Technical Management - Non-Critical Acquisition Billet |
| `APM` | **DoN Acquisition PROF Member Fully QUAL** | DoN Acquisition Professional Member - Fully Qualified |
| `AT1` | **Test & Evaluation LVL 1** | Test & Evaluation - Level 1 Functional Area Certified |
| `AT2` | **Test & Evaluation LVL 2** | Test & Evaluation - Level 2 Functional Area Certified |
| `ATC` | **Test & Evaluation CAP** | Test & Evaluation - Critical Acquisition Billet |
| `ATK` | **Test & Evaluation KLP** | Test & Evaluation - Key Leadership Position (KLP) |
| `ATN` | **Test & Evaluation Non-Crit** | Test & Evaluation - Non-Critical Acquisition Billet |
| `AVIATION WARFARE` | ** ** |  -  |

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
| `DBB` | **F-35C LVL IV** | Fighter - F-35 Package
Commander/Team
Lead |
| `DC5` | **MQ-4C LVL III** | Combat Support - ISR Patrol |
| `DC6` | **MQ-4C LVL IV** | Combat Support - Instructor ISR Patrol |
| `DCF` | **FA-18F Forward Air Controller (Airborne)/ FAC(A)** | Combat Support - Forward Air Controller (Airborne)/ FAC(A)  |
| `DD1` | **E LVL I** | Combat Support - ECM Recon |
| `DD8` | **E-6B LVL I** | Combat Support - COMM |
| `DDA` | **E-6B Mercury Tactics Instructor** | Combat Support - Mercury Tactics Instructor |
| `DDB` | **EA-18G LVL V** | Combat Support - Growler Tactics Instructor |
| `DDC` | **EA-18G LVL IV** | Combat Support - Growler SEAD Lead |
| `DDD` | **EA-18G LVL III** | Combat Support - Growler Element Lead |
| `DE4` | **C-20 or C-37 Medium Jet Pilot** | Transport - Medium
Jet Pilot
 |
| `DE5` | **C-40 Heavy Jet Pilot** | Transport - Heavy
Jet Pilot
 |
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
| `DGA` | **E-6B. LVL IV** | CNATRA - TACOMO COMM NFO Instructor |
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
| `DPI` | **UC-12 Utility Pilot** | Combat Support  - Utility Pilot |
| `DQ4` | **C-130 Pilot** | Transport Heavy - Pilot |
| `DR0` | **Any Medium Transport LVL II** | Transport - Pilot |
| `DS0` | **Any (Carrier Trans) Pilot** | Carrier Transport - Pilot |
| `DS2` | **C-2A LVL I** | CVN Transport - Carrier
Onboard  Delivery (COD)
Pilot
 |
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
| `DU1` | **All Commander CMD** | Command
(Unit)
 - Commander
Command
 |
| `DU2` | **All Second Commander CMD** | Command
(Unit)
 - Second Commander Command |
| `DU3` | **All Captain CMD** | Command
(Unit)
 - Captain Command |
| `DUT` | **P-8A, MQ-4C, P-3C, EP-3E LVL 300** | Combat Support - Maritime Patrol Mission Commander |
| `DUV` | **F-18 Series, F-35C LVL III** | Combat Support - Air Interdiction Mission Commander |
| `DUW` | **F-18, MH-60 Series LVL III** | Combat Support - Rescue Mission Commander |
| `DUX` | **EA-18G LVL III** | Combat Support - SEAD Mission Commander |
| `DUY` | **E2C LVL III** | Combat Support - TAC C2 Mission Commander |
| `DUZ` | **MH-60 Series LVL III** | Combat Support - Maritime Rotary Wing Mission Commander |
| `DV0` | **Any Helicopter LVL II** | ASW - Pilot |
| `DV5` | **MH-60R LVL I** | Anti-Submarine
Warfare
 - Pilot |
| `DW0` | **Any helicopter LVL I** | Combat Support - SAR/MCM/Logistics Pilot |
| `DW1` | **UH-3 Attack/SAR/ Logistics Pilot** | Combat Support - Attack/SAR/
Logistics Pilot
 |
| `DW4` | **A SAR/Logistics Pilot** | Combat Support - SAR/Logistics Pilot |
| `DW7` | **CH-53 LVL II** | Combat Support - SAR/Logistics |
| `DW8` | **MH-53 LVL I** | Combat Support - SAR/MCM/Logistics Pilot |
| `DWA` | **MH-60S LVL I** | Combat Support - BASIC/PQM Pilot |
| `DWB` | **MH-60S LVL II** | Combat Support - SAR/Logistics Pilot |
| `DWC` | **MH-60S LVL II** | Combat Support - Combat SAR Pilot |
| `DWD` | **MH-60S LVL II** | Combat Support - Mine Warfare Pilot |
| `DWE` | **MH-60S LVL III** | Combat Support - Special Warfare Pilot |
| `DY0` | **Any Helicopter Helo Instructor Pilot (Fleet Experience)** | General - Helo Instructor Pilot (Fleet Experience) |
| `DY1` | **Any Helicopter Helo Instructor Pilot (Fleet Experience)** | Rotary Wing - Helo Instructor Pilot (Fleet Experience) |
| `DY2` | **H-60 LVL V** | Rotary Wing - Seahawk Weapons & Tactics Instructor (WTI) Pilot |
| `DY3` | **Any Helicopter Helo Instructor Pilot (Fleet Experience)** | Composite - Helo Instructor Pilot (Fleet Experience) |
| `DY5` | **Any Helicopter Pilot Training** | Rotary Wing - Pilot Training |
| `DY8` | **MQ-8 LVL 1** | Rotary Wing - MQ-8 Air Vehicle Operator (AVO) |
| `DY9` | **Helo INSTR** | Helo - MQ-8 Air Vehicle Operator (AVO) Instructor |
| `DZ2` | **Any UAV Vehicle** | Unspecified - Vehicle |
| `DZ3` | **Any UAS Vehicle** | Training/
Experience
 - Vehicle |
| `DZ7` | **Any UAS Non-Fleet Experienced UAS** | Training/
Experience
 - Non-Fleet Experienced UAS |
| `DZ8` | **Any UAV Vehicle** | Unmanned Air - Vehicle |
| `DZ9` | **Training/ Experience F-35 Mission Planning OFF** | Training/
Experience - F-35 Mission
Planning Officer |
| `DZA` | **N GRAD – Joint Air OPS CMD and Control Course (JAOC2C GRAD)** | Training/
Experience
 - Graduate – Joint Air Operations Command and Control Course
(JAOC2C GRAD)
 |
| `DZB` | **N AOC experience – Exercise Only (AOC EXER)** | Training/
Experience
 - AOC experience – Exercise Only (AOC EXER) |
| `DZC` | **N AOC QUAL (AOC QUAL)** | Training/
Experience
 - AOC Qualified (AOC QUAL) |
| `DZD` | **N AOC Operational Experience (AOC OP EXP)** | Training/
Experience
 - AOC Operational Experience
(AOC OP EXP)
 |
| `DZE` | **N Naval and Amphibious Liaison Element (NALE) Liaison OFF, Embarked (NALE LNO EMB)** | Training/
Experience
 - Naval and Amphibious Liaison Element (NALE) Liaison Officer, Embarked
(NALE LNO EMB)
 |
| `DZF` | **N GRAD – AOC Combat OPS Initial Qualification Training (IQT) course (AOC OPS)** | Training/
Experience
 - Graduate – AOC Combat Operations Initial Qualification Training (IQT) course
(AOC OPS)
 |
| `DZG` | **N GRAD – AOC Combat Plans Initial Qualification Training (IQT) course (AOC PLANS)** | Training/
Experience
 - Graduate – AOC Combat Plans Initial Qualification Training (IQT) course
(AOC PLANS)
 |
| `DZH` | **N GRAD – AOC Airspace Initial Qualification Training (IQT) course (AOC AIRSPACE)** | Training/
Experience
 - Graduate – AOC Airspace Initial Qualification Training (IQT) course
(AOC AIRSPACE)
 |
| `DZI` | **N GRAD – AOC Strategy Initial Qualification Training (IQT) course (AOC STRAT)** | Training/
Experience
 - Graduate – AOC Strategy Initial Qualification Training (IQT) course
(AOC STRAT)
 |
| `DZJ` | **N GRAD – AOC Intelligence, Surveillance and Reconnaissance (ISR) Initial Qualification Training (IQT) course (AOC ISR)** | Training/
Experience
 - Graduate – AOC Intelligence, Surveillance and Reconnaissance (ISR) Initial Qualification Training (IQT) course
(AOC ISR)
 |
| `DZK` | **N GRAD – AOC Personnel Recovery (PR) Initial Qualification Training (IQT) course (AOC PR)** | Training/
Experience
 - Graduate – AOC Personnel Recovery (PR) Initial Qualification Training (IQT) course
(AOC PR)
 |
| `DZL` | **N GRAD – AOC Interface Control OFF (ICO) Initial Qualification Training (IQT) course (AOC ICO)** | Training/
Experience
 - Graduate – AOC Interface Control Officer (ICO) Initial Qualification Training (IQT) course
(AOC ICO)
 |
| `DZM` | **Joint Air OPS GRAD – CMD & Control Warrior Advanced Course (C2WAC) (C2WAC GRAD)** | Joint Air Operations - Graduate – Command & Control Warrior Advanced Course (C2WAC) (C2WAC GRAD) |
| `DZN` | **N GRAD – Joint or Combined Senior Staff Course (J/CSSC) Or Air Component Senior leader Course (ACSLC) (ACSLC GRAD)** | Training/
Experience
 - Graduate – Joint or Combined Senior Staff Course (J/CSSC) Or Air Component Senior leader Course (ACSLC) (ACSLC GRAD) |
| `DZP` | **N TacMobile** | Training/
Experience
 - TacMobile |
| `DZQ` | **N GRAD – Aviation Safety OFF course (ASO GRAD)** | Training/
Experience
 - Graduate – Aviation Safety Officer course
(ASO GRAD)
 |
| `DZR` | **N Avionics** | Training/
Experience
 - Avionics |
| `DZS` | **N MISR WTI GRAD** | Training/
Experience
 - MISR
WTI GRAD
 |
| `DZT` | **Training/Experience INSTR** | Training/Experience - Graduate -Crew Resource Management Instructor (CRMI GRAD) |

### Aviation (Rotary/LSO)

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `EA5` | **E Field QUAL** | LSO - Field Qualified |
| `EA8` | **C-2 Landing Signal OFF** | Field Qualified - Landing Signal Officer |
| `EAU` | **F-35C Landing Signal OFF** | Field Qualified - Landing Signal Officer |
| `EAY` | **F-18 Landing Signal OFF** | Field Qualified - Landing Signal Officer |
| `EB8` | **C-2 Landing Signal OFF** | Squadron - Landing Signal Officer |
| `EBU` | **F-35C Landing Signal OFF** | Squadron - Landing Signal Officer |
| `EBY` | **F-18 Landing Signal OFF** | Squadron - Landing Signal Officer |
| `EC8` | **C-2 Landing Signal OFF** | Wing - Landing Signal Officer |
| `ECG` | **Training Jet WING LSO CVN** | LSO - WING LSO CVN |
| `ECU` | **F-35C Landing Signal OFF** | Wing - Landing Signal Officer |
| `ECY` | **F-18 Landing Signal OFF** | Wing - Landing Signal Officer |
| `ED2` | **Training Jet TRV LSO CVN** | LSO - TRV LSO CVN |
| `EDU` | **F-35C Landing Signal OFF** | Training - Landing Signal Officer |
| `EDY` | **F-18 Landing Signal OFF** | Training - Landing Signal Officer |
| `EF5` | **E SFV LSO CVN** | LSO - SFV LSO CVN |
| `EF8` | **C-2 Landing Signal OFF** | Staff - Landing Signal Officer |
| `EFU` | **F-35C Landing Signal OFF** | Staff - Landing Signal Officer |
| `EFY` | **F-18 Landing Signal OFF** | Staff - Landing Signal Officer |
| `ENGINEERING DUTY` | ** ** |  |
| `ER8` | **Training C-2 Landing Signal OFF** | Training - Landing Signal Officer |
| `EY8` | **C-2 Landing Signal OFF** | Graduate - Landing Signal Officer |
| `EYU` | **OTHER or F-35C School GRAD** | LSO - School Graduate |
| `EYY` | **F-18 School GRAD** | LSO - School Graduate |
| `EZ5` | **E School GRAD** | LSO - School Graduate |
| `EZ8` | **C-2 School GRAD** | LSO - School Graduate |
| `EZU` | **OTHER or F-35C School GRAD** | LSO - School Graduate |
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
| `FINANCIAL MANAGEMENT` | **** |  -  |
| `FM1` | **Milestone Selected** | Milestone - Selected |
| `FM2` | **Milestone Completed** | Milestone - Completed |
| `FM3` | **Milestone Major Selected** | Milestone - Major Selected |
| `FM4` | **Milestone Major Completed** | Milestone - Major Completed |
| `FOREIGN AREA OFFICER PROGRAM` | **** |  -  |
| `FS1` | **Security Cooperation Workforce Development (SCWDP) 2.0 Awareness/ Foundational** | Security Cooperation Workforce Development Program (SCWDP) 2.0 - Awareness/ Foundational |
| `FS2` | **Security Cooperation Workforce Development (SCWDP) 2.0 Practitioner** | Security Cooperation Workforce Development Program (SCWDP) 2.0 - Practitioner |
| `FS3` | **Security Cooperation Workforce Development (SCWDP) 2.0 Expert** | Security Cooperation Workforce Development Program (SCWDP) 2.0 - Expert |
| `FS4` | **Security Cooperation Workforce Development (SCWDP) 2.0 Executive** | Security Cooperation Workforce Development Program (SCWDP) 2.0 - Executive |
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
| `INFORMATION WARFARE COMMUNITY` | **** |  -  |
| `INTELLIGENCE` | **** |  -  |
| `INTRA SERVICE SPECIALTY` | **** |  -  |

### Category N

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `NAVAL WARFARE (GENERAL)` | **** |  -  |
| `NAVY SECURITY FORCE` | **** |  -  |
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
| `CBB` | **Head CMD** | Shore Installation Management - Department Head |
| `CBC` | **Executive OFF CMD** | Shore Installation Management - Executive Officer |
| `CBD` | **OFF in Charge CMD** | Shore Installation Management - Officer in Charge |
| `CBE` | **Shore CMD** | Shore Installation Management - Shore Command |
| `CBF` | **Major Shore CMD** | Shore Installation Management - Major Shore Command |
| `CBJ` | **Post-Major Shore CMD** | Shore Installation Management - Post-Major Shore Command |
| `CC1-6` | **Grade LVL* CMD** | Executive Officer - Grade level* |
| `CD1-6` | **Grade LVL* CMD** | Officer-in-charge - Grade level* |
| `CE1-6` | **Grade LVL* CMD** | Shore Command - Grade level* |
| `CF1-6` | **Grade LVL* CMD** | Major Shore Command - Grade level* |
| `CG1-6` | **Grade LVL* CMD** | Deputy Project Manager - Grade level* |
| `CH1-6` | **Grade LVL* CMD** | Major Project Manager - Grade level* |
| `CHAPLAIN CORPS (CHC)` | ** CMD** |  -  |
| `CIVIL ENGINEER CORPS` | ** CMD** |  |

### Education & Scholarships

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `211` | **Scholarship Burke Scholar** | Scholarship - Burke Scholar |
| `213` | **Scholarship Daedalian Scholar** | Scholarship - Daedalian Scholar |
| `214` | **Scholarship Fulbright Scholar** | Scholarship - Fulbright Scholar |
| `215` | **Scholarship Guggenheim Scholar** | Scholarship - Guggenheim Scholar |
| `216` | **Scholarship Hertz Scholar** | Scholarship - Hertz Scholar |
| `217` | **Scholarship Morrison Scholar** | Scholarship - Morrison Scholar |
| `218` | **Scholarship National Science Foundation** | Scholarship - National Science Foundation Program |
| `219` | **Scholarship Olmsted Scholar** | Scholarship - Olmsted Scholar |
| `221` | **Scholarship Rhodes Scholar** | Scholarship - Rhodes Scholar |
| `222` | **Scholarship Winston Churchill Foundation** | Scholarship - Winston Churchill Foundation |
| `223` | **Scholarship Other Scholarship** | Scholarship - Other Scholarship |
| `224` | **Scholarship Faculty** | Scholarship - Faculty |
| `225` | **Scholarship Physical Education Staff** | Scholarship - Physical Education Staff |
| `226` | **Scholarship Conrad Scholar** | Scholarship - Conrad Scholar |
| `227` | **Scholarship Executive Analysis for the Warfare Commander Certificate** | Scholarship - Executive Analysis for the Warfare Commander Certificate |
| `229` | **Scholarship Operational Law GRAD** | Scholarship - Operational Law Graduate |
| `231` | **Scholarship JCS Intern** | Scholarship - JCS Intern |
| `233` | **Scholarship White House Fellowship** | Scholarship - White House Fellowship |
| `234` | **Scholarship Legislative Fellowship** | Scholarship - Legislative Fellowship |
| `235` | **Legislative Assignment** | Legislative - Assignment |
| `241` | **Scholarship Asia –Pacific** | Scholarship - Asia –Pacific |
| `242` | **Scholarship Western Hemisphere** | Scholarship - Western Hemisphere |
| `243` | **Scholarship Africa Studies Concentration** | Scholarship - Africa Studies Concentration |
| `244` | **Scholarship Middle East Studies Concentration** | Scholarship - Middle East Studies Concentration |
| `245` | **Scholarship Corporate Strategic Planning** | Scholarship - Corporate Strategic Planning |
| `246` | **Scholarship EURASIA Studies Concentration** | Scholarship - EURASIA Studies Concentration |
| `247` | **Scholarship Theater/ National Strategic Planner** | Scholarship - Theater/ National Strategic Planner |
| `248` | **Scholarship Insurgency and Terrorism** | Scholarship - Insurgency and Terrorism |
| `249` | **Scholarship Information OPS, CMD and Control and Battle Space Awareness** | Scholarship - Information Operations, Command and Control and Battle Space Awareness |
| `24A` | **Scholarship Politico-Military Masters Scholar** | Scholarship - Politico-Military Masters Scholar |
| `24B` | **Scholarship Arthur S Moreau Scholar** | Scholarship - Arthur S Moreau Scholar |
| `24C` | **Scholarship Federal Executive Fellow** | Scholarship - Federal Executive Fellow |
| `24D` | **Scholarship Hudson Fellow** | Scholarship - Hudson Fellow |
| `24E` | **Scholarship CFR Navy Fellow** | Scholarship - CFR Navy Fellow |
| `24F` | **Scholarship SECDEF Executive Fellow** | Scholarship - SECDEF Executive Fellow |
| `24G` | **Scholarship SECNAV Tours with Industry** | Scholarship - SECNAV Tours with Industry |
| `24H` | **Scholarship Fleet Scholars Education (FSEP)** | Scholarship - Fleet Scholars Education Program (FSEP) |
| `24I` | **AFVentures Fellowship** | AFVentures - Fellowship |
| `24J` | **Defense Advanced Research Projects Agency (DARPA) Fellowship** | Defense Advanced Research Projects Agency (DARPA) - Fellowship |
| `261` | **Leadership Training Courses Instructor** | Leadership Training Courses - Instructor |
| `271` | **Scholarship Halsey Group Alfa** | Scholarship - Halsey Group Alfa |
| `272` | **Scholarship Halsey Group Bravo** | Scholarship - Halsey Group Bravo |
| `273` | **Scholarship Gravely Group** | Scholarship - Gravely Group |
| `275` | **Scholarship Mahan Scholars** | Scholarship - Mahan Scholars |
| `276` | **Scholarship Homeland Security / Homeland Defense (HS/HD)** | Scholarship - Homeland Security / Homeland Defense (HS/HD) |
| `278` | **Scholarship Holloway Group** | Scholarship - Holloway Group |
| `279` | **Humanitarian Assistance Disaster Relief** | Humanitarian Assistance - Disaster Relief |
| `282` | **Education Junior In-residence GRAD Education (IRGE) Screened** | Education - Junior In-residence Graduate Education (IRGE) Screened |
| `283` | **Education Senior In-residence GRAD Education (IRGE) Screened** | Education - Senior In-residence Graduate Education (IRGE) Screened |
| `284` | **Education Immediate GRAD Education /Voluntary GRAD Education (IGEP/VGEP)** | Education - Immediate Graduate Education Program/Voluntary Graduate Education Program (IGEP/VGEP) |
| `285` | **Education In-residence GRAD Education (IRGE) Completed** | Education - In-residence Graduate Education (IRGE) Completed |
| `286` | **Human Factor/Primary Prevention Analysis** | Human Factor/Primary Prevention - Analysis |
| `287` | **OPS Analysis Computational OPS Research** | Operations Analysis  - Computational Operations Research |
| `288` | **OPS Analysis Warfare Analysis** | Operations Analysis  - Warfare Analysis |
| `289` | **OPS Analysis Manpower Analysis** | Operations Analysis  - Manpower Analysis |
| `290` | **OPS Analysis Data Science** | Operations Analysis  - Data Science |
| `291` | **Strategic Warfighting Innovation Cell (SWIC) Fellow** | Strategic Warfighting Innovation Cell (SWIC) - Fellow |
| `292` | **Warrior Toughness CMD Advisor** | Warrior Toughness - Command Advisor |
| `293` | **Certified Navy Coach LVL 1** | Certified Navy Coach - Level 1 |
| `294` | **Certified Navy Coach LVL 2** | Certified Navy Coach - Level 2 |
| `295` | **Credentialed Navy Coach LVL 2** | Credentialed Navy Coach - Level 2 |
| `296` | **Certified Navy Coach LVL 3** | Certified Navy Coach - Level 3 |
| `297` | **Credentialed Navy Coach LVL 3** | Credentialed Navy Coach - Level 3 |
| `298` | **Certified Navy Coach LVL 4** | Certified Navy Coach - Level 4 |
| `299` | **Credentialed Navy Coach LVL 4** | Credentialed Navy Coach - Level 4 |
| `29A` | **Certified Navy Coach LVL 5** | Certified Navy Coach - Level 5 |
| `29B` | **Credentialed Navy Coach LVL 5** | Credentialed Navy Coach - Level 5 |
| `29D` | **Advanced Warrior Toughness Trainer** | Advanced Warrior Toughness - Trainer |
| `29E` | **Advanced Warrior Toughness Master Trainer** | Advanced Warrior Toughness - Master Trainer |
| `29H` | **Mass Casualty OPS** | Mass - Casualty Operations |
| `29I` | **Reintegration Phase III** | Reintegration - Phase III |
| `29L` | **OPS Analysis Warfare Analysis - Intermediate** | Operations Analysis - Warfare Analysis - Intermediate |
| `29M` | **OPS Analysis Manpower Analysis - Intermediate** | Operations Analysis - Manpower Analysis - Intermediate |
| `29N` | **OPS Analysis Warfare Analysis - Advanced** | Operations Analysis - Warfare Analysis - Advanced |
| `29P` | **OPS Analysis Manpower Analysis - Advanced** | Operations Analysis - Manpower Analysis - Advanced |
| `29Q` | **OPS Analysis Cross- Disciplinary Advanced** | Operations Analysis - Cross- Disciplinary Advanced |
| `29R` | **White House Military Office Presidential Service Badge QUAL** | White House Military Office - Presidential Service Badge Qualified |
| `29S` | **Safety PROF** | Safety - Professional |
| `2A1` | **Permanent Military Professor PMP Select** | Permanent Military Professor - PMP Select |
| `2A2` | **Permanent Military Professor PMP QUAL** | Permanent Military Professor - PMP Qualified |
| `2A3` | **Permanent Military Instructor PMI Select** | Permanent Military Instructor - PMI Select |
| `2A4` | **Permanent Military Instructor PMI QUAL** | Permanent Military Instructor - PMI Qualified |
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
| `2MT` | **Master Training SPEC** | Master - Training Specialist |
| `2N1` | **Navy Reserve Augment Unit Commanding OFF/OFF In Charge Qualification Eligible** | Navy Reserve Augment Unit Commanding Officer/Officer In Charge Qualification - Eligible |
| `2N2` | **Navy Reserve Augment Unit CMD Qualification CMD Complete** | Navy Reserve Augment Unit Command Qualification - Command Complete |
| `2N3` | **** |  -  |
| `2N4` | **** |  -  |
| `2N5` | **CMD Qualification Junior Strategic Weapons CMD Qualification** | Command Qualification  - Junior Strategic Weapons Command Qualification |
| `2N6` | **CMD Qualification Senior Strategic Weapons CMD Qualification** | Command Qualification  - Senior Strategic Weapons Command Qualification |
| `2P2` | **Project MGMT Certified Project MGMT PROF (PMP)** | Project Management - Certified Project Management Professional (PMP) |
| `2PT` | **Physical Readiness CMD Fitness Leader** | Physical Readiness Program - Command Fitness Leader |

### Engineering Duty

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `800` | **Registered PROF Engineer (PROENG)** | Registered Professional Engineer (PROENG) |
| `801` | **SWO-EDO TCT Candidate** | SWO-EDO TCT Program Candidate |

### Expeditionary/Naval Construction

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `LA5` | **Surface Afloat Head** | Surface Afloat - Department Head |
| `LA6` | **QUAL Chaplain Corps** | Qualified - Chaplain Corps |
| `LA7` | **QUAL Medical** | Qualified - Medical Department |
| `LA8` | **QUAL Supply Corps** | Qualified - Supply Corps |
| `LA9` | **QUAL Surface Warfare** | Qualified - Surface Warfare |
| `LAB` | **Advanced Engineering Instructors (AEI) Completed Steam Speciality Training** | Advanced Engineering Instructors (AEI) - Completed Steam Speciality Training |
| `LAC` | **Advanced Engineering Instructors (AEI) Certified AEI** | Advanced Engineering Instructors (AEI) - Certified AEI |
| `LAD` | **Advanced Engineering Instructors (AEI) Completed Diesel Speciality Training** | Advanced Engineering Instructors (AEI) - Completed Diesel Speciality Training |
| `LAG` | **Advanced Engineering Instructors (AEI) Completed Gas Turbine Specialty Training** | Advanced Engineering Instructors (AEI) - Completed Gas Turbine Specialty Training |
| `LAH` | **Advanced Engineering Instructors (AEI) Completed Hybrid Specialty Training** | Advanced Engineering Instructors (AEI) - Completed Hybrid Specialty Training |
| `LAS` | **Advanced Engineering Instructors (AEI) Selected AEI** | Advanced Engineering Instructors (AEI) - Selected AEI |
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
| `LEGAL SERVICES` | **** |  -  |
| `LF6` | **Evaluator/ Tactical Action OFF QUAL in Non-NTDS equipped unit** | Evaluator/ Tactical Action Officer - Qualified in Non-NTDS equipped unit |
| `LF7` | **Evaluator/ Tactical Action OFF QUAL in NTDS equipped unit** | Evaluator/ Tactical Action Officer - Qualified in NTDS equipped unit |
| `LF9` | **Weapons Systems Employment Hostile Engagement/Combat** | Weapons
Systems
Employment
 - Hostile
Engagement/Combat
 |
| `LG1` | **Navigation Expert Surface Ship** | Navigation Expert - Surface Ship |
| `LG2` | **Navigation Expert Navigator/ Assistant Navigator, CVN** | Navigation Expert - Navigator/ Assistant Navigator, CVN |
| `LINE OFFICER SHORE ASSIGNMENT` | **** |  -  |
| `LK8` | **Executive OFF Afloat Surface Screened** | Executive Officer Afloat - Surface Screened |
| `LK9` | **Executive OFF Afloat (LCDR and above) Unspecified** | Executive Officer Afloat (LCDR and above) - Unspecified |
| `LN1` | **CMD LT CMD** | Command - LT Command |
| `LN2` | **CMD LCDR CMD** | Command - LCDR Command |
| `LN3` | **CMD CDR CMD** | Command - CDR Command |
| `LN4` | **CMD CAPT CMD** | Command - CAPT Command |
| `LN7` | **CMD QUAL Surface CMD Commander** | Command - Qualified Surface Command Commander |
| `LN8` | **CMD Sequential CMD Captain** | Command - Sequential Command Captain |
| `LN9` | **Combat Air Controller** | Combat - Air Controller |
| `LOA` | **Option OFF ED Option** | Option Officer - ED Option |
| `LOB` | **Option OFF IP Option** | Option Officer - IP Option |
| `LOC` | **Option OFF IW Option** | Option Officer - IW Option |
| `LOD` | **Option OFF OCN Option** | Option Officer - OCN Option |
| `LOE` | **Option OFF Intelligence Option** | Option Officer - Intelligence Option |
| `LOGISTIC SUPORT` | **** |  -  |
| `LQ1` | **NCAGS Basic LVL 1** | NCAGS - Basic Level 1 |
| `LQ2` | **NCAGS Basic LVL 2** | NCAGS - Basic Level 2 |
| `LQA` | **NCAGS Shipping Coordination Team (SCT) Afloat** | NCAGS - Shipping Coordination Team (SCT) Afloat |
| `LQN` | **NCAGS Convoy Navigator** | NCAGS - Convoy Navigator |
| `LQP` | **NCAGS Convoy Planner** | NCAGS - Convoy Planner |
| `LQW` | **NCAGS Maritime Security Center Augmentation Teams (MSCAT) Watch OFF** | NCAGS - Maritime Security Center Augmentation Teams (MSCAT) Watch Officer |
| `LS0` | **Specialty Career Path Education and Training MGMT** | Specialty Career Path - Education and Training Management |
| `LS1` | **Specialty Career Path Missile Defense** | Specialty Career Path - Missile Defense |
| `LS2` | **Specialty Career Path AT/FP** | Specialty Career Path - AT/FP |
| `LS3` | **Specialty Career Path Anti-Submarine Warfare** | Specialty Career Path - Anti-Submarine Warfare |
| `LS4` | **Specialty Career Path Mine Warfare** | Specialty Career Path - Mine Warfare |
| `LS5` | **Specialty Career Path Shore Installation MGMT** | Specialty Career Path - Shore Installation Management |
| `LS6` | **Specialty Career Path Strategic Sealift** | Specialty Career Path - Strategic Sealift |
| `LS7` | **Specialty Career Path Financial MGMT** | Specialty Career Path - Financial Management |
| `LS8` | **Specialty Career Path Naval Operational Planner** | Specialty Career Path - Naval Operational Planner |
| `LS9` | **Specialty Career Path OPS Analysis** | Specialty Career Path - Operations Analysis |
| `LT1` | **Tactical Digital Information Link (TDL) OFF QUAL Interface Control OFF (ICO)** | Tactical Digital Information Link (TDL) Officer - Qualified  Interface Control Officer (ICO) |
| `LT2` | **Tactical Digital Information Link (TDL) OFF QUAL Joint Interface Control OFF (JICO)** | Tactical Digital Information Link (TDL) Officer - Qualified Joint Interface Control Officer (JICO) |
| `LT3` | **Joint Interface Control OFF (JICO) Tour Complete** | Joint Interface Control Officer (JICO)  - Tour Complete |
| `LTS` | **Joint Interface Control OFF (JICO) Screened** | Joint Interface Control Officer (JICO)  - Screened |
| `LV1` | **Naval Culture Workshop (NCW) Facilitator** | Naval Culture Workshop (NCW) - Facilitator |
| `LV2` | **Naval Culture Workshop (NCW) Lead Facilitator** | Naval Culture Workshop (NCW) - Lead
Facilitator
 |

### Human Resources

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `RA1` | **Human Resource OFF PHR** | Human Resource Officer - PHR |
| `RA2` | **Human Resource OFF SPHR** | Human Resource Officer - SPHR |
| `RA3` | **Human Resource OFF GPHR** | Human Resource Officer - GPHR |
| `RA4` | **Human Resource OFF CPT** | Human Resource Officer - CPT |
| `RB4` | **HR Milestone Assignment Lieutenant Commander** | HR 
Milestone Assignment
 - Lieutenant Commander |
| `RB5` | **HR Milestone Assignment Commander** | HR 
Milestone Assignment
 - Commander |
| `RB6` | **HR Milestone Assignment Captain** | HR 
Milestone Assignment
 - Captain |
| `RDX*` | **Development Relative experience indicated by code.** | Development - Relative experience indicated by code. |
| `RECRUITING` | **** |  -  |
| `REX*` | **MGMT Relative experience indicated by code.** | Management - Relative experience indicated by code. |
| `RFX*` | **Recruiting Relative experience indicated by code.** | Recruiting - Relative experience indicated by code. |
| `RGX*` | **Requirements Relative experience indicated by code.** | Requirements - Relative experience indicated by code. |
| `RH4` | **HR Headquarters Lieutenant Commander** | HR Headquarters - Lieutenant Commander |
| `RH5` | **HR Headquarters Commander** | HR Headquarters - Commander |
| `RIA` | **Force Development Novice** | Force Development - Novice |
| `RIB` | **Force Development Intermediate** | Force Development - Intermediate |
| `RIC` | **Force Development Advanced** | Force Development - Advanced |
| `RID` | **Force Development Expert** | Force Development - Expert |
| `RIX*` | **Force Development Relative experience indicated by code** | Force Development - Relative experience indicated by code |
| `RJA` | **Force MGMT Novice** | Force Management - Novice |
| `RJB` | **Force MGMT Intermediate** | Force Management - Intermediate |
| `RJC` | **Force MGMT Advanced** | Force Management - Advanced |
| `RJD` | **Force MGMT Expert** | Force Management - Expert |
| `RJX*` | **Force MGMT Relative experience indicated by code** | Force Management - Relative experience indicated by code |
| `RKA` | **Force Requirements and Resourcing Novice** | Force Requirements and Resourcing - Novice |
| `RKB` | **Force Requirements and Resourcing Intermediate** | Force Requirements and Resourcing - Intermediate |
| `RKC` | **Force Requirements and Resourcing Advanced** | Force Requirements and Resourcing - Advanced |
| `RKD` | **Force Requirements and Resourcing Expert** | Force Requirements and Resourcing - Expert |
| `RKX*` | **Force Requirements and Resourcing Relative experience indicated by code** | Force Requirements and Resourcing - Relative experience indicated by code |
| `RL4` | **HR Leadership Lieutenant Commander** | HR Leadership - Lieutenant Commander |
| `RL5` | **HR Leadership Commander** | HR Leadership - Commander |
| `RLC` | **HR Leadership Major CMD Eligible** | HR Leadership - Major Command Eligible |
| `RLS` | **HR Leadership HR Sea Duty** | HR Leadership - HR Sea Duty |
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
| `GA1` | **Information PROF Basic Qualification** | Information Professional - Basic Qualification |
| `GA2` | **Information PROF Intermediate Qualification** | Information Professional - Intermediate Qualification |
| `GA3` | **Information PROF Advanced Qualification** | Information Professional - Advanced Qualification |
| `GA5` | **Information Warfare Strike Group Staff Tactical Action OFF (SGSTAO)** | Information Warfare - Strike Group Staff Tactical Action Officer
(SGSTAO)
 |
| `GA6` | **Information PROF Knowledge MGMT OFF (KM)** | Information Professional - Knowledge Management Officer
(KM)
 |
| `GA7` | **Information Warfare Information Assurance OFF (IA)** | Information Warfare - Information Assurance Officer
(IA)
 |
| `GA8` | **Information Warfare Chief Information OFF (CIO)** | Information Warfare - Chief Information Officer
(CIO)
 |
| `GA9` | **Information Warfare Individual Augmentee** | Information Warfare - Individual Augmentee |
| `GB1` | **Milestone LCDR** | Milestone - LCDR |
| `GB2` | **Milestone CDR** | Milestone - CDR |
| `GB3` | **Milestone CAPT** | Milestone - CAPT |
| `GB4` | **Milestone Information Warfare Commander Afloat (CDR)** | Milestone - Information Warfare Commander Afloat (CDR) |
| `GB5` | **Milestone Information Warfare Commander Afloat Captain (CAPT)** | Milestone - Information Warfare Commander Afloat Captain (CAPT) |
| `GB6` | **Milestone Information Warfare Commander Numbered Fleet Captain (CAPT)** | Milestone - Information Warfare Commander Numbered Fleet Captain (CAPT) |
| `GC0` | **Information Warfare Community (IWC) Qualification Information Warfare** | Information  Warfare Community (IWC) Qualification Program - Information Warfare |
| `GC1` | **Information Warfare Community Qualification Information Warfare OFF Intermediate Course** | Information  Warfare Community Qualification Program - Information Warfare Officer Intermediate Course |
| `GC2` | **IWC Qualification JFTOC Watch OFF** | IWC Qualification Program - JFTOC Watch Officer |
| `GC3` | **Milestone Information Warfare Community LCDR Leadership** | Milestone - Information Warfare Community LCDR Leadership |
| `GC4` | **IWC Qualification BCA CWO** | IWC Qualification Program - BCA CWO |
| `GQ1` | **Quebec Watch Information Warfare Watch OFF (IWWO)** | Quebec Watch - Information Warfare Watch Officer (IWWO) |
| `GUI` | **Undersea Warfare Support TASW Watch OFF** | Undersea Warfare
Support
 - TASW
Watch Officer
 |
| `GW1` | **Warfare Tactics Instructor (WTI) Electronic Warfare (EW)** | Warfare Tactics Instructor (WTI) - Electronic Warfare (EW) |
| `GW2` | **Warfare Tactics Instructor (WTI) Intelligence OPS (Intel Ops)** | Warfare Tactics Instructor (WTI) - Intelligence Operations (Intel Ops) |
| `GW3` | **Warfare Tactics Instructor (WTI) Meteorology / Oceanography (METOC)** | Warfare Tactics Instructor (WTI) - Meteorology / Oceanography (METOC) |
| `GW4` | **Warfare Tactics Instructor (WTI) Information OPS (Info Ops)** | Warfare Tactics Instructor (WTI) - Information Operations (Info Ops) |
| `GW5` | **Warfare Tactics Instructor (WTI) Space** | Warfare Tactics Instructor (WTI) - Space |
| `GW6` | **Warfare Tactics Instructor (WTI) CMD and Control/Cyber Space OPS (C2/CO)** | Warfare Tactics Instructor (WTI) - Command and Control/Cyber Space Operations (C2/CO) |
| `GWI` | **Warfare Tactics Instructor (WTI) Instructor** | Warfare Tactics Instructor (WTI) - Instructor |

### Joint/Acquisition Support

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `U1A` | **Joint Staff Acquisition** | Joint Staff  - Acquisition |
| `U1C` | **Joint Staff Civil Affairs** | Joint Staff  - Civil Affairs |
| `U1D` | **Joint Staff Detainee OPS** | Joint Staff  - Detainee Operations |
| `U1F` | **Joint Staff Finance** | Joint Staff  - Finance |
| `U1H` | **Joint Staff Human Resources** | Joint Staff  - Human Resources |
| `U1I` | **Joint Staff Intelligence** | Joint Staff  - Intelligence |
| `U1L` | **Joint Staff Logistics** | Joint Staff  - Logistics |
| `U1M` | **Joint Staff Medical** | Joint Staff  - Medical |
| `U1O` | **Joint Staff OPS** | Joint Staff  - Operations |
| `U1P` | **Joint Staff Planning** | Joint Staff  - Planning |
| `U1T` | **Joint Staff Training** | Joint Staff  - Training |
| `U1X` | **Joint Staff Improvised Explosive Device** | Joint Staff  - Improvised Explosive Device |
| `U2A` | **Multinational HQ Acquisition** | Multinational HQ  - Acquisition |
| `U2C` | **Multinational HQ Civil Affairs** | Multinational HQ  - Civil Affairs |
| `U2D` | **Multinational HQ Detainee OPS** | Multinational HQ  - Detainee Operations |
| `U2F` | **Multinational HQ Finance** | Multinational HQ  - Finance |
| `U2H` | **Multinational HQ Human Resources** | Multinational HQ  - Human Resources |
| `U2I` | **Multinational HQ Intelligence** | Multinational HQ  - Intelligence |
| `U2L` | **Multinational HQ Logistics** | Multinational HQ  - Logistics |
| `U2M` | **Multinational HQ Medical** | Multinational HQ  - Medical |
| `U2O` | **Multinational HQ OPS** | Multinational HQ  - Operations |
| `U2P` | **Multinational HQ Planning** | Multinational HQ  - Planning |
| `U2T` | **Multinational HQ Training** | Multinational HQ  - Training |
| `U2X` | **Multinational HQ Improvised Explosive Device** | Multinational HQ  - Improvised Explosive Device |
| `U3A` | **Combatant Commander LVL Acquisition** | Combatant Commander Level - Acquisition |
| `U3C` | **Combatant Commander LVL Civil Affairs** | Combatant Commander Level - Civil Affairs |
| `U3D` | **Combatant Commander LVL Detainee OPS** | Combatant Commander Level - Detainee Operations |
| `U3F` | **Combatant Commander LVL Finance** | Combatant Commander Level - Finance |
| `U3H` | **Combatant Commander LVL Human Resources** | Combatant Commander Level - Human Resources |
| `U3I` | **Combatant Commander LVL Intelligence** | Combatant Commander Level - Intelligence |
| `U3L` | **Combatant Commander LVL Logistics** | Combatant Commander Level - Logistics |
| `U3M` | **Combatant Commander LVL Medical** | Combatant Commander Level - Medical |
| `U3O` | **Combatant Commander LVL OPS** | Combatant Commander Level - Operations |
| `U3P` | **Combatant Commander LVL Planning** | Combatant Commander Level - Planning |
| `U3T` | **Combatant Commander LVL Training** | Combatant Commander Level - Training |
| `U3X` | **Combatant Commander LVL Improvised Explosive Device** | Combatant Commander Level - Improvised Explosive Device |
| `U4A` | **Fleet/Division Staff Acquisition** | Fleet/Division Staff - Acquisition |
| `U4C` | **Fleet/Division Staff Civil Affairs** | Fleet/Division Staff - Civil Affairs |
| `U4D` | **Fleet/Division Staff Detainee OPS** | Fleet/Division Staff - Detainee Operations |
| `U4F` | **Fleet/Division Staff Finance** | Fleet/Division Staff - Finance |
| `U4H` | **Fleet/Division Staff Human Resources** | Fleet/Division Staff - Human Resources |
| `U4I` | **Fleet/Division Staff Intelligence** | Fleet/Division Staff - Intelligence |
| `U4L` | **Fleet/Division Staff Logistics** | Fleet/Division Staff - Logistics |
| `U4M` | **Fleet/Division Staff Medical** | Fleet/Division Staff - Medical |
| `U4O` | **Fleet/Division Staff OPS** | Fleet/Division Staff - Operations |
| `U4P` | **Fleet/Division Staff Planning** | Fleet/Division Staff - Planning |
| `U4T` | **Fleet/Division Staff Training** | Fleet/Division Staff - Training |
| `U4X` | **Fleet/Division Staff Improvised Explosive Device** | Fleet/Division Staff - Improvised Explosive Device |
| `U5A` | **Joint Task Force Acquisition** | Joint Task Force - Acquisition |
| `U5C` | **Joint Task Force Civil Affairs** | Joint Task Force - Civil Affairs |
| `U5D` | **Joint Task Force Detainee OPS** | Joint Task Force - Detainee Operations |
| `U5F` | **Joint Task Force Finance** | Joint Task Force - Finance |
| `U5H` | **Joint Task Force Human Resources** | Joint Task Force - Human Resources |
| `U5I` | **Joint Task Force Intelligence** | Joint Task Force - Intelligence |
| `U5L` | **Joint Task Force Logistics** | Joint Task Force - Logistics |
| `U5M` | **Joint Task Force Medical** | Joint Task Force - Medical |
| `U5O` | **Joint Task Force OPS** | Joint Task Force - Operations |
| `U5P` | **Joint Task Force Planning** | Joint Task Force - Planning |
| `U5T` | **Joint Task Force Training** | Joint Task Force - Training |
| `U5X` | **Joint Task Force Improvised Explosive Device** | Joint Task Force - Improvised Explosive Device |
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
| `J1A` | **Joint Staff Acquisition** | Joint Staff - Acquisition |
| `J1C` | **Joint Staff Civil Affairs** | Joint Staff - Civil Affairs |
| `J1D` | **Joint Staff Detainee OPS** | Joint Staff - Detainee Operations |
| `J1F` | **Joint Staff Finance** | Joint Staff - Finance |
| `J1H` | **Joint Staff Human Resources** | Joint Staff - Human Resources |
| `J1I` | **Joint Staff Intelligence** | Joint Staff - Intelligence |
| `J1L` | **Joint Staff Logistics** | Joint Staff - Logistics |
| `J1M` | **Joint Staff Medical** | Joint Staff - Medical |
| `J1O` | **Joint Staff OPS** | Joint Staff - Operations |
| `J1P` | **Joint Staff Planning** | Joint Staff - Planning |
| `J1T` | **Joint Staff Training** | Joint Staff - Training |
| `J1X` | **Joint Staff Improvised Explosive Device** | Joint Staff - Improvised Explosive Device |
| `J2A` | **Multinational HQ Acquisition** | Multinational HQ - Acquisition |
| `J2C` | **Multinational HQ Civil Affairs** | Multinational HQ - Civil Affairs |
| `J2D` | **Multinational HQ Detainee OPS** | Multinational HQ - Detainee Operations |
| `J2F` | **Multinational HQ Finance** | Multinational HQ - Finance |
| `J2H` | **Multinational HQ Human Resources** | Multinational HQ - Human Resources |
| `J2I` | **Multinational HQ Intelligence** | Multinational HQ - Intelligence |
| `J2L` | **Multinational HQ Logistics** | Multinational HQ - Logistics |
| `J2M` | **Multinational HQ Medical** | Multinational HQ - Medical |
| `J2O` | **Multinational HQ OPS** | Multinational HQ - Operations |
| `J2P` | **Multinational HQ Planning** | Multinational HQ - Planning |
| `J2T` | **Multinational HQ Training** | Multinational HQ - Training |
| `J2X` | **Multinational HQ Improvised Explosive Device** | Multinational HQ - Improvised Explosive Device |
| `J3A` | **Combatant Commander LVL Acquisition** | Combatant Commander Level - Acquisition |
| `J3C` | **Combatant Commander LVL Civil Affairs** | Combatant Commander Level - Civil Affairs |
| `J3D` | **Combatant Commander LVL Detainee OPS** | Combatant Commander Level - Detainee Operations |
| `J3F` | **Combatant Commander LVL Finance** | Combatant Commander Level - Finance |
| `J3H` | **Combatant Commander LVL Human Resources** | Combatant Commander Level - Human Resources |
| `J3I` | **Combatant Commander LVL Intelligence** | Combatant Commander Level - Intelligence |
| `J3L` | **Combatant Commander LVL Logistics** | Combatant Commander Level - Logistics |
| `J3M` | **Combatant Commander LVL Medical** | Combatant Commander Level - Medical |
| `J3O` | **Combatant Commander LVL OPS** | Combatant Commander Level - Operations |
| `J3P` | **Combatant Commander LVL Planning** | Combatant Commander Level - Planning |
| `J3T` | **Combatant Commander LVL Training** | Combatant Commander Level - Training |
| `J3X` | **Combatant Commander LVL Improvised Explosive Device** | Combatant Commander Level - Improvised Explosive Device |
| `J4A` | **Fleet/Division Staff Acquisition** | Fleet/Division Staff - Acquisition |
| `J4C` | **Fleet/Division Staff Civil Affairs** | Fleet/Division Staff - Civil Affairs |
| `J4D` | **Fleet/Division Staff Detainee OPS** | Fleet/Division Staff - Detainee Operations |
| `J4F` | **Fleet/Division Staff Finance** | Fleet/Division Staff - Finance |
| `J4H` | **Fleet/Division Staff Human Resources** | Fleet/Division Staff - Human Resources |
| `J4I` | **Fleet/Division Staff Intelligence** | Fleet/Division Staff - Intelligence |
| `J4L` | **Fleet/Division Staff Logistics** | Fleet/Division Staff - Logistics |
| `J4M` | **Fleet/Division Staff Medical** | Fleet/Division Staff - Medical |
| `J4O` | **Fleet/Division Staff OPS** | Fleet/Division Staff - Operations |
| `J4P` | **Fleet/Division Staff Planning** | Fleet/Division Staff - Planning |
| `J4T` | **Fleet/Division Staff Training** | Fleet/Division Staff - Training |
| `J4X` | **Fleet/Division Staff Improvised Explosive Device** | Fleet/Division Staff - Improvised Explosive Device |
| `J5A` | **Joint Task Force Acquisition** | Joint Task Force - Acquisition |
| `J5C` | **Joint Task Force Civil Affairs** | Joint Task Force - Civil Affairs |
| `J5D` | **Joint Task Force Detainee OPS** | Joint Task Force - Detainee Operations |
| `J5F` | **Joint Task Force Finance** | Joint Task Force - Finance |
| `J5H` | **Joint Task Force Human Resources** | Joint Task Force - Human Resources |
| `J5I` | **Joint Task Force Intelligence** | Joint Task Force - Intelligence |
| `J5L` | **Joint Task Force Logistics** | Joint Task Force - Logistics |
| `J5M` | **Joint Task Force Medical** | Joint Task Force - Medical |
| `J5O` | **Joint Task Force OPS** | Joint Task Force - Operations |
| `J5P` | **Joint Task Force Planning** | Joint Task Force - Planning |
| `J5T` | **Joint Task Force Training** | Joint Task Force - Training |
| `J5X` | **Joint Task Force Improvised Explosive Device** | Joint Task Force - Improvised Explosive Device |
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
| `J7C` | **PEP Indo-PACOM Follow on Tour** | PEP - Indo-PACOM
Follow on Tour
 |
| `J7D` | **PEP Europe Follow on Tour** | PEP - Europe Follow on Tour |
| `JC1` | **Terminal Attack Controller QUAL** | Terminal Attack Controller - Qualified |
| `JC2` | **Terminal Attack Controller Instructor** | Terminal Attack Controller - Instructor |
| `JC3` | **Joint Terminal Attack Controller Evaluator JTAC-E** | Joint Terminal Attack Controller Evaluator - JTAC-E |
| `JD1` | **Joint Billet JDA Billet** | Joint Billet - JDA Billet |
| `JD2` | **Joint Billet JDA Critical Billet** | Joint Billet - JDA Critical Billet |
| `JEA` | **Executive LVL Operational LVL of Warfare Course** | Executive Level - Operational Level of Warfare Course |
| `JJ1` | **Joint OPS Planning and Execution System (JOPES) JOPES Proficiency** | Joint Operations Planning and Execution System (JOPES) - JOPES Proficiency |
| `JN1` | **Navy Emergency Preparedness Liaison OFF (NEPLO) QUAL** | Navy Emergency Preparedness Liaison Officer (NEPLO) - Qualified |
| `JOINT` | **** |  -  |
| `JOM` | **Operational LVL CMD and Control Maritime** | Operational Level Command and Control - Maritime |
| `JP1` | **Joint and Maritime Operational Planner Fleet Commander LVL Operational Planner (Education)** | Joint and Maritime Operational Planner - Fleet Commander Level Operational Planner (Education) |
| `JP2` | **Joint and Maritime Operational Planner Fleet Commander LVL Operational Planner (Experience)** | Joint and Maritime Operational Planner - Fleet Commander Level Operational Planner (Experience) |
| `JP3` | **Joint and Maritime Operational Planner Fleet Commander LVL Operational Planner (Education and Experience)** | Joint and Maritime Operational Planner - Fleet Commander Level Operational Planner  (Education and Experience) |
| `JPM` | **Joint Maritime Operational Planner** | Joint - Maritime Operational Planner |
| `JPN` | **Joint Operational Planner** | Joint - Operational Planner |
| `JS1` | **Joint Qualification JPME GRAD** | Joint Qualification - JPME Graduate |
| `JS2` | **Joint Qualification Full Joint Tour Credit** | Joint Qualification - Full Joint Tour Credit |
| `JS4` | **Joint Qualification JQS LVL II** | Joint Qualification - JQS Level II |
| `JS5` | **Joint Qualification Joint QUAL OFF (JQO) JQS LVL III** | Joint Qualification - Joint Qualified Officer (JQO) JQS Level III |
| `JS6` | **Joint Qualification JQS LVL IV** | Joint Qualification - JQS Level IV |
| `JS7` | **Joint Qualification JPME Phase I GRAD** | Joint Qualification - JPME Phase I Graduate |
| `JS8` | **Joint Qualification JPME Phase II GRAD** | Joint Qualification - JPME Phase II Graduate |
| `JS9` | **Joint Qualification COS Takeout JQO JQS LVL III** | Joint Qualification - COS Takeout JQO JQS Level III |
| `JSA` | **Joint Qualification AJPME** | Joint Qualification - AJPME |
| `JSF` | **Joint Qualification Joint Duty Assignment (JDA) for Flag** | Joint Qualification - Joint Duty Assignment (JDA) for Flag |
| `JSM` | **Staff Maritime** | Staff - Maritime |
| `JSR` | **Joint Qualification Joint Duty Assignment required after one tour deferral** | Joint Qualification - Joint Duty Assignment required after one tour deferral |
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
| `4L2` | **Military Justice Litigation SPEC II (LIT SPEC II)** |  - Military Justice Litigation Specialist II
(LIT SPEC II)
 |
| `4LA` | **Louisiana Bar** |  - Lawyer, Louisiana Bar |
| `4LE` | **Military Justice Litigation Expert (LIT EXP)** |  - Military Justice Litigation Expert
(LIT EXP)
 |
| `4LS` | **Military Justice Litigation SPEC (LIT SPEC)** |  - Military Justice Litigation Specialist
(LIT SPEC)
 |
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
| `4NS` | **National Security - Cyberspace Law (CYBERSPACE LAW)** |  - National Security - Cyberspace Law 
(CYBERSPACE LAW)
 |
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
| `60N` | **Contingency/ Operational: Medical Regulator** | Contingency/ Operational - Medical Regulator |
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
| `67A` | **Executive Medicine Staff: Executive Medicine** | Executive Medicine Staff - Executive Medicine |
| `67B` | **Executive Medicine Staff: Expeditionary Medicine** | Executive Medicine Staff - Expeditionary Medicine |
| `67F` | **Executive Medicine Staff: Reserve Liaison OFF** | Executive Medicine Staff - Reserve Liaison Officer |
| `67G` | **Executive Medicine Staff: Managed Care Coordinator** | Executive Medicine Staff - Managed Care Coordinator |
| `67H` | **Executive Medicine Staff: Ambulatory Care Administration (ACA) OFF** | Executive Medicine Staff - Ambulatory Care Administration (ACA) Officer |
| `67I` | **Executive Medicine Staff: Credentialed Health Care Administrator (CHCA)** | Executive Medicine Staff - Credentialed  Health Care Administrator (CHCA) |
| `68H` | **Any Medical Designator: Health Promotion Coordinator** | Any Medical Department Designator - Health Promotion Coordinator |
| `68I` | **Any Medical Designator: Health Care MGMT** | Any Medical Department Designator - Health Care Management |
| `68J` | **Any Medical Designator: Public Health Emergency OFF (PHEO)** | Any Medical Department Designator - Public Health Emergency Officer (PHEO) |
| `68K` | **Any Medical Designator: Alternate Public Health Emergency OFF (APHEO)** | Any Medical Department Designator - Alternate Public Health Emergency Officer (APHEO) |
| `68L` | **Any Medical Designator: Clinical Informatics** | Any Medical Department Designator - Clinical Informatics |
| `68M` | **Executive Medicine Staff: Health Security Cooperation OFF** | Executive Medicine 
Staff
 - Health Security Cooperation Officer |
| `68N` | **Clinical Informatics: Expert** | Clinical Informatics - Expert |
| `68O` | **Medical Milestone Qualification: Medical Milestone Eligible** | Medical Milestone Qualification Program - Medical Milestone Eligible |
| `68P` | **Medical Milestone Qualification: Medical Milestone Eligible** | Medical Milestone Qualification Program - Medical Milestone Eligible |
| `68R` | **Navy Medicine Quality and Safety Leadership Academy (NMQSLA) Scholar: NMQSLA GRAD** | Navy Medicine Quality and Safety Leadership Academy (NMQSLA) Scholar - NMQSLA Graduate |
| `68S` | **Any Medical: Sexual Assault Forensic Examiner** | Any Medical Department - Sexual Assault Forensic Examiner |
| `69F` | **Nursing Health Care Services: Post Anesthesia Care Nursing** | Nursing Health Care Services - Post Anesthesia Care Nursing |
| `69K` | **Nursing: Pediatric Intensive Care Nursing** | Nursing - Pediatric Intensive Care Nursing |
| `69L` | **Nursing: Labor, Delivery and Recovery (LDR) Experienced Nurse** | Nursing - Labor, Delivery and Recovery (LDR) Experienced Nurse |
| `69O` | **Nursing Health Care Services: Ambulatory Care Nursing** | Nursing Health Care Services - Ambulatory Care Nursing |
| `69P` | **Nursing Health Care Services: Acute Care Nurse Practitioner/Emergency Nurse Practitioner** | Nursing Health Care Services - Acute Care Nurse Practitioner/Emergency Nurse Practitioner |
| `69Q` | **Nursing Health Care Services: Wound Care Nursing** | Nursing Health Care Services - Wound Care Nursing |
| `6AA` | **Aviation Medicine: Aviation Medical Examiner** | Aviation Medicine - Aviation Medical Examiner |
| `6AB` | **Aviation Medicine: General Flight OFF** | Aviation Medicine - General Flight Officer |
| `6AC` | **Aviation Medicine: Naval Aviator (Naval Flight OFF (NFO))/ Aeromedical OFF** | Aviation Medicine - Naval Aviator (Naval Flight Officer (NFO))/ Aeromedical Officer |
| `6AE` | **Aviation Medicine: Naval Aviator (Pilot)/ Aeromedical OFF** | Aviation Medicine - Naval Aviator (Pilot)/ Aeromedical Officer |
| `6AG` | **Aviation Medicine: Aerospace Medicine (Preventive Medicine)** | Aviation Medicine - Aerospace Medicine (Preventive Medicine) |
| `6AJ` | **Aviation Medicine: Flight Nurse** | Aviation Medicine - Flight Nurse |
| `6AM` | **Aviation Medicine: Aeromedical Safety OFF** | Aviation Medicine - Aeromedical Safety Officer |
| `6AN` | **Aviation Medicine: Aerospace Optometrist** | Aviation Medicine - Aerospace Optometrist |
| `6BG` | **Anesthesia: Cardiothoracic** | Anesthesia - Cardiothoracic |
| `6BH` | **Anesthesia: Neurosurgical** | Anesthesia - Neurosurgical |
| `6BI` | **Anesthesia: Obstetrical** | Anesthesia - Obstetrical |
| `6BK` | **Anesthesia: Pediatric** | Anesthesia - Pediatric |
| `6BL` | **Anesthesia: Regional Anesthesia** | Anesthesia - Regional Anesthesia |
| `6CD` | **Surgical: Cardiothoracic Surgery** | Surgical - Cardiothoracic Surgery |
| `6CE` | **Surgical: Colon & Rectal Surgery** | Surgical - Colon & Rectal Surgery |
| `6CG` | **Surgical: Laparodendoscopic Surgery** | Surgical - Laparodendoscopic Surgery |
| `6CH` | **Surgical: Pediatric Surgery** | Surgical - Pediatric Surgery |
| `6CI` | **Surgical: Peripheral Vascular Surgery** | Surgical - Peripheral Vascular Surgery |
| `6CJ` | **Surgical: Plastic Surgery** | Surgical - Plastic Surgery |
| `6CL` | **Surgical: Surgical Oncology** | Surgical - Surgical Oncology |
| `6CM` | **Surgical: Trauma Surgeon** | Surgical - Trauma Surgeon |
| `6DD` | **Neurological Surgery: Complex Spinal Neurological Surgery** | Neurological Surgery - Complex Spinal Neurological Surgery |
| `6DE` | **Neurological Surgery: Skull Base Neurological Surgery** | Neurological Surgery - Skull Base Neurological Surgery |
| `6DF` | **Neurological Surgery: Pediatric Neurosurgery** | Neurological Surgery - Pediatric Neurosurgery |
| `6DG` | **Neurological Surgery: Neurovascular Neurological Surgery** | Neurological Surgery - Neurovascular Neurological Surgery |
| `6EG` | **Obstetrics/Gynecology (OB/GYN): Gynecologic Oncology** | Obstetrics/Gynecology (OB/GYN) - Gynecologic Oncology |
| `6EH` | **Obstetrics/Gynecology (OB/GYN): Maternal Fetal Medicine** | Obstetrics/Gynecology (OB/GYN) - Maternal Fetal Medicine |
| `6EI` | **Obstetrics/Gynecology (OB/GYN): Reproductive Endocrinology** | Obstetrics/Gynecology (OB/GYN) - Reproductive Endocrinology |
| `6EJ` | **Obstetrics/Gynecology (OB/GYN): Urogynecology and Pelvic Surgery** | Obstetrics/Gynecology (OB/GYN) - Urogynecology and Pelvic Surgery |
| `6FA` | **Field Medicine: Marine Corps Medical OFF** | Field Medicine - Marine Corps Medical Department Officer |
| `6FC` | **Field Medicine: Fleet Marine Force Medical Logistics** | Field Medicine - Fleet Marine Force Medical Logistics |
| `6FD` | **Field Medicine: Surface Experienced Medical OFF** | Field Medicine - Surface Experienced Medical Officer |
| `6FE` | **Field Medicine: Senior Marine Corps Staff OFF** | Field Medicine - Senior Marine Corps Staff Officer |
| `6GA` | **Ophthalmology: Aviation Optometry** | Ophthalmology - Aviation Optometry |
| `6GE` | **Ophthalmology: Cornea and External Disease** | Ophthalmology - Cornea and External Disease |
| `6GF` | **Ophthalmology: Glaucoma** | Ophthalmology - Glaucoma |
| `6GG` | **Ophthalmology: Neuro- ophthalmology/ Surgical Neuro- ophthalmology** | Ophthalmology - Neuro- ophthalmology/ Surgical  Neuro- ophthalmology |
| `6GH` | **Ophthalmology: Oculoplastics** | Ophthalmology - Oculoplastics |
| `6GI` | **Ophthalmology: Ophthalmic Pathology Surgery** | Ophthalmology - Ophthalmic Pathology Surgery |
| `6GJ` | **Ophthalmology: Retina Vitreous Surgery** | Ophthalmology - Retina Vitreous Surgery |
| `6GK` | **Ophthalmology: Strabismus** | Ophthalmology - Strabismus |
| `6HD` | **Orthopaedic Surgery: Foot and Ankle Surgery** | Orthopaedic Surgery - Foot and Ankle Surgery |
| `6HF` | **Orthopaedic Surgery: Orthopaedic Oncology** | Orthopaedic Surgery - Orthopaedic Oncology |
| `6HG` | **Orthopaedic Surgery: Pediatric Orthopaedic Surgery** | Orthopaedic Surgery - Pediatric Orthopaedic Surgery |
| `6HH` | **Orthopaedic Surgery: Spine Surgery** | Orthopaedic Surgery - Spine Surgery |
| `6HI` | **Orthopaedic Surgery: Sports Surgery** | Orthopaedic Surgery - Sports Surgery |
| `6HJ` | **Orthopaedic Surgery: Total Joint** | Orthopaedic Surgery - Total Joint |
| `6HK` | **Orthopaedic Surgery: Trauma Surgery** | Orthopaedic Surgery - Trauma Surgery |
| `6HL` | **Orthopaedic Surgery: Orthopaedic Physicians Assistant** | Orthopaedic Surgery - Orthopaedic Physicians Assistant |
| `6ID` | **Otolaryngology: Facial Plastics and Reconstructive Surgery** | Otolaryngology - Facial Plastics and Reconstructive Surgery |
| `6IE` | **Otolaryngology: Head and Neck Surgery** | Otolaryngology - Head and Neck Surgery |
| `6IF` | **Otolaryngology: Neurotology** | Otolaryngology - Neurotology |
| `6IG` | **Otolaryngology: Pediatric Otolaryngology** | Otolaryngology - Pediatric Otolaryngology |
| `6IH` | **Otolaryngology: Laryngology** | Otolaryngology - Laryngology |
| `6II` | **Otolaryngology: Rhinology** | Otolaryngology - Rhinology |
| `6JD` | **Urologic: Endocrinologic Urologist** | Urologic - Endocrinologic Urologist |
| `6JE` | **Urologic: Female Urology** | Urologic - Female Urology |
| `6JF` | **Urologic: Infertility Urology** | Urologic - Infertility Urology |
| `6JG` | **Urologic: Pediatric Urology** | Urologic - Pediatric Urology |
| `6JH` | **Urologic: Urinary Stone Disease** | Urologic - Urinary Stone Disease |
| `6JI` | **Urologic: Urologic Oncology** | Urologic - Urologic Oncology |
| `6KL` | **Preventive/ Occupational Medicine: Radiation Safety OFF** | Preventive/ Occupational Medicine - Radiation Safety Officer |
| `6KM` | **Preventive/ Occupational Medicine: Medical Laser Safety OFF (MLSO)** | Preventive/ Occupational Medicine - Medical Laser Safety Officer (MLSO) |
| `6LC` | **Physical Medicine and Rehabilitation: Electroneuromyographic SPEC** | Physical Medicine and Rehabilitation - Electroneuromyographic Specialist |
| `6LD` | **Physical Medicine and Rehabilitation: Musculoskeletal Screener** | Physical Medicine and Rehabilitation - Musculoskeletal Screener |
| `6LJ` | **Physical Medicine and Rehabilitation: Upper Extremity Neuromusculo-skeletal Evaluator (UENMSE)** | Physical Medicine and Rehabilitation - Upper Extremity Neuromusculo-skeletal Evaluator (UENMSE) |
| `6LN` | **Physical Medicine and Rehabilitation: Spinal Cord Rehabilitation SPEC** | Physical Medicine and Rehabilitation - Spinal Cord Rehabilitation Specialist |
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
| `6OA` | **Contingency/ Operational: Operational Forces Medical Liaison Services (OFMLS) OFF** | Contingency/ Operational - Operational Forces Medical Liaison Services (OFMLS) Officer |
| `6OB` | **Contingency/ Operational: Shipboard Assignment** | Contingency/ Operational - Shipboard Assignment |
| `6OC` | **Contingency/ Operational: Hospital Ship Assignment** | Contingency/ Operational - Hospital Ship Assignment |
| `6OD` | **Contingency/ Operational: En Route Care – Advanced** | Contingency/ Operational - En Route Care – Advanced  |
| `6OE` | **Contingency/ Operational: En-route Care** | Contingency/ Operational - En-route Care |
| `6OF` | **Contingency/ Operational: Forward Deployable Preventive Medicine Unit (FDPMU)** | Contingency/ Operational - Forward Deployable Preventive Medicine Unit (FDPMU) |
| `6OG` | **Contingency/Operational: Hospitalist** | Contingency/Operational - Hospitalist |
| `6OH` | **Contingency/ Operational: Humanitarian Assistance/Disaster Response** | Contingency/ Operational - Humanitarian Assistance/Disaster Response |
| `6OI` | **Contingency/ Operational: PROF Medical CBRN OFF** | Contingency/ Operational - Professional Medical CBRN Officer |
| `6OJ` | **Contingency/ Operational: Associate Medical CBRN OFF** | Contingency/ Operational - Associate Medical CBRN Officer |
| `6OK` | **Contingency/ Operational: Human Performance SPEC** | Contingency/ Operational - Human Performance Specialist |
| `6OL` | **Contingency/ Operational: Navy Expeditionary Medical OFF (NEMDO)** | Contingency/ Operational - Navy Expeditionary Medical Department Officer (NEMDO) |
| `6OO` | **Operational/Contingency: Emergency Medicine Services Medical Director** | Operational/Contingency - Emergency Medicine Services
Medical Director |
| `6OR` | **Contingency/ Operational: CATF Surgeon** | Contingency/ Operational - CATF Surgeon |
| `6OS` | **Contingency/ Operational: SERE Certified Psychologist** | Contingency/ Operational - SERE Certified Psychologist |
| `6OT` | **Contingency/ Operational: C4 Trained Plus Ortho Surg Enhancement Module** | Contingency/ Operational - C4 Trained Plus Ortho Surg Enhancement Module |
| `6OU` | **Contingency/ Operational: Fleet Hospital Assignment** | Contingency/ Operational - Fleet Hospital Assignment |
| `6OV` | **Contingency/ Operational: SPEC in Blood Banking** | Contingency/ Operational - Specialist in Blood Banking |
| `6OW` | **Contingency/ Operational: Trauma Team Trained OFF (TTTO)** | Contingency/ Operational - Trauma Team Trained Officer (TTTO) |
| `6OX` | **Contingency/ Operational: Operational Psychology** | Contingency/ Operational - Operational Psychology |
| `6OY` | **Operational/Contingency: Trained Trauma Team OFF Advanced** | Operational/Contingency - Trained Trauma Team Officer Advanced |
| `6OZ` | **Medical: Simulationist** | Medical - Simulationist |
| `6PD` | **Emergency Medicine: Emergency Medicine Services** | Emergency Medicine - Emergency Medicine Services |
| `6PE` | **Emergency Medicine: Medical Toxicology** | Emergency Medicine - Medical Toxicology |
| `6PF` | **Emergency Medicine: Pediatric Emergency Medicine** | Emergency Medicine - Pediatric Emergency Medicine |
| `6PG` | **Emergency Medicine: Emergency Ultrasound** | Emergency Medicine - Emergency Ultrasound |
| `6PH` | **Emergency Medicine: Emergency Medicine Physician Assistant** | Emergency Medicine - Emergency Medicine Physician Assistant |
| `6QF` | **Family Practice: Obstetrics (Additional Training)** | Family Practice - Obstetrics (Additional Training) |
| `6RF` | **Internal Medicine: Allergy Immunologist DLI** | Internal Medicine - Allergy Immunologist DLI |
| `6RG` | **Internal Medicine: Cardiology, General** | Internal Medicine - Cardiology, General |
| `6RH` | **Internal Medicine: Cardiac Electrophysiologist** | Internal Medicine - Cardiac Electrophysiologist |
| `6RI` | **Internal Medicine: Interventional Cardiologist** | Internal Medicine - Interventional Cardiologist |
| `6RK` | **Internal Medicine: Endocrinologist** | Internal Medicine - Endocrinologist |
| `6RL` | **Internal Medicine: Gastroenterologist** | Internal Medicine - Gastroenterologist |
| `6RM` | **Internal Medicine: Hepatology** | Internal Medicine - Hepatology |
| `6RN` | **Internal Medicine: Hematologist** | Internal Medicine - Hematologist |
| `6RO` | **Internal Medicine: Oncologist** | Internal Medicine - Oncologist |
| `6RP` | **Internal Medicine: Infectious Diseases SPEC** | Internal Medicine - Infectious Diseases Specialist |
| `6RQ` | **Internal Medicine: Nephrology** | Internal Medicine - Nephrology |
| `6RR` | **Internal Medicine: Pulmonologist** | Internal Medicine - Pulmonologist |
| `6RS` | **Internal Medicine: Rheumatologist** | Internal Medicine - Rheumatologist |
| `6RT` | **Internal Medicine: Advanced Endoscopic Training** | Internal Medicine - Advanced Endoscopic Training |
| `6RV` | **Internal Medicine: Tropical Medicine** | Internal Medicine - Tropical Medicine |
| `6RW` | **Internal Medicine: Interventional Pulmonologist** | Internal Medicine - Interventional Pulmonologist |
| `6TG` | **Neurology: Neurophysiologist** | Neurology - Neurophysiologist |
| `6UA` | **Undersea Medicine: Undersea Medical Examiner** | Undersea Medicine - Undersea Medical Examiner |
| `6UD` | **Undersea Medicine: Diver** | Undersea Medicine - Diver |
| `6UE` | **Undersea Medicine: Undersea Occupation Medicine** | Undersea Medicine - Undersea Occupation Medicine |
| `6UF` | **Undersea Medicine: Hyperbaric Medicine Researcher** | Undersea Medicine - Hyperbaric Medicine Researcher |
| `6UG` | **Undersea Medicine: Hyperbaric Medicine Clinician** | Undersea Medicine - Hyperbaric Medicine Clinician |
| `6UM` | **Undersea Medicine: Submarine** | Undersea Medicine - Submarine |
| `6VG` | **Pediatric: Pediatric Cardiologist** | Pediatric - Pediatric Cardiologist |
| `6VH` | **Pediatric: Child/Sexual Abuse SPEC** | Pediatric - Child/Sexual Abuse Specialist |
| `6VI` | **Pediatric: Pediatric Intensivist/ Critical Care** | Pediatric - Pediatric Intensivist/ Critical Care |
| `6VJ` | **Pediatric: Developmental Pediatrician** | Pediatric - Developmental Pediatrician |
| `6VK` | **Pediatric: Pediatric Endocrinologist** | Pediatric - Pediatric Endocrinologist |
| `6VL` | **Pediatric: Pediatric Gastroenterologist** | Pediatric - Pediatric Gastroenterologist |
| `6VN` | **Pediatric: Pediatric Hematologist-Oncologist** | Pediatric - Pediatric Hematologist-Oncologist |
| `6VO` | **Pediatric: Genetic Dysmorphology** | Pediatric - Genetic Dysmorphology |
| `6VP` | **Pediatric: Pediatric Infectious Disease SPEC** | Pediatric - Pediatric Infectious Disease Specialist |
| `6VQ` | **Pediatric: Pediatric Nephrology** | Pediatric - Pediatric Nephrology |
| `6VR` | **Pediatric: Pediatric Pulmonologist** | Pediatric - Pediatric Pulmonologist |
| `6VU` | **Pediatric: Child Neurologist** | Pediatric - Child Neurologist |
| `6VV` | **Pediatric: Neonatologist** | Pediatric - Neonatologist |
| `6XD` | **Psychiatry: Addiction Psychiatry** | Psychiatry - Addiction Psychiatry |
| `6XG` | **Psychiatry: Aviation Psychiatry** | Psychiatry - Aviation Psychiatry |
| `6XH` | **Psychiatry: Child/Adolescent Psychiatry** | Psychiatry - Child/Adolescent Psychiatry |
| `6XK` | **Psychiatry: Consultation/ Liaison Psychiatry** | Psychiatry - Consultation/ Liaison Psychiatry |
| `6XL` | **Psychiatry: Forensic Psychiatry** | Psychiatry - Forensic Psychiatry |
| `6YD` | **Diagnostic Radiology: Imaging** | Diagnostic Radiology - Imaging |
| `6YE` | **Diagnostic Radiology: Interventional/ Vascular Radiology** | Diagnostic Radiology - Interventional/ Vascular Radiology |
| `6YF` | **Diagnostic Radiology: Neuro-Radiology** | Diagnostic Radiology - Neuro-Radiology |
| `6YG` | **Diagnostic Radiology: Nuclear Radiology** | Diagnostic Radiology - Nuclear Radiology |
| `6YI` | **Diagnostic Radiology: Pediatric Radiologist** | Diagnostic Radiology - Pediatric Radiologist |
| `6YK` | **Diagnostic Radiology: Diagnostic Imaging Physicist** | Diagnostic Radiology - Diagnostic Imaging Physicist |
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
| `HEALTH CARE SERVICES` | **** |  -  |
| `HG1` | **Navy Recruiting CMD General** | Navy Recruiting Command - General |
| `HG2` | **Navy Recruiting CMD Headquarters Staff OFF** | Navy Recruiting Command - Headquarters Staff Officer |
| `HG3` | **Navy Recruiting CMD General** | Navy Recruiting Command - General |
| `HH2` | **United States Naval Academy Blue and Gold OFF LVL 1** | United States Naval Academy Blue and Gold Officer - Level 1 |
| `HH3` | **United States Naval Academy Blue and Gold OFF LVL 2** | United States Naval Academy Blue and Gold Officer - Level 2 |
| `HUMAN RESOURCES` | **** |  -  |

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
| `5DR` | **Latter-Day Saints Community of Christ (Reorganized Church of Jesus Christ of Latter-Day Saints)** | Latter-Day Saints - Community of Christ
(Reorganized Church of Jesus Christ of Latter-Day Saints)
 |
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
| `5PA` | **Pentecostal/ Charismatic I General Council of Assemblies of God** | Pentecostal/
Charismatic I
 - General Council of Assemblies of God |
| `5PB` | **Pentecostal/ Charismatic I Full Gospel Baptist Church Fellowship, Inc.** | Pentecostal/
Charismatic I
 - Full Gospel Baptist Church Fellowship, Inc. |
| `5PC` | **Pentecostal/ Charismatic I The Church of God in Christ, Inc.** | Pentecostal/
Charismatic I
 - The Church of God in Christ, Inc. |
| `5PD` | **Pentecostal/ Charismatic I Full Gospel** | Pentecostal/
Charismatic I
 - Full Gospel |
| `5PE` | **Pentecostal/ Charismatic I Elim Fellowship** | Pentecostal/
Charismatic I
 - Elim Fellowship |
| `5PF` | **Pentecostal/ Charismatic I International Church of the Foursquare Gospel** | Pentecostal/
Charismatic I
 - International Church of the Foursquare Gospel |
| `5PG` | **Pentecostal/ Charismatic I The Church of God of Prophecy** | Pentecostal/
Charismatic I
 - The Church of God of Prophecy |
| `5PH` | **Pentecostal/ Charismatic I Pentecostal Holiness Church, International** | Pentecostal/
Charismatic I
 - Pentecostal Holiness Church, International |
| `5PI` | **Pentecostal/ Charismatic I Church of Our Lord Jesus Christ of the Apostolic Faith, Inc.** | Pentecostal/
Charismatic I
 - Church of Our Lord Jesus Christ of the Apostolic Faith, Inc. |
| `5PJ` | **Pentecostal/ Charismatic I Pentecostal Church of God, Inc. (Joplin, MO)** | Pentecostal/
Charismatic I
 - Pentecostal Church of God, Inc. (Joplin, MO) |
| `5PK` | **Pentecostal/ Charismatic I Grace Churches International** | Pentecostal/
Charismatic I
 - Grace Churches International |
| `5PL` | **Pentecostal/ Charismatic I Full Gospel Fellowship of Churches and Ministers International** | Pentecostal/
Charismatic I
 - Full Gospel Fellowship of Churches and Ministers International |
| `5PM` | **Pentecostal/ Charismatic I Bethel Ministerial Association, Inc.** | Pentecostal/
Charismatic I
 - Bethel Ministerial Association, Inc. |
| `5PO` | **Pentecostal/ Charismatic I Global Network of Christian Ministries** | Pentecostal/
Charismatic I
 - Global Network of Christian Ministries |
| `5PP` | **Pentecostal/ Charismatic I Pentecostal Churches** | Pentecostal/
Charismatic I
 - Pentecostal Churches |
| `5PQ` | **Pentecostal/ Charismatic I Pentecostal Churches of the Apostolic Faith Association** | Pentecostal/
Charismatic I
 - Pentecostal Churches of the Apostolic Faith Association |
| `5PR` | **Pentecostal/ Charismatic I Church On The Rock International** | Pentecostal/
Charismatic I
 - Church On The Rock International |
| `5PS` | **Pentecostal/ Charismatic I Open Bible Standard Churches, Inc.** | Pentecostal/
Charismatic I
 - Open Bible Standard Churches, Inc. |
| `5PT` | **Pentecostal/ Charismatic I Church of God (Cleveland, TN)** | Pentecostal/
Charismatic I
 - Church of God (Cleveland, TN) |
| `5PU` | **Pentecostal/ Charismatic I United Pentecostal Church International** | Pentecostal/
Charismatic I
 - United Pentecostal Church International |
| `5PV` | **Pentecostal/ Charismatic I Vineyard Christian Fellowship Church of Cobb County, Inc** | Pentecostal/
Charismatic I
 - Vineyard Christian Fellowship Church of Cobb County, Inc |
| `5PW` | **Pentecostal/ Charismatic I Pentecostal Assemblies of the World, Inc.** | Pentecostal/
Charismatic I
 - Pentecostal Assemblies of the World, Inc. |
| `5PX` | **Pentecostal/ Charismatic I Calvary Chapel of Costa Mesa** | Pentecostal/
Charismatic I
 - Calvary Chapel of Costa Mesa |
| `5PZ` | **Pentecostal/ Charismatic I Association of Evangelical Gospel Assemblies Ministries International, Inc.** | Pentecostal/
Charismatic I
 - Association of Evangelical Gospel Assemblies Ministries International, Inc. |
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
| `5TA` | **Non-Denominational Independent St Andrews Evangelical Church** | Non-Denominational
Independent
 - St Andrews Evangelical Church |
| `5TB` | **Non-Denominational Independent Cedar Mill Bible Church** | Non-Denominational
Independent
 - Cedar Mill Bible Church |
| `5TC` | **Non-Denominational Independent Church of the Living God** | Non-Denominational
Independent
 - Church of the Living God |
| `5TD` | **Non-Denominational Independent The Woodfield Church** | Non-Denominational
Independent
 - The Woodfield Church |
| `5TE` | **Non-Denominational Independent Evangel Fellowship International** | Non-Denominational
Independent
 - Evangel Fellowship International |
| `5TF` | **Non-Denominational Independent Central Bible Church** | Non-Denominational
Independent
 - Central Bible Church |
| `5TG` | **Non-Denominational Independent Community Church of Greenwood, Inc.** | Non-Denominational
Independent
 - Community Church of Greenwood, Inc. |
| `5TK` | **Non-Denominational Independent Columbia Bible Church** | Non-Denominational
Independent
 - Columbia Bible Church |
| `5TM` | **Non-Denominational Independent Camelback Bible Church** | Non-Denominational
Independent
 - Camelback Bible Church |
| `5TP` | **Non-Denominational Independent Grace Place** | Non-Denominational
Independent
 - Grace Place |
| `5TR` | **Non-Denominational Independent Coral Ridge Christian Fellowship** | Non-Denominational
Independent
 - Coral Ridge Christian Fellowship |
| `5TU` | **Non-Denominational Independent Westgate Chapel** | Non-Denominational
Independent
 - Westgate Chapel |
| `5TW` | **Non-Denominational Independent Westside Christian Family Chapel** | Non-Denominational
Independent
 - Westside Christian Family Chapel |
| `5TX` | **Non-Denominational Independent Christ Community Church** | Non-Denominational
Independent
 - Christ Community Church |
| `5UU` | **Unitarian The Unitarian Universalist Association** | Unitarian - The Unitarian Universalist Association |
| `5VA` | **Evangelical Asbury Bible Churches** | Evangelical - Asbury Bible Churches |
| `5VB` | **Evangelical Plymouth Brethren** | Evangelical - Plymouth Brethren |
| `5VE` | **Evangelical The Evangelical Covenant Church** | Evangelical - The Evangelical Covenant Church |
| `5VF` | **Evangelical Free Church of America** | Evangelical - Evangelical Free Church of America |
| `5VM` | **Evangelical Christian and Missionary Alliance** | Evangelical - Christian and Missionary Alliance |
| `5VN` | **Evangelical National Association of Evangelicals** | Evangelical - National Association of Evangelicals |
| `5VP` | **Evangelical Bible Protestant Church** | Evangelical - Bible Protestant Church |
| `5VV` | **Evangelical Churches** | Evangelical - Evangelical Churches |
| `5WA` | **Pentecostal/ Charismatic II Assemblies of God, International Fellowship** | Pentecostal/
Charismatic II
 - Assemblies of God, International Fellowship |
| `5WB` | **Pentecostal/ Charismatic II Pentecostal Church of God, Inc** | Pentecostal/
Charismatic II
 - Pentecostal Church of God, Inc |
| `5WC` | **Pentecostal/ Charismatic II Chaplaincy Full Gospel Churches, Inc.** | Pentecostal/
Charismatic II
 - Chaplaincy Full Gospel Churches, Inc. |
| `5WD` | **Pentecostal/ Charismatic II United Evangelical Churches** | Pentecostal/
Charismatic II
 - United Evangelical Churches |
| `5WE` | **Pentecostal/ Charismatic II Evangel Fellowship International** | Pentecostal/
Charismatic II
 - Evangel Fellowship International |
| `5WF` | **Pentecostal/ Charismatic II Full Faith Church of Love** | Pentecostal/
Charismatic II
 - Full Faith Church of Love |
| `5WG` | **Pentecostal/ Charismatic II Association of International Gospel Assemblies, Inc.** | Pentecostal/
Charismatic II
 - Association of International Gospel Assemblies, Inc. |
| `5WH` | **Pentecostal/ Charismatic II Harvest Network International** | Pentecostal/
Charismatic II
 - Harvest Network International |
| `5WI` | **Pentecostal/ Charismatic II Christ-Immanuel Ministerial Association** | Pentecostal/
Charismatic II
 - Christ-Immanuel Ministerial Association |
| `5WJ` | **Pentecostal/ Charismatic II Christ's Church Fellowship** | Pentecostal/
Charismatic II
 - Christ's Church Fellowship |
| `5WK` | **Pentecostal/ Charismatic II Kingsway Fellowship International** | Pentecostal/
Charismatic II
 - Kingsway Fellowship International |
| `5WL` | **Pentecostal/ Charismatic II Liberty Fellowship of Churches And Ministers, Inc.** | Pentecostal/
Charismatic II
 - Liberty Fellowship of Churches And Ministers, Inc. |
| `5WM` | **Pentecostal/ Charismatic II Fellowship of Churches And Ministers International** | Pentecostal/
Charismatic II
 - Fellowship of Churches And Ministers International |
| `5WN` | **Pentecostal/ Charismatic II Faith Christian Fellowship International Church, Inc.** | Pentecostal/
Charismatic II
 - Faith Christian Fellowship International Church, Inc. |
| `5WO` | **Pentecostal/ Charismatic II Christian Church of North America** | Pentecostal/
Charismatic II
 - Christian Church of North America |
| `5WP` | **Pentecostal/ Charismatic II International Ministerial Fellowship** | Pentecostal/
Charismatic II
 - International Ministerial Fellowship |
| `5WQ` | **Pentecostal/ Charismatic II Pentecostal Free Will Baptist Church, Inc** | Pentecostal/
Charismatic II
 - Pentecostal Free Will Baptist Church, Inc |
| `5WR` | **Pentecostal/ Charismatic II Rhema Bible Church** | Pentecostal/
Charismatic II
 - Rhema Bible Church |
| `5WS` | **Pentecostal/ Charismatic II The Coalition of Spirit-Filled Churches** | Pentecostal/
Charismatic II
 - The Coalition of Spirit-Filled Churches |
| `5WT` | **Pentecostal/ Charismatic II Trinity Full Gospel Fellowship** | Pentecostal/
Charismatic II
 - Trinity Full Gospel Fellowship |
| `5WU` | **Pentecostal/ Charismatic II United Full Gospel Church** | Pentecostal/
Charismatic II
 - United Full Gospel Church |
| `5WV` | **Pentecostal/ Charismatic II Victory Christian Center** | Pentecostal/
Charismatic II
 - Victory Christian Center |
| `5WW` | **Pentecostal/ Charismatic II International Convention of Faith Ministries, Inc.** | Pentecostal/
Charismatic II
 - International Convention of Faith Ministries, Inc. |
| `5WX` | **Pentecostal/ Charismatic II International Christian Church** | Pentecostal/
Charismatic II
 - International Christian Church |
| `5WY` | **Pentecostal/ Charismatic II Maranatha Christian Fellowship, Inc.** | Pentecostal/
Charismatic II
 - Maranatha Christian Fellowship, Inc. |
| `5WZ` | **Pentecostal/ Charismatic II New Generation Church** | Pentecostal/
Charismatic II
 - New Generation Church |
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
| `PA1` | **Navy Security Force OFF Basic** | Navy Security Force Officer - Basic |
| `PA2` | **Navy Security Force OFF Advanced** | Navy Security Force Officer - Advanced |
| `PB1` | **Installation Security OFF (ISO) CONUS** | Installation Security Officer (ISO) - CONUS |
| `PB2` | **Installation Security OFF (ISO) OCONUS** | Installation Security Officer (ISO) - OCONUS |
| `PC1` | **Force Protection/ Antiterrorism OFF Base or Activity** | Force Protection/ Antiterrorism Officer - Base or Activity |
| `PC2` | **Force Protection/ Antiterrorism OFF Staff** | Force Protection/ Antiterrorism Officer - Staff |
| `PD1` | **Strategic Systems Programs Security OFF** | Strategic Systems Programs - Security Officer |
| `PE1` | **Security Training Assistance and Assessments Team Staff or Activity** | Security Training Assistance and Assessments Team - Staff or Activity |
| `PROFESSIONAL DEVELOPMENT (GENERAL)` | **** |  -  |
| `PS1` | **Afloat Security OFF Staff** | Afloat Security Officer - Staff |
| `PS2` | **Afloat Security OFF Afloat** | Afloat Security Officer - Afloat |
| `PUBLIC AFFAIRS OFFICER` | **** |  -  |

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
| `S*N0` | **Nuclear Trained OFF General** | Nuclear Trained Officer - General |
| `S*N1` | **Nuclear Trained OFF Engineer QUAL** | Nuclear Trained Officer - Engineer Qualified |
| `S*N2` | **Nuclear Trained OFF Served Engineer** | Nuclear Trained Officer - Served Engineer |
| `S*N3` | **Nuclear Trained OFF Served Post Engineer** | Nuclear Trained Officer - Served Post Engineer |
| `SC2` | **CMD QUAL for Nuclear CMD** | Command - Qualified for Nuclear Command |
| `SC4` | **CMD Served SSN CMD** | Command - Served SSN Command |
| `SC5` | **CMD Served SSBN CMD** | Command - Served SSBN Command |
| `SC6` | **CMD Served Post SSN/SSBN CMD** | Command - Served Post SSN/SSBN Command |
| `SC7` | **CMD Served ASR CMD** | Command - Served ASR Command |
| `SC8` | **CMD Served Major CMD** | Command - Served Major Command |
| `SD7` | **SCUBA Trained OFF QUAL** | SCUBA
Trained Officer
 - Qualified |
| `SEP` | **Submarine Embedded Psychiatrist, Psychologist, Social worker, or Other mental health PROF** | Submarine Embedded  - Psychiatrist, Psychologist, Social worker, or Other mental health professional |
| `SN9` | **Nuclear Trained OFF NR Support Billet** | Nuclear Trained Officer - NR Support Billet |
| `SP0` | **Nuclear Weapons Strategic Weapons OFF QUAL** | Nuclear Weapons - Strategic Weapons Officer Qualified |
| `SP1` | **Nuclear Weapons Nuclear CMD and Control (NC2)** | Nuclear Weapons - Nuclear Command and Control (NC2) |
| `SP2` | **Nuclear Weapons SSBN AWEPS** | Nuclear Weapons - SSBN 
AWEPS
 |
| `SP3` | **Nuclear Weapons SSBN WEPS** | Nuclear Weapons - SSBN 
WEPS 
 |
| `SP4` | **Nuclear Weapons SSBN NAV** | Nuclear Weapons - SSBN 
NAV
 |
| `SP5` | **Nuclear Weapons SSBN XO** | Nuclear Weapons - SSBN 
XO
 |
| `SP6` | **Nuclear Weapons Junior Technical Supervisor** | Nuclear Weapons - Nuclear Weapons Junior Technical Supervisor |
| `SP7` | **Nuclear Weapons Senior Technical Supervisor** | Nuclear Weapons - Nuclear Weapons Senior Technical Supervisor |
| `SP8` | **Nuclear Weapons General Strategic Policy** | Nuclear Weapons - General Strategic Policy |
| `SPA` | **Nuclear Weapons Any Strategic Weapons Experience** | Nuclear Weapons - Any Strategic Weapons Experience |
| `SPACE AND ELECTRONIC WARFARE (SEW)` | **** |  -  |
| `SPECIAL WARFARE` | **** |  -  |
| `SPI` | **Nuclear Weapons Intermediate Strategic Deterrence Education** | Nuclear Weapons - Intermediate Strategic Deterrence Education |
| `SPS` | **Nuclear Weapons Senior Strategic Deterrence Education** | Nuclear Weapons - Senior Strategic Deterrence Education |
| `SQ1` | **Submarine QUAL SC OFF Supply Corps** | Submarine Qualified SC Officer - Supply Corps |
| `SR1` | **Submarine Rescue OFF** | Submarine Rescue - Submarine Rescue Officer |
| `ST0` | **Tactics Undersea Warfare Practitioner** | Tactics - Undersea Warfare Practitioner |
| `ST1` | **Tactics Undersea Warfare Tactics Instructor** | Tactics - Undersea Warfare Tactics Instructor |
| `STRATEGIC SEALIFT OFFICER` | **** |  -  |
| `SU0` | **Submarine QUAL ED OFF General** | Submarine Qualified ED Officer - General |
| `SUBMARINE WARFARE` | **** |  -  |
| `SUPPLY CORPS` | **** |  |
| `SURFACE WARFARE` | **** |  -  |
| `SV1` | **Submarine QUAL Enlisted Submarine QUAL** | Submarine Qualified - Enlisted Submarine
Qualified 
 |
| `SV2` | **Submarine QUAL LDO/CWO QUAL in Submarines** | Submarine Qualified - LDO/CWO Qualified in Submarines |
| `SV3` | **Submarine QUAL IP Officers QUAL in Submarine Communications** | Submarine Qualified - IP Officers Qualified in Submarine Communications |
| `SW**1` | **Deep Submergence Staff** | Deep Submergence - Staff |
| `SW**2` | **Deep Submergence Operational** | Deep Submergence - Operational |
| `SZ1` | **Unmanned** | Unmanned -  |

### Supply & Civil Engineer Corps

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `903` | **Auditing (SC AUDIT)** | Auditing
(SC AUDIT)
 |
| `910` | **Food Service OPS (SC FOODSRVOPS)** | Food Service Operations 
(SC FOODSRVOPS)
 |
| `918` | **Supply Corps OFF Contingency OPS Assignment (SC JNTTADTOPS)** | Supply Corps Officer Contingency Operations Assignment 
(SC JNTTADTOPS)
 |
| `919` | **Supply Corps OFF Contingency OPS Assignment LVL 2 (SC 2JNTTADTOPS)** | Supply Corps Officer Contingency Operations Assignment Level 2 
(SC 2JNTTADTOPS)
 |
| `920` | **Transportation MGMT (SC TRNMGT)** | Transportation Management
(SC TRNMGT)
 |
| `928` | **Completed First Operational Tour (COMP1 OPTOUR)** | Completed First Operational Tour
(COMP1 OPTOUR)
 |
| `929` | **Completed Second Operational Tour (COMP2 OPTOUR)** | Completed Second Operational Tour
(COMP2 OPTOUR)
 |
| `92A` | **Assignment Second Operational Tour (ASGN2 OPTOUR)** | Assignment Second Operational Tour
(ASGN2 OPTOUR)
 |
| `92B` | **Completed Lieutenant Commander Operational Tour (LCDR OPTOUR)** | Completed Lieutenant Commander Operational Tour (LCDR OPTOUR) |
| `92E` | **ERP Certificate with SAP (ERP W SAP CERT)** | ERP Certificate with SAP Program
(ERP W SAP CERT)
 |
| `935` | **Commander Supply Corps OFF Milestone Completed (SC CDRMLSTNCMP)** | Commander Supply Corps Officer Milestone Completed
(SC CDRMLSTNCMP)
 |
| `937` | **Commander Supply Corps OFF Milestone Select (SC CDRMLSTNSEL)** | Commander Supply Corps Officer Milestone Select
(SC CDRMLSTNSEL)
 |
| `939` | **Ordnance Logistics Ammo (SC ORDLOG)** | Ordnance Logistics Ammo 
(SC ORDLOG)
 |
| `93A` | **Shore CMD Complete (SC CMD COMP)** | Shore Command Complete
(SC CMD COMP)
 |
| `93B` | **Major Shore CMD Complete (SC MAJCMD COMP)** | Major Shore Command Complete
(SC MAJCMD COMP)
 |
| `93E` | **Navy Expeditionary Supply Corps OFF Warfare Qualification (NESCO)** | Navy Expeditionary Supply Corps Officer Warfare Qualification
(NESCO)
 |
| `940` | **Ship Outfitting (SC SHIPOUT)** | Ship Outfitting
(SC SHIPOUT)
 |
| `943` | **Joint, Interagency, International, or Multinational OPS (SC JIIMOPS)** | Joint, Interagency, International, or Multinational Operations
(SC JIIMOPS)
 |
| `945` | **Naval Reactors Experience (SC NR EXP)** | Naval Reactors Experience
(SC NR EXP)
 |
| `949` | **Supply Corps School Instructor (SC INSTRUCTOR)** | Supply Corps School Instructor (SC INSTRUCTOR) |
| `950` | **Engineer in Training (CEC EIT)** | Engineer in Training
(CEC EIT)
 |
| `951` | **Registered PROF Engineer (CEC PE)** | Registered Professional Engineer 
(CEC PE)
 |
| `952` | **Registered Architect (CEC RA)** | Registered Architect 
(CEC RA)
 |
| `953` | **Architect ARE** | Architect ARE |
| `954` | **Architect AXP** | Architect AXP |
| `960` | **Seabee Combat Warfare (SCW)** | Seabee Combat  
Warfare (SCW)
 |
| `965` | **LCDR CMD** | LCDR Command |
| `966` | **CDR Expeditionary CMD** | CDR Expeditionary Command |
| `967` | **Expeditionary Major CMD** | Expeditionary Major Command |
| `9L1` | **OLW OFF, 1 Tour (OLWOFF1)** | OLW Officer, 1 Tour (OLWOFF1) |
| `9L2` | **OLW OFF, 2 or more Tours (OLWOFF2)** | OLW Officer, 2 or more Tours (OLWOFF2) |
| `9L3` | **Operational Contract Support** | Operational Contract Support |
| `9P1` | **Public Works LVL 1 Career Field Certified** | Public Works Level 1 Career Field Certified |
| `9P2` | **Public Works LVL 2 Career Field Certified** | Public Works Level 2 Career Field Certified |
| `9P3` | **Public Works LVL 3 Career Field Certified** | Public Works Level 3 Career Field Certified |
| `9X1` | **Director, Logistics Readiness Center, Maritime OPS Center (SC LRCMOC DIR)** | Director, Logistics Readiness Center, Maritime Operations Center
(SC LRCMOC DIR)
 |

### Surface Warfare (Missile/AEGIS)

| AQD | Display Title | Full Context/Original Title |
|:---|:---|:---|
| `KA6` | **QUAL Surface Missile Systems OFF AEGIS** | Qualified Surface Missile Systems Officer - AEGIS |
| `KA7` | **Littoral Combat Ship Operator LCS, General Dynamics Hull** | Littoral Combat Ship Operator - LCS, General Dynamics Hull |
| `KA8` | **Littoral Combat Ship Operator LCS, Lockheed Martin Hull** | Littoral Combat Ship Operator - LCS, Lockheed Martin Hull |
| `KD1` | **Surface Nuclear Power Nuclear Propulsion Operator** | Surface Nuclear Power - Nuclear Propulsion Operator |
| `KD2` | **Surface Nuclear Power Nuclear Ship Engineer** | Surface Nuclear Power - Nuclear Ship Engineer |
| `KD4` | **Surface Nuclear Power LDO and WO Nuclear Power Operator** | Surface Nuclear Power - LDO and WO Nuclear Power Operator |
| `KD6` | **Surface Nuclear Power Trainee** | Surface Nuclear Power - Trainee |
| `KD7` | **Surface Nuclear Power Naval Reactors QUAL** | Surface Nuclear Power - Naval Reactors Qualified |
| `KD8` | **Surface Nuclear Power Nuclear Qualifying Assignment Billet** | Surface Nuclear Power - Nuclear Qualifying Assignment Billet |
| `KD9` | **Surface Nuclear Power NR Support Billet** | Surface Nuclear Power - NR Support Billet |
| `KG0` | **Explosive Ordnance Disposal Head** | Explosive Ordnance Disposal - Department Head |
| `KG1` | **Explosive Ordnance Disposal Basic** | Explosive Ordnance Disposal - Basic |
| `KG5` | **Explosive Ordnance Disposal EOD Warfare** | Explosive Ordnance Disposal - EOD Warfare |
| `KG6` | **Explosive Ordnance Disposal Executive OFF** | Explosive Ordnance Disposal - Executive Officer |
| `KG7` | **Explosive Ordnance Disposal CDR CMD** | Explosive Ordnance Disposal - CDR Command |
| `KG8` | **Explosive Ordnance Disposal Major CMD** | Explosive Ordnance Disposal - Major Command |
| `KH9` | **Riverine Warfare Experienced** | Riverine Warfare - Experienced |
| `KI1` | **River, Coastal, and Combatant Craft Unconventional Warfare Experienced** | River, Coastal, and Combatant Craft Unconventional Warfare - Experienced |
| `KJ1` | **Drydocking OFF General** | Drydocking Officer - General |
| `KJ2` | **Drydocking OFF Floating Drydock** | Drydocking Officer - Floating Drydock |
| `KK1` | **Expendable Ordnance MGMT Basic** | Expendable Ordnance Management - Basic |
| `KK2` | **Expendable Ordnance MGMT Operational** | Expendable Ordnance Management - Operational |
| `KK3` | **Expendable Ordnance MGMT Master** | Expendable Ordnance Management - Master |
| `KL0` | **QUAL Diving OFF Basic** | Qualified Diving Officer - Basic |
| `KM1` | **Ship Salvage Diving OFF Basic** | Ship Salvage Diving Officer - Basic |
| `KM2` | **Ship Salvage Diving OFF Operational** | Ship Salvage Diving Officer - Operational |
| `KN1` | **Mixed Gas Basic** | Mixed Gas - Basic |
| `KN2` | **Mixed Gas Operational** | Mixed Gas - Operational |
| `KP0` | **Shore Based Hyperbaric Facility Saturation Dive Watch OFF QUAL** | Shore Based Hyperbaric Facility Saturation Dive Watch Officer - Qualified |
| `KP1` | **Shore Based Hyperbaric Facility Saturation Dive Watch OFF Basic** | Shore Based Hyperbaric Facility Saturation Dive Watch Officer - Basic |
| `KP2` | **Shore Based Hyperbaric Facility Saturation Dive Watch OFF Operational** | Shore Based Hyperbaric Facility Saturation Dive Watch Officer - Operational |
| `KS1` | **Surface Warfare Enterprise SWE OFF** | Surface Warfare Enterprise - SWE Officer |
| `KV1` | **Heavy Lift Docking Observer** | Heavy Lift - Docking Observer |
| `KV2` | **Heavy Lift Project OFF** | Heavy Lift - Project Officer |
| `KV3` | **Software Acquisition Software Project OFF** | Software Acquisition - Software Project Officer |
| `KV4` | **Software Acquisition Software Manager** | Software Acquisition - Software Program Manager |
| `KW1` | **Warfare Tactics Instructor (WTI) Surface and Anti-Submarine (ASW/SUW)** | Warfare Tactics Instructor (WTI) - Surface and Anti-Submarine (ASW/SUW) |
| `KW2` | **Warfare Tactics Instructor Integrated Air Missile Defense (IAMD)** | Warfare Tactics Instructor - Integrated Air Missile Defense (IAMD) |
| `KW3` | **Warfare Tactics Instructor Amphibious Warfare (AMW)** | Warfare Tactics Instructor - Amphibious Warfare (AMW) |
| `KW4` | **Warfare Tactics Instructor (WTI) Mine Warfare** | Warfare Tactics Instructor (WTI) - Mine Warfare |
| `KW5` | **Adversary Warfare Tactics Lead VARMITT IAMD** | Adversary Warfare Tactics Lead - VARMITT IAMD |
| `KWC` | **Warfare Tactics Instructor Production Tour Complete** | Warfare Tactics Instructor - Production Tour Complete |
| `KWS` | **Warfare Tactics Instructor Select** | Warfare Tactics Instructor - Select |
| `KX1` | **Surface Anti- Submarine Warfare (SuASW) Advanced ASW OFF** | Surface Anti- Submarine Warfare (SuASW) - Advanced
ASW Officer
 |

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
| `3M1` | **Force MGMT Intelligence MPTE Planning** | Force Management - Intelligence MPTE Planning |
| `3M2` | **Force MGMT Intelligence Resource MGMT** | Force Management - Intelligence Resource Management |
| `3M3` | **Force MGMT Intelligence Adaptive/ Campaign Planning** | Force Management - Intelligence Adaptive/ Campaign Planning |
| `3M4` | **Force MGMT Intelligence Integrated Component OPS** | Force Management - Intelligence Integrated Component Operations |
| `3M5` | **Force MGMT Senior Intelligence Manager** | Force Management - Senior Intelligence Program Manager |
| `3O1` | **Operational Fleet Intelligence Watch OFF (FIWO)** | Operational - Fleet Intelligence Watch Officer (FIWO) |
| `3Q1` | **Special Warfare Support NSW Intelligence** | Special Warfare Support - NSW Intelligence |
| `3Q2` | **Special Warfare Support NSW Intelligence Experience** | Special Warfare Support - NSW Intelligence Experience |
| `3Q3` | **Special Warfare Support Special OPS Forces Intelligence** | Special Warfare Support - Special Operations Forces Intelligence |
| `3R1` | **ISR MGMT Collection Manager** | ISR Management - Collection Manager |
| `3R2` | **ISR MGMT Collection / ISR Requirements MGMT** | ISR Management - Collection / ISR Requirements Management |
| `3R3` | **ISR MGMT ISR Architecture MGMT** | ISR Management - ISR  Architecture Management |
| `3R4` | **ISR MGMT ISR Architecture Resource MGMT** | ISR Management - ISR Architecture Resource Management |
| `3R8` | **ISR MGMT ISRT Architecture MGMT GRAD** | ISR Management - ISRT Architecture Management Graduate |
| `3R9` | **ISR MGMT Navy Collection MGMT Course GRAD** | ISR Management - Navy Collection Management Course Graduate |
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
| `TBW` | **Afloat Bridge Resource MGMT Workshop (ABRMW) Facilitator** | Afloat Bridge Resource Management Workshop (ABRMW) - Facilitator |
| `TC1` | **Afloat Tactical Advisor QUAL** | Afloat Tactical Advisor - Qualified |
| `TC2` | **Afloat Tactical Advisor Experienced** | Afloat Tactical Advisor - Experienced |
| `TC3` | **Afloat Tactical Advisor Advanced** | Afloat Tactical Advisor - Advanced |
| `TD1` | **Deck OFF Chief Mate** | Deck Officer - Chief Mate |
| `TD2` | **Deck OFF Second Mate** | Deck Officer - Second Mate |
| `TD3` | **Deck OFF Third Mate** | Deck Officer - Third Mate |
| `TDL` | **Deck OFF Master, Limited** | Deck Officer - Master,
Limited
 |
| `TDM` | **Deck OFF Master** | Deck Officer - Master |
| `TDP` | **Deck OFF First Class Pilot** | Deck Officer - First Class Pilot |
| `TE1` | **Engineer OFF, Motor First Assistant Engineer** | Engineer Officer, Motor - First Assistant Engineer |
| `TE2` | **Engineer OFF, Motor Second Assistant Engineer** | Engineer Officer, Motor - Second Assistant Engineer |
| `TE3` | **Engineer OFF, Motor Third Assistant Engineer** | Engineer Officer, Motor - Third Assistant Engineer |
| `TEE` | **Engineer OFF, Steam Chief Engineer** | Engineer Officer, Steam - Chief Engineer |
| `TFE` | **Engineer OFF, Motor Chief Engineer** | Engineer Officer, Motor - Chief Engineer |
| `TG1` | **Engineer OFF, Gas Turbine First Assistant Engineer** | Engineer Officer, Gas Turbine - First Assistant Engineer |
| `TG2` | **Engineer OFF, Gas Turbine Second Assistant Engineer** | Engineer Officer, Gas Turbine - Second Assistant Engineer |
| `TG3` | **Engineer OFF, Gas Turbine Third Assistant Engineer** | Engineer Officer, Gas Turbine - Third Assistant Engineer |
| `TGE` | **Engineer OFF, Gas Turbine Chief Engineer** | Engineer Officer, Gas Turbine - Chief Engineer |
| `TP1` | **Strategic Sealift OFF (SSO) Warfare QUAL** | Strategic Sealift Officer (SSO) - Warfare Qualified |

