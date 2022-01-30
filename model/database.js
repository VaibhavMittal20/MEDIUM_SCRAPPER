const mysql=require('mysql');
 
var conn = mysql.createConnection({
    host: "history.mysql.database.azure.com", 
    user: "vaibhavmittal@history", 
    password: "Medium12345", 
    database: "history", 
    port: 3306
});

conn.connect((err)=>{
    if(!!err){
        console.log('Error');
    }
    else{
        console.log('Connected');
    }
});

let tag=[];
let date=[];

function processquery()
{
    tag.length=0;
    date.length=0;

    conn.query("select tag from info order by id desc",(err,data)=>{
        if(!!err){
            console.log('Error in the Query');
        }
        else {
            console.log('Successful Query');
            
            for(let i=0;i<data.length;i++)
            {
                tag.push(data[i].tag);
            }
         
        }
    });

    conn.query("select date from info order by id desc",(err,data)=>{
        if(!!err){
            console.log('Error in the Query');
        }
        else {
            console.log('Successful Query');
            
            for(let i=0;i<data.length;i++)
            {
                date.push(data[i].date);
            }
           
        }
    });
}

