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
      title: "Exam Management, Result/Reoprt Card",
      description:
        "Exam management involves organizing and overseeing assessments, ensuring accurate scheduling, and maintaining fair evaluation standards. Result or report cards provide detailed performance summaries, reflecting a student's achievements, strengths, and areas for improvement. These records serve as important tools for tracking progress and guiding future academic or career decisions.",
      image: "/erpservice_images/feature3/Group 353.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 2,
      title: "Student academic Profile",
      description:
        "Simplify your exam process with Scholar Clone's Exam Management System. Easily schedule exams, manage question banks, conduct online and offline assessments, and automate grading for faster results. Gain valuable insights with detailed performance reports, while ensuring secure, compliant exam administration. Save time, reduce errors, and improve outcomes with an all-in-one solution designed for modern schools.....",
      image: "/erpservice_images/feature3/Group 354.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 3,
      title: " Student Attendance",
      description:
        "Transform learning with Scholar Clone’s Digital Classroom System, offering interactive multimedia lessons, real-time collaboration, and automated attendance tracking. Manage assignments and assessments digitally, providing instant feedback, while seamless communication keeps teachers, students, and parents connected. Boost student engagement and streamline teaching with flexible, accessible tools designed for modern education.....",
      image: "/erpservice_images/feature3/Group 355.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 4,
      title: "Transport Management",
      description:
        "Transport management involves planning, organizing, and optimizing the movement of goods and people. It ensures efficient logistics, cost-effective routes, timely delivery, and resource allocation. This field utilizes technology, data analysis, and coordination to improve transportation operations, reduce environmental impact, and enhance customer satisfaction in supply chains.",
      image: "/erpservice_images/feature3/Group 356.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 5,
      title: "Library Management ",
      description:
        "Library management involves overseeing and organizing library resources, services, and operations. It includes tasks like cataloging, inventory management, user services, and maintaining a comfortable environment. Efficient library management ensures seamless access to books, digital resources, and educational materials, fostering learning and research within communities.",
      image: "/erpservice_images/feature3/Group 357.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 6,
      title: "Visitor Management",
      description:
        "Visitor management is a system that tracks and monitors individuals visiting a business or facility. It ensures security, streamlines check-ins, and provides a smooth visitor experience. Typically, it involves registration, badge issuance, access control, and real-time alerts to improve efficiency and safety within the premises.",
      image: "/erpservice_images/feature3/Group 358.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 7,
      title: "Ai driven time table",
      description:
        "AI-driven timetables use artificial intelligence to optimize scheduling by analyzing factors like availability, preferences, and priorities. These systems can automatically adjust to changing circumstances, reduce conflicts, and improve efficiency. By learning from past data, AI can suggest optimal meeting times and resource allocation, making timetables smarter and more adaptive.",
      image: "/erpservice_images/feature3/Group 359.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
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