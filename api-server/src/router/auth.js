const express = require('express');
const app = express();
let path = require('path');
const { User } = require('../config/db');
const routes = express.Router();
const cripto = require('crypto')
/* "Content-Type: application/json" -X POST "localhost:8080/api/v1/signin" -d {\"email\":\"client@admin.com\",\"password\":\"123456\"}*/
routes.post('/signin', async (req,res,next)=>{
    try{
        let body = req.body;
        let user = body;
        let userDB = await User.findAll();
      
 
    }
    catch(err){
        return res.status(400).json(err);
    }
})

routes.post('/register',async (req,res,next)=>{
    try{
        
        let user = req.body;
         await User.create({
            name:user.name,
            email:user.email,
            password: user.password,
            UserTypeIdUserType: user.UserTypeIdUserType
        }) 
        return res.status(200).json('OKAY')
    }catch(err){
        console.warn(err)
        res.status(400).json(err)
    }

})

module.exports = routes;