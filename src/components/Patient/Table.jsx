import React,{ useState, useEffect} from 'react'
import data from './appointments.json'
import presc from './prescription.json'
import {AiOutlinePrinter,AiOutlineEye} from 'react-icons/ai'

const Table = ({d}) => {
    const [details,setDetails] = useState(data);
    const [dd,setDd] = useState(d);
    useEffect(() => {
        if (d === 1){
            setDetails(data);
           }
           else if(d === 2){
            setDetails(presc)
           }
      }, [d,dd]);
  return (
    <div class="bg-white   w-full">
        <div className="w-full">
            <div class="sm:-mx-8 px-4 sm:px-8 py-4 overflow-y-auto">
                <div class="inline-block min-w-full shadow overflow-hidden">
                    <table class="min-w-full leading-normal text-center">
                    <thead>
                            <tr>
                                {details.title.map((n) => (
                                <th
                                    class="px-5 py-3 border-b-2  border-gray-200 w-3/12 text-center text-sm  text-gray-700 uppercase tracking-wider">
                                    {n}
                                </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {details.data.map((detail) => (
                                <tr>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div class="flex justify-center">
                                            <div class="flex-shrink-0 w-10 h-10">
                                                <img class="w-full h-full rounded-full"
                                                    src={detail.url}
                                                    alt="" />
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    {detail.fullName}
                                                </p>
                                                <p  className="text-gray-500 text-left whitespace-no-wrap">
                                                    {detail.id}    
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm align-begin">
                                        <p class="text-gray-900 whitespace-no-wrap">{detail.apptdate}</p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                        {detail.bookingdate}
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {detail.followup}
                                        </p>
                                    </td>
                                    <td>
                                    <div className="flex border-b px-5 py-5 mr-0 border-gray-200 bg-white text-sm justify-center">
                                        <div className="flex">
                                        <button type="button" class="flex bg-slate-100 text-slate-800 font-small rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2 place-items-center hover:bg-slate-200">
                                            <AiOutlinePrinter className="mr-2" />Print</button>
                                        <button type="button" class="flex bg-green-100 ml-4 text-green-800 font-small rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2 place-items-center hover:bg-green-200">
                                            <AiOutlineEye className="mr-2" />View</button>
                                
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                    {/* <div
                        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span class="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 5 of 50 Entries
                        </span>
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button
                                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
                            &nbsp; &nbsp;
                            <button
                                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table