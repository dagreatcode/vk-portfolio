import React from "react";
import profileImage from "./img/img1.png";

const Home = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <div className="page-header">
                  <h1>About Me</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <img
                  src={profileImage}
                  className="img-thumbnail"
                  alt="..."
                />
              </div>
              <div className="col-sm-3">
                <div className="caption">
                  <p>
                    A Little About Me. Well i have been a creator forever.
                    Music, anima, and now i want to make a living making
                    websites. I have always looked at coding. I always wanted to
                    know how it works. I started of learning python and it was
                    really hard. That is what made me love it so much. The fact
                    that i can do a little. I really want to find out where I
                    end up and how far I go.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8">
                <div className="caption">
                  <p>
                    I have a son with autism. Its alot but I know god would
                    never but too much on me i can not handle. Like This
                    project. I have been on a long road to finding myself. I had
                    to let alot of people go because they did not want anything,
                    but i wanted everything. I have never gave up on anything no
                    matter how bad it get, i still seem to want to do more. Its
                    so easy to give up, and i never want anything easy. This
                    project was hard but i still put my all into it... i stay up
                    long nights trying to do it on my own. I have made alot of
                    mistake. But i am still pushing forwards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


// .app{
//     background-image: url(./img/img1.png);
// }
