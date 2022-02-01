const mysql=require('mysql');
 
var conn = mysql.createConnection({
    host: "history.mysql.database.azure.com", 
    user: "vaibhavmittal@history", 
    password: "Medium12345", 
    database: "history", 
    port: 3306
});

conn.connect(err=>{
    if(!err){
        console.log('Connected');
    }
    else{
        console.log('Error');
    }
});

let tag=[];
let date=[];

function iquery(tag)
{
    let tdate= new Date;
    let s=`insert into info (tag,date) values (${JSON.stringify(tag)},${JSON.stringify(tdate).slice(0,11)+"\""})`;
    conn.query(s ,(err)=>{
        if(!err){
            console.log('Successfully Inserted');
        }
        else {
            console.log('Error in the Query');
        }
    });
}

function dquery()
{
    let obj={
        "tag":tag,
        "date":date
    }
    return obj;
}

function pquery()
{
    tag.length=0;
    date.length=0;

    conn.query("select tag from info order by id desc",(err,data)=>{
        if(!err){
            console.log('Successful Query');
            
            for(let i=0;i<data.length;i++)
            {
                tag.push(data[i].tag);
            }
        }
        else {
            console.log('Error in the Query');
        }
    });

    conn.query("select date from info order by id desc",(err,data)=>{
        if(!err){
            console.log('Successful Query');
            
            for(let i=0;i<data.length;i++)
            {
                date.push(data[i].date);
            }
        }
        else {
            console.log('Error in the Query');
        }
    });
}

module.exports = {iquery,dquery,pquery};
