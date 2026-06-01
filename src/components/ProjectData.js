// images
import smartseason from "../assets/projects/smartseason.png";
import afyarescue from "../assets/projects/afyarescue.png";
import whatsappBot from "../assets/projects/whatsapp.png";
import mpesaStk from "../assets/projects/mpesa-stk.png";
import calculatorFullstack from "../assets/projects/calculator-fullstack.png";
// import skincare from "../assets/projects/skincare.png";

// icons
import js from "../assets/icons/js.png";
import css from "../assets/icons/css-3.png";
import html from "../assets/icons/html.png";
import react from "../assets/icons/react.png";
import php from "../assets/icons/php.png";
import mysql from "../assets/icons/mysql.png";
import nodejs from "../assets/icons/nodejs.png";


const data = {
  lists: [
    {
      mainImg: smartseason,
      name: "SmartSeason – Field Monitoring System",
      description:
        "A full-stack web app for tracking crop progress across multiple fields during a growing season. Admins coordinate field assignments and monitor activity; Field Agents manage and update their assigned fields through stage updates, with at-risk detection for fields past 90 days without harvest.",
      technologies: [
        {
          name: "React",
          icon: react,
        },
        {
          name: "Laravel",
          icon: php,
        },
        {
          name: "MySQL",
          icon: mysql,
        },
      ],
      liveLink: "",
      codeLink:
        "https://github.com/David-IT2/SmartSeason-Field-Monitoring-System",
    },
    {
      mainImg: afyarescue,
      name: "AfyaRescue – Emergency Response & Triage",
      description:
        "An emergency response and triage MVP that connects patients, ambulance drivers, and hospitals. Anyone can request help without logging in; automated triage scores severity, and role-based dashboards support ambulance assignment, real-time location tracking, and hospital reporting.",
      technologies: [
        {
          name: "Laravel",
          icon: php,
        },
        {
          name: "Tailwind CSS",
          icon: css,
        },
        {
          name: "MySQL",
          icon: mysql,
        },
      ],
      liveLink: "",
      codeLink: "https://github.com/David-IT2/AfyaRescue",
    },
    {
      mainImg: whatsappBot,
      name: "WhatsApp Cloud API Bot",
      description:
        "A Node.js and Express webhook server integrated with the WhatsApp Business Cloud API. It verifies Meta webhooks, handles incoming text messages with automated replies, and supports sending approved template messages for testing and onboarding flows.",
      technologies: [
        {
          name: "Node.js",
          icon: nodejs,
        },
        {
          name: "Express",
          icon: js,
        },
      ],
      liveLink: "",
      codeLink: "https://github.com/David-IT2/whatsapp-Bot",
    },
    {
      mainImg: mpesaStk,
      name: "M-Pesa STK Push Backend",
      description:
        "A PHP backend integrated with Safaricom’s Daraja API to initiate and handle M-Pesa STK Push payments. Users submit a phone number and amount, receive a prompt on their device, and the server processes OAuth tokens, payment callbacks, and transaction tracking.",
      technologies: [
        {
          name: "PHP",
          icon: php,
        },
        {
          name: "MySQL",
          icon: mysql,
        },
        {
          name: "HTML",
          icon: html,
        },
      ],
      liveLink: "",
      codeLink: "https://github.com/David-IT2/mpesa-stk-push-Backend",
    },
    {
      mainImg: calculatorFullstack,
      name: "Full-Stack Calculator with Authentication",
      description:
        "A calculator app split across two repositories: a React frontend handles login, arithmetic operations, and history display via Axios, while a Laravel API persists calculations in MySQL. Demonstrates SPA authentication, REST integration, and backend persistence working together.",
      technologies: [
        {
          name: "React",
          icon: react,
        },
        {
          name: "Laravel",
          icon: php,
        },
        {
          name: "MySQL",
          icon: mysql,
        },
      ],
      liveLink: "",
      codeLinks: [
        {
          name: "Frontend",
          link: "https://github.com/David-IT2/React-Front-End-and-Authentication",
        },
        {
          name: "Backend",
          link: "https://github.com/David-IT2/Laravel-Api-and-Persistence",
        },
      ],
    },
  ],
};

export default data;
