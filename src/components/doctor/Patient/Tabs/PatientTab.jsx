import React, { useState } from "react";
import "./Patienttabs.css";
import Table from "../Table"

function Tabs({name1,name2}) {
  const [toggleState, setToggleState] = useState(1);
  
  const toggleTab = (index) => {
    setToggleState(index);
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
            <Table n1="Doctor" n2="Appt date" n3="booking Date" n4="Follow Up" n5="Invoice" d={toggleState}/>
        </div>
        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          <Table n1="Created by" n2="Alloted date" n3="Presciption name" n4="Deadline" n5="Prescription" d={toggleState}/>
        </div>
      </div>
    </div>
  );
}

export default Tabs;