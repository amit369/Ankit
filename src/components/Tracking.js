import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import TrackingTable from "./tables/TrackingTable";
function handleCheckboxChange(event) {
  if (event.target.checked) {
    console.log("Checkbox is checked");
  } else {
    console.log("Checkbox is unchecked");
  }
}
const Tracking = () => {
  return (
    <>
      <div className="tracking_left">Track Gigs To Completion</div>
      <div className="tracking_down">
        1023 Unallocated Open Gigs in the system
      </div>
      <button
        style={{
          position: "absolute",
          width: "117px",
          height: "40px",
          left: "770px",
          top: "308px",
        }}
      >
        <PlaceIcon />
        View Map
      </button>

      <button
        style={{
          position: "absolute",
          width: "125px",
          height: "40px",
          left: "909px",
          top: "409px",
        }}
      >
        Admin Verified
      </button>

      <button
        style={{
          position: "absolute",
          width: "160px",
          height: "40px",
          left: "1052px",
          top: "409px",
        }}
      >
        Generate Report
      </button>

      <button
        style={{
          position: "absolute",
          width: "160px",
          height: "40px",
          left: "1230px",
          top: "409px",
        }}
      >
        Client Verified
      </button>

      {/* Select  */}
      <select
        style={{
          position: "absolute",
          width: "120px",
          height: "40px",
          left: "903px",
          top: "308px",
        }}
      >
        <option>Company</option>
      </select>
      <select
        style={{
          position: "absolute",
          width: "120px",
          height: "40px",
          left: "1039px",
          top: "308px",
        }}
      >
        <option>Invoice ID</option>
      </select>
      <select
        style={{
          position: "absolute",
          width: "120px",
          height: "40px",
          left: "1175px",
          top: "307px",
        }}
      >
        <option>Gigger</option>
      </select>
      <select
        style={{
          position: "absolute",
          width: "106px",
          height: "40px",
          left: "1311px",
          top: "307px",
        }}
      >
        <option>Status</option>
      </select>

      {/* checkbox */}
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
        <TrackingTable />
      </div>
    </>
  );
};

export default Tracking;
