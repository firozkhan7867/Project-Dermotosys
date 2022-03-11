import React from "react";
import doctor from "../img/doctor-thumb-02.jpg";
import { Link } from "react-router-dom";
import { MdOutlineSpaceDashboard, MdPassword, MdStar } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiMessageSquare, FiCalendar } from "react-icons/fi";
import { GrUserSettings, GrDocumentText } from "react-icons/gr";
import { GiShare } from "react-icons/gi";
import { RiLogoutBoxRLine, RiCalendarCheckFill } from "react-icons/ri";
import Tabs from "../Tabs/Tab";

const Dashboard = () => {
  return (
    <div className="">
      <div
        className="container-fluid h-24"
        style={{ backgroundColor: "#15558d" }}
      >
        <div className="flex justify-content-start pt-4">
          <div className="pl-4 text-sm text-white">
            <p>Home / Appointments</p>
          </div>
        </div>
        <div className="flex justify-content-start">
          <div className="pl-4 text-xl font-bold text-white">
            <p>Appointments</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50  p-6 grid grid-cols-1 md:grid-cols-1 lg:flex  gap-2 w-full">
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
          <div className="flex text-left	px-4 text-md capitalize text-gray-600 place-items-center hover:text-sky-400">
                <MdOutlineSpaceDashboard className="mr-2" />
                <Link to="/patientdashboard" className="ml-2">Dashboard</Link>
              </div>
          <div className="container-fluid border-1 border-slate-100 py-4">
            <p className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400">
              <RiCalendarCheckFill className="mr-2" />
              Appointments
            </p>
          </div>
          <div className="container-fluid border-1 border-slate-100 py-4">
            <p className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400">
              <AiOutlineUserAdd className="mr-2" />
              My Patients
            </p>
          </div>
          <div className="container-fluid border-1 border-slate-100 py-4">
            <p className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400">
              <FiCalendar className="mr-2" />
              Schedule Timings
            </p>
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
            <p className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400">
              <FiMessageSquare className="mr-2" />
              Messages
            </p>
          </div>
          <div className="container-fluid border-1 border-slate-100 py-4">
            <p className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400">
              <GrUserSettings className="mr-2" />
              Profile Settings
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
              Change Password
            </p>
          </div>
          <div className="container-fluid border-1 border-slate-100 py-4">
            <p className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400">
              <RiLogoutBoxRLine className="mr-2" />
              Logout
            </p>
          </div>
        </div>
        <div className=" w-full md:w-full lg:w-full  px-3 h-screen ">
          <div className="bg-white shadow-sm mb-5 py-4 grid lg:grid-cols-3 xl:grid-col-3 md:grid-col-3 grid-col-1 p-3">
            <div className="flex justify-start text-left items-center">
              <div className="h-20 w-6/12 bg-gray-500"></div>
              <div className="w-full ml-5">
                <p className="text-lg text-gray-500 font-bold ">
                  Total Patient
                </p>
                <h1 className="text-2xl py-1">1500</h1>
                <p className="text-md text-gray-500">Till Today</p>
              </div>
            </div>
            <div className="flex justify-start text-left items-center">
              <div className="h-20 w-6/12 bg-gray-500"></div>
              <div className="w-full ml-5">
                <p className="text-lg text-gray-500 font-bold ">
                  Total Patient
                </p>
                <h1 className="text-2xl py-1">1500</h1>
                <p className="text-md text-gray-500">Till Today</p>
              </div>
            </div>
            <div className="flex justify-start text-left items-center">
              <div className="h-20 w-6/12 bg-gray-400"></div>
              <div className="w-full ml-5">
                <p className="text-lg text-gray-500 font-bold ">
                  Total Patient
                </p>
                <h1 className="text-2xl py-1">1500</h1>
                <p className="text-md text-gray-500">Till Today</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-sm mb-1 flex justify-between p-3">
            <Tabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
