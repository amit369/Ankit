import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
const TrackingTable = () => {
  const data = [
    {
      Gig_ID: "ABCD",
      Gig_TYPE: "StockAuditing",
      Proof: "ABC",
      Location: "",
      Gigger_Allocated: "ABC",
      Gigger_Accepted: "2",
      Status: "To Be Approved",
    },
    {
      Gig_ID: "ABCD",
      Gig_TYPE: "StockAuditing",
      Proof: "ABC",
      Location: "",
      Gigger_Allocated: "ABC",
      Gigger_Accepted: "2",
      Status: "To Be Approved",
    },
    {
      Gig_ID: "ABCD",
      Gig_TYPE: "StockAuditing",
      Proof: "ABC",
      Location: "",
      Gigger_Allocated: "ABC",
      Gigger_Accepted: "2",
      Status: "To Be Approved",
    },
    {
      Gig_ID: "ABCD",
      Gig_TYPE: "StockAuditing",
      Proof: "ABC",
      Location: "",
      Gigger_Allocated: "ABC",
      Gigger_Accepted: "2",
      Status: "To Be Approved",
    },
    {
      Gig_ID: "ABCD",
      Gig_TYPE: "StockAuditing",
      Proof: "ABC",
      Location: "",
      Gigger_Allocated: "ABC",
      Gigger_Accepted: "2",
      Status: "To Be Approved",
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
      headerName: "Proof",
      field: "Proof",
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
      headerName: "Gigger Allocated",
      field: "Gigger_Allocated",
      sortable: true,
      resizable: true,
    },
    {
      headerName: "Gigger Accepted",
      field: "Gigger_Accepted",
      sortable: true,
      resizable: true,
    },
    { headerName: "Status", field: "Status", sortable: true, resizable: true },
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

export default TrackingTable;
