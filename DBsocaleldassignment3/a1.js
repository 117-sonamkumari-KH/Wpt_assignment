const express =require('express');
const app=express();

const mysql=require('mysql2');
const connection=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'Cdac',
    database:'forwptass',
    port:3306
});

connection.query("select 10 from dual",(error,result)=>{
    if(error){
        console.log("Error");
    }
    else{
        console.log(result);
    }
});



