import React from "react";

export function BlogCard({ image, title, author, date, readTime }) {
  return (
    <div className="flex flex-col justify-between lg:p-3 sm:p-4 sm:items-center lg:items-start bg-white rounded-xl shadow-sm lg:min-w-[140px] lg:w-[210px] lg:h-full sm:w-full transition-all duration-300 hover:border-sky-500 hover:border-2 hover:border-solid hover:rounded-xl">
      {/* Blog Image */}
      <div className="flex flex-col sm:items-center lg:items-start text-[15px] capitalize">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="object-contain max-w-full rounded-xl aspect-[1.31] w-[260px]"
        />
        <div className="mt-6 text-sm sm:text-center lg:text-left font-pjbold">{title}</div>
      </div>
      
      {/* Author and Meta Information */}
      <div className="flex gap-4 justify-center items-center mt-6">
        <img
          loading="lazy"
          src={author.avatar}
          alt={author.name}
          className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square w-[40px]"
        />
        <div className="flex flex-col self-stretch my-auto w-full">
          <div className="text-[12px] font-pjsemibold">{author.name}</div>
          <div className="text-[11px] font-pj">
            {date} ∙ {readTime} read
          </div>
        </div>
      </div>
    </div>
  );
}
