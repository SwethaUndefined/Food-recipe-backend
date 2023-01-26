const db = require("../models");

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const user = db.user;


exports.createUser = (req,res)=>{
    const{user_id,password} = req.body;
    if(user_id == "" && password == ""){
        res.status(400).send({
            status : false,
            message : "Required information missing, Please provide"
        });
        return;
    }

    const filter  = {user_id : user_id}
    user.findOne(filter,(err,user)=>{
        if(user==null){
            const salt  = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password,salt);
            const newUser = new db.user({
                user_id,
                password : hash
            })
            newUser.save().then(()=>{
                res.status(200).send({
                    status : true,
                    message : "Sucessfully created"
                })
            }).catch(()=>
                res.status(500).send({
                status : false,
                message : "Internal server"
            })
            )
        }
    })
}