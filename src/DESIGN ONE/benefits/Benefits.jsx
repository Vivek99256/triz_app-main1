import * as React from "react";
import { BenefitCard } from "./BenefitCard";
import { benefitsData } from "./BenefitsData";

export default function Benefits() {
  return (
    <div className="flex overflow-hidden flex-col items-start px-10 pt-8 mt-20 pb-8 text-2xl font-bold bg-blue-200 max-md:px-5">
      <div className="flex flex-col max-w-full w-full">
        <div className="mx-auto text-4xl font-inter text-slate-500 max-md:mr-2.5 max-md:text-4xl text-center" style={{
                color:'rgba(61, 96, 149, 1)'
            }}>
          Benefits
        </div>
        <div className="flex max-md:flex-col">
        <div className="flex flex-col w-[50%] pr-20">
        <BenefitCard
          title={benefitsData.educationalInstitutions.title}
          benefits={benefitsData.educationalInstitutions.benefits}
          className="w-full max-md:px-5 max-md:mt-10 max-md:max-w-full font-inter"
        />
        <BenefitCard
          title={benefitsData.studentsAndParents.title}
          benefits={benefitsData.studentsAndParents.benefits}
          className="w-full max-md:px-5 max-md:mt-10 ml-36 max-md:max-w-full font-inter"
        />
        </div>
        <div className="flex flex-col mt-32 ml-20  w-[50%]">
        <img
          loading="lazy"
          src="Design_one_images/Group 1321314639 (2).png"
          alt="XYZ"
          className="w-[100%]"
        />
        </div>
        </div>
      </div>
    </div>
  );
}
