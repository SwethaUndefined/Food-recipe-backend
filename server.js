const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyparser =  require('body-parser');
const dburl = "mongodb://localhost:27017/FoodRecipeApplication";

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}))

dotenv.config();//This line will pull the global variables to dotenv file

const db = require("./models");

db.mongoose.connect(dburl,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connected to database")
}).catch((err)=>{
    console.log("Connection to DB failed "+err);
    process.exit();//if error occured then come out of the request.
})


app.get("/",async (req,res)=>{
    res.send("Welcome to LS Restaurant")
})

require("./routes/user.routes")(app);

const PORT = 8081;
app.listen(PORT,()=>{
    console.log(`Server has been started on port ${PORT}`)
})