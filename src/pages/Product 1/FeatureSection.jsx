import * as React from "react";
import { useState } from "react";
import FeatureCard from "./FeatureCard";
import Hero from "./UserTeacherHero";
import Header from "../Header/NavBar";
import Footer from "../Footer/Footer";
import "./feature.css";
import FeatureCardNew from "./FeatureCardNew";
const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/227de1a81194327dadc68ea982974c4da555caf9be06a82a9142ea07345472c1?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "User Management",
    description: (
        <ul className="list-disc pl-4">
          <li>Comprehensive user profiles for teachers, students, and parents.</li>
          <li>Role-based access controls for secure and efficient management.</li>
          <li>Bulk user creation and imports for streamlined onboarding.</li>
        </ul>
      )
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb99ce25f2bb43cbbcbea469a1e9c0ec14b2ff34fbabc65ea8cebd2178140316?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Student Attendance \nManagement",
    description: (
        <ul className="list-disc pl-4">
            <li>Real-time attendance tracking with automated notifications.</li>
            <li>Detailed attendance reports for classes and individuals.</li>
            <li>Biometric and RFID integration for accurate tracking.</li>
      </ul>
    )
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a30eae674798ec432caf252e9b7bdc3b33db65f566107f24528ff6460682eb59?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Exam Management",
    description:(
        <ul className="list-disc pl-4">
            <li>Simplified marks entry for exams and co-scholastic activities.</li>
            <li>Result uploads and higher-performance class (HPC) tracking.</li>
        </ul>
    )
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/47b32b639f621fa6fd7e7ba04829af1dd3c6c7580eea1667265e30fec743cefa?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Learning Outcomes \nManagement",
    description:(
        <ul className="list-disc pl-4">
            <li>Define and analyze learning outcomes for each subject.</li>
            <li>Visualize performance trends with learning outcome graphs.</li>
            </ul>
    )
  }
];
const benefits = [
    {
        id: 1,
        title: "Tailored Timetable Creation",
        description: "Assign class teachers, manage proxies, and utilize AI-generated timetables to optimize teaching schedules based on individual teacher availability and subject requirements.",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5750250e2ca3346748eba6f846e67285aab288f0902a093d6d2e03bf05304bb?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        imageAlt: "Timetable creation interface icon"
      },
      {
        id: 2,
        title: "Detailed Learning Outcome Insights",
        description: "Track individual student achievements against specific learning outcomes. Identify gaps and intervene effectively with personalized strategies for improvement.",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d91e980f11b27a7c47309751e77edcb3ab2d860209f18b63d6b316bbfb7032f5?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        imageAlt: "Learning outcomes analysis chart icon"
      },
      {
        id: 3,
        title: `Teacher's Session Planning`,
        description: "Enable teachers to document and manage their daily lesson plans with a structured Teacher's Diary feature, ensuring accountability and consistency in teaching.",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/86d4b46f7b392bdaf505d2fc5101edd57946c2f0022e2ca826e5d07c33e85e40?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        imageAlt: "Teacher planning calendar icon"
      },
      {
        id: 4,
        title: "Student Discipline Insights",
        description: "Maintain detailed records of behavior incidents and interventions, empowering schools to adopt personalized discipline and support strategies for students.",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/90fc3918916b9f34c20d0f2f8a4744c439215ebf8102f8ac355c0641178d7ea9?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        imageAlt: "Student behavior tracking icon"
      },
      {
        id: 5,
        title: "Custom ID Cards and Reports",
        description: "Generate personalized ID cards and detailed performance reports for students and teachers, complete with QR codes or RFID integration for identification.",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/23775925a6f103b64c1d90a90896757a73e15685b1af4d1d26e7bc28c772edf1?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        imageAlt: "ID card generation system icon"
      },
      {
        id: 6,
        title: "Parent Communication Management",
        description: "Maintain updated records of parent contact information and provide customized notifications about attendance, results, and circulars, ensuring better engagement.",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e60cfac336a6a20a70e3a07d978721eb066147f5551998442a3f17f1787a3d28?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        imageAlt: "Parent communication portal icon"
      },
      {
        id: 7,
        title: "Learning Outcome Graphs",
        description: "Provide individualized performance graphs for students and classes, making it easier to assess progress and plan tailored teaching strategies.",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce1321fc5b4690466ff340fcc373b50d5131ef9d86296af569516a8d8203c26f?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        imageAlt: "Performance analytics graph icon"
      },
      {
        id: 8,
        title: "Teacher Transfer Utility",
        description: "Easily manage internal transfers based on personalized teacher preferences and institutional needs, reducing administrative complexities.",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce1321fc5b4690466ff340fcc373b50d5131ef9d86296af569516a8d8203c26f?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        imageAlt: "Teacher transfer management icon"
      }
];
export default function FeaturesSection() {  
  const [activeSection, setActiveSection] = React.useState('features');
  const handleTabClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
    <Header />
    <Hero />
    <div className="flex flex-col font-inter rounded-none"style={{
        borderTop: 'solid',
        borderTopColor: 'rgba(151, 151, 151, 1)',
      }}>
      <div className="flex gap-0 max-md:flex-col">
        <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow pt-44 pr-16 pl-5 mt-auto w-full text-xl font-medium text-white rounded-none rounded-tr-xl rounded-br-xl bg-opacity-80 shadow-[3px_0px_8px_rgba(0,0,0,0.25)] max-md:px-5 max-md:py-24" style={{
            background: 'rgba(34, 69, 111, 0.75)'
          }}>
            <button
                className={`feature-title ml-10 ${activeSection === 'features' ? 'active' : ''}`}
                onClick={() => handleTabClick('features')}
              >
                Features
              </button>
              <button
                className={`benefit-title mt-12 ml-10 max-md:mt-10 max-md:mr-2 ${activeSection === 'benefits' ? 'active' : ''}`}
                onClick={() => handleTabClick('benefits')}
              >
                Benefits
              </button>
          </div>
        </div>
        {activeSection === 'features' && (
        <div className="flex flex-col ml-1 w-[84%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-10 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="aboutus-container flex flex-col max-w-full w-[1300px]">
            {/* <div className="flex">
            <button className="bg-slate-500 py-2 px-4 rounded-xl text-white font-inter">Features</button>
            <button className="bg-slate-500 py-2 px-4 rounded-xl text-white font-inter ml-4">Benefits</button>
            </div> */}
              <h1 className="self-center ml-12 text-2xl font-medium text-amber-500 max-md:max-w-full max-md:text-xl">
                Key Features and Modules
              </h1>
              <div className="mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  {features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <FeatureCard {...feature} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  {features.slice(2, 4).map((feature, index) => (
                    <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <FeatureCard {...feature} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center rounded-none">
                <div className="ml-20 mt-10 text-2xl font-medium text-amber-500 max-md:max-w-full max-md:text-4xl">
                Additional Features
                </div>
                <div className="self-stretch mt-2 max-md:mt-10 max-md:mr-0 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/74cd2e49059ecacc49b00ecfe0bd558ae64d701f72c082386449d7ed0a724d9a?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
                        alt="Additional features illustration"
                        className="object-contain grow w-[300px] aspect-[1.5] max-md:mt-10 max-md:max-w-full"
                    />
                    </div>
                    <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                <div className="mt-6 text-lg font-inter text-black max-md:mt-10 max-md:max-w-full">
                    Other features include ID card generation with customizable
                    templates, circular generation and distribution for school
                    communications, parent communication management, student
                    discipline tracking, teacher transfer utility, and teacher&aspos;s diary
                    management for session planning. These tools provide robust
                    support for day-to-day school operations and improve
                    administrative efficiency.
                </div>
                </div>
                </div>
                </div>
                <div className="mt-20 text-md font-medium text-center text-black max-md:mt-10 max-md:max-w-full">
        <span className="text-2xl font-inter text-amber-500">
          Ready to transform your institution&aspos;s operations?
        </span>
        <br />
        Explore the User/Teacher Management solution by Scholar Clone ERP and
        experience the power of streamlined education management.
      </div>
      <button 
        className="overflow-hidden gap-2.5 self-stretch p-2.5 mt-6 text-md font-medium text-white rounded-xl bg-slate-500 shadow-[0px_4px_8px_rgba(0,0,0,0.25)] max-md:mt-10"
        onClick={() => {}}
        tabIndex={0}
        aria-label="Get Started Today"
      >
        Get Started Today
      </button>
            </div>
            </div>
          </div>
        </div>
        )}
                {activeSection === 'benefits' && (
        <div className="flex flex-col ml-1 w-[84%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-10 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="aboutus-container flex flex-col max-w-full w-[1300px]">
            {/* <div className="flex">
            <button className="bg-slate-500 py-2 px-4 rounded-xl text-white font-inter">Features</button>
            <button className="bg-slate-500 py-2 px-4 rounded-xl text-white font-inter ml-4">Benefits</button>
            </div> */}
              <h1 className="self-center ml-12 text-2xl font-medium text-amber-500 max-md:max-w-full max-md:text-xl">
                Key Benefits and Modules
              </h1>
              <div className="mt-10 max-md:max-w-full">
                <div className="flex gap-5 items-center text-center max-md:flex-col">
                  {benefits.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex flex-col w-6/12  max-md:ml-0 max-md:w-full">
                      <FeatureCardNew {...feature} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 text-center max-md:flex-col">
                  {benefits.slice(4, 8).map((feature, index) => (
                    <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <FeatureCardNew {...feature} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center rounded-none">
                <div className="ml-20 mt-10 text-2xl font-medium text-amber-500 max-md:max-w-full max-md:text-4xl">
                Additional Features
                </div>
                <div className="self-stretch mt-2 max-md:mt-10 max-md:mr-0 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/74cd2e49059ecacc49b00ecfe0bd558ae64d701f72c082386449d7ed0a724d9a?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
                        alt="Additional features illustration"
                        className="object-contain grow w-[300px] aspect-[1.5] max-md:mt-10 max-md:max-w-full"
                    />
                    </div>
                    <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                <div className="mt-6 text-lg font-inter text-black max-md:mt-10 max-md:max-w-full">
                    Other Benefits Include
                </div>
                </div>
                </div>
                </div>
                <div className="mt-20 text-md font-medium text-center text-black max-md:mt-10 max-md:max-w-full">
        <span className="text-2xl font-inter text-amber-500">
        Your Journey to Smarter School Management Starts Here
        </span>
        <br />
        <br />
        Don&apos;t let inefficiencies hold your institution back. Leverage the power of an integrated system that is tailored to your needs.
      </div>
      <button 
        className="overflow-hidden gap-2.5 self-stretch p-2.5 mt-6 text-md font-medium text-white rounded-xl bg-slate-500 shadow-[0px_4px_8px_rgba(0,0,0,0.25)] max-md:mt-10"
        onClick={() => {}}
        tabIndex={0}
        aria-label="Get Started Today"
      >
        Get Started Today
      </button>
            </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
}