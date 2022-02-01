const express=require('express');
const path=require('path');
const bodyParser = require('body-parser');
const mod = require(path.join(__dirname,'controller','script.js'));
const db = require('./model/database.js');
const app=express();

const port=process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'view','codecss.html'));
});

app.get('/history',(req,res)=>{
    db.pquery();
    res.sendFile(path.join(__dirname,'view','history.html'));
});

app.get('/gethistory',(req,res)=>{
    let obj=db.dquery();
    res.send(obj);
})

app.post('/api',(req,res)=>{
    mod.search(req.body.tagname);
    db.iquery(req.body.tagname);
    res.sendStatus(200);
});

app.get('/api2',(req,res)=>{
    let arr=mod.getjson();
    res.send(arr);
});

app.listen(port);