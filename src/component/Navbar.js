import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="allnav">
      <h1 className="logo">Portfolio</h1>
      <div className="nav-links">
        <Link to="/" className="link">
          Home
        </Link>

        <Link to="/About" className="link">
          About
        </Link>

        <Link to="/Skills" className="link">
          Skills
        </Link>

        <Link to="/Contact" className="link">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
