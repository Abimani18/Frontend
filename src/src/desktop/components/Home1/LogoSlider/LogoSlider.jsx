import React from "react";
import { Container } from "react-bootstrap";
import "./LogoSlider.css";

const LogoSlider = () => {
  const logos = [
    "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07203411/cloudcode-logo-design-by-jeroen-van-eerden-dribbble.png",
    "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07203440/codecape-by-mera-design-crowd-designcrowd.png",
    "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07203451/cx-for-conexris-or-modern-logo-design-by-md-zahid-hasan-dribbble.png",
    "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07204438/owire-or-logo-design-by-oleg-coada-dribbble.png",
    "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07203440/codecape-by-mera-design-crowd-designcrowd.png",
    "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07203411/cloudcode-logo-design-by-jeroen-van-eerden-dribbble.png",
    "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07203440/codecape-by-mera-design-crowd-designcrowd.png",
    "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07203411/cloudcode-logo-design-by-jeroen-van-eerden-dribbble.png",
    "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07203451/cx-for-conexris-or-modern-logo-design-by-md-zahid-hasan-dribbble.png",
    "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/07204438/owire-or-logo-design-by-oleg-coada-dribbble.png",
  ];

  return (
    <div className="logo-slider-wrapper shadow mb-5 mt-5">
      <Container fluid className="logo-slider">
        <div className="logo-track">
          {logos.concat(logos).map((logo, i) => (
            <div key={i} className="logo-item">
              <img src={logo} alt={`logo-${i}`} className="h-100 w-100"/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LogoSlider;
