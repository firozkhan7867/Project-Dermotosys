import React from "react";
import patient from "../img/patient.jpg";
import { Link } from "react-router-dom";
import {  MdOutlineSpaceDashboard,  MdOutlineFavorite,  MdPassword} from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { FaBirthdayCake } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { RiLogoutBoxRLine, RiUserLocationFill } from "react-icons/ri";
import { BsCalendarCheck } from "react-icons/bs";
import Tabs from "./Tabs/PatientTab";
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import SideBar from "./SideBar";



const PatientDashboard = ({isAuthenticated}) => {
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }
  return (
    <div className="">
      <div className="h-24" style={{ backgroundColor: "#15558d" }}>
        <div className="flex justify-content-start pt-4">
          <div className="pl-4 text-sm text-white">
            <p>Home / Patient</p>
          </div>
        </div>
        <div className="flex justify-content-start">
          <div className="pl-4 text-xl font-bold text-white">
            <p>Dashboard</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-6 grid grid-cols-1 md:grid-cols-1 lg:flex  gap-2 w-full items-start">
      <SideBar />
        <div className="w-full px-3 py-2 bg-white h-screen ">
          <Tabs name1={"Appointments"} name2={"Prescriptions"} />
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PatientDashboard);



