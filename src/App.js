import React from "react";
import "./App.css";

import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import Screen5 from "./Screen5";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/screen1" element={<Screen1 />} />
          <Route path="/screen2" element={<Screen2 />} />
          <Route path="/screen3" element={<Screen3 />} />
          <Route path="/screen4" element={<Screen4 />} />
          <Route path="/screen5" element={<Screen5 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
