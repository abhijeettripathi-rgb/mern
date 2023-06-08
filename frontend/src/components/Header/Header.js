// import React  from 'react'
// import { Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { logout } from '../../actions/userActions';


// const Header = ({setSearch}) => {
 
//   const navigate=useNavigate();
//   const dispatch=useDispatch();

//   const userLogin=useSelector((state)=>state.userLogin);
//   const {userInfo}=userLogin;
  
//   const logoutHandler=()=>{
//     dispatch(logout());
//     navigate("/");
//   };

//   return (
//     <Navbar bg="primary" expand="lg" variant='dark'>
//     <Container >
//       <Navbar.Brand>
//       <Link to="/">

//       NoteZipper
//       </Link>
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbarScroll" />
//       <Navbar.Collapse id="navbarScroll">
//       <Nav >
//       <Form className="d-flex">
//           <Form.Control
//             type="search"
//             placeholder="Search"
//             className="me-2"
//             aria-label="Search"
//             onChange={(e)=>setSearch(e.target.value)}
//           />
         
//         </Form>
//       </Nav>
        
        
         
        
//         {userInfo ? (<Nav>
//           {/* style={{ maxHeight: '100px' }}
//           navbarScroll */}
//           <Nav.Link >
//           <Link to="/mynotes">

//           My Notes
//           </Link>
//            </Nav.Link>
//           <NavDropdown title={userInfo?.name} id="navbarScrollingDropdown">
//             <NavDropdown.Item href="/profile">My profile</NavDropdown.Item>
    
//             <NavDropdown.Divider />
//             <NavDropdown.Item onClick={logoutHandler} >
//               Logout
//             </NavDropdown.Item>
//           </NavDropdown>
          
//         </Nav>):(<Nav>
//           {" "}
//           <Nav.Link>
//             <Link to="/login">Login</Link>
//           </Nav.Link>
//         </Nav>
//         )}
        
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//   )
// }

// export default Header;



import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-router-dom";
import { logout } from "../../actions/userActions";

function Header({ setSearch }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {}, [userInfo]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Note Zipper</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            {userInfo && (
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            )}
          </Nav>
          <Nav>
            {userInfo ? (
              <>
                <Nav.Link href="/mynotes">My Notes</Nav.Link>
                <NavDropdown
                  title={`${userInfo.name}`}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">
                    {/* <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    /> */}
                    My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;