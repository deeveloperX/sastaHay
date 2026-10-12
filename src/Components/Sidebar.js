import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { TbReport } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";
import Logo from "../assets/sastahay-logo.png";

const closeSidebar = () => {
  const sidebar = document.getElementById("offcanvasExample");
  sidebar?.querySelector('[data-bs-dismiss="offcanvas"]')?.click();
};

const Sidebar = () => (
  <div
    className="offcanvas offcanvas-start"
    tabIndex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div className="offcanvas-body p-0">
      <nav className="nav flex-column bg-myPrimary text-light py-4 px-4">
        <div className="offcanvas-header px-0 pt-0">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <img src={Logo} alt="logo" className="w-50" />
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="d-flex flex-column gap-1 mb-4">
          <Link
            to="/login"
            onClick={closeSidebar}
            className="btn btn-light text-myPrimary w-fit px-4"
          >
            Login
          </Link>
          <Link
            to="/login"
            onClick={closeSidebar}
            className="btn text-light w-fit px-0"
          >
            <span>
              <CiLocationOn className="mx-2" />
            </span>
            Track my Order
          </Link>
          <Link
            to="/contact"
            onClick={closeSidebar}
            className="btn text-light w-fit px-0"
          >
            <span>
              <TbReport className="mx-2" />
            </span>
            Launch a Complaint
          </Link>
        </div>
      </nav>
      <div className="nav flex-column bg-light px-4">
        <div className="border-top border-myPrimary border-opacity-25 pt-3">
          <h6 className="text-uppercase fw-bold small mb-2">Shop</h6>
          <Link
            to="/products"
            onClick={closeSidebar}
            className="sidebar-link text-dark"
          >
            All Products
          </Link>
          <button
            className="sidebar-link text-dark sidebar-dropdown-toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarCategories"
            aria-expanded="false"
            aria-controls="sidebarCategories"
          >
            Categories <FiChevronDown aria-hidden="true" />
          </button>
          <div className="collapse" id="sidebarCategories">
            <div className="d-flex flex-column ms-3">
              <Link
                to="/products?category=furniture"
                onClick={closeSidebar}
                className="sidebar-link text-dark sidebar-sub-link"
              >
                Home &amp; Furniture
              </Link>
              <Link
                to="/products?category=beauty"
                onClick={closeSidebar}
                className="sidebar-link text-dark sidebar-sub-link"
              >
                Beauty &amp; Cosmetics
              </Link>
              <Link
                to="/products?category=groceries"
                onClick={closeSidebar}
                className="sidebar-link text-dark sidebar-sub-link"
              >
                Fresh Groceries
              </Link>
              <Link
                to="/products?category=fragrances"
                onClick={closeSidebar}
                className="sidebar-link text-dark sidebar-sub-link"
              >
                Fragrances
              </Link>
            </div>
          </div>
        </div>

        <div className="border-top border-myPrimary bg-light border-opacity-25 mt-3 pt-3">
          <h6 className="text-uppercase fw-bold small mb-2">Explore</h6>
          <Link to="/faqs" onClick={closeSidebar} className="sidebar-link text-dark">
            FAQs
          </Link>
          <Link
            to="/contact"
            onClick={closeSidebar}
            className="sidebar-link text-dark"
          >
            Contact Us
          </Link>
          <Link to="/terms" onClick={closeSidebar} className="sidebar-link text-dark">
            Terms &amp; Condition
          </Link>
        </div>

        <div className="border-top border-myPrimary border-opacity-25 mt-3 pt-3">
          <h6 className="text-uppercase fw-bold small mb-2">
            Customer Service
          </h6>
          <Link
            to="/contact"
            onClick={closeSidebar}
            className="sidebar-link text-dark"
          >
            Help Center
          </Link>
          <Link
            to="/privacy"
            onClick={closeSidebar}
            className="sidebar-link text-dark"
          >
            Privacy Policy
          </Link>
          <Link
            to="/installments"
            onClick={closeSidebar}
            className="sidebar-link text-dark"
          >
            Installments Plan
          </Link>
          <Link
            to="/seller-registration"
            onClick={closeSidebar}
            className="sidebar-link text-dark"
          >
            Sell on SastaHay
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Sidebar;
