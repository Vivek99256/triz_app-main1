import React from "react";

export default function NavigationBar({ onNavigate }) {
  return (
    <div className="flex overflow-hidden justify-center items-center px-auto py-7 w-full lg:text-lg sm:text-[15px] font-semibold bg-white shadow-[0px_-1px_4px_rgba(0,0,0,0.25)] text-slate-500 max-md:px-5 max-md:max-w-full">
      <div className="flex lg:flex-row sm:flex-col sm:items-center lg:gap-10 sm:gap-4 justify-center w-full">
      <div
          onClick={() => onNavigate("blogs")}
          className="leading-none cursor-pointer"
          tabIndex="0"
          role="button"
        >
          Blogs
        </div>
        <div
          onClick={() => onNavigate("case-studies")}
          className="leading-none cursor-pointer"
          tabIndex="0"
          role="button"
        >
          Case Studies
        </div>
        <div
          onClick={() => onNavigate("faqs")}
          className="leading-none cursor-pointer"
          tabIndex="0"
          role="button"
        >
          FAQ&apos;s
        </div>
        <div
          onClick={() => onNavigate("newsletters")}
          className="leading-none cursor-pointer"
          tabIndex="0"
          role="button"
        >
          Newsletters
        </div>
        <div
          onClick={() => onNavigate("news-announcements")}
          className="leading-none cursor-pointer"
          tabIndex="0"
          role="button"
        >
          News and Announcements
        </div>
      </div>
    </div>
  );
}
