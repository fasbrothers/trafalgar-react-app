import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light header container ">
      <div className="header__image">
        <a className="navbar-brand " href="#">
          <img src="/image/logo.png" alt="logo" />
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 header__links">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/articles" className="nav-link">
              Articles
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
