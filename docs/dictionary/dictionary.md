---
sidebar_position: 1
---

# Dictionary

## For Demographics

### Gender v1

| key | message |
| --- | ------- |
| 0   | Male    |
| 1   | Female  |
| 2   | Unknown |

```sql
-- Table: messages
-- Category: gender
SELECT `ckey` as `key`, `message`
FROM `messages`
WHERE (`category` = 'gender') AND (`lang` = 'en')
ORDER by `key`
```

### Gender Identity

| key | message                                               |
| --- | ----------------------------------------------------- |
| 0   | Male                                                  |
| 1   | Female                                                |
| 11  | Transgender male/Trans man/Female-to-male             |
| 12  | Transgender female/Trans woman/Male-to-female         |
| 13  | Genderqueer, neither exclusively male nor female      |
| 14  | Additional gender category/(or other), please specify |
| 15  | Choose not to disclose                                |

```sql
-- Table: messages
-- Category: genderidentity
SELECT `ckey` as `key`, `message`
FROM `messages`
WHERE (`category` = 'genderidentity') AND (`lang` = 'en')
ORDER by `key`
```

### Gender Orientation

| key | message                         |
| --- | ------------------------------- |
| 1   | Straight or heterosexual        |
| 2   | Lesbian, gay or homosexual      |
| 3   | Bisexual                        |
| 4   | Something else, please describe |
| 5   | Don’t know                      |
| 6   | Choose not to disclose          |

```sql
-- Table: ref_dictionaries
-- dictionary_types_id: 34
SELECT `type_key`  as `key`, `label` as `message`
FROM `ref_dictionaries`
WHERE (`dictionary_types_id` = '34') AND (`language` = 'en')
ORDER by `key`
```

### Race

| key | message                                   |
| --- | ----------------------------------------- |
| 0   | White                                     |
| 1   | Black or African American                 |
| 2   | Asian                                     |
| 3   | Native Hawaiian or Other Pacific Islander |
| 4   | American Indian or Alaska Native          |
| 6   | Other                                     |
| 7   | Choose not to disclose                    |

```sql
-- Table: messages
-- Category: race
SELECT 
  `ckey` as `key`, `message`
FROM `messages`
WHERE (`category` = 'race') AND (`lang` = 'en')
ORDER BY `key`

```

### Ethnicity

| key | message                 |
| --- | ----------------------- |
| 0   | Not Hispanic or Latino  |
| 1   | Hispanic or Latino      |
| 3   | Spaniard                |
| 4   | Andalusian              |
| 5   | Asturian                |
| 6   | Castillian              |
| 7   | Catalonian              |
| 8   | Belearic Islander       |
| 9   | Gallego                 |
| 10  | Valencian               |
| 11  | Canarian                |
| 12  | Spanish Basque          |
| 13  | Mexican                 |
| 14  | Mexican American        |
| 15  | Mexicano                |
| 16  | Chicano                 |
| 17  | La Raza                 |
| 18  | Mexican American Indian |
| 19  | Central American        |
| 20  | Costa Rican             |
| 21  | Guatemalan              |
| 22  | Honduran                |
| 23  | Nicaraguan              |
| 24  | Panamanian              |
| 25  | Salvadoran              |
| 26  | Central American Indian |
| 27  | Canal Zone              |
| 28  | South American          |
| 29  | Argentinean             |
| 30  | Bolivian                |
| 31  | Chilean                 |
| 32  | Colombian               |
| 33  | Ecuadorian              |
| 34  | Paraguayan              |
| 35  | Peruvian                |
| 36  | Uruguayan               |
| 37  | Venezuelan              |
| 38  | South American Indian   |
| 39  | Criollo                 |
| 40  | Latin American          |
| 41  | Puerto Rican            |
| 42  | Cuban                   |
| 43  | Dominican               |
| 49  | Unknown                 |
| 50  | Choose not to disclose  |

```sql
-- Table: ref_dictionaries
-- dictionary_types_id: 36
SELECT `type_key`  as `key`, `label` as `message`
FROM `ref_dictionaries`
WHERE (`dictionary_types_id` = '36') AND (`language` = 'en')
ORDER by `key`
```

