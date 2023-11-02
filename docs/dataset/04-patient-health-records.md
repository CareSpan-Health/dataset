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

| Name                             | Type     | Field       | Description                                                                                                                 |
| -------------------------------- | -------- | ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| Recorded Date                    | Date     | recorded_at | When the record was recorded                                                                                                |
| Encounter (Exam Room) Session ID | Text     | sessid      | Which encounter or exam room the record is collected. When empty, that means the record is entered outside of an encounter. |
| Authored By                      | Number   | user        | Who entered the record                                                                                                      |
| By Patient?                      | Number   | is_patient  | Whether entered by patient<br/>`1` for yes<br/>  `0` for no                                                                 |
| Fields                           | Fields[] | fields      | See below for the fields object                                                                                             |

### `001` Vital/Diagnostic Data: `object`

#### Blood Pressue

| Name                 | Type  | Field | Description                                                                            |
| -------------------- | ----- | ----- | -------------------------------------------------------------------------------------- |
| Date                 | Date  | ddate | `ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`) |
| Blood Pressure (sys) | Float | sys   |                                                                                        |
| Blood Pressure (dia) | Float | dia   |                                                                                        |

#### Pulse

| Name  | Type  | Field | Description                                                                            |
| ----- | ----- | ----- | -------------------------------------------------------------------------------------- |
| Date  | Date  | ddate | `ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`) |
| Pulse | Float | pulse |                                                                                        |

#### SPO2

| Name | Type  | Field | Description                                                                            |
| ---- | ----- | ----- | -------------------------------------------------------------------------------------- |
| Date | Date  | ddate | `ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`) |
| pO2  | Float | po2   |                                                                                        |

#### Temperature

| Name        | Type  | Field | Description                                                                            |
| ----------- | ----- | ----- | -------------------------------------------------------------------------------------- |
| Date        | Date  | ddate | `ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`) |
| Temperature | Float | temp  | `temp.units`: `F\|C`                                                                   |

#### Weight

| Name   | Type  | Field  | Description                                                                            |
| ------ | ----- | ------ | -------------------------------------------------------------------------------------- |
| Date   | Date  | ddate  | `ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`) |
| Weight | Float | weight | `weight.units`: `lbs\|kg`                                                              |

#### Height

| Name   | Type  | Field  | Description                                                                            |
| ------ | ----- | ------ | -------------------------------------------------------------------------------------- |
| Date   | Date  | ddate  | `ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`) |
| Height | Float | height | `height.units`: `in\|cm`                                                               |

#### Respirations

| Name         | Type  | Field | Description                                                                            |
| ------------ | ----- | ----- | -------------------------------------------------------------------------------------- |
| Date         | Date  | ddate | `ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`) |
| Respirations | Float | resp  |                                                                                        |

#### Blood Glucose

| Name          | Type  | Field   | Description                                                                            |
| ------------- | ----- | ------- | -------------------------------------------------------------------------------------- |
| Date          | Date  | ddate   | `ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`) |
| Blood Glucose | Float | glucose |                                                                                        |

#### Head Circumference

| Name               | Type  | Field | Description                                                                            |
| ------------------ | ----- | ----- | -------------------------------------------------------------------------------------- |
| Date               | Date  | ddate | `ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`) |
| Head Circumference | Float | circ  | `circ.units`: `in\|cm`                                                                 |

#### Middle & Upper Arm Circumference

| Name                           | Type  | Field            | Description                                                                            |
| ------------------------------ | ----- | ---------------- | -------------------------------------------------------------------------------------- |
| Date                           | Date  | ddate            | `ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`) |
| Middle&Upper Arm Circumference | Float | pMidUpperArmCirc | `pMidUpperArmCirc.units`: `in\|cm`                                                     |

#### Inhaled Oxygen Concentration

| Name                         | Type  | Field | Description                                                                            |
| ---------------------------- | ----- | ----- | -------------------------------------------------------------------------------------- |
| Date                         | Date  | ddate | `ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`) |
| Inhaled Oxygen Concentration | Float | fio2  |                                                                                        |

#### Inhaled Oxygen Flow Rate

| Name                     | Type  | Field | Description                                                                            |
| ------------------------ | ----- | ----- | -------------------------------------------------------------------------------------- |
| Date                     | Date  | ddate | `ddate.data`: based on patient's time zone<br/>`ddate.gmt`: in `GMT` time zone (`UTC`) |
| Inhaled Oxygen Flow Rate | Float | to2   |                                                                                        |

### `002` Review of Systems: `object`

