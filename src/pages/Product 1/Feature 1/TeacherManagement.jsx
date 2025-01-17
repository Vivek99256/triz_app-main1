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
      title: "Education CRM",
      description:
        "An Education CRM (Customer Relationship Management) system streamlines communication and operations for educational institutions. It manages student inquiries, enrollment processes, and alumni engagement. By centralizing data, automating workflows, and enhancing personalization, it improves recruitment, retention, and student satisfaction, fostering better relationships between institutions and their stakeholders for long-term success.",
      image: "/erpservice_images/Group 157.png",
      url1: "#how-it-works",
      url2: "#how-it-benefits-you",
      url3: "#visualize-your-workflow"
    },
    {
      id: 2,
      title: "Inventroy & Store Management",
      description:
        "Inventory and store management involve tracking, organizing, and controlling stock levels to ensure efficient operations. It includes procurement, storage, and distribution, balancing supply and demand. Effective management minimizes costs, prevents overstocking or shortages, and enhances customer satisfaction. Tools like inventory systems and forecasting optimize processes, ensuring seamless business operations.",
      image: "/erpservice_images/Group 337.png",
      url1: "#feature-1",
      url2: "#feature-2",
      url3: "#feature-3"
    },
    {
      id: 3,
      title: " Front Desk Management System",
      description:
        "Front Desk Management redefines the first point of contact for your institution, creating a welcoming and efficient experience for students and visitors alike. This module streamlines check-ins, appointment scheduling, and inquiries, ensuring every interaction is handled with professionalism. With real-time visitor tracking and insightful reporting, you can enhance service quality while keeping operations running smoothly. Elevate your front desk experience and make a lasting impression!",
      image: "/erpservice_images/Group 338.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 4,
      title: " Inward-Outward (Digital Records)",
      description:
        "Inward-Outward digital records are systems for managing organizational communication. They track documents or correspondences entering (inward) or leaving (outward) an organization. These records ensure streamlined documentation, accountability, and quick retrieval of information. Commonly used in offices, they enhance efficiency by digitizing traditional registers for seamless management and secure record-keeping.",
      image: "/erpservice_images/Group 340.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 5,
      title: "Complain Management",
      description:
        "Complain management involves addressing and resolving customer grievances efficiently to ensure satisfaction and improve services. It requires active listening, prompt responses, and a systematic approach to identify issues and implement solutions. Effective complain management enhances trust, fosters loyalty, and strengthens the organization’s reputation by turning dissatisfaction into positive experiences.",
      image: "/erpservice_images/Group 339.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 6,
      title: "Library Management",
      description:
        "Library management involves organizing, maintaining, and ensuring the efficient functioning of a library. It includes cataloging books, managing resources, facilitating user access, and implementing digital tools for smooth operations. Effective library management fosters knowledge sharing, enhances user experiences, and supports education by providing a well-organized, accessible repository of information.",
      image: "/erpservice_images/Group 341.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 7,
      title: "Hostel Management",
      description:
        " Hostel management involves overseeing accommodations, facilities, and services for residents, ensuring their comfort, safety, and well-being. It includes tasks like room allocation, maintenance, meal planning, enforcing rules, and addressing grievances. Effective hostel management fosters a positive living environment, promoting harmony, discipline, and a supportive atmosphere for academic and personal growth.",
      image: "/erpservice_images/Group 342.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 8,
      title: "Task Management",
      description:
        "Task management involves organizing, prioritizing, and tracking tasks to achieve goals efficiently. It includes setting deadlines, allocating resources, and monitoring progress. Effective task management boosts productivity, reduces stress, and ensures timely project completion. Tools like to-do lists, calendars, and software streamline the process, enhancing focus and accountability in personal or professional settings.",
      image: "/erpservice_images/Group 343.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 9,
      title: " Complaince Management",
      description:
        "Compliance management involves ensuring an organization adheres to laws, regulations, standards, and internal policies. It includes identifying compliance requirements, implementing controls, monitoring adherence, and addressing non-compliance. Effective compliance management minimizes risks, protects reputation, and fosters ethical practices, ensuring organizations operate lawfully and align with industry and regulatory expectations.!",
      image: "/erpservice_images/Group 344.png",
      url1: "#contact-us",
      url2: "#feedback",
      url3: "#support"
    },
    {
      id: 10,
      title: " SQAA",
      description:
        " SQAA stands for Software Quality Assurance and Auditing. It involves systematically ensuring software meets specified quality standards. SQAA includes planning, testing, monitoring, and reporting to identify and address issues, ensuring reliability, efficiency, and user satisfaction. It plays a critical role in delivering high-quality, compliant, and defect-free software solutions.",
      image: "/erpservice_images/Group 345.png",
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