/**
 * @description: Installing and Running Mongo DB
 */
1. Install MongoDB from the net
2. Create a 'data' folder where you want to store the DB called 'data'
    a. Create a sub folder called 'db'
    cd c
    mkdir data
    mkdir data/db
3. Open a terminal for MongoDB
4. Nav to bin folder: e.g. 
    e.g. cd '/cygdrive/c/Program Files/MongoDB/Server/3.4/bin'
5. run the following command to start the server: 
    mongod //if you have set up the data folders on the c drive e.g. c:/data/db 
    //or if you like to get freaky
    mongod.exe --dbpath "C:\Users\Can I Have Some Shoe\Desktop\React101\fullstack Reacto\data"
    
//Update your path;
goto control panel 
advanced system settings
enviornment variables
select top and bottom path
edit the bottom path, and add your path for mongodb
C:\Program Files (x86)\Intel\iCLS Client\;C:\Program Files\Intel\iCLS Client\;%SystemRoot%\system32;%SystemRoot%;%SystemRoot%\System32\Wbem;...;C:\Program Files\MongoDB\Server\3.4
//then you can use mongo from anywhere
    
6.Open a new terminal set to MongoDB and this is where you will access your db
    cd '/cygdrive/c/Program Files/MongoDB/Server/3.4/bin'
    run 
        mongo

7. update your config.js export default to include
    mongodbUri: "mongodb://localhost:27017/<dbName>",//prolly test


mongorc.js// file thats run when terminal is created