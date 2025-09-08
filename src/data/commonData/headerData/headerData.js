import {
  FiHome,
  FiInfo,
  FiPhone,
  FiBriefcase,
  FiSliders,
  FiBox,
} from "react-icons/fi";

import owlIcon from './owl- black.png'
import waspIcon from './wasp - gold and yellow.png'
// Navigation menu items with icons, URLs, and submenus
const headerMenu = [
  {
    name: { en: "Home", tamil: "முகப்பு" },
    url: "/",
    icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
  },
  {
    name: { en: "About Us", tamil: "எங்களை பற்றி" },
    url: "/about",
    icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
  },
  {
     name: { en: "Products", tamil: "தயாரிப்புகள்" },
     url: "",
     icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
     submenu: [
       {
         name: { en: "CMS", tamil: "உள்ளமைவு அறிவிப்பு கருவி" },
         url: "/cms",
         icon : "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
         description:
           "Content Management System for managing website and internal content",
       },
       {
         name: { en: "Clockfolio", tamil: "முக்கிய பொருள் மைய கருவி" },
         url: "/clock",
         icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
         description:
           "Smart time tracking, task management, and productivity dashboard",
       },
       {
         name: { en: "HRMS", tamil: "முக்கிய பொருள் மைய கருவி" },
         url: "/hrms",
         icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
         description:
           "Human resource management system",
       },
        {
         name: { en: "Recruit", tamil: "முக்கிய பொருள் மைய கருவி" },
         url: "/recruit",
         icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
         description:
           "Recruitment and candidate tracking platform",
       },
        {
         name: { en: "CRM", tamil: "முக்கிய பொருள் மைய கருவி" },
         url: "/crm",
         icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
         description:
           "Customer relationship management tool",
       },
        {
         name: { en: "Shield", tamil: "முக்கிய பொருள் மைய கருவி" },
         url: "/shield",
         icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
         description:
           "Security Hyper Intelligent Enhanced Layer of Defence",
       },
        {
         name: { en: "Website Builder", tamil: "முக்கிய பொருள் மைய கருவி" },
         url: "/websiteBuilder",
         icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
         description:
           "Drag-and-drop builder to create responsive websites easily",
       },
        {
         name: { en: "Ticket Tracking", tamil: "முக்கிய பொருள் மைய கருவி" },
         url: "/ticketTracking",
         icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
         description:
           "Helpdesk and issue tracking system",
       },
        {
         name: { en: "Communication System", tamil: "முக்கிய பொருள் மைய கருவி" },
         url: "/communicationSystem",
         icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
         description:
           "Internal messaging, voice, and team communication platform",
       },
       {
         name: { en: "Chatbot Integrator", tamil: "முக்கிய பொருள் மைய கருவி" },
         url: "/chatbot",
         icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
         description:
           "Tool to build, train, and deploy smart chatbots",
       },
       
     ],
   },
     {
    name: { en: "Services", tamil: "சேவைகள்" },
    url: "/services",
    icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
    submenu: [
      {
        name: { en: "SaaS", tamil: "விபரீதமான சேவை" },
        url: "/services/saas",
        icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
        description:
          "Integrate Imaggar's Marketing as a Service with your favorite tools.",
      },
      
      {
        name: { en: "MaaS", tamil: "விபரீதமான சேவை" },
        url: "/services/maas",
        icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
        description:
          "Integrate Imaggar's Marketing as a Service with your favorite tools.",
      },
      {
        name: { en: "SDaaS", tamil: "மென்பொருள் வளங்கள் அணுகல் சேவை" },
        url: "/services/sdaas",
        icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
        description:
          "Integrate Imaggar's Software Development as a Service with your favorite tools.",
      },
      {
        name: { en: "VMaaS", tamil: "ஏவுகலும் அணுகல் சேவை" },
        url: "/services/vmaas",
        icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
        description:
          "Integrate Imaggar's Vulnerability Management as a Service with your favorite tools.",
      },
    ],
  },
  {
    name: { en: "Careers", tamil: "பணியாளர் வேலைகள்" },
    url: "/careers",
    icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
    submenu: [
      {
        name: { en: "Internship", tamil: "தொழில்நுட்ப அனுமதி" },
        url: "/careers/internship",
        icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
        description:
          "Explore internship opportunities at Imaggar and integrate your skills with your favorite tools.",
      },
      {
        name: { en: "Job Openings", tamil: "வேலை விளக்கம்" },
        url: "/careers/job-openings/jobdescription/:routeID",
        icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
        description:
          "Discover job openings at Imaggar and integrate your career with your favorite tools.",
      },
    ],
  },
  {
    name: { en: "Contacts", tamil: "தொடர்பு கொள்ள" },
    url: "/contact",
    icon: "https://cdn-icons-png.flaticon.com/256/1000/1000777.png",
  },
];

export default headerMenu;


// Clockfolio
// slidemaze
// client-sling
// Website Creator
// Slate Kuchi
// bot-staq
// Loom 
// LMS
// Automation
// metadiate
// SHIELD
// panelPro
// ScoutFolio
// MY PEEPS
// FRESHDESK