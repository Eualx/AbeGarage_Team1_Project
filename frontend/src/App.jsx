import react from 'react'
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AddEmployee from './Pages/admin/AddEmployee';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/color.css";

// Import the custom css file 
import "./assets/styles/custom.css";


function App() {


  return (
    <>
         <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/add-employee" element={<AddEmployee />} />
      </Routes>
      <Footer />
       
    </>
  )
}

export default App
