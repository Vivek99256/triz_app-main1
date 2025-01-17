import * as React from "react";
import  CTAButton from "./CTAButton";

const ctaButtons = [
  {
    text: "Get Free Demo",
    className: "overflow-hidden gap-2.5 self-stretch p-2.5 rounded-xl shadow-[0px_4px_8px_rgba(0,0,0,0.25)]"
  },
  {
    text: "Get Your Solution Today",
    className: "overflow-hidden gap-2.5  p-2.5 rounded-xl shadow-[0px_4px_8px_rgba(0,0,0,0.25)]"
  }
];

function UserTeacherHero() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-start font-inter px-16 py-10 w-full shadow-[0px_3px_8px_rgba(0,0,0,0.25)] max-md:px-5 max-md:py-24 max-md:max-w-full" style={{
        background: 'linear-gradient(135deg, #ffffff 61%, rgba(23, 123, 225, 0.85) 100%)',
      }}>
      <div className="-mb-6 w-full max-w-[1668px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start mt-6 w-full text-2xl font-medium max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl text-sky-500 max-md:max-w-full max-md:text-4xl">
                User/Teacher Management - Streamline Your School Operations
              </div>
              <div className="self-stretch text-lg mt-12 text-black max-md:mt-10 max-md:max-w-full">
                Scholar Clone ERP introduces an all-in-one User/Teacher
                Management solution to simplify and optimize administrative
                tasks while enhancing collaboration between teachers, students,
                and parents. Designed with cutting-edge tools, this module is
                tailored to meet the diverse needs of educational institutions.
              </div>
              <div className="flex flex-wrap gap-10 text-[15px] mt-12 max-w-full text-white w-[547px] max-md:mt-10">
                {ctaButtons.map((button, index) => (
                  <CTAButton 
                    key={index}
                    text={button.text}
                    className={button.className}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc0ec9d63bc1a2abea1605f90a72d211eb0bfed1665562c911e54c9b1c4f10ad?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
              alt="User and teacher management interface demonstration"
              className="object-contain grow w-full aspect-[1.5] max-md:mt-9 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserTeacherHero;