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
      title: "Template Management",
      description:
        "Scholar Clone’s Template Management service empowers schools to create, customize, and manage templates for reports, certificates, communications, and more—all in one easy-to-use platform. With professionally designed templates that can be tailored to your school’s unique branding and requirements, this service saves time while enhancing consistency and professionalism in every document. Transform routine tasks into polished, branded communications effortlessly with Scholar Clone.",
      image: "/supportservice_images/image 38 (2).png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 2,
      title: "Roll Over",
      description:
        "Scholar Clone’s Roll Over service simplifies the transition from one academic year to the next by seamlessly updating student records, class assignments, and schedules. With just a few clicks, schools can roll over essential data while preserving historical records, making it easy to start each year fresh and organized. This feature streamlines annual setup, saves time, and ensures continuity—so your focus stays on education, not administration.",
      image: "/supportservice_images/image (11).png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    // {
    //   id: 3,
    //   title: "Financial Integration",
    //   description:
    //     "Scholar Clone’s Financial Integration service streamlines school finances by bringing all payment processes into one secure, automated platform. From tuition fees and hostel charges to transportation and activity payments, parents can easily make transactions online, while schools gain clear financial tracking and reporting. This feature simplifies budgeting, enhances transparency, and creates a smooth, efficient financial experience for the entire school community.",
    //   image: "/supportservice_images/image (9).png",
    //   url1: "#contact-us",
    //   url2: "#feedback",
    //   url3: "#support"
    // },
    {
      id: 3,
      title: "Onboarding",
      description:
        "Scholar Clone’s Onboarding service ensures a smooth and stress-free transition as schools adopt their new management system. Our dedicated team provides personalized training, hands-on support, and step-by-step guidance, making sure that every staff member feels confident and fully equipped to utilize all system features. With ongoing assistance and resources, Scholar Clone empowers your team to quickly master the platform, allowing the school to focus on what matters most—supporting students and achieving academic excellence from day one.",
      image: "/supportservice_images/image (12).png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
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
      >
      {item.id % 2 != 0 ? (
      <>
      <div
      key={item.id} 
      className="lg:flex sm:block gap-10 lg:mx-10 sm:mx-0 lg:mt-10 sm:mt-6 max-md:pl-5 shadow-[0px_3px_8px_rgba(0,0,0,0.25)] lg:px-6 lg:pt-6 lg:pb-4 sm:px-2 sm:py-2 rounded-xl" style={{
        background: 'linear-gradient(90deg, #ffffff 21%, rgba(23, 123, 225, 0.25) 100%)',
      }}
      >
      <div className="flex flex-col lg:w-[90%] lg:mb-[-50px] sm:w-full sm:items-center">
        <Image src={item.image} alt="Student" width={1000} height={1000} className="lg:flex sm:hidden object-contain w-full" />
        <Image src={item.image} alt="Student" width={200} height={200} className="lg:hidden sm:flex object-contain" />
      </div>
      <div className="flex z-10 flex-col lg:w-full sm:w-full lg:items-end mr-0 font-medium max-md:max-w-full font-intermedium">
        <h1 className="lg:text-2xl sm:text-sm sm:items-center font-bold text-amber-500 max-md:max-w-full">
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
      </div>
      </>
      ) : (
        <>
        <div
        key={item.id} 
        className="lg:flex sm:block gap-10 lg:mx-10 sm:mx-0 lg:mt-10 sm:mt-6 max-md:pl-5 shadow-[0px_3px_8px_rgba(0,0,0,0.25)] lg:px-6 lg:pt-6 lg:pb-4 sm:px-2 sm:py-2 rounded-xl" style={{
          background: 'linear-gradient(270deg, #ffffff 21%, rgba(23, 123, 225, 0.25) 100%)',
        }}
        >
        <div className="lg:hidden sm:flex flex-col lg:w-[30%] sm:w-full gap-10 lg:ml-60 sm:items-center">
        <Image src={item.image} alt="Student" width={200} height={200} className="lg:hidden sm:flex object-contain" />
        </div>
        <div className="flex z-10 flex-col lg:w-full sm:w-full lg:items-start mr-0 font-medium max-md:max-w-full font-intermedium">
        <h1 className="lg:text-2xl sm:text-sm sm:items-center font-bold text-amber-500 max-md:max-w-full">
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
      <div className="lg:flex sm:hidden flex-col flex-col lg:w-[60%] lg:mb-[-50px] sm:w-full sm:items-center">
        <Image src={item.image} alt="Student" width={350} height={350} className="lg:flex sm:hidden object-contain" />
      </div>
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