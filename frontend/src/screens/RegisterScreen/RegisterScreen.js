import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Button, Form ,Row} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import "./RegisterScreen.css"
import axios from 'axios'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../actions/userActions'
const fetch = require('node-fetch');

const RegisterScreen = () => {
  
  const navigate=useNavigate();

   const [email, setEmail] = useState("");  
   const [name, setName] = useState("");  
   const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
   );  
   const [password, setPassword] = useState("");
   const [confirmpassword, setConfirmPassword] = useState("");
   const [message, setMessage] = useState(null);
   const [picMessage,setPicMessage]=useState(null);

   const dispatch=useDispatch();
   
   const userRegister=useSelector(state=>state.userRegister);
   const {loading,error,userInfo}=userRegister;

  useEffect(()=>{
    if(userInfo){
      navigate('/mynotes');
    }
  })


  const submitHandler=async(e)=>{
    e.preventDefault();

    if(password!=confirmpassword){
      setMessage("passwords do not matc");
    }
    else{
      dispatch(register(name,email,password,pic));
    }
  }; 

  const postDetails=(pics)=>{
   if(!pics){
    return setPicMessage("please select an image")
   }
    setPicMessage(null)
    if(pics.type==='image/jpeg' || pics.type==='imaage/png'){
      const data=new FormData();
      data.append('file',pics)
      data.append('upload_preset','notezipper')
      data.append('cloud_name','dxlnmcwjo')
      fetch("https://api.cloudinary.com/v1_1/dxlnmcwjo/image/upload"
      ,{
        method:"post",
        body:data,
      }).then((res)=>res.json()).then((data)=>{
        console.log(data);
        setPic(data.url.toString());
      })
      .catch((err)=>{
        console.log(err);
      });
    }else{
     return setPicMessage("please select an image"); 
    }
  }


  return (
    <MainScreen title='Register'>
    <div className='loginContainer'>
       {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
       {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
       {loading && <Loading />}
        <Form 
        onSubmit={submitHandler}
        >
      {/* <Form.Group className="mb-3" controlId="name"> */}
      <Form.Group className='mb-3'>
        <Form.Label>Name</Form.Label>
        <Form.Control type="name"
        value={name}
         placeholder="Enter Name"
         onChange={(e)=> setName(e.target.value)}
          />
      </Form.Group>


      {/* <Form.Group className="mb-3" controlId="formGroupEmail"> */}
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"
        value={email}
         placeholder="Enter email"
         onChange={(e)=> setEmail(e.target.value)}
          />
      </Form.Group>


      {/* <Form.Group className="mb-3" controlId="formGroupPassword"> */}
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
        />
      </Form.Group>



      {/* <Form.Group className="mb-3" controlId="formGroupConfirmPassword"> */}
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="confirmpassword" placeholder="Password" 
         value={confirmpassword}
         onChange={(e)=>setConfirmPassword(e.target.value)}
        />
      </Form.Group>

      {/* <Form.Group controlId="formFile" className="mb-3"> */}
      <Form.Group  className="mb-3">
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control  type="file" 
          onChange={(e)=>postDetails(e.target.files[0])}
          id="custom-file"
          label="Upload Profile Picture"
          className='py-1'
          custom="true"
        />
      </Form.Group>
      {picMessage && (
        <ErrorMessage variant='danger'>{picMessage}</ErrorMessage>
      )}
     {/* <Form.Group controlId='pic'>
      <Form.Label>Profile Picture</Form.Label>
      <Form.File
        id="custom-file"
        type="image/png"
        label="Upload Profile Picture"
        custom
        />
     </Form.Group> */}

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

export default RegisterScreen