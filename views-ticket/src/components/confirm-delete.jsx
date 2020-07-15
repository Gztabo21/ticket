import React,{useState,useEffect} from 'react';
import { Button,
     Modal,
     ModalDialog,
     ModalHeader,
     ModalTitle,
     ModalBody,
     ModalFooter  } from 'react-bootstrap';
import TicketService from '../core/services/ticket-services';
import { BsTrashFill } from 'react-icons/bs';


export default function ConfirmDelete(props) {
    const [show, setShow] = useState(false);
    const [id,setId] = useState(props.id);


    const handleClose = () => {setShow(false); setId()}
    const handleShow = () => setShow(true); 
   
    return (
      <>
       <Button variant="danger" onClick={handleShow} ><BsTrashFill /></Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title><label className="header-modal">Ticket</label>  </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <label htmlFor="" className="text-modal" >Are you sure you want to delete?</label>
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={()=>{props.delete(id); setShow(false)}}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }