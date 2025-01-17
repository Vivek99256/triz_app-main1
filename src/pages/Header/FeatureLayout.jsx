import * as React from "react";
import { useState, useEffect } from "react";
import { LeftMenuItem, RightMenuItem } from "../../Components/MenuItem";
import { leftMenuItems } from "../../Components/menuItems";

// Define the right-side menu items for each left-side menu item
const rightMenuForERP = [
  {
    id: 1,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/45345495e38b9b587ce08cc3fa065620d70b6dfb2473bbbdd2a9bfe8c0d08443?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Administrative & Management Solutions",
    description: "Administrative & Management Solutions streamline organizational operations.",
    url: "/erpservice"  // Add a clickable URL
  },
  {
    id: 2,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6e01ba0320aa0eaa980d365161f82833c212ccd234a493a831bc6d50fcda4af?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Finance & Operations",
    description: "Finance & Operations Systems manage budgets and daily operations.",
    url: "/erpservice"  // Add a clickable URL
  },
  {
    id: 3,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Student & Academic Management",
    description: "Student & Academic Management Systems organize student data and streamline academic processes.",
    url: "/erpservice"  // Add a clickable URL
  },
  {
    id: 4,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7761a4f206fe520a1e55f00f92df761110e10203a3c23ce604102b1a3f70ec56?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Engagement & Communication",
    description: "Engagement & Communication Systems enhance interaction and information sharing.",
    url: "/erpservice"
  }
];

const rightMenuForLMS = [
  {
    id: 1,
    icon: "/home_images/Megamenu/LMS/1.png",
    title: "Teaching & Learning",
    description: "Effective tools and platforms for managing and delivering educational content and fostering student engagement.",
    url: "/lmsservice"
  },
  {
    id: 2,
    icon: "/home_images/Megamenu/LMS/2.png",
    title: "Test & Assesment",
    description: "Tools to assess student performance, track progress, and measure educational outcomes for growth.",
    url: "/lmsservice"
  },
  {
    id: 3,
    icon: "/home_images/Megamenu/LMS/3.png",
    title: "Content libraray",
    description: "Systems to handle school or institution administration, course management, and scheduling.",
    url: "/lmsservice"
  },
  {
    id: 4,
    icon: "/home_images/Megamenu/LMS/4.png",
    title: "Engangment",
    description: "Resources and solutions to provide ongoing support, engagement, and guidance to students throughout their learning journey.",
    url: "/lmsservice"
  }
];

const rightMenuForCareerCounselling = [
  {
    id: 1,
    icon: "/home_images/Megamenu/CC/1.png",
    title: "Career Development",
    description: "Tools and programs aimed at helping students explore career paths and develop the necessary skills for success.",
    url: "ccservice"
  },
  {
    id: 2,
    icon: "/home_images/Megamenu/CC/2.png",
    title: "Assessment & Evaluation",
    description: "Assessment tools for evaluating students' interests, skills, and readiness for career paths and higher education.",
    url: "ccservice"
  },
  {
    id: 3,
    icon: "/home_images/Megamenu/CC/3.png",
    title: "Counseling & Support",
    description: "Counseling services designed to provide emotional support and guide students in their career or academic decisions.",
    url: "ccservice"
  },
  {
    id: 4,
    icon: "/home_images/Megamenu/CC/4.png",
    title: "Exploration & Connectivity",
    description: "Platforms to connect students with industry professionals, mentors, and networking opportunities for career exploration.",
    url: "ccservice"
  }
];
const rightMenuForEducationAI = [
  {
    id: 1,
    icon: "/home_images/Megamenu/EAI/1.png",
    title: "AI-Powered Learning Tools",
    description: "Artificial intelligence tools that enhance the learning experience, providing personalized content and feedback.",
    url: "/aiservice"
  },
  {
    id: 2,
    icon: "/home_images/Megamenu/EAI/2.png",
    title: "Automation & Efficiency",
    description: "AI-driven solutions that automate administrative tasks and enhance operational efficiency in educational institutions.",
    url: "/aiservice"
  },
  {
    id: 3,
    icon: "/home_images/Megamenu/EAI/3.png",
    title: "AI-Driven Communication",
    description: "AI-powered communication tools that improve interaction between students, teachers, and administrators.",
    url: "/aiservice"
  }
];