### Marital

| key | message     |
| --- | ----------- |
| 0   | Single      |
| 1   | Married     |
| 2   | Divorced    |
| 3   | Widowed     |
| 4   | Partnership |
| 5   | Separated   |

```sql
-- Table: messages
-- Category: marital
SELECT 
  `ckey` as `key`, `message`
FROM `messages`
WHERE (`category` = 'marital') AND (`lang` = 'en')
ORDER BY `key`
```

### Religion

| key | message                                |
| --- | -------------------------------------- |
| 1   | Adventist                              |
| 2   | African Religions                      |
| 3   | Afro-Caribbean Religions               |
| 4   | Agnosticism                            |
| 5   | Anglican                               |
| 6   | Animism                                |
| 7   | Atheism                                |
| 8   | Babi & Baha'I faiths                   |
| 9   | Baptist                                |
| 10  | Bon                                    |
| 11  | Cao Dai                                |
| 12  | Celticism                              |
| 13  | Christian (non-Catholic, non-specific) |
| 14  | Confucianism                           |
| 15  | Cyberculture Religions                 |
| 16  | Divination                             |
| 17  | Fourth Way                             |
| 18  | Free Daism                             |
| 19  | Gnosis                                 |
| 20  | Hinduism                               |
| 21  | Humanism                               |
| 22  | Independent                            |
| 23  | Islam                                  |
| 24  | Jainism                                |
| 25  | Jehovah's Witnesses                    |
| 26  | Judaism                                |
| 27  | Latter Day Saints                      |
| 28  | Lutheran                               |
| 29  | Mahayana                               |
| 30  | Meditation                             |
| 31  | Messianic Judaism                      |
| 32  | Mitraism                               |
| 33  | New Age                                |
| 34  | non-Roman Catholic                     |
| 35  | Occult                                 |
| 36  | Orthodox                               |
| 37  | Paganism                               |
| 38  | Pentecostal                            |
| 39  | Process, The                           |
| 40  | Reformed/Presbyterian                  |
| 41  | Roman Catholic Church                  |
| 42  | Satanism                               |
| 43  | Scientology                            |
| 44  | Shamanism                              |
| 45  | Shiite (Islam)                         |
| 46  | Shinto                                 |
| 47  | Sikism                                 |
| 48  | Spiritualism                           |
| 49  | Sunni (Islam)                          |
| 50  | Taoism                                 |
| 51  | Theravada                              |
| 52  | Unitarian-Universalism                 |
| 53  | Universal Life Church                  |
| 54  | Vajrayana (Tibetan)                    |
| 55  | Veda                                   |
| 56  | Voodoo                                 |
| 57  | Wicca                                  |
| 58  | Yaohushua                              |
| 59  | Zen Buddhism                           |
| 60  | Zoroastrianism                         |
| 61  | Assembly of God                        |
| 62  | Brethren                               |
| 63  | Christian Scientist                    |
| 64  | Church of Christ                       |
| 65  | Church of God                          |
| 66  | Congregational                         |
| 67  | Disciples of Christ                    |
| 68  | Eastern Orthodox                       |
| 69  | Episcopalian                           |
| 70  | Evangelical Covenant                   |
| 71  | Friends                                |
| 72  | Full Gospel                            |
| 73  | Methodist                              |
| 74  | Native American                        |
| 75  | Nazarene                               |
| 76  | Presbyterian                           |
| 77  | Protestant                             |
| 78  | Protestant, No Denomination            |
| 79  | Reformed                               |
| 80  | Salvation Army                         |
| 81  | Unitarian Universalist                 |
| 82  | United Church of Christ                |

```sql
-- Table: ref_dictionaries
-- dictionary_types_id: 35
SELECT 
  `type_key`  as `key`, `label` as `message`
FROM `ref_dictionaries`
WHERE (`dictionary_types_id` = '35') AND (`language` = 'en')
ORDER by `key`
```

### Relationship Types v1

