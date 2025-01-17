import React from "react";

function ImageSection({ imageSrc }) {
  return (
    <section className="mt-20 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt="Integration service illustration"
        className="object-contain w-full  aspect-[3]"
      />
    </section>
  );
}

export default ImageSection;