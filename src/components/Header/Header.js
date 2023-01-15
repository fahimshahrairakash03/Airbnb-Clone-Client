import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";

const Header = () => {
  const menuItem = (
    <>
      <div className="header_center">
        <input type="text" name="" id="" />
        <SearchIcon />
      </div>
    </>
  );
  return (
    <div>
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItem}
              </ul>
            </div>
            <img
              className="header_icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
              alt=""
            />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menuItem}</ul>
          </div>
          <div className="navbar-end">
            <div className="header_right">
              <p>Become a host</p>
              <LanguageIcon />
              <ExpandMoreIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