| key | message              |
| --- | -------------------- |
| 0   | Maternal Grandmother |
| 1   | Maternal Grandfather |
| 2   | Mother               |
| 3   | Father               |
| 4   | Sister               |
| 5   | Brother              |
| 6   | Child                |
| 7   | Other                |
| 8   | Paternal Grandfather |
| 9   | Paternal Grandmother |
| 10  | Aunt                 |
| 11  | Uncle                |

```sql
-- Table: ref_dictionaries
-- dictionary_types_id: 27
SELECT `type_key`  as `key`, `label` as `message`
FROM `ref_dictionaries`
WHERE (`dictionary_types_id` = '27') AND (`language` = 'en')
AND `label` <> ''
ORDER by `key`
```

### Relationship Types v2

| key | message                                             |
| --- | --------------------------------------------------- |
| 1   | Spouse                                              |
| 4   | Grandparent                                         |
| 5   | Grandson or Grandaughter                            |
| 7   | Nephew or Niece                                     |
| 10  | Foster Child                                        |
| 15  | Ward                                                |
| 17  | Stepson or Stepdaughter                             |
| 18  | Self                                                |
| 19  | Child                                               |
| 20  | Employee                                            |
| 21  | Unknown                                             |
| 22  | Handicapped Dependent                               |
| 23  | Sponsored Dependent                                 |
| 24  | Dependent of a Minor                                |
| 29  | Significant Other                                   |
| 32  | Mother                                              |
| 33  | Father                                              |
| 36  | Emancipated Minor                                   |
| 39  | Organ Donor                                         |
| 41  | Injured Plaintif                                    |
| 42  | Child Where Insured Has No Financial Responsibility |

```sql
-- Table: ref_dictionaries
-- dictionary_types_id: 30
SELECT `type_key`  as `key`, `label` as `message`
FROM `ref_dictionaries`
WHERE (`dictionary_types_id` = '30') AND (`language` = 'en')
AND `label` <> ''
ORDER by `key`
```

## For Health Record

### Smoker v1

| key | message                        |
| --- | ------------------------------ |
| 0   | Current every day smoker       |
| 1   | Current some day smoker        |
| 2   | Former smoker                  |
| 3   | Never smoker                   |
| 4   | Smoker, current status unknown |
| 5   | Unknown if ever smoked         |
| 6   | Current Heavy tobacco smoker   |
| 7   | Current Light tobacco smoker   |

```sql
-- Table: messages
-- Category: smoker
SELECT `ckey` as `key`, `message`
FROM `messages`
WHERE (`category` = 'smoker') AND (`lang` = 'en')
```

### Blood Type

| key | message |
| --- | ------- |
| 0   | O+      |
| 1   | O-      |
| 2   | A+      |
| 3   | A-      |
| 4   | B+      |
| 5   | B-      |
| 6   | AB+     |
| 7   | AB-     |

```sql
-- Table: messages
-- Category: bloodtype
SELECT 
  `ckey` as `key`, `message`
FROM `messages`
WHERE (`category` = 'bloodtype') AND (`lang` = 'en')
ORDER BY `key`
```

### Allergy Types

| key | message          |
| --- | ---------------- |
| 1   | Drug             |
| 2   | Food             |
| 3   | Insect           |
| 4   | Latex            |
| 5   | Mold             |
| 6   | Pet              |
| 7   | Pollen           |
| 8   | Skin             |
| 9   | Other            |
| 10  | No Known Allergy |

```sql
-- Table: ref_dictionaries
-- dictionary_types_id: 25
SELECT `type_key`  as `key`, `label` as `message`
FROM `ref_dictionaries`
WHERE (`dictionary_types_id` = '25') AND (`language` = 'en')
AND `label` <> ''
ORDER by `key`
```

### Allergy Reactions

| key | message              |
| --- | -------------------- |
| 1   | Abdominal Pain       |
| 2   | Anaphylactic Shock   |
| 3   | Constipation         |
| 4   | Diarrhea             |
| 5   | Difficulty Breathing |
| 6   | Dizziness            |
| 7   | Headache             |
| 8   | Itching              |
| 9   | Joint Pain           |
| 10  | Nausea/Vomiting      |
| 11  | Palpitations         |
| 12  | Rash/Hives           |
| 13  | Swelling             |
| 14  | Unknown              |
| 15  | Other                |

