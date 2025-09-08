// import React, { useState } from 'react'
// import "./GenerationPage.css"
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { BsCheckCircle, BsBarChartFill } from "react-icons/bs";
// const GenerationPage = () => {
//     const [cards,setCards] = useState("one");
//     const sections = {
//   one: [
//     { title: "AI-Generated Content", text: "Use AI to generate stunning images, videos", link: true },
//     { title: "Digital Branding & Identity", text: "Craft a futuristic brand presence with custom logos, typography, and abstract aesthetics." }
//   ],
//   two: [
//     { title: "Motion Graphics", text: "Animated visuals stand out more than static images", link: true },
//     { title: "Enhances Brand Identity", text: "Smooth animations give a premium, modern feel that strengthens brand perception." }
//   ],
//   three: [
//     { title: "Integration", text: "Reduces human error by eliminating duplicate data entry.", link: true },
//     { title: "Centralized Information", text: "CRM, ERP, and marketing tools sync in one place" }
//   ]
// };

    

//   return (
//     <Container fluid className="py-5 mt-5" style={{ background: "#f9f9f9" }}>
//       <Container>
//         {/* Heading Section */}
//         <Row className="align-items-center">
//           <Col md={6} className="mb-4">
//             <h1 className="fw-bold display-4">SHAPING THE NEXT GENERATION</h1>
//             <p className="text-muted mt-3">
//               At Eupho, we redefine the digital landscape with futuristic
//               aesthetics and immersive 3D experiences.
//             </p>

//             {/* Services list */}
//             <Row className="mt-4">
//               <Col xs={6}>
//                 <p>
//                   <BsCheckCircle className="text-success me-2" />
//                   3D Web Design
//                 </p>
//                 <p>
//                   <BsCheckCircle className="text-success me-2" />
//                   Motion Graphics
//                 </p>
//                 <p>
//                   <BsCheckCircle className="text-success me-2" />
//                   AI Personalization
//                 </p>
//               </Col>
//               <Col xs={6}>
//                 <p>
//                   <BsCheckCircle className="text-success me-2" />
//                   Web3 Integration
//                 </p>
//                 <p>
//                   <BsCheckCircle className="text-success me-2" />
//                   AR Experiences
//                 </p>
//                 <p>
//                   <BsCheckCircle className="text-success me-2" />
//                   Brand Identity
//                 </p>
//               </Col>
//             </Row>
//           </Col>

//           {/* Right Image + Card */}
//           <Col md={6} className="text-center position-relative">
//             <div
//               style={{
//                 background: "#ddd",
//                 borderRadius: "20px",
//                 height: "250px",
//               }}
//             ></div>
//             {/* <Card
//               className="p-3 position-absolute"
//               style={{
//                 bottom: "-40px",
//                 left: "30%",
//                 transform: "translateX(-50%)",
//                 width: "70%",
//                 borderRadius: "15px",
//                 boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//               }}
//             >
//               <small className="text-muted">
//                 Through cutting-edge design, fluid motion, and bold
//               </small>
//               <Row className="mt-3 align-items-center">
//                 <Col xs={4} className="text-center">
//                   <BsBarChartFill size={25} className="text-danger" />
//                 </Col>
//                 <Col xs={4} className="fw-bold fs-4">
//                   40%
//                 </Col>
//                 <Col xs={4} className="fw-bold fs-4">
//                   29K
//                 </Col>
//               </Row>
//             </Card> */}
//             <Card
//               className="p-3 position-absolute glass-card"
//               style={{
//                 bottom: "-40px",
//                 left: "30%",
//                 transform: "translateX(-50%)",
//                 width: "70%",
//                 borderRadius: "15px",
//                 boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
//               }}
//             >
//               <small className="text-muted">
//                 Through cutting-edge design, fluid motion, and bold
//               </small>
//               <Row className="mt-3 align-items-center">
//                 <Col xs={4} className="text-center">
//                   <BsBarChartFill size={25} className="text-danger" />
//                 </Col>
//                 <Col xs={4} className="fw-bold fs-4">
//                   40%
//                 </Col>
//                 <Col xs={4} className="fw-bold fs-4">
//                   29K
//                 </Col>
//               </Row>
//             </Card>
//           </Col>
//         </Row>

//         {/* Bottom Section */}

