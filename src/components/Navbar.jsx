import React from "react";
import "../styles/navbar.css";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Navbar = () => {
  const [sidebar, toggleSidebar] = useState(true);
  return (
    <>
      <nav id="nav">
        <div className="left">
          <div className="logo"></div>
          <div className="name">cv app</div>
        </div>
        <div className="right">
          <ul>
            <li>edit cv</li>
            <li onClick={() => toggleSidebar((prevState) => !prevState)}>
              add cv
            </li>
          </ul>
        </div>
      </nav>
      {sidebar && <Sidebar />}
    </>
  );
};

export default Navbar;
