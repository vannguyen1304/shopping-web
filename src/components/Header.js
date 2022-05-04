import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const pages = ["Home", "Products", "About", "Contact"];
  const [toggleMenu, setTogglemenu] = useState(false);
  const [active, setActive] = useState("Home");

  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  return (
    <div class="container-fluid">
      <div
        id="header"
        class="row justify-content-between align align-items-center"
      >
        <h1 className="header-shop-name">LA COLLECTION</h1>
        <ul className={toggleMenu ? "active" : ""}>
          {pages.map((page, index) => {
            return (
              <li key={index} className={active == page ? "active" : ""}>
                <Link
                  onClick={() => setActive(page)}
                  to={page == "Home" ? "/" : `/${page.toLocaleLowerCase()}`}
                >
                  {page}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="header-btn-container">
          <button
            className="header-btn btn  btn-outline-dark"
            onClick={() => navigate("/cart")}
          >
            <i class="fa-solid fa-cart-shopping"></i>
            <span>Cart ({cart.length})</span>
          </button>

          <button
            className="header-btn btn  btn-outline-dark menu"
            onClick={() => setTogglemenu((prev) => !prev)}
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
