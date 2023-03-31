import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";

const Sidebar = () => {
  return (
    <>
      <div
        style={{
          left: "57px",
          top: "60px",
          width: "154",
          height: "44",
        }}
      >
        <img src="/Images/logo.png" alt="Logo" style={{position:'fixed',zIndex:"2"}} />
      </div>
      <div className="sidebar">
        <div
          style={{
            position: "absolute",
            width: "127px",
            height: "24px",
            left: "72px",
            top: "126px",
            fontfamily: "Poppins",
            fontstyle: "normal",
            fontweight: "600",
            fontsize: "16px",
            lineheight: "24px",
            color: "#FFFFFF",
          }}
        >
          Admin Console
        </div>

        <button
          style={{
            position: "absolute",
            width: "269px",
            height: "42px",
            left: "0px",
            top: "180px",
            background: "rgba(255, 255, 255, 0.2)",
            borderradius: "15px",
            fontweight: "600",
            fontsize: "16px",
            lineheight: "24px",
            color: "#FFFFFF",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "22.72px",
              border: "Black",
            }}
          >
            <HomeIcon />
          </div>
          DashBoard
        </button>

        <button
          style={{
            position: "absolute",
            width: "269px",
            height: "42px",
            left: "0px",
            top: "223px",
            background: "rgba(255, 255, 255, 0.2)",
            borderradius: "15px",
            fontfamily: "Poppins",
            fontstyle: "normal",
            fontweight: "600",
            fontsize: "16px",
            lineheight: "24px",
            color: "#FFFFFF",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "22.72px",
              border: "Black",
            }}
          >
            <ContentPasteIcon />
          </div>
          GigExecution
        </button>

        <button
          style={{
            position: "absolute",
            width: "269px",
            height: "42px",
            left: "0px",
            top: "266px",
            background: "rgba(255, 255, 255, 0.2)",
            borderradius: "15px",
            fontfamily: "Poppins",
            fontstyle: "normal",
            fontweight: "600",
            fontsize: "16px",
            lineheight: "24px",
            color: "#FFFFFF",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "22.72px",
              border: "Black",
            }}
          >
            <BusinessIcon />
          </div>
          Companies
        </button>

        <button
          style={{
            position: "absolute",
            width: "269px",
            height: "42px",
            left: "0px",
            top: "308px",
            background: "rgba(255, 255, 255, 0.2)",
            borderradius: "15px",
            fontfamily: "Poppins",
            fontstyle: "normal",
            fontweight: "600",
            fontsize: "16px",
            lineheight: "24px",
            color: "#FFFFFF",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "22.72px",
              border: "Black",
            }}
          >
            <PeopleAltIcon />
          </div>
          Giggers
        </button>

        <button
          style={{
            position: "absolute",
            width: "269px",
            height: "42px",
            left: "0px",
            top: "350px",
            background: "rgba(255, 255, 255, 0.2)",
            borderradius: "15px",
            fontfamily: "Poppins",
            fontstyle: "normal",
            fontweight: "600",
            fontsize: "16px",
            lineheight: "24px",
            color: "#FFFFFF",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "22.72px",
              border: "Black",
            }}
          >
            <ContentPasteGoIcon />
          </div>
          Gig Config
        </button>

        <div
          style={{
            position: "absolute",
            width: "269px",
            height: "42px",
            left: "63px",
            top: "780px",
          }}
        >
          Admin@gigchain.ai
        </div>
        <div
          style={{
            position: "absolute",
            width: "142px",
            height: "24px",
            left: "63px",
            top: "825px",
          }}
        >
          Users & Previliges
        </div>
        <div
          style={{
            position: "absolute",
            width: "142px",
            height: "24px",
            left: "63px",
            top: "877px",
          }}
        >
          Users & Previliges
        </div>
        <div
          style={{
            position: "absolute",
            width: "142px",
            height: "24px",
            left: "63px",
            top: "929px",
          }}
        >
          Logout
        </div>
      </div>
    </>
  );
};

export default Sidebar;
