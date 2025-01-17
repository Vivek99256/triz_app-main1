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
      title: "Career Exploration",
      description:
        "Career exploration is the process of researching and evaluating different job options, industries, and career paths. It involves understanding personal interests, skills, values, and goals to identify potential career choices. Through activities like internships, networking, and informational interviews, individuals gain insight into various roles, helping them make informed decisions about their future careers.",
      image: "/ccservice_images/Group 405.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    // {
    //   id: 2,
    //   title: "Design your dream explore",
    //   description:
    //     "My dream exploration involves traversing lush rainforests, ancient ruins, and vibrant coral reefs, combining adventure and discovery. Equipped with eco-conscious tools, I’d journey through uncharted landscapes, connect with diverse cultures, and document the wonders of nature. It’s a quest to uncover hidden beauty, inspire conservation, and embrace the thrill of the unknown, one step at a time.",
    //   image: "/ccservice_images/Group 406.png",
    //   url1: "#how-it-works",
    //   url2: "#how-it-benefits-you",
    //   url3: "#visualize-your-workflow"
    // },
    // {
    //   id: 3,
    //   title: "Explore occupation with various crietria",
    //   description:
    //     "Exploring occupations involves evaluating diverse criteria such as personal interests, skills, education, salary expectations, job market trends, and work-life balance. Consider growth potential, geographic location, and industry stability. Researching roles through networking, internships, or shadowing can offer practical insights. Aligning career choices with values and long-term goals ensures fulfillment and professional success in the chosen path.",
    //   image: "/ccservice_images/Group 407.png",
    //   url1: "#how-it-works",
    //   url2: "#how-it-benefits-you",
    //   url3: "#visualize-your-workflow"
    // },
    // {
    //   id: 4,
    //   title: "Find dream collages",
    //   description:
    //     "Dream collages are artistic compilations of images, words, and textures that visually represent aspirations, fantasies, or subconscious thoughts. These imaginative creations blend surreal and symbolic elements, evoking a sense of wonder and introspection. Often used in vision boards or creative expression, dream collages allow individuals to explore their inner desires, unlocking creativity and offering a glimpse into their deepest aspirations.",
    //   image: "/ccservice_images/Group 408.png",
    //   url1: "#how-it-works",
    //   url2: "#how-it-benefits-you",
    //   url3: "#visualize-your-workflow"
    // },
    // {
    //   id: 5,
    //   title: "Find dream employer",
    //   description:
    //     "A dream employer fosters growth, values employee well-being, and offers opportunities for innovation. They promote a positive work culture, inclusivity, and work-life balance. Providing challenging projects, mentorship, and recognition, they inspire loyalty and professional excellence. A dream employer aligns with your passions, respects individuality, and encourages collaboration, creating a fulfilling and rewarding career journey.",
    //   image: "/ccservice_images/Group 409.png",
    //   url1: "#how-it-works",
    //   url2: "#how-it-benefits-you",
    //   url3: "#visualize-your-workflow"
    // },
    // {
    //   id: 6,
    //   title: "Scholarship",
    //   description:
    //     "A scholarship is a financial award granted to students to support their education, often based on academic merit, leadership, talents, or financial need. Scholarships alleviate the burden of tuition fees, enabling recipients to focus on their studies. Offered by institutions, governments, or private organizations, they empower individuals to achieve their educational and career aspirations.",
    //   image: "/ccservice_images/Group 410.png",
    //   url1: "#how-it-works",
    //   url2: "#how-it-benefits-you",
    //   url3: "#visualize-your-workflow"
    // },
    // {
    //   id: 7,
    //   title: "Competitive exam",
    //   description:
    //     "A competitive exam is a test designed to assess candidates' knowledge, skills, and aptitude in a specific subject or field. It is often used for admissions to educational institutions, job recruitment, or certification purposes. These exams are typically challenging, with a focus on measuring proficiency and determining the best-qualified individuals for a given opportunity.",
    //   image: "/ccservice_images/Group 411.png",
    //   url1: "#how-it-works",
    //   url2: "#how-it-benefits-you",
    //   url3: "#visualize-your-workflow"
    // },
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