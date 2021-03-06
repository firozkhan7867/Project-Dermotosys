import React, { useState,useEffect } from 'react'
import "./NavbarCss.css";
import { Nav,NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import { useLocation,Link,Navigate } from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
import logo from '../img/logo.png';

const Navbar = ({ logout, isAuthenticated }) => {
    // console.log(window.location.pathname);
    const location = useLocation();
    const [showmedia, setshowmedia] = useState(false);
    // useEffect(() => {
    //     checkAuthenticated();
    // }, []);

    if (!localStorage.getItem('isAuthenticated')){
        isAuthenticated = false;
         <Navigate to="/login" />
    }

    // const [auth, setAuth] = useState(isAuthenticated);
    // console.log(isAuthenticated)
    // const handleLogout = () =>{
    //     isAuthenticated = false;
    //     setAuth(true);
    // }
    // console.log(auth)
    // useEffect(() => {
    //     <Navigate to="/home" />
    //   }, [auth,setAuth]);
  return (
    <Nav className='shadow-md lg:pl-10 lg:pr-5 z-20  w-full'>
        <NavLink to="/" className={"ml-5 mt-8 "}>
            <img src={logo} alt="" height="200px" width="200px"/>
        </NavLink>
        <Bars onClick={() => setshowmedia(!showmedia)} />
        <NavMenu className={showmedia ? "nav-links-mobile" : "nav-links" }>
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-blue-700 font-semibold text-xl hover:text-blue-400 mx-2">
                Home
            </Link>
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-blue-700 font-semibold text-xl hover:text-blue-400 mx-2">
                About Us
            </Link>
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-blue-700 font-semibold text-xl hover:text-blue-400 mx-2">
                Our Services
            </Link>
        </NavMenu>
        <NavBtn>
            {localStorage.getItem('isAuthenticated')
                ? 
                <div>
                    <Link to="/makeappointment">
                    <button className="bg-transparent mr-5 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Book your Slot
                    </button></Link>
                    <Link to="/">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={logout}>
                    Logout
                    </button></Link>
                </div>
                :
                <div>   
                    {(location.pathname === "/login")?
                    <Link to="/signup">
                    <button className="bg-transparent mr-5 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2">
                    Register
                    </button></Link>:
                    <Link to="/login">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2">
                    Login
                    </button></Link>
                    }
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