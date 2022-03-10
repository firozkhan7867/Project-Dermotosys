import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Navbar.css";
import { Button } from "@material-ui/core";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const btnstyle = { margin: "8px 0" };
  const [auth, setAuth] = useState(false);
  if (auth) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <FaHandHoldingMedical className="navbar-icon" />
            <b>CloudMD</b>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                Our Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links">
                Contact Us
              </Link>
            </li>
            <li className="nav-item-button">
              <Button
                type="submit"
                color="primary"
                variant="primary"
                style={btnstyle}
                fullWidth
                onClick={() => setAuth(true)}
              >
                Consult
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
