import React from 'react';
import { Link } from 'react-router-dom';
import banner from './img/banner.png';
import choose from './img/choose.jpg';
import connect from './img/connect.jpg';
import prepare from './img/prepare.jpg';
import { CheckIcon } from './Navbar/NavbarElements';
import Footer from  "./Footer/Footer"  ;
import "./home.css";
import {RiHeartPulseFill } from "react-icons/ri";
import {AiOutlineCheckSquare } from "react-icons/ai";
import {FaHospitalUser ,FaWheelchair} from "react-icons/fa";
import {GiMedicines} from "react-icons/gi";
import {RiHotelBedFill } from "react-icons/ri";
import {BsClipboardPlus,BsCalendar2Check,BsDoorOpen,BsCamera } from "react-icons/bs";


const HomePage = () => {
  return (
    <div className="container-fluid">
        <div className="lg:flex">
            <img src={banner} height="100%" width="100%" alt="" />
        </div>
        <div className="">
            <div className="lg:mx-12 my-2">
                <div className="mb-10 p-10">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-16 gap-8 ">
                        <div className="flex flex-col  hover:text-white  text-[#3fbbc0]  transition-all ease-in hover:bg-[#3fbbc0] duration-500 items-center justify-center shadow-lg h-60 border-2 border-gray w-full  rounded-3xl bg-white">
                            <div className="">
                                <BsCalendar2Check className="text-5xl text-black" />
                            </div>
                            <div className="mt-6">
                                <p className="text-3xl   hover:text-white font-bold "> Self Schedule</p>
                            </div>
                        </div>
                        <div className="flex flex-col transition  text-[#3fbbc0]   hover:text-white ease-in hover:bg-[#3fbbc0] duration-500 items-center justify-center shadow-lg h-60 border-2 border-gray w-full rounded-3xl bg-white">
                            <div className="">
                                <BsDoorOpen className="text-5xl text-black" />
                            </div>
                            <div className="mt-6">
                                <p className="text-3xl  font-bold"> Check In</p>
                            </div>
                        </div><div className="flex flex-col transition  text-[#3fbbc0]  hover:text-white ease-in hover:bg-[#3fbbc0] duration-500 items-center justify-center h-60 border-2 border-gray w-full shadow-lg rounded-3xl bg-white">
                            <div className="">
                                <BsCamera    className="text-5xl text-black" />
                            </div>
                            <div className="mt-6 flex items-center justify-center">
                                <p className="text-3xl font-bold w-8/12 text-center"> Video Consultation</p>
                            </div>
                        </div><div className="flex flex-col transition ease-in text-[#3fbbc0] hover:text-white  hover:bg-[#3fbbc0] duration-500 items-center justify-center h-60  border-2 border-gray w-full shadow-lg rounded-3xl bg-white">
                            <div className="">
                                <AiOutlineCheckSquare className="text-5xl text-black" />
                            </div>
                            <div className="mt-6 flex items-center justify-center">
                                <p className="text-3xl font-bold  w-8/12 text-center"> Personalized Treatment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:pb-20 xl:pb-20 md:pb-20 pb-14 justify-center text-white items-center" style={{background:'#10a1ad'}}>
                    <h2 className='lg:text-3xl text-xl mt-20 font-bold'> In an Emergency ?  Need Help Now?</h2>
                    <p className='text-center lg:w-8/12 w-10/12 lg:mt-10 md:mt-5 mt-4 lg:text-lg md:text-md sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et beatae, odit nihil ducimus, 
                        natus quos itaque hic porro obcaecati explicabo laudantium impedit soluta eius officia sunt tenetur placeat quia.</p>
                    <Link to={"/makeappointment"} className="border text-center hover:bg-white hover:text-gray-800 hover:border-gray-700 rounded-full border-white mt-10 lg:text-2xl md:text-xl text-lg font-bold md:px-3 lg:px-5 md:py-2 lg:py-3 px-3 py-2 lg:w-4/12">
                        Make Appointment
                    </Link>
            </div>  
            <div className="flex flex-col lg:py-24 md:py-20 py-20 text-center  justify-center text-white items-center" >
                    <h2 className='lg:text-2xl text-xl w-10/12 text-black font-bold'> Find the right care, doctor,hospital <br />
                    right at your finger tips</h2>
                    <p className='text-wrap text-center lg:w-8/12 w-10/12 lg:mt-8 md:mt-3 mt-3 lg:text-md md:text-md sm:text-sm text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et beatae, odit nihil ducimus:</p>
                    
            </div>   
            <div className="mx-2 xl:mx-5 lg:mx-5 md:mx-5 sm:mx-2  bg-gray-100 mb-5 border-b ">
                <div className="py-6 px-6 xl:px-8 lg:px-8 md:px-8 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center">
                    <div className="w-full lg:w-11/12 xl:w-11/12 md:w-11/12  pb-14 shadow-lg bg-white rounded-lg ">
                        <div className="h-1  w-full rounded-t-lg" style={{background:'#10a1ad'}}></div>
                        <div className=" w-full  flex flex-col justify-center place-items-center">
                            <p className="lg:my-8 xl:my-8 my-2 mt-4   font-semibold text-center text-3xl">Choose</p>
                            <img src={choose} alt="" width="250" className=" xl:my-6 lg:my-6 md:my-6 sm:my-2 my-2" />
                            <p className=" text-center text-1xl text-wrap w-8/12 xl:mb-4 lg:mb-4 sm:mb-2 md:mb-4 mb-2">Find Doctors and hospitals based on the factors that matter most to you.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-11/12 xl:w-11/12 md:w-11/12 pb-14 shadow-lg bg-white rounded-lg">
                        <div className="h-1  w-full rounded-t-lg" style={{background:'#10a1ad'}}></div>
                        <div className=" w-full  flex flex-col justify-center place-items-center">
                            <p className="my-8 font-semibold text-center text-3xl">Connect</p>
                            <img src={connect} alt="" width="250" className=" my-6" />
                            <p className=" text-center text-1xl text-wrap w-8/12 mb-4">Conveniently shedule your appointment by phone or online when available.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-11/12 xl:w-11/12 md:w-11/12 pb-14 shadow-lg bg-white rounded-lg">
                        <div className="h-1  w-full rounded-t-lg" style={{background:'#10a1ad'}}></div>
                        <div className="w-full  flex flex-col justify-center place-items-center">
                            <p className="my-12 font-semibold text-center text-3xl">Prepare</p>
                            <img src={prepare} alt="" width="250" className=" my-6" />
                            <p className=" text-center text-1xl text-wrap w-8/12 mb-4">Learn what you need to know and which questions to ask your doctor.</p>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="py-10 flex flex-col text-center justify-center items-center border-b lg:border-none xl:border-none  ">  
                <h1 className='text-gray-600 font-bold text-3xl mb-4'>About Us</h1>
                <p className='w-10/12 mt-4 text-gray-500'> Our Consultation provides convenient access to accredited Dermatology Specialist using telehealth technology to help people suffering,
                from acne Heal and Regain their Confidence. We believe that clear skin starts within. We combine holistic approach with medical treatments to provide dermatology care</p>       
            </div> 
            <div className="lg:mx-12  mx-2 mb-10">
                <div className="py-4 lg:px-16 xl:px-16 md:px-14 px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
                    <div className="w-full  flex flex-col m-3  justify-center place-items-center">
                        <img src="https://cdn-boecg.nitrocdn.com/ZhAvjyePCUHDEgbgiXJIZayFfXGQnUpg/assets/static/optimized/wp-content/uploads/sites/299/2021/03/d5bdb9c80a77c1ee93d05d7afd406d28.shutterstock_1674146218-800x533.jpg" alt="" />
                    </div>
                    <div className="w-full   flex flex-col m-3 bg-white justify-center place-items-center">
                        <h2 className='text-left font-bold text-lg p-3'>When you schedule your intial appointment, your Consultation will include</h2>
                        <h3 className='text-sm text-left text-gray-800 p-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ea ipsum repudiandae debitis consequuntur. Inventore, recusandae </h3>
                        <div className="">
                        <p className='flex items-center p-3'><CheckIcon  /> <p className='ml-6 text-gray-500 font-bold text-sm'>A Comphrehensive Consultation with an accredited Dermatology Specialist</p> </p>
                        <p className='flex items-center p-3'><CheckIcon  /> <p className='ml-6 text-gray-500 font-bold text-sm'>Telehealth Video appointment from the comfort of your own home</p> </p>
                        <p className='flex items-center p-3'><CheckIcon  /> <p className='ml-6 text-left text-gray-500 w-11/12 font-bold text-sm'>Skin routine and product plant to heal your skin
                                Dietary and lifestyle recommendations to reduce acne recurraence
                            </p> 
                        </p>
                        <p className='p-5 text-left text-md text-gray-500 font-bold'>
                            Topical or oral acne prescriptions will be sent to your local pharmacy when necessary
                        </p>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="w-full lg:px-10 xl:p-10 md:p-10 px-4 mb-5 text-center flex flex-col items-center" style={{background:"#f4f8f9"}}>
                <div className="mb-5">
                <h1 className='text-3xl font-bold text-gray-700 mt-5'>SERVICES</h1>
                <p className='lg:w-10/12 xl:w-10/12  text-center mt-5 font-bold text-md text-gray-600 mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, quisquam 
                    velit possimus voluptate illo nostrum quas eum ipsum nobis at repellat, 
                    reiciendis aliquid dolor? Nemo non cum ullam illum in.</p>
                </div>
                <div className="shadow-xl bg-white rounded-md lg:p-5 xl:p-5 md:p-5 px-2 py-4 pp w-full  grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-2 items-center justify-center">
                    <div className="flex flex-col  justify-center mb-4 items-center">
                        <div className="h-[130px] w-[130px] pt-8 rounded-full border shadow-lg  justify-center items-center">
                        <RiHeartPulseFill className='w-full h-[70px] ' style={{color:"#3fbbc0"}} />
                        </div>
                        <h1 className='mt-4 text-xl font-bold text-gray-500'>Lorem Ipsum</h1>
                        <div className="border-b-4 h-4 w-1/12" style={{borderColor:"#3fbbc0"}}></div>
                        <div className="text-center w-8/12 text-sm mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi</div>
                    </div>
                    <div className="flex flex-col  justify-center mb-4 items-center">
                        <div className="h-[130px] w-[130px] pt-8 rounded-full border shadow-lg  justify-center items-center">
                        <GiMedicines className='w-full h-[70px] ' style={{color:"#3fbbc0"}} />
                        </div>
                        <h1 className='mt-4 text-xl font-bold text-gray-500'>Dolar Sitema</h1>
                        <div className="border-b-4 h-4 w-1/12" style={{borderColor:"#3fbbc0"}}></div>
                        <div className="text-center w-8/12 text-sm mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi</div>
                    </div>
                    <div className="flex flex-col  justify-center mb-4 items-center">
                        <div className="h-[130px] w-[130px] pt-8 rounded-full border shadow-lg  justify-center items-center">
                        <FaHospitalUser className='w-full h-[60px] ' style={{color:"#3fbbc0"}} />
                        </div>
                        <h1 className='mt-4 text-xl font-bold text-gray-500'>Sed ut prenciple</h1>
                        <div className="border-b-4 h-4 w-1/12" style={{borderColor:"#3fbbc0"}}></div>
                        <div className="text-center w-8/12 text-sm mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi</div>
                    </div>
                    <div className="flex flex-col  justify-center mb-4 items-center">
                        <div className="h-[130px] w-[130px] pt-8 rounded-full border shadow-lg  justify-center items-center">
                        <RiHotelBedFill className='w-full h-[70px] ' style={{color:"#3fbbc0"}} />
                        </div>
                        <h1 className='mt-4 text-xl font-bold text-gray-500'>Magni Dolares</h1>
                        <div className="border-b-4 h-4 w-1/12" style={{borderColor:"#3fbbc0"}}></div>
                        <div className="text-center w-8/12 text-sm mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi</div>
                    </div>
                    <div className="flex flex-col  justify-center mb-4 items-center">
                        <div className="h-[130px] w-[130px] pt-6 rounded-full border shadow-lg  justify-center items-center">
                        <FaWheelchair className='w-full h-[60px] ' style={{color:"#3fbbc0"}} />
                        </div>
                        <h1 className='mt-4 text-xl font-bold text-gray-500'>Nemo Erim</h1>
                        <div className="border-b-4 h-4 w-1/12" style={{borderColor:"#3fbbc0"}}></div>
                        <div className="text-center w-8/12 text-sm mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi</div>
                    </div>
                    <div className="flex flex-col  justify-center mb-4 items-center">
                        <div className="h-[130px] w-[130px] pt-8 rounded-full border shadow-lg  justify-center items-center">
                        <BsClipboardPlus className='w-full h-[60px] ' style={{color:"#3fbbc0"}} />
                        </div>
                        <h1 className='mt-4 text-xl font-bold text-gray-500'>Elusmod Tempor</h1>
                        <div className="border-b-4 h-4 w-1/12" style={{borderColor:"#3fbbc0"}}></div>
                        <div className="text-center w-8/12 text-sm mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi</div>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default HomePage