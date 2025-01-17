import * as React from "react";

export default function JobCard({ title, imageSrc }) {
  return (
    <div className="flex flex-col w-full lg:pl-16 lg:pr-16 sm:w-[45%] md:w-[30%] max-md:w-full">
      <div className="flex flex-col items-center px-4 py-6 w-full font-semibold rounded-lg bg-neutral-100 max-md:mt-8">
        <img
          loading="lazy"
          src={imageSrc}
          className="object-contain self-stretch w-full rounded-lg aspect-[2.5] max-w-xs"
          alt={`${title} position`}
        />
        <div className="mt-2 text-lg text-center text-black">
          {title}
        </div>
        <button 
          className="gap-2 px-4 py-2 mt-6 text-sm text-white bg-sky-500 rounded-2xl max-md:mt-8 hover:bg-sky-600 focus:ring-2 focus:ring-sky-400"
          onClick={() => window.location.href = `/apply/${title.toLowerCase().replace(' ', '-')}`}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
