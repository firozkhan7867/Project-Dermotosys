import React from 'react'
import {BsCheckLg} from "react-icons/bs"

const Prescription = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 py-8 mb-8">
        <div className="bg-white lg:w-2/3 shadow-lg  pb-32 mb-4">
            <div className="grid grid-cols-2 py-8 ">
                <img src={require("./img/prescleft.png")} alt="" className="img-responsive h-32 " />
                <div className="flex justify-end pr-10">
                    <img src={require("./img/prescright.jpg")} alt="" className="img-responsive h-40" />
                </div>
            </div>
            <div class="inline-block min-w-full px-8 overflow-hidden">
              <table class="min-w-full leading-normal text-center">
                <thead>
                    <tr>
                    <th class="px-4 py-3 border-b-2  border-white bg-teal-200 border-r-2 w-1/10 text-center text-[14px]  text-gray-700 tracking-wider">
                        S.no
                    </th>
                    <th class="px-4 py-3 border-b-2  border-white bg-teal-200 border-r-2 w-3/10 text-center text-[14px]  text-gray-700 tracking-wider">
                        Medicine Name
                    </th>
                    <th class="px-4 py-3 border-b-2  border-white bg-teal-200 border-r-2 w-1/10 text-center text-[14px]  text-gray-700 tracking-wider">
                        Quantity
                    </th>
                    <th class="px-4 py-3 border-b-2  border-white bg-teal-200 border-r-2 w-1/10 text-center text-[14px]  text-gray-700 tracking-wider">
                        Days
                    </th>
                    <th class="px-4 py-3 border-b-2  border-white bg-teal-200 border-r-2 w-4/10 text-center text-[14px]  text-gray-700 tracking-wider">
                        <div className="flex flex-row justify-between">
                        <p>Mrng</p>
                        <p>Aftn</p>
                        <p>Evng</p>
                        <p>Nii</p>
                        </div>
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">hello</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm align-begin">
                        <p class="text-gray-900 whitespace-no-wrap">hello</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">hello</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">hello</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex flex-row justify-between">
                        <p><BsCheckLg /></p>
                        <p><BsCheckLg /></p>
                        <p></p>
                        <p><BsCheckLg /></p>
                        </div>
                    </td>
                    </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-row-reverse mr-24 my-16">
                <div className="flex flex-col">
                <span className="text-xl">_________________________</span>
                <p className="text-xl text-teal-400 ml-16 mt-2">Signature</p>
                </div>
            </div>
            <div className="flex flex-col  ml-24 my-16">
                <p className="text-xl text-teal-400 ml-6 mt-2">Hospital Address</p>
                <span className="text-xl">_________________________</span>
            </div>
        </div>
        <button type="button" className="bg-[#09e5ab] hover:bg-[#7edec8] text-white text-md font-bold py-2 px-4 ml-8 mt-4 borde rounded">
            Print
        </button>
    </div>
  )
}

export default Prescription