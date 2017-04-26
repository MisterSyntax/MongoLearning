ObjectId //key made up of 24 hex numbers
first 8 are a time stamp
next 6 are a id for the computer that generated the record
next 4 are for the process on that computer
last 6 are incrementing numbers for each id


//Data Types
null {"name" : null}
boolean {"over20" : true}
number {"age": 31.8}
string {"color": "honkey"}
arrays {"stuff": [1,true,"fuck"]}
Date Objects {"hiredate" : new Date()}
RegEx {"streetRegex" : /^.*\s*(?:st|rd|way)/}
Embedded Documents(Objects) : {"info" : {"name": "Sue Smith"}}
