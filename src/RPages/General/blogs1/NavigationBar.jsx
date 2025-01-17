import React from "react";

export function NavigationBar() {
  return (
    <div className="flex overflow-hidden justify-center items-center px-auto py-7 w-full text-lg font-semibold bg-white shadow-[0px_-1px_4px_rgba(0,0,0,0.25)] text-slate-500 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-10 justify-center w-full">
        <div className="leading-none" tabIndex="0" role="button">
          Blogs
        </div>
        <div
          className="leading-none"
          tabIndex="0"
          role="button"
        >
          Case Studies
        </div>
        <div className="leading-none" tabIndex="0" role="button">
          FAQ&apos;s
        </div>
        <div
          className="leading-none"
          tabIndex="0"
          role="button"
        >
          Newsletters
        </div>
        <div className="leading-none" tabIndex="0" role="button">
          News and Announcements
        </div>
      </div>
    </div>
  );
}
