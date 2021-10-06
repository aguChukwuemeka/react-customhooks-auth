import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
function Navbar() {
  return (
    <div className="header">
      <div className="d-flex">
        <NavLink to="/" className="header-title me-3">
          <img src={logo} alt="logo" className="logo me-3" />
          Hooks News
        </NavLink>
        <NavLink to="/" className="header-link">
          new
        </NavLink>
        <div className="divider px-2">|</div>
        <NavLink to="/top" className="header-link">
          top
        </NavLink>
        <div className="divider px-2">|</div>
        <NavLink to="/search" className="header-link">
          search
        </NavLink>
        <div className="divider px-2">|</div>
        <NavLink to="/create" className="header-link">
          submit
        </NavLink>
      </div>
        <div className="flex">
          <NavLink to="/login" className="header-link me-2">
            login
          </NavLink>
        </div>
    </div>
  );
}

export default withRouter(Navbar);
