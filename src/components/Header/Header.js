import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header_icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
        alt=""
      />
      <div className="header_center">
        <input type="text" name="" id="" />
        <SearchIcon />
      </div>
      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
      </div>
    </div>
  );
};

export default Header;
