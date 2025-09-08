import React from 'react'
import "./Gallary.css"
import { Container, Row, Col } from "react-bootstrap";
const Gallary = () => {
     const instaPosts = [
    {
      img: "https://www.newafricasports.co.za/wp-content/uploads/2021/04/VK-RCB.jpeg",
      link: "https://www.instagram.com/p/example1/",
    },
    {
      img: "https://i.ytimg.com/vi/UOQS-bZ4LQc/maxresdefault.jpg",
      link: "https://www.instagram.com/p/example2/",
    },
    {
      img: "https://cricketaddictor.com/wp-content/uploads/2021/04/Chris-Gayle-5.jpg",
      link: "https://www.instagram.com/p/example3/",
    },
    {
      img: "https://media.crictracker.com/media/attachments/1685394467279_Glenn-Maxwell.jpeg",
      link: "https://www.instagram.com/p/example4/",
    },
     {
      img: "https://preview.redd.it/ultimate-finisher-dk-popa-appreciation-post-v0-djeuepsrkvtc1.png?width=1080&crop=smart&auto=webp&s=fa79c4f3f4c9ed312ff6320e6018776f15d7cb42",
      link: "https://www.instagram.com/p/example5/",
    },
     {
      img: "https://etvbharatimages.akamaized.net/etvbharat/prod-images/26-04-2024/1200-675-21318459-464-21318459-1714112732945.jpg",
      link: "https://www.instagram.com/p/example5/",
    },
  ];
  return (
     <section className="insta-gallery mb-5">
      <Container fluid className="p-0">
        <Row className="g-0"  data-aos="fade-up" data-aos-duration="1200">
          {instaPosts.map((post, idx) => (
            <Col key={idx} lg={2} md={6} sm={12}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="insta-link"
              >
                <img
                  src={post.img}
                  alt={`Instagram post ${idx + 1}`}
                  className="gallery-img  w-100"
                />
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Gallary