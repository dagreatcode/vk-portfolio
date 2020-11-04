import React from "react";
// import img1 from "img/img1.png";


const Portfolio = () => {
  return (
    <div>
      <div className="card" >
        <div className="card-body">
          <h3 className="card-title">Portfolio</h3>
          <img
            src="{img1}"
            className="rounded float-left"
            alt="..."
          />
          <img
            src="img1.png"
            className="rounded float-left"
            alt="..."
          />
          <img
            src="/public/img1.png"
            className="rounded float-left"
            alt="..."
          />
          <img
            src="./img1.png"
            className="rounded float-left"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
