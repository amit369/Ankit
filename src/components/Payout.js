import React from "react";
import PayoutTable from "./tables/PayoutTable";
function handleCheckboxChange(event) {
  if (event.target.checked) {
    console.log("Checkbox is checked");
  } else {
    console.log("Checkbox is unchecked");
  }
}
const Payout = () => {
  return (
    <>
      <div className="tracking_left">Generate Payout For Giggers</div>
      <div className="tracking_down">955 Gigs In Completed State</div>
      <button
        style={{
          position: "absolute",
          width: "162px",
          height: "40px",
          left: "1071px",
          top: "409px",
        }}
      >
        Calculate Payout
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
        Close GIG
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
        <PayoutTable />
      </div>
    </>
  );
};

export default Payout;
