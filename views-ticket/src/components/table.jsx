
import React from 'react';
import { Table } from 'react-bootstrap';
import TicketForm from'./ticket-form';
import ConfirmDelete from './confirm-delete';

export default function TableDataSource (props){

return(
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
            props.data?
            props.data.map((t,i)=>
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
)
}