import React from "react";
import Tab from "./Tabs/Tab";
import SideBar from './SideBar';

const Dashboard = () => {
  return (
    <div className="">
      <div
        className="container-fluid h-24"
        style={{ backgroundColor: "#15558d" }}
      >
        <div className="flex justify-content-start pt-4">
          <div className="pl-4 text-sm text-white">
            <p>Home / Doctor</p>
          </div>
        </div>
        <div className="flex justify-content-start">
          <div className="pl-4 text-xl font-bold text-white">
            <p>Dashboard</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50  p-6 grid grid-cols-1 md:grid-cols-1 lg:flex  gap-2 w-full">
        <SideBar />
        <div className=" w-full md:w-full lg:w-full  px-3 h-screen ">
          <div className="bg-white shadow-sm mb-5 py-4 grid lg:grid-cols-3 xl:grid-col-3 md:grid-col-3 grid-col-1 p-3">
            <div className="flex justify-start text-left items-center">
              <div className="h-15 w-6/12 ">
                <img src={require("../img/p1.jpg")} />
              </div>
              <div className="w-full ml-5">
                <p className="text-lg text-gray-500 font-bold ">
                  Total Patient
                </p>
                <h1 className="text-2xl py-1">1500</h1>
                <p className="text-md text-gray-500">Till Today</p>
              </div>
            </div>
            <div className="flex justify-start text-left items-center">
              <div className="h-15 w-6/12">
              <img src={require("../img/p2.jpg")} />
              </div>
              <div className="w-full ml-5">
                <p className="text-lg text-gray-500 font-bold ">
                  Total Patient
                </p>
                <h1 className="text-2xl py-1">1500</h1>
                <p className="text-md text-gray-500">Till Today</p>
              </div>
            </div>
            <div className="flex justify-start text-left items-center">
              <div className="h-20 w-6/1">
              <img src={require("../img/p3.jpg")} />
              </div>
              <div className="w-full ml-5">
                <p className="text-lg text-gray-500 font-bold ">
                  Total Patient
                </p>
                <h1 className="text-2xl py-1">1500</h1>
                <p className="text-md text-gray-500">Till Today</p>
              </div>
            </div>
          </div>
          <div className="w-full px-3 py-2 bg-white h-screen pr-4">
            <Tab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
