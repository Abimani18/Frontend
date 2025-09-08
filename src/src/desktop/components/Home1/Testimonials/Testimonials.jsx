

// import React, { useState } from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { BsStarFill, BsChat } from "react-icons/bs";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import "./Testimonials.css";

// const testimonials = [
//   { id: 1, name: "David Muhammad", role: "Founder of Nova", feedback: "Eupho took our vision...", logo: "https://tse2.mm.bing.net/th/id/OIP.RwXJD_UepDy2GTAua72GEgHaHa?pid=Api&P=0&h=180" },
//   { id: 2, name: "Alex Ronter", role: "Creative Director", feedback: "They transformed our website...", logo: "https://tse2.mm.bing.net/th/id/OIP.bIBLjLHl5BQhW1_mZ3cG0QHaHa?pid=Api&P=0&h=180", rating: 5, comments: 25 },
//   { id: 3, name: "Samantha Lionel", role: "CEO of Visionary", feedback: "Working with Eupho was incredible.", logo: "https://tse3.mm.bing.net/th/id/OIP.9ccAtVZ7GqCaHqHhkXBQ3wHaHa?pid=Api&P=0&h=180", rating: 5, comments: 23 },
//   // 4th card -> image only
//   { id: 4, image: "https://img.freepik.com/premium-photo/yellow-blue-fish-water_1003686-11880.jpg" },
//   { id: 5, name: "Linda Smith", role: "Marketing Head", feedback: "Superb team with great communication.", logo: "https://tse2.mm.bing.net/th/id/OIP.bIBLjLHl5BQhW1_mZ3cG0QHaHa?pid=Api&P=0&h=180", rating: 4, comments: 19 },
//   { id: 6, name: "Michael Brown", role: "Tech Lead", feedback: "Loved the futuristic animations!", logo: "https://tse3.mm.bing.net/th/id/OIP.9ccAtVZ7GqCaHqHhkXBQ3wHaHa?pid=Api&P=0&h=180", rating: 5, comments: 30 },
//   { id: 7, name: "Emma Wilson", role: "Project Manager", feedback: "Smooth delivery and modern UI.", logo: "https://tse2.mm.bing.net/th/id/OIP.RwXJD_UepDy2GTAua72GEgHaHa?pid=Api&P=0&h=180", rating: 4, comments: 15 },
//   // 8th card -> image only
//   { id: 8, image: "https://img.freepik.com/premium-photo/yellow-blue-fish-water_1003686-11936.jpg" },
// ];

// const Testimonials = () => {
//   const [page, setPage] = useState(0);
//   const [direction, setDirection] = useState("");

//   const handleNext = () => {
//     setDirection("right");
//     setPage(1);
//   };

//   const handlePrev = () => {
//     setDirection("left");
//     setPage(0);
//   };

//   const visibleCards = page === 0 ? testimonials.slice(0, 4) : testimonials.slice(4, 8);

//   return (
//     <section style={{ padding: "60px 0" }}>
//       <Container>
//         {/* Header */}
//         <Row className="align-items-center mb-5" data-aos="fade-up-right" data-aos-duration="1200">
//           <Col md={8}>
//             <h2 className="fw-bold display-5">
//               WHAT OUR CLIENT SAYS <br /> ABOUT US
//             </h2>
//           </Col>
//           <Col md={4} className="text-md-end text-muted">
//              <p>
//              Our clients experience the future firsthand with <br />
//              cutting-edge 3D design, AI-driven interactions
//             </p>         
//             <div className="d-flex justify-content-end gap-2 mt-4">
//               <Button variant="light" className="rounded-circle shadow-sm" onClick={handlePrev} disabled={page === 0}>
//                 <FaArrowLeft />
//               </Button>
//               <Button variant="light" className="rounded-circle shadow-sm" onClick={handleNext} disabled={page === 1}>
//                 <FaArrowRight />
//               </Button>
//             </div>
//           </Col>
//         </Row>

