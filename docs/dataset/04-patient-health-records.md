---
sidebar_position: 3
---

# Patient Health Record

## CareSpan Format V1

The CareSpan format will be generated in `JSON` format with the following fields

### Records: `records<Record ID, Record>`

#### Record ID: `Number`

`record id` is the unique record identifier

#### Record: `object`

|Name|Type|Field|Description|
|---|---|---|---|
|Recorded Date|Date|recorded_at|When the record was recorded|
|Encounter (Exam Room) Session ID|Text|sessid|Which encounter or exam room the record is collected. When empty, that means the record is entered outside of an encounter.|
|Authored By|Number|user|Who entered the record|
|By Patient?|Number|is_patient|Whether entered by patient<br/>`1` for yes<br/>  `0` for no|
|Fields|Fields[]|fields|See below for the fields object|

### `001` Vital/Diagnostic Data: `object`

#### Blood Pressue

| Name                           | Type    | Field            | Description |
| ------------------------------ | ------- | ---------------- | ----------- |
| Date                           | Date    | ddate            |`ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`)|
| Blood Pressure (sys)           | Float   | sys              |             |
| Blood Pressure (dia)           | Float   | dia              |             |

#### Pulse

| Name                           | Type    | Field            | Description |
| ------------------------------ | ------- | ---------------- | ----------- |
| Date                           | Date    | ddate            |`ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`)|
| Pulse                          | Float   | pulse            |             |

#### SPO2

| Name                           | Type    | Field            | Description |
| ------------------------------ | ------- | ---------------- | ----------- |
| Date                           | Date    | ddate            |`ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`)|
| pO2                            | Float   | po2              |             |

#### Temperature

| Name                           | Type    | Field            | Description |
| ------------------------------ | ------- | ---------------- | ----------- |
| Date                           | Date    | ddate            |`ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`)|
| Temperature                    | Float   | temp             |`temp.units`: `F\|C`|

#### Weight

| Name                           | Type    | Field            | Description |
| ------------------------------ | ------- | ---------------- | ----------- |
| Date                           | Date    | ddate            |`ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`)|
| Weight                         | Float   | weight           |`weight.units`: `lbs\|kg`|

#### Height

| Name                           | Type    | Field            | Description |
| ------------------------------ | ------- | ---------------- | ----------- |
| Date                           | Date    | ddate            |`ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`)|
| Height                         | Float   | height           |`height.units`: `in\|cm`|

#### Respirations

| Name                           | Type    | Field            | Description |
| ------------------------------ | ------- | ---------------- | ----------- |
| Date                           | Date    | ddate            |`ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`)|
| Respirations                   | Float   | resp             |             |

#### Blood Glucose

| Name                           | Type    | Field            | Description |
| ------------------------------ | ------- | ---------------- | ----------- |
| Date                           | Date    | ddate            |`ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`)|
| Blood Glucose                  | Float   | glucose          |             |

#### Head Circumference

| Name                           | Type    | Field            | Description |
| ------------------------------ | ------- | ---------------- | ----------- |
| Date                           | Date    | ddate            |`ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`)|
| Head Circumference             | Float   | circ             |`circ.units`: `in\|cm`|

#### Middle & Upper Arm Circumference

| Name                           | Type    | Field            | Description |
| ------------------------------ | ------- | ---------------- | ----------- |
| Date                           | Date    | ddate            |`ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`)|
| Middle&Upper Arm Circumference | Float   | pMidUpperArmCirc |`pMidUpperArmCirc.units`: `in\|cm`|

#### Inhaled Oxygen Concentration

| Name                           | Type    | Field            | Description |
| ------------------------------ | ------- | ---------------- | ----------- |
| Date                           | Date    | ddate            |`ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`)|
| Inhaled Oxygen Concentration   | Float   | fio2             |             |

#### Inhaled Oxygen Flow Rate

| Name                           | Type    | Field            | Description |
| ------------------------------ | ------- | ---------------- | ----------- |
| Date                           | Date    | ddate            |`ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`)|
| Inhaled Oxygen Flow Rate       | Float   | to2              |             |