```sql
-- Table: ref_dictionaries
-- dictionary_types_id: 68
SELECT `type_key`  as `key`, `label` as `message`
FROM `ref_dictionaries`
WHERE (`dictionary_types_id` = '68') AND (`language` = 'en')
AND `label` <> ''
ORDER by `key`
```

### Allergy Severity

| key | message          |
| --- | ---------------- |
| 1   | Mild             |
| 2   | Moderate         |
| 3   | Serious          |
| 4   | Life Threatening |

```sql
-- Table: ref_dictionaries
-- dictionary_types_id: 88
SELECT `type_key`  as `key`, `label` as `message`
FROM `ref_dictionaries`
WHERE (`dictionary_types_id` = '88') AND (`language` = 'en')
AND `label` <> ''
ORDER by `key`
```

### Route

| key | snomed    | message                 |
| --- | --------- | ----------------------- |
| 1   | 6064005   | Topical route           |
| 2   | 10547007  | Auricular use           |
| 3   | 12130007  | Intra-articular route   |
| 4   | 16857009  | Vaginal use             |
| 5   | 26643006  | Oral use                |
| 6   | 34206005  | SC use                  |
| 7   | 37161004  | Rectal use              |
| 9   | 37839007  | Sublingual use          |
| 11  | 45890007  | Transdermal use         |
| 12  | 46713006  | Nasal use               |
| 13  | 47625008  | Intravenous use         |
| 14  | 54471007  | Buccal use              |
| 15  | 54485002  | Ophthalmic use          |
| 20  | 78421000  | Intramuscular use       |
| 25  | 372449004 | Dental use              |
| 26  | 372450004 | Endocervical use        |
| 50  | 404818005 | Intratracheal route     |
| 52  | 404820008 | Epidural route          |
| 137 | 447694001 | Respiratory tract route |

```sql
-- Table: ref_codes
-- dictionary_types_id: 88
SELECT `id` as `key`, `snomed`, `description` as message
FROM `ref_codes`
WHERE `type` = 'route' and `status` = 1
```

### Medication Type

| key | message      |
| --- | ------------ |
| 1   | Long Term    |
| 2   | Supplements  |
| 3   | OTC          |
| 4   | Psychoactive |
| 5   | Other        |

```sql
-- Table: ref_dictionaries
-- dictionary_types_id: 65
SELECT `type_key`  as `key`, `label` as `message`
FROM `ref_dictionaries`
WHERE (`dictionary_types_id` = '65') AND (`language` = 'en')
AND `label` <> ''
ORDER by `key`
```

### Medication Statuses

#### For Self-Reporting

| key | message      |
| --- | ------------ |
| 1   | Active       |
| 2   | Inactive     |
| 3   | Discontinued |
| 4   | Deleted      |
| 5   | Completed    |

#### For Others, the following are added

| key | message          |
| --- | ---------------- |
| 6   | Cancel Requested |
| 7   | Cancel Pending   |
| 8   | Canceled         |
| 9   | Cancel Denied    |
| 10  | Changed          |
| 11  | Pending          |

```sql
-- Table: ref_dictionaries
-- dictionary_types_id: 66
SELECT `type_key`  as `key`, `label` as `message`
FROM `ref_dictionaries`
WHERE (`dictionary_types_id` = '66') AND (`language` = 'en')
AND `label` <> ''
ORDER by `key`
```

### Medication Discontinued Reasons

| key | message           |
| --- | ----------------- |
| 1   | Doctor Suggested  |
| 2   | Adverse Reactions |
| 3   | Allergy           |
| 4   | Can't Afford      |
| 5   | Completed Course  |
| 6   | Not Effective     |
| 7   | Ran Out           |
| 8   | Refused to Take   |
| 9   | Side Effects      |
| 10  | Wrong Dose        |
| 11  | Other             |

```sql
-- Table: ref_dictionaries
-- dictionary_types_id: 67
SELECT `type_key`  as `key`, `label` as `message`
FROM `ref_dictionaries`
WHERE (`dictionary_types_id` = '67') AND (`language` = 'en')
AND `label` <> ''
ORDER by `key`
```

