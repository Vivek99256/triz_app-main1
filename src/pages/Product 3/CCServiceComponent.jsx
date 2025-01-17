import React, { useState } from 'react';
import Image from 'next/image';
import studentImage from '../../../public/ccservice_images/Group 167.png';
import featureImage1 from '../../../public/ccservice_images/feature1.png';
import featureImage2 from '../../../public/ccservice_images/feature2.png';
import featureImage3 from '../../../public/ccservice_images/feature3.png';
import featureImage4 from '../../../public/ccservice_images/feature4.png';
import Contact from '../Contact/ContactCard';
import Scroll from '../ScrollToTop/Scroll';
import Header from "../Header/NavBar";
import Footer from "../Footer/Footer";
import S1 from "./Feature 1/IntegrationServices";
import S2 from "./Feature 2/IntegrationServices";
import S3 from "./Feature 3/IntegrationServices";
import S4 from "./Feature 4/IntegrationServices";

const features = [
  {
    title: 'Career Awearness  ',
    image: featureImage1,
    serviceComponent: <S1 />,
    description: 'Streamline your school management process with our efficient tools designed to simplify attendance, timetabling, and much more.',
  },
  {
    title: 'Career Counselling',
    image: featureImage2,
    serviceComponent: <S2 />,
    description: 'Gain full control over finances, including fees, payroll, and budgeting, with clear and intuitive tools.',
  },
  {
    title: 'Career Exploration',
    image: featureImage3,
    serviceComponent: <S3 />,
    description: 'Provide personalized learning experiences to your students with powerful LMS and content management tools.',
  },
  {
    title: 'Career Prepration ',
    image: featureImage4,
    serviceComponent: <S4 />,
    description: 'Enhance communication between teachers, students, and parents with integrated messaging and notification systems.',
  },
];

const CCServiceComponent = () => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);

  const handleFeatureClick = (index) => {
    setSelectedFeatureIndex(index);
  };

  return (
    <section className="erp-service bg-white text-xl font-bold overflow-hidden">
      <Header />
      <div className="flex flex-wrap items-center sm:mx-2 lg:mx-0">
        <div className="hero-content flex flex-col lg:flex-row items-center lg:justify-between w-full">
          <div className="text-content w-full lg:w-6/12 mb-8 lg:text-left lg:mb-0 lg:ml-8 sm:text-center"> {/* Add left margin here */}
            <h1 className="lg:text-5xl sm:text-2xl font-bold mb-5">
              <span className="text-blue-600">Streamline Your Operations,</span> <br />
              <span className="text-orange-500">Empower Your Growth</span>
            </h1>
            <p className="text-gray-700 mb-6 lg:text-xl sm:text-sm">
              Our digital ecosystem for quality education streamlines school operations, covering attendance, exams, fees, and inventory. It enhances communication with parent-teacher tools and supports digital classrooms, library, and transport management. Designed to simplify tasks, it empowers schools to focus on student success.
            </p>
            <div className="mt-5 max-w-full w-[500px]">
              <div className="flex gap-4 max-md:flex-col">
                <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-3 items-start mt-1 max-md:mt-6">
                    <div className="flex shrink-0 mt-0 self-start bg-white rounded-full border-green-600 border-solid border-[3px] lg:h-[100px] lg:w-[100px] sm:h-[50px] sm:w-[50px]" aria-hidden="true" />
                    <div className="flex shrink-0 lg:mt-20 sm:mt-10 bg-white rounded-full border-green-600 border-solid border-[3px] lg:h-[80px] lg:w-[80px] sm:h-[40px] sm:w-[40px]" aria-hidden="true" />
                    <div className="flex shrink-0 self-end lg:mt-32 sm:mt-16 bg-white rounded-full border-green-600 border-solid border-[3px] lg:h-[60px] lg:w-[60px] sm:h-[30px] sm:w-[30px] max-md:mt-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex flex-col ml-4 w-[34%] max-md:ml-0 max-md:w-full">
                  <button className="overflow-hidden px-4 py-3 w-full lg:text-xl sm:text-sm font-medium text-white bg-lime-500 rounded-xl shadow-[0px_4px_8px_rgba(0,0,0,0.25)] transition-transform transform hover:bg-lime-600 hover:scale-95 max-md:mt-6">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:block sm:hidden image-content w-full lg:w-6/12 mt-8 lg:mt-0 lg:ml-auto lg:pr-0">
            <Image src={studentImage} alt="Student" width={500} height={500} className="object-contain w-full" />
          </div>
        </div>

        {/* Key Features Section */}
        <div className="key-features w-full mt-16">
          <h2 className="lg:text-4xl sm:text-2xl font-bold text-center text-orange-500 mb-12">Key Features</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => handleFeatureClick(index)}
                className={`feature-card lg:w-60 lg:h-60 sm:w-40 sm:h-40 border-2 rounded-lg p-4 flex flex-col items-center cursor-pointer transition ${
                  index === selectedFeatureIndex ? 'border-green-500' : 'border-blue-500'
                }`}
              >
                <h3 className="lg:text-lg sm:text-xs font-semibold text-center mb-4">{feature.title}</h3>
                <Image src={feature.image} alt={`Feature ${index + 1}`} width={150} height={100} className="object-cover w-full h-32" />
                {index === selectedFeatureIndex && <hr className="w-full border-green-500 my-2" />}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Feature Description Section */}
        <div className="feature-description w-full mt-6 px-8">
          {/* Render the components based on the selected feature */}
          <div className="feature-content">
            {features[selectedFeatureIndex].serviceComponent}
          </div>
        </div>
      </div>
      {/* Contact Us Section */}
      <div className="contact-us w-full mt-16">
          <h1 className="lg:text-4xl sm:text-2xl font-bold text-center text-sky-500 mb-12">
            Contact Us
          </h1>
          <Contact />
        </div>
      <Scroll />
      <Footer />
    </section>
  );
};

export default CCServiceComponent;
