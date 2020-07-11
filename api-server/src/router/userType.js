const express = require('express');
const routes = express.Router();
const {UserType} = require('../config/db');


routes.get('/usertypes',async(req,res,next)=>{
    try{
    let users = await UserType.findAll();   
    res.status(200).json(users)
    }catch(err){
        next(err);
    } 
    })

routes.get('/usertypes/:id',async(req,res,next)=>{
        try{
        let id = req.params.id;
        let users = await UserType.findAll({where:{idUserType:id}});        
        res.status(200).json(users)
        }catch(err){
            next(err);
        } 
        })

 

module.exports = routes;