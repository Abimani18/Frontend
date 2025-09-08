import React from "react";
import "./AiServices.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const AiServices = () => {
  const services = [
    {
      img:"https://tse4.mm.bing.net/th/id/OIP.LmfjQBA4RnzX2ntwYjt2twHaD4?pid=Api&P=0&h=180",
      title: "AI Automation Hub",
      text: "Streamline workflows, reduce manual tasks, and boost productivity with intelligent automation.",
    },
    {
      img:"https://tse1.mm.bing.net/th/id/OIP.RlTOV8t4Y0ItJ3UiApDhyAHaEK?pid=Api&P=0&h=180",
      title: "AI Analytics Engine",
      text: "Gain real-time insights, predict trends, and make data-driven decisions for smarter growth.",
    },
    {
      img:"https://tse2.mm.bing.net/th/id/OIP.XN3p13pWEt-5q6_R13CzLAHaEP?pid=Api&P=0&h=180",
      title: "Smart AI Chatbot",
      text: "Enhance customer engagement with personalized, AI-driven interactions.",
    },
    {
      img:"https://tse1.mm.bing.net/th/id/OIP.rjDsTj6kh1QREcoL4T6-pAHaD6?pid=Api&P=0&h=180",
      title: "Custom AI Solutions",
      text: "Tailor AI to fit your business needs, from startups to enterprises.",
    },
    {
      img:"https://tse1.mm.bing.net/th/id/OIP.hkrri66D1L2EvlG4FnfZqQHaFB?pid=Api&P=0&h=180",
      title: "AI Virtual Assistant",
      text: "Support customers 24/7 with conversational AI that understands intent.",
    },
  ];

  return (
    <Container className="py-3 text-center">
      {/* Heading */}
      <h2 className="mb-5 fw-bold fs-1">
        Power your business with AI. <br /> Scale without limits!
      </h2>

      {/* First row - 2 cards */}
      <Row className="g-4 d-flex justify-content-center mb-4" data-aos="fade-up"  data-aos-duration="2000">
        {services.slice(0, 2).map((service, idx) => (
          <Col
            key={idx}
            xs={12}
            md={6}
            lg={6}
            className="d-flex justify-content-center"
          >
            <Card className="shadow border-0 rounded-4 h-100 w-100 ai-card">
              <img
              className="service-img"
              src={service.img}
              alt="service-img"
                style={{
                  height: "300px",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
              />
              <Card.Body>
                <Card.Title className="fw-semibold fs-3">{service.title}</Card.Title>
                <Card.Text>{service.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Second row - 3 cards */}
      <Row className="g-4 d-flex justify-content-center"  data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1200">
        {services.slice(2, 5).map((service, idx) => (
          <Col
            key={idx}
            xs={12}
            md={6}
            lg={4}
            className="d-flex justify-content-center"
          >
            <Card className="shadow border-0 rounded-4 h-100 w-100 ai-card">
              <img src={service.img}
              className="service-img"
              alt="ai-img"
                style={{
                  height: "300px",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
              />
              <Card.Body>
                <Card.Title className="fw-semibold fs-3">{service.title}</Card.Title>
                <Card.Text>{service.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AiServices;
