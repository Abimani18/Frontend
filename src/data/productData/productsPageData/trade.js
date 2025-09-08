import LandingImg from '../../image.jpg';
import DetailsImg from '../../image1.gif';



const tradeData = {
    LandingContent: {
        title: "Transform Transactions with T.R.A.D.E POS",
        minititle: "Efficient Point of Sale Solutions",
        paragraph: "Empower your business with T.R.A.D.E - an advanced POS system designed for streamlined transactions and revenue administration. Simplify sales, manage inventory, and enhance customer experiences with a seamless digital exchange platform.",
        buttonText: "Explore T.R.A.D.E - Get a Demo",
        imageUrl: LandingImg,
        imageAlt: "T.R.A.D.E POS System - Enhanced Transactions",
        demoLink: "/contact",
    },
    DetailsContent: {
        heading: 'Enhance Transactions with T.R.A.D.E: Your Digital Exchange Solution',
        paragraph: 'Revolutionize your sales operations with T.R.A.D.E, a comprehensive POS system tailored for efficient transactions and revenue administration. Provide a seamless digital exchange experience and boost sales productivity.',
        features: [
            {
                title: 'TRANSACTION MANAGEMENT',
                heading: 'Streamlined Transaction Processes',
                paragraph: 'Simplify sales, manage orders, process payments, and maintain transaction records efficiently. Ensure smooth and secure transactions with an intuitive POS interface.',
                imageUrl: DetailsImg,
                imageAlt: 'Transaction Management in T.R.A.D.E POS',
            },
            {
                title: 'INVENTORY CONTROL',
                heading: 'Efficient Inventory Management',
                paragraph: 'Track stock levels, manage inventory, and streamline replenishment processes. Ensure optimal stock availability and avoid shortages with intelligent inventory control.',
                imageUrl: DetailsImg,
                imageAlt: 'Inventory Control in T.R.A.D.E POS',
            },
            {
                title: 'CUSTOMER EXPERIENCE',
                heading: 'Enhanced Customer Interactions',
                paragraph: 'Provide a seamless checkout experience, manage customer profiles, and personalize interactions. Strengthen customer relationships and drive loyalty.',
                imageUrl: DetailsImg,
                imageAlt: 'Customer Experience in T.R.A.D.E POS',
            },
            // Add more features specific to the T.R.A.D.E POS system here...
        ],
    },
};

export default tradeData;
