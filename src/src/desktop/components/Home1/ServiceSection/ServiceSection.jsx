// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "./ServiceSection.css"; 
// import { MdArrowOutward } from "react-icons/md";

// const ServiceSection = () => {
//   const services = [
//     { title: "AI-Powered Automation",img:"https://tse1.mm.bing.net/th/id/OIP.OYy53wnuEI84ZH273Xl6MwHaES?pid=Api&P=0&h=180" },
//     { title: "Data-Driven Insights",img:"https://tse3.mm.bing.net/th/id/OIP.G-tS9v45he8k3yPQl5m1AwHaEg?pid=Api&P=0&h=180" },
//     { title: "Smart Business Solutions",img:"https://tse4.mm.bing.net/th/id/OIP.Sxjobcz_3PoS9k1HZMmUbQHaEO?pid=Api&P=0&h=180" },
//   ];

//   return (
//     <section className="service-section py-5">
//       <Container>
//         {/* Top Badge */}
//         <div className="text-center mb-3">
//           <span className="badge-service">Best Service</span>
//         </div>

//         {/* Heading */}
//         <h2 className="text-center fw-bold mb-5">
//           Grow Smarter With <br /> Flexible AI Solutions
//         </h2>

//         {/* Cards */}
//         <Row className="g-4">
//           {services.map((service, idx) => (
//             <Col key={idx} md={4} sm={6} xs={12}>
//               <div
//                 className="service-card shadow h-100"
//                 data-aos="flip-left"
//                 data-aos-easing="ease-out-cubic"
//                 data-aos-duration="2000"
//               >
//                 {/* Folder Top Area */}
//                 <img
//                   src={service.img}
//                   className="folder-top w-100 rounded-4"
//                   alt="Service Illustration"
//                 />
//                 {/* Content */}
//                 <div className="p-3 d-flex justify-content-between align-items-center">
//                   <h5 className="service-title">{service.title}</h5>
//                   <Button className="get-started-btn d-flex justify-content-center align-items-center rounded-pill">
//                     Get Started <MdArrowOutward className="ms-1" />
//                   </Button>
//                 </div>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default ServiceSection;


import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ServiceSection.css"; 
import { MdArrowOutward } from "react-icons/md";

const ServiceSection = () => {
  const services = [
    { 
      title: "AI-Powered Automation",
      img:"https://tse1.mm.bing.net/th/id/OIP.OYy53wnuEI84ZH273Xl6MwHaES?pid=Api&P=0&h=180" 
    },
    { 
      title: "Data-Driven Insights",
      img:"https://tse3.mm.bing.net/th/id/OIP.G-tS9v45he8k3yPQl5m1AwHaEg?pid=Api&P=0&h=180" 
    },
    { 
      title: "Smart Business Solutions",
      img:"https://www.ryadel.com/wp-content/uploads/2022/04/data-visualization-tools-dashboard.jpg" 
    },
  ];

  return (
    <section className="service-section py-5">
      <Container>
        <div className="text-center mb-3">
          <span className="badge-service">Best Service</span>
        </div>

        <h2 className="text-center fw-bold mb-5">
          Grow Smarter With <br /> Flexible AI Solutions
        </h2>

        <Row className="g-4">
          {services.map((service, idx) => (
            <Col key={idx} md={4} sm={6} xs={12}>
              <div className="service-card">
  <div className="service-card-inner">
    {/* Front */}
    <div className="card-front">
      <img src={service.img} alt={service.title} />
    </div>

    {/* Back */}
    <div className="card-back">
      <h5 className="service-title">{service.title}</h5>
      <Button className="get-started-btn d-flex justify-content-center align-items-center rounded-pill">
        Get Started <MdArrowOutward className="ms-1" />
      </Button>
    </div>
  </div>
</div>

            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceSection;