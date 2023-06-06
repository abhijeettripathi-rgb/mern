import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import axios from "axios"


const MyNotes = () => {

  const [notes,setNotes]=useState([]);


  const deletehandler= (id)=>{
    if(window.confirm("Are you sure")){

    }
  };

  const fetchNotes= async()=>{
    const {data}=await axios.get('/api/notes');
    setNotes(data);

  }
    // console.log(notes);
  useEffect(()=>{
    fetchNotes();
  } ,[] ) 


  return (
    <MainScreen title='Welcome back Abhijeet Tripathi' >
    <Link to="/createnote">
      <Button style={{
        marginLeft:10,
        marginBottom:6
      }} size='lg'>
        Create New Note
      </Button>
      </Link>
      {
        notes.map((note)=>{
    return (
      <Accordion key={note._id} defaultActiveKey={["0"]}>
      <Accordion.Item eventkey="0">
     <Card style={{margin:10}}>
       <Card.Header style={{display:"flex"}}>
        <span
        style={{
          color:"black",
          textDecoration:"none",
          flex:1,
          cursor:"pointer",
          alignSelf:"center",
          fontSize:18,          
        }}>
        <Accordion.Button as={Card.Text} variant='link' eventkey="0">

        {note.title}
        </Accordion.Button>
        </span>
        <div>
          <Button href={`/note/${note._id}`}>Edit</Button>
          <Button variant="danger" className='mx-2' onClick={()=>deletehandler(note._id)}>Delete</Button>
        </div>
       </Card.Header>
       <Accordion.Collapse>

       <Card.Body>
       <h4>
        <Badge variant="success">
         Category-{note.category}
        </Badge>
       </h4>
       

       <blockquote className="blockquote mb-0">
          <p>
           {note.content}
          </p>
          <footer className="blockquote-footer">
            created on date
          </footer>
        </blockquote>
       </Card.Body> 
       </Accordion.Collapse>
     </Card>
     </Accordion.Item>
      </Accordion>
    )
        })
        }


    </MainScreen>
  );
};

export default MyNotes