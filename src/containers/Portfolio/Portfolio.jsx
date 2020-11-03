import React from "react";
// import img from "img/img1.png";


const Portfolio = () => {
  return (
    <div>
      <div class="card" >
        <div class="card-body">
          <h3 class="card-title">Portfolio</h3>
          <img
            src="{img1}"
            class="rounded float-left"
            alt="..."
          />
          <img
            src="img1.png"
            class="rounded float-left"
            alt="..."
          />
          <img
            src="/public/img1.png"
            class="rounded float-left"
            alt="..."
          />
          <img
            src="./img1.png"
            class="rounded float-left"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
