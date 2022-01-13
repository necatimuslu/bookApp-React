import React from "react";
import { Link } from "react-router-dom";

import { FaBook } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import "./Header.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light header-bg">
      <div className="container">
        <Link className="navbar-brand text-white " to="/">
          <FaBook style={{ color: "#f44336" }} className="header-book-icon" />{" "}
          Kitap Uygulaması
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-4">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/admin">
                <GrUserAdmin
                  style={{ color: "#2196f3" }}
                  className="header-admin-icon"
                />{" "}
                Yönetim Paneli <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
