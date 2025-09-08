import React, { useState } from 'react'
import "./LandingPage.css"
import { Container, Row, Col, Button, Badge, Image } from "react-bootstrap";
import { FaCircle, FaCirclePlay } from 'react-icons/fa6';
import { MdNotificationsActive } from "react-icons/md";
import { GiPencilBrush } from "react-icons/gi";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdArrowForward } from "react-icons/io";
const LandingPage = () => {
  return (
    <section className="hero-section">
      <Container>
        {/* top side */}
        <Row className="d-flex justify-content-start align-items-center">
          <Col
            md={5}
            className="d-flex justify-content-start text-center mb-4 mb-md-0 align"
          >
            <div className="video-box position-relative rounded-4 shadow-lg ">
              <iframe
                className="rounded-4"
                width="300"
                height="400"
                src="https://www.youtube.com/embed/I-flBcJeadQ?si=UiEzFArRgem2tvwm"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              {/* <video
                          className="rounded-4 w-100 h-100"
                          controls
                          autoPlay
                          muted
                          loop
                          style={{marginBottom:"160px"}}
                        >
                          <source
                            src="https://cdn.pollo.ai/prod/public/video/demo/image-to-video.mp4"
                            type="video/mp4"
                          />
                        </video> */}
              {/* <div className="play-btn">
                <FaCirclePlay />
              </div> */}
              <div className="job-btn shadow rounded-pill">
                <MdNotificationsActive style={{ color: "#ff6200" }} />
                <button>Job available</button>
              </div>
              {/* <div className="image-scard rounded-4"></div> */}
            </div>
          </Col>
          <Col md={7}>
            <div className="text-dark mb-3 d-flex gap-3 ">
              {/* <GiPencilBrush
                style={{ color: "white", backgroundColor: "#ff6200" }}
                className="rounded-circle"
              />{" "} */}
              Revolution from Tamilnadu
            </div>
            <h1 className="fw-bold display-5">
              Mechanize Your Small <br /> Business !
            </h1>
            <p className="text-muted mb-2">
              Like an International corporate Business, powered by <br />
              cutting edge technologies.
            </p>
            <div className="d-flex flex-column align-items-start gap-3 ">
              {/* <Button className="get-started  rounded-pill fs-5">
                <div className="circle-one rounded-4"></div>
                <div className="circle-two rounded-4"></div>
                Get Started <GoArrowUpRight size={20} />
              </Button> */}
              <a href="/get-started" className='get'>
              <Button className="get-started cta rounded-pill fs-5">
                <span className="span">Get Started</span>
                <svg
                  className="second"
                  width="30px"
                  height="30px"
                  viewBox="0 0 66 43"
                >
                  <g id="arrow" fill="none" stroke="white" strokeWidth="3">
                    <path
                      className="one"
                      d="M40.1544 3.5L62.9999 21.5L40.1544 39.5"
                    />
                    <path className="two" d="M3 21.5H60" />
                    <path className="three" d="M3 21.5H60" />
                  </g>
                </svg>
              </Button>
             </a>
              <Button className="discover  rounded-4 mb-0 ">
                <button
                  className="btn d-button"
                  style={{ backgroundColor: "white" }}
                >
                  Discover more
                </button>
                <div className="avatars d-flex">
                  <div className="circle">
                    <Image
                      src="https://up.yimg.com/ib/th/id/OIP.kBYYR1K4b69A9FLskKJXOAHaHa?pid=Api&rs=1&c=1&qlt=95&w=123&h=123"
                      roundedCircle
                      alt="author"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="circle">
                    <Image
                      src="https://up.yimg.com/ib/th/id/OIP.kBYYR1K4b69A9FLskKJXOAHaHa?pid=Api&rs=1&c=1&qlt=95&w=123&h=123"
                      roundedCircle
                      alt="author"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="circle">
                    <Image
                      src="https://up.yimg.com/ib/th/id/OIP.kBYYR1K4b69A9FLskKJXOAHaHa?pid=Api&rs=1&c=1&qlt=95&w=123&h=123"
                      roundedCircle
                      alt="author"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>

                <IoMdArrowForward size={30} />
              </Button>
            </div>
          </Col>
        </Row>
        {/* bottom side */}

        <Row className="align-items-center bottom-slide">
          {/* Left side - feature cards */}
          <Col md={7} className="mb-4 mb-md-0">
            <Row className="g-3">
              <Col xs={12} md={4}>
                <div className="feature-card text-white rounded-4 p-3 shadow">
                  <h5>12+ Products</h5>
                  <div className="avatars d-flex">
                    <div className="circle">
                      <Image
                        src="https://tse4.mm.bing.net/th/id/OIP.565VfhkrC0iYZivhVkgk4AHaHa?pid=Api&P=0&h=180"
                        roundedCircle
                        alt="author"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="circle">
                      <Image
                        src="https://tse4.mm.bing.net/th/id/OIP.565VfhkrC0iYZivhVkgk4AHaHa?pid=Api&P=0&h=180"
                        roundedCircle
                        alt="author"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="circle">
                      <Image
                        src="https://tse4.mm.bing.net/th/id/OIP.565VfhkrC0iYZivhVkgk4AHaHa?pid=Api&P=0&h=180"
                        roundedCircle
                        alt="author"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="circle plus">+</div>
                  </div>
                </div>
              </Col>

              {/* <Col xs={12} md={3}>
                <div className="feature-card bg-secondary rounded-4 p-3 shadow h-100 w-100"></div>
              </Col> */}

              <Col xs={12} md={5}>
                <div className="feature-card text-white rounded-4 p-3 shadow ">
                  <h5>8 Services</h5>
                  <div className="avatars d-flex w-100 h">
                    <div className="circle">
                      <Image
                        src="https://tse3.mm.bing.net/th/id/OIP.VFUgpgp-ajImkJbi3x2d5wHaHa?pid=Api&P=0&h=180"
                        roundedCircle
                        alt="author"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="circle">
                      <Image
                        src="https://tse3.mm.bing.net/th/id/OIP.VFUgpgp-ajImkJbi3x2d5wHaHa?pid=Api&P=0&h=180"
                        roundedCircle
                        alt="author"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="circle">
                      <Image
                        src="https://tse3.mm.bing.net/th/id/OIP.VFUgpgp-ajImkJbi3x2d5wHaHa?pid=Api&P=0&h=180"
                        roundedCircle
                        alt="author"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="circle plus">+</div>
                  </div>
                  <div className="feature-scard mt-3">
                    <div className="feature-btn mb-3 w-75 ms-2 rounded-4"></div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          {/* Right side - logos */}
          <Col md={5} className="text-center mt-5">
            <p className="small text-muted">
              Trusted by thousands of companies.
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-4 mb-3">
              <img
                src="https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/DPIIT-header.png"
                alt="dpiit"
                height="40"
                width={100}
              />
              <img
                src="https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/DPIIT-header.png"
                alt="startup"
                height="40"
                width={100}
              />
            </div>
            <p className="small text-muted mb-0">
              Trusted by thousands of companies.
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-4">
              <img
                src="https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07203411/cloudcode-logo-design-by-jeroen-van-eerden-dribbble.png"
                alt="dpiit"
                height="40"
                width={80}
              />
              <img
                src="https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07203440/codecape-by-mera-design-crowd-designcrowd.png"
                alt="startup"
                height="40"
                width={80}
              />
              <img
                src="https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07203451/cx-for-conexris-or-modern-logo-design-by-md-zahid-hasan-dribbble.png"
                alt="jobsage"
                height="30"
                width={80}
              />
              <img
                src="https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07204438/owire-or-logo-design-by-oleg-coada-dribbble.png"
                alt="ioasis"
                height="30"
                width={80}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LandingPage