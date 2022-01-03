/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="d-flex home container">
      <div className="row">
        <div className="home__desc col-lg-4 pt-5">
          <h1 className="fw-bold">
            Virtual healthcare <br /> for you
          </h1>
          <p>
            Trafalgar provides progressive, and affordable <br /> healthcare,
            accessible on mobile and online <br /> for everyone
          </p>
          <button className="btn text-light rounded-pill px-4 py-2">
            Consult today
          </button>
        </div>
        <div className="col-lg-2" style={{ color: "white" }}>
          fsdfsdfsdfsddfsdfsdfs
        </div>

        <div className="home__image col-lg-6">
          <img
            src="/image/trafalgar-header illustration 1.png"
            alt="image-home"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
