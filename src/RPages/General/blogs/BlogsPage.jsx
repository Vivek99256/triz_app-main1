import React from "react";
import { BlogCard } from "./BlogCard";

const blogData = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cd23d12b21847c516fa296e4733578d0118bb52679e0ffaafd2217ecc37f9632?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Fundamental of javascript",
    author: {
      name: "Dasteen",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aeae475007c0885aa991a3859f3870e6e23f1b6024a8cf2a3464469884d6840d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    },
    date: "Jan 10, 2022",
    readTime: "3 min",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a2280b8e7bd3b15ee3f58726bd458584599fe5d3dfa5214618f983c4b90e3a5f?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Grid CSS make your life easier",
    author: {
      name: "Dasteen",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aeae475007c0885aa991a3859f3870e6e23f1b6024a8cf2a3464469884d6840d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    },
    date: "Jan 10, 2022",
    readTime: "3 min",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/454c53984038c9c6b8540737d728d5a659745d8ae4550bb04dc357677adaf211?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Make animated light mode and dark mode toggle with CSS",
    author: {
      name: "Dasteen",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aeae475007c0885aa991a3859f3870e6e23f1b6024a8cf2a3464469884d6840d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    },
    date: "Jan 10, 2022",
    readTime: "3 min",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c98fe37a2917df6bbff9610446f630131c003b88d8a7915380e5e1f0e54e3334?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Make tic tac toe games with react JS",
    author: {
      name: "Dasteen",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aeae475007c0885aa991a3859f3870e6e23f1b6024a8cf2a3464469884d6840d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    },
    date: "Jan 10, 2022",
    readTime: "3 min",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cd23d12b21847c516fa296e4733578d0118bb52679e0ffaafd2217ecc37f9632?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Creating a responsive web design with Flexbox",
    author: {
      name: "Dasteen",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aeae475007c0885aa991a3859f3870e6e23f1b6024a8cf2a3464469884d6840d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    },
    date: "Jan 10, 2022",
    readTime: "3 min",
  },
];

export default function BlogsPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap gap-5 justify-between mt-9 lg:px-20 sm:px-4 w-full max-w-screen-2xl max-md:max-w-full">
        <div className="flex gap-2.5 items-center">
          <div className="self-stretch my-auto lg:text-lg sm:text-sm font-pjbold capitalize text-zinc-800">
            Featured Blogs
          </div>
          <div className="flex flex-col justify-center self-stretch py-0.5 my-auto lg:w-[35px] sm:w-[15px]">
            <div className="shrink-0 h-0.5 border-2 border-solid bg-zinc-800 border-zinc-800" />
          </div>
        </div>
        <div className="flex gap-3 my-auto lg:text-lg sm:text-sm font-pjbold text-right capitalize text-zinc-800 group relative">
          <div className="grow transition-all duration-300 group-hover:text-sky-500" tabIndex="0" role="button">
            See All Blogs
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64effff9585372e1f5c5de70cde683ea5a8cd07735d046955d0bd7d25e34e40f?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
            alt=""
            className="object-contain shrink-0 self-start mt-1 lg:w-5.5 sm:w-2 aspect-[0.43] transition-all duration-300 group-hover:ml-2"
          />
        </div>
      </div>
      <div className="flex lg:flex-wrap gap-5 justify-between mt-9 lg:px-16 sm:px-10 w-full max-w-screen-2xl max-md:max-w-full">
      <div className="flex lg:flex-row sm:flex-col gap-8 w-full">
        {blogData.map((blog, index) => (
          <div key={index} className="lg:flex-grow sm:flex flex-1 h-full transition-all duration-300 transform hover:scale-105 hover:shadow-5xl">
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
