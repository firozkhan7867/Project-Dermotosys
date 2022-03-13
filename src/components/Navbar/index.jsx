import React, { useState } from 'react'
import "./NavbarCss.css";
import { Nav,NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
import logo from '../img/logo.png';

const Navbar = ({ logout, isAuthenticated }) => {

    const [showmedia, setshowmedia] = useState(false);
  return (
    <Nav className='shadow-lg lg:pl-10 lg:pr-5'>
        <NavLink to="/" className={"ml-5 mt-8"}>
            <img src={logo} alt="" height="200px" width="200px"/>
        </NavLink>
        <Bars onClick={() => setshowmedia(!showmedia)} />
        <NavMenu className={showmedia ? "nav-links-mobile" : "nav-links" }>
             <NavLink to={""} >
                 Home
             </NavLink>
             <NavLink to={""}>
                 About
             </NavLink>
             <NavLink to={""}>
                 Services
             </NavLink>
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
                    <NavBtnLink to={""}>
                        Book your slot
                    </NavBtnLink>
                    <NavBtnLink to={""} onClick={logout}>
                        Logout
                    </NavBtnLink>
                </div>

                :
                <div className="flex">   
                    <NavLink to={"/login"}>
                        Login
                    </NavLink>
                    <NavLink to={""}>
                        /
                    </NavLink>
                    <NavLink to={"signup"}>
                        Register
                    </NavLink>
                </div>
            }
        </NavBtn>
    </Nav>
  )
}



const mapsStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapsStateToProps , { logout })(Navbar);