import React from "react";
import "./navmenu.css";

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <a href="/#home">
        {" "}
        <button>home</button>
      </a>
      <a href="/#events">
        <button>events</button>
      </a>
      <a href="/#about">
        <button>about</button>
      </a>
      <a href="/#connect">
        <button>connect</button>
      </a>
      <div className="logo-div">
        <p className="powered">powered by: </p>
        <p className="matic">[ ]matic tribe</p>
      </div>
    </nav>
  );
};

export default NavMenu;
