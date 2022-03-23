import React from "react";
import patient from "../img/patient.jpg";
import { Link } from "react-router-dom";
import {
  MdOutlineSpaceDashboard,
  MdOutlineFavorite,
  MdPassword,
} from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { FaBirthdayCake,FaCloudUploadAlt } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { RiLogoutBoxRLine, RiUserLocationFill } from "react-icons/ri";
import { Navigate } from "react-router-dom";

const Change_Password = ({isAuthenticated}) => {
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }
  return (
    <div className="">
      <div className="h-24" style={{ backgroundColor: "#15558d" }}>
        <div className="flex justify-content-start pt-4">
          <div className="pl-4 text-sm text-white">
            <p>Home / Profile</p>
          </div>
        </div>
        <div className="flex justify-content-start">
          <div className="pl-4 text-xl font-bold text-white">
            <p>Profile Settings</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-6 grid grid-cols-1 md:grid-cols-1 lg:flex  gap-8 w-full items-start">
      <div className="bg-grey-100 shadow-md bg-white sm:w-5/12 md:w-full lg:w-4/12 w-full">
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
            <Link className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400"
            to="/patientdashboard">
              <MdOutlineSpaceDashboard className="mr-2" />
              <Link to="/patientdashboard" className="ml-2">Dashboard</Link>
            </Link>
            </li>
            <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
              <div className="flex text-left	px-4 text-md capitalize text-gray-600 place-items-center hover:text-sky-400">
                <MdOutlineSpaceDashboard className="mr-2" />
                <Link to="/makeappointment" className="ml-1">Book Appointment</Link>
              </div>
            </li>
            <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
              <div className="flex text-left	px-4 text-md capitalize text-gray-600 place-items-center hover:text-sky-400">
                <MdOutlineFavorite className="mr-2" />
                <a className="ml-2">Favorites</a>
              </div>
            </li>
            <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
              <div className="flex text-left	px-4 text-md capitalize text-gray-600 place-items-center hover:text-sky-400">
                <FiMessageSquare className="mr-2" />
                <Link to="/chat" className="ml-2">Messages</Link>
              </div>
            </li>
            <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
              <div className="flex text-left	px-4 text-md capitalize text-gray-600 place-items-center hover:text-sky-400">
                <GrUserSettings className="mr-2" />
                <Link to="/patientprofilesettings" className="ml-2">User Settings</Link>
              </div>
            </li>

            <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
              <div className="flex text-left	px-4 text-md capitalize text-gray-600 place-items-center hover:text-sky-400">
                <MdPassword className="mr-2" />
                <Link to="/patientchangepassword" className="ml-2">Change Password</Link>
              </div>
            </li>
            <li className="container-fluid list-none border-1 cursor-pointer border-slate-100 py-4">
              <div className="flex text-left	px-4 text-md capitalize text-gray-600 place-items-center hover:text-sky-400">
                <RiLogoutBoxRLine className="mr-2" />
                <a className="ml-2">Logout</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full px-8 py-4 bg-white h-auto ">
        <div className="p-3 pb-6 text-gray-700 text-2xl font-bold border-b-2">
          Change Password
        </div>   
            <form action="" className="mt-4">
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label class="text-lg text-gray-600">Current Password</label>
                    <input type='text' className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-lg text-black outline-none"/>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label class="text-lg text-gray-600">New Password</label>
                    <input type='text' className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-lg text-black outline-none"/>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label class="text-lg text-gray-600">Confirm New Password</label>
                    <input type='text' className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-lg text-black outline-none"/>
                    </div>
                <button class="bg-[#09e5ab] hover:bg-[#7edec8] text-white text-lg font-bold py-2 px-4 ml-8 mt-4 borde rounded">
                Save Changes
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Change_Password