import React, { useState, useEffect } from "react";
import "./Schedule.css";
import {AiOutlineFileAdd } from "react-icons/ai";
import SideBar from './SideBar';
import ScheduleItems from "./schedule/ScheduleItems";
import { connect } from "react-redux";
import { get_schedule_data, addSlot, delSlot } from "../../actions/auth.jsx";
import { ImCancelCircle } from "react-icons/im";

const Schedule = ({ get_schedule_data, schedule_data, addSlot, delSlot }) => {
  useEffect(() => {
    get_schedule_data(1);
  }, []);
  const [day, setDay] = useState();
  const [startval, setStartVal] = useState("10:00");
  const [endval, setEndVal] = useState("20:00");

  const [details, setDetails] = useState(schedule_data["Sunday"]);
  const [showModal, setShowModal] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const delSlots = (id) => {
    setDetails((old) => {
      return old.filter((arr) => {
        return arr.id !== id;
      });
    });
    // console.log(id);
    delSlot(id);
  };

  const saveSlot = (value) => {
    console.log(startval);
    console.log(endval);
    console.log(day);
    addSlot(startval, endval, day);
    setShowModal(value);
  };

  const addMore = () => {
    var data = { start: "-", end: "-" };
    setDetails((item) => {
      return [...item, data];
    });
  };

  const toggleTab = (index) => {
    const cnv = {
      1: "Sunday",
      2: "Monday",
      3: "Tuesday",
      4: "Wednesday",
      5: "Thursday",
      6: "Friday",
      7: "Saturday",
    };
    setDetails(schedule_data[cnv[index]]);
    setToggleState(index);
    setDay(cnv[index]);
  };

  return (
    <div className="tt">
      <div
        className="container-fluid h-24"
        style={{ backgroundColor: "#15558d" }}
      >
        <div className="flex justify-content-start pt-4">
          <div className="pl-4 text-sm text-white">
            <p>Home / Doctor</p>
          </div>
        </div>
        <div className="flex justify-content-start">
          <div className="pl-4 text-xl font-bold text-white">
            <p>Schedule Timings</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50  p-6 grid grid-cols-1 md:grid-cols-1 lg:flex  gap-2 w-full">
        <SideBar />
        <div className=" w-full  px-3 h-screen ">
          <div className="bg-white shadow-sm mb-1 text-left  p-3">
            <div className="p-3 text-gray-700 text-xl font-bold">
              Schedule Timings
            </div>
            <p className="px-3 py-2">Timing Slot Duration</p>
            {/* <select name="duration" id="" className='ml-4 px-4 py-2 rounded-md text-md w-2/12 border-2 '> 
                        <option value="" className='px-2 py-2'>-</option>
                        <option value="" className='px-2 py-2'>15 min</option>
                        <option value="" className='px-2 py-2'>30 min</option>
                        <option value="" className='px-2 py-2'>45 min</option>
                        <option value="" className='px-2 py-2'>1 Hour</option>
                    </select> */}
            <div className="mt-8 mx-3">
              <div className="border rounded gray-700 p-3 sm:flex sm:flex-col flex-col flex lg:grid lg:grid-cols-7 gap-4 ">
                <div
                  className={
                    toggleState === 1
                      ? " px-5 py-2 border-[#ff4877] rounded-md border text-white bg-[#f14772] cursor-pointer text-center active-day"
                      : "px-5 py-2 border gray-500 text-center"
                  }
                  onClick={() => toggleTab(1)}
                >
                  {" "}
                  SUNDAY
                </div>
                <div
                  className={
                    toggleState === 2
                      ? " px-5 py-2 border-[#ff4877] rounded-md border text-white bg-[#ff4877] cursor-pointer text-center active-day"
                      : "px-5 py-2 border cursor-pointer gray-500 text-center"
                  }
                  onClick={() => toggleTab(2)}
                >
                  {" "}
                  MONDAY
                </div>
                <div
                  className={
                    toggleState === 3
                      ? " px-5 py-2 border-[#ff4877] rounded-md border text-white bg-[#ff4877] cursor-pointer text-center active-day"
                      : "px-5 py-2 border cursor-pointer gray-500 text-center"
                  }
                  onClick={() => toggleTab(3)}
                >
                  {" "}
                  TUESDAY
                </div>
                <div
                  className={
                    toggleState === 4
                      ? " px-5 py-2 border-[#ff4877] rounded-md border text-white bg-[#ff4877] cursor-pointer text-center active-day"
                      : "px-5 py-2 border cursor-pointer gray-500 text-center"
                  }
                  onClick={() => toggleTab(4)}
                >
                  {" "}
                  WEDNESDAY
                </div>
                <div
                  className={
                    toggleState === 5
                      ? " px-5 py-2 border-[#ff4877] rounded-md border text-white bg-[#ff4877] cursor-pointer text-center active-day"
                      : "px-5 py-2 border cursor-pointer gray-500 text-center"
                  }
                  onClick={() => toggleTab(5)}
                >
                  {" "}
                  THURSDAY
                </div>
                <div
                  className={
                    toggleState === 6
                      ? " px-5 py-2 border-[#ff4877] rounded-md border text-white bg-[#ff4877] cursor-pointer text-center active-day"
                      : "px-5 py-2 border cursor-pointer gray-500 text-center"
                  }
                  onClick={() => toggleTab(6)}
                >
                  {" "}
                  FRIDAY
                </div>
                <div
                  className={
                    toggleState === 7
                      ? " px-5 py-2 border-[#ff4877] rounded-md border text-white bg-[#ff4877] cursor-pointer text-center active-day"
                      : "px-5 py-2 border cursor-pointer gray-500 text-center"
                  }
                  onClick={() => toggleTab(7)}
                >
                  {" "}
                  SATURDAY
                </div>
              </div>
              <div className="border rounded p-3 gray-700">
                <div className="flex justify-between">
                  <div className="text-xl text-gray-700 font-semibold">
                    Time Slots
                  </div>
                  {/* { details.length > 0 ?
                                 <div className="flex text-lg ml-4 mr-4 font-medium text-[#20c0f3] hover:text-[#09e5ab] hover:cursor-pointer" onClick={() => setShowModal(true)}  > 
                                     <FiEdit className="mr-1 mt-1" />Edit</div> :
                                 <div className="flex text-lg ml-4 mr-4 font-medium text-[#20c0f3] hover:text-[#09e5ab] hover:cursor-pointer">
                                     <AiOutlineFileAdd className="mr-1 mt-1" />Add Slot</div>
                                } */}
                  <div
                    className="flex text-lg ml-4 mr-4 font-medium text-[#20c0f3] hover:text-[#09e5ab] hover:cursor-pointer"
                    onClick={() => setShowModal(true)}
                  >
                    <AiOutlineFileAdd className="mr-1 mt-1" />
                    Add Slot
                  </div>
                </div>
                <div className="disp mt-5 ml-2 xs:flex xs:flex-col text-white flex-col flex lg:grid xl:grid-cols-4 sm:grid sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3 l gap-4">
                  {/* : " no mt-5 ml-3 sm:flex sm:flex-col text-white flex-col flex lg:grid lg:grid-cols-6 gap-4"}>  */}
                  {details.length > 0 ? (
                    details.map((detail) => (
                      <div className=" flex px-3 py-2 bg-[#d9534f] items-center justify-center rounded-md">
                        <div className="">
                          {detail.start} To {detail.end}{" "}
                        </div>{" "}
                        <div
                          className="hover:cursor-pointer"
                          onClick={() => {
                            delSlots(detail.id);
                          }}
                        >
                          {" "}
                          <ImCancelCircle className="text-md text-white ml-2" />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className=" px-3 py-2 text-black">Not Available</p>
                  )}
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
                  <h3 className="text-3xl font-semibold">Add Time Slots</h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold "
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-red-600 font-bold float-right rounded-full  h-6 w-6 text-3xl">
                      ??
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto w-[500px]">
                  {/* { details.length > 0 ?
                  details.map((detail, index) => (
                          <ScheduleItems start={detail.start} end={detail.end} id={index} onSelect={deleteItem}/>    
                  )) :
                  <p className=" px-3 py-2 text-black">
                          Not Available   
                  </p>
              } */}
                  <ScheduleItems
                    day={day}
                    setStartVal={setStartVal}
                    start={startval}
                    end={endval}
                    setEndVal={setEndVal}
                  />

                  {/* <div className=" mt-5 flex items-center text-lg justify-left text-blue-500 hover:cursor-pointer " onClick={addMore}>
                <RiAddCircleFill  className='text-blue-500' /> Add More
              </div> */}
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
                    onClick={() => saveSlot(false)}
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

const mapStateToProps = (state) => ({
  schedule_data: state.auth.schedule_data,
});

export default connect(mapStateToProps, {
  get_schedule_data,
  addSlot,
  delSlot,
})(Schedule);
