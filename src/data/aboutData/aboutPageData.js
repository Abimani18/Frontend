// Import any images needed for the about us section
import DetailsImg from '../image1.gif';

const aboutUsContent = {
  LandingContent: {
    title: "About Imaggar Technologies",
    paragraph: "At Imaggar Technologies, we are dedicated to transforming the digital landscape through cutting-edge AI solutions. Our commitment is to streamline operations, captivate audiences with immersive technologies, and embrace the latest innovations for unparalleled efficiency and productivity.",
    imageAlt: "Imaggar Technologies Office",
    missionVision: {
      mission: "Our Mission",
      missionStatement: "To empower businesses with transformative AI solutions, driving innovation and excellence in every digital interaction.",
      vision: "Our Vision",
      visionStatement: "To be a global leader in AI-driven technologies, creating a positive impact on businesses and society.",
    },
  },
  DetailsContent: {
    title: "Life at Imaggar Technologies",
    paragraph: "At Imaggar Technologies, we believe in fostering an environment that encourages innovation, excellence, collaboration, integrity, and customer-centricity. Joining Imaggar means becoming part of a dynamic team that values continuous growth, work-life balance, and strives for excellence.",
    features: [
      {
        title: "Innovation",
        heading: "Embrace Creativity",
        paragraph: "We encourage our team to think outside the box, fostering creativity and constantly seeking innovative solutions.",
        imageUrl: DetailsImg,
        imageAlt: 'Innovation Image',
      },
      {
        title: "Excellence",
        heading: "Strive for Excellence",
        paragraph: "We believe in striving for excellence in all aspects of our work, setting high standards and delivering top-notch solutions.",
        imageUrl: DetailsImg,
        imageAlt: 'Excellence Image',
      },
      {
        title: "Collaboration",
        heading: "Foster Collaboration",
        paragraph: "Our work environment is collaborative and inclusive, encouraging teamwork and open communication.",
        imageUrl: DetailsImg,
        imageAlt: 'Collaboration Image',
      },
      {
        title: "Integrity",
        heading: "Uphold Integrity",
        paragraph: "We uphold the highest standards of integrity and ethics, ensuring trust and transparency in all our interactions.",
        imageUrl: DetailsImg,
        imageAlt: 'Integrity Image',
      },
      {
        title: "Customer-Centricity",
        heading: "Prioritize Customer Needs",
        paragraph: "Customer satisfaction is at the core of what we do. We prioritize customer needs and strive to exceed their expectations.",
        imageUrl: DetailsImg,
        imageAlt: 'Customer-Centricity Image',
      },
      // Additional features specific to Imaggar Technologies can be added here...
    ],
  },
};

export default aboutUsContent;
