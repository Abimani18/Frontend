// getstartedData.js

import LandingImg from '../image.jpg';
import DetailsImg from '../image.gif';

const Topic = {
  landingContent: {
    title: "Getstarted Your Digital Presence with Cutting-Edge AI",
    minititle: "Unleash the Power of AI for Seamless Business Advancement",
    paragraph: "Elevate your digital landscape with AI-driven solutions designed to streamline operations, captivate audiences with immersive technologies, and embrace the latest innovations for unparalleled efficiency and productivity.",
    buttonText: "Experience the Future - Get A Demo",
    imageUrl: LandingImg,
    imageAlt: "Simplified Interface for Transformation and Enhancement",
    demoLink: "/contact",
  },

  DetailsContent: [
    {
      title: 'AI-POWERED SELF-SERVICE',
      heading: 'Automate self-service across channels',
      paragraph:
        'Minimize wait times, increase resolutions. Freshbots, powered by Freddy Self Service, work on many channels so customers can find answers wherever they are. With Freshbots deflecting up to 70% of conversations, your team can focus on what matters most.*',
      imageUrl: DetailsImg,
      imageAlt: 'AI-Powered Self-Service Image',
    },
    {
      title: 'PROACTIVE INSIGHTS',
      heading: 'Make smart decisions faster',
      paragraph:
        'Powered by generative AI, Freddy Insights proactively analyzes performance data for opportunities to optimize productivity and head off potential issues. Freddy Insights even recommends remediation actions—and helps execute them.',
      imageUrl: DetailsImg,
      imageAlt: 'Proactive Insights Image',
    },
    {
      title: 'UNIFIED AGENT WORKSPACE',
      heading: 'Supercharge agent productivity',
      paragraph:
        'Empower agents to personalize service on the fly. View all customer interactions across channels in one place. Freddy Copilot is an always-on assistant that can suggest responses, recommend actions, and summarize events.',
      imageUrl: DetailsImg,
      imageAlt: 'Unified Agent Workspace Image',
    },
    {
      title: 'ADVANCED TICKETING',
      heading: 'Enable seamless collaboration across teams',
      paragraph:
        'Reach out to colleagues to swiftly resolve customer issues. Swarm fast. Rally a dream team. Track accountability. Advanced ticketing keeps all the information in one place, so it’s easy to stay on top of progress and no one drops the ball.',
      imageUrl: DetailsImg,
      imageAlt: 'Advanced Ticketing Image',
    },
  ],

  DetailsIntro: {
    heading: 'One unified omnichannel solution powered by AI',
    paragraph:
      'Improve customer experience and agent productivity with generative AI. One seamless omnichannel solution for self-service, conversational support, and ticketing.',
  },
};

export default Topic;
