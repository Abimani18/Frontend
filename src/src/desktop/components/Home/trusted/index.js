// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./trusted.css";

// import client1 from "./assets/client/client1.png";
// import client2 from "./assets/client/client2.png";
// import client3 from "./assets/client/client3.jpg";
// import client4 from "./assets/client/client4.png";
// import client5 from "./assets/client/client5.png";
// import client6 from "./assets/client/client6.png";
// import client7 from "./assets/client/client7.png";
// import client8 from "./assets/client/client8.png";
// import client9 from "./assets/client/client9.png";
// import client10 from "./assets/client/client10.png";


// const images = [
//   client1,
//   client2,
//   client3,
//   client4,
//   client5,
//   client6,
//   client7,
//   client8,
//   client9,
//   client10,
// ];

// const Trusted = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 5000,
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     cssEase: "linear",
//     pauseOnHover: false,
//     arrows: false,
//     centerMode: true,
//     centerPadding: "50px",
//     swipeToSlide: true,
//     draggable: true,

//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           centerMode: false,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 1280,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 1440,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 1600,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 1920,
//         settings: {
//           slidesToShow: 6,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="client-slider">
//       <h2>Trusted by 10+ Leading Brands</h2>
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className="client-slide">
//             <img src={image} alt={`Client ${index + 1}`} />
//           </div>
//         ))}
//       </Slider>
//     </div>
   
//   );
// };

// export default Trusted;

// import React from 'react'

// const Trusted = () => {
//   return (
//     <div className="container mt-5 mb-5">
//       <div className="row  d-flex align-items-center  mt-5">
//           <h3 className='heading-text d-flex justify-content-center mt-5'>The Future is Voice-First and We're Leading The Way</h3>
//       </div>
//         <div className="row d-flex justify-content-evenly align-items-center  mt-5">
//             <div className='col-auto fs-6 text-secondary'>
//                 <p>Build on cutting-edge <br/> NLP & speech synthesis.</p>
//                 <p style={{marginTop:"170px"}}>Commited to ethical <br/> AI & data transparency.</p>
//             </div>
//           <div className="col-auto  card bg-secondary" style={{ width: "18rem",height:"18rem" }}></div>
//              <div className='col-auto fs-6 text-secondary'>
//                 <p>Multilingual, multicultural and<br/> privacy-conscious by default.</p>
//                 <p style={{marginTop:"170px"}}>No black boxes, we're <br/> commited to explainable AI.</p>
//             </div>
//         </div>
//       </div>
//   );
// }

// export default Trusted

import React, { useEffect, useRef, useState } from 'react';
import './trusted.css'; // Import the CSS

const Trusted = () => {
    const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(false);
            setTimeout(() => setAnimate(true), 50);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

     
  return (
    // <div className="container ">
    //   <div className="row mt-5 mb-5">
    //     <h2 className="text-center fw-bold my-5">
    //       The Future is Voice-First and We're Leading The Way
    //     </h2>
    //   </div>

    //   <div className="row justify-content-center align-items-center text-center">
    //     {/* Left Text */}
    //     <div className="col-md-3 text-secondary">
    //       <p>01<br />Built on cutting-edge<br />NLP & speech synthesis.</p>
    //       <p className="mt-5">02<br />Committed to ethical<br />AI & data transparency.</p>
    //     </div>

    //     {/* Center Boxes */}
    //     <div className="col-md-6 d-flex justify-content-center">
    //       <div className="box-container">
    //         <div className='box-1'></div>
    //         <div className='box-2'></div>
    //         <div className='box-3'></div>
    //         <div className='box-4'></div>

    //       </div>
    //     </div>

    //     {/* Right Text */}
    //     <div className="col-md-3 text-secondary">
    //       <p>03<br />Multilingual, multicultural and<br />privacy-conscious by default.</p>
    //       <p className="mt-5">04<br />No black boxes. We're<br />committed to explainable AI.</p>
    //     </div>
    //   </div>
    // </div>
     <div className="voice-section" ref={sectionRef}>
      <div className="container-fluid">
        <h2 className="text-center fw-bold my-5 text-white">
          The Future is Voice-First and We're Leading The Way
        </h2>

        <div className="animation-area">
          <div className="center-start">
            <div className={`card-box card-1 ${animate ? "to-pos1" : ""}`}></div>
            <div className={`card-box card-2 ${animate ? "to-pos2" : ""}`}></div>
            <div className={`card-box card-3 ${animate ? "to-pos3" : ""}`}></div>
            <div className={`card-box card-4 ${animate ? "to-pos4" : ""}`}></div>
          </div>

          <div className="side-text ">
            <div className="text-wrapper pos1 mb-5">
              <p><span className="number">01</span><br/>Built on cutting-edge<br/>NLP & speech synthesis.</p>
            </div>
            <div className="text-wrapper pos2 mb-5">
              <p><span className="number">02</span><br/>Committed to ethical<br/>AI & data transparency.</p>
            </div>
          </div>

          <div className="side-text ">
            <div className="text-wrapper pos3 mb-5">
              <p><span className="number">03</span><br/>Multilingual, multicultural and<br/>privacy-conscious by default.</p>
            </div>
            <div className="text-wrapper pos4 mb-5">
              <p><span className="number">04</span><br/>No black boxes. We're<br/>committed to explainable AI.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      
  );
};

export default Trusted;
