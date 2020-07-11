import React,{useEffect,useState} from 'react';
import TicketService from '../core/services/ticket-services';
import { Button, Table } from 'react-bootstrap';
import TicketForm from'./ticket-form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './ticket.css';

export default function TicketAssigned(props){
    const [ticket,setTicket] = useState([])
    useEffect(()=>{
        
      TicketService.getAll().then(res =>{
        let data =[]
        res.data.forEach( r =>{
            if (r.UserIdUser === 2 || r.UserIdUser === null ){
                data.push(r)
            }
        })
        setTicket(data)
        console.log(ticket)

      })
      
      
    },[ticket.length])
    
return(
    <>
    <Container>
        <Row>
            <Col md={{ offset:4, span:3 }}><h1>Tickets</h1></Col>
        </Row>
        
    </Container>
    <Container>
        
        <Row>
            <Col><Table striped bordered hover variant="dark">
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
                    ticket.map((t,i)=>
                        <tr key={t.idTicket}>
                        <td>{i+1}</td>
                        <td>{t.name}</td>
                        <td>{t.UserIdUser? <label>Assigned</label>: 'request without'}</td>
                        <td>{!t.UserIdUser? <TicketForm name="Request" idUser={props.idUser} id={t.idTicket}/>:'Assigned'}  </td>
                        </tr>
                        )
                    :   <tr><td>No Hay ticket asignados</td></tr>                                       
                    }
               
            </tbody>
    </Table></Col>
        </Row>
    </Container>
 
    
    </>
)
}