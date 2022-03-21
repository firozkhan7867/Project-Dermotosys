import React, { useState } from "react";
import patient from "../img/patient.jpg";
import { RiUserLocationFill, RiAddCircleFill } from "react-icons/ri";
import { AiOutlineFileAdd } from "react-icons/ai";

const MakePrescription = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="">
      <div className="h-24" style={{ backgroundColor: "#15558d" }}>
        <div className="flex justify-content-start pt-4">
          <div className="pl-4 text-sm text-white">
            <p>Home / Prescription</p>
          </div>
        </div>
        <div className="flex justify-content-start">
          <div className="pl-4 text-xl font-bold text-white">
            <p>Add Prescription</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-6 grid grid-cols-1 md:grid-cols-1 lg:flex  gap-2 w-full items-start">
        <div className="bg-grey-100 shadow-md bg-white sm:w-5/12 md:w-full lg:w-4/12 w-full">
          <div className="w-full flex  justify-center p-2">
            <img
              src={patient}
              alt=""
              width="120"
              height="120"
              className="border-4 border-gray-200 rounded-full"
            />
          </div>
          <div className="text-center border-b-2 pb-2">
            <p className="font-semibold text-lg">Richard Wilson</p>
            <p className="flex font-normal text-gray-400 text-sm p-1 justify-center place-items-center">
              <strong className="mr-2">Patient ID: </strong> #PT0016
            </p>
            <p className="flex font-normal text-gray-400 text-sm p-1 justify-center place-items-center">
              <RiUserLocationFill className="mr-2" />
              Newyork, USA
            </p>
          </div>
          <div className="flex">
            <div className="m-4 font-normal text-gray-500 flex flex-col basis-1/2">
              <strong>Phone</strong>
              <strong>Age</strong>
              <strong>Blood Group</strong>
            </div>
            <div className="m-4 font-normal text-gray-500 flex flex-col justify-end text-right basis-1/2">
              <span>+1 123 3245 695</span>
              <span>23</span>
              <span>AB+</span>
            </div>
          </div>
        </div>
        <div className="w-full px-3 py-2 bg-white h-screen ">
          <div className="m-2 border-b-2">
            <p className="text-2xl p-2 font-semibold text-gray-500">
              Add Prescription
            </p>
          </div>
          <div className="flex">
            <div className="m-4 font-normal text-gray-500 flex flex-col basis-1/2">
              <p className="text-xl font-medium text-black mb-2">
                Dr. Darren Elder
              </p>
              <span>Dentist</span>
              <span>NewYork, United States</span>
            </div>
            <div className="m-4 font-normal text-gray-500 flex flex-col justify-end text-right basis-1/2">
              <p className="text-xl font-medium text-black mb-2">
                1 Novemeber 2019
              </p>
              <span>#INV001</span>
            </div>
          </div>
          <div className="m-2">
            <div
              className="flex text-lg ml-4 mr-4 font-medium text-[#20c0f3] hover:text-[#09e5ab] hover:cursor-pointer justify-end"
              onClick={() => setShowModal(true)}
            >
              <AiOutlineFileAdd className="mr-1 mt-1" />
              Add Slot
            </div>
          </div>
          <div class="bg-white   w-full">
            <div className="w-full">
              <div class="sm:-mx-8 px-4 sm:px-8 py-4 overflow-y-auto">
                <div class="inline-block min-w-full shadow overflow-hidden">
                  <table class="min-w-full leading-normal text-center">
                    <thead>
                      <tr>
                        <th class="px-5 py-3 border-b-2  border-gray-200 w-3/12 text-center text-sm  text-gray-700 uppercase tracking-wider">
                          Medicine
                        </th>
                        <th class="px-5 py-3 border-b-2  border-gray-200 w-3/12 text-center text-sm  text-gray-700 uppercase tracking-wider">
                          Days
                        </th>
                        <th class="px-5 py-3 border-b-2  border-gray-200 w-3/12 text-center text-sm  text-gray-700 uppercase tracking-wider">
                          Tablets
                        </th>
                        <th class="px-5 py-3 border-b-2  border-gray-200 w-3/12 text-center text-sm  text-gray-700 uppercase tracking-wider">
                          Shedule
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
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Prescription</h3>
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
                <div className="relative p-6 flex-auto w-[500px] mr-6">
                  <div className="flex flex-row mb-2">
                    <label className="text-lg text-gray-800 w-1/3">
                      Medicine:
                    </label>
                    <input
                      type="text"
                      className="border-b-2 border-b-gray-400 w-full bg-white rounded-2 text-sm py-1 px-2 rounded-1xl text-black outline-none"
                    ></input>
                  </div>
                  <div className="flex flex-row mb-2">
                    <label className="text-lg text-gray-800 w-1/3">
                      Total Tabs:
                    </label>
                    <input
                      type="text"
                      className="border-b-2 border-b-gray-400 w-full bg-white rounded-2 text-sm py-1 px-2 rounded-1xl text-black outline-none"
                    ></input>
                  </div>
                  <div className="flex flex-row mb-2">
                    <label className="text-lg text-gray-800 w-1/3">
                      Tabs Per Day:
                    </label>
                    <input
                      type="text"
                      className="border-b-2 border-b-gray-400 w-full bg-white rounded-2 text-sm py-1 px-2 rounded-1xl text-black outline-none"
                    ></input>
                  </div>
                  <div className="flex flex-row">
                    <label className="text-lg text-gray-800 mr-10">
                      Schedule:
                    </label>
                    <div className="flex flex-col justify-around">
                      <div class="form-check">
                        <input
                          class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Morning"
                        />
                        <label
                          class="form-check-label inline-block text-gray-500"
                          for="Morning"
                        >
                          Morning
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Afternoon"
                        />
                        <label
                          class="form-check-label inline-block text-gray-500"
                          for="Afternoon"
                        >
                          Afternoon
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Evening"
                        />
                        <label
                          class="form-check-label inline-block text-gray-500"
                          for="Evening"
                        >
                          Evening
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="Night"
                        />
                        <label
                          class="form-check-label inline-block text-gray-500"
                          for="Night"
                        >
                          Night
                        </label>
                      </div>
                    </div>
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
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default MakePrescription;
