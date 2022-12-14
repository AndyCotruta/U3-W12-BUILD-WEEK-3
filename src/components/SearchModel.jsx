import React from "react";
import "./SearchModel.css";
import search from "../Icon/Search.svg";

const SearchModel = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between search-results">
        <div className="d-flex">
          <div>
            <img src={search} alt="" className="ml-3" />
          </div>
          <div className="d-flex align-items-center">
            <div className="ml-3 fs-16 fw-700">User Name · </div>
            <div className="ml-1 fs-12 career"> IT Specialist IT Specialist IT Specialist IT Specialist</div>
          </div>
        </div>
        <div>
          <img src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg" alt="" className="search-image" />
        </div>
      </div>
    </>
  );
};

export default SearchModel;
