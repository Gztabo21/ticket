import React,{useState,useEffect} from 'react';
import { Button,
     Modal,
     ModalDialog,
     ModalHeader,
     ModalTitle,
     ModalBody,
     ModalFooter  } from 'react-bootstrap';
import TicketService from '../core/services/ticket-services';



export default function ConfirmDelete(props) {
    const [show, setShow] = useState(false);
    const [id,setId] = useState(props.id);


    const handleClose = () => {setShow(false); setId()}
    const handleShow = () => setShow(true); 

    const deleteTicket = ()=>{
           TicketService.delete(id).then(res =>{
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