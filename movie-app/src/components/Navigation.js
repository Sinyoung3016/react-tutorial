import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <div>
        <Link to="/">HOME</Link>
      </div>
      <div>
        <Link to="about">ABOUT</Link>
      </div>
    </div>
  );
}

export default Navigation;
