import React, { useState,useEffect } from "react";
import NavigationButton from "./NavigationButton";
import FeatureButton from "./FeatureButton";
import ResourceCard from "./ResourceCard";
import BenefitItem from "./BenefitItem";
import { resourceData } from "./data/resourceData";
import { navigationItems, features, benefitItems } from "./types";

export default function EducationDashboard() {
  const [activeHeaderId, setActiveHeaderId] = useState(1);
  const activeHeader = resourceData.find(
    (header) => header.id === activeHeaderId
  );
  const [visible, setVisible] = useState(false);
    useEffect(() => {
      setVisible(true);
    }, []);
  return (
    <div className={`overflow-hidden bg-white rounded-xl shadow-sm font-ossemibold transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`} style={{
        boxShadow: '0 0 25px 3px rgba(36, 174, 139, 0.45)',
      }}>
      <div className="flex max-md:flex-col">
        <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col items-start mr-0 w-full max-md:max-w-full">
            <div className="flex overflow-hidden flex-wrap gap-4 items-start justify-between self-stretch px-10 py-5 text-lg font-semibold leading-none text-white rounded-lg shadow-[0px_4px_4px_rgba(119,119,119,0.25)] max-md:px-5 max-md:max-w-full" style={{
              background: 'rgba(61, 96, 149, 1)'
            }}>
              {navigationItems.map((item) => (
                <NavigationButton
                  key={item.id}
                  label={item.label}
                  url={item.url}
                  isActive={item.id === activeHeaderId}
                  onClick={() => setActiveHeaderId(item.id)}
                />
              ))}
            </div>

            <div className="flex overflow-hidden flex-col justify-center items-center max-w-full py-2 text-lg font-semibold bg-white shadow-[0px_1px_15px_rgba(0,0,0,0.1)] text-slate-500 w-full max-md:px-5">
              <div className="flex gap-6 items-center justify-center w-full">
                {features.map((feature) => (
                  <FeatureButton key={feature.id} label={feature.label} />
                ))}
              </div>
            </div>
            <div className="mt-14 max-w-full w-[805px] ml-14 max-md:mt-10">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  {activeHeader?.resources
                    .slice(0, 3)
                    .map((resource, index) => (
                      <div
                        key={resource.id}
                        className={`${index !== 0 ? "mt-12 max-md:mt-10" : ""}`}
                      >
                        <ResourceCard {...resource} />
                      </div>
                    ))}
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  {activeHeader?.resources.slice(3).map((resource, index) => (
                    <div
                      key={resource.id}
                      className={`${index !== 0 ? "mt-12 max-md:mt-10" : ""}`}
                    >
                      <ResourceCard {...resource} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col items-start pt-24 pb-10 pr-11 pl-5 mx-auto w-full bg-blue-100 rounded-xl shadow-[-4px_0px_15px_rgba(175,207,255,0.25)] max-md:pt-24 max-md:pr-5">
            <div className="flex gap-5 justify-between self-center max-w-full w-[260px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab5dec80094c62eaad57c673301138bf60d35f0aa71cfefc1aa7806d32f3a837?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
                className="object-contain shrink-0 aspect-square w-[60px]"
                alt="Education platform feature 1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/af1b2ea9c73fc815a4ecd654d65999d389eae3ac629a3ca53bd9a2abee19b2e6?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
                className="object-contain shrink-0 aspect-square w-[60px]"
                alt="Education platform feature 2"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0318f9eae55236e5065419006c5315eadabb91c76d8987e81871b93a2c7f7bd5?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
                className="object-contain shrink-0 aspect-square w-[60px]"
                alt="Education platform feature 3"
              />
            </div>

            <h2 className="mt-10 ml-2.5 text-lg font-semibold text-black max-md:mt-10">
              Experience the Future of K-12 Education!
            </h2>

            {benefitItems.map((item) => (
              <BenefitItem key={item.id} text={item.text} />
            ))}

            <button className="overflow-hidden gap-2.5 self-start p-2.5 mt-8 text-[18px] font-medium text-white rounded-xl shadow-[0px_4px_8px_rgba(0,0,0,0.25)] hover:bg-slate-600 transition-colors duration-200 max-md:mt-10" style={{
              background:'rgba(61, 96, 149, 1)'
            }}>
              Book Your Free Demo Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
