const express = require('express');
const routes = express.Router();
const {User} = require('../config/db');


routes.get('/users',async(req,res,next)=>{
    try{
    let users = await User.findAll();   
    res.status(200).json(users)
    }catch(err){
        next(err);
    } 
    })
routes.get('/users/:id',async(req,res,next)=>{
        try{
        let id = req.params.id;
        let users = await User.findAll({where:{idTicket:id}});        
        res.status(200).json(users)
        }catch(err){
            next(err);
        } 
        })
routes.post('/users',async(req,res,next)=>{
    try{
    let body = req.body;
    let user = body ;
    await User.create({  
        name:user.name,
        email:user.email,
        password: user.password,
        UserTypeIdUserType: user.UserTypeIdUserType})  
    res.status(200).json('OKAY')
    }catch(err){
        next(err);
        res.status(400)
    } 
    })
routes.put('/users/:id',async (req,res,next)=>{
    try{
        let body = req.body;
        let id   = req.params.id;
        let user = body
        await User.update({
            name:user.name,
            email:user.email,
            password: user.password,
            UserTypeIdUserType: user.UserTypeIdUserType},{where:{idUser:id}});
        return res.status(200).json('OKAY')
    }catch(err){
        next(err);
        res.status(400).json(err);
    }

})
routes.delete('/users/:id', async (req,res,next)=>{
    try{
        let id = req.params.id;
        await User.destroy({where:{idUser:id}})
        return res.status(200).json('OKAY');
    }catch(err){
        next(err)
        return res.status(400).json(err)
    }
}) 

module.exports = routes;