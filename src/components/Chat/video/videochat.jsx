import React from 'react';
import dp1 from "../../img/dp1.jpg";
import dp2 from "../../img/dp2.jpg";
import {BsCameraReelsFill} from 'react-icons/bs';
import {AiTwotoneAudio} from 'react-icons/ai';
import {ImUserPlus} from 'react-icons/im';
import {FaArrowsAltV} from 'react-icons/fa';
import {MdOutlineCallEnd} from 'react-icons/md';


 const VideoChat = () => {
  return (
    <div>
        <div className="bg-gray-100 w-full p-10">
            <div className="w-full bg-white ">
                <div className="w-full flex justify-between border-b ">
                    <div className="flex justify-center items-center px-3 py-4">
                        <img src={dp1} alt="" width="60px" height="60px" className='rounded-full' />
                        <div className="p-2 flex flex-col">
                            <p className='text-xl text-gray-700 font-semibold'>Charlene Reed</p>
                            <p className='text-gray-400'>online</p>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                <div className="w-full border-b-2">
                    <div className="justify-center flex">
                        <img src={dp2} alt="" width="70%" height="70%" className='w-7/12' /> 
                        <div className="">
                            <img src={dp1} alt="" width="100px" height="100px" className="float-right absolute bottom-5 right-20 border-2 shadow-lg border-gray-400" />
                        </div>
                    </div>   
                </div>
                <div className="flex justify-between px-4 py-4">
                    <div className="text-3xl text-gray-700 font-semibold items-center pt-4">00:59</div>
                    <div className=" flex text-4xl text-[#777]">
                        <div className=" px-5 py-4 mx-2 rounded-full shadow-lg border">
                            <BsCameraReelsFill />
                        </div>
                        <div className="px-5 py-4 mx-2 rounded-full shadow-lg border">
                            <AiTwotoneAudio />
                        </div>
                        <div className="px-5 py-4 mx-2 rounded-full shadow-lg border">
                            <ImUserPlus />
                        </div>
                        <div className="px-5 py-4 mx-2 rounded-full shadow-lg border">
                            <FaArrowsAltV />
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-5xl px-6 py-3 mb-2 rounded-full bg-[#f06060] text-white">
                        <MdOutlineCallEnd />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default VideoChat;
