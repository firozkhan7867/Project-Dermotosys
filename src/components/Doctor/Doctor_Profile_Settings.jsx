import React from "react";
import SideBar from './SideBar';
import {FaCloudUploadAlt} from "react-icons/fa"

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
      <SideBar />
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