### `002` Review of Systems: `object`

| Name        | Type              | Field     | Description |
| ----------- | ----------------- | --------- | ----------- |
| ROS Type    | Review of Systems (`Text`) | rosid     |Check `Review of Systems Types` dictionary [link](/docs/dictionary#review-of-systems-types)|
| ROS Key     | Review of Systems (`Text`) | roskey    |Check `Review of Systems` dictionary [link](/docs/dictionary#review-of-systems)|
| Value       | Review of Systems (`Text`) | rosval    |The name of the system from `Dictionary` (based on roskey)|
| Description | Review of Systems (`Text`) | rosdescr  |Describing the system of the patient|
| Yes or No   | Review of Systems (`Text`) | roschoice |Whether the system of the patient should be concerned|

### `003` Medical History: `object`

| Name                          | Type      | Field                         | Description |
| ----------------------------- | --------- | ----------------------------- | ----------- |
| Condition                     | Text Area | fdata                         |What is the condition? (e.g. **_Stress Induced_**)|
| Date                          | Date      | ddate                         |When the condition started?|
| Comments                      | Text Area | comments                      |             |
| Other Condition               | Text      | othercondition                |Free form condition|
| ICD Code                      | Text      | icdcode                       |             |
| ICD Description               | Text      | icddesc                       |             |
| SNOMED Code                   | Text      | snomedcode                    |             |
| SNOMED Description            | Text      | snomeddesc                    |             |
| IMO Code                      | Text      | imocode                       |             |
| IMO Description               | Text      | imodesc                       |             |
| NIH Code                      | Text      | nihcode                       |             |
| icd10cm_hcc_comm_factors      | Float     | icd10cm_hcc_comm_factors      |             |
| icd10cm_hcc_comm_factors_next | Float     | icd10cm_hcc_comm_factors_next |             |
| icd10cm_hcc_model_cat_next    | Float     | icd10cm_hcc_model_cat_next    |             |
| icd10cm_hcc_model_cat         | Float     | icd10cm_hcc_model_cat         |             |
| icd10cm_hcc_inst_factors      | Float     | icd10cm_hcc_inst_factors      |             |
| icd10cm_hcc_inst_factors_next | Float     | icd10cm_hcc_inst_factors_next |             |

### `004` Family History: `object`

| Name           | Type      | Field        | Description |
| -------------- | --------- | ------------ | ----------- |
| Family History | Text Area | fdata        |What is the condition? (e.g. **_Cancer_**)|
| Date           | Date      | ddate        |When the condition started?|
| Comments       | Text Area | comments     |             |
| Outcome        | Text Area | outcome      |             |
| Relationship   | Integer   | relationship |Check `Relationship Types V1` dictionary [link](/docs/dictionary#relationship-types-v1)|

### `005` Allergy: `object`

| Name                             | Type | Field       | Description  |
|----------------------------------| --- |---------------|---|
| Allergy                          | Text | allergy       | The name of the allergy? (e.g. **_Penicillin_**) |
| Start Date                       | Date | sdate         | When did the allergy start |
| End Date                         | Date | edate         | When did the allergy end |
| Type                             | Dictionary Key | type          | Check `Allergy Types` dictionary [link](/docs/dictionary#allergy-types) |                      |
| Fhir Reaction                    | Json | fhir_reaction | See `fhir_reaction` [below](#allergyfhir_reaction-object) |
| Reaction                         | Code | reaction      |  Check `Allergy Reactions` dictionary [link](/docs/dictionary#allergy-reactions) |
| Reaction - other                 | Dictionary Key | otherreaction | Free form allergy reaction |
| React-Type:Allergy/Intolerance   | Code | reactiontype  | `allergy` \| `intolerance`  |
| Severity                         | Dictionary Key | severity      | Check `Allergy Severity` dictionary [link](/docs/dictionary#allergy-severity) |

#### Allergy.`fhir_reaction`: `object`

Using a `JSON` structure to accomodate multiple options

```js

[
    {
        "substance": {
            "coding": [
                {
                    "code": "d08188",
                    "display": "Anoro Ellipta",
                    "system": "{{rxqdrug}}"
                },
                {
                    "code": 1487518,
                    "display": "Anoro Ellipta",
                    "system": "{{rxnorm}}"
                }
            ]
        }
    }
]
```

| Name                            | Field                 | Description |
|----------------------------------|---------------------|-------------|
| Reaction | `Reaction[]`| [Reaction (ext)](https://www.hl7.org/fhir/allergyintolerance-definitions.html#AllergyIntolerance.reaction)<br/>[BackboneElement (ext)](https://www.hl7.org/fhir/types.html#BackboneElement) |
| Substance | `Reaction[].substance`| [CodeableConcept (ext)](https://www.hl7.org/fhir/datatypes.html#CodeableConcept) |
| Coding | `Reaction[].substance.coding[]`| [Coding (ext)](https://www.hl7.org/fhir/datatypes.html#Coding) |
| Coding System| `Reaction[].substance.coding[].system`| Check `Coding Systems` dictionary [link](/docs/dictionary#for-naming-systems)|

#### Substance

### `006` Medications: `object`

| Name                            | Field                 | Description |
|----------------------------------|---------------------|-------------|
| Medication                       | medication          | The name of the medication |
| Amount                           | amount              | Not Used - merged into size |
| Complete                         | complete            | 'active', 'discontinued', 'deleted', 'completed', 'canceled', 'unknown'|
| Detail                           | detail              |             |
| Prescribing Doctor ID            | doctorid            | Prescribing doctor id |
| Dosespot Medication Id           | dosespotmedid       | (3rd Party - DoseSpot - US) |
| Drug Classification              | drugclassification  | (3rd Party - DoseSpot - `miscellaneous antipsychotic agents`, `psychotherapeutic combinations`, `phenothiazine antipsychotics`, `psychotherapeutic agents`, `antipsychotics`, `atypical antipsychotics`, `Antipsychotic Agent, Benzamide`, `Antipsychotic Agent, Benzisoxazole`, `Antipsychotic Agent, Benzothiazolylpiperazine`, `Antipsychotic Agent, Benzylisothiazolylpiperazine`, `Antipsychotic Agent, Butyrophenone`, `Antipsychotic Agent, Dibenzodiazepine`, `Antipsychotic Agent, Dibenzothiazepine`, `Antipsychotic Agent, Dibenzoxazepine`, `Antipsychotic Agent, Dihydroindoline`, `Antipsychotic Agent, Diphenylbutylperidine`, `Antipsychotic Agent, Phenothiazine, Aliphatic`, `Antipsychotic Agent, Phenothiazine, Piperazine`, `Antipsychotic Agent, Phenothiazine, Piperidine`, `Antipsychotic Agent, Thienobenzodiazepine`, `Antipsychotic Agent, Thioxanthene Derivative`, `Antipsychotic Agent`, `Benzisoxazole (Antipsychotic)`, `Butyrophenone Derivative (Antipsychotic)`, `Dibenzodiazepine (Antipsychotic)`, `Dibenzoxazepine (Antipsychotic)`, `Dihydroindoline (Antipsychotic)`, `Psychostimulant`, `Antipsychotic Agent, Quinolinone`, `Second Generation (Atypical) Antipsychotic`, `First Generation (Typical) Antipsychotic`, `Antipsychotic Agent, Typical, Phenothiazine`, `Antipsychotic Agent, Typical, Phenothiazine, Piperidine`)            |
| End Date                         | edate               | Inactive Date|
| Fhir CodingConcept               | fhir_code           | to store the coding structure (RxNorm) |
| Generic                          | generic             | 0 or 1 |
| GGPI reference                   | ggpireference       | (3rd Party - MIMS - PH) |
| Measure                          | measure             | Not Used |
| Medication Type                  | medicationtype      |             |
| Medication Type - Other          | othermedicationtype |             |
| Reasons Med Discontinued - Other | otherreason         |             |
| Quantity                         | qty                 | The quantity of dosage |
| Reasons Med Discontinued         | reason              |             |
| Refill                           | refill              | Number of refills |
| Route Code                       | routecode           |             |
| Route Name                       | route_name          |             |
| Controlled Substance Schedule    | schedule            |             |
| Start Date                       | sdate               | Effective Date of the medication |
| Medication Sent                  | sent                | sent (status: 'printed', 'erxsent', 'faxsent', 'pharmacyverified') to pharmacy |
| SIG                              | sig                 |             |
| Size                             | size                | e.g. 20 mg-400 mg |
| Status (e.g. Printed, eRxSent)   | status              |'printed', 'erxsent', 'faxsent', 'deleted' 'pharmacyverified'|

### `007` Medical Problems: `object`

| Name | Field | description |
| ------ | ------ | ------ |
| Problem | problem | This is the name of the problem |
| Start Date | sdate | This is when the problem has been created |
| End Date | edate | This is when the problem has been mark resolved |
| Objective | objective | This is the "O" in the SOAP note (applicable when in problem oriented mode) |
| Plan | plan | This is the "P" in the SOAP note |
| ICD Code | icdcode | This an array of codes that is attached to this problem |
| Subjective | subjective | This is the "S" in the SOAP note (applicable when in problem oriented mode) |
| Assessment | assessment | This is the "A" in the SOAP note |
| Instructions | instruction | This is the extension of Plan, patient friendly notes to care for the condition |
| Assessment | assessment | This is the "A" in the SOAP note |
| ICD Description | icddesc | This an array of ICD descriptions for the ICD code |
| Problem ID | problem_id | This is the ID that we use to group an array of problems together |
| Fhir CodingConcept | fhir_code | This for saving the problem code, in a FHIR json |
| History of Present Illness | hpi | This is the HPI (applicable when in problem oriented mode) |

### `009` Lab Results: `object`

| Name                           | Field            | Description |
|---------------------------------|----------------|-------------|
| Abornormal Flags                | abnormal       | 1           |
| Alt Order ID                    | altorderid     | 1           |
| Alt Order Source                | altordersource | 1           |
| Client ID                       | clientid       | 1           |
| Document ID                     | docidx         | 1           |
| Fhir CodingConcept              | fhir_code      | 1           |
| Result Format (data, pdf, html) | format         | 1           |
| Lab Order HL7                   | hl7            | 1           |
| Lab Date                        | ldate          | 1           |
| Status (OBX P,I,F,C,X)          | obx_status     | 1           |
| Refernces Range                 | range          | 1           |
| Procedure and Results           | results        | 1           |
| Record Pointer                  | rid            | 1           |
| Units                           | units          | 1           |
| Value                           | value          | 1           |
| Value Type                      | valuetype      | 1           |

### `018` Lab Orders: `object`

| Name | Field | Description |
| ------ | ------ | ------ |
| Date | odate | When the order has be created |
| Order ID | orderid | This is the ID that we use to group an array of orders together (e.g. bundling CBC and Lipid together) |
| Lab Type | ordertypeid | CareSpan order only - This is the types (e.g. Organ or Disease Panels, Microbiology, Swab Tests) of the order |
| Lab Key | orderkey | CareSpan order only - This is the pointer to the actual test (e.g. CBC) |
| Lab Value | orderval | The actual name of the test (e.g. CBC) |

### __SQL Query used__

```sql
SELECT 
    f.`field`as `Name`,
    fd.label as `Type`,
    f.`var` as 'Field',
    '' as 'Description'
FROM `fields` f, `field_datatypes` fd
WHERE 1
AND f.`categories_id` LIKE '1'
AND f.`field_datatypes_id` = fd.id
```
