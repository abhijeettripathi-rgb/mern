import React, { useEffect} from 'react'
import MainScreen from '../../components/MainScreen'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { deleteNoteAction, listNotes } from '../../actions/notesActions'
import  Loading  from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'

const MyNotes = ({search}) => {

  const navigate=useNavigate();
   
  const dispatch=useDispatch();
  const noteList=useSelector(state=> state.noteList)
  const {loading,notes,error}=noteList;

 const userLogin=useSelector((state)=> state.userLogin);
 const {userInfo}=userLogin;
 
 const noteCreate = useSelector((state) => state.noteCreate);
 const { success: successCreate } = noteCreate;

 const noteUpdate = useSelector((state) => state.noteUpdate);
 const { success:successUpdate } = noteUpdate;
 
 const noteDelete = useSelector((state) => state.noteDelete);
 const { loading:loadingDelete, error:errorDelete, success:successDelete } = noteDelete;


  const deletehandler= (id)=>{
    if(window.confirm("Are you sure")){
      dispatch(deleteNoteAction(id))
    }
  };

 
    // console.log(notes);
  useEffect(()=>{
    dispatch(listNotes());
    if(!userInfo){
      navigate('/');
    }
  } ,[dispatch,navigate,userInfo,successCreate,successUpdate,successDelete] ) 


  return (
    <MainScreen title={` Welcome back ${userInfo.name}..`} >
    <Link to="/createnote">
      <Button style={{
        marginLeft:10,
        marginBottom:6
      }} size='lg'>
        Create New Note
      </Button>
      </Link>
      {errorDelete && (
        <ErrorMessage variant='danger'>{errorDelete}</ErrorMessage>
      )}
      {loadingDelete && <Loading />}
      {error && <ErrorMessage variant="danger"> {error}</ErrorMessage>}
      {loading && <Loading />}
      {
        notes?.reverse()
        .filter((filteredNote)=>
          filteredNote.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((note)=>{
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
            Created on {" "}
            <cite title='Source Title'>
              {note.createdAt.substring(0,10)}
            </cite>
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