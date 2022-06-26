const http = require('http');
const url=require('url');

http.createServer((req,res)=>{
    let r=url.parse(req.url,true).query;
    let d=r.radius*2;
    res.write("Diameter of a circle= "+d);
    res.end();
}).listen(800);