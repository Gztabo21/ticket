import React,{useState,useEffect} from 'react';
import { Button,
     Modal,
     ModalDialog,
     ModalHeader,
     ModalTitle,
     ModalBody,
     ModalFooter  } from 'react-bootstrap';
import {Form , FormControl,FormCheck} from 'react-bootstrap';
import UserService  from '../core/services/user-services';
import TicketService from '../core/services/ticket-services';



export default function ConfirmDelete(props) {
    const [show, setShow] = useState(false);
    const [user,setUser]= useState([]);
    const [assigned, setAssigned] = useState()
    const [id,setId] = useState(props.id);


    const handleClose = () => {setShow(false); setId()}
    const handleShow = () => setShow(true); 

    const deleteTicket = ()=>{
           TicketService.delete(props.id).then(res =>{
              console.log(res.data)
            })   
            setShow(false)
    }

   
    return (
      <>
       <Button variant="outline-danger" onClick={handleShow} >Delete</Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Ticket </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          Are you sure you want to delete?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={deleteTicket}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }