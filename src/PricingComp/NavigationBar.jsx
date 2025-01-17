import * as React from "react";
import NavigationItem from "./NavigationItem";

const NavigationBar = () => {
  const navigationItems = ["ERP", "LMS", "HRMS", "Career Counselling"];

  return (
    <nav className="flex overflow-hidden flex-wrap gap-20 items-start justify-between px-16 py-3 mx-52 text-lg font-bold font-poppins border border-solid bg-sky-500 bg-opacity-10 border-indigo-950 max-w-[800px] rounded-[30px] max-md:px-5" style={{
        color: " rgba(120, 120, 171, 1)",
        boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.15)',
    }}>
      {navigationItems.map((item, index) => (
        <NavigationItem key={index} text={item} />
      ))}
    </nav>
  );
};

export default NavigationBar;