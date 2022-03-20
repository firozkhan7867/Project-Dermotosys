import React, {useState,useEffect} from 'react';
import { connect } from 'react-redux';
import {get_schedule_data} from "../actions/auth.jsx";
import { FiEdit } from "react-icons/fi";
import { AiOutlineFileAdd } from "react-icons/ai"; 




export const ScheduleTab = ({details,fun}) =>{

  return (
    <div className=" px-3 py-2 bg-[#f33f39] rounded-md z-30" onClick={ () => {
      fun(details.id)
    }}>
        {details.start} To {details.end}    
    </div>
  )
};



const MakeAppointment = ({get_schedule_data,schedule_data}) => {


  useEffect(() => {
    get_schedule_data(1);
  }, []);
  
  const [check, setChecked] = useState();

    const [details,setDetails] = useState(schedule_data["Sunday"]);
    const [showModal, setShowModal] = useState(false);
    const [toggleState, setToggleState] = useState(1);

    const cc = (id) => {
      console.log(id);
    }
    
    

    
    const toggleTab = (index) => {
      const cnv =  {1: "Sunday",2: "Monday",3:"Tuesday",4:"Wednesday",5:"Thursday",6:"Friday",7:"Saturday",}
        setDetails(schedule_data[cnv[index]]);
        setToggleState(index);
    };

  return (
    <div className="">
      <div className="container-fluid flex h-screen h-full pb-20 justify-center bg-[#f9f9f9]">
        <div className="w-10/12 rounded-lg pb-20 shadow-lg mt-8 bg-white">
          <div className="px-12  py-12">
            <h2 className="text-2xl text-center font-bold">MAKE AN APPOINTMENT</h2>
            <div className="border-b-4 mx-20 h-8" style={{borderColor:"#3fbbc0"}}></div>
            <p className="text-lg text-center align-center font-normal my-4 mx-4">Before you book your first appointment, the doctor will need you to complete the form below.</p>
            <form >
            <div className="lg:grid lg:grid-cols-3 lg:justify-between flex-col mt-8">
              <input
                name="email"
                type="text"
                placeholder="Your Name"
                required
                className="border-b-2 w-auto bg-white rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4  text-black outline-none"
                />
                <input
                name="email"
                type="text"
                placeholder="Your Email"
                required
                className="border-b-2 bg-white rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4 text-black outline-none"
                />
                <input
                name="email"
                type="text"
                placeholder="Your PhoneNumber"
                required
                className="border-b-2 bg-white rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4 text-black outline-none"
                />
              <input
                name="email"
                type="text"
                placeholder="Age"
                required
                className="border-b-2 bg-white rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4  text-black outline-none"
                />
              <select name="Doctor" className='border-b-2 bg-white hover:cursor-pointer rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4 text-black outline-none'>
                    <option className='px-2 py-2'>-- Select Doctor --</option>
                    <option className='px-2 py-2'>Dr. A Prudhvi Srinivas</option>
                </select>
                <select name="gender" className='border-b-2 bg-white hover:cursor-pointer rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4 text-black outline-none'>
                    <option className='px-2 py-2'>Male</option>
                    <option className='px-2 py-2'>Female</option>
                    <option className='px-2 py-2'>Other</option>
                </select>
            </div>
            <div className="mr-8 mt-8">
              <textarea name="message" id="" cols="20" rows="5" placeholder='Enter Problem Description' className='border-2  w-full bg-white text-start rounded-2 px-4 py-2 text-md  rounded-md mx-4 text-black outline-none'></textarea>
            </div>
            <div className="mx-4 my-4 py-4 w-full flex flex-col justify-center items-center">
              <h1 className='text-2xl font-semibold'>Book Your Slot</h1>
              <div className="mt-4">
                <div className="mt-8">
                  <div className="rounded sm:flex sm:flex-col flex-col flex lg:grid lg:grid-cols-7 gap-4 ">
                    <div className={toggleState === 1 ? " px-5 py-2 border-[#ff4877] rounded-md border text-white bg-[#f14772] cursor-pointer text-center active-day" 
                    : "px-5 py-2 border gray-500 text-center"}
                        onClick={() => toggleTab(1)}
                    > SUNDAY</div>
                    <div className={toggleState === 2 ? " px-5 py-2 border-[#ff4877] rounded-md border text-white bg-[#ff4877] cursor-pointer text-center active-day" 
                    : "px-5 py-2 border cursor-pointer gray-500 text-center"}
                        onClick={() => toggleTab(2)}
                    > MONDAY</div>
                    <div className={toggleState === 3 ? " px-5 py-2 border-[#ff4877] rounded-md border text-white bg-[#ff4877] cursor-pointer text-center active-day" 
                    : "px-5 py-2 border cursor-pointer gray-500 text-center"}
                        onClick={() => toggleTab(3)}
                    > TUESDAY</div>
                    <div className={toggleState === 4 ? " px-5 py-2 border-[#ff4877] rounded-md border text-white bg-[#ff4877] cursor-pointer text-center active-day" 
                    : "px-5 py-2 border cursor-pointer gray-500 text-center"}
                        onClick={() => toggleTab(4)}
                    > WEDNESDAY</div>
                    <div className={toggleState === 5 ? " px-5 py-2 border-[#ff4877] rounded-md border text-white bg-[#ff4877] cursor-pointer text-center active-day" 
                    : "px-5 py-2 border cursor-pointer gray-500 text-center"}
                        onClick={() => toggleTab(5)}
                    > THURSDAY</div>
                    <div className={toggleState === 6 ? " px-5 py-2 border-[#ff4877] rounded-md border text-white bg-[#ff4877] cursor-pointer text-center active-day" 
                    : "px-5 py-2 border cursor-pointer gray-500 text-center"}
                        onClick={() => toggleTab(6)}
                    > FRIDAY</div>
                    <div className={toggleState === 7 ? " px-5 py-2 border-[#ff4877] rounded-md border text-white bg-[#ff4877] cursor-pointer text-center active-day" 
                    : "px-5 py-2 border cursor-pointer gray-500 text-center"}
                        onClick={() => toggleTab(7)}
                    > SATURDAY</div>
                </div>
                <div className=" rounded p-3 gray-700">
                    <div className="flex justify-start">
                        <div className="text-xl text-gray-700 font-semibold">Time Slots</div>
                    </div>
                    <div className= "disp mt-5 ml-2 sm:flex sm:flex-col text-white flex-col flex lg:grid lg:grid-cols-5 gap-4" >
                    { details.length > 0 ?
                        details.map((detail,index) => (
                            <ScheduleTab details={detail}  fun={cc}/>
                        )) :
                        <p className=" px-3 py-2 text-black">
                                Not Slots Available   
                        </p>
                      }
                      {/* lindsay lohan */}
                    </div> 
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center">
              <button type="submit" className="text-2xl flex justify-center text-white hover:text-gray-500 ml-4 mt-4 mb-4 text-center rounded-lg px-3 py-2 font-bold bg-green-400 hover:bg-green-200">
                Submit Application
              </button>
            </div>
            </form> 
          </div>
        </div>
      </div>
    </div>
  )
}




const mapStateToProps = (state) => ({
  schedule_data: state.auth.schedule_data,
});

export default connect(mapStateToProps, { get_schedule_data })(MakeAppointment);