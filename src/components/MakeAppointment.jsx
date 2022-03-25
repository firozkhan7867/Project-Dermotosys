import React, {useState,useEffect} from 'react';
import { connect } from 'react-redux';
import {get_schedule_data,appointmentSubmit} from "../actions/auth.jsx";
import { Navigate,useNavigate } from "react-router-dom";
import {BsPatchCheckFill} from "react-icons/bs";
import {ImCancelCircle} from "react-icons/im";


export const ScheduleTab = ({details,kk,day,fun}) =>{
  const clk = () =>{
    if (details.status == 1){
      fun(details,day)
    }
    // bg-[#f33f39]
  }
  return (
    <div className={kk.id === details.id ? " px-3 py-2 flex items-center justify-center rounded-md bg-[#26ae2b]"
    : "px-3 py-2  rounded-md "+ (details.status === 1 ? "bg-blue-500" : "bg-red-300 flex items-center justify-center hover:cursor-not-allowed ") + ""} onClick={ clk}>
        {details.start} To {details.end}    {kk.id === details.id ? <div className="ml-2"><BsPatchCheckFill className='text-white text-xl' /></div> : '' }
            {details.status !== 1 ? <div className="ml-2"><ImCancelCircle className='text-white text-xl' /></div> : ""}
    </div>
  )
};  



