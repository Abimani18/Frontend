import LandingImg from '../../image.jpg';
import DetailsImg from '../../image1.gif';


const sdaasData = {
    LandingContent: {
        title: "Accelerate Development with SdaaS",
        minititle: "Software Development as a Service",
        paragraph: "Leverage SdaaS for comprehensive software development solutions. Access expert development teams, streamlined processes, and cutting-edge technologies to bring your ideas to life. Accelerate your product journey and stay ahead in the market.",
        buttonText: "Explore SdaaS - Request a Demo",
        imageUrl: LandingImg,
        imageAlt: "SdaaS - Software Development as a Service",
        demoLink: "/contact",
    },
    DetailsContent: {
        heading: 'Innovate with SdaaS: Your Development Partner',
        paragraph: 'Empower your software development initiatives with SdaaS, a service-oriented approach to building robust applications and solutions. Access skilled developers, agile methodologies, and top-notch technologies to drive innovation.',
        features: [
            {
                title: 'DEVELOPMENT TEAMS',
                heading: 'Expert Development Teams',
                paragraph: 'Access dedicated development teams equipped with diverse skill sets and experience levels. Collaborate with experts to create scalable and high-quality software solutions.',
                imageUrl: DetailsImg,
                imageAlt: 'Development Teams in SdaaS',
            },
            {
                title: 'AGILE METHODOLOGIES',
                heading: 'Agile Software Development',
                paragraph: 'Embrace agile methodologies to ensure flexibility, efficiency, and adaptability throughout the development lifecycle. Iterate quickly and respond to changing requirements.',
                imageUrl: DetailsImg,
                imageAlt: 'Agile Methodologies in SdaaS',
            },
            {
                title: 'CUTTING-EDGE TECHNOLOGIES',
                heading: 'Innovative Technology Stacks',
                paragraph: 'Leverage modern technologies and frameworks to build scalable and future-ready software solutions. Stay ahead in the competitive landscape with innovative tech stacks.',
                imageUrl: DetailsImg,
                imageAlt: 'Cutting-edge Technologies in SdaaS',
            },
            // Add more features specific to SdaaS here...
        ],
    },
};

export default sdaasData;
