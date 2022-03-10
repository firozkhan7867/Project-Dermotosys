import  React from 'react'
import {useState}  from 'react';
import "./tabs.css";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="w-full">
      <div className="flex pt-2 ">
        <div className="m-4 ">
            <button
            className={toggleState === 1 ? "tabs active-tabs " : "tabs"}
            onClick={() => toggleTab(1)}
            >
            Upcoming
            </button>    
        </div>
        
        <div className="m-4 ">
            <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
            >
            Today
            </button>
        </div>
      </div>






      {/* Below will be the dashboard table  */}

      <div className="">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
            <div class="bg-white  w-full">
                <div className="w-full">
                    <div class=" w-full py-4 overflow-y-auto">
                        <div class="inline-block min-w-full  overflow-hidden">
                            <table class="min-w-full leading-normal text-center">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-5 py-3 border-b-2  border-gray-200 w-3/12 text-center text-sm  text-gray-700 uppercase tracking-wider">
                                            Patient Name
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2  border-gray-200 w-2/12 text-center text-sm  text-gray-700 text-gray-600 uppercase tracking-wider">
                                            Appt Date
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2  border-gray-200 w-2/12 text-center text-sm  text-gray-700 text-gray-600 uppercase tracking-wider">
                                            Purpose
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2  border-gray-200 w-2/12 text-center text-sm  text-gray-700 text-gray-600 uppercase tracking-wider">
                                            Type
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2  border-gray-200 w-3/12  text-center text-sm  text-gray-700 text-gray-600 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                    <div class="ml-3">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            Vera Carpenter
                                                        </p>
                                                        <p  className="text-gray-500 text-left whitespace-no-wrap">
                                                            #PT0016    
                                                        </p>
                                                    </div>
                                                </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Jan 21, 2020
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">General</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                New Patient
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <div className="">View</div>
                                            <div className="">View</div>
                                            <div className="">Cancel</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                    <div class="ml-3">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            Blake Bowman
                                                        </p>
                                                        <p  className="text-gray-500 text-left whitespace-no-wrap">
                                                            #PT0016    
                                                        </p>
                                                    </div>
                                                </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Jan 01, 2020
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">General</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Old Patient
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <span
                                                class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden
                                                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                            <span class="relative">Activo</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                    <div class="ml-3">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            Dana Moore
                                                        </p>
                                                        <p  className="text-gray-500 text-left whitespace-no-wrap">
                                                            #PT0016    
                                                        </p>
                                                    </div>
                                                </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Jan 10, 2020
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">General</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                New Patient
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white ">
                                            <span
                                                class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                                <span aria-hidden
                                                    class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                            <span class="relative">Suspended</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-5 py-5 bg-white text-sm">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                        alt="" />
                                                </div>
                                                    <div class="ml-3">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            Alonzo Cox
                                                        </p>
                                                        <p  className="text-gray-500 text-left whitespace-no-wrap">
                                                            #PT0016    
                                                        </p>
                                                    </div>
                                                </div>
                                        </td>
                                        <td class="px-5 py-5 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
                                        </td>
                                        <td class="px-5 py-5 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                                        </td>
                                        <td class="px-5 py-5 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">70</p>
                                        </td>
                                        <td class="px-5 py-5 bg-white text-sm">
                                            <span
                                                class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                                <span aria-hidden
                                                    class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                            <span class="relative">Inactive</span>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"} >
        <div class="bg-white  w-full">
                <div className="w-full">
                    <div class="sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full  overflow-hidden">
                            <table class="min-w-full leading-normal text-center">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-5 py-3 border-b-2  border-gray-200 w-3/12 text-center text-sm  text-gray-700 uppercase tracking-wider">
                                            Patient Name
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2  border-gray-200 w-2/12 text-center text-sm  text-gray-700 text-gray-600 uppercase tracking-wider">
                                            Appt Date
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2  border-gray-200 w-2/12 text-center text-sm  text-gray-700 text-gray-600 uppercase tracking-wider">
                                            Purpose
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2  border-gray-200 w-2/12 text-center text-sm  text-gray-700 text-gray-600 uppercase tracking-wider">
                                            Type
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2  border-gray-200 w-3/12  text-center text-sm  text-gray-700 text-gray-600 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                    <div class="ml-3">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            Vera Carpenter
                                                        </p>
                                                        <p  className="text-gray-500 text-left whitespace-no-wrap">
                                                            #PT0016    
                                                        </p>
                                                    </div>
                                                </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Jan 21, 2020
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">General</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                New Patient
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <span
                                                class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden
                                                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                            <span class="relative">Activo</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                    <div class="ml-3">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            Blake Bowman
                                                        </p>
                                                        <p  className="text-gray-500 text-left whitespace-no-wrap">
                                                            #PT0016    
                                                        </p>
                                                    </div>
                                                </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Jan 01, 2020
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">General</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Old Patient
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <span
                                                class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden
                                                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                            <span class="relative">Activo</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                    <div class="ml-3">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            Dana Moore
                                                        </p>
                                                        <p  className="text-gray-500 text-left whitespace-no-wrap">
                                                            #PT0016    
                                                        </p>
                                                    </div>
                                                </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Jan 10, 2020
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">General</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                New Patient
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white ">
                                            <span
                                                class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                                <span aria-hidden
                                                    class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                            <span class="relative">Suspended</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-5 py-5 bg-white text-sm">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                        alt="" />
                                                </div>
                                                    <div class="ml-3">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            Alonzo Cox
                                                        </p>
                                                        <p  className="text-gray-500 text-left whitespace-no-wrap">
                                                            #PT0016    
                                                        </p>
                                                    </div>
                                                </div>
                                        </td>
                                        <td class="px-5 py-5 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
                                        </td>
                                        <td class="px-5 py-5 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                                        </td>
                                        <td class="px-5 py-5 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">70</p>
                                        </td>
                                        <td class="px-5 py-5 bg-white text-sm">
                                            <span
                                                class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                                <span aria-hidden
                                                    class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                            <span class="relative">Inactive</span>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;