import * as React from "react";

export function BenefitCard({ icon, title, description, className = "" }) {
  return (
    <div className={`flex flex-col text-zinc-900 max-md:mt-10 ${className}`}>
      <img
        loading="lazy"
        src={icon}
        alt={`${title} icon`}
        className="object-contain aspect-square w-[33px]"
      />
      <div className="mt-4 text-sm font-bold leading-none">
        {title}
      </div>
      <div className="self-stretch mt-4 text-xs leading-7 opacity-70">
        {description}
      </div>
    </div>
  );
}