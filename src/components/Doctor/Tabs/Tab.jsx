import React, { useState } from "react";
import "./tabs.css";
import Table from "../Table"

function Tabs() {
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
            Upcoming
            </button>    
        </div>
        
        <div className="m-4 ">
            <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
            >
            Today
            </button>
        </div>
      </div>
      {/* Below will be the dashboard table  */}
      <div className="">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
            <Table d={toggleState}/>
        </div>
        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          <Table  d={toggleState}/>
        </div>
      </div>
    </div>
  );
}

export default Tabs;