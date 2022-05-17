import React from "react";
import { Link } from "react-router-dom";
import mhlogo from "../images/mhlogo.png";
export default function Navbar() {
  const handlelogout = () => {
    if (window.confirm("Are you sure?") === true) {
      localStorage.removeItem("my_token");
      alert("Logged Out!");
      window.location.href = "/login";
    }
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "white" }}
      >
        <Link className="navbar-brand" to="/home">
          <img
            src={mhlogo}
            width="30"
            height="30"
            className="d-inline-block align-top mx-2 mh"
            alt="logo"
          />
          MedHelp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i
              className="fa fa-bars"
              style={{ color: "#000", fontSize: "24px", border: "none" }}
            ></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                <i className="fa fa-fw fa-home"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bookappoint">
                <i className="fa fa-fw fa-heartbeat"></i>Book Appointment
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/searchnearby">
                <i className="fa fa-fw fa-search"></i>Search Nearby
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/donate">
                <i className="fa fa-fw fa-tint"></i>Blood/Organ Donation
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/charity">
                <i className="fa fa-fw fa-cart-plus"></i>Charity Funding
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">
                <i className="fa fa-fw fa-question-circle"></i>FAQ's
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/discuss">
                <i className="fa fa-fw fa-comments"></i>Discuss
              </Link>
            </li>
            <li className="nav-item">
              <button className=" nav-link logout" onClick={handlelogout}>
                <i className="fa fa-fw fa-user"></i>Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
