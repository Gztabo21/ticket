import React,{Component} from 'react' ;
import { Link } from 'react-router-dom';
import * as ROUTES from '../router.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import {Form , FormControl,FormCheck} from 'react-bootstrap';
import { Button,  } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import AuthService from '../core/services/auth-services';
import logo from '../logo.svg';


import './register.css'

const INITIAL_STATE = {
            name:'',
            password:'',
            passwordTwo:'',
            email:'',
            UserTypeIdUserType:2,
            message: null,
};

class RegisterUser extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ...INITIAL_STATE
            };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRedirect = this.handleRedirect.bind(this);
    }
handleChange(event) {
   const {name,value}= event.target;
   this.setState({[name]:value})
}
handleRedirect(event){
    this.props.history.push(ROUTES.SIGNIN)
}
handleSubmit(event) {

      AuthService.register(this.state).then(resp=>{
          console.log(resp)
          if(resp.data === "OKAY"){
            this.props.history.push(ROUTES.SIGNIN)
          }
      })
   // this.setState({ ...INITIAL_STATE });



  
  event.preventDefault();
}

render() {

  const { name,email,password,passwordTwo,error } = this.state;
  const isInvalid = name ===''|| email === '' || password ==='' || passwordTwo !== password;

  return (
    <>
    <Container>
        <Row>
            <Col md={{ span:1 ,offset: 4.5 }}>
                <Image src={logo} roundedCircle />
                </Col>
        </Row>
        
        <Form onSubmit={this.handleSubmit} >
            <Row><Col md={{ span:6 }}>
                <Form.Group >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={name} onChange={this.handleChange} placeholder="Enter name" />
                </Form.Group></Col>
                <Col md={{ span:6 }}>
                    <Form.Group >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={email} onChange={this.handleChange} placeholder="Enter email" />
                </Form.Group>
                </Col>  
            </Row>
            {/* <Row>
                <Col>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Type User </Form.Label>
                    <Form.Control as="select" value={this.state.UserTypeIdUserType} onChange={this.handleChange} >
                        <option value={1}  >Administrador</option>
                        <option value={2}  >Normal</option>
                        
                    </Form.Control>
                </Form.Group>
                </Col>
            </Row> */}
            <Row>
                <Col md={6}>
                    <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password}  name="password" onChange={this.handleChange}  placeholder="Password" />
                </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group >
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control type="password" name="passwordTwo" autoComplete="off"
                 value={passwordTwo}  onChange={this.handleChange}  placeholder="Repeat Password" />
                </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-md-center" >
                <Col md={{offset:4}}>
                <Button block variant="primary" type="submit" disabled={isInvalid}>
                    Register
                </Button>
                </Col>
                <Col >
                <Button block variant="outline-primary" type="button" onClick={this.handleRedirect}>
                    Sign in
                </Button>
                </Col>
            </Row>
                

                
                   
                
                </Form>
        
    </Container>
    </>
  

     
      

     


            )
        }
    }
const RegisterComponent = withRouter(RegisterUser)
export default RegisterComponent