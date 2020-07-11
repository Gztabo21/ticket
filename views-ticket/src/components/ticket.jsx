import React,{useEffect,useState,useRef} from 'react';

 import TableDataSource from './table'; 
//import { Table } from 'react-bootstrap';
import TicketForm from'./ticket-form';
//import ConfirmDelete from './confirm-delete';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './ticket.css';

export default function Ticket(props){

    const wrapper = useRef(null);
   

return(
    <>

    <Container ref={wrapper} >
        <Row ref={wrapper} >
            <Col md={{ offset:4, span:3 }}><h1>Tickets</h1></Col>
        </Row>
        <Row ref={wrapper}  >
            <Col className='header-btns'>{props.role==='administrador' ? <TicketForm name="NEW"/>: null}</Col>
        </Row>
    </Container>
    <Container>
        
        <Row ref={wrapper}  >
            <Col ref={wrapper} >
            <TableDataSource  idUSer={props.idUser} role={props.role} />
    </Col>
        </Row>
    </Container>
 
    
    </>
)
}