//         {/* Cards */}
//         <div className={`slider ${direction}`}>
//           <Row className="g-4">
//             {visibleCards.map((item) => (
//               <Col md={6} key={item.id} data-aos="flip-left" data-aos-dutration="5000">
//                 {/* Image card (id 4 or 8) */}
//                 {item.image ? (
//                   <img
//                     src={item.image}
//                     alt="testimonial visual"
//                     className="w-100 h-100 rounded-4 shadow"
//                     style={{ objectFit: "cover" }}
//                   />
//                 ) : (
//                   /* Review card */
//                   <Card className="shadow border-0 rounded-4 p-4 h-100 w-100" data-aos="flip-left" data-aos-dutration="5000">
//                     <Card.Body className="d-flex flex-column">
//                       <div className="d-flex align-items-center mb-3">
//                         <div
//                           style={{
//                             width: "50px",
//                             height: "50px",
//                             borderRadius: "50%",
//                             overflow: "hidden",
//                             marginRight: "15px",
//                           }}
//                         >
//                           <img src={item.logo} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                         </div>
//                         <div>
//                           <h6 className="fw-bold mb-0">{item.name}</h6>
//                           <small className="text-muted">{item.role}</small>
//                         </div>
//                       </div>
//                       <p className="text-muted flex-grow-1">{item.feedback}</p>
//                       {item.rating && (
//                         <div className="d-flex justify-content-between align-items-center mt-3">
//                           <div className="d-flex">
//                             {[...Array(item.rating)].map((_, i) => (
//                               <BsStarFill key={i} color="#FFD700" size={18} className="me-1" />
//                             ))}
//                           </div>
//                           <div className="d-flex align-items-center text-muted">
//                             <small className="me-1">{item.comments}</small>
//                             <BsChat />
//                           </div>
//                         </div>
//                       )}
//                     </Card.Body>
//                   </Card>
//                 )}
//               </Col>
//             ))}
//           </Row>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Testimonials;


import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BsStarFill, BsChat } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  { id: 1, name: "David Muhammad", role: "Founder of Nova", feedback: "Eupho took our vision...", logo: "https://tse2.mm.bing.net/th/id/OIP.RwXJD_UepDy2GTAua72GEgHaHa?pid=Api&P=0&h=180" },
  { id: 2, name: "Alex Ronter", role: "Creative Director", feedback: "They transformed our website...", logo: "https://tse2.mm.bing.net/th/id/OIP.bIBLjLHl5BQhW1_mZ3cG0QHaHa?pid=Api&P=0&h=180", rating: 5, comments: 25 },
  { id: 3, name: "Samantha Lionel", role: "CEO of Visionary", feedback: "Working with Eupho was incredible.", logo: "https://tse3.mm.bing.net/th/id/OIP.9ccAtVZ7GqCaHqHhkXBQ3wHaHa?pid=Api&P=0&h=180", rating: 5, comments: 23 },
  { id: 4, image: "https://img.freepik.com/premium-photo/yellow-blue-fish-water_1003686-11880.jpg" },
  { id: 5, name: "Linda Smith", role: "Marketing Head", feedback: "Superb team with great communication.", logo: "https://tse2.mm.bing.net/th/id/OIP.bIBLjLHl5BQhW1_mZ3cG0QHaHa?pid=Api&P=0&h=180", rating: 4, comments: 19 },
  { id: 6, name: "Michael Brown", role: "Tech Lead", feedback: "Loved the futuristic animations!", logo: "https://tse3.mm.bing.net/th/id/OIP.9ccAtVZ7GqCaHqHhkXBQ3wHaHa?pid=Api&P=0&h=180", rating: 5, comments: 30 },
  { id: 7, name: "Emma Wilson", role: "Project Manager", feedback: "Smooth delivery and modern UI.", logo: "https://tse2.mm.bing.net/th/id/OIP.RwXJD_UepDy2GTAua72GEgHaHa?pid=Api&P=0&h=180", rating: 4, comments: 15 },
  { id: 8, image: "https://img.freepik.com/premium-photo/yellow-blue-fish-water_1003686-11936.jpg" },
];