const MakeAppointment = ({get_schedule_data,appointmentSubmit,schedule_data,userData,isAuthenticated}) => {
  const navigate = useNavigate();

  useEffect(() => {
    get_schedule_data(1);
  }, []);
  
  const [check, setChecked] = useState({"start":"","end":"","day":"","id":""});
  // const [showModal, setShowModal] = useState(false);
  const [day, setDay] = useState();
  console.log(schedule_data);

    const [details,setDetails] = useState(schedule_data["Sunday"]);
    const [showModal, setShowModal] = useState(false);
    const [toggleState, setToggleState] = useState(1);

    const cc = (detail,day) => {
      const data = {"start":detail.start,"end":detail.end,"day":day,"id":detail.id}
      setChecked(data);
    }

    const model = (value) => {
      setShowModal(value);
    };

    if (!isAuthenticated) {
      navigate("/login");
    }

    const subt = (value) =>{
      appointmentSubmit(name,email,contact,age,gender,doctor,message,check.id,userData.id);
      setShowModal(value);
      setFormData({
        name:'',
        email:'',
        contact:'',
        age:'',
        gender:'',
        doctor:'',
        message:''
      });
      setChecked({"start":"","end":"","day":"","id":""});
      navigate("/patientdashboard");

    }

    const [formData, setFormData] = useState({
      name:'',
      email:'',
      contact:'',
      age:'',
      gender:'',
      doctor:'',
      message:''
    });
    

    const {name,email, contact,age, gender, doctor,message} = formData;
    
    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value}); 
    
    const toggleTab = (index) => {
      const cnv =  {1: "Sunday",2: "Monday",3:"Tuesday",4:"Wednesday",5:"Thursday",6:"Friday",7:"Saturday",}
        setDetails(schedule_data[cnv[index]]);
        setToggleState(index);
        setDay(cnv[index]);
        console.log(schedule_data[cnv[index]]);
    };

  return (
    <div className="">
      <div className="container-fluid flex h-full pb-20 justify-center bg-[#f9f9f9]">
        <div className="w-10/12 rounded-lg pb-20 shadow-lg mt-8 bg-white">
          <div className="px-12  py-12">
            <h2 className="text-2xl text-center font-bold">MAKE AN APPOINTMENT</h2>
            <div className="border-b-4 mx-20 h-8" style={{borderColor:"#3fbbc0"}}></div>
            <p className="text-lg text-center align-center font-normal my-4 mx-4">Before you book your first appointment, the doctor will need you to complete the form below.</p>
            <form >
            <div className="lg:grid lg:grid-cols-3 lg:justify-between flex-col mt-8">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                onChange={(e) => onChange(e)}
                value={name}
                required
                className="border-b-2 w-auto bg-white rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4  text-black outline-none"
                />
                <input
                name="email"
                type="text"
                placeholder="user@gmail.com"
                onChange={(e) => onChange(e)}
                value={email}
                required
                className="border-b-2 bg-white rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4 text-black outline-none"
                />
                <input
                name="contact"
                type="text"
                placeholder="Contact"
                onChange={(e) => onChange(e)}
                value={contact}
                required
                className="border-b-2 bg-white rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4 text-black outline-none"
                />
              <input
                name="age"
                type="text"
                placeholder="Age"
                onChange={(e) => onChange(e)}
                value={age}
                required
                className="border-b-2 bg-white rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4  text-black outline-none"
                />
              <select name="doctor"
              
              onChange={(e) => onChange(e)}
              value={doctor}
               className='border-b-2 bg-white hover:cursor-pointer rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4 text-black outline-none'>
                    <option className='px-2 py-2'>-- Select Doctor --</option>
                    <option className='px-2 py-2' value={1}>Dr. A Prudhvi Srinivas</option>
                </select>
                <select name="gender"
                
                onChange={(e) => onChange(e)}
                value={gender}
                className='border-b-2 bg-white hover:cursor-pointer rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4 text-black outline-none'>
                    <option className='px-2 py-2' value="Male">Male</option>
                    <option className='px-2 py-2' value="Female">Female</option>
                    <option className='px-2 py-2' value="Other">Other</option>
                </select>
            </div>
            <div className=" mt-8">
            <h1 className='mx-4 mb-4 text-2xl font-semibold'>Enter Description</h1>
              <textarea name="message" id="" 
                onChange={(e) => onChange(e)}
                value={message} cols="20" rows="5" placeholder='Enter Problem Description' className='border-2  w-full bg-white text-start rounded-2 px-4 py-2 text-md  rounded-md mx-4 text-black outline-none'></textarea>
            </div>
            <div className="mx-4 my-4 py-4 w-full border-2 rounded-lg flex flex-col justify-center items-center">
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
                    <div className= "disp mt-5 ml-2 xs:flex xs:flex-col text-white flex-col flex lg:grid xl:grid-cols-5 sm:grid sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3 l gap-4" >
                    { details.length > 0 ?
                        details.map((detail,index) => (
                            <ScheduleTab details={detail} kk={check} day={day} fun={cc}/>
                        )) :
                        <p className=" px-3 py-2 text-black">
                                Not Slots Available
                        </p>
                      }
                      {/* lindsay lohan */}
                    </div> 
                  </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex items-center">
                      Book Slot : 
                      <div className="bg-purple-400 px-4 mx-2 py-2 rounded-lg text-white">
                      from {check.start} To {check.end} on {check.day}
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button type="button" onClick={() => model(true)} className="bg-[#09e5ab] hover:bg-[#7edec8] text-white text-lg font-bold py-2 px-4 ml-8 mt-4 borde rounded">
                Submit Application
              </button>
            </div>
            </form> 
          </div>
        </div>




        {/* Model */}

        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Confirm Appointment Book
                    </h3>
                    <button
                      className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold "
                      onClick={() => setShowModal(false)}
                    >
                      <span className=" text-red-600 font-bold float-right rounded-full  h-6 w-6 text-3xl">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto w-[500px]">
                  
                    <div className="">
                        <h2>Name :  {name}</h2>
                    </div>
                    <div className="">
                        <h2>Email :  {email}</h2>
                    </div>
                    <div className="">
                        <h2>Contact :  {contact}</h2>
                    </div>
                    <div className="">
                        <h2>age :  {age}</h2>
                    </div>
                    <div className="">
                        <h2>gender :  {gender}</h2>
                    </div>
                    <div className="">
                        <h2>doctor :  {doctor}</h2>
                    </div>
                    <div className="">
                        <h2>Message : </h2>
                        <div className="">
                          {message}
                        </div>
                    </div>
                    <div className="">
                        <h2>slot :  {check.start} to {check.end} on {check.day}</h2>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => subt(false)}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  )
}




const mapStateToProps = (state) => ({
  schedule_data: state.auth.schedule_data,
  userData: state.auth.userData,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { get_schedule_data,appointmentSubmit })(MakeAppointment);