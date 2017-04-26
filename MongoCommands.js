

/**
 * @description: MongoDB Commands
 * 
 */
mongod //- start up the server
mongo //- creates a shell for working with the server

//BAD db name chars 
/ \ . * < > " | ? :

show dbs //shows all databases
db //shows current db
use db_name //creates(if doesn't exist) and switch to a new db

create json objects like you would in js in the terminal
var myObj = {
    "property": "value",
    "property2": "value2"
}

//insert json objects into the database 
db.dbname.insert(myObj);

db.dbname.find();//returns all in db

db.dbname.find().pretty();//returns db stuff but pretty

//updating example;
//we inserted 
myName = {"name": "Andrew S", email: "asd@asdg.com"}
db.test_1.insert(myName)
//then we modified myName
myName.references = []
db.test_1.update({"name":"Andrew S"}, myName)
//updated the entry with name = Andrew S by comparing it with what was in myName obj

db.test_1.remove({"property":"value"})
//removes all propertes with value

//help - gives mongodb Commands

//exit - quits

load("filename.js");//loads the filename in mongo
then you can run the functions in the file in Mongo

.mongorc.js //file that runs everytime you run your mongo shell command



