import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img src="image/logo.png" alt="" />
            <p className="info">
              Trafalgar provides progressive, and affordable healthcare, <br />
              accessible on mobile and online for everyone
            </p>
            <p className="copyright">
              ©Trafalgar PTY LTD 2022. All rights reserved
            </p>
          </div>
          <div className="col-md-2 links">
            <h5>Company</h5>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Find a doctor</a>
            </li>
            <li>
              <a href="#">Apps</a>
            </li>
          </div>
          <div className="col-md-2 links">
            <h5>Region</h5>
            <li>
              <a href="#">Indonesia</a>
            </li>
            <li>
              <a href="#">Singopure</a>
            </li>
            <li>
              <a href="#">Hongkong</a>
            </li>
            <li>
              <a href="#">Canada</a>
            </li>
          </div>
          <div className="col-md-2 links">
            <h5>Help</h5>
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Contact support</a>
            </li>
            <li>
              <a href="#">Instructions</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
