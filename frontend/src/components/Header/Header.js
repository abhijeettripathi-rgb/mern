import React  from 'react'
import { Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userActions';


const Header = ({setSearch}) => {
 
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
            onChange={(e)=>setSearch(e.target.value)}
          />
         
        </Form>
      </Nav>
        
        
         
        
        {userInfo ? (<Nav>
          {/* style={{ maxHeight: '100px' }}
          navbarScroll */}
          <Nav.Link >
          <Link to="/mynotes">

          My Notes
          </Link>
           </Nav.Link>
          <NavDropdown title={userInfo?.name} id="navbarScrollingDropdown">
            <NavDropdown.Item href="/profile">My profile</NavDropdown.Item>
    
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logoutHandler} >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
          
        </Nav>):(<Nav>
          {" "}
          <Nav.Link>
            <Link to="/login">Login</Link>
          </Nav.Link>
        </Nav>
        )}
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header;