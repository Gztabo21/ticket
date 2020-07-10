import React, { Component } from 'react';
import './dashboard.css';
import Ticket from'./ticket';
import NavbarTicket from './navbar';
import {Redirect,withRouter} from "react-router-dom";
import * as ROUTES from'../router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export  class DashboardComponent extends Component {

constructor(props) {
     super(props);
    this.state = {Saludo:'Hola!!'}
}

componentDidMount(){
    const auth = localStorage.getItem('auth');
    console.log(auth)
    if(auth === null){
        this.props.history.push(ROUTES.SIGNIN)
    }

}
componentWillMount(){
    
}
render(){
    return(
        <>
        <NavbarTicket />
        <Ticket />
        </>
    );
}

}
const InitialComponent = withRouter(DashboardComponent)
export  default InitialComponent;