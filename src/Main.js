import React from "react";
import Cards from "./components/Cards";

import Sidebar from "./components/Sidebar";

const Main = () => {
  return (
    <>
      <div className="main_container">
        <Sidebar />
        <div className="body">
          <div className="header">Gig Execution Module</div>
          <div className="sub_heading">
            Allocate Gigs, Track Execution, Track Execution by Giggers
          </div>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Main;
