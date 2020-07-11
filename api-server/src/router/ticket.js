const express = require('express');
const routes = express.Router();
const {Ticket} = require('../config/db');


routes.get('/tickets',async(req,res,next)=>{
    try{
    let tickets = await Ticket.findAll();
    
    res.status(200).json(tickets)
    }catch(err){
        next(err);
    } 
    })
routes.get('/tickets/:id',async(req,res,next)=>{
        try{
        let id = req.params.id;
        let tickets = await Ticket.findAll({where:{idTicket:id}});
        
        res.status(200).json(tickets)
        }catch(err){
            next(err);
        } 
        })
 routes.get('/tickets/assigned/:idUser',async(req,res,next)=>{
            try{
            let idUser = req.params.idUser;
            let tickets = await Ticket.findAll({where:{UserIdUser:idUser}});
            res.status(200).json(tickets)
            }catch(err){
                next(err);
            } 
            })

routes.post('/tickets',async(req,res,next)=>{
    try{
    let body = req.body;
    let ticket = body ;
    await Ticket.create({  name: ticket.name , UserIdUser: ticket.UserIdUser })  
    res.status(200).json('OKAY')
    }catch(err){
        next(err);
        res.status(400)
    } 
    })
routes.put('/tickets/:id',async (req,res,next)=>{
    try{
        let body = req.body;
        let id   = req.params.id;
        let ticket = body
        await Ticket.update({name:ticket.name,ticketPedido:body.ticketPedido, UserIdUser:body.UserIdUser},{where:{idTicket:id}});
        return res.status(200).json('OKAY')
    }catch(err){
        next(err);
        res.status(400).json(err);
    }

})
routes.delete('/tickets/:id', async (req,res,next)=>{
    try{
        let id = req.params.id;
        await Ticket.destroy({where:{idTicket:id}})
        return res.status(200).json('OKAY');
    }catch(err){
        next(err)
        return res.status(400).json(err)
    }
})

module.exports = routes;