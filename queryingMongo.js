//find - gets the entire record
db.testdb.find({"state" :"WA", "sex":"M"})

//get specific piece of record
db.testdb.find({"state" :"WA", "sex":"M"}, {"desiredParam": 1/**1=want; 0=Not Want**/} )
e.g.
db.testdb.find({"state" : "WA", "sex" : "M"}, {"name":1, "dob":1})
//without id
db.testdb.find({"state" : "WA", "sex" : "M"}, {"name":1, "dob":1, "_id":0})

//use less than great than
//$gte - greater than or equal to
//$gt - greater than
//$lte - less than or equal to
//lt - less than
db.testdb.find({"gpa" : {"$gte": 3.0, "$lte" :"3.5"}})