import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";
import pg from "pg";

const app  = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",(req,res)=>
{
    res.sendFile(__dirname + "/public/home.html");
});

app.get("/login",(req,res)=>
{
    
});
app.listen(port,()=>
{
    console.log(`Server running on ${port}`);
});