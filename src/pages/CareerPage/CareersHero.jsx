import * as React from "react";

export default function CareersHero() {
  return (
    <div className="relative w-full">
    <img
        loading="lazy"
        src="/career_page_images/image (7).png"
        alt="Resource page header"
        className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 flex justify-center items-center text-amber-600 text-6xl font-bold text-center max-md:text-4xl max-md:max-w-full pr-16">
        {/* JOIN OUR TEAM */}
    </div>
    </div>

  );
}