const Testimonials = () => {
  const [page, setPage] = useState(0);

  const handleNext = () => setPage(1);
  const handlePrev = () => setPage(0);

  return (
    <section style={{ padding: "60px 0", overflow: "hidden" }}>
      <Container>
        {/* Header */}
        <Row className="align-items-center mb-5" data-aos="fade-up-right" data-aos-duration="1200">
          <Col md={8}>
            <h2 className="fw-bold display-5">
              WHAT OUR CLIENT SAYS <br /> ABOUT US
            </h2>
          </Col>
          <Col md={4} className="text-md-end text-muted">
            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button variant="light" className="rounded-circle shadow-sm" onClick={handlePrev} disabled={page === 0}>
                <FaArrowLeft />
              </Button>
              <Button variant="light" className="rounded-circle shadow-sm" onClick={handleNext} disabled={page === 1}>
                <FaArrowRight />
              </Button>
            </div>
          </Col>
        </Row>

        {/* Sliding Wrapper */}
        <div className="slider-wrapper">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${page * 100}%)`,
            }}
          >
            {/* First 4 */}
            <div className="slider-page">
              <Row className="g-4">
                {testimonials.slice(0, 4).map((item) => (
                  <Col md={6} key={item.id} data-aos="flip-left" data-aos-dutration="5000">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt="testimonial visual"
                        className="w-100 h-100 rounded-4"
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <Card className="shadow-sm border-0 rounded-4 p-4 h-100 w-100" data-aos="flip-left" data-aos-dutration="5000">
                        <Card.Body className="d-flex flex-column">
                          <div className="d-flex align-items-center mb-3">
                            <div style={{ width: 50, height: 50, borderRadius: "50%", overflow: "hidden", marginRight: 15 }}>
                              <img src={item.logo} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div>
                              <h6 className="fw-bold mb-0">{item.name}</h6>
                              <small className="text-muted">{item.role}</small>
                            </div>
                          </div>
                          <p className="text-muted flex-grow-1">{item.feedback}</p>
                          {item.rating && (
                            <div className="d-flex justify-content-between align-items-center mt-3">
                              <div className="d-flex">
                                {[...Array(item.rating)].map((_, i) => (
                                  <BsStarFill key={i} color="#FFD700" size={18} className="me-1" />
                                ))}
                              </div>
                              <div className="d-flex align-items-center text-muted">
                                <small className="me-1">{item.comments}</small>
                                <BsChat />
                              </div>
                            </div>
                          )}
                        </Card.Body>
                      </Card>
                    )}
                  </Col>
                ))}
              </Row>
            </div>

            {/* Second 4 */}
            <div className="slider-page">
              <Row className="g-4">
                {testimonials.slice(4, 8).map((item) => (
                  <Col md={6} key={item.id}>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt="testimonial visual"
                        className="w-100 h-100 rounded-4"
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <Card className="shadow-sm border-0 rounded-4 p-4 h-100 w-100">
                        <Card.Body className="d-flex flex-column">
                          <div className="d-flex align-items-center mb-3">
                            <div style={{ width: 50, height: 50, borderRadius: "50%", overflow: "hidden", marginRight: 15 }}>
                              <img src={item.logo} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div>
                              <h6 className="fw-bold mb-0">{item.name}</h6>
                              <small className="text-muted">{item.role}</small>
                            </div>
                          </div>
                          <p className="text-muted flex-grow-1">{item.feedback}</p>
                          {item.rating && (
                            <div className="d-flex justify-content-between align-items-center mt-3">
                              <div className="d-flex">
                                {[...Array(item.rating)].map((_, i) => (
                                  <BsStarFill key={i} color="#FFD700" size={18} className="me-1" />
                                ))}
                              </div>
                              <div className="d-flex align-items-center text-muted">
                                <small className="me-1">{item.comments}</small>
                                <BsChat />
                              </div>
                            </div>
                          )}
                        </Card.Body>
                      </Card>
                    )}
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
