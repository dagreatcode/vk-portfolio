import React from "react";
// import img1 from "img/img1.png";
import profileImage from "./img/img1.png";

const Portfolio = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Portfolio</h3>
          <img src={profileImage} className="img-thumbnail" alt="..." />
          <img src={profileImage} className="rounded float-left" alt="..." />
          <img src={profileImage} className="img-thumbnail" alt="..." />
          <img src={profileImage} className="rounded float-left" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
