import React from "react";
import logo from "./images/logo.jpg";
import { Link } from "react-router-dom";
import "../css/ListStyle.css";
const List = () => {
  return (
    <>
      <div className="main-header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="menu-icons">
          <div className="inner-menu-icons">
            <i className="far fa-clock"></i>
            <div className="inner-menu-content">
              <span>work time : 09:00</span>
              <span>saturday and sunday close</span>
            </div>
          </div>
          <div className="inner-menu-icons">
            <i className="fas fa-envelope"></i>
            <div className="inner-menu-content">
              <span>Mail us</span>
              <span>free@gmail.com</span>
            </div>
          </div>
          <div className="inner-menu-icons">
            <i className="fas fa-phone-alt"></i>
            <div className="inner-menu-content">
              <span>call us</span>
              <span>+92 0225252</span>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="container container-flex">
          <nav>
            <div className="list">
              <Link to="/" className="listItem" activeClassName="activeItem">
                Home
              </Link>
              <Link
                to="/about"
                className="listItem"
                activeClassName="activeItem"
              >
                About
              </Link>
              <Link
                to="/services"
                className="listItem"
                activeClassName="activeItem"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="listItem"
                activeClassName="activeItem"
              >
                Contact
              </Link>
            </div>
          </nav>
          <div className="icons">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </header>
    </>
  );
};
export default List;
