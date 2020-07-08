import React, { Component } from 'react';
import './dashboard.css';


export  default class DashboardComponent extends Component {

constructor(props) {
     super(props);
    this.state = {Saludo:'Hola!!'}
}

render(){
    return(
        <h1>Hola Mundo {this.state.Saludo} </h1>
    );
}

}