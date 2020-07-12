import React, { Component } from 'react';
import './dashboard.css';
import Ticket from'./ticket';
import NavbarTicket from './navbar';
import {Redirect,withRouter} from "react-router-dom";
import * as ROUTES from'../router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserTypeService from '../core/services/userType-services';



export  class DashboardComponent extends Component {

constructor(props) {
     super(props);
    this.state = {token:[],role:'',idUser:''}
    
}

componentDidMount(){
    this.verifyAuth();
}

verifyAuth(){
    const auth = localStorage.getItem('auth');
    auth === null ?this.props.history.push(ROUTES.SIGNIN):   this.tokenExpiresIn(this.parseJwt(auth))

}
tokenExpiresIn(data){
    let hoy = new Date();
    let expire =  new Date();
    expire.setTime(data.exp*1000)
            if (hoy.getTime() >= expire.getTime()){
                alert('session a expirado')
                this.props.history.push(ROUTES.SIGNIN)
            }

  }
VerifyRole(idUserType,idUser){
    this.setState((state)=>{return {idUser: state.idUser = idUser}})
    UserTypeService.get(idUserType).then(res =>{
        this.setState((state)=>{
            return{role: state.role = res.data[0].name }})
    }) 

    console.log(this.state)
}
  
parseJwt (tkn) {
    let base64Url = tkn.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
   
    let payload= []
    payload.push(JSON.parse(window.atob(base64))) 
    this.VerifyRole(payload[0].role,payload[0].id);
    return payload[0]
};


render(){
    return(
        <>
        <NavbarTicket />
        <Ticket role={this.state.role} idUser={this.state.idUser} />
        </>
    );
}

}
const InitialComponent = withRouter(DashboardComponent)
export  default InitialComponent;