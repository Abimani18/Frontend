import LandingImg from '../../image.jpg';
import DetailsImg from '../../image1.gif';



const maasData = {
    LandingContent: {
        title: "Boost Your Marketing with MaaS",
        minititle: "Marketing as a Service",
        paragraph: "Elevate your marketing strategies with MaaS - a comprehensive marketing solution offering expertise, tools, and strategies as a service. Drive engagement, reach wider audiences, and enhance your brand's visibility.",
        buttonText: "Explore MaaS - Request a Demo",
        imageUrl: LandingImg,
        imageAlt: "MaaS - Marketing as a Service",
        demoLink: "/contact",
    },
    DetailsContent: {
        heading: 'Revolutionize Marketing with MaaS',
        paragraph: 'Transform your marketing efforts with MaaS, a service-oriented approach to optimizing campaigns, content creation, and audience engagement. Leverage expert strategies and tools to maximize your marketing potential.',
        features: [
            {
                title: 'CAMPAIGN OPTIMIZATION',
                heading: 'Strategic Campaign Enhancement',
                paragraph: 'Optimize marketing campaigns through data-driven strategies and targeted approaches. Enhance campaign effectiveness and ROI with expert guidance.',
                imageUrl: DetailsImg,
                imageAlt: 'Campaign Optimization in MaaS',
            },
            {
                title: 'CONTENT CREATION',
                heading: 'Engaging Content Development',
                paragraph: 'Create compelling content that resonates with your audience. Leverage professional content creators to drive engagement and convey your brand message effectively.',
                imageUrl: DetailsImg,
                imageAlt: 'Content Creation in MaaS',
            },
            {
                title: 'AUDIENCE TARGETING',
                heading: 'Precise Audience Targeting',
                paragraph: 'Reach the right audience through precise targeting strategies. Utilize data insights to tailor marketing efforts and maximize audience engagement.',
                imageUrl: DetailsImg,
                imageAlt: 'Audience Targeting in MaaS',
            },
            // Add more features specific to MaaS here...
        ],
    },
};

export default maasData;
