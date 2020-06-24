import React from "react";
import { Link } from "react-router-dom";

import "../header/header.styles.scss";

export default function HeaderComponent() {
  return (
    <nav
      className="navbar justify-content-center justify-content-lg-between navbar-light fixed-top py-1"
      id="main-nav"
    >
      <div className="container">
        <a href="#home" className="navbar-brand">
          <h3 className="text-gray align-middle">Mai Mai</h3>
        </a>
        <div>
          <ul className=" nav-mobile d-flex d-inline list-unstyled border mt-md-4 mr-sm-2">
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                PRODUCTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stream">
                STREAM
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">
                ORDERS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
