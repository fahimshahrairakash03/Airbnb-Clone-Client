import React, { useState } from "react";
import "./Banner.css";
import Search from "../Search/Search";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_searchbtn"
          variant="outlined"
        >
          Search Dates
        </button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you{" "}
        </h5>
      </div>
      <button variant="outlined">Explore Nearby</button>
    </div>
  );
};

export default Banner;
