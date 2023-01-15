import React, { useState } from "react";
import "./Banner.css";
import Search from "../Search/Search";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}

        <div className="btn-group mx-auto">
          <button className="btn bg-gray-400 border-r-2xl-">Button</button>
          <button className="btn bg-gray-400 ">Button</button>
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="btn bg-gray-400"
          >
            Search Dates
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
