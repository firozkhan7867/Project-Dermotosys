import React from "react";
import SideBar from './SideBar';

const Doctor_Change_Password = ({isAuthenticated}) => {
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
            <p>Change Password</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-6 grid grid-cols-1 md:grid-cols-1 lg:flex  gap-8 w-full items-start">
      <SideBar />
        <div className="w-full px-8 py-4 bg-white h-auto ">
          <div className="p-3 text-gray-700 text-2xl font-bold pb-6 border-b-2">
            Change Password
          </div> 
            <form action="" className="mt-4">
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label class="text-lg text-gray-600">Current Password</label>
                    <input type='text' className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-lg text-black outline-none"/>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label class="text-lg text-gray-600">New Password</label>
                    <input type='text' className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-lg text-black outline-none"/>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label class="text-lg text-gray-600">Confirm New Password</label>
                    <input type='text' className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-lg text-black outline-none"/>
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

export default Doctor_Change_Password