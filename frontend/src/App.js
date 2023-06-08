import './App.css';
import Header from './components/Header/Header';
import  Footer  from './components/Footer/Footer';
import Landingpage from './screens/Landingpage/Landingpage';
import MyNotes from './screens/MyNotes/MyNotes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from "./screens/LoginScreen/LoginScreen"
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import CreateNote from './screens/CreateNote/CreateNote'
import SingleNote from './screens/SingleNote/SingleNote'
import { useState } from 'react';
const App = ()=> {
  
  const [search,setSearch]=useState("");
  
  return (
   <div>
  <Router>

  <Header setSearch={setSearch} />
  <main>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/createnote" element={<CreateNote />} />
        <Route path="/note/:id" element={<SingleNote />} />
        <Route path="/mynotes" element={<MyNotes search={search}/>} />
      </Routes>

  
  </main>
  <Footer />
      </Router>
   </div>

 
 

)};



export default App;
