import React from "react";
import "./Articles.scss";

function Articles() {
  return (
    <div className="articles">
      <div className="container">
        <div className="articles__main">
          <h2>Check out our latest article</h2>
          <div className="line"></div>
        </div>
        <div className="row">
          <div className="col-md-3 cardd">
            <img src="/image/Mask Group.png" alt="" />
            <h5>Disease detection, check up in the laboratory</h5>
            <p>
              In this case, the role of the health laboratory is very important
              to do a disease detection...
            </p>
            <button>Read more</button>
          </div>
          <div className="col-md-3 cardd">
            <img src="/image/Mask Group_1.png" alt="" />
            <h5>Herbal medicines that are safe for consumption</h5>
            <p>
              Herbal medicine is very widely used at this time because of its
              very good for your health...
            </p>
            <button>Read more</button>
          </div>

          <div className="col-md-3 cardd">
            <img src="/image/Mask Group_2.png" alt="" />
            <h5>Natural care for healthy facial skin</h5>
            <p>
              A healthy lifestyle should start from now and also for your skin
              health. There are some...
            </p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
