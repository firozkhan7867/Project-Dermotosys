import React from 'react'
import patient from "../img/patient.jpg";
import { Link } from "react-router-dom";
import {  MdOutlineSpaceDashboard,  MdOutlineFavorite,  MdPassword} from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { FaBirthdayCake } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { RiLogoutBoxRLine, RiUserLocationFill } from "react-icons/ri";
import { BsCalendarCheck } from "react-icons/bs";


// formData.append('firstname', firstname);  
//     formData.append('lastname', lastname); 
//     formData.append('phno', phno); 
//     formData.append('dob', dob); 
//     formData.append('bloodgroup', bloodgroup); 
//     formData.append('address', address); 
//     formData.append('city', city); 
//     formData.append('state', state); 
//     formData.append('country', country); 
//     formData.append('zipcode', zip); 
//     formData.append('id', id);  //append the values with key, value pair
//     formData.append('age', 20);
//     formData.append("profilepic", file);


const SideBar = () => {
  return (<div className=" shadow-md py-4 px-2 bg-white sm:w-5/12 md:w-full lg:w-4/12 w-full">
    <div className="w-full flex  justify-center p-2">
      <img
        src={patient}
        alt=""
        width="120"
        height="120"
        className="border-4 border-gray-200 rounded-full"
      />
    </div>
    <div className="text-center">
      <p className="font-semibold text-lg text-gray-600">Richard Wilson</p>
      <p className="flex font-normal text-gray-400 text-sm p-1 justify-center place-items-center">
        <FaBirthdayCake className="mr-2" />
        24 Jul 1983, 38 years
      </p>
      <p className="flex font-normal text-gray-400 text-sm p-1 justify-center place-items-center">
        <RiUserLocationFill className="mr-2" />
        Newyork, USA
      </p>
    </div>
    <ul>
      <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
      <Link className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-lg capitalize text-gray-600	hover:text-sky-400"
      to="/patientdashboard">
        <MdOutlineSpaceDashboard className="mr-2 text-sky-400" />
        <Link to="/patientdashboard" className="ml-2">Dashboard</Link>
      </Link>
      </li>
      <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
        <div className="flex text-left	px-4 text-lg capitalize text-gray-600 place-items-center hover:text-sky-400">
          <BsCalendarCheck className="mr-2 text-sky-400" />
          <Link to="/makeappointment" className="ml-1">Book Appointment</Link>
        </div>
      </li>
      <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
        <div className="flex text-left	px-4 text-lg capitalize text-gray-600 place-items-center hover:text-sky-400">
          <MdOutlineFavorite className="mr-2 text-sky-400" />
          <Link to="" className="ml-2">Favorites</Link>
        </div>
      </li>
      <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
        <div className="flex text-left	px-4 text-lg capitalize text-gray-600 place-items-center hover:text-sky-400">
          <FiMessageSquare className="mr-2 text-sky-400" />
          <Link to="/chat" className="ml-2 ">Messages</Link>
        </div>
      </li>
      <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
        <div className="flex text-left	px-4 text-lg capitalize text-gray-600 place-items-center hover:text-sky-400">
          <GrUserSettings className="mr-2 text-sky-400" />
          <Link to="/patientprofilesettings" className="ml-2">User Settings</Link>
        </div>
      </li>

      <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
        <div className="flex text-left	px-4 text-lg capitalize text-gray-600 place-items-center hover:text-sky-400">
          <MdPassword className="mr-2 text-sky-400" />
          <Link to="/patientchangepassword" className="ml-2">Change Password</Link>
        </div>
      </li>
      <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
        <div className="flex text-left	px-4 text-lg capitalize text-gray-600 place-items-center hover:text-sky-400">
          <RiLogoutBoxRLine className="mr-2 text-sky-400" />
          <Link to="" className="ml-2">Logout</Link>
        </div>
      </li>
    </ul>
  </div>
  )
}


export default  SideBar;
