import React from "react";
import GigAllocationTable from "./tables/GigAllocationTable";
function handleCheckboxChange(event) {
  if (event.target.checked) {
    console.log("Checkbox is checked");
  } else {
    console.log("Checkbox is unchecked");
  }
}

const MiddleGigAllocation = () => {
  return (
    <>
      <div className="left">Allocate Gigs To Giggers</div>
      <div className="down">1023 Unallocated Open Gigs in the system</div>
      <button
        style={{
          position: "absolute",
          width: "125px",
          height: "40px",
          left: "1118px",
          top: "409px",
        }}
      >
        Auto Assign
      </button>
      <button
        style={{
          position: "absolute",
          width: "125px",
          height: "40px",
          left: "1255px",
          top: "409px",
        }}
      >
        Approve
      </button>
      <select
        style={{
          position: "absolute",
          width: "106px",
          height: "40px",
          left: "998px",
          top: "308px",
        }}
      >
        <option>Status</option>
      </select>
      <select
        style={{
          position: "absolute",
          width: "120px",
          height: "40px",
          left: "1118px",
          top: "307px",
        }}
      >
        <option>Company</option>
      </select>
      <select
        style={{
          position: "absolute",
          width: "120px",
          height: "40px",
          left: "1254px",
          top: "307px",
        }}
      >
        <option>Invoice ID</option>
      </select>
      <input type="checkbox" id="myCheckbox" onChange={handleCheckboxChange} />
      <label
        for="myCheckbox"
        style={{
          position: "absolute",
          color: "#808080",
          width: "70px",
          height: "24px",
          left: "358px",
          top: "423px",
        }}
      >
        Select All
      </label>
      <div className="gigtable">
        <GigAllocationTable />
      </div>
    </>
  );
};

export default MiddleGigAllocation;
