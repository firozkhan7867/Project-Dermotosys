import React,{useState,useEffect} from 'react'
import SideBar from './SideBar';
import {get_appointment_data} from "../../actions/auth";
import { connect } from 'react-redux';
import AppointmentCard from './Appointment/AppointmentCard';

const PatientsList = ({get_appointment_data}) => {
  // const [appointmentdata, setAppointmentData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    
    const fetchData = async (id) => {
      const data = await get_appointment_data(id);
      setData(data);
    }
    // console.log(userData);
    if(localStorage.getItem('account')){
      const userData = JSON.parse(localStorage.getItem('account'));
      // console.log(userData);
      fetchData(userData.id)
    }
  }, []);
  

  
  return (
      <div className="">
          <div className="container-fluid h-24" style={{backgroundColor: "#15558d"}}>
          <div className="flex justify-content-start pt-4">
              <div className="pl-4 text-sm text-white">
                  <p>Home / Doctor</p>
              </div>
          </div>
          <div className="flex justify-content-start">
              <div className="pl-4 text-xl font-bold text-white">
                  <p>Patient List</p>
              </div>
          </div>
      </div>
      <div className="bg-gray-50 flex p-6">
        <SideBar />
        <div className=" w-full md:w-full lg:w-full  px-3 h-screen overflow-x-auto ">
                
                  {data.map((app) => (
                //     <div className="bg-white shadow-sm mb-1 flex justify-between p-3">
                //     <div className="p-1 flex">
                //     <img src={patient} alt="" width="120" height="120"/>
                //     <div className="text-left ml-8 p-2">
                //         <p className="font-semibold text-lg">{app.PatientsName}</p>
                //         <p className="text-gray-400 font-normal hover:font-medium text-sm">14 Nov 2019, {app.AppoinmentsStart} to {app.AppoinmentsEnd}</p>
                //         <p className="text-gray-400 font-normal hover:font-medium text-xs p-0.5">Newyork, United States</p>
                //         <p className="text-gray-400 font-normal hover:font-medium text-xs p-0.5">richard@example.com</p>
                //         <p className="text-gray-400 font-normal hover:font-medium text-xs p-0.5">+1 923 782 4575</p>
                //     </div>
                //     </div>
                //     <div className="flex m-4 pt-8">
                //         <div className="">
                //         <button type="button" class="bg-slate-100 text-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "><i class="fa fa-eye-open"></i>View</button>
                //         <button type="button" class="bg-green-100 text-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Reschedule</button>

                //         </div>
                //     </div>
                // </div>
                <div className="">
                  {/* hi */}
                  <AppointmentCard data={app} />
                </div>
                  ))}
                
                
          </div>
      </div>
      </div>
      
      
  )
}



const mapStateToProps = (state) => ({
  // userApptData: state.auth.userApptData
  // userData: state.auth.userData,
});



export default connect(mapStateToProps,{get_appointment_data} )(PatientsList);