import React, { useState } from 'react'
import "./Futures.css"
import { Container, Row, Col, Nav, Card, Image } from "react-bootstrap";
const Futures = () => {
   const contentData = {
    general: {
      date: "24 February 2025",
      title: "The Basics of General Web Design",
      text: "General design focuses on simplicity, usability, and user-friendly interfaces.",
      image: "https://tse3.mm.bing.net/th/id/OIP.DkdY8-0_oSMjD-Iz0XDYugHaHa?pid=Api&P=0&h=180",
      author: "Michello Angella",
      role: "Project Manager",
      background:"https://tse2.mm.bing.net/th/id/OIP.TOZ8ljfQixQ5U6FZ2JGaCAHaEK?pid=Api&P=0&h=180"
    },
    technology: {
      date: "25 February 2025",
      title: "Technology in Modern Web Design",
      text: "New frameworks and tools are transforming how websites are built and optimized.",
      image: "https://up.yimg.com/ib/th/id/OIP.kBYYR1K4b69A9FLskKJXOAHaHa?pid=Api&rs=1&c=1&qlt=95&w=123&h=123",
      author: "John Carter",
      role: "Tech Lead",
      background:"https://tse1.mm.bing.net/th/id/OIP.qavPja1_MNNxxDYpIQLIrwHaEK?pid=Api&P=0&h=180"
    },
    futuristic: {
      date: "26 February 2025",
      title: "The Evolution of Futuristic Web Design",
      text: "The digital world is evolving at an incredible pace, and futuristic web design is at the forefront.",
      image: "https://tse4.mm.bing.net/th/id/OIP.JmMkZ_mIPAUTCCvuPfshBQHaHa?pid=Api&P=0&h=180",
      author: "Sophia Martinez",
      role: "UX Designer",
      background:"https://tse4.mm.bing.net/th/id/OIP.k4IDvhbuf0rgLkMRml3hcAHaEQ?pid=Api&P=0&h=180"
    },
  };
   const [activeTab, setActiveTab] = useState("general");
   const currentContent = contentData[activeTab];

  return (
     <Container fluid className="py-5" style={{ backgroundColor: "#fff" }}>
      <Row className="align-items-start"  data-aos="fade-down" data-aos-duration="1200">
        {/* Left Heading */}
        <Col md={8}>
          <h1 className="fw-bold display-4">EXPERIENCE THE FUTURE</h1>
        </Col>

        {/* Right Subtitle */}
        <Col md={4} className="text-muted">
          <p>
            Step into a new era of digital innovation where <br />
            3D abstraction meets futuristic design.
          </p>
        </Col>
      </Row>
           <Row className="mt-5"  data-aos="fade-up" data-aos-duration="1200">
      {/* Sidebar Tabs */}
      <Col md={2} xs={12} className="mb-4">
        <Nav className="flex-column">
          <Nav.Link
            className={`fw-bold ${activeTab === "general" ? "active" : "text-muted"}`}
            onClick={() => setActiveTab("general")}
          >
            General
          </Nav.Link>
          <Nav.Link
            className={`fw-bold ${activeTab === "technology" ? "active" : "text-muted"}`}
            onClick={() => setActiveTab("technology")}
          >
            Technology
          </Nav.Link>
          <Nav.Link
            className={`fw-bold ${activeTab === "futuristic" ? "active" : "text-muted"}`}
            onClick={() => setActiveTab("futuristic")}
          >
            Futuristic
          </Nav.Link>
        </Nav>
      </Col>

      {/* Center Content */}
      <Col md={7} xs={12} className="mb-4">
        <Card
          style={{
            height: "300px",
            borderRadius: "20px",
            // backgroundColor: "#d3d3d3",
          }}
          className="w-100 d-flex justify-content-center align-items-center text-center p-3 shadow"
        >
         <img src={currentContent.background} className='h-100 w-100 rounded-4' alt="content Illustration" />
        </Card>
      </Col>

      {/* Right Article Info */}
      <Col md={3} xs={12}>
        <p className="text-muted">{currentContent.date}</p>
        <h5 className="fw-bold">{currentContent.title}</h5>
        <p className="text-muted">{currentContent.text}</p>

        {/* Author */}
        <div className="d-flex align-items-center mt-4">
          <Image
            src={currentContent.image}
            roundedCircle
            alt="author"
            width={50}
            height={50}
          />
          <div className="ms-3">
            <h6 className="mb-0">{currentContent.author}</h6>
            <small className="text-muted">{currentContent.role}</small>
          </div>
        </div>
      </Col>
    </Row>

      {/* Bottom Button */}
      <Row className="justify-content-center"  data-aos="fade-up" data-aos-duration="1200">
        <Col xs="auto">
          <button
            className="btn px-4 py-2"
            style={{
              backgroundColor: "#7a3eff",
              color: "#fff",
              borderRadius: "30px",
            }}
          >
            Service
          </button>
        </Col>
      </Row>
    </Container>
  )
}

export default Futures