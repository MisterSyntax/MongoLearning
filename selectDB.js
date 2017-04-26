var selectDB = function(port, dbName){
    //if no port has been passed set it to where mongoDb s runnnig
    if(!port){
        port = 27017;
    }
    //if no db set it to our test db
    if(!dbName){
        dbName = "test_1";
    }
    
    db = connect("localhost:" + port + "/" + dbName);
}