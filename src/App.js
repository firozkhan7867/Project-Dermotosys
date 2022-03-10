import React from "react";
import "./App.css";
// import Login from "./components/Consult/login";
// import Signup from "./components/Consult/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../src/components/doctor/Dashboard/Dashboard";
// import Appointmentform from "./components/Dashboard/Appointmentform";
// import Homepage from "./components/Home/Homepage";
import Login from "../src/components/doctor/LoginPage";
import Home from "../src/components/doctor/home";
import Signup from "../src/components/doctor/SignupPage";
import Navbar from "../src/components/doctor/Navbar/index";
import PatientsList from "./components/doctor/PatientsList";
import PatientDashboard from "./components/doctor/Patient/PatientDashboard";
import Schedule from "./components/doctor/Dashboard/DoctorSchedule";
import ChatBody from "./components/doctor/Chat/components/chatBody/ChatBody";
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
