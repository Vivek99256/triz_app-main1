import * as React from "react";

export function PartnerCard({
  category,
  title,
  description,
  imageSrc,
  iconSrc,
}) {
  return (
    <div className="flex flex-col px-6 py-7 w-96 bg-white rounded-2xl shadow-lg min-h-[500px] min-w-[240px] max-md:px-5">
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${title} illustration`}
        className="object-contain w-full rounded-lg aspect-[1.4]"
      />
      <div className="flex flex-col flex-1 justify-between mt-8 w-full">
        <div className="flex flex-col w-full">
          <div className="text-sm font-semibold leading-none text-violet-700">
            {category}
          </div>
          <div className="flex flex-col mt-3 w-full">
            <div className="flex gap-4 items-start w-full">
              <div className="flex-1 shrink text-2xl font-semibold leading-none text-gray-900 basis-0">
                {title}
              </div>
              <div className="flex flex-col pt-1 w-6">
                <img
                  loading="lazy"
                  src={iconSrc}
                  alt=""
                  className="object-contain w-6 aspect-square"
                />
              </div>
            </div>
            <div className="mt-3 text-base leading-6 text-gray-500">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
