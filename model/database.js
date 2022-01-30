const mysql=require('mysql');
 
var conn = mysql.createConnection({
    host: "history.mysql.database.azure.com", 
    user: "vaibhavmittal@history", 
    password: "Medium12345", 
    database: "history", 
    port: 3306
});


conn.connect(function(error){
    if(!!error){
        console.log('Error');
    }
    else{
        console.log('Connected');
    }
});

