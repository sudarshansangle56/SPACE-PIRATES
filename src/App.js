
import './Componet/Navbar.js';
import './App.css';
import Navbar from './Componet/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Pages/Home.js';
import Attendence from './Pages/Attendence.js';
import CardMenu from './Componet/CardMenu.js';
import About from './Pages/About.js';
import Record from './Componet/Record.js';
import MenuPage from './Pages/MenuPage.js';
import LoginForm from './Pages/LoginForm.js';
import SignUp from './Pages/signUp.js';
import Admin from './Pages/Admin.js';
import User from './Pages/User.js';
import UMenu from './Pages/UMenu.js';
import ShowCustam from './Pages/Show_Custam.js'; 
import AddCustomerForm from './Pages/new_custam.js'; 
import AdminAtt from './Pages/AdminAtt.js';
import CalculateA from './Pages/CalculateA.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Record" element={<Record />} />
        <Route path="/About" element={<About />} />
        <Route path="/CardMenu" element={<CardMenu />} />
        <Route path="/Attendence" element={<Attendence />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/User" element={<User />} />
        <Route path="/Umenu" element={<UMenu />} />
        <Route path="/Show_Custam" element={<ShowCustam />} /> 
        <Route path="/new_custam" element={<AddCustomerForm />} /> 
        <Route path="/AdminAtt" element={<AdminAtt />} /> 
        <Route path="/CalculateA" element={<CalculateA />} /> 
   
      </Routes>
    </Router>

  );
}

export default App;
