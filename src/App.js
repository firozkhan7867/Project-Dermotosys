import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Doctor/Dashboard";
import Login from "./components/LoginPage";
import MakeAppointment from "./components/MakeAppointment";
import Home from "./components/home";
import Signup from "./components/SignupPage";
import Navbar from "./components/Navbar/index";
import PatientsList from "./components/Doctor/PatientsList";
import PatientDashboard from "./components/Patient/PatientDashboard";
import Profile_settings from "./components/Patient/Patient_Profile_settings";
import Doctor_Profile_Settings from "./components/Doctor/Doctor_Profile_Settings";
import Doctor_Change_Password from "./components/Doctor/Doctor_Change_Password";
import Change_Password from "./components/Patient/Patient_Change_Password";
import Schedule from "./components/Doctor/DoctorSchedule";
import ChatBody from "./components/Chat/components/chatBody/ChatBody";
import { Provider } from 'react-redux';
import Prescription from "./components/Prescription"
import store from './store';
import VideoChat from "./components/Chat/video/videochat";
import AddPrescription from "./components/Patient/MakePrescription"
import Footer from "./components/Footer/Footer";


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
          <Route path="/patientprofilesettings" element={<Profile_settings />} />
          <Route path="/patientchangepassword" element={<Change_Password />} />
          <Route path="/doctorchangepassword" element={<Doctor_Change_Password />} />
          <Route path="/doctorprofilesettings" element={<Doctor_Profile_Settings />} />
          <Route path="/doctorSchedule" element={<Schedule />} />
          <Route path="/chat" element={<ChatBody />} />
          <Route path="/prescription" element={<Prescription />} />
          <Route path="/vchat" element={<VideoChat />} />
          <Route path="/makeprescription" element={<AddPrescription />} />
          <Route path="/makeappointment" element={<MakeAppointment />} />
        </Routes>
        <div className="w-full">
            <Footer />    
        </div>
      </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