### Prescription Statuses

| key | message          |
| --- | ---------------- |
| 1   | entered          |
| 2   | printed          |
| 3   | sending          |
| 4   | erxsent          |
| 5   | faxsent          |
| 6   | error            |
| 7   | deleted          |
| 8   | requested        |
| 9   | edited           |
| 10  | epcserror        |
| 11  | epcssigned       |
| 12  | readytosign      |
| 13  | pharmacyverified |

:::warning

Classification from **_DoseSpot_** (3rd Party)

:::

### Drug Classification

| key                                                    | message |
| ------------------------------------------------------ | ------- |
| `miscellaneous antipsychotic agents`                   | -       |
| `psychotherapeutic combinations`                       | -       |
| `phenothiazine antipsychotics`                         | -       |
| `psychotherapeutic agents`                             | -       |
| `antipsychotics`                                       | -       |
| `atypical antipsychotics`                              | -       |
| `Antipsychotic Agent Benzamide`                        | -       |
| `Antipsychotic Agent Benzisoxazole`                    | -       |
| `Antipsychotic Agent Benzothiazolylpiperazine`         | -       |
| `Antipsychotic Agent Benzylisothiazolylpiperazine`     | -       |
| `Antipsychotic Agent Butyrophenone`                    | -       |
| `Antipsychotic Agent Dibenzodiazepine`                 | -       |
| `Antipsychotic Agent Dibenzothiazepine`                | -       |
| `Antipsychotic Agent Dibenzoxazepine`                  | -       |
| `Antipsychotic Agent Dihydroindoline`                  | -       |
| `Antipsychotic Agent Diphenylbutylperidine`            | -       |
| `Antipsychotic Agent Phenothiazine Aliphatic`          | -       |
| `Antipsychotic Agent Phenothiazine Piperazine`         | -       |
| `Antipsychotic Agent Phenothiazine Piperidine`         | -       |
| `Antipsychotic Agent Thienobenzodiazepine`             | -       |
| `Antipsychotic Agent Thioxanthene Derivative`          | -       |
| `Antipsychotic Agent`                                  | -       |
| `Benzisoxazole (Antipsychotic)`                        | -       |
| `Butyrophenone Derivative (Antipsychotic)`             | -       |
| `Dibenzodiazepine (Antipsychotic)`                     | -       |
| `Dibenzoxazepine (Antipsychotic)`                      | -       |
| `Dihydroindoline (Antipsychotic)`                      | -       |
| `Psychostimulant`                                      | -       |
| `Antipsychotic Agent Quinolinone`                      | -       |
| `Second Generation (Atypical) Antipsychotic`           | -       |
| `First Generation (Typical) Antipsychotic`             | -       |
| `Antipsychotic Agent Typical Phenothiazine`            | -       |
| `Antipsychotic Agent Typical Phenothiazine Piperidine` | -       |

:::warning

Classification from **_DoseSpot_** (3rd Party)

:::

### Problem Status

| key | message      |
| --- | ------------ |
| 1   | Uncontrolled |
| 2   | Controlled   |
| 3   | Resolved     |

```sql
-- Table: ref_dictionaries
-- dictionary_types_id: 41
SELECT `type_key`  as `key`, `label` as `message`
FROM `ref_dictionaries`
WHERE (`dictionary_types_id` = '41') AND (`language` = 'en')
AND `label` <> ''
ORDER by `key`
```

## For Review of Systems

### Review of Systems

