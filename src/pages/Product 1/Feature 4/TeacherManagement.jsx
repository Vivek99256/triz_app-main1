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
      title: "Communication Solutions",
      description:
        "Scholar Clone’s Communication the tools, systems, and strategies used to facilitate effective interaction between individuals, teams, or organizations. These include technologies like email, video conferencing, messaging platforms, and collaboration tools. Effective communication solutions enhance productivity, streamline workflows, and foster better collaboration in both personal and professional settings.",
      image: "/erpservice_images/feature4/Group 360.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 2,
      title: "Parents (PTM(Parent-Teacher-Meetings))",
      description:
        "Essential for fostering communication between parents and educators. These meetings provide a platform to discuss a child's academic progress, behavior, and any challenges faced. They help build a strong partnership between school and home, ensuring that both parties work together to support the child's development and overall well-being.",
      image: "/erpservice_images/feature4/Group 361.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 3,
      title: "Circulars & Notification, Techer Diary",
      description:
        "Official communications sent to inform staff or students about important updates, policies, events, or instructions in an organization or institution. A teacher's diary is a personal record for teachers to note daily lessons, activities, observations, and reflections on students' progress. Both tools help maintain organization and effective communication within educational environments.",
      image: "/erpservice_images/feature4/Group 362.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 4,
      title: "Message & Notification(Email,SMS,WhatsApp) ",
      description:
        " Trough channels like email, SMS, and WhatsApp are vital communication tools. They allow businesses and individuals to reach their audience instantly with updates, reminders, promotions, or critical information. These methods provide an efficient way to stay connected, ensuring messages are delivered directly to users across different platforms for greater engagement and response rates.",
      image: "/erpservice_images/feature4/Group 363.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
     {
       id: 5,
       title: "Automated",
       description:
         "Automation refers to the use of technology to perform tasks with minimal human intervention. It streamlines processes, increases efficiency, and reduces human error. From manufacturing to software applications, automation has revolutionized industries by enabling faster production, consistent quality, and lower operational costs. It is crucial for enhancing productivity in sectors like healthcare, logistics, and finance.",
       image: "/erpservice_images/feature4/Group 364.png",
       url1: "#contact-us",
       url2: "#feedback",
       url3: "#support"
     },
     {
      id: 6,
       title: "Chatbot ",
        description:
        "complaint Management empowers your institution to turn challenges into opportunities for growth. This module streamlines the entire complaint process—from submission to resolution—ensuring every concern is addressed promptly and efficiently. With insightful tracking and reporting features, you can identify trends, enhance service quality, and foster a culture of continuous improvement. Transform feedback into action and elevate your institution's responsiveness!",
       image: "/erpservice_images/feature4/Group 365.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
     },
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