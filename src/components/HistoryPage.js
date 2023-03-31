import React, { useState } from "react";
import HistoryTable from "./tables/HistoryTable";

function handleCheckboxChange(event) {
  if (event.target.checked) {
    console.log("Checkbox is checked");
  } else {
    console.log("Checkbox is unchecked");
  }
}

const HistoryPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <div className="tracking_left">History Of Gigs</div>
      <div className="tracking_down">50,645 Gigs In Closed State</div>
      <button
        style={{
          position: "absolute",
          width: "171px",
          height: "40px",
          left: "1215px",
          top: "409px",
        }}
      >
        Generate Report
      </button>

      <select
        style={{
          position: "absolute",
          width: "120px",
          height: "40px",
          left: "712px",
          top: "308px",
        }}
      >
        <option>Gig Type</option>
      </select>
      <select
        style={{
          position: "absolute",
          width: "120px",
          height: "40px",
          left: "849px",
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
          left: "985px",
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
          left: "1121px",
          top: "307px",
        }}
      >
        <option>Gigger</option>
      </select>
      <select
        style={{
          position: "absolute",
          width: "129px",
          height: "40px",
          left: "1257px",
          top: "307px",
        }}
      >
        <option>Date Range</option>
      </select>

      <input type="checkbox" id="myCheckbox" onChange={handleCheckboxChange} />
      <label
        htmlFor="myCheckbox"
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
        <HistoryTable />
      </div>
    </>
  );
};

export default HistoryPage;
