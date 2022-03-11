import React from 'react';
import { Link } from 'react-router-dom';
import banner from './img/banner.jpg';
import choose from './img/choose.jpg';
import connect from './img/connect.jpg';
import prepare from './img/prepare.jpg';
import { CheckIcon } from './Navbar/NavbarElements';
import Footer from  "./Footer/Footer"  ;

const HomePage = () => {
  return (
    <div className="container-fluid">
        <div className="lg:flex">
            <img src={banner} height="100%" width="100%" alt="" />
        </div>
        <div className="">
            <div className="">
            </div>
            <div className="lg:mx-12 my-4 ">
                <div className="mb-10 p-10">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-16 gap-8 ">
                        <div className="flex flex-col items-center justify-center shadow-md h-60 border-2 border-gray w-full  rounded-3xl bg-white">
                                hi
                        </div>
                        <div className="flex flex-col items-center justify-center shadow-md h-60 border-2 border-gray w-full rounded-3xl bg-white">
                                hi
                        </div><div className="flex flex-col items-center justify-center h-60 border-2 border-gray w-full shadow-md rounded-3xl bg-white">
                                hi
                        </div><div className="flex flex-col items-center justify-center h-60  border-2 border-gray w-full shadow-md rounded-3xl bg-white">
                                hi
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="flex flex-col pb-20 justify-center text-white items-center" style={{background:'#10a1ad'}}>
                    <h2 className='lg:text-3xl text-xl mt-20 font-bold'> In an Emergency ?  Need Help Now?</h2>
                    <p className='text-wrap lg:w-8/12 w-10/12 lg:mt-10 md:mt-5 mt-4 lg:text-lg md:text-md sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et beatae, odit nihil ducimus, 
                        natus quos itaque hic porro obcaecati explicabo laudantium impedit soluta eius officia sunt tenetur placeat quia.</p>
                    <Link to={""} className="border text-center hover:bg-white hover:text-gray-800 hover:border-gray-700 rounded-full border-white mt-10 lg:text-2xl md:text-xl text-lg font-bold md:px-3 lg:px-5 md:py-2 lg:py-3 px-3 py-2 lg:w-4/12">
                        Make Appointment
                    </Link>
            </div>  
            <div className="flex flex-col lg:py-24 md:py-20 py-20 text-gray-700 justify-center text-white items-center" >
                    <h2 className='lg:text-2xl text-xl  font-bold'> Find the right care, doctor,hospital <br />
                    right at your finger tips</h2>
                    <p className='text-wrap text-center lg:w-8/12 w-10/12 lg:mt-8 md:mt-3 mt-3 lg:text-md md:text-md sm:text-sm text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et beatae, odit nihil ducimus:</p>
                    
            </div>   
            <div className="mx-5 bg-gray-100 mb-5">
                <div className="py-6 px-8 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center">
                    <div className="w-11/12 pb-14 shadow-lg bg-white rounded-lg ">
                        <div className="h-1  w-full rounded-t-lg" style={{background:'#10a1ad'}}></div>
                        <div className=" w-full  flex flex-col justify-center place-items-center">
                            <p className="my-8 font-semibold text-center text-3xl">Choose</p>
                            <img src={choose} alt="" width="250" className=" my-6" />
                            <p className=" text-center text-1xl text-wrap w-8/12 mb-4">Find Doctors and hospitals based on the factors that matter most to you.</p>
                        </div>
                    </div>
                    <div className="w-11/12 pb-14 shadow-lg bg-white rounded-lg">
                        <div className="h-1  w-full rounded-t-lg" style={{background:'#10a1ad'}}></div>
                        <div className=" w-full  flex flex-col justify-center place-items-center">
                            <p className="my-8 font-semibold text-center text-3xl">Connect</p>
                            <img src={connect} alt="" width="250" className=" my-6" />
                            <p className=" text-center text-1xl text-wrap w-8/12 mb-4">Conveniently shedule your appointment by phone or online when available.</p>
                        </div>
                    </div>
                    <div className="w-11/12 pb-14 shadow-lg bg-white rounded-lg">
                        <div className="h-1  w-full rounded-t-lg" style={{background:'#10a1ad'}}></div>
                        <div className="w-full  flex flex-col justify-center place-items-center">
                            <p className="my-12 font-semibold text-center text-3xl">Prepare</p>
                            <img src={prepare} alt="" width="250" className=" my-6" />
                            <p className=" text-center text-1xl text-wrap w-8/12 mb-4">Learn what you need to know and which questions to ask your doctor.</p>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="py-10 flex flex-col text-center justify-center items-center">  
                <h1 className='text-gray-600 font-bold text-3xl mb-4'>About Us</h1>
                <p className='w-10/12 mt-4 text-gray-500'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magni eum perferendis odit mollitia amet iste aspernatur vero dolores natus,
                     provident consectetur quis perspiciatis pr aesentium dolore similique adipisci soluta aliquid.</p>       
            </div>
            <div className="lg:mx-12  mb-10">
                <div className="py-4 px-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
                    <div className="w-full  flex flex-col m-3 bg-gray-300 justify-center place-items-center">
                        
                    </div>
                    <div className="w-full   flex flex-col m-3 bg-white justify-center place-items-center">
                        <h2 className='text-left font-bold text-lg p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tenetur enim, hic at ad minus</h2>
                        <h3 className='text-sm text-left text-gray-800 p-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ea ipsum repudiandae debitis consequuntur. Inventore, recusandae </h3>
                        <div className="">
                        <p className='flex items-center p-3'><CheckIcon cl /> <p className='ml-6 text-gray-500 font-bold text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod porro ullam</p> </p>
                        <p className='flex items-center p-3'><CheckIcon  /> <p className='ml-6 text-gray-500 font-bold text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod porro ullam</p> </p>
                        <p className='flex items-center p-3'><CheckIcon  /> <p className='ml-6 text-left text-gray-500 w-11/12 font-bold text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod porro ullam 
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod porro ullam
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod porro ullam
                            </p> 
                        </p>
                        <p className='p-5 text-left text-md text-gray-500 font-bold'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quibusdam velit accusamus quidem expedita molestiae optio ipsam, earum aperiam possimus maxime, officiis placeat distinctio laborum hic assumenda ullam excepturi reprehenderit!
                            officiis placeat distinctio laborum hic assumenda ullam excepturi reprehenderit!
                        </p>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="w-full">
                        
                <Footer />    
            </div>
            
        </div>
    </div>
  )
}

export default HomePage