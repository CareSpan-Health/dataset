---
sidebar_position: 1
---

# Dictionary

## For Patient

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
-- Table: dictionaries
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
-- Table: dictionaries
-- dictionary_types_id: 36
SELECT `type_key`  as `key`, `label` as `message`
FROM `ref_dictionaries`
WHERE (`dictionary_types_id` = '36') AND (`language` = 'en')
ORDER by `key`
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
-- Table: dictionaries
-- dictionary_types_id: 35
SELECT 
  `type_key`  as `key`, `label` as `message`
FROM `ref_dictionaries`
WHERE (`dictionary_types_id` = '35') AND (`language` = 'en')
ORDER by `key`
```

### Relationship Types

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
-- Table: dictionaries
-- dictionary_types_id: 30
SELECT `type_key`  as `key`, `label` as `message`
FROM `ref_dictionaries`
WHERE (`dictionary_types_id` = '30') AND (`language` = 'en')
AND `label` <> ''
ORDER by `key`
```

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
-- Table: dictionaries
-- dictionary_types_id: 93
SELECT `type_key`  as `key`, `label` as `message`
FROM `ref_dictionaries`
WHERE (`dictionary_types_id` = '93') AND (`language` = 'en')
AND `label` <> ''
ORDER by `key`
```
