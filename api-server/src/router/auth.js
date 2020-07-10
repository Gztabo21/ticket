const express = require('express');
const app = express();
let path = require('path');
const { User } = require('../config/db');
const routes = express.Router();
const crypto = require('crypto')
const jwt = require('jsonwebtoken') ;

/* "Content-Type: application/json" -X POST "localhost:8080/api/v1/signin" -d {\"email\":\"client@admin.com\",\"password\":\"123456\"}*/
routes.post('/signin', async (req,res,next)=>{
    try{
        let body = req.body;
        let user = body;
        let pw   = criptPassword(user.password)
        let role 
        let userDB = await User.findAll({ where: {
            email: user.email, password:pw
          }});
        userDB.forEach(u => {
            role = u.UserTypeIdUserType
            console.log(role)
        });
        let token   = jwt.sign(
            {   user:user.email, 
                role: role,
                "creador":"GustavoCacharuco",
            },//payload
            'https://github.com/Gztabo21/ticket.git',     //secret
            {expiresIn:60*60})
            console.log(token);
          if (userDB.length === 0) {
            return res.status(200).json({ message: 'Incorrect email & Incorrect password.' })
          }else{
            res.status(200).json({'token':token})
          }
          

        /* userDB.forEach( u => {

            if(user.email === u.email && user.password === u.password){
         
                    
                
            }
        }); */
        
    }
    catch(err){
        return res.status(400).json(err);
    }
})

routes.post('/register',async (req,res,next)=>{
    try{
        
        let user = req.body;
        let password = criptPassword(user.password)
         await User.create({
            name:user.name,
            email:user.email,
            password: password,
            UserTypeIdUserType: user.UserTypeIdUserType
        }) 
        return res.status(200).json('OKAY')
    }catch(err){
        console.warn(err)
        res.status(400).json(err)
    }

})
function criptPassword(password){
    const hash = crypto.createHash('sha256');
    let nwPw = hash.update(password).digest('hex')
    //console.log(nwPw)
     return nwPw
}

module.exports = routes;