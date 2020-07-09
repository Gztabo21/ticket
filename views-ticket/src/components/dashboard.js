import React, { Component } from 'react';
import './dashboard.css';
import Ticket from'./ticket';
import NavbarTicket from './navbar';
import {Redirect,withRouter} from "react-router-dom";


export  class DashboardComponent extends Component {

constructor(props) {
     super(props);
    this.state = {Saludo:'Hola!!'}
}

componentDidMount(){
    console.log(this.props)
    const auth = localStorage.getItem('auth');
    if(!auth){
        console.log('desactivo')
    }
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
const ComponentInitial = withRouter(DashboardComponent)
export  default ComponentInitial;