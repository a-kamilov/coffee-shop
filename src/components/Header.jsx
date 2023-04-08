import React from "react";
import logo from "./img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservation</a>
          </li>
        </ul>
        <img src={logo} />
        <ul>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-search"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="h_content">
        <div className="left">
          <h1>Enjoy Your Morning Coffee.</h1>
          <p>
            The coofee is brewed by fist roasting the green coffee beans over
            hot coals in brazier. given to Opportunity
          </p>
          <button className="default_btn">Test Coffee</button>
        </div>
      </div>
      <a className="video" href="#">
        <i class="fa-solid fa-play"></i>
      </a>
    </div>
  );
};

export default Header;
