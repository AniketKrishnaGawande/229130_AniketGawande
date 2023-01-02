// import and create express object
const express = require("express");
const app = express();

// write router api for incoming request
app.get("/",(req,resp)=>{
// send html file as output
resp.sendFile("public/Company.html",{root:__dirname});

})
// start server at port 3000
app.listen(3000);
// if server started give msg
console.log("server started at 3000");
