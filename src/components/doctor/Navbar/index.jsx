import React, { useState } from 'react'
import "./NavbarCss.css";
import { Nav,NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = () => {

    const [showmedia, setshowmedia] = useState(false);
  return (
    <Nav className='shadow-lg lg:pl-10 lg:pr-5'>
        <NavLink to="/" className={"ml-5"}>
            <h1>Logo</h1>
        </NavLink>
        <Bars onClick={() => setshowmedia(!showmedia)} />
        <NavMenu className={showmedia ? "nav-links-mobile" : "nav-links" }>
             <NavLink to={""} >
                 Home
             </NavLink>
             <NavLink to={""}>
                 Services
             </NavLink>
             <NavLink to={"/patientslist"}>
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
             </NavLink>
             <NavLink to={"/chat"}>
                    Chat
             </NavLink>
        </NavMenu>
        <NavBtn>
            <NavLink to={"/login"}>
                 Login
             </NavLink>
             /
             <NavLink to={"signup"}>
                Register
             </NavLink>
             <NavBtnLink to={""}>
                Book your slot
             </NavBtnLink>
        </NavBtn>
    </Nav>
  )
}

export default Navbar;