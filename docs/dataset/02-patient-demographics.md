# Patient Demographics

## CareSpan Format V1

The CareSpan format will be generated in `JSON` format with the following fields

### Patient: `object`

| Field | Type | Description | Comment |
|-------|-------------|---|---|
| `active` | `number` | Whether the user is active? | `1` for active<br/>  `0` for inactive |
| `uid` | `number` | Unique User ID | This is for internal use |
| `mrn` | `string` | Unique Medical Record Number | This is for external use |
| `username` | `string` | User Name |-|
| `nickname` | `string` | Nick Name |-|
| `previousname` | `string` | Previous Name (name used before) |-|
| `name` | `string` | The name of the user |-|
| `pre` | `string` | Prefix of the name  |Examples: `Mr`, `Ms`, `Dr`|
| `fname` | `string` | First Name |-|
| `mname` | `string` | Middle Name |-|
| `maiden_name` | `string` | Maiden Name |-|
| `lname` | `string` | Last Name |-|
| `post` | `string` | Postfix Name |Examples: `PhD`, `CPA`|
| `email` | `string` | E-mail |-|
| `ssn` | `sting` | Social Security Number  |-|
| `tz` | `string` | Time Zone |-|
| `create_date` | `string` | When the user is created on CareSpan |-|
|       |             |   | |
| `street1` | `string` | First line of the address |-|
| `street2` | `string` | Second line of the address |Examples: `Unit 1`|
| `street3` | `string` | Third line of the address ||
| `city` | `string` | City |-|
| `state` | `string` | State |-|
| `region` | `string` | Region (if outside of the US)|-|
| `postalcode` | `string` | Zip Code|-|
| `country` | `string` | Country Code|-|
| `phone` | `string` | Primary Phone Number|-|
| `phone2` | `string` | Fax Number|-|
| `cell` | `string` | Mobile/Cell Number|-|
| `phone3` | `string` | Work Phone Number|-|
| `years` | `string` | Years living in the current address|-|
|       |             |   | |
| `dob` | `string` | Date of Birth |-|
| `unknown_dob` | `string` |  |`0` if there id a `DoB`<br/>`1` if `DoB` is unknown|
| `dod` | `sting` | Date of Death  |-|
| `cause_of_death` | `sting` | Cause of Death  |-|
| `smoker` | `number` (key) | Smoking Status  | Check `Smoking v1` dictionary [link](/docs/dictionary#smoker-v1) |
| `gender` | `number` (key) | Gender by Birth  | Check `Gender v1` dictionary [link](/docs/dictionary#gender-v1) |
| `identity` | `number` (key) | Gender Identity  | Check `Gender Identity` dictionary [link](/docs/dictionary#gender-identity) |
| `sexual_orientation` | `number` (key) | Gender Orientation  | Check `Gender Orientation` dictionary [link](/docs/dictionary#gender-orientation) |
| `race` | `array<number>` (key) | Race  |Check `Race` dictionary [link](/docs/dictionary#race)|
| `ethnicity` | `array<number>` (key) | Ethnicity  |Check `Ethnicity` dictionary [link](/docs/dictionary#ethnicity)|
| `religion` | `number` (key) | Ethnicity  |Check `Religion` dictionary [link](/docs/dictionary#religion)|
| `preferred_language` | `string` | Preferred Language  |-|
| `interpreter_needed` | `number` | Does the patient need an interpreter?  |`1` for yes<br/>  `0` for no|
|       |             |   | |
| `bloodtype` | `number` (key) | Blood Type  |Check `Blood Type` dictionary [link](/docs/dictionary#blood-type)|
| `marital_status` | `number` (key) | Blood Type  |Check `Marital` dictionary [link](/docs/dictionary#marital)|
|       |             |   | |
| `guardian_name` | `string` | Guardian Name  |-|
| `guardian_relationship` | `string` | Guardian's relationship to the patient  |-|
| `guardian_phone` | `string` | Guardian's phone number  |-|
| `guardian_email` | `string` | Guardian's email  |-|
| `contactlist` | `array<Contact>` | Emergency contacts  |Check `contact` section [link](#contact)|
| `guarantorlist` | `array<Contact>` | List of guarantors  |Check `contact` section [link](#contact)|
| `clinicians` | `array<Contact>` | List of clinicians  |Check `contact` section [link](#contact)|
|       |             |   | |
| `payers_insurance` | `array<Insurer>` | List of Primary Insurance (include inactive ones)  | Check `insurer` section [link](#insurer) |
| `secondary_payers_insurance` | `array<Insurer>` | List of Secondary Insurance (include inactive ones)  | Check `insurer` section [link](#insurer) |
| `tetiary_payers_insurance` | `array<Insurer>` | List of Tetiary Insurance (include inactive ones)  | Check `insurer` section [link](#insurer) |

### Contact: `object`
| Field | Type | Description | Comment |
|-------|-------------|---|---|
| `name` | `string` | The name of the user |-|
| `fname` | `string` | First Name |-|
| `mname` | `string` | Middle Name |-|
| `lname` | `string` | Last Name |-|
| `phone` | `string` | Primary Phone Number|-|
| `phone2` | `string` | Fax Number|-|
| `cell` | `string` | Mobile/Cell Number|-|
| `phone3` | `string` | Work Phone Number|-|
| `street1` | `string` | First line of the address |-|
| `street2` | `string` | Second line of the address |Examples: `Unit 1`|
| `street3` | `string` | Third line of the address ||
| `city` | `string` | City |-|
| `state` | `string` | State |-|
| `region` | `string` | Region (if outside of the US)|-|
| `postalcode` | `string` | Zip Code|-|
| `country` | `string` | Country Code|-|
| `email` | `string` | E-mail |-|
| `priority` | `number` | Priority |-|


### Insurer: `object`
| Field | Type | Description | Comment |
|-------|-------------|---|---|
| `icompany` | `string` | The name of the insurance company |-|
| `payer_code` | `string` | The payer code of the insurance company |-|
| `igroup` | `string` | Patient's Group Number |-|
| `ipolicy` | `string` | Patient's Policy Number |-|
| `istreet1` | `string` | First line of the address for the insurance company |-|
| `istreet2` | `string` | Second line of the address for the insurance company |Examples: `Unit 1`|
| `icity` | `string` | City for the insurance company |-|
| `istate` | `string` | State for the insurance company |-|
| `ipostalcode` | `string` | Zip Code for the insurance company |-|
| `isubscriber_relationship` | `string` | Subscriber's relationship to the patient |Check `Relationship Types V2` dictionary [link](/docs/dictionary#relationship-types-v2)|
| `isubscriber_fname` | `string` | Subscriber's First Name |-|
| `isubscriber_lname` | `string` | Subscriber's Last Name |-|
| `isubscriber_dob` | `string` | Subscriber's Date of Birth |-|
| `isubscriber_phone` | `string` | Subscriber's Phone Number|-|
| `isubscriber_email` | `string` | Subscriber's E-mail |-|
| `isubscriber_street1` | `string` | First line of the Subscriber's address |-|
| `isubscriber_street2` | `string` | Second line of the Subscriber's address |Examples: `Unit 1`|
| `isubscriber_city` | `string` | Subscriber's City |-|
| `isubscriber_state` | `string` | Subscriber's State |-|
| `isubscriber_postalcode` | `string` | Subscriber's Zip Code |-|
| `idatefrom` | `string` | Start of the eligibility |-|
| `idateto` | `string` | End of the eligibility |-|
| `active` | `string` | Whether the insurance is active | `1` for active<br/>  `0` for inactive|
