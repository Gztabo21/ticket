import React from'react';
import Alert from 'react-bootstrap/Alert';

export default function Notification(props){
    return(
        <Alert variant="success">{props.msg}</Alert>
    )
   
}