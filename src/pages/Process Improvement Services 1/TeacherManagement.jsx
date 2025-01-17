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
      title: "Role Based Rights  Management",
      description:
        "Scholar Clone’s Role-Based Rights Management feature provides schools with precise control over data access and permissions, ensuring security and efficiency across all levels. Administrators can assign customized access rights based on roles—whether for teachers, staff, or students—protecting sensitive information while empowering each user with the tools they need. This feature promotes a secure, well-organized environment where everyone can perform their roles effectively and confidently.",
      image: "/PI 1/image (16).png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 2,
      title: "Mobile App Rights",
      description:
        "Scholar Clone’s Mobile App Rights Management feature gives schools robust control over mobile app access, enabling administrators to tailor permissions according to specific roles like students, teachers, and staff. With easy-to-set permissions, each user gains access only to the tools and information relevant to their responsibilities, enhancing both security and user experience. This feature helps create a secure, streamlined mobile environment where each member of the school community can stay focused, informed, and empowered—anytime, anywhere.",
      image: "/PI 1/image (19).png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 3,
      title: "Work Flow Management",
      description:
        "Scholar Clone’s Workflow Management feature transforms school operations by automating key processes, from approvals and document handling to task assignments and notifications. With customizable workflows, administrators can tailor each process to fit the school’s unique needs, reducing manual tasks, minimizing errors, and ensuring timely task completion. This automation allows staff to focus on meaningful work, creating an organized, productive, and responsive school environment that supports both staff and student success.",
      image: "/PI 1/image (18).png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 4,
      title: "Map Management ",
      description:
        "Scholar Clone’s Map Management feature enhances campus navigation and safety by providing an interactive, detailed map of school facilities. From classrooms and administrative offices to dorms and recreational areas, this tool allows students, parents, and staff to easily locate key areas within the campus. With added features for event locations and emergency routes, Map Management keeps everyone informed and connected, creating a more accessible and secure school environment.",
      image: "/PI 1/image 45 (1).png",
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
      <div className="lg:flex sm:hidden flex-col flex-col lg:w-[90%] lg:mb-[-50px] sm:w-full sm:items-center">
        <Image src={item.image} alt="Student" width={1000} height={1000} className="lg:flex sm:hidden object-contain w-full" />
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