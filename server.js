const express = require("express");
const app = express();


app.get("/",(req,resp)=>{

resp.sendFile("public/Company.html",{root:__dirname});

})
app.listen(3000);
console.log("server started at 3000");


