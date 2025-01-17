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
      title: "CPD",
      description:
        "CPD stands for Continuing Professional Development, a process of lifelong learning that ensures individuals maintain and enhance their professional skills and knowledge. It involves various activities such as workshops, seminars, courses, and self-reflection. CPD is vital for career growth, improving job performance, staying updated on industry changes, and meeting licensing or certification requirements.",
      image: "/commservice_images/feature2/Group 430.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 2,
      title: "Training Progress Tracking",
      description:
        "Training progress tracking involves monitoring and recording an individual's performance over time. It helps identify strengths, weaknesses, and areas for improvement. Regular tracking ensures that training goals are being met, and adjustments can be made to optimize results. Using metrics like performance tests, milestones, and feedback allows for a more effective and personalized training approach.",
      image: "/commservice_images/feature2/Group 431.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 3,
      title: "Complaince Training",
      description:
        "Compliance training is essential for organizations to ensure employees understand legal, ethical, and regulatory requirements. It helps mitigate risks, prevent violations, and promote a culture of integrity. Through interactive modules and real-life scenarios, employees learn the importance of adhering to company policies and industry standards, ensuring both personal and organizational accountability in day-to-day operations.",
      image: "/commservice_images/feature2/Group 432.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 4,
      title: "Certification Management",
      description:
        "Certification management involves tracking, maintaining, and verifying certifications within an organization. It ensures that employees, contractors, or businesses comply with regulatory and industry standards. Effective management includes monitoring expiry dates, renewing certifications on time, storing relevant documents, and keeping records organized for audits. This helps maintain a skilled workforce and mitigates risks related to non-compliance.",
      image: "/commservice_images/feature2/Group 433.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 5,
      title: "Reskilling/Upskilling Course Library",
      description:
        "A reskilling/upskilling course library offers a curated collection of training programs designed to help individuals learn new skills or enhance existing ones. These courses cover a wide range of industries and subjects, providing learners with the tools needed to stay competitive in the job market. They cater to both career changers and those aiming for career advancement.",
      image: "/commservice_images/feature2/Group 434.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 6,
      title: "Leadership Development (Medium &junior)",
      description:
        "Leadership development for medium and junior levels focuses on building essential skills such as communication, problem-solving, and team collaboration. It encourages self-awareness, emotional intelligence, and adaptability to navigate challenges. Training often includes mentoring, feedback, and learning opportunities to cultivate confidence and decision-making abilities, preparing individuals for future leadership roles and responsibilities.",
      image: "/commservice_images/feature2/Group 435.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 7,
      title: "Knowledge Sharing & Collaboration",
      description:
        "Knowledge sharing and collaboration involve the exchange of expertise, ideas, and resources among individuals or groups to solve problems, innovate, and improve decision-making. By fostering open communication, trust, and teamwork, organizations can enhance productivity, accelerate learning, and create a more inclusive work environment. Effective collaboration leads to better outcomes and the growth of collective intelligence.",
      image: "/commservice_images/feature2/Group 436.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 8,
      title: "Content Library",
      description:
        "A content library is a centralized collection of digital resources, including articles, videos, images, reports, and other materials, organized for easy access and distribution. It serves as a valuable tool for businesses, educators, or marketers to manage and reuse content efficiently. Content libraries enhance knowledge sharing, support creative processes, and streamline workflows across teams.",
      image: "/commservice_images/feature2/Group 437.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 9,
      title: "Mobile Apps",
      description:
        "Mobile apps are software applications designed for smartphones and tablets. They offer diverse functions, from entertainment and communication to productivity and health tracking. Users can download them from app stores, with many apps being free or offering in-app purchases. Mobile apps have transformed industries, providing convenience and enhancing daily life with instant access to services and information.",
      image: "/commservice_images/feature2/Group 438.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    // {
    //   id: 2,
    //   title: "Task management System",
    //   description:
    //     "Task Management System is your ultimate organizational ally, designed to streamline workflows and boost productivity. With intuitive task assignment, real-time progress tracking, and collaborative tools, this module ensures everyone stays on the same page and deadlines are met with ease. Transform chaos into clarity and empower your team to achieve their goals efficiently, all within one integrated platform.",
    //   image: "/erpservice_images/Group 336.png",
    //   url1: "#feature-1",
    //   url2: "#feature-2",
    //   url3: "#feature-3"
    // },
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