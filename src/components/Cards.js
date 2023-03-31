import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { showIcon } from "./Icons";
import "./Cards.css";
const Cards = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showImage, setShowImage] = useState(false);
  console.log(location.pathname.split("/")[1]);
  const [selectedCard, setselectedCard] = useState(
    location.pathname.split("/")[1]
  );

  const [colors, setColors] = useState(
    location.pathname === "/screen1"
      ? ["#3344ff", "#f9f9f9", "#f9f9f9", "#f9f9f9", "#f9f9f9"]
      : location.pathname === "/screen2"
      ? ["#f9f9f9", "#3344ff", "#f9f9f9", "#f9f9f9", "#f9f9f9"]
      : location.pathname === "/screen3"
      ? ["#f9f9f9", "#f9f9f9", "#3344ff", "#f9f9f9", "#f9f9f9"]
      : location.pathname === "/screen4"
      ? ["#f9f9f9", "#f9f9f9", "#f9f9f9", "#3344ff", "#f9f9f9"]
      : location.pathname === "/screen5"
      ? ["#f9f9f9", "#f9f9f9", "#f9f9f9", "#f9f9f9", "#3344ff"]
      : ["#f9f9f9", "#f9f9f9", "#f9f9f9", "#f9f9f9", "#f9f9f9"]
  );

  const handleDivClick = (index, pageUrl) => {
    const newColors = ["#f9f9f9", "#f9f9f9", "#f9f9f9", "#f9f9f9", "#f9f9f9"];
    newColors[index] = "#3344ff";
    setColors(newColors);
    setShowImage(!showImage);
    setTimeout(() => {
      navigate(`/${pageUrl}`);
    }, 0);
    setselectedCard(pageUrl);
  };

  return (
    <>
      <div
        className="card1"
        style={{
          backgroundColor: colors[0],
          display: "flex",
          flexDirection: "column",
        }}
        onClick={() => handleDivClick(0, "screen1")}
      >
        <div>{showIcon(selectedCard, "screen1")}</div>
        <div>Gig Allocation</div>
      </div>

      <div
        className="card2"
        style={{
          backgroundColor: colors[1],
          display: "flex",
          flexDirection: "column",
        }}
        onClick={() => handleDivClick(1, "screen2")}
      >
        <div>{showIcon(selectedCard, "screen2")}</div>
        <div>Attendance</div>
      </div>

      <div
        className="card3"
        style={{
          backgroundColor: colors[2],
          display: "flex",
          flexDirection: "column",
        }}
        onClick={() => handleDivClick(2, "screen3")}
      >
        <div>{showIcon(selectedCard, "screen3")}</div>
        <div>Tracking</div>
      </div>

      <div
        className="card4"
        style={{
          backgroundColor: colors[3],
          display: "flex",
          flexDirection: "column",
        }}
        onClick={() => handleDivClick(3, "screen4")}
      >
        <div>{showIcon(selectedCard, "screen4")}</div>
        <div>Payout</div>
      </div>
      <div
        className="card5"
        style={{
          backgroundColor: colors[4],
          display: "flex",
          flexDirection: "column",
        }}
        onClick={() => handleDivClick(4, "screen5")}
      >
        <div>{showIcon(selectedCard, "screen5")}</div>
        <div>History</div>
      </div>
    </>
  );
};

export default Cards;
