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
            <a className="block mt-4 lg:inline-block lg:mt-0 text-blue-700 font-semibold text-xl hover:text-blue-400 mx-2">
                Home
            </a></Link>
            <Link to="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-blue-700 font-semibold text-xl hover:text-blue-400 mx-2">
                About Us
            </a></Link>
            <Link to="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-blue-700 font-semibold text-xl hover:text-blue-400 mx-2">
                Our Services
            </a></Link>
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
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Book your Slot
                    </button></Link>
                    <Link to="/">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleLogout}>
                    Logout
                    </button></Link>
                </div>
                :
                <div>   
                    {(location.pathname === "/login")?
                    <Link to="/signup">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2">
                    Register
                    </button></Link>:
                    <Link to="/login">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2">
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