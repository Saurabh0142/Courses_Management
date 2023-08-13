import './App.css';

import { ToastContainer, toast } from 'react-toastify';

import Header from './components/Header';
import Courses from './components/Courses';
import Allcourse from './components/Allcourse';
import Addcourse from './components/Addcourse';
import { Container, Row ,Col } from 'reactstrap';
import Menus from './components/Menus';
import {BrowserRouter as Router  , Routes , Route} from "react-router-dom";
import Home from './components/Home';

function App() {
  const btnhandler=()=>{
    toast("everything thing is okay here");

  };
  return (
   
   <Router>
    
    <ToastContainer/>
    <Container>
    <Header/>
    <Row>

      <Col><Menus/></Col>
      <Col> 
      <Routes>
      {/* yha par routing ki gyi hai jese "/" par home ko assigned kiya hai */}
      <Route path='/' element={<Home/> } />
      <Route path='/Add-course' element={<Addcourse/>}  />
      <Route path='/view-course' element={<Allcourse/>}  />
      </Routes>
      </Col>
    </Row>
    </Container>
   </Router>
   
   
  );
}
export default App;
