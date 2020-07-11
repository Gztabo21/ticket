
import React, { useEffect , useState } from 'react';
import { Table } from 'react-bootstrap';
import TicketForm from'./ticket-form';
import ConfirmDelete from './confirm-delete';
import TicketService from '../core/services/ticket-services';
import Notification from'./notificacion';

export default function TableDataSource (props){
    const [ticket,setTicket] = useState([])
    const [isShowMe,setIsShowMe] = useState(false);

    useEffect(()=>{
        if(props.role !== 'administrador'){
            TicketService.getAll().then(res =>{
                let data =[]
                res.data.forEach( r =>{
                    if (r.UserIdUser === 2 || r.UserIdUser === null ){
                        data.push(r)
                    }
                })
                setTicket(data)
        
              })
        } else{
            TicketService.getAll().then(res =>{
                setTicket(res.data)
              })
        }
    },[ticket.length])
    const deleteTicket = (id)=>{
        TicketService.delete(id).then(res =>{
           console.log(res.data)
         })  
   setTicket([])
 }

return(
    <>
    {isShowMe?<Notification msg="SUCESS"/>:null}
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
                {
                    props.role === 'administrador'?<td><ConfirmDelete delete={deleteTicket} id={t.idTicket} /> <TicketForm name="EDIT" setIsShowMe={setIsShowMe} id={t.idTicket}/></td>:
                                                  <td>{!t.UserIdUser? <TicketForm setIsShowMe={setIsShowMe} name="Request" idUser={props.idUser} id={t.idTicket}/>:'Assigned'}  </td>
                }
            </tr>
                )
            :null                                           
            }
       
    </tbody>
</Table>
</>
)
}