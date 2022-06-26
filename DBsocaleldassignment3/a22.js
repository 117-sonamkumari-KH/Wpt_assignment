const express =require('express');
const app=express();

const mysql=require('mysql2');
const connection=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'cdac',
    database:'forwptass',
    port:3306
});

connection.query("update item set itemname=? where itemno=? ",["sonam",1],(error,result)=>{
    if(error){
        console.log("Error");
    }
    else{
        console.log(result);
    }
});