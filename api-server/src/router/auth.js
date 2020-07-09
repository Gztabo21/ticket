const express = require('express');
const app = express();
let path = require('path');
let fs = require('fs');
const { User } = require('../config/db');
const routes = express.Router();

routes.post('/signin', async (req,res,next)=>{
    try{
        let body = req.body;
        let user = body;
        let UserDB = await User.findAll();
        /* UserDB.forEach(r => {

            
        }); */
    }
    catch(err){
        return res.status(400).json(err);
    }
})

routes.post('/register',async (req,res,next)=>{
    try{
        
        let user = req.body;
        console.log(req)
        /* await User.create({
            name:user.name,
            email:user.email,
            password: user.password,
            UserTypeIdUserType: user.UserTypeIdUserType
        }) */
        return res.status(200).json('OKAY')
    }catch(err){
        console.warn(err)
        res.status(400).json(err)
    }

})

module.exports = routes;