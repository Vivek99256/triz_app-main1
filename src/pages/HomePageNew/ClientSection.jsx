import React from 'react';

const ClientSection = () => {
  const clients = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    src: `/home_images/clients/${index + 1}.png`,
    alt: `Client logo ${index + 1}`,
  }));

  const clientWidth = 150; // Width of each logo
  const containerWidth = clientWidth * clients.length; // Total width of all logos

  return (
    <div className='mt-40'>
    <div className="rounded-none">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col mr-0 w-full max-md:max-w-full">
            <div className="text-center text-4xl font-inter text-sky-500 max-md:max-w-full max-md:text-4xl">
              Empowering Students for Careers of Tomorrow
            </div>
            <div className="mt-0 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 items-center justify-center max-md:flex-col ml-20">
                <div className="flex flex-col w-[45%] mt-20 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-start self-stretch my-auto w-full text-xl font-medium text-black max-md:mt-10 max-md:max-w-full">
                    <div className="text-xl font-inter text-amber-500 max-md:max-w-full">
                      Your Students&rsquo; Journey to Success Begins Here
                    </div>
                    <div className="text-[15px] font-interregular mt-6 ml-2.5 max-md:mt-10 max-md:max-w-full">
                      Scholar Clone equips students with the tools they need to
                      navigate their career paths confidently. By integrating
                      advanced career counseling modules, the platform ensures
                      students are prepared for the dynamic demands of the
                      future workforce.
                    </div>
                    <div className="flex flex-wrap gap-4 mt-6 max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b91d2d259bc1c9cbc31d5debfe6114ad6e614c2d1e4ee24928e5c339896f746?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
                        className="object-contain shrink-0 w-8 aspect-square"
                      />
                      <div className="flex-auto font-intermedium text-lg self-start max-md:max-w-full">
                        RIASEC Profiling for Personalized Career Suggestions
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fe3fd4eb7da1df9261fd7e842e843bad6023f968f88bb6c2c63815f7adfad01?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
                        className="object-contain shrink-0 w-8 aspect-square"
                      />
                      <div className="flex-auto font-intermedium text-lg self-start max-md:max-w-full">
                        Detailed Career Pathways, Scholarships, and Resources
                      </div>
                    </div>
                    <div className="flex gap-4 mt-2">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/222476850d578ae7dd1bec8903b2e715825edc10add979f813604e5f70ec4c14?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
                        className="object-contain shrink-0 w-8 aspect-square"
                      />
                      <div className="flex-auto font-intermedium text-lg self-start">
                        Mock Interviews and CV Builders
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="/home_images/Group 1321314665.png"
                    className="object-contain grow w-full rounded-none max-md:mt-10 max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="flex overflow-hidden flex-col pt-2 pb-2 mt-40 mb-6 w-full text-3xl font-bold text-center text-amber-500 bg-blue-100 bg-opacity-80">
      <h2 className="self-center font-noto">Our valued clients</h2>
      <div className="mt-0 max-md:mt-10 relative w-full h-[150px]">
        {/* Image container with smooth scrolling animation */}
        <div
          className="flex absolute gap-40 top-0 left-0 h-full animate-scroll"
          style={{
            width: `${containerWidth * 2}px`, // Container width to accommodate both the original and duplicate sets
          }}
        >
          {/* First set of images */}
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex-shrink-0 w-[150px] h-full" // Maintain consistent width for logos
            >
              <img
                src={client.src}
                alt={client.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}

          {/* Duplicate the logos to create a continuous loop */}
          {clients.map((client) => (
            <div
              key={client.id + '-duplicate'}
              className="flex-shrink-0 w-[150px] h-full" // Same width as original logos
            >
              <img
                src={client.src}
                alt={client.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default ClientSection;
