import React,{Component} from 'react';
import './login.css';
import logo from '../logo.svg';
import {Redirect,withRouter,Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import {Form , FormControl,FormCheck} from 'react-bootstrap';
import { Button,  } from 'react-bootstrap';
import * as ROUTES from '../router';
import AuthService from '../core/services/auth-services.js';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            ...INITIAL_STATE
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {

        const {name,value}=event.target
        this.setState({[name] : value});
      }
      handleSubmit(event) { 
        const { error } = this.state;
         AuthService.auth(this.state).then(resp =>{
             let data = resp.data.message;
          if(data){
              this.setState({error:data})
          }else{
            let auth = localStorage.setItem('auth', resp.data.token)
            this.props.history.push(ROUTES.MAIN);
            
          }
          this.setState({ ...INITIAL_STATE });
        }) 

      event.preventDefault();
    }

    render(){
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
        return(
            <>
            <Container>
                <Row>
                    <Col md={{ span:2 ,offset: 4 }}>
                        <Image className="logo"
                         src={logo} roundedCircle />
                        </Col>
                </Row>
               
                <Form onSubmit={this.handleSubmit} >
                <Row>
                    <Col md={{span:6 ,offset: 3 }}><Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" value={email} onChange={this.handleChange} placeholder="Enter email" />
                        </Form.Group>
                         <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password}  name="password" onChange={this.handleChange}  placeholder="Password" />
                        </Form.Group> </Col>
                        
                </Row>
                       
                    <Row>
                        <Col md={{span:6 ,offset: 3}}> <label className="msg">{error? error :null}</label></Col>
                        <Col md={{span:6 ,offset: 3}}> <Button variant="primary" type="submit" size="lg" block >
                            Sign in
                        </Button></Col>
                    <Col md={{span:5 ,offset: 3}}><Link to={ROUTES.REGISTER}> <label className="register">You do not have an account? Check in</label> </ Link>
                    </Col>  
                          
                    </Row>  
                       
                        
                        
                        </Form>
                
            </Container>
            </>
        )
    }
}
const LoginComponent = withRouter(Login);
export default LoginComponent