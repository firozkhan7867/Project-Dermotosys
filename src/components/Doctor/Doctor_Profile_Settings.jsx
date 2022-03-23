import React from "react";
import doctor from "../img/doctor-thumb-02.jpg";
import { Link } from "react-router-dom";
import { MdOutlineSpaceDashboard, MdPassword, MdStar } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiMessageSquare, FiCalendar } from "react-icons/fi";
import { GrUserSettings, GrDocumentText } from "react-icons/gr";
import {FaCloudUploadAlt} from "react-icons/fa"
import { GiShare } from "react-icons/gi";
import { RiLogoutBoxRLine, RiCalendarCheckFill } from "react-icons/ri";

const Doctor_Profile_settings = ({isAuthenticated}) => {
    // if (!isAuthenticated) {
    //     return <Navigate to="/login" />;
    //   }
  return (
    <div className="">
      <div className="h-24" style={{ backgroundColor: "#15558d" }}>
        <div className="flex justify-content-start pt-4">
          <div className="pl-4 text-sm text-white">
            <p>Home / Doctor</p>
          </div>
        </div>
        <div className="flex justify-content-start">
          <div className="pl-4 text-xl font-bold text-white">
            <p>Profile Settings</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-6 grid grid-cols-1 md:grid-cols-1 lg:flex  gap-8 w-full items-start">
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
            <p className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400">
              <AiOutlineUserAdd className="mr-2" />
              My Patients
            </p>
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
        <div className="w-full px-8 py-4 bg-white h-auto ">
          <div className="p-3 text-gray-700 text-xl font-bold">
            Change Profile Settings
          </div>   
            <div className=" flex lg:flex-row flex-col ml-6">
                <img src={require("../img/doctor-thumb-02.jpg")}
                 className="w-28"/>
                <div className="flex flex-col mt-8 ml-6">
                    <label class="flex w-44 px-4 py-2 rounded-full text-white font-bold bg-[#03a9f4] hover:bg-[#2ca5dd] cursor-pointer hover:text-white">
                    <FaCloudUploadAlt className="mr-2 text-xl" />Upload Photo
                    <input type='file' class="hidden" />
                    </label>
                    <p className="text-gray-400 text-xs mt-2">Allowed JPG, GIF or PNG. Max size of 2MB</p>
                </div>
            </div>
            <form action="" className="mt-4">
                <div className="flex lg:flex-row flex-col">
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label class="text-md font-semibold text-gray-600">First Name</label>
                    <input type='text' className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-lg text-black outline-none"/>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label class="text-lg text-gray-600">Last Name</label>
                    <input type='text' className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-lg text-black outline-none"/>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col">
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label class="text-lg text-gray-600">Email</label>
                    <input type='text' className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-lg text-black outline-none"/>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label class="text-lg text-gray-600">Phone Number</label>
                    <input type='text' className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-lg text-black outline-none"/>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col">
                    <div className="datepicker lg:w-1/2 md:w-1/2 w-f flex flex-col mx-2 lg:mx-4" >
                    <label class="text-lg text-gray-600">Date of Birth</label>
                    <input type='text' className="border border-gray-300 w-fullo text-sm py-2 px-2 my-2 rounded-lg text-black outline-none"/>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label class="text-lg text-gray-600">Blood Group</label>
                    <select name="gender"
                    className='border border-gray-500 w-full text-sm py-2 px-2 my-2 rounded-lg text-black outline-none'>
                        <option className='px-2 py-2 hover:bg-[#03a9f4]' value="Male">A+</option>
                        <option className='px-2 py-2 hover:bg-[#03a9f4]' value="Female">A-</option>
                        <option className='px-2 py-2 hover:bg-[#03a9f4]' value="Male">B+</option>
                        <option className='px-2 py-2 hover:bg-[#03a9f4]' value="Female">B-</option>
                        <option className='px-2 py-2 hover:bg-[#03a9f4]' value="Male">AB+</option>
                        <option className='px-2 py-2 hover:bg-[#03a9f4]' value="Female">AB-</option>
                        <option className='px-2 py-2 hover:bg-[#03a9f4]' value="Male">O+</option>
                        <option className='px-2 py-2 hover:Og-[#03a9f4]' value="Female">O-</option>
                    </select>
                    </div>
                </div>
                <div className="datepicker flex flex-col mx-2 lg:mx-4" >
                <label class="text-lg text-gray-600">Address</label>
                <input type='text' className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-lg text-black outline-none"/>
                </div>
                <div className="flex lg:flex-row flex-col">
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label class="text-lg text-gray-600">City</label>
                    <input type='text' className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-lg text-black outline-none"/>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label class="text-lg text-gray-600">State</label>
                    <input type='text' className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-lg text-black outline-none"/>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col">
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label class="text-lg text-gray-600">Country</label>
                    <input type='text' className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-lg text-black outline-none"/>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label class="text-lg text-gray-600">Zip Code</label>
                    <input type='text' className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-lg text-black outline-none"/>
                    </div>
                </div>
                <button className="bg-[#09e5ab] hover:bg-[#7edec8] text-white text-lg font-bold py-2 px-4 ml-8 mt-4 borde rounded">
                Save Changes
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Doctor_Profile_settings