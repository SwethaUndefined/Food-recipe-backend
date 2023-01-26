module.exports = (app)=>{
   const userController = require("../Controller/user.Controller");
   const userRoute  = require("express").Router();

   app.post("/login",userController.createUser);

   app.use("/app",userRoute);
}