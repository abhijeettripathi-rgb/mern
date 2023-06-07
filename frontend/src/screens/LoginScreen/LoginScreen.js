import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Button, Form ,Row} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import "./LoginScreen.css"

import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions'


const LoginScreen = () => {

  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const dispatch=useDispatch();
 
  const userLogin=useSelector((state)=>state.userLogin);
  const {loading,error,userInfo} =userLogin;
 
  useEffect(()=>{
    if(userInfo){
      navigate('/mynotes');
    }
  })

  const submitHandler=async(e)=>{
    e.preventDefault();

    dispatch(login(email,password)); 
   }


  return (
    <MainScreen title='Login'>
    <div className='loginContainer'>
       {error && <ErrorMessage variant='danger'>
        {error}
       </ErrorMessage>}
       {loading && <Loading />}
        <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"
        value={email}
         placeholder="Enter email"
         onChange={(e)=> setEmail(e.target.value)}
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant='primary' type="submit">
        Submit
      </Button>
    </Form>
    <Row className="py-3">
    New Customer ? <Link to="/register">Register Here</Link>
    </Row>
    </div>
    </MainScreen>
  )
}

export default LoginScreen