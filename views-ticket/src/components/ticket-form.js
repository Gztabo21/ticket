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



export default function TicketForm(props) {
    const [show, setShow] = useState(false);
    const [user,setUser]= useState([]);
    const [assigned, setAssigned] = useState()
    const [name,setName] = useState()
    const [id,setId] = useState(props.id);


    const handleClose = () => {setShow(false); setId()}
    const handleShow = () => setShow(true); 
    useEffect(()=>{
           if(show) {
               UserService.getAll().then(res=>{ setUser(res.data); });
                getTicket(id)
           }  
           
            
    },[show])
   

    const getTicket = (id)=>{

        if(id){
            TicketService.get(props.id).then(res =>{
             res.data.forEach(r => {
                 setName(r.name)
                 setAssigned(r.UserIdUser)

             });
       
            })
         
        } 
    }

    const saveTicket = () =>{
        let ticket = new Object();
        ticket.name= name
        ticket.UserIdUser = assigned

        if(id === undefined){
            
            TicketService.add(ticket).then( res =>{
                console.log(res.data);
            })
        }else{
            TicketService.update(id,ticket).then(res =>{
                console.log(res.data);
            })
        }
        
        setShow(false)
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          {props.name} Ticket
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Ticket </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Ticket Name </Form.Label>
                <Form.Control type="text" value={name} onChange={e =>setName(e.target.value)} placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>To assing: </Form.Label>
                <Form.Control as="select" value={assigned} onChange={e => setAssigned(e.target.value)} >
                    {user?user.map(u =><option value={u.idUser} key={u.idUser} >{u.name}</option>): <option>No DATA</option>}
                </Form.Control>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveTicket}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }