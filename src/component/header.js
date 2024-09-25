import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './header.css';

    
    const Header = () => {
      return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Cheapsmmglobal.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" style={{color: "#034a74", fontWeight: "bold", fontSize: "17px"}}>Sign in</Nav.Link>
                <Nav.Link as={Link} to="services" style={{color: "#034a74", fontWeight: "bold", fontSize: "17px"}}>Services</Nav.Link>
                <Nav.Link as={Link} to="blog" style={{color: "#034a74", fontWeight: "bold", fontSize: "17px"}}>Blog</Nav.Link>
                <Nav.Link as={Link} to="about" style={{color: "#034a74", fontWeight: "bold", fontSize: "17px"}}>About Us</Nav.Link>
                <Nav.Link as={Link} to="api" style={{color: "#034a74", fontWeight: "bold", fontSize: "17px"}}>API</Nav.Link>
                <Nav.Link as={Link} to="signup" style={{color: "#034a74", fontWeight: "bold", fontSize: "17px"}}>Sign up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    };
    
    export default Header;
  

