import * as React from "react";

export function SearchBar() {
  return (
    <form className="flex gap-2 mb-2 self-start max-md:max-w-full" role="search">
      <div className="flex flex-col lg:ml-10 text-base text-gray-500 basis-0 w-fit">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full">
            <div className="flex overflow-hidden gap-2 items-center px-4 py-1 w-full bg-white rounded-lg border border-black border-solid shadow-sm">
              <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto w-full basis-0 min-w-[240px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce8f75f9fac46ea9c19d721687c414b5591f8f309e14174308b5cec679370a87?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
                  alt="Search icon"
                  className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                />
                <label htmlFor="searchInput" className="sr-only">Search</label>
                <input
                  id="searchInput"
                  type="search"
                  className="flex-1 shrink self-stretch my-auto basis-0"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="gap-2.5 self-stretch px-5 py-1 mb-2 my-auto text-sm font-bold text-white bg-sky-500 rounded-3xl">
        Search
      </button>
    </form>
  );
}