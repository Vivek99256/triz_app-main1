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
      title: "Teaching Tools",
      description:
        "The Learning Management System (LMS) streamlines the entire educational experience by offering tools for creating, delivering, and managing courses in a user-friendly environment. It supports dynamic lessons, automated assessments, and real-time progress tracking, making it ideal for both in-person and remote learning. With features designed to enhance student engagement and simplify administrative tasks, the LMS optimizes learning outcomes for both educators and students.",
      image: "/lmsservice_images/feature1/Group 366.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 2,
      title: "Map & Allign Skill, Blooms, LO, PO, CO",
      description:
        "Mapping and aligning skills, Bloom’s Taxonomy, Learning Outcomes (LO), Program Outcomes (PO), and Course Outcomes (CO) ensures cohesive educational goals. Bloom’s Taxonomy categorizes cognitive skills, which guide course objectives and outcomes. LO specifies individual student achievements, while PO and CO align with broader program goals, ensuring a structured, measurable approach to teaching and learning.",
      image: "/lmsservice_images/feature1/Group 367.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 3,
      title: "Learning  Tools",
      description:
        "The Learning Tools empower students by offering a range of features that enhance their educational experience. With access to interactive resources, personalized learning paths, and progress tracking, students can engage deeply with course material at their own pace. These tools support both independent study and collaborative learning, ensuring students stay motivated and on track toward their academic goals.",
      image: "/lmsservice_images/feature1/Group 368.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 4,
      title: "Curriculum  Planning",
      description:
        "Curriculum Planning is a vital component that enables educators to design and structure effective learning experiences. With tools for creating comprehensive course outlines, aligning learning objectives, and integrating assessments, it ensures that educational content meets both academic standards and student needs. This streamlined approach allows for flexibility and adaptability, facilitating a cohesive curriculum that enhances student engagement and success.",
      image: "/lmsservice_images/feature1/Group 369.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 5,
       title: "Performance management",
      description:
         "Performance management is a strategic process to monitor and improve employee performance. It involves setting clear expectations, providing feedback, and offering support to help individuals meet goals. It includes regular assessments, coaching, and development opportunities to align employees' efforts with organizational objectives, fostering growth, productivity, and motivation within the workforce.",
       image: "/lmsservice_images/feature1/Group 370.png",
       url1: "#contact-us",
       url2: "#feedback",
       url3: "#support"
     },
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