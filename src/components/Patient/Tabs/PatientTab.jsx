import React, { useState,useEffect } from "react";
import "./Patienttabs.css";
import Table from "../Table";
import {get_appointment_data} from "../../../actions/auth";
import { connect } from 'react-redux';

function Tabs({name1,name2,get_appointment_data,userApptData,userData}) {
  const [toggleState, setToggleState] = useState(1);
  const [data, setData] = useState();

  useEffect(() => {
    get_appointment_data(userData["id"]);
}, []);
  
  const toggleTab = (index) => {
    setToggleState(index);
    setData(userApptData);
    get_appointment_data(userData["id"]);
  };

  return (
    <div className="">
      <div className="flex py-2 px-5 ">
        <div className="m-4 ">
            <button
            className={toggleState === 1 ? "tabs active-tabs " : "tabs"}
            onClick={() => toggleTab(1)}
            >
            {name1}
            </button>    
        </div>
        
        <div className="m-4 ">
            <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
            >
            {name2}
            </button>
        </div>
      </div>
      {/* Below will be the dashboard table  */}
      <div className="">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
            <Table d={toggleState} />
        </div>
        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          <Table  d={toggleState}/>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  userApptData: state.auth.userApptData,
  userData: state.auth.userData,
});



export default connect(mapStateToProps,{get_appointment_data} )(Tabs);