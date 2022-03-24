import React, {useState} from "react";
import patient from "../img/patient.jpg";
import { Link } from "react-router-dom";
import { FaBirthdayCake,FaCloudUploadAlt } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import SideBar from "./SideBar";
import { connect } from "react-redux";
import { updatePatientProfile } from "../../actions/auth";



const Profile_settings = ({isAuthenticated,updatePatientProfile,userData}) => {
  const [formData, setFormData] = useState({ first_name:"",last_name:"",phone:"",dob:"",blood:"",address:"",city:"",state:"",country:"",zip:"",email: "" });

  const { first_name,last_name,phone,dob,blood,address,city,state,country,zip,email } = formData;

  const [img,setImg] =useState(null);
  const filename=null;


  const onChange = (e) => 
    setFormData({ ...formData, [e.target.name]: e.target.value });

//     var data = new FormData();
// var imagedata = document.querySelector('input[type="file"]').files[0];
// data.append("data", imagedata);

  // if (isAuthenticated) {
  //   return <Navigate to="/patientdashboard" />;
  // }
  const initialValues = {
    first_name:"",
    last_name:"",
    phone:"",
    dob:"",
    blood:"",
    address:"",
    city:"",
    state:"",
    country:"",
    zip:"",
    email: "", 
    password: "" 
    
  };

  const update = () => {
    // console.log(first_name,last_name,phone,dob,blood,address,city,state,country,zip,email,profile);
    updatePatientProfile(first_name,last_name,phone,dob,blood,address,city,state,country,zip,img,userData.id);
  }
    // if (!isAuthenticated) {
    //     return <Navigate to="/login" />;
    //   }
  return (
    <div className="">
      <div className="h-24" style={{ backgroundColor: "#15558d" }}>
        <div className="flex justify-content-start pt-4">
          <div className="pl-4 text-sm text-white">
            <p>Home / Profile</p>
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
          
            <form>
                <div className=" flex lg:flex-row flex-col ml-6">
                    <img src={patient} className="w-28" />
                    <div className="flex flex-col mt-8 ml-6">
                          <label className="flex  px-4 py-2 rounded-full text-white font-bold bg-[#03a9f4] hover:bg-[#2ca5dd] cursor-pointer hover:text-white">
                          <FaCloudUploadAlt className="mr-2 text-xl" />{img ? img.name :"Upload Photo"}
                          <input type='file' class="hidden"
                          onChange={(event) => {
                            setImg(event.target.files[0]);
                          }} name="profile"/>
                          </label>
                          <p className="text-gray-400 text-xs mt-2">Allowed JPG, GIF or PNG.</p>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col">
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label className="text-md font-semibold text-gray-600">First Name</label>
                    <input type='text' name="first_name" value={first_name} 
                      onChange={(e) => onChange(e)}
                      required className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-md text-black outline-none"/>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label class="text-lg text-gray-600">Last Name</label>
                    <input type='text' name="last_name" value={last_name} 
                      onChange={(e) => onChange(e)}
                      required className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-md text-black outline-none"/>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col">
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label className="text-lg text-gray-600">Email</label>
                    <input type='email' name="email" value={email}  
                      onChange={(e) => onChange(e)}className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-md text-black outline-none"/>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label className="text-lg text-gray-600">Phone Number</label>
                    <input type='text' name="phone" value={phone}  
                      onChange={(e) => onChange(e)}
                      required className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-md text-black outline-none"/>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col">
                    <div className="datepicker lg:w-1/2 md:w-1/2 w-f flex flex-col mx-2 lg:mx-4" >
                    <label className="text-lg text-gray-600">Date of Birth</label>
                    <input type='date' name="dob" value={dob} 
                      onChange={(e) => onChange(e)}
                      required className="border border-gray-300 w-fullo text-sm py-2 px-2 my-2 rounded-md text-black outline-none"/>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label className="text-lg text-gray-600">Blood Group</label>
                    <select 
                    className='border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-lg text-black outline-none' 
                    onChange={(e) => onChange(e)}
                    required name="blood" value={blood}>
                        <option className='px-2 py-2 hover:bg-[#03a9f4]'  value="A+">A+</option>
                        <option className='px-2 py-2 hover:bg-[#03a9f4]' value="A-">A-</option>
                        <option className='px-2 py-2 hover:bg-[#03a9f4]' value="B+">B+</option>
                        <option className='px-2 py-2 hover:bg-[#03a9f4]' value="B-">B-</option>
                        <option className='px-2 py-2 hover:bg-[#03a9f4]' value="AB+">AB+</option>
                        <option className='px-2 py-2 hover:bg-[#03a9f4]' value="AB-">AB-</option>
                        <option className='px-2 py-2 hover:bg-[#03a9f4]' value="O+">O+</option>
                        <option className='px-2 py-2 hover:Og-[#03a9f4]' value="O-">O-</option>
                    </select>
                    </div>
                </div>
                <div className="datepicker flex flex-col mx-2 lg:mx-4" >
                <label className="text-lg text-gray-600">Address</label>
                <input type='text' name="address" value={address} 
                      onChange={(e) => onChange(e)}
                      required className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-md text-black outline-none"/>
                </div>
                <div className="flex lg:flex-row flex-col">
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label className="text-lg text-gray-600">City</label>
                    <input type='text' name="city" value={city} 
                      onChange={(e) => onChange(e)}
                      required className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-md text-black outline-none"/>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label className="text-lg text-gray-600">State</label>
                    <input type='text' name="state" value={state} 
                      onChange={(e) => onChange(e)}
                      required className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-md text-black outline-none"/>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col">
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label className="text-lg text-gray-600">Country</label>
                    <input type='text' name="country" value={country} 
                      onChange={(e) => onChange(e)}
                      required className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-md text-black outline-none"/>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col mx-2 lg:mx-4">
                    <label className="text-lg text-gray-600">Zip Code</label>
                    <input type='text' name="zip" value={zip} 
                      onChange={(e) => onChange(e)}
                      required className="border border-gray-300 w-full text-sm py-2 px-2 my-2 rounded-md text-black outline-none"/>
                    </div>
                </div>
                <button type="button" onClick={update} className="bg-[#09e5ab] hover:bg-[#7edec8] text-white text-lg font-bold py-2 px-4 ml-8 mt-4 borde rounded">
                Save Changes
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}




const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  userData: state.auth.userData,
});

export default connect(mapStateToProps, { updatePatientProfile })(Profile_settings);
