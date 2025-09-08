import LandingImg from '../../image.jpg';
import DetailsImg from '../../image1.gif';



const vmaasData = {
    LandingContent: {
        title: "Secure Your Systems with VMaaS",
        minititle: "Vulnerability Management as a Service",
        paragraph: "Stay protected with VMaaS - a comprehensive solution for managing vulnerabilities in your systems. Access proactive monitoring, threat assessments, and expert guidance to safeguard your infrastructure. Ensure robust security and mitigate potential risks.",
        buttonText: "Explore VMaaS - Request a Demo",
        imageUrl: LandingImg,
        imageAlt: "VMaaS - Vulnerability Management as a Service",
        demoLink: "/contact",
    },
    DetailsContent: {
        heading: 'Protect with VMaaS: Your Security Partner',
        paragraph: 'Safeguard your infrastructure with VMaaS, a service-oriented approach to identifying, prioritizing, and mitigating vulnerabilities. Utilize advanced tools and expert insights to fortify your systems against potential threats.',
        features: [
            {
                title: 'VULNERABILITY SCANNING',
                heading: 'Continuous Scanning & Detection',
                paragraph: 'Implement continuous scanning and detection mechanisms to identify vulnerabilities across your systems. Receive timely alerts and reports for proactive vulnerability management.',
                imageUrl: DetailsImg,
                imageAlt: 'Vulnerability Scanning in VMaaS',
            },
            {
                title: 'RISK ASSESSMENT',
                heading: 'Comprehensive Risk Analysis',
                paragraph: 'Conduct in-depth risk assessments to prioritize vulnerabilities based on their severity and potential impact. Gain insights for effective risk mitigation strategies.',
                imageUrl: DetailsImg,
                imageAlt: 'Risk Assessment in VMaaS',
            },
            {
                title: 'THREAT MITIGATION',
                heading: 'Effective Threat Mitigation',
                paragraph: 'Implement mitigation strategies to address identified vulnerabilities promptly. Access expert guidance and recommendations for effective threat resolution.',
                imageUrl: DetailsImg,
                imageAlt: 'Threat Mitigation in VMaaS',
            },
            // Add more features specific to VMaaS here...
        ],
    },
};

export default vmaasData;