| type | key | label                             |
| ---- | --- | --------------------------------- |
| 1    | 0   | Chills/Sweats                     |
| 1    | 1   | Fatigue                           |
| 1    | 2   | Fever                             |
| 1    | 3   | Feeling Unwell                    |
| 1    | 4   | Weight Gain/Loss                  |
| 1    | 99  | Other                             |
| 2    | 0   | Cough                             |
| 2    | 1   | TB Exposure                       |
| 2    | 2   | Shortness of Breath               |
| 2    | 3   | Wheezing                          |
| 2    | 99  | Other                             |
| 3    | 0   | Anxiety/Restlessness              |
| 3    | 1   | Depression                        |
| 3    | 2   | Insomnia                          |
| 3    | 3   | Trouble Concentrating/Confusion   |
| 3    | 4   | Hopelessness                      |
| 3    | 5   | Change in Alcohol/Drug Use        |
| 3    | 6   | Hallucinations                    |
| 3    | 7   | Paranoia                          |
| 3    | 8   | Suicidal Thinking                 |
| 3    | 9   | Thoughts of Harming Others        |
| 3    | 99  | Other                             |
| 4    | 0   | Chest Pain/Pressure               |
| 4    | 1   | Irregular Heartbeat/Palpitations  |
| 4    | 2   | Swelling in Legs/Ankles           |
| 4    | 99  | Other                             |
| 5    | 0   | Dizziness                         |
| 5    | 1   | Extremity Numbness/Tingling       |
| 5    | 2   | Seizures                          |
| 5    | 3   | Headache/Migraine                 |
| 5    | 4   | Memory Loss                       |
| 5    | 5   | Gait Disturbance/Balance Problems |
| 5    | 99  | Other                             |
| 5    | 100 | Fainting                          |
| 6    | 0   | Easy Bleeding                     |
| 6    | 1   | Easy Bruising                     |
| 6    | 2   | Swollen Lymph Nodes               |
| 6    | 99  | Other                             |
| 7    | 0   | Double/Blurred Vision             |
| 7    | 2   | Redness/Discharge                 |
| 7    | 3   | Pain/Itching                      |
| 7    | 99  | Other                             |
| 8    | 0   | Hearing Loss                      |
| 8    | 1   | Sinus Pressure                    |
| 8    | 3   | Tooth Pain                        |
| 8    | 4   | Difficulty Swallowing             |
| 8    | 5   | Dry mouth/Sore Tongue             |
| 8    | 6   | Sore Throat/Hoarseness            |
| 8    | 7   | Nasal Drainage                    |
| 8    | 8   | Pain                              |
| 8    | 10  | Ringing                           |
| 8    | 11  | Allergies                         |
| 8    | 12  | Discharge                         |
| 8    | 13  | Decreased Smell                   |
| 8    | 99  | Other                             |
| 9    | 0   | Nasal Discharge                   |
| 9    | 1   | Sinus Pressure                    |
| 9    | 2   | Allergies                         |
| 9    | 3   | Decreased Smell                   |
| 9    | 99  | Other                             |
| 10   | 0   | Sore Throat/Hoarseness            |
| 10   | 1   | Cold Sores                        |
| 10   | 2   | Sore Tongue                       |
| 10   | 3   | Tooth Pain                        |
| 10   | 4   | Difficulty Swallowing             |
| 10   | 5   | Dry mouth/Sore Tongue             |
| 10   | 99  | Other                             |
| 11   | 0   | Cold/Heat Intolerance             |
| 11   | 2   | Excessive Thirst                  |
| 11   | 3   | Excessive Hunger                  |
| 11   | 4   | Generalized Weakness              |
| 11   | 99  | Other                             |
| 12   | 0   | Brittle Hair/Nails                |
| 12   | 1   | Hair Loss                         |
| 12   | 2   | Mole Changes                      |
| 12   | 3   | Rash                              |
| 12   | 4   | Skin Lesion                       |
| 12   | 5   | Laceration                        |
| 12   | 6   | Skin Discoloration                |
| 12   | 99  | Other                             |
| 13   | 0   | Abdominal Pain                    |
| 13   | 1   | Blood in Stool                    |
| 13   | 2   | Change in Stools                  |
| 13   | 3   | Constipation/Diarrhea             |
| 13   | 5   | Heartburn                         |
| 13   | 6   | Loss of Appetite                  |
| 13   | 7   | Nausea/Vomiting                   |
| 13   | 9   | Loss of Bowel Control             |
| 13   | 99  | Other                             |
| 14   | 0   | Back Pain                         |
| 14   | 1   | Joint Pain                        |
| 14   | 2   | Muscle Weakness/Cramps            |
| 14   | 3   | Neck Pain                         |
| 14   | 99  | Other                             |
| 15   | 0   | Contact Allergy                   |
| 15   | 1   | Food Allergies                    |
| 15   | 2   | Seasonal Allergies/Hay Fever      |
| 15   | 4   | Frequent Infections               |
| 15   | 99  | Other                             |
| 16   | 0   | Erectile Dysfunction              |
| 16   | 1   | Penile Discharge                  |
| 16   | 2   | Sexual Dysfunction                |
| 16   | 99  | Other                             |
| 17   | 0   | Abnormal Pap                      |
| 17   | 1   | Irregular Menses                  |
| 17   | 2   | Hot Flashes                       |
| 17   | 3   | Vaginal Discharge                 |
| 17   | 4   | Pain During Menstruation          |
| 17   | 5   | Pain During Intercourse           |
| 17   | 99  | Other                             |
| 18   | 0   | Abnormal Pap                      |
| 18   | 1   | Irregular Menses                  |
| 18   | 2   | Hot Flashes                       |
| 18   | 3   | Blood in Urine                    |
| 18   | 4   | Urinary Incontinence/Dribbling    |
| 18   | 5   | Slow Stream                       |
| 18   | 6   | Erectile Dysfunction              |
| 18   | 8   | Penile Discharge                  |
| 18   | 9   | Painful/Burning Urination         |
| 18   | 11  | Urinary Frequency                 |
| 18   | 12  | Vaginal Discharge                 |
| 18   | 13  | Pain During Menstruation          |
| 18   | 14  | Pain During Intercourse           |
| 18   | 99  | Other                             |
| 20   | 1   | ALTERED MENTAL SENSORIUM          |
| 20   | 2   | ABDOMINAL CRAMP/PAIN              |
| 20   | 3   | ANOREXIA                          |
| 20   | 4   | BLEEDING GUMS                     |
| 20   | 5   | BODY WEAKNESS                     |
| 20   | 6   | BLURRING OF VISION                |
| 20   | 7   | CONSTIPATION                      |
| 20   | 8   | CHEST PAIN/DISCOMFORT             |
| 20   | 9   | COUGH                             |
| 20   | 10  | DIARRHEA                          |
| 20   | 11  | DIZZINESS                         |
| 20   | 12  | DYSPHAGIA                         |
| 20   | 13  | DYSPNEA                           |
| 20   | 14  | DYSURIA                           |
| 20   | 15  | EPISTAXIS                         |
| 20   | 17  | FREQUENCY OF URINATION            |
| 20   | 18  | HEADACHE                          |
| 20   | 19  | HEMATEMESIS                       |
| 20   | 20  | HEMATURIA                         |
| 20   | 21  | HEMOPTYSIS                        |
| 20   | 22  | IRRITABILITY                      |
| 20   | 23  | JAUNDICE                          |
| 20   | 25  | LOWER EXTREMITY EDEMA             |
| 20   | 26  | MYALGIA                           |
| 20   | 27  | ORTHOPNEA                         |
| 20   | 28  | PALPITATIONS                      |
| 20   | 29  | SKIN RASHES                       |
| 20   | 30  | STOOL, BLOODY/BLACK TARRY/MUCOID  |
| 20   | 32  | SWEATING                          |
| 20   | 33  | SEIZURES                          |
| 20   | 34  | URGENCY                           |
| 20   | 35  | VOMITING/NAUSEA                   |
| 20   | 36  | WEIGHT LOSS                       |
| 20   | 37  | FEVER                             |
| 20   | 38  | PAIN                              |
| 20   | 99  | Others                            |

