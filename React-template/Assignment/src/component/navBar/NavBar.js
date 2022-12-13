import React from "react";
import { Container, Nav, Navbar, Form, InputGroup, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import   '../navBar/NavBar.css'
import { BiSearchAlt2 } from 'react-icons/bi';
const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbar-color" >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  style={{backgroundColor: "white"}} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <LinkContainer to="/" >
            <Nav.Link>HOME</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" >
              <Nav.Link >ABOUT</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/our story" >
              <Nav.Link>OUR STORY</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact us" >
              <Nav.Link>CONTACT US</Nav.Link>
              </LinkContainer>
            </Nav>
          
            <InputGroup className="mb-0">
              <Form.Control aria-label="Search"/>
            </InputGroup> 

            <Button variant="light" className="search-btn" type="submit">
         <BiSearchAlt2 size={28} />
      </Button>
      
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
