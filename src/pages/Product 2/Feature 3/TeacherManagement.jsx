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
      title: "Main stream CBSE",
      description:
        "The Central Board of Secondary Education (CBSE) is a national education board in India, overseeing school education from primary to senior secondary levels. It designs curricula, conducts exams, and sets educational standards. CBSE emphasizes holistic learning, focusing on academic excellence, co-curricular activities, and life skills. It is widely recognized for its rigorous and structured approach to education across India and abroad.",
      image: "/lmsservice_images/feature3/Group 379.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 2,
      title: "SEL",
      description:
        "Social-Emotional Learning (SEL) is the process of developing self-awareness, emotional regulation, empathy, and interpersonal skills. It helps individuals build strong relationships, make responsible decisions, and manage challenges effectively. SEL fosters a positive mindset and resilience, benefiting academic performance and mental health. Integrated into schools, SEL promotes holistic growth, equipping students for personal and professional success in life.",
      image: "/lmsservice_images/feature3/Group 380.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 3,
      title: "Vocational training",
      description:
        "Vocational training equips individuals with practical skills and knowledge for specific trades or professions, such as carpentry, healthcare, or IT. It bridges the gap between education and employment, focusing on hands-on experience and industry-relevant expertise. Offered through schools, apprenticeships, or specialized programs, it enhances employability and empowers people to pursue rewarding, skill-based careers tailored to market demands.",
      image: "/lmsservice_images/feature3/Group 381.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 4,
      title: "Skill",
      description:
        "Skill is the ability to perform tasks with proficiency, developed through practice and learning. It can be technical, creative, or interpersonal, ranging from coding and painting to effective communication. Skills are essential for personal and professional growth, enabling individuals to solve problems, adapt to challenges, and achieve goals. Continuous improvement of skills enhances competence and confidence in various areas of life.",
      image: "/lmsservice_images/feature3/Group 382.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 5,
      title: "Sports",
      description:
        "Sports are physical activities that promote fitness, teamwork, and entertainment. They range from individual pursuits like running to team games like soccer. Sports foster discipline, resilience, and camaraderie, providing both mental and physical benefits. They unite people across cultures, inspiring passion and competition. From casual play to professional leagues, sports are a universal celebration of human potential and determination.",
      image: "/lmsservice_images/feature3/Group 383.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 6,
      title: "Steam courses",
      description:
        "STEAM courses integrate Science, Technology, Engineering, Arts, and Mathematics to foster creativity, critical thinking, and problem-solving skills. They emphasize hands-on learning and interdisciplinary approaches, encouraging students to innovate and explore real-world challenges. These programs prepare learners for future careers in diverse fields by blending technical knowledge with artistic expression, promoting holistic development and adaptability in a rapidly evolving world.",
      image: "/lmsservice_images/feature3/Group 384.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 7,
      title: "Libraray content",
      description:
        "A library is a treasure trove of knowledge, housing books, digital resources, and multimedia materials. It fosters learning, research, and creativity while serving as a quiet retreat for readers. Libraries connect communities, offering programs, study spaces, and free access to information. From ancient manuscripts to modern e-books, libraries preserve the past and inspire future generations.",
      image: "/lmsservice_images/feature3/Group 385.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 8,
      title: "Career carriculam",
      description:
        "A career curriculum is a structured program designed to help individuals develop the skills, knowledge, and experience needed for professional growth. It includes career exploration, skill-building, mentorship, and practical experience, enabling individuals to align their education and goals with industry needs. This approach fosters lifelong learning, adaptability, and readiness for evolving job market demands.",
      image: "/lmsservice_images/feature3/Group 386.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    // {
    //   id: 4,
    //   title: " Front Desk Management System",
    //   description:
    //     "Front Desk Management redefines the first point of contact for your institution, creating a welcoming and efficient experience for students and visitors alike. This module streamlines check-ins, appointment scheduling, and inquiries, ensuring every interaction is handled with professionalism. With real-time visitor tracking and insightful reporting, you can enhance service quality while keeping operations running smoothly. Elevate your front desk experience and make a lasting impression!",
    //   image: "/lmsservice_images/feature2/Group 338.png",
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