import React,{useEffect,useState} from 'react';
import TicketService from '../core/services/ticket-services';
import { Button, Table } from 'react-bootstrap';
import TicketForm from'./ticket-form';
import ConfirmDelete from './confirm-delete';

import './ticket.css';

export default function Ticket(props){
    const [ticket,setTicket] = useState([])
    const isTrue = 0
    useEffect(()=>{
      TicketService.getAll().then(res =>{
        setTicket(res.data)
      })
      
    },[ticket.length])
    const handleId = (id) =>  id
    
return(
    <>
    <h1>tickect</h1>
    <TicketForm name="NEW"/>
    <br />
    <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>Name Ticket</th>
                <th>STATUS</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    ticket?
                    ticket.map(t=>
                        <tr key={t.idTicket}>
                        <td>{t.idTicket}</td>
                        <td>{t.name}</td>
                        <td>{t.ticketPedido}</td>
                        <td><ConfirmDelete id={t.idTicket} /> <TicketForm name="EDIT"  id={t.idTicket}/>  </td>
                        </tr>
                        )
                    :null                                           
                    }
               
            </tbody>
    </Table>
    </>
)
}