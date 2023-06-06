import React, { useEffect, useState } from 'react'
import { Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
 
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");

  //   if (userInfo) {
  //     navigate("/mynotes");
  //   }
  // }, []);
  
  return (
    <Navbar bg="primary" expand="lg" variant='dark'>
    <Container >
      <Navbar.Brand>
      <Link to="/">

      NoteZipper
      </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Nav >
      <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
         
        </Form>
      </Nav>
        <Nav
        
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link >
          <Link to="/mynotes">

          My Notes
          </Link>
          </Nav.Link>
          <NavDropdown title="Abhijeet Tripathi" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">My profile</NavDropdown.Item>
    
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={()=>{
              localStorage.removeItem("userInfo");
              window.location.href = "/"
             
            }}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header;