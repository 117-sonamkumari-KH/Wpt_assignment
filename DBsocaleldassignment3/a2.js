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

connection.query("insert into item values(?,?,?,?) ",[5,"siddhesh",96,"topper5"],(error,result)=>{
    if(error){
        console.log("oops you got Error!");
    }
    else{
        console.log(result);
    }
});
