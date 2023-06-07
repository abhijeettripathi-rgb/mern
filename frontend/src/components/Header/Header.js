import React  from 'react'
import { Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userActions';


const Header = () => {
 
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const userLogin=useSelector((state)=>state.userLogin);
  const {userInfo}=userLogin;
  
  const logoutHandler=()=>{
    dispatch(logout());
    navigate("/");
  };

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
            <NavDropdown.Item onClick={logoutHandler} >
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