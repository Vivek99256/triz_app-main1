import * as React from "react";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-center text-center max-md:mt-10" style={{
                color:'rgba(61, 96, 149, 1)'
            }}>
        <img
          loading="lazy"
          src={icon}
          alt={`${title} feature icon`}
          className="object-contain aspect-[1.07] w-[77px]"
        />
        <div className="mt-6 text-sm font-inter tracking-tight leading-none">
          {title}
        </div>
        <div className="mt-2.5 text-xs leading-6 font-interregular">{description}</div>
      </div>
    </div>
  );
}
