import * as React from "react";

export default function FeatureCardNew({ icon, title, description }) {
  return (
    <div className="flex flex-col grow items-center px-5 py-8 w-full font-medium bg-white rounded-lg border-2 border-cyan-900 border-solid text-neutral-800 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src={icon}
        alt={`${title} feature icon`}
        className="object-contain w-12 aspect-square max-md:ml-2.5"
      />
      <div className="mt-2 font-bold text-md max-md:ml-2.5">
        {title}
      </div>
      <div className="self-stretch mt-2 text-xs max-md:max-w-full">
        {description}
      </div>
    </div>
  );
}