```sql
SELECT `review_of_system_types_id` as `type`, `type_key` as `key`, `label`
FROM `review_of_systems` WHERE (`language` = 'en') AND (`status` = '1')
ORDER BY review_of_system_types_id, type_key
```

### Review of Systems Types

| type | review_of_system_type        |
| ---- | ---------------------------- |
| 1    | Constitutional Symptoms      |
| 2    | Respiratory                  |
| 3    | Psychiatric                  |
| 4    | Cardiovascular               |
| 5    | Neurological                 |
| 6    | Hematologic/Lymphatic        |
| 7    | Eyes                         |
| 8    | Ears, Nose, Mouth and Throat |
| 11   | Endocrine                    |
| 12   | Integumentary/Breast         |
| 13   | Gastrointestinal             |
| 14   | Musculoskeletal              |
| 15   | Allergic/Immunologic         |
| 18   | Genitourinary                |
| 19   | Other                        |
| 20   | Sign and Symptoms            |

```sql
SELECT 
`type_key` as `type`, `review_of_system_type`
FROM `review_of_system_types` WHERE (`language` = 'en') AND (`active` = '1')
ORDER BY `type`
```

## Coding Systems

### For Naming Systems

| key                 | code                  | OID                      | uri                                                      | description                     |
| ------------------- | --------------------- | ------------------------ | -------------------------------------------------------- | ------------------------------- |
| `{{rxnorm}}`        | RxNorm                | 2.16.840.1.113883.6.     | http://www.nlm.nih.gov/research/umls/rxnorm              | The actual RXCUI for the RxNorm |
| `{{cpt}}`           | CPT                   | 2.16.840.1.113883.6.12   | http://www.ama-assn.org/go/cpt                           |                                 |
| `{{snomed_ct_int}}` | SNOMED_CT_INT         | 2.16.840.1.113883.6.96   | http://snomed.info/sct                                   |                                 |
| `{{icd10cm}}`       | Icd10CM               | 2.16.840.1.113883.6.90   | http://hl7.org/fhir/sid/icd-10-cm                        |                                 |
| `{{hcpcs}}`         | HCPCS                 | 2.16.840.1.113883.6.285  | https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets |                                 |
| `{{cvx}}`           | CVX                   | 2.16.840.1.113883.12.292 | http://hl7.org/fhir/sid/cvx                              |                                 |
| `{{loinc}}`         | LOINC                 | 2.16.840.1.113883.6.1    | http://loinc.org                                         |                                 |
| `{{}}`              | PH_ProviderCodes_NUCC | 2.16.840.1.113883.6.101  | http://nucc.org/provider-taxonomy                        |                                 |

