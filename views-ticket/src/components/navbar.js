import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link} from "react-router-dom";
import * as ROUTES from '../router';

export default function NavbarTicket(props){
    console.log(props);
    const signOut = ()=> localStorage.removeItem('auth'); 
  return ( 
      <>  <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">My Company</Navbar.Brand>
            <Nav className="mr-auto">
            {/* <Nav.Link >Home</Nav.Link>
            <Nav.Link >Features</Nav.Link> */}
            <Nav.Link onClick={signOut} ><Link to={ROUTES.SIGNIN}>Sign Out</Link></Nav.Link>
            </Nav> 
          </Navbar>
      </>
)
}
