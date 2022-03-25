import React,{useState,useEffect} from 'react'
import patient from '../../img/patient.jpg';

const AppointmentCard = ({data}) => {


    
    const [showModal, setShowModal] = useState(false);


    const time = (timeString) => {
        var hourEnd = timeString.indexOf(":");
        var H = +timeString.substr(0, hourEnd);
        var h = H % 12 || 12;
        var ampm = (H < 12 || H === 24) ? " AM" : " PM";
        timeString = h + timeString.substr(hourEnd, 3) + ampm;
        return timeString;
    }
    
  return (
    <div>
        <div className="bg-white shadow-sm mb-1 flex justify-between p-3">
            <div className="p-1 flex">
            <img src={patient} alt="" width="120" height="120"/>
            <div className="text-left ml-8 p-2">
                <p className="font-semibold text-xl mb-2">{data.PatientsName}</p>
                <p className="text-gray-400 font-normal hover:font-medium text-sm">On {data.AppoinmentsDay}</p>
                <p className="text-gray-400 font-normal hover:font-medium text-xs p-0.5">{time(data.AppoinmentsStart)} to {time(data.AppoinmentsEnd)}</p>
                <p className="text-gray-400 font-normal hover:font-medium text-xs p-0.5">{data.PatientsGender}, {data.PatientsAge} </p>
                <p className="text-gray-400 font-normal hover:font-medium text-xs p-0.5">+91 {data.PatientsPhone}</p>
            </div>
            </div>
            <div className="flex m-4 pt-8">
                <div className="">
                <button type="button" className="bg-slate-100 text-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " onClick={() => setShowModal(true)}><i className="fa fa-eye-open"></i>View</button>
                <button type="button" className="bg-green-100 text-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Reschedule</button>

                </div>
            </div>
        </div>



        {showModal ? (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Appointment Details
                </h3>
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
              <div className="relative p-6 flex-auto w-[500px]">
                <div className="px-3 py-2 text-gray-600 w-10/12">
                    <div className="flex justify-between my-2"> 
                        <div className="">Patient Name : </div>
                        <div className="">{data.PatientsName}</div>
                    </div>
                    <div className="flex justify-between my-2"> 
                        <div className="">Appointment Day : </div>
                        <div className="">{data.AppoinmentsDay}</div>
                    </div>
                    <div className="flex justify-between my-2"> 
                        <div className="">Appointment Time : </div>
                        <div className="">{time(data.AppoinmentsStart)}</div>
                    </div>
                    <div className="flex justify-between my-2"> 
                        <div className="">Patient Age : </div>
                        <div className="">{data.PatientsAge}</div>
                    </div>
                    <div className="flex justify-between my-2"> 
                        <div className="">Gender  : </div>
                        <div className="">{data.PatientsGender}</div>
                    </div>
                    <div className="flex justify-between my-2"> 
                        <div className="">Patient Email : </div>
                        <div className="">{data.PatientsEmail}</div>
                    </div>
                    <div className="flex justify-between my-2"> 
                        <div className="">Day : </div>
                        <div className="">{data.AppoinmentsDay}</div>
                    </div>
                    
                </div>
                <div className="">
                    <h1 className='px-2 py-2 font-semibold text-xl'>Message  </h1>
                    <textarea name="" id="" cols="" className='w-full border-2 rounded-lg h-20 px-4 py-2 text-lg'  rows="5">
                        {data.PatientsMessage}
                    </textarea>
                </div>  
              </div>
              {/*footer*/}
              {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
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
                //   onClick={() => saveSlot(false) }
                >
                  Save Changes
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}

    </div>
  )
}


export default AppointmentCard;
