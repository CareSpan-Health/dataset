---
sidebar_position: 6
---

# Event Definition

The format for events would be:

`DCCCAAA`

## `D`

`D` only has 2 values

| D | Detail |
| ------ | ------ |
| 0 | Non EHR |
| 1 | EHR |

## `CCC`: Category

This is for the category

Where `D` is 0, we don't have a defined category. So far, we have the following

| 0CCC | Detail |
| ------ | ------ |
| 0001AAA | Messaging (Message Center) |
| 0002AAA | Appointment |
| 0003AAA | Document |
| 0004AAA | User |
| 0005AAA | Patient Demographic |
| 0006AAA | CCDA |
| 0007AAA | Encounter |
| 0008AAA | On-call |
| 0009AAA | Philhealth User |
| 0010AAA | Calendar Availability |
| 0011AAA | Billing Posting for Private Contracts |

| 1CCC | Detail |
| ------ | ------ |
| 1001AAA | Vital (Diagnostic Data/Measurements) |
| 1002AAA | Review of Systems |
| ... | ... |
| 1100AAA | Special Apps|

## `AAA`: Actions

| AAA | Detail |
| ------ | ------ |
| DCCC001 | Create |
| DCCC002 | Read |
| DCCC003 | Update |
| DCCC004 | Delete |
| DCCC005 | Search |
| DCCC010 | Send |
| DCCC011 | Send-fax |
| DCCC012 | Send-email |
| DCCC013 | Send-print |
| DCCC014 | Send-download |
| DCCC015 | Send-sms |
| DCCC101 | Match (i.e. unsolicited, ccda) |
| DCCC201 | Expand/Drill in |
| DCCC202 | Review/Verify |
| DCCC400 | Archive |
| DCCC401 | Cancel |
| DCCC402 | Inactive |
| DCCC403 | Lock |

### Detail actions

There are times when we need track very specific actions

#### Patient Insurance

| 0056AAA | Patient Insurance |  |
| ------ | ------ | ------ |
| 0056001 | Create new patient Insurance | |
| 0056003 | Update patient Insurance | |
|  |  | |
| 0056202 | Verify Insurance | |
|  |  |  |
| 0056A1S | Patient Insurance Card | `A` is for CRUD action<br />`S` is for side (1 - front and 2 - back) |
| 0056111 | Create Scan Patient Insurance Front | |
| 0056112 | Create Scan Patient Insurance Back | |
| 0056311 | Update Scan Patient Insurance Front | |
| 0056312 | Update Scan Patient Insurance Back | |
|  |  |  |
| 0056401 | Patient Insurance Authorization Number C | |
| 0056403 | Patient Insurance Authorization Number U | |
| 0056404 | Patient Insurance Authorization Number D | |

### Custom action

| 9AA | Detail |
| ------ | ------ |
| 0001901 | messaging-reply |
| 0004900 | user-logout |
| 0004901 | user-login |