### For Propietory Systems

| key           | description                    | code | OID | uri |
| ------------- | ------------------------------ | ---- | --- | --- |
| `{{rxqdrug}}` | **DoseSpot** Generic Drug Code | -    | -   | -   |

## For Billing

### Transaction Type

| key | message                 |
| --- | ----------------------- |
| 0   | none                    |
| 1   | check-in                |
| 2   | check-out               |
| 3   | on account              |
| 4   | by patient              |
| 5   | dpc enroll              |
| 6   | dpc subscription        |
| 7   | copay                   |
| 8   | refund                  |
| 9   | billing adjustment      |
| 10  | PRMS billing adjustment |

```sql
-- Table: transactions_types
SELECT `transaction_type` as `key`, `description` as `message`
FROM `transactions_types`
ORDER BY `key`
```

### Billable Type

| key | message      |
| --- | ------------ |
| 0   | insurance    |
| 1   | patient-pay  |
| 3   | prv          |
| 4   | dpc          |
| 5   | patient-resp |
| 6   | refund       |
| 7   | prompt-pay   |

```sql
-- Table: billable_types
SELECT `billable_type` as `key`, `description` as `message`
FROM `billable_types`
ORDER BY `key`
```

### Billing Status

| key | message              |
| --- | -------------------- |
| 0   | Not Billed           |
| 1   | Billed               |
| 2   | Paid in Full         |
| 3   | Questions            |
| 4   | Billing Code Changed |
| 8   | Not Charged          |
| 9   | Ignore               |
| 11  | Unbilled             |
| 12  | Rebilled             |
| 13  | Billed to DPC        |

```sql
-- Table: ref_dictionaries
-- dictionary_types_id: 93
SELECT `type_key`  as `key`, `label` as `message`
FROM `ref_dictionaries`
WHERE (`dictionary_types_id` = '93') AND (`language` = 'en')
AND `label` <> ''
ORDER by `key`
```