const rightMenuForCommunication = [
  {
    id: 1,
    icon: "/home_images/Megamenu/COMM/1.png",
    title: "HRIT Solutionst",
    description: "HRIT Solutions specializes in innovative HR and IT services.",
    url: "/commservice"
  },
  {
    id: 2,
    icon: "/home_images/Megamenu/COMM/2.png",
    title: " Talent Management",
    description: "Talent Management nurtures, develops, and retains skilled employees for growth.",
    url: "/commservice"
  },
  {
    id: 3,
    icon: "/home_images/Megamenu/COMM/3.png",
    title: "Organizational Development",
    description: "Organizational Development enhances efficiency, culture, and performance for success.",
    url: "/commservice"
  },
  {
    id: 4,
    icon: "/home_images/Megamenu/COMM/4.png",
    title: "Skill Matrix & Taxonomy",
    description: "Skill Matrix and Taxonomy categorize and evaluate employee competencies systematically.",
    url: "/commservice"
  }
  ];

  const rightMenuForAnalytics = [
    {
      id: 1,
      icon: "/home_images/Megamenu/ANALYTICS/1.png",
      title: "Performance Analytics",
      description: "Analytics solutions to track and assess the performance of students, educators, and institutions over time.",
      url: "/analyticsservice"
    },
    {
      id: 2,
      icon: "/home_images/Megamenu/ANALYTICS/2.png",
      title: "Reporting & Insights",
      description: "Generate detailed reports and gain insights into student performance, attendance, and more.",
      url: "/analyticsservice"
    },
    {
      id: 3,
      icon: "/home_images/Megamenu/ANALYTICS/3.png",
      title: "Predictive Analytics",
      description: "AI-powered analytics tools to forecast student outcomes and provide proactive interventions.",
      url: "/analyticsservice"
    },
    {
      id: 4,
      icon: "/home_images/Megamenu/ANALYTICS/4.png",
      title: "Exam & Results Analysis",
      description: "Tools to analyze exam results, identify trends, and make data-driven decisions to improve educational practices.",
      url: "/analyticsservice"
    }
  ];
  const additionalContentForERP = [
    [   
     {
       id: 1,
       title: "Education CRM",
       url1: "/education_crm",  
       url2: "/education_crm"  
       },
       {
       id: 2,
       title: "Inventory & Store Management",
       url1: "/inventory",  
       url2: "/inventory"  
       },
       {
       id: 3,
       title: "Front desk management",
       url1: "/front_desk",  
       url2: "/front_Desk"  
       },
       {
       id: 4,
       title: "Inward-Outward (Digital Records) ",
       url1: "/inward_outward",  
       url2: "/inward_outward"  
       },
       {
       id: 5,
       title: "Complain management",
       url1: "/complain_management",  
       url2: "/complain_management"  
       },
       {
       id: 6,
       title: "Library management",
       url1: "/erpservice/visitor",  
       url2: "/erpservice/visitor-benefits"  
       },
       {
       id: 7,
       title: "Hostel Management",
       url1: "/erpservice/digital-records",  
       url2: "/erpservice/digital-records-benefits"  
       },
       {
       id: 8,
       title: "Task Management",
       url1: "/erpservice/inventory",  
       url2: "/erpservice/inventory-benefits"  
       },
       {
         id: 9,
         title: "Complaince management",
         url1: "/erpservice/inventory",  
         url2: "/erpservice/inventory-benefits"  
       },
       {
         id: 10,
         title: "SQAA",
         url1: "/erpservice/inventory",  
         url2: "/erpservice/inventory-benefits"  
       }
       
     ],
     [
       {
         id: 11,
         title: "Fees collection",
         url1: "/erpservice/finance-petty-cash",  
         url2: "/erpservice/finance-petty-cash-benefits"
       },
       {
         id: 12,
         title: "Online fees management",
         url1: "/erpservice/student-fees",  
         url2: "/erpservice/student-fees-benefits"
       },
       {
         id: 13,
         title: "Petty Cash management",
         url1: "/erpservice/library",  
         url2: "/erpservice/library-benefits"
       },
       {
         id: 14,
         title: "Fees Reconciliation",
         url1: "/erpservice/payment-processing",  
         url2: "/erpservice/payment-processing-benefits"
       },
       {
         id: 15,
         title: "Fine & discount management",
         url1: "/erpservice/payment-processing",  
         url2: "/erpservice/payment-processing-benefits"
       },
       {
         id: 16,
         title: "Tally, payment gateway Integration",
         url1: "/erpservice/payment-processing",  
         url2: "/erpservice/payment-processing-benefits"
       },
       {
         id: 17,
         title: "Multiple receipt generation",
         url1: "/erpservice/payment-processing",  
         url2: "/erpservice/payment-processing-benefits"
       },
       {
         id: 18,
         title: "AI driven fees predictions",
         url1: "/erpservice/payment-processing",  
         url2: "/erpservice/payment-processing-benefits"
       }
     ],
     
     // New Subarray for Student & Academic Management
     [
       {
         id: 19,
         title: "Exam management, Result/Report Card",
         url1: "/erpservice/education-crm",  
         url2: "/erpservice/education-crm-benefits"
       },
       {
         id: 20,
         title: "Student academic profile",
         url1: "/erpservice/student-profiles",  
         url2: "/erpservice/student-profiles-benefits"
       },
       {
         id: 21,
         title: "Student Attendance",
         url1: "/erpservice/attendance",  
         url2: "/erpservice/attendance-benefits"
       },
       {
         id: 22,
         title: "Transport Management",
         url1: "/erpservice/gradebook",  
         url2: "/erpservice/gradebook-benefits"
       },
       {
         id: 23,
         title: "Library Management",
         url1: "/erpservice/certificate-generation",  
         url2: "/erpservice/certificate-generation-benefits"
       },
       {
         id: 24,
         title: "Visitor Management",
         url1: "/erpservice/icards",  
         url2: "/erpservice/icards-benefits"
       },
       {
         id: 25,
         title: "AI driven time table",
         url1: "/erpservice/hostel",  
         url2: "/erpservice/hostel-benefits"
       }
     ],
     
     // New Subarray for Engagement & Communication
     [
       {
         id: 26,
         title: "Communication Solutions",
         url1: "/erpservice/communication-tools",  
         url2: "/erpservice/communication-tools-benefits"
       },
       {
         id: 27,
         title: "parents (PTM (Parent-Teacher Meetings)",
         url1: "/erpservice/parental-engagement",  
         url2: "/erpservice/parental-engagement-benefits"
       },
       {
         id: 28,
         title: "Circulars & Notifications, Teacher Diary",
         url1: "/erpservice/complaint-feedback",  
         url2: "/erpservice/complaint-feedback-benefits"
       },
       {
         id: 29,
         title: "Message & Notification('Email, SMS, WhatsApp')",
         url1: "/erpservice/student-performance",  
         url2: "/erpservice/student-performance-benefits"
       },
       {
         id: 30,
         title: "Automated ",
         url1: "/erpservice/student-performance",  
         url2: "/erpservice/student-performance-benefits"
       },
       {
         id: 31,
         title: "Chat-Bot",
         url1: "/erpservice/student-performance",  
         url2: "/erpservice/student-performance-benefits"
       }
   
     ]
   ];
   
   const additionalContentForLMS = [
     [
       {
         id: 1,
         title: "Teaching tools ",
         url1: "/lmsservice/teaching-tools",  
         url2: "/lmsservice/teaching-tools-benefits"
       },
       {
         id: 2,
         title: "Map & Allign Skill, Blooms, LO, PO, CO",
         url1: "/lmsservice/learning-tools",  
         url2: "/lmsservice/learning-tools-benefits"
       },
       {
         id: 3,
         title: "Learning tools",
         url1: "/lmsservice/curriculum-planning",  
         url2: "/lmsservice/curriculum-planning-benefits"
       },
       {
         id: 4,
         title: "Carriculam planning",
         url1: "/lmsservice/curriculum-planning",  
         url2: "/lmsservice/curriculum-planning-benefits"
       },
       {
         id: 5,
         title: "Performance management",
         url1: "/lmsservice/curriculum-planning",  
         url2: "/lmsservice/curriculum-planning-benefits"
       }
     ],
     [
       {
         id: 6,
         title: "Measuring learning growth",
         url1: "/lmsservice/mtss",  
         url2: "/lmsservice/mtss-benefits"
       },
       {
         id: 7,
         title: "Homework management",
         url1: "/lmsservice/mtss",  
         url2: "/lmsservice/mtss-benefits"
       },
       {
         id: 8,
         title: "Assignment management",
         url1: "/lmsservice/mtss",  
         url2: "/lmsservice/mtss-benefits"
       },
       {
         id: 9,
         title: "Question bank (create & add)",
         url1: "/lmsservice/mtss",  
         url2: "/lmsservice/mtss-benefits"
       },
       {
         id: 10,
         title: "Question papaer generation",
         url1: "/lmsservice/mtss",  
         url2: "/lmsservice/mtss-benefits"
       },
       {
         id: 11,
         title: "Assesment tools, various type questions creation",
         url1: "/lmsservice/mtss",  
         url2: "/lmsservice/mtss-benefits"
       },
       {
         id: 12,
         title: "Eportfolio",
         url1: "/lmsservice/mtss",  
         url2: "/lmsservice/mtss-benefits"
       },
       {
         id: 13,
         title: "PAL",
         url1: "/lmsservice/mtss",  
         url2: "/lmsservice/mtss-benefits"
       }
     ],
     [
       {
         id: 14,
         title: "Main stream CBSE",
         url1: "/lmsservice/engagement-tools",  
         url2: "/lmsservice/engagement-tools-benefits"
       },
       {
         id: 15,
         title: "SEL",
         url1: "/lmsservice/engagement-tools",  
         url2: "/lmsservice/engagement-tools-benefits"
       },
       {
         id: 16,
         title: "Vocational training",
         url1: "/lmsservice/engagement-tools",  
         url2: "/lmsservice/engagement-tools-benefits"
       },
       {
         id: 17,
         title: "Skill",
         url1: "/lmsservice/engagement-tools",  
         url2: "/lmsservice/engagement-tools-benefits"
       },
       {
         id: 18,
         title: "Sports",
         url1: "/lmsservice/engagement-tools",  
         url2: "/lmsservice/engagement-tools-benefits"
       },
       {
         id: 19,
         title: "Steam courses",
         url1: "/lmsservice/engagement-tools",  
         url2: "/lmsservice/engagement-tools-benefits"
       },
       {
         id: 20,
         title: "Libraray contenet",
         url1: "/lmsservice/engagement-tools",  
         url2: "/lmsservice/engagement-tools-benefits"
       },
       {
         id: 21,
         title: "Career carriculam",
         url1: "/lmsservice/engagement-tools",  
         url2: "/lmsservice/engagement-tools-benefits"
       }
       
     ],
     [
       {
         id: 22,
         title: "Student Support & engangmenet",
         url1: "/lmsservice/performance-feedback",  
         url2: "/lmsservice/performance-feedback-benefits"
       },
       {
         id: 23,
         title: "Notification, Chat, Messages",
         url1: "/lmsservice/performance-feedback",  
         url2: "/lmsservice/performance-feedback-benefits"
       },
       {
         id: 24,
         title: "Teacher dairy",
         url1: "/lmsservice/performance-feedback",  
         url2: "/lmsservice/performance-feedback-benefits"
       },
       {
         id: 25,
         title: "Leaderboard/gamification",
         url1: "/lmsservice/performance-feedback",  
         url2: "/lmsservice/performance-feedback-benefits"
       },
       {
         id: 26,
         title: "Eportfolio",
         url1: "/lmsservice/performance-feedback",  
         url2: "/lmsservice/performance-feedback-benefits"
       },
       {
         id: 27,
         title: "Social & coloborative learning",
         url1: "/lmsservice/performance-feedback",  
         url2: "/lmsservice/performance-feedback-benefits"
       },
       {
         id: 28,
         title: "Learning path",
         url1: "/lmsservice/performance-feedback",  
         url2: "/lmsservice/performance-feedback-benefits"
       },
       {
         id: 29,
         title: "Activity stream",
         url1: "/lmsservice/performance-feedback",  
         url2: "/lmsservice/performance-feedback-benefits"
       }
     ]
   ];
   
   
   const additionalContentForCareerCounselling = [
     [
       {
         id: 1,
         title: "Career Counseling",
         url1: "/career-counselling/career-counseling",  
         url2: "/career-counselling/career-counseling-benefits"
       },
       {
         id: 2,
         title: "Guidance",
         url1: "/career-counselling/guidance",  
         url2: "/career-counselling/guidance-benefits"
       },
       {
         id: 3,
         title: "Career Awareness",
         url1: "/career-counselling/guidance",  
         url2: "/career-counselling/guidance-benefits"
       },
       {
         id: 4,
         title: "Institutes can design this page",
         url1: "/career-counselling/guidance",  
         url2: "/career-counselling/guidance-benefits"
       },
       {
         id: 5,
         title: "Create career awareness",
         url1: "/career-counselling/guidance",  
         url2: "/career-counselling/guidance-benefits"
       }
     ],
     [
       {
         id: 6,
         title: "Assessment",
         url1: "/career-counselling/assessment",  
         url2: "/career-counselling/assessment-benefits"
       },
       {
         id: 7,
         title: "Councelling & support",
         url1: "/career-counselling/assessment",  
         url2: "/career-counselling/assessment-benefits"
       },
       {
         id: 8,
         title: "Know your intrest",
         url1: "/career-counselling/assessment",  
         url2: "/career-counselling/assessment-benefits"
       },
       {
         id: 9,
         title: " Online  councelling",
         url1: "/career-counselling/assessment",  
         url2: "/career-counselling/assessment-benefits"
       },
       {
         id: 10,
         title: "Councelling reports",
         url1: "/career-counselling/assessment",  
         url2: "/career-counselling/assessment-benefits"
       }
     ],
     [
       {
         id: 11,
         title: "Counseling",
         url1: "/career-counselling/counseling",  
         url2: "/career-counselling/counseling-benefits"
       },
       {
         id: 12,
         title: "Design your dream explore",
         url1: "/career-counselling/counseling",  
         url2: "/career-counselling/counseling-benefits"
       },
       {
         id: 13,
         title: "Explore occupation with various crietria",
         url1: "/career-counselling/counseling",  
         url2: "/career-counselling/counseling-benefits"
       },
       {
         id: 14,
         title: "Find dream collages",
         url1: "/career-counselling/counseling",  
         url2: "/career-counselling/counseling-benefits"
       },
       {
         id: 15,
         title: "Find dream employer",
         url1: "/career-counselling/counseling",  
         url2: "/career-counselling/counseling-benefits"
       },
       {
         id: 16,
         title: "Scholarchip",
         url1: "/career-counselling/counseling",  
         url2: "/career-counselling/counseling-benefits"
       },
       {
         id: 17,
         title: "Competitive exam",
         url1: "/career-counselling/counseling",  
         url2: "/career-counselling/counseling-benefits"
       }
     ],
     [
       {
         id: 18,
         title: "Connect/Explore",
         url1: "/career-counselling/connect-explore",  
         url2: "/career-counselling/connect-explore-benefits"
       },
       {
         id: 19,
         title: "Caree preparation",
         url1: "/career-counselling/connect-explore",  
         url2: "/career-counselling/connect-explore-benefits"
       },
       {
         id: 20,
         title: "Career carricula",
         url1: "/career-counselling/connect-explore",  
         url2: "/career-counselling/connect-explore-benefits"
       },
       {
         id: 21,
         title: "Social & coloborative",
         url1: "/career-counselling/connect-explore",  
         url2: "/career-counselling/connect-explore-benefits"
       },
       {
         id: 22,
         title: "My strength (portfolio) ",
         url1: "/career-counselling/connect-explore",  
         url2: "/career-counselling/connect-explore-benefits"
       }
     ]
   ];
   
   
   const additionalContentForEducationAI = [
     [
       {
         id: 1,
         title: "PAL (Personalized Adaptive Learning)",
         url1: "/ai/pal",  
         url2: "/ai/pal-benefits"
       },
       {
         id: 2,
         title: "Generative AI",
         url1: "/ai/generative-ai",  
         url2: "/ai/generative-ai-benefits"
       }
     ],
     [
       {
         id: 3,
         title: "Automatic Grading",
         url1: "/ai/automatic-grading",  
         url2: "/ai/automatic-grading-benefits"
       },
       {
         id: 4,
         title: "Time Table Automation",
         url1: "/ai/time-table-automation",  
         url2: "/ai/time-table-automation-benefits"
       }
     ],
     [
       {
         id: 5,
         title: "Chat Bot",
         url1: "/ai/chat-bot",  
         url2: "/ai/chat-bot-benefits"
       }
     ]
   ];
   
   const additionalContentForCommunication = [
     [
       {
         id: 1,
         title: "Payroll Management",
         url1: "/communication/ptm",  
         url2: "/communication/ptm-benefits"
       },
       {
         id: 2,
         title: "Leave & Attendance Management",
         url1: "/communication/circulars",  
         url2: "/communication/circulars-benefits"
       },
       {
         id: 3,
         title: "Pre-Assessment ToolsInterview Management",
         url1: "/communication/circulars",  
         url2: "/communication/circulars-benefits"
       },
       {
         id: 4,
         title: "Employee Onboarding",
         url1: "/communication/circulars",  
         url2: "/communication/circulars-benefits"
       },
       {
         id: 5,
         title: "Compliance Management, HR, Govt, Industry",
         url1: "/communication/circulars",  
         url2: "/communication/circulars-benefits"
       },
       {
         id: 6,
         title: "Document Management System",
         url1: "/communication/circulars",  
         url2: "/communication/circulars-benefits"
       },
       {
         id: 7,
         title: "User level control/rights management",
         url1: "/communication/circulars",  
         url2: "/communication/circulars-benefits"
       },
       {
         id: 8,
         title: "Communication Toolst",
         url1: "/communication/circulars",  
         url2: "/communication/circulars-benefits"
       }
     ],
     [
       {
         id: 9,
         title: "CPD",
         url1: "/communication/teacher-diary",  
         url2: "/communication/teacher-diary-benefits"
       },
       {
         id: 10,
         title: "Training Progress Tracking",
         url1: "/communication/teacher-diary",  
         url2: "/communication/teacher-diary-benefits"
       },
       {
         id: 11,
         title: "Complaince Training",
         url1: "/communication/teacher-diary",  
         url2: "/communication/teacher-diary-benefits"
       },
       {
         id: 12,
         title: "Certification Management",
         url1: "/communication/teacher-diary",  
         url2: "/communication/teacher-diary-benefits"
       },
       {
         id: 13,
         title: "Reskilling/Upskilling Course Library",
         url1: "/communication/teacher-diary",  
         url2: "/communication/teacher-diary-benefits"
       },
       {
         id: 14,
         title: "Leadership Development (Medium &junior)",
         url1: "/communication/teacher-diary",  
         url2: "/communication/teacher-diary-benefits"
       },
       {
         id: 15,
         title: "Knowledge Sharing & Collaboration",
         url1: "/communication/teacher-diary",  
         url2: "/communication/teacher-diary-benefits"
       },
       {
         id: 16,
         title: "Content Library",
         url1: "/communication/teacher-diary",  
         url2: "/communication/teacher-diary-benefits"
       },
       {
         id: 17,
         title: "Mobile Apps",
         url1: "/communication/teacher-diary",  
         url2: "/communication/teacher-diary-benefits"
       }
     ],
     [
       {
         id: 18,
         title: "Organizational Structure Management  ",
         url1: "/communication/email",  
         url2: "/communication/email-benefits"
       },
       {
         id: 19,
         title: "Add Department Details",
         url1: "/communication/sms",  
         url2: "/communication/sms-benefits"
       },
       {
         id: 20,
         title: "Employee Skill Management",
         url1: "/communication/whatsapp",  
         url2: "/communication/whatsapp-benefits"
       },
       {
         id: 21,
         title: "Reviews & Appraisals, Succession Planning & Performance",
         url1: "/communication/whatsapp",  
         url2: "/communication/whatsapp-benefits"
       },
       {
         id: 22,
         title: "KPI & Goal Setting",
         url1: "/communication/whatsapp",  
         url2: "/communication/whatsapp-benefits"
       },
       {
         id: 23,
         title: " Organization Handbook",
         url1: "/communication/whatsapp",  
         url2: "/communication/whatsapp-benefits"
       },
       {
         id: 24,
         title: "Inventory Management",
         url1: "/communication/whatsapp",  
         url2: "/communication/whatsapp-benefits"
       }
     ],
     [
       {
         id: 25,
         title: "Organization-Wide Skill Taxonomy Framework",
         url1: "/communication/ivrs",  
         url2: "/communication/ivrs-benefits"
       },
       {
         id: 26,
         title: "Skill matrix creation",
         url1: "/communication/ivrs",  
         url2: "/communication/ivrs-benefits"
       },
       {
         id: 27,
         title: "Skill Mapping  with department and employee",
         url1: "/communication/ivrs",  
         url2: "/communication/ivrs-benefits"
       },
       {
         id: 28,
         title: "Skill Gap Analysis",
         url1: "/communication/ivrs",  
         url2: "/communication/ivrs-benefits"
       }
     ]
   ];
   
   const additionalContentForAnalytics = [
     [
       {
         id: 1,
         title: "Student Performance",
         url1: "/analytics/student-performance",  
         url2: "/analytics/student-performance-benefits"
       },
       {
         id: 2,
         title: "Teacher Performance",
         url1: "/analytics/teacher-performance",  
         url2: "/analytics/teacher-performance-benefits"
       }
     ],
     [
       {
         id: 3,
         title: "Reports",
         url1: "/analytics/reports",  
         url2: "/analytics/reports-benefits"
       }
     ],
     [
       {
         id: 4,
         title: "Prediction",
         url1: "/analytics/prediction",  
         url2: "/analytics/prediction-benefits"
       }
     ],
     [
       {
         id: 5,
         title: "CBSE Result Analyzer",
         url1: "/analytics/cbse-result-analyzer",  
         url2: "/analytics/cbse-result-analyzer-benefits"
       }
     ]
   ];
