import * as React from "react";
import { BenefitCard } from "./BenefitCard";
import { benefitsTopData, benefitsBottomData } from "./BenefitsData";

export default function Benefits() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center pt-32 w-full max-w-screen-xl bg-white">
        <h1 className="text-3xl font-lxesemibold leading-none text-center text-zinc-900 underline decoration-[rgba(34,226,127,1)] decoration-4">
          Benefits of Our Module
        </h1>

        <div className="mt-20 w-full flex items-center justify-center max-md:mt-10">
          <div className="flex gap-5 flex-wrap justify-center max-md:flex-col">
            {benefitsTopData.map((benefit) => (
              <div key={benefit.id} className="flex lg:ml-10 flex-col w-full max-w-xs">
                <BenefitCard
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 w-full flex items-center justify-center max-md:mt-10">
          <div className="flex gap-5 flex-wrap justify-center max-md:flex-col">
            {benefitsBottomData.map((benefit) => (
              <div key={benefit.id} className="flex flex-col lg:ml-10 w-full max-w-xs">
                <BenefitCard
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="self-stretch mt-28 w-full border border-solid bg-neutral-800 border-neutral-800 min-h-[1px] opacity-[0.08]" />
      </div>
    </div>
  );
}
