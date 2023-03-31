import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
const AttendanceTable = () => {
  const data = [
    {
      Gig_ID: "ABCD",
      Gig_TYPE: "StockAuditing",
      Attendance: "ABC",
      Location: "",
      Gigger_Name: "ABC",
      Status: "To Be Approved",
      Progress: "On Track",
    },
    {
      Gig_ID: "ABCD",
      Gig_TYPE: "StockAuditing",
      Attendance: "ABC",
      Location: "",
      Gigger_Name: "ABC",
      Status: "To Be Approved",
      Progress: "On Track",
    },
    {
      Gig_ID: "ABCD",
      Gig_TYPE: "StockAuditing",
      Attendance: "ABC",
      Location: "",
      Gigger_Name: "ABC",
      Status: "To Be Approved",
      Progress: "On Track",
    },
    {
      Gig_ID: "ABCD",
      Gig_TYPE: "StockAuditing",
      Attendance: "ABC",
      Location: "",
      Gigger_Name: "ABC",
      Status: "To Be Approved",
      Progress: "On Track",
    },
    {
      Gig_ID: "ABCD",
      Gig_TYPE: "StockAuditing",
      Attendance: "ABC",
      Location: "",
      Gigger_Name: "ABC",
      Status: "To Be Approved",
      Progress: "ODelayed",
    },
  ];
  const columns = [
    {
      headerName: "Gig ID",
      field: "Gig_ID",
      sortable: true,
      filter: true,
      checkboxSelection: true,
      resizable: true,
    },
    {
      headerName: "Gig Type",
      field: "Gig_TYPE",
      sortable: true,
      resizable: true,
    },
    {
      headerName: "Attendance",
      field: "Attendance",
      sortable: true,
      resizable: true,
    },
    {
      headerName: "Location",
      field: "Location",
      sortable: true,
      resizable: true,
    },
    {
      headerName: "Gigger Assigned",
      field: "Gigger Name",
      sortable: true,
      resizable: true,
    },
    { headerName: "Status", field: "Status", sortable: true, resizable: true },
    {
      headerName: "Progress",
      field: "Progress",
      sortable: true,
      resizable: true,
    },
  ];
  const defaultColDef = {
    suppressResize: true,
    enableColResize: true,
    onColumnResized: function (params) {
      console.log(params);
    },
  };
  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "381px",
        width: "1071px",
      }}
    >
      <AgGridReact rowData={data} columnDefs={columns} />
    </div>
  );
};

export default AttendanceTable;
