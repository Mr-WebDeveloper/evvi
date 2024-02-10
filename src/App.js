import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';

import PrivateRoute from "./PrivateRoute";
import Dashboard from './Components/Dashboard';
import RegisterForm from './Components/RegisterForm'
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import Welcome from "./Components/Welcome";


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/welcome" element={<PrivateRoute Component={Welcome} />} />
          <Route path="/registerform" element={<PrivateRoute Component={RegisterForm} />} />
        </Routes>
      </BrowserRouter>
      <Footer />


    </>
  );
}

export default App;
