import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaClipboardCheck, FaFileAlt, FaRocket } from "react-icons/fa";
import "./EfficiencyPage.css";

const EfficiencyPage = () => {
  return (
    <div className="efficiency-section py-5">
      <Container>
        {/* Header */}
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="fw-bold fs-1">Boost Efficiency by Automating Work</h2>
            <p className="text-muted">
              Save time by eliminating repetitive tasks, allowing accountants to
              focus on high-value advisory services.
            </p>
          </Col>
        </Row>

        {/* Cards */}
        <Row className="g-4">
          <Col md={4}>
            <div className="efficiency-card card-1 text-white">
              <FaClipboardCheck className="card-icon" />
              <h2>99%</h2>
              <h5 className="fs-3">Data Accuracy</h5>
              <p>Minimize errors, <br /> maximize precision</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="efficiency-card card-2 text-white">
              <FaFileAlt className="card-icon" />
              <h2>40%</h2>
              <h5 className="fs-3">Less Manual Work</h5>
              <p>Automate tasks and <br /> focus on growth</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="efficiency-card card-3 text-white">
              <FaRocket className="card-icon" />
              <h2>80%</h2>
              <h5 className="fs-3">Faster Reporting</h5>
              <p>Generate reports <br /> instantly with AI</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EfficiencyPage;
