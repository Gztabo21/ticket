import React,{useState,useEffect} from 'react';
import { Button,
     Modal,
     ModalDialog,
     ModalHeader,
     ModalTitle,
     ModalBody,
     ModalFooter  } from 'react-bootstrap';
import {Form , FormControl} from 'react-bootstrap';
import UserService  from '../core/services/user-services';
import TicketService from '../core/services/ticket-services';
import Notification from'./notificacion';



export default function TicketForm(props) {
    const [show, setShow] = useState(false);
    const [user,setUser]= useState([]);
    const [assigned, setAssigned] = useState()
    const [request,setRequest]= useState(null)
    const [name,setName] = useState()
    const [id,setId] = useState(props.id);
    const [isShowMe,setIsShowMe] = useState(false)


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
                setIsShowMe(true)
            })
            setIsShowMe(false);
            setAssigned( )
            setName()
        }else{
          if(props.idUser!== null){
           // ticket.UserIdUser = props.idUser;
            ticket.ticketPedido = request;
            TicketService.update(id,ticket).then(res =>{
              console.log(res.data);
              setIsShowMe(true)
          })
          setIsShowMe(false);
          }else{
            TicketService.update(id,ticket).then(res =>{
              console.log(res.data);
              setIsShowMe(true)
          })
          setIsShowMe(false);
          }
            
        }
        
        setShow(false) ;
        
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
            {
              props.name === 'EDIT' || props.name === 'NEW'?
              <>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Ticket Name </Form.Label>
                <Form.Control type="text" value={name} onChange={e =>setName(e.target.value)} placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>To assing: </Form.Label>
                <Form.Control as="select" value={assigned} onChange={e => setAssigned(e.target.value)} >
                <option>No assigned</option>
                    {user?user.map(u =><option value={u.idUser} key={u.idUser} >{u.name}</option>): <option>No DATA</option>}
                </Form.Control>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            </>
              :
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Ticket Name </Form.Label>
              <Form.Control as="select" value={request} onChange={e => setRequest(e.target.value)} >
                  <option value={null}  >request without</option>
                  <option value={props.idUser}  >Request Ticket</option>
                  
              </Form.Control>
            </Form.Group>
            }
            
            
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
        {isShowMe?<Notification msg="SUCESS"/>:null}
      </>
    );
  }