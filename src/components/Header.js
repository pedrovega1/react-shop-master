import React from "react";
import { Link } from "react-router-dom";
import "./frontend/Header.css";

const Header = ({ cartItems }) => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Electronics Shop
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
        </ul>

        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/cart" className="cart">
              <i className="fas fa-cart-shopping"></i>
              <span className="cart-length">
                {cartItems.length === 0 ? "" : cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