export default function FeatureLayout({ onLeftMenuHover }) {
  const [hoveredLeftMenuId, setHoveredLeftMenuId] = React.useState(null);
  const [hoveredRightMenuId, setHoveredRightMenuId] = React.useState(null);
  const [visible, setVisible] = useState(false);

  // Logic for handling the right menu items
  const getRightMenuItems = (id) => {
    switch (id) {
      case 1:
        return rightMenuForERP;
      case 2:
        return rightMenuForLMS;
      case 3:
        return rightMenuForCareerCounselling;
    case 4:
        return rightMenuForEducationAI;
    case 5:
        return rightMenuForCommunication;
    case 6:
        return rightMenuForAnalytics;
      default:
        return [];
    }
  };
  const getAdditionalContent = (leftId,rightId) => {
    if(leftId == 1){
    switch (rightId) {
      case 1:
        return additionalContentForERP[0];
      case 2:
        return additionalContentForERP[1];
      case 3:
        return additionalContentForERP[2];
      case 4:
        return additionalContentForERP[3];
      default:
        return [];
    }
  }
  else if(leftId == 2){
    switch (rightId) {
      case 1:
        return additionalContentForLMS[0];
      case 2:
        return additionalContentForLMS[1];
      case 3:
        return additionalContentForLMS[2];
      case 4:
        return additionalContentForLMS[3];
      default:
        return [];
    }
  }
  else if(leftId == 3){
    switch (rightId) {
      case 1:
        return additionalContentForCareerCounselling[0];
      case 2:
        return additionalContentForCareerCounselling[1];
      case 3:
        return additionalContentForCareerCounselling[2];
      case 4:
        return additionalContentForCareerCounselling[3];
      default:
        return [];
    }
  }
  else if(leftId == 4){
    switch (rightId) {
      case 1:
        return additionalContentForEducationAI[0];
      case 2:
        return additionalContentForEducationAI[1];
      case 3:
        return additionalContentForEducationAI[2];
      default:
        return [];
    }
  }
  else if(leftId == 5){
    switch (rightId) {
      case 1:
        return additionalContentForCommunication[0];
      case 2:
        return additionalContentForCommunication[1];
      case 3:
        return additionalContentForCommunication[2];
      case 4:
        return additionalContentForCommunication[3];
      default:
        return [];
    }
  }
  else if(leftId == 6){
    switch (rightId) {
      case 1:
        return additionalContentForAnalytics[0];
      case 2:
        return additionalContentForAnalytics[1];
      case 3:
        return additionalContentForAnalytics[2];
      case 4:
        return additionalContentForAnalytics[3];
      default:
        return [];
    }
  }
  if(!leftId){
    return [];
  }
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredLeftMenuId(id);
    if (onLeftMenuHover) {
      // Pass the ID to the parent to adjust position
      console.log(id);
      onLeftMenuHover(id);
    }
  };
  const handleMouseEnterRight = (id) => {
    setHoveredRightMenuId(id);
  };
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnterNew = (item) => {
    setHoveredItem(item);
  };
  return (
    <div
      className={`overflow-hidden bg-gray-200 rounded-2xl shadow-sm ${visible ? "opacity-100" : "opacity-0"}`}
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        boxShadow: '0 0 25px 3px rgba(36, 174, 139, 0.45)',
      }}
    >
      <div className="relative flex h-full transition-all duration-300 ease-in-out">
        <div
          className={`flex h-full`}
          style={{
            width: hoveredLeftMenuId ? "calc(100% + 800px)" : "100%", // Expands to accommodate both right menu and extra content
          }}
        >
          <div
            className={`flex flex-col transition-all duration-300 ease-in-out bg-white`}
            style={{
              width: hoveredLeftMenuId ? "calc(100% - 800px)" : "100%", // Shrink left menu on hover
            }}
          >
            <div className="flex flex-col px-5 w-full text-sm font-semibold leading-none text-sky-500 shadow-sm max-md:px-5 max-md:pb-24" style={{
              paddingTop: hoveredLeftMenuId ? "10%" : "10%",
              paddingBottom: hoveredLeftMenuId ? "10%" : "10%",
            }}
          >
              {leftMenuItems.map((item) => (
                <div
                  key={item.id}
                  className="mt-5 first:mt-0"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                >
                  <a href={item.url} className="flex items-center">
                    <LeftMenuItem icon={item.icon} title={item.title} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Menu (Appears only on hover of left menu) */}
          <div
            className={`transition-all duration-300 ease-in-out bg-white`}
            style={{
              width: "400px", // Set width for right-side menu
              position: hoveredLeftMenuId ? "" : "absolute",
              transform: hoveredLeftMenuId ? "translateX(0)" : "translateX(100%)", // Slide right menu in
              opacity: hoveredLeftMenuId ? 1 : 0, // Fade in/out
            }}
          >
            <div className="flex flex-col pt-14 pb-14 mx-auto font-semibold size-full max-md:py-24 max-md:max-w-full">
              {getRightMenuItems(hoveredLeftMenuId).map((item) => (
                <div key={item.id} 
                     className="mt-5 first:mt-0"
                     onMouseEnter={() => handleMouseEnterRight(item.id)}
                >
                  <a href={item.url} className="flex items-center">
                    <RightMenuItem
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Content (Appears next to the right menu) */}
          <div
            className={`flex flex-col items-start mt-12 w-full text-sm font-semibold leading-none text-sky-500 text-opacity-80 max-md:mt-10 transition-all duration-300 ease-in-out`}
            style={{
              width: "400px", // Fixed width for additional content
              position: hoveredLeftMenuId ? "" : "absolute",
              transform: hoveredLeftMenuId ? "translateX(0)" : "translateX(100%)", // Slide in/out with the right menu
              opacity: hoveredLeftMenuId ? 1 : 0, // Fade in/out
              pointerEvents: hoveredLeftMenuId ? "auto" : "none", // Enable/disable pointer events
            }}
          >
            <div className="px-6 py-6 -mt-16">
            {getAdditionalContent(hoveredLeftMenuId,hoveredRightMenuId).map((item) => (
              <div 
                key={item.id}
                className="mt-10"
                onMouseEnter={() => handleMouseEnterNew(item)}
              >
                {item.title}
                {hoveredItem === item && (
                  <div className="flex gap-8 mt-3.5 ml-3.5 text-[12px] text-neutral-500 max-md:ml-2.5">
                    <a href={item.url1} className="basis-auto">Know Features</a>
                    <a href={item.url2}>Know Benefits</a>
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
