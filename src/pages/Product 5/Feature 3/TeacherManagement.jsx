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
      title: "Organizational Structure Management",
      description:
        "Organizational structure management refers to the process of designing and maintaining the hierarchy, roles, and relationships within an organization. It ensures clear reporting lines, effective communication, and the alignment of resources to achieve organizational goals. Well-managed structures enhance productivity, streamline decision-making, and support growth by fostering a collaborative and efficient work environment.",
      image: "/commservice_images/feature3/Group 439.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 2,
      title: "Add Department Details",
      description:
        "A department is a distinct division within an organization, typically responsible for specific functions or tasks. Each department focuses on its area of expertise, such as marketing, finance, or human resources, to achieve organizational goals. Department heads manage operations and coordinate with other departments to ensure efficiency, productivity, and alignment with the company's objectives.",
      image: "/commservice_images/feature3/Group 440.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 3,
      title: "Employee Skill Management",
      description:
        "Employee skill management involves identifying, developing, and tracking the competencies of employees to ensure they align with organizational goals. It includes training programs, performance evaluations, and career development initiatives. Effective skill management enhances employee productivity, job satisfaction, and retention while enabling the organization to meet evolving market demands and drive innovation.",
      image: "/commservice_images/feature3/Group 441.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 4,
      title: "Reviews & Appraisals, Succession, Planning &Performance,KPI & Goal Setting",
      description:
        "Reviews and appraisals evaluate employee performance, providing feedback for improvement. Succession planning ensures leadership continuity by identifying and developing future leaders. Planning and performance focus on setting strategic objectives, while KPIs (Key Performance Indicators) measure progress. Goal setting aligns personal and organizational targets, fostering growth, motivation, and accountability in achieving desired outcomes..",
      image: "/commservice_images/feature3/Group 442.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 5,
      title: "Organization Handbook",
      description:
        "An organization handbook is a comprehensive document outlining a company’s policies, procedures, values, and expectations. It serves as a guide for employees, detailing the work environment, rules of conduct, benefits, and operational guidelines. It ensures consistency, fosters communication, and helps employees understand their roles, responsibilities, and the company culture.",
      image: "/commservice_images/feature3/Group 443.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 6,
      title: "Inventory Management",
      description:
        "Inventory management involves overseeing the flow of goods and materials in a business. It ensures the right quantity of products is available at the right time, minimizing overstock and stockouts. Effective inventory management optimizes storage costs, improves cash flow, and enhances customer satisfaction by ensuring timely product availability and reducing waste.",
      image: "/commservice_images/feature3/Group 444.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
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