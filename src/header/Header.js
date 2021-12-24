import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h3>
          <Link to={"/"}>vibes</Link>
        </h3>
      </div>
      <nav className="navlinks">
        <ul className="menu-links">
          <li className="links">
            <a href="/">Home</a>
          </li>
          <li className="links">
            <a href="/login">Sign in</a>
          </li>
          <li className="links">
            <a href="/register">Sign up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
