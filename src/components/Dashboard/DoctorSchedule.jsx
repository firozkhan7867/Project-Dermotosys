import React, {useState} from 'react';
import doctor from '../img/doctor-thumb-02.jpg';
import "./Schedule.css";
import slots from "./slots.json";
import { MdOutlineSpaceDashboard, MdPassword, MdStar } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiMessageSquare, FiCalendar } from "react-icons/fi";
import { GrUserSettings, GrDocumentText } from "react-icons/gr";
import { GiShare } from "react-icons/gi";
import { RiLogoutBoxRLine, RiCalendarCheckFill } from "react-icons/ri";


const Schedule = () => {
    const [details,setDetails] = useState(slots[`day1`]);
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setDetails(slots[`day${index}`]);
        setToggleState(index);
    };

  return (
    <div className="">
          <div className="container-fluid h-24" style={{backgroundColor: "#15558d"}}>
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
          <div className="container-fluid border-1 border-slate-100 py-4">
            <p className="flex place-items-center cursor-pointer text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400">
              <MdOutlineSpaceDashboard className="mr-2" />
              Dashboard
            </p>
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
            <div className=" w-full  px-3 h-screen ">
                
                <div className="bg-white shadow-sm mb-1 text-left  p-3">
                    <div className="p-3 text-gray-700 text-xl font-bold">
                        Schedule Timings
                    </div>   
                    <p className='px-3 py-2'>Timing Slot Duration</p>    
                    <select name="duration" id="" className='ml-4 px-4 py-2 rounded-md text-md w-2/12 border-2 '> 
                        <option value="" className='px-2 py-2'>-</option>
                        <option value="" className='px-2 py-2'>15 min</option>
                        <option value="" className='px-2 py-2'>30 min</option>
                        <option value="" className='px-2 py-2'>45 min</option>
                        <option value="" className='px-2 py-2'>1 Hour</option>
                    </select>
                    <div className="mt-8 mx-3">
                        <div className="border rounded gray-700 p-3 sm:flex sm:flex-col flex-col flex lg:grid lg:grid-cols-7 gap-4 ">
                            <div className={toggleState === 1 ? " px-5 py-2 border gray-500 cursor-pointer text-center active-tabs" 
                            : "px-5 py-2 border gray-500 text-center"}
                                onClick={() => toggleTab(1)}
                            > SUNDAY</div>
                            <div className={toggleState === 2 ? " px-5 py-2 border gray-500 cursor-pointer text-center active-tabs" 
                            : "px-5 py-2 border cursor-pointer gray-500 text-center"}
                                onClick={() => toggleTab(2)}
                            > MONDAY</div>
                            <div className={toggleState === 3 ? " px-5 py-2 border gray-500 cursor-pointer text-center active-tabs" 
                            : "px-5 py-2 border cursor-pointer gray-500 text-center"}
                                onClick={() => toggleTab(3)}
                            > TUESDAY</div>
                            <div className={toggleState === 4 ? " px-5 py-2 border gray-500 cursor-pointer text-center active-tabs" 
                            : "px-5 py-2 border cursor-pointer gray-500 text-center"}
                                onClick={() => toggleTab(4)}
                            > WEDNESDAY</div>
                            <div className={toggleState === 5 ? " px-5 py-2 border gray-500 cursor-pointer text-center active-tabs" 
                            : "px-5 py-2 border cursor-pointer gray-500 text-center"}
                                onClick={() => toggleTab(5)}
                            > THURSDAY</div>
                            <div className={toggleState === 6 ? " px-5 py-2 border gray-500 cursor-pointer text-center active-tabs" 
                            : "px-5 py-2 border cursor-pointer gray-500 text-center"}
                                onClick={() => toggleTab(6)}
                            > FRIDAY</div>
                            <div className={toggleState === 7 ? " px-5 py-2 border gray-500 cursor-pointer text-center active-tabs" 
                            : "px-5 py-2 border cursor-pointer gray-500 text-center"}
                                onClick={() => toggleTab(7)}
                            > SATURDAY</div>
                        </div>
                        <div className="border rounded p-3 gray-700">
                            <div className="flex justify-between text-xl text-gray-700 font-semibold">
                                <div className="">Time Slots</div>
                                { details.length > 0 ?
                                 <div className="">Add Slot</div> :
                                 <div className="">Edit Slot</div>
                                }
                            </div>
                            <div className= "disp mt-5 ml-3 sm:flex sm:flex-col text-white flex-col flex lg:grid lg:grid-cols-6 gap-4" >
                            {/* : " no mt-5 ml-3 sm:flex sm:flex-col text-white flex-col flex lg:grid lg:grid-cols-6 gap-4"}>  */}
                            { details.length > 0 ?
                                details.map((detail) => (
                                    <div className=" px-3 py-2 bg-red-400">
                                        {detail}    
                                    </div>
                                )) :
                                <p className=" px-3 py-2 text-black">
                                        Not Available   
                                </p>
                             }
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
      </div>
      </div>
      
  )
}


export default Schedule;