//         <Row className="mt-5">
//           {cards === "one" && (
//             <>
//               <Col md={3} className="mb-4">
//                 <Card className="p-4 shadow-sm h-100 w-100">
//                   <h5>AI-Generated Content</h5>
//                   <p className="text-muted">
//                     Use AI to generate stunning images, videos
//                   </p>
//                   <Button variant="link" className="p-0">
//                     Learn More
//                   </Button>
//                 </Card>
//               </Col>
//               <Col md={4} className="mb-4">
//                 <div
//                   className="h-100 w-100"
//                   style={{
//                     background: "#ddd",
//                     borderRadius: "20px",
//                     height: "200px",
//                   }}
//                 ></div>
//               </Col>
//               <Col md={3} className="mb-4">
//                 <Card className="p-4 shadow-sm h-100 w-100">
//                   <h5>Digital Branding & Identity</h5>
//                   <p className="text-muted">
//                     Craft a futuristic brand presence with custom logos,
//                     typography, and abstract aesthetics.
//                   </p>
//                 </Card>
//               </Col>
//             </>
//           )}
//           {cards === "two" && (
//             <>
//               <Col md={3} className="mb-4">
//                 <Card className="p-4 shadow-sm h-100 w-100">
//                   <h5>Motion Graphics</h5>
//                   <p className="text-muted">
//                     Animated visuals stand out more than static images
//                   </p>
//                   <Button variant="link" className="p-0">
//                     Learn More
//                   </Button>
//                 </Card>
//               </Col>
//               <Col md={4} className="mb-4">
//                 <div
//                   className="h-100 w-100"
//                   style={{
//                     background: "#ddd",
//                     borderRadius: "20px",
//                     height: "200px",
//                   }}
//                 ></div>
//               </Col>
//               <Col md={3} className="mb-4">
//                 <Card className="p-4 shadow-sm h-100 w-100">
//                   <h5>Enhances Brand Identity</h5>
//                   <p className="text-muted">
//                     Smooth animations give a premium, modern feel that
//                     strengthens brand perception.
//                   </p>
//                 </Card>
//               </Col>
//             </>
//           )}
//           {cards === "three" && (
//             <>
//               <Col md={3} className="mb-4">
//                 <Card className="p-4 shadow-sm h-100 w-100">
//                   <h5>Integration</h5>
//                   <p className="text-muted">
//                     Reduces human error by eliminating duplicate data entry.
//                   </p>
//                   <Button variant="link" className="p-0">
//                     Learn More
//                   </Button>
//                 </Card>
//               </Col>
//               <Col md={4} className="mb-4">
//                 <div
//                   className="h-100 w-100"
//                   style={{
//                     background: "#ddd",
//                     borderRadius: "20px",
//                     height: "200px",
//                   }}
//                 ></div>
//               </Col>
//               <Col md={3} className="mb-4">
//                 <Card className="p-4 shadow-sm h-100 w-100">
//                   <h5>Centralized Information</h5>
//                   <p className="text-muted">
//                     CRM, ERP, and marketing tools sync in one place
//                   </p>
//                 </Card>
//               </Col>
//             </>
//           )}
//           <Col md={2} className="mb-4">
//             <ul className="list-unstyled text-muted h-100 w-100 sidebar-list">
//               <li
//                 className={cards === "one" ? "active" : ""}
//                 onClick={() => setCards("one")}
//               >
//                 Development
//               </li>
//               <li
//                 className={cards === "two" ? "active" : ""}
//                 onClick={() => setCards("two")}
//               >
//                 Motion Graphics
//               </li>
//               <li
//                 className={cards === "three" ? "active" : ""}
//                 onClick={() => setCards("three")}
//               >
//                 Integration
//               </li>
//             </ul>
//           </Col>
//         </Row>
//         {/* Right side list */}
//         <Row className="mt-4"></Row>
//       </Container>
//     </Container>
//   );
// }

// export default GenerationPage

import React, { useState } from "react";
import "./GenerationPage.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BsCheckCircle, BsBarChartFill } from "react-icons/bs";

