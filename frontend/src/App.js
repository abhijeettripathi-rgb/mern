import './App.css';
import Header from './components/Header/Header';
import  Footer  from './components/Footer/Footer';
import Landingpage from './screens/Landingpage/Landingpage';
import MyNotes from './screens/MyNotes/MyNotes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from "./screens/LoginScreen/LoginScreen"
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

const App = ()=> (
   <div>
  <Router>

  <Header />
  <main>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/mynotes" element={<MyNotes />} />
      </Routes>

  
  </main>
  <Footer />
      </Router>
   </div>

 
 

);



export default App;
