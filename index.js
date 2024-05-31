import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";
import pg from "pg";

const app  = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"infinity",
    password:"adithya",
    port:5432.
});

db.connect();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
const salt = 10;
app.get("/",(req,res)=>
{
    res.sendFile(__dirname + "/public/home.html");
});

app.get("/login",(req,res)=>
{
    res.sendFile(__dirname+"/public/login.html");
});

app.get("/register",(req,res)=>    
{
    res.sendFile(__dirname+"/public/register.html")
});
app.get("/about",(req,res)=>    
{
    res.render("about.ejs");
});

app.get("/int",(req,res)=>{
    res.render("int.ejs");
});

app.get("/home",(req,res)=>
{
    res.render("home.ejs");
});
app.get("/traveltips",(req,res)=>
{
    res.render("traveltips.ejs");
});
app.get("/ind",(req,res)=>
{
    res.render("ind.ejs");
});
app.get("/isl",(req,res)=>
{
    res.render("isl.ejs");
});
app.get("/intpackage",(req,res)=>
{
    res.render("intpackage.ejs");
});


app.get("/italy",(req,res)=>
{
    res.render("italy.ejs");
});
app.get("/spain",(req,res)=>
{
    res.render("spain.ejs");
});
app.get("/singapore",(req,res)=>
{
    res.render("singapore.ejs");
});
app.get("/australia",(req,res)=>
{
    res.render("australia.ejs");
});
app.get("/thailand",(req,res)=>
{
    res.render("thailand.ejs");
});
app.get("/grece",(req,res)=>
{
    res.render("greece.ejs");
});


app.get("/agra",(req,res)=>
{
    res.render("agra.ejs");
});
app.get("/amritsar",(req,res)=>
{
    res.render("amritsar.ejs");
});
app.get("/delhi",(req,res)=>
{
    res.render("delhi.ejs");
});
app.get("/jaipur",(req,res)=>
{
    res.render("jaipur.ejs");
});
app.get("/jammu",(req,res)=>
{
    res.render("jammu.ejs");
});
app.get("/karnataka",(req,res)=>
{
    res.render("karnataka.ejs");
});


app.get("/andaman",(req,res)=>
{
    res.render("andaman.ejs")
});
app.get("/bali",(req,res)=>
{
    res.render("bali.ejs")
});
app.get("/cyprus",(req,res)=>
{
    res.render("cyprus.ejs")
});
app.get("/lakshadweep",(req,res)=>
{
    res.render("lakshadweep.ejs")
});
app.get("/mauritius",(req,res)=>
{
    res.render("mauritius.ejs")
});
app.get("/whitsundays",(req,res)=>
{
    res.render("whitsundays.ejs")
});


app.post("/login",async(req,res)=>
{
    const l_user = req.body.username;
    const l_pass = req.body.password;
    try
    {
        const result = await db.query("select * from authen where username = $1",[l_user]);
        if(result.rowCount>0)
            {
                const password  = result.rows[0].password;
                const match = await bcrypt.compare(l_pass,password);
                if(match)
                    {
                        res.render("home.ejs");
                    }
                else  
                {
                    res.send("Incorrect Password Try again");
                }
            }
        else
        {
            res.send("User not regestered try registering ");
        }

    }
    catch(err)
    {
        console.log(err);
    }
});
app.post("/register", async (req, res) => {
    const r_user = req.body.username;
    const r_pass = req.body.password;
    const email = req.body.email;

    try {
        const result = await db.query("SELECT * FROM authen WHERE username = $1", [r_user]);
        if (result.rowCount > 0) {
            res.send("User already exists. Try logging in.");
        } else {
            const hashedPass = await bcrypt.hash(r_pass, salt);
            await db.query("INSERT INTO authen (username, password) VALUES ($1, $2)", [r_user, hashedPass]);
            await db.query("INSERT INTO users (username, email) VALUES ($1, $2)", [r_user, email]);
            res.sendFile(__dirname + "/public/login.html");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occurred while registering");
    }
});
app.listen(port,()=>
{
    console.log(`Server running on ${port}`);
});