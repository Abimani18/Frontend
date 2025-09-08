// data.js

import { FaLinkedin, FaInstagram, FaFacebookSquare, FaGooglePlay, FaApple } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

export const socialMediaData = {
  logo: '../../logo.png',
  socialIcons: [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/imaggar-technologies/' },
    { icon: FaInstagram, href: 'https://www.instagram.com/imaggar_technologies/' },
    { icon: FaFacebookSquare, href: 'https://www.facebook.com/profile.php?id=100092688897746&mibextid=ZbWKwL' },
    { icon: IoMdMail , href: 'support@imaggar.in' },
  ],
  otherIcons: [
   
    { icon: FaGooglePlay, href: 'https://play.google.com' },
    { icon: FaApple, href: 'https://apple.com' },
  ],
};

export const footerData = [
  {
    title: 'Services',
    links: [
      { label: 'Software Development', url: '#' },
      { label: 'Marketing', url: '#' },
      { label: 'Branding', url: '#' },
      { label: 'Vulnerability Management', url: '#' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'CMS', url: '/cms' },
      { label: 'Clockfolio', url: '/clock' },
      { label: 'HRMS', url: '/hrms' },
      { label: 'Recruit', url: '/recruit' },
      { label: 'CRM', url: '/crm' },
      { label: 'SHIELD', url: '/shield' },
      { label: 'Website Builder', url: '/websiteBuilder' },
      { label: 'Ticket Tracking', url: '/ticketTracking' },
      { label: 'Communication system', url: '/communicationSystem' },
      { label: 'Chat Bot Integrator', url: '/chatbot' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', url: '/about' },
      { label: 'Our Services', url: '/services' },
      { label: 'Privacy Policy', url: '#' },
      { label: 'Careers', url: '/career' },
    ],
  },
];