| Name        | Type                       | Field     | Description                                                                                 |
| ----------- | -------------------------- | --------- | ------------------------------------------------------------------------------------------- |
| ROS Type    | Review of Systems (`Text`) | rosid     | Check `Review of Systems Types` dictionary [link](/docs/dictionary#review-of-systems-types) |
| ROS Key     | Review of Systems (`Text`) | roskey    | Check `Review of Systems` dictionary [link](/docs/dictionary#review-of-systems)             |
| Value       | Review of Systems (`Text`) | rosval    | The name of the system from `Dictionary` (based on roskey)                                  |
| Description | Review of Systems (`Text`) | rosdescr  | Describing the system of the patient                                                        |
| Yes or No   | Review of Systems (`Text`) | roschoice | Whether the system of the patient should be concerned                                       |

### `003` Medical History: `object`

| Name                          | Type      | Field                         | Description                                        |
| ----------------------------- | --------- | ----------------------------- | -------------------------------------------------- |
| Condition                     | Text Area | fdata                         | What is the condition? (e.g. **_Stress Induced_**) |
| Date                          | Date      | ddate                         | When the condition started?                        |
| Comments                      | Text Area | comments                      |                                                    |
| Other Condition               | Text      | othercondition                | Free form condition                                |
| ICD Code                      | Text      | icdcode                       |                                                    |
| ICD Description               | Text      | icddesc                       |                                                    |
| SNOMED Code                   | Text      | snomedcode                    |                                                    |
| SNOMED Description            | Text      | snomeddesc                    |                                                    |
| IMO Code                      | Text      | imocode                       |                                                    |
| IMO Description               | Text      | imodesc                       |                                                    |
| NIH Code                      | Text      | nihcode                       |                                                    |
| icd10cm_hcc_comm_factors      | Float     | icd10cm_hcc_comm_factors      |                                                    |
| icd10cm_hcc_comm_factors_next | Float     | icd10cm_hcc_comm_factors_next |                                                    |
| icd10cm_hcc_model_cat_next    | Float     | icd10cm_hcc_model_cat_next    |                                                    |
| icd10cm_hcc_model_cat         | Float     | icd10cm_hcc_model_cat         |                                                    |
| icd10cm_hcc_inst_factors      | Float     | icd10cm_hcc_inst_factors      |                                                    |
| icd10cm_hcc_inst_factors_next | Float     | icd10cm_hcc_inst_factors_next |                                                    |

### `004` Family History: `object`

| Name           | Type      | Field        | Description                                                                             |
| -------------- | --------- | ------------ | --------------------------------------------------------------------------------------- |
| Family History | Text Area | fdata        | What is the condition? (e.g. **_Cancer_**)                                              |
| Date           | Date      | ddate        | When the condition started?                                                             |
| Comments       | Text Area | comments     |                                                                                         |
| Outcome        | Text Area | outcome      |                                                                                         |
| Relationship   | Integer   | relationship | Check `Relationship Types V1` dictionary [link](/docs/dictionary#relationship-types-v1) |

### `005` Allergy: `object`

| Name                           | Type           | Field         | Description                                                                     |
| ------------------------------ | -------------- | ------------- | ------------------------------------------------------------------------------- |
| Allergy                        | Text           | allergy       | The name of the allergy? (e.g. **_Penicillin_**)                                |
| Start Date                     | Date           | sdate         | When did the allergy start                                                      |
| End Date                       | Date           | edate         | When did the allergy end                                                        |
| Type                           | Dictionary Key | type          | Check `Allergy Types` dictionary [link](/docs/dictionary#allergy-types)         |
| Fhir Reaction                  | Json           | fhir_reaction | See `fhir_reaction` [below](#allergyfhir_reaction-object)                       |
| Reaction                       | Code           | reaction      | Check `Allergy Reactions` dictionary [link](/docs/dictionary#allergy-reactions) |
| Reaction - other               | Dictionary Key | otherreaction | Free form allergy reaction                                                      |
| React-Type:Allergy/Intolerance | Code           | reactiontype  | `allergy` \| `intolerance`                                                      |
| Severity                       | Dictionary Key | severity      | Check `Allergy Severity` dictionary [link](/docs/dictionary#allergy-severity)   |

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

| Name          | Field                                  | Description                                                                                                                                                                                 |
| ------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reaction      | `Reaction[]`                           | [Reaction (ext)](https://www.hl7.org/fhir/allergyintolerance-definitions.html#AllergyIntolerance.reaction)<br/>[BackboneElement (ext)](https://www.hl7.org/fhir/types.html#BackboneElement) |
| Substance     | `Reaction[].substance`                 | [CodeableConcept (ext)](https://www.hl7.org/fhir/datatypes.html#CodeableConcept)                                                                                                            |
| Coding        | `Reaction[].substance.coding[]`        | [Coding (ext)](https://www.hl7.org/fhir/datatypes.html#Coding)                                                                                                                              |
| Coding System | `Reaction[].substance.coding[].system` | Check `Coding Systems` dictionary [link](/docs/dictionary#for-naming-systems)                                                                                                               |

#### Substance

### `006` Medications: `object`

| Name                             | Type      | Field               | Description                                                                                                 |
| -------------------------------- | --------- | ------------------- | ----------------------------------------------------------------------------------------------------------- |
| Medication                       | Text      | medication          | The name of the medication                                                                                  |
| Start Date                       | Date      | sdate               | Effective Date                                                                                              |
| End Date                         | Date      | edate               | Inactive Date                                                                                               |
| Written Date                     | Date      | odate               | Entered/Written Date                                                                                        |
| Size                             | Text      | size                | e.g. 20 mg-400 mg                                                                                           |
| Refill                           | Integer   | refill              | Number of refills                                                                                           |
| Generic                          | Text      | generic             | `1` for Generic allowed<br/>`0` for otherwise                                                               |
| Quantity                         | Integer   | qty                 | The quantity of dosage                                                                                      |
| SIG                              | Text Area | sig                 | Patient Directions                                                                                          |
| Status (e.g. Printed, eRxSent)   | Code      | status              | Check `Prescription Statuses` dictionary [link](/docs/dictionary#prescription-statuses)                     |
| Complete (e.g. Active, Deleted)  | Text      | complete            | Check `Medication Statuses` dictionary [link](/docs/dictionary#medication-statuses)                         |
| Medication Sent                  | Integer   | sent                | `1` for sent (if the `status` is: `printed`, `erxsent`, `faxsent`, or `pharmacyverified`)                   |
| Prescribing Doctor ID            | Integer   | doctorid            | Prescribing user ID                                                                                         |
| Dosespot Medication Id           | Integer   | dosespotmedid       | (3rd Party - DoseSpot - US)                                                                                 |
| Fhir CodingConcept               | Json      | fhir_code           | See `fhir_code` [below](#medicationsfhir_code-object)                                                       |
| Medication Type                  | Integer   | medicationtype      | Check `Medication Type` dictionary [link](/docs/dictionary#medication-type)                                 |
| Medication Type - Other          | Text      | othermedicationtype |                                                                                                             |
| Detail                           | Text      | detail              |                                                                                                             |
| Route Code                       | Code      | routecode           | Check `Route` dictionary [link](/docs/dictionary#route)                                                     |
| Route Name                       | Text      | route_name          | The name of the `route` from `Dictionary` (based on `routecode`)                                            |
| Reasons Med Discontinued         | Integer   | reason              | Check `Medication Discontinued Reasons` dictionary [link](/docs/dictionary#medication-discontinued-reasons) |
| Controlled Substance Schedule    | Integer   | schedule            | State Schedule                                                                                              |
| Reasons Med Discontinued - Other | Text      | otherreason         |                                                                                                             |
| Drug Classification              | Text      | drugclassification  | Check `Drug Classification` dictionary [link](/docs/dictionary#drug-classification)                         |
| DoseSpot Pharmacy ID             | Integer   | dosespotpharmid     | Where is the prescription sent to?                                                                          |

#### Medications.`fhir_code`: `object`

Using a JSON structure to accomodate multiple options

```js
{
    "coding": [
        {
            "system": "{{rxnorm}}",
            "code": "630208",
            "display": "Albuterol (Inhalant) 0.83 mg\/ml Sol"
        }
    ]
}
```

| Name          | Field                  | Description                                                                                                                                                                   |
| ------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Code          | `code`                 | [Medication (ext)](https://www.hl7.org/fhir/medication-definitions.html#Medication.code)<br/>[CodeableConcept (ext)](https://www.hl7.org/fhir/datatypes.html#CodeableConcept) |
| Coding        | `code.coding[]`        | [Coding (ext)](https://www.hl7.org/fhir/datatypes.html#Coding)                                                                                                                |
| Coding System | `code.coding[].system` | Check `Coding Systems` dictionary [link](/docs/dictionary#for-naming-systems)                                                                                                 |

#### For Localization (Medications)

##### For Asia (Medications)

| Name                    | Type | Field                   | Description |
| ----------------------- | ---- | ----------------------- | ----------- |
| MIMS Object             | Text | mimsobject              |             |
| MIMS reference          | Text | mimsreference           |             |
| philhealth_drugcode     | Text | philhealth_drugcode     |             |
| philhealth_gencode      | Text | philhealth_gencode      |             |
| philhealth_saltcode     | Text | philhealth_saltcode     |             |
| philhealth_formcode     | Text | philhealth_formcode     |             |
| philhealth_strengthcode | Text | philhealth_strengthcode |             |
| philhealth_unitcode     | Text | philhealth_unitcode     |             |
| philhealth_packagecode  | Text | philhealth_packagecode  |             |
| philhealth_drugcode     | Text | philhealth_drugcode     |             |
| philhealth_gencode      | Text | philhealth_gencode      |             |
| philhealth_saltcode     | Text | philhealth_saltcode     |             |
| philhealth_formcode     | Text | philhealth_formcode     |             |
| philhealth_strengthcode | Text | philhealth_strengthcode |             |
| philhealth_unitcode     | Text | philhealth_unitcode     |             |
| philhealth_packagecode  | Text | philhealth_packagecode  |             |

### `007` Medical Problems: `object`

:::info

In order to track the problem over time, the system will create a new problem record whenever the problem is treated in the encounter.

These problems are "stringed" together as a problem "thread" use `problem_id`.

For example, a patient maybe have a "fever" thread to treat the "fever" over 5 courses of encounters. This means there will be 5 "fever" records. These records are stringed as a single thread based as they all share the same `problem_id`

:::

| Name                          | Type      | Field                         | Description                                                                                                               |
| ----------------------------- | --------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Problem ID                    | Code      | problem_id                    | ID that we use to string the same medical problem treated over time as a thread [see above](#007-medical-problems-object) |
| Problem                       | Text      | problem                       | This is the name of the problem                                                                                           |
| Start Date                    | Date      | sdate                         | When the problem started/created                                                                                          |
| End Date                      | Date      | edate                         | When the problem has been mark resolved                                                                                   |
| Assessment                    | Text      | assessment                    |                                                                                                                           |
| Plan                          | Text      | plan                          |                                                                                                                           |
| Instructions                  | Text      | instructions                  | This is the extension of Plan, patient friendly notes to care for the condition                                           |
| Status                        | Text Area | status                        | Check `Problem Status` dictionary [link](/docs/dictionary#problem-status)                                                 |
| ICD Code                      | Text      | icdcode                       |                                                                                                                           |
| ICD Description               | Text      | icddesc                       |                                                                                                                           |
| SNOMED Code                   | Text      | snomedcode                    |                                                                                                                           |
| SNOMED Description            | Text      | snomeddesc                    |                                                                                                                           |
| icd10cm_hcc_model_cat         | Float     | icd10cm_hcc_model_cat         |                                                                                                                           |
| icd10cm_hcc_inst_factors      | Float     | icd10cm_hcc_inst_factors      |                                                                                                                           |
| icd10cm_hcc_comm_factors      | Float     | icd10cm_hcc_comm_factors      |                                                                                                                           |
| icd10cm_hcc_model_cat_next    | Float     | icd10cm_hcc_model_cat_next    |                                                                                                                           |
| icd10cm_hcc_inst_factors      | Float     | icd10cm_hcc_inst_factors      |                                                                                                                           |
| icd10cm_hcc_comm_factors_next | Float     | icd10cm_hcc_comm_factors_next |                                                                                                                           |
| IMO Code                      | Text      | imocode                       |                                                                                                                           |
| IMO Description               | Text      | imodesc                       |                                                                                                                           |
| NIH Code                      | Text      | nihcode                       |                                                                                                                           |

#### Retired Fields

| Name                       | Type | Field      | Description |
| -------------------------- | ---- | ---------- | ----------- |
| History of Present Illness | Text | hpi        |             |
| Subjective                 | Text | subjective |             |
| Objective                  | Text | objective  |             |
| Fhir CodingConcept         | Json | fhir_code  |             |

#### For Localization (Medical Problems)

##### For Asia (Medical Problems)

| Name                           | Type      | Field         | Description |
| ------------------------------ | --------- | ------------- | ----------- |
| State (1: added, 2: worked on) | Text Area | problem_state |             |
| Sev1:Inq,2:Susp,3:Prble,4:Conf | Text      | covid_status  |             |
| Diagnosis Codes                | Text      | medicardcode  |             |
| Diagnosis Description          | Text      | medicarddesc  |             |

### `009` Lab Results: `object`

| Name                            | Field          | Description |
| ------------------------------- | -------------- | ----------- |
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

| Name      | Field       | Description                                                                                                   |
| --------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| Date      | odate       | When the order has be created                                                                                 |
| Order ID  | orderid     | This is the ID that we use to group an array of orders together (e.g. bundling CBC and Lipid together)        |
| Lab Type  | ordertypeid | CareSpan order only - This is the types (e.g. Organ or Disease Panels, Microbiology, Swab Tests) of the order |
| Lab Key   | orderkey    | CareSpan order only - This is the pointer to the actual test (e.g. CBC)                                       |
| Lab Value | orderval    | The actual name of the test (e.g. CBC)                                                                        |

### **SQL Query used**

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
