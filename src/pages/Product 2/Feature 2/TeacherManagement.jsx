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
      title: "Measuring learning growth",
      description:
        "Measuring learning growth involves assessing a learner's progress over time. This can be done through various methods such as tests, quizzes, assignments, and observations. Key indicators include improvements in skills, knowledge retention, and the ability to apply concepts. Learning growth also considers critical thinking, creativity, and the development of emotional intelligence and problem-solving abilities.",
      image: "/lmsservice_images/feature2/Group 371.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 2,
      title: "Homework Management",
      description:
        "Homework management involves organizing and prioritizing assignments effectively. It includes setting clear goals, breaking tasks into manageable parts, and using tools like planners or apps to track progress. By creating a consistent routine and avoiding procrastination, students can reduce stress, improve productivity, and ensure timely completion of homework. Time management skills are key to success.",
      image: "/lmsservice_images/feature2/Group 372.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 3,
      title: "Assignment Management",
      description:
        "Assignment management involves organizing, planning, and prioritizing tasks to ensure timely completion. It includes setting clear goals, breaking down tasks into manageable steps, and allocating sufficient time for each. Effective assignment management helps reduce stress, improve productivity, and ensures high-quality results by staying organized and focused. It often involves tracking progress and adjusting strategies as needed.",
      image: "/lmsservice_images/feature2/Group 373.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 4,
      title: "Question bank (create & add)",
      description:
        "A question bank is a collection of questions designed to assess knowledge, skills, and understanding in various subjects or topics. It serves as a valuable resource for educators, students, and professionals, helping with test preparation, quizzes, and assignments. Question banks can be tailored to different difficulty levels and formats, offering both multiple-choice and open-ended questions.",
      image: "/lmsservice_images/feature2/Group 374.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 5,
      title: "Question papaer generation",
      description:
        "Question paper generation involves creating a set of questions designed to assess students' knowledge and understanding of a particular subject. It requires careful selection of topics, appropriate difficulty levels, and question types (e.g., multiple choice, short answer, essay). The goal is to evaluate a student’s grasp of the material in a fair and comprehensive manner, promoting accurate assessment of their learning.",
      image: "/lmsservice_images/feature2/Group 375.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 6,
      title: "Assesment tools, various type questions creation",
      description:
        "Assessment tools are instruments used to evaluate knowledge, skills, and abilities. They include various types of questions such as multiple-choice, true/false, short-answer, essay, and fill-in-the-blank. Each type measures different cognitive levels, from recall to analysis and application. Effective assessment tools help instructors gauge student understanding, guide learning strategies, and provide feedback for improvement.",
      image: "/lmsservice_images/feature2/Group 376.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 7,
      title: "Eportfolio",
      description:
        "An ePortfolio is a digital collection of an individual's work, achievements, and reflections, showcasing skills, experiences, and progress over time. It can include documents, images, videos, and other multimedia to demonstrate expertise in various areas. Often used in educational and professional settings, it allows users to present their personal growth, learning outcomes, and career milestones.",
      image: "/lmsservice_images/feature2/Group 377.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 8,
      title: "PAL",
      description:
        "The term 'PAL' typically refers to 'Phase Alternating Line,'a color television broadcasting system primarily used in Europe, Asia, and parts of Africa. It was developed to overcome issues like color distortion found in older systems. PAL provides higher image quality and is widely used in analog television transmissions, offering better stability and color accuracy than other formats like NTSC.",
      image: "/lmsservice_images/feature2/Group 378.png",
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