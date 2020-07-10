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
    this.state = {token:''}
}

componentDidMount(){
    this.verifyAuth();

}
verifyAuth(){
    const auth = localStorage.getItem('auth');
    if(auth === null){
        this.props.history.push(ROUTES.SIGNIN)
    }else{
        this.setState({token: this.parseJwt(auth)}) 
        this.tokenExpiresIn(this.state.token);
    }
    
}
tokenExpiresIn(data){
    let hoy = new Date();
    let expire =  new Date();
    expire.setTime(data.exp*1000)
            if (hoy.getTime() >= expire.getTime()){
                alert('session a expirado')
                this.props.history.push(ROUTES.SIGNIN)
                //this.router.navigate(['../login']);
            }
  }
  
parseJwt (tkn) {
    var base64Url = tkn.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    console.log(JSON.parse(window.atob(base64)));
    return JSON.parse(window.atob(base64));
};

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