const GenerationPage = () => {
  const [cards, setCards] = useState("one");

  const sections = {
    one: [
      {
        title: "AI-Generated Content",
        text: "Use AI to generate stunning images, videos",
        link: true,
        img:"https://tse1.mm.bing.net/th/id/OIP.RmVvP6mc7CUu0G29O_qEIQHaEU?pid=Api&P=0&h=180"
      },
      {
        title: "Digital Branding & Identity",
        text: "Craft a futuristic brand presence with custom logos, typography, and abstract aesthetics.",
      },
    ],
    two: [
      {
        title: "Motion Graphics",
        text: "Animated visuals stand out more than static images",
        link: true,
        img:"https://tse2.mm.bing.net/th/id/OIP.l5UULS2jX0Y63g-l6VU5YQHaEK?pid=Api&P=0&h=180"
      },
      {
        title: "Enhances Brand Identity",
        text: "Smooth animations give a premium, modern feel that strengthens brand perception.",
      },
    ],
    three: [
      {
        title: "Integration",
        text: "Reduces human error by eliminating duplicate data entry.",
        link: true,
        img:"https://tse2.mm.bing.net/th/id/OIP.ZVK5NmUXkOICQvm95cZY6QHaD5?pid=Api&P=0&h=180"
      },
      {
        title: "Centralized Information",
        text: "CRM, ERP, and marketing tools sync in one place",
      },
    ],
  };

  return (
    <Container fluid className="py-5 mt-5" style={{ background: "#f9f9f9" }}>
      <Container>
        {/* Heading Section */}
        <Row className="align-items-center"  data-aos="fade-left"  data-aos-duration="1200">
          <Col md={6} className="mb-4">
            <h1 className="fw-bold display-4">SHAPING THE NEXT GENERATION</h1>
            <p className="text-muted mt-3">
              At Eupho, we redefine the digital landscape with futuristic
              aesthetics and immersive 3D experiences.
            </p>

            {/* Services list */}
            <Row className="mt-4">
              <Col xs={6}>
                <p>
                  <BsCheckCircle className="text-success me-2" />
                  3D Web Design
                </p>
                <p>
                  <BsCheckCircle className="text-success me-2" />
                  Motion Graphics
                </p>
                <p>
                  <BsCheckCircle className="text-success me-2" />
                  AI Personalization
                </p>
              </Col>
              <Col xs={6}>
                <p>
                  <BsCheckCircle className="text-success me-2" />
                  Web3 Integration
                </p>
                <p>
                  <BsCheckCircle className="text-success me-2" />
                  AR Experiences
                </p>
                <p>
                  <BsCheckCircle className="text-success me-2" />
                  Brand Identity
                </p>
              </Col>
            </Row>
          </Col>

          {/* Right Image + Card */}
          <Col md={6} className="text-center position-relative">
            <div
              // style={{
              //   background: "#ddd",
              //   borderRadius: "20px",
              //   height: "250px",
              // }}
            > <img src="https://tse1.mm.bing.net/th/id/OIP.fvLky6ZZL-Bngkp2TP9LvgHaEK?pid=Api&P=0&h=180" alt="water-img" className="w-100 h-100 rounded-4"/></div>

            <Card
              className="p-3 position-absolute glass-card"
              style={{
                bottom: "-40px",
                left: "30%",
                transform: "translateX(-50%)",
                width: "70%",
                borderRadius: "15px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              <small className="text-muted">
                Through cutting-edge design, fluid motion, and bold
              </small>
              <Row className="mt-3 align-items-center">
                <Col xs={4} className="text-center">
                  <BsBarChartFill size={25} className="text-danger" />
                </Col>
                <Col xs={4} className="fw-bold fs-4">
                  40%
                </Col>
                <Col xs={4} className="fw-bold fs-4">
                  29K
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* Bottom Section */}
        <Row className="mt-5"  data-aos="fade-right"  data-aos-duration="1200">
          {/* Left Card */}
          <Col md={3} className="mb-4">
            <Card className="p-4 shadow-sm h-100 w-100">
              <h5>{sections[cards][0].title}</h5>
              <p className="text-muted">{sections[cards][0].text}</p>
              {sections[cards][0].link && (
                <Button variant="link" className="p-0">
                  Learn More
                </Button>
              )}
            </Card>
          </Col>

          {/* Middle Image */}
          <Col md={4} className="mb-4">
            <img
              src={sections[cards][0].img}
              alt={sections[cards][0].title}
              className="h-100 w-100"
              style={{
                borderRadius: "20px",
                height: "200px",
                objectFit: "cover",
              }}
            />
          </Col>

          {/* Right Card */}
          <Col md={3} className="mb-4">
            <Card className="p-4 shadow-sm h-100 w-100">
              <h5>{sections[cards][1].title}</h5>
              <p className="text-muted">{sections[cards][1].text}</p>
              {sections[cards][1].link && (
                <Button variant="link" className="p-0">
                  Learn More
                </Button>
              )}
            </Card>
          </Col>

          {/* Sidebar */}
          <Col md={2} className="mb-4">
            <ul className="list-unstyled text-muted h-100 w-100 sidebar-list">
              <li
                className={`text-decoration-underline ${
                  cards === "one" ? "active" : ""
                }`}
                onClick={() => setCards("one")}
              >
                Development
              </li>
              <li
                className={`text-decoration-underline ${
                  cards === "two" ? "active" : ""
                }`}
                onClick={() => setCards("two")}
              >
                Motion Graphics
              </li>
              <li
                className={`text-decoration-underline ${
                  cards === "three" ? "active" : ""
                }`}
                onClick={() => setCards("three")}
              >
                Integration
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default GenerationPage;
