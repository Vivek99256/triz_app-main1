import * as React from "react";
import Image from 'next/image'
// TeacherManagement component
export default function TeacherManagement() {
  const actionButtons = [
    "How It Works",
    "How It Benefits You",
    "Visualize Your Workflow"
  ];
  const contentArray = [
    {
      id: 1,
      title: "Payroll Management",
      description:
        "Payroll management involves the process of calculating and distributing employee salaries, wages, bonuses, and deductions. It ensures compliance with tax laws, benefits administration, and accurate record-keeping. Key tasks include time tracking, tax calculations, direct deposits, and generating payslips. Effective payroll management promotes employee satisfaction and helps businesses maintain financial accuracy and legal compliance.",
      image: "/commservice_images/feature1/Group 422.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 2,
      title: "Leave & Attendance Management",
      description:
        "Leave and Attendance Management refers to the systematic tracking of employees' work hours, leaves, and attendance records. It involves monitoring absences, managing vacation and sick leaves, and ensuring compliance with company policies. This system helps streamline payroll processing, improves employee accountability, and fosters a transparent work environment, contributing to better operational efficiency and workforce management.",
      image: "/commservice_images/feature1/Group 423.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 3,
      title: "Pre-Assessment Toolsinterview Management",
      description:
        "Pre-assessment tools in interview management are designed to evaluate a candidate's skills, qualifications, and fit for a role before the actual interview. These tools can include tests, questionnaires, and surveys that assess technical abilities, personality traits, and cognitive skills. They help streamline the hiring process, ensuring a more efficient and objective evaluation of candidates.",
      image: "/commservice_images/feature1/Group 424.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 4,
      title: "Employee Onboarding",
      description:
        "Employee onboarding is the process of integrating new hires into an organization, ensuring they understand company culture, policies, and their specific roles. It involves training, setting expectations, providing necessary tools, and fostering connections with colleagues. A well-structured onboarding experience enhances employee engagement, boosts retention, and accelerates productivity, ultimately benefiting both the employee and the organization.",
      image: "/commservice_images/feature1/Group 425.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 5,
      title: "Compliance Management, HR, Govt, Industry",
      description:
        "Compliance management in HR ensures adherence to labor laws, regulations, and industry standards, safeguarding both employees and organizations. It involves monitoring workplace policies, conducting audits, and addressing violations. Government regulations play a pivotal role in shaping compliance frameworks. The industry’s role is to integrate these guidelines, fostering a fair and legal working environment while minimizing risks and penalties.",
      image: "/commservice_images/feature1/Group 426.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 6,
      title: "Document Management System",
      description:
        "A Document Management System (DMS) is a software solution that enables organizations to store, manage, and track electronic documents. It streamlines document retrieval, ensures version control, and improves collaboration. DMS provides security, compliance, and backup features, allowing users to efficiently organize and access files, reducing paperwork, and enhancing productivity across teams.",
      image: "/commservice_images/feature1/Group 427.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 7,
      title: "User Level control/rights management",
      description:
        "User-level control or rights management refers to the process of managing and regulating access to resources based on user roles and permissions. This system ensures that individuals can only access specific data or perform certain actions according to their assigned privileges. It enhances security by preventing unauthorized access and ensures compliance with organizational policies.",
      image: "/commservice_images/feature1/Group 428.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 8,
      title: "Communication Tools",
      description:
        "Communication tools are essential for exchanging information and fostering collaboration. They include digital platforms like emails, instant messaging, video conferencing, and social media, as well as traditional methods such as telephone and face-to-face conversations. These tools help individuals and organizations stay connected, streamline workflows, and share ideas, making them indispensable in both personal and professional settings.",
      image: "/commservice_images/feature1/Group 429.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    // {
    //   id: 3,
    //   title: " Inventory & Store Management",
    //   description:
    //     "Inventory & Store Management brings precision and control to your resource handling, ensuring that every item is accounted for with ease. This module offers real-time tracking, automated stock alerts, and streamlined procurement processes, allowing you to manage supplies efficiently and reduce waste. Transform your inventory management into a seamless experience, empowering your operations to run smoothly and effectively.",
    //   image: "/erpservice_images/Group 337.png",
    //   url1: "#contact-us",
    //   url2: "#feedback",
    //   url3: "#support"
    // },
    // {
    //   id: 4,
    //   title: " Front Desk Management System",
    //   description:
    //     "Front Desk Management redefines the first point of contact for your institution, creating a welcoming and efficient experience for students and visitors alike. This module streamlines check-ins, appointment scheduling, and inquiries, ensuring every interaction is handled with professionalism. With real-time visitor tracking and insightful reporting, you can enhance service quality while keeping operations running smoothly. Elevate your front desk experience and make a lasting impression!",
    //   image: "/erpservice_images/Group 338.png",
    //   url1: "#contact-us",
    //   url2: "#feedback",
    //   url3: "#support"
    // },
    // {
    //   id: 5,
    //   title: "Discipline Tracking",
    //   description:
    //     "Discipline Tracking offers a proactive approach to maintaining a positive learning environment by monitoring student behavior effectively. This module provides real-time tracking of disciplinary actions, enabling educators to address issues promptly and fairly. With detailed analytics and reporting features, you can identify patterns and implement strategies to foster a culture of respect and accountability. Empower your institution to cultivate discipline while nurturing student success!",
    //   image: "/erpservice_images/Group 339.png",
    //   url1: "#contact-us",
    //   url2: "#feedback",
    //   url3: "#support"
    // },
    // {
    //   id: 6,
    //   title: "Complaint Management",
    //   description:
    //     "complaint Management empowers your institution to turn challenges into opportunities for growth. This module streamlines the entire complaint process—from submission to resolution—ensuring every concern is addressed promptly and efficiently. With insightful tracking and reporting features, you can identify trends, enhance service quality, and foster a culture of continuous improvement. Transform feedback into action and elevate your institution's responsiveness!",
    //   image: "/erpservice_images/Group 341.png",
    //   url1: "#contact-us",
    //   url2: "#feedback",
    //   url3: "#support"
    // },
    // {
    //   id: 7,
    //   title: "HR  Management System",
    //   description:
    //     "HR Management System redefines human resources by streamlining processes and enhancing employee engagement. This module centralizes everything from recruitment and onboarding to performance tracking and payroll management, empowering your HR team with efficient tools and insightful analytics. Foster a thriving workplace culture and optimize talent management to drive success, all while saving time and reducing administrative burdens!",
    //   image: "/erpservice_images/Group 342.png",
    //   url1: "#contact-us",
    //   url2: "#feedback",
    //   url3: "#support"
    // },
  ];

  return (
    <>
    {contentArray.map((item) => (
      <div
      key={item.id} 
      className="lg:flex sm:block gap-10 lg:mx-10 sm:mx-0 lg:mt-10 sm:mt-6 pl-[px] max-md:pl-5"
      >
      {item.id % 2 != 0 ? (
      <>
      <div className="flex flex-col lg:w-[30%] sm:w-full gap-10 mr-60 sm:items-center">
        <Image src={item.image} alt="Student" width={500} height={500} className="lg:flex sm:hidden object-contain w-full" />
        <Image src={item.image} alt="Student" width={100} height={100} className="lg:hidden sm:flex object-contain" />
      </div>
      <div className="flex z-10 flex-col lg:w-[70%] sm:w-full items-start mr-0 font-medium max-md:max-w-full font-intermedium">
        <h1 className="lg:text-2xl sm:text-sm sm:items-center text-amber-500 max-md:max-w-full">
          {item.title}
        </h1>
        <p className="self-stretch lg:mt-8 sm:mt-4 lg:text-lg sm:text-xs text-black text-justify max-md:max-w-full">
          {item.description}
        </p>
        <div className="flex flex-wrap lg:gap-4 sm:gap-2 justify-between lg:mt-8 sm:mt-4 max-w-full lg:text-sm sm:text-[10px] text-white max-md:mt-10">
        {actionButtons.map((text, index) => (
                    <ActionButton key={index} url={item[`url${index + 1}`]}>
                      {text}
                    </ActionButton>
          ))}
        </div>
      </div>
      </>
      ) : (
        <>
        <div className="lg:hidden sm:flex flex-col lg:w-[30%] sm:w-full gap-10 lg:ml-60 sm:items-center">
        <Image src={item.image} alt="Student" width={100} height={100} className="lg:hidden sm:flex object-contain" />
        </div>
          <div className="flex z-10 flex-col lg:w-[70%] sm:w-full items-start mr-0 font-medium max-md:max-w-full font-intermedium">
        <h1 className="lg:text-2xl sm:text-sm sm:items-center text-amber-500 max-md:max-w-full">
          {item.title}
        </h1>
        <p className="self-stretch lg:mt-8 sm:mt-4 lg:text-lg sm:text-xs text-black text-justify max-md:max-w-full">
          {item.description}
        </p>
        <div className="flex flex-wrap lg:gap-4 sm:gap-2 justify-between lg:mt-8 sm:mt-4 max-w-full lg:text-sm sm:text-[10px] text-white max-md:mt-10">
        {actionButtons.map((text, index) => (
                    <ActionButton key={index} url={item[`url${index + 1}`]}>
                      {text}
                    </ActionButton>
          ))}
        </div>
      </div>
      <div className="lg:flex sm:hidden flex-col lg:w-[30%] sm:w-full gap-10 lg:ml-60 sm:items-center">
        <Image src={item.image} alt="Student" width={500} height={500} className="lg:flex sm:hidden object-contain w-full" />
      </div>
        </>
      )}
        </div>
    ))}
    </>
  );
}

// ActionButton component
function ActionButton({ children,url }) {
  return (
    <a 
      href={url}
      className="overflow-hidden lg:gap-2.5 lg:self-stretch lg:p-2.5 sm:px-[5px] lg:rounded-xl sm:rounded-md shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-white"
      tabIndex={0}
      style={{
        background:'rgba(61, 96, 149, 1)'
      }}
    >
      {children}
    </a>
  );
}