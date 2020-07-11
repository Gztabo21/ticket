import React,{useEffect,useState} from 'react';
import TicketService from '../core/services/ticket-services';
/* import TableDataSource from './table'; */
import { Table } from 'react-bootstrap';
import TicketForm from'./ticket-form';
import ConfirmDelete from './confirm-delete';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './ticket.css';

export default function Ticket(props){
    const [ticket,setTicket] = useState([])
    console.log(props.idUser)
    useEffect(()=>{
     /*  props.iduser ?
      TicketService.getTicketAssigned(props.iduser).then(res =>{
          console.log(res.data);
        setTicket(res.data)
      })
      : */  
      TicketService.getAll().then(res =>{
        setTicket(res.data)
      })
      
    },[ticket.length])
    
return(
    <>
    <Container>
        <Row>
            <Col md={{ offset:4, span:3 }}><h1>Tickets</h1></Col>
        </Row>
        <Row>
            <Col className='header-btns'><TicketForm name="NEW"/></Col>
        </Row>
    </Container>
    <Container>
        
        <Row>
            <Col>
            {/* <TableDataSource data={ticket} /> */}
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
                    ticket.map((t,i)=>
                        <tr key={t.idTicket}>
                        <td>{i+1}</td>
                        <td>{t.name}</td>
                        <td>{t.UserIdUser? <label>Assigned</label>: 'request without'}</td>
                        <td><ConfirmDelete id={t.idTicket} /> <TicketForm name="EDIT"  id={t.idTicket}/>  </td>
                        </tr>
                        )
                    :null                                           
                    }
               
            </tbody>
    </Table>
    
    </Col>
        </Row>
    </Container>
 
    
    </>
)
}