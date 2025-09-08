import LandingImg from '../../image.jpg';
import DetailsImg from '../../image1.gif';


const baasData = {
    LandingContent: {
        title: "Enhance Your Branding with BaaS",
        minititle: "Branding as a Service",
        paragraph: "Elevate your brand with BaaS - a comprehensive branding solution offering strategic insights, creative expertise, and impactful branding services. Strengthen your brand identity, resonate with your audience, and stand out in the market.",
        buttonText: "Explore BaaS - Request a Demo",
        imageUrl: LandingImg,
        imageAlt: "BaaS - Branding as a Service",
        demoLink: "/contact",
    },
    DetailsContent: {
        heading: 'Transform Branding with BaaS',
        paragraph: 'Empower your brand identity with BaaS, a service-oriented approach to crafting and enhancing your brand image. Leverage creative strategies and expert guidance to establish a strong and recognizable brand presence.',
        features: [
            {
                title: 'BRAND STRATEGY',
                heading: 'Strategic Brand Development',
                paragraph: 'Define and refine your brand strategy to align with your business goals and resonate with your target audience. Develop a roadmap for consistent and impactful brand messaging.',
                imageUrl: DetailsImg,
                imageAlt: 'Brand Strategy in BaaS',
            },
            {
                title: 'CREATIVE DESIGN',
                heading: 'Compelling Visual Branding',
                paragraph: 'Craft visually appealing brand assets, including logos, visuals, and design elements that convey your brand message effectively. Create a strong visual identity for your brand.',
                imageUrl: DetailsImg,
                imageAlt: 'Creative Design in BaaS',
            },
            {
                title: 'BRAND AUDIT',
                heading: 'Comprehensive Brand Analysis',
                paragraph: 'Conduct a thorough brand audit to assess brand performance and identify areas for improvement. Leverage insights to refine and strengthen your brand positioning.',
                imageUrl: DetailsImg,
                imageAlt: 'Brand Audit in BaaS',
            },
            // Add more features specific to BaaS here...
        ],
    },
};

export default baasData;
