import React from 'react'
import {AiOutlineRight} from "react-icons/ai"
import {TiSocialGooglePlusCircular,TiSocialLinkedin,TiSocialSkypeOutline,TiSocialTwitter,TiSocialFacebook} from "react-icons/ti"

const Footer = () => {
  return (
    <div className="bg-gray-200">
      <footer>
        <div className="p-10 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h4 className="text-2xl pb-4">Company</h4>
              <p className="text-gray-400">
              Lorem ipsum dolor<br />
              oi8hujbs, PB 584658 <br />
              US <br /><br />
              <strong>Phone:</strong> +1 232 5488 546 <br />
              <strong>Email:</strong> a@b.c <br />
              </p>
            </div>
            <div className="mb-5">
            <h4 className="text-2xl pb-4">Doctor</h4>
              <ul className="text-gray-400">
                <li className="pb-4 flex place-items-center"><AiOutlineRight className="mr-2 text-yellow-500" /><a href="#" className="hover:text-yellow-500">Dashboard</a></li>
                <li className="pb-4 flex place-items-center"><AiOutlineRight className="mr-2 text-yellow-500" /><a href="#" className="hover:text-yellow-500">Login</a></li>
                <li className="pb-4 flex place-items-center"><AiOutlineRight className="mr-2 text-yellow-500" /><a href="#" className="hover:text-yellow-500">Appointments</a></li>
                <li className="pb-4 flex place-items-center"><AiOutlineRight className="mr-2 text-yellow-500" /><a href="#" className="hover:text-yellow-500">Schedule</a></li>
                <li className="pb-4 flex place-items-center"><AiOutlineRight className="mr-2 text-yellow-500" /><a href="#" className="hover:text-yellow-500">Make VC</a></li>
              </ul>
            </div>
            <div className="mb-5">
            <h4 className="text-2xl pb-4">Patient</h4>
            <ul className="text-gray-400">
                <li className="pb-4 flex place-items-center"><AiOutlineRight className="mr-2 text-yellow-500" /><a href="#" className="hover:text-yellow-500"> Dashboard</a></li>
                <li className="pb-4 flex place-items-center"><AiOutlineRight className="mr-2 text-yellow-500" /><a href="#" className="hover:text-yellow-500">Login</a></li>
                <li className="pb-4 flex place-items-center"><AiOutlineRight className="mr-2 text-yellow-500" /><a href="#" className="hover:text-yellow-500">Signup</a></li>
                <li className="pb-4 flex place-items-center"><AiOutlineRight className="mr-2 text-yellow-500" /><a href="#" className="hover:text-yellow-500">Prescription</a></li>
                <li className="pb-4 flex place-items-center"><AiOutlineRight className="mr-2 text-yellow-500" /><a href="#" className="hover:text-yellow-500">Connect Chat</a></li>
              </ul>
            </div>
            <div className="mb-5">
            <h4 className="text-2xl pb-4">Join our newsletter</h4>
              <p className="text-gray-400 pb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
              <form className="flex flex-row flex-wrap">
                <input type="text" className="text-gray-400 w-2/3 p-2 focus:border-yellow-500" name="" id="" placeholder="email@ex.com" />
                <button className="p-2 w-1/3 bg-yellow-500 text-white hover:bg-yellow-600">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-900 text-gray-500 px-10">
          <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
            <div className="text-center">
                Copyright <strong><span>Company</span></strong>. All rights reserved.
            </div>
            <div className="text-center text-xl text-white mb-2"> 
              <a href="#" className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"><TiSocialGooglePlusCircular className=" mt-1 ml-[8px] " size={25}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"><TiSocialFacebook className=" mt-1 ml-[8px] " size={25}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"><TiSocialLinkedin className=" mt-1 ml-[8px] " size={25}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"><TiSocialSkypeOutline className=" mt-1 ml-[8px] " size={25}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"><TiSocialTwitter className= " mt-1 ml-[8px] " size={25}/></a>
            </div>
          </div>
        </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer