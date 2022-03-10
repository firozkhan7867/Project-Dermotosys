import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/LoginPage";
import Home from "./components/home";
import Signup from "./components/SignupPage";
import Navbar from "./components/Navbar/index";
import PatientsList from "./components/PatientsList";
import PatientDashboard from "./components/Patient/PatientDashboard";
import Schedule from "./components/Dashboard/DoctorSchedule";
import ChatBody from "./components/Chat/components/chatBody/ChatBody";
import { Provider } from 'react-redux';
import store from './store';
import axios from 'axios';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/patientslist" element={<PatientsList />} />
          <Route path="/doctordashboard" element={<Dashboard />} />
          <Route path="/patientdashboard" element={<PatientDashboard />} />
          <Route path="/doctorSchedule" element={<Schedule />} />
          <Route path="/chat" element={<ChatBody />} />
        </Routes>
      </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
