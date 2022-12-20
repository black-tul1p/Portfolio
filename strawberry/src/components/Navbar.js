import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <p className="User-name">&lt;black-tulip /&gt;</p>
      <div className="Bar">
        <Link to="/" className="Nav-link">
          Home
        </Link>
        <Link to="/" className="Nav-link">
          About
        </Link>
        <Link to="/" className="Nav-link">
          Skills
        </Link>
        <Link to="/" className="Nav-link">
          Experience
        </Link>
        <Link to="/" className="Nav-link">
          Contact
        </Link>
      </div>
    </div>
  );
}
