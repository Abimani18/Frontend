import React, { useState, useEffect } from "react";
import "./Header.css";
import headerMenu from "../../../../../data/commonData/headerData/headerData";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
  const [currentNav, setCurrentNav] = useState(null);
  const [navsVisited, setNavsVisited] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const careersBaseRoute = "/careers";
  const productsBaseRoute = "/products";
  const [isLoggedIn] = useState(true); // Define isLoggedIn state
  const [isProfileDropdownVisible, setProfileDropdownVisible] = useState(false);

  const isAllowedCareersRoute = location.pathname.startsWith(careersBaseRoute);
  const isAllowedProductsRoute =
    location.pathname.startsWith(productsBaseRoute);

  const handleMouseEnter = (e, item) => {
    setCurrentNav(item.name.en);
    setNavsVisited({
      ...navsVisited,
      [item.name.en]: true,
    });
  };

  const handleMouseLeave = () => {
    setCurrentNav(null);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openProfileDropdown = () => {
    setProfileDropdownVisible(true);
  };

  const closeProfileDropdown = () => {
    setProfileDropdownVisible(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>

      <nav className="navbar">
        <ul className="nav__links ">
          {headerMenu.map((item, index) => (
            <li
              key={index}
              data-expand={item.name.en}
              className={`nav--link ${
                currentNav === item.name.en ? "hover" : ""
              }`}
              // className={`nav--link${
              //   currentNav === item.name.en || navsVisited[item.name.en]
              //     ? "hover"
              //     : ""
              // }`}
              onMouseEnter={(e) => handleMouseEnter(e, item)}
              // onMouseLeave={handleMouseLeave}
            >
              <a href={item.url}>{item.name.en}</a>
              {item.submenu && currentNav === item.name.en && (
                <ul
                  className={`submenu shadow p-3 rounded-4 ${
                    currentNav === item.name.en ? "active" : ""
                  }`}
                   onMouseLeave={handleMouseLeave}
                >
                  {/* <div className="submenu-list p-3" onMouseLeave={handleMouseLeave}>
                    {item.submenu.map((subItem, subIndex) => (
                      <div key={subIndex} className="submenu-item-container" >
                        <li >
                          <a href={subItem.url} className="submenu-link" >
                            <div className="submenu-content">
                              <img  src={subItem.icon}alt="jones" style={{width:"20px"}}/>
                           {}
                              <div className="submenu-text-content text-start p-3">
                                <span className="submenu-name">
                                  {subItem.name.en}
                                </span>
                                <span className="submenu-description">
                                  {subItem.description}
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      </div>
                    ))}
                  </div> */}
                  <div className="container">
                    <div className="row h-100 w-100">
                      <div className="col-md-8 d-flex row-cols-md-1 row-cols-md-4 flex-wrap flex-start  border-secondary p-1" style={{height:"308px"}}>
                        {item.submenu.map((subItem, subIndex) => (
                          <div
                            key={subIndex}
                            className="submenu-item-container"
                          >
                            <li>
                              <a href={subItem.url} className="submenu-link">
                                <div className="submenu-content">
                                  <img
                                    src={subItem.icon}
                                    alt="jones"
                                    style={{ width: "20px" }}
                                  />
                                  {}
                                  <div className="submenu-text-content p-1">
                                    <span className="submenu-name">
                                      {subItem.name.en}
                                    </span>
                                    <span className="submenu-description">
                                      {subItem.description}
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </div>
                        ))}
                      </div>
                      <div className="col-md-4 p-3">
                        <video
                          className="rounded"
                          width="400"
                          controls
                          autoPlay
                          muted
                          loop
                        >
                          <source
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                    <div
                      className="row d-flex justify-content-evenly align-items-end mt-5"
                      style={{ marginTop: "50px" }}
                    >
                      <div className="col-auto d-flex g-3 gap-1">
                        <i class="fa-brands fa-facebook fs-5"></i>
                        <a src="" target="blank" className="fa-blue">
                          Facebook
                        </a>
                      </div>
                      <div className="col-auto d-flex g-3 gap-1">
                        <i class="fa-brands fa-instagram fs-5"></i>
                        <a
                          src="https://www.instagram.com/imaggar_technologies/"
                          target="blank"
                          className="fa-blue"
                        >
                          Instagram
                        </a>
                      </div>
                      <div className="col-auto d-flex g-3 gap-1">
                        <i class="fa-brands fa-linkedin fs-5"></i>
                        <a
                          src="https://www.linkedin.com/company/imaggar-technologies/posts/?feedView=all"
                          target="blank"
                          className="fa-blue"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* {!isAllowedCareersRoute && !isAllowedProductsRoute && ( */}
      <a href="/get-started" className="get">
      {/* className="get-started  rounded-pill text-decoration-none text-white" */}
                      {/* <div className="circle-one rounded-4 circle-1"></div>
                      <div className="circle-two rounded-4 circle-2"></div> */
                       <Button className="get-started cta rounded-pill fs-5">
                      
                        <span className="span">Get Started</span>
                        <svg className="second" width="30px" height="30px" viewBox="0 0 66 43">
                          <g id="arrow" fill="none" stroke="white" strokeWidth="3">
                            <path className="one" d="M40.1544 3.5L62.9999 21.5L40.1544 39.5"/>
                            <path className="two" d="M3 21.5H60"/>
                            <path className="three" d="M3 21.5H60"/>
                          </g>
                        </svg>
                      </Button>}
                      {/* Get Started <GoArrowUpRight size={20} /> */}
                    </a>
      {/* <a href="/get-started" className="header-btn ">
        Get Started
      </a> */}
      {/* )} */}

      {/* <div className="buttons">
        {isAllowedCareersRoute && (
          <a href="/login-careers" className="header-btn">
            Careers Login
          </a>
        )}
        {isAllowedProductsRoute && (
          <a href="/product-login" className="header-btn">
            Products Login
          </a>
        )}
        {!isAllowedCareersRoute && !isAllowedProductsRoute && (
          <a href="/get-started" className="header-btn">
            Get Started
          </a>
        )}
        {isLoggedIn && (
          <div
            className="header-profile"
            onMouseEnter={openProfileDropdown}
            onMouseLeave={closeProfileDropdown}
          >
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="Profile"
              className="header-profile-image"
            />

            {isProfileDropdownVisible && (
              <ul className="profile-dropdown">
               
                <li>
                  <a href="/profile">Profile</a>
                </li>
                <li>
                  <button>Logout</button>
                </li>
              </ul>
            )}
          </div>
        )}
      </div> */}
    </header>
  );
};

export default Header;
