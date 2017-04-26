use dbName //switch db to dbName

db.testdb.insert({"data":value});//inserts the document into the database

db.testdb.insert([{"name":"barry"},{"name":"larry"}]);//insert multiple documents 

db.testdb.find().pretty();//returns pretty version of the data

//removes entry with that property value
db.testdb.remove({"property" : value})

//update - looks for item with value property and updates it
db.testdb.update({"property" : value}, {$set:{"propertyToUpdate":"newValue","newOrOldProperty":"value"}})
//e.g
db.testdb.update({"name":"barry"}, {$set: {"name":"Larry Londs", "awesome": false }})

//Multi-insert
db.testdb.insert([{...},{...}])

//multi update
db.testdb.update({"name":/.*/}, {$set: {"hasName":true }}, {multi:true})

//increment the number is the amount to increment
//use negatives to decremen
db.testdb.update({"name":"Birthday Boy"}, {"$inc" : {"age": 1 }})

//multiply - would double age of birthday boy
db.testdb.update({"name":"Birthday Boy"}, {"$mult" : {"age": 2 }})

//add to an array or create one if it exists
//"$push" - pushes the followng item into an array
db.testdb.update({"name":"My Man"},
    {"$push": 
        { "Records" :{
            "most pee": "1 gallon",
            "least pee": "1 drop",
            "ham" : "lots of ham"
            }
        }
    }
);
    //records will bean array

//Max items array "$each" and "$slice"
//this would mean that the array in best years would have at most 5 values
db.testdb.update({"name":"My Man"},
    {"$push": 
        { "Best Years" :
            {"$each" : [84,89,97,06,07,11,12],
            "$slice" : -5
            }
        }
    }
);

//add to set $"addToSet" - adds to set only if it doesn't exist 
db.testdb.update({"name":"My Man"},
    {"$addToSet" : 
        {"Best Years" : 17
        }
    }
)

//remove item from end of an array
//add to set $"addToSet" - adds to set only if it doesn't exist 
//the 1 is distance from end to pop
db.testdb.update({"name":"My Man"},
    {"$pop" : 
        {"Best Years" : 1
        }
    }
)
//remove item from an array
//add to set $"addToSet" - adds to set only if it doesn't exist 
//the -1 is distance from beginning to pop
db.testdb.update({"name":"My Man"},
    {"$pop" : 
        {"Best Years" : -1
        }
    }
)

//remove specific item(s) from an array
//17 is the value
//removes all instance of 17 in best years array
db.testdb.update({"name":"My Man"},
    {"$pull" : 
        {"Best Years" : 17
        }
    }
)

//add item to end of array
//add to set $"addToSet" - adds to set only if it doesn't exist 
db.testdb.update({"name":"My Man"},
    {"$push" : 
        {"Best Years" : 17
        }
    }
)

ondblclick.testdb.drop()
//clears the db