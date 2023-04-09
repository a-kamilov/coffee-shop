import React from "react";
import logo from "./img/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={logo} />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Reservation</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
        </ul>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
      <div className="copy">
        <p>a-kamilov &copy; 2023. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
