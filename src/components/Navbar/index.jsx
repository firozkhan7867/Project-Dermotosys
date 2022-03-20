import React, { useState } from 'react'
import "./NavbarCss.css";
import { Nav,NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import { useLocation,Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
import logo from '../img/logo.png';

const Navbar = ({ logout, isAuthenticated }) => {
    console.log(window.location.pathname);
    const location = useLocation();
    const [showmedia, setshowmedia] = useState(false);
    const handleLogout = () =>{
        isAuthenticated = false;
    }
  return (
    <Nav className='shadow-md lg:pl-10 lg:pr-5 z-20  w-full'>
        <NavLink to="/" className={"ml-5 mt-8"}>
            <img src={logo} alt="" height="200px" width="200px"/>
        </NavLink>
        <Bars onClick={() => setshowmedia(!showmedia)} />
        <NavMenu className={showmedia ? "nav-links-mobile" : "nav-links" }>
            <Link to="/">
            <button class="border-2 hover:bg-blue-300 text-gray-600 font-semibold py-2 px-4 rounded-xl mx-2">
                Home
            </button></Link>
            <Link to="/">
            <button class="border-2 hover:bg-blue-300 text-gray-600 font-semibold py-2 px-4 rounded-xl mx-2">
                About Us
            </button></Link>
            <Link to="/">
            <button class="border-2 hover:bg-blue-300 text-gray-600 font-semibold py-2 px-4 rounded-xl mx-2">
                Our Services
            </button></Link>
             {/* <NavLink to={"/patientslist"}>
                 PatientList
             </NavLink>
             <NavLink to={"/doctordashboard"}>
                 Doctor Dashboard
             </NavLink>
             <NavLink to={"/patientdashboard"}>
                 Patient Dashboard
             </NavLink>
             <NavLink to={"/doctorSchedule"}>
                    Doctor Schedule
             </NavLink> */}
             {/* <NavLink to={"/chat"}>
                    Chat
             </NavLink> */}
        </NavMenu>
        <NavBtn>
            {isAuthenticated 
                ? 
                <div>
                    <Link to="/makeappointment">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                        Book your Slot
                    </button></Link>
                    <Link to="/">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl" onClick={handleLogout}>
                    Logout
                    </button></Link>
                </div>
                :
                <div>   
                    {(location.pathname === "/login")?
                    <Link to="/signup">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mx-2">
                    Register
                    </button></Link>:
                    <Link to="/login">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mx-2">
                    Login
                    </button></Link>
                    }
                </div>
            }
        </NavBtn>
        {/* <NavBtn>
            {isAuthenticated 
                ? 
                <div>
                    <NavBtnLink to={""}>
                        Book your slot
                    </NavBtnLink>
                    <NavBtnLink to={""} onClick={logout}>
                        Logout
                    </NavBtnLink>
                </div>
                :
                <div>   
                    {(location.pathname === "/login")?
                    <NavLink to={"/signup"}>
                        Register
                    </NavLink>:
                    <NavLink to={"/login"}>
                        Login
                    </NavLink>
                    }
                </div>
            }
        </NavBtn> */}
    </Nav>
  )
}



const mapsStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapsStateToProps , { logout })(Navbar);