// MobileNavbar.js

import React, { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import companyLogo from "./logo.svg";
import "./MobileHeader.css";
import headerMenuData from "../../../../../data/commonData/headerData/headerData";
import { useLocation } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";

const MobileNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [headerMenu, setHeaderMenu] = useState(headerMenuData);
  const location = useLocation();
  const careersBaseRoute = "/careers";
  const productsBaseRoute = "/products";
  const isLoggedIn = true;
  const isAllowedCareersRoute = location.pathname.startsWith(careersBaseRoute);
  const isAllowedProductsRoute =
    location.pathname.startsWith(productsBaseRoute);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleSubmenuToggle = (index) => {
    const updatedMenu = [...headerMenu];

    // Close other open submenus
    updatedMenu.forEach((item, i) => {
      if (i !== index) {
        item.isSubmenuOpen = false;
      }
    });

    // Toggle the selected submenu
    updatedMenu[index].isSubmenuOpen = !updatedMenu[index].isSubmenuOpen;
    setHeaderMenu(updatedMenu);

    // Apply styles to the submenu
    const submenuElement = document.getElementById(`mobilesubmenu-${index}`);
    if (submenuElement) {
      if (updatedMenu[index].isSubmenuOpen) {
        submenuElement.classList.add("open");
        submenuElement.classList.remove("closing");
      } else {
        submenuElement.classList.remove("open");
        submenuElement.classList.add("closing");
      }
    }
  };

  return (
    <div className="mobile-navbar">
      <img
        src={companyLogo}
        alt="Company Logo"
        className="mobilecompany-logo"
      />

      <nav className={`mobilemenu ${isMenuOpen ? "open" : ""}`}>
        <img
          src={companyLogo}
          alt="Company Logo"
          className="mobilenavbar-logo"
        />
        <ul>
          {headerMenu.map((item, index) => (
            <li key={index}>
              {item.submenu ? (
                <div
                  className="mobilemenu-item-with-submenu"
                  onClick={() => handleSubmenuToggle(index)}
                >
                  <div className="mobilemenu-item-content">
                    {item.icon}
                    <span>{item.name.en}</span>
                  </div>
                  {item.submenu && (
                    <div className="mobilesubmenu-icon">
                      {item.isSubmenuOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                  )}
                </div>
              ) : (
                <Link to={item.url} onClick={handleToggleMenu}>
                  <div className="mobilemenu-item-content">
                    {item.icon}
                    <span>{item.name.en}</span>
                  </div>
                </Link>
              )}

              {item.submenu && (
                <ul
                  id={`mobilesubmenu-${index}`}
                  className={`mobilesubmenu ${
                    item.isSubmenuOpen ? "open" : ""
                  }`}
                >
                  {item.submenu.map((subitem, subindex) => (
                    <li className="mobilesubmenu-items" key={subindex}>
                      <Link to={subitem.url} onClick={handleToggleMenu}>
                        {subitem.name.en}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="mobile-navbar-buttons">
          {/* {isLoggedIn && (
            <div className="mobile-header-profile-main">
              <div className="mobile-header-profile-info" href="/profile">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQFBQ5ZCMk8_0g/profile-displayphoto-shrink_100_100/0/1701929923055?e=1714608000&v=beta&t=7AgWSQARYO7GMiW8z6Q3z6yVlYMKvkIn3ypBjtx2za4"
                  alt=""
                  className="mobile-header-profile-image"
                />
                <div className="mobile-header-profile-user">
                  <h3>thowfick</h3>
                </div>
              </div>
              <a href="/logout" className="mobile-header-profile-logout">
                <IoMdLogOut />
              </a>
            </div>
          )} */}

          {isAllowedCareersRoute && (
            <a href="/login-careers" className="mobileheader-btn">
              Careers Login
            </a>
          )}
          {isAllowedProductsRoute && (
            <a href="/product-login" className="mobileheader-btn">
              Products Login
            </a>
          )}
          {!isAllowedCareersRoute && !isAllowedProductsRoute && (
            <a href="/get-started" className="mobileheader-btn">
              Get Started
            </a>
          )}
        </div>
      </nav>

      <div
        className={`mobilemenu-icon ${isMenuOpen ? "open" : ""}`}
        onClick={handleToggleMenu}
      >
        {isMenuOpen ? <FiX className="mob-header-closeicon" /> : <FiMenu />}
      </div>
    </div>
  );
};

export default MobileNavbar;
