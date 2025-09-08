import LandingImg from '../../image.jpg';
import DetailsImg from '../../image1.gif';


const coreData = {
    LandingContent: {
        title: "poda panni",
        minititle: "Comprehensive Operations & Resource Management",
        paragraph: "Experience the transformative power of C.O.R.E - your all-encompassing ERP solution. Optimize resource allocation, streamline operations, and unlock unprecedented efficiency across your organization. Seamlessly integrate modules for finance, HR, supply chain, and more.",
        buttonText: "Discover C.O.R.E - Request a Demo",
        imageUrl: LandingImg,
        imageAlt: "C.O.R.E ERP Portal - Streamlined Operations",
        demoLink: "/contact",
    },
    DetailsContent: {
        heading: 'Unify Operations with C.O.R.E: Your Comprehensive ERP Solution',
        paragraph: 'Transform your enterprise with C.O.R.E, an advanced ERP solution designed to unify operations across various departments. Simplify workflows, streamline processes, and gain actionable insights for strategic decision-making.',
        features: [
            {
                title: 'FINANCIAL MANAGEMENT',
                heading: 'Optimized Financial Processes',
                paragraph: 'Efficiently manage finances, automate accounting tasks, and obtain real-time insights into financial performance. Ensure compliance and make informed business decisions.',
                imageUrl: DetailsImg,
                imageAlt: 'Financial Management in C.O.R.E ERP',
            },
            {
                title: 'HUMAN RESOURCE MANAGEMENT',
                heading: 'Empowered HR Operations',
                paragraph: 'Centralize HR data, streamline recruitment, manage employee information, and enhance performance evaluation processes. Empower your workforce and drive productivity.',
                imageUrl: DetailsImg,
                imageAlt: 'HR Management in C.O.R.E ERP',
            },
            {
                title: 'SUPPLY CHAIN MANAGEMENT',
                heading: 'Efficient Supply Chain Operations',
                paragraph: 'Optimize inventory, streamline procurement, manage suppliers, and improve logistics. Ensure a seamless supply chain for enhanced delivery and cost management.',
                imageUrl: DetailsImg,
                imageAlt: 'Supply Chain Management in C.O.R.E ERP',
            },
            // Add more features specific to the C.O.R.E ERP system here...
        ],
    },
};

export default coreData;
