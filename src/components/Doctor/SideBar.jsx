import React from 'react'
import { Link } from "react-router-dom";
import doctor from '../img/doctor-thumb-02.jpg';
import { MdOutlineSpaceDashboard, MdPassword, MdStar } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiMessageSquare, FiCalendar } from "react-icons/fi";
import { GrUserSettings, GrDocumentText } from "react-icons/gr";
import { GiShare } from "react-icons/gi";
import { RiLogoutBoxRLine, RiCalendarCheckFill } from "react-icons/ri";

const SideBar = () => {
  return (
    <div className="bg-grey-100 shadow-md bg-white sm:w-6/12 md:w-full lg:w-4/12 w-full">
    <div className="w-full flex  justify-center p-2">
      <img
        src={doctor}
        alt=""
        width="120"
        height="120"
        className="border-4 border-gray-200 rounded-full"
      />
    </div>
    <div className="text-center">
      <p className="font-semibold text-lg">Dr. Darren Elder</p>
      <p className="font-normal text-gray-400 text-sm p-1">
        Newyork, United States
      </p>
    </div>
    <div className="container-fluid border-1 border-slate-100 py-4">
      <Link className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400"
      to="/doctordashboard">
        <MdOutlineSpaceDashboard className="mr-2" />
        Dashboard
      </Link>
    </div>
    <div className="container-fluid border-1 border-slate-100 py-4">
      <Link className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400"
      to="/patientslist">
        <RiCalendarCheckFill className="mr-2" />
        Appointments
      </Link>
    </div>
    <div className="container-fluid border-1 border-slate-100 py-4">
      <Link to="/patientslist" className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400">
        <AiOutlineUserAdd className="mr-2" />
        My Patients
      </Link>
    </div>
    <div className="container-fluid border-1 border-slate-100 py-4">
      <Link className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400"
      to="/doctorSchedule">
        <FiCalendar className="mr-2" />
        Schedule Timings
      </Link>
    </div>
    <div className="container-fluid border-1 border-slate-100 py-4">
      <p className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400">
        <GrDocumentText className="mr-2" />
        Invoices
      </p>
    </div>
    <div className="container-fluid border-1 border-slate-100 py-4">
      <p className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400">
        <MdStar className="mr-2" />
        Reviews
      </p>
    </div>
    <div className="container-fluid border-1 border-slate-100 py-4">
      <Link className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400"
      to="/chat">
        <FiMessageSquare className="mr-2" />
        Messages
      </Link>
    </div>
    <div className="container-fluid border-1 border-slate-100 py-4">
      <p className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400">
        <GrUserSettings className="mr-2" />
        <Link to="/doctorprofilesettings" className="ml-2">Profile Settings</Link>
      </p>
    </div>
    <div className="container-fluid border-1 border-slate-100 py-4">
      <p className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400">
        <GiShare className="mr-2" />
        Social Media
      </p>
    </div>
    <div className="container-fluid border-1 border-slate-100 py-4">
      <p className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400">
        <MdPassword className="mr-2" />
        <Link to="/doctorchangepassword" className="ml-2">Change Password</Link>
      </p>
    </div>
    <div className="container-fluid border-1 border-slate-100 py-4">
      <p className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400">
        <RiLogoutBoxRLine className="mr-2" />
        Logout
      </p>
    </div>
  </div>
  )
}


export default  SideBar;
