import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer">
      <ul>
        <li>
          <h2>
            <Link className="navLink" to={"/"}>
              MyInnoCars (Global Online Digital)
            </Link>
          </h2>
        </li>
        <li>
          <Link className="navLink" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="navLink" to={"/about"}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
