import * as React from "react";

export default function MyComponent() {
  return (
    <>
    <div className="pt-2 pb-3.5 rounded-none mt-20">
      <div className="flex gap-5 max-md:flex-col ">
        <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col items-start max-w-full rounded-full w-[553px] max-md:px-5 max-md:pb-24">
              <img
                loading="lazy"
                src="/home_images/Group (1).png"
                className="object-contain z-10 mt-0 mb-0 max-w-full w-full max-md:mb-2.5"
              />
            </div>
        </div>
        <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-7 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col pr-1 pl-5 w-full text-xl text-black max-md:max-w-full">
              <div className="text-xl text-start text-amber-500 font-inter max-md:max-w-full">
                Empower Education on the Go with Scholar Clone&rsquo;s Mobile Apps
              </div>
              <div className="self-start mt-2 text-lg font-intermedium text-center max-md:max-w-full">
                Anytime, Anywhere Access for Parents, Students, and Admins
              </div>
              <div className="mt-5 mr-20 text-sm font-interegular max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                Gone are the days when education was confined to classrooms or
                office hours. With Scholar Clone’s feature-rich mobile
                applications, parents, students, and administrators can stay
                connected and informed anytime, anywhere. From tracking progress
                to managing critical operations, our apps ensure that every
                stakeholder in the school ecosystem is just a tap away from what
                matters most. Designed for ease of use and functionality, these
                apps bring convenience and efficiency to your fingertips.
              </div>
              <div className="flex gap-10 mt-5 max-w-full text-white w-[382px] max-md:mt-10">
                <button className="text-sm text-center gap-2.5 font-inter px-2 py-1 bg-sky-500 rounded-3xl transition-all duration-300 transform hover:scale-105">
                  Download on Android
                </button>
                <button className="gap-2.5 text-sm text-center font-inter px-2 py-1 bg-sky-500 rounded-3xl transition-all duration-300 transform hover:scale-105">
                  Get it on iOS
                </button>
              </div>
            </div>
            <div className="mt-12 mr-10 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="overflow-hidden grow px-5 pt-8 pb-6 text-xs text-black rounded-xl shadow-[0px_5px_8px_rgba(0,0,0,0.25)] max-md:mt-8" style={{
                    background: 'linear-gradient(518deg, #ffffff 0%, rgba(153, 200, 244, 1) 100%)',
                  }}>
                    <span className="text-sm font-inter">For Parents:</span>
                    <ul className="list-disc pl-5 font-interregular">
                      <li>
                        Real-time updates on attendance, grades, and
                        assignments.
                      </li>
                      <li>
                        Notifications for school events, fee dues, and
                        performance updates.
                      </li>
                      <li>
                        Seamless communication with teachers and school
                        administrators.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="overflow-hidden grow px-5 pt-8 pb-6 text-xs text-black rounded-xl shadow-[0px_5px_8px_rgba(0,0,0,0.25)] max-md:mt-8" style={{
                    background: 'linear-gradient(518deg, #ffffff 0%, rgba(153, 200, 244, 1) 100%)',
                  }}>
                    <span className="text-sm font-inter">For Students:</span>
                    <ul className="list-disc pl-5 font-interregular">
                      <li>
                        Access to assignments, lesson materials, and learning
                        games.
                      </li>
                      <li>
                        Interactive features for tracking their own academic
                        progress.
                      </li>
                      <li>
                        Game-based learning tools aligned with CBSE curricula.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col ml-5  w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="overflow-hidden grow px-5 pt-8 pb-6 text-xs text-black rounded-xl shadow-[0px_5px_8px_rgba(0,0,0,0.25)] max-md:mt-8" style={{
                    background: 'linear-gradient(518deg, #ffffff 0%, rgba(153, 200, 244, 1) 100%)',
                  }}>
                    <span className="text-sm font-inter">
                      For Admins and Staff:
                    </span>
                    <ul className="list-disc pl-5 font-interregular">
                      <li>
                        Effortless management of payroll, HR, and attendance.
                      </li>
                      <li>
                        Real-time updates on school finances and operations.
                      </li>
                      <li>
                        Communication tools for smooth collaboration between
                        staff and departments.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 className="mt-40 lg:px-[100px] mb-20 text-center font-inter lg:text-4xl sm:text-2xl" style={{
      color:'rgba(17, 134, 254, 1)'
     }}>
     Empowering Learning and Growth Across Education and Enterprise
     </h1>
    <div className="rounded-3xl">
  <div className="flex gap-5 max-md:flex-col mx-20">
    {/* Each card will have the same height */}
    {[
      {
        title: "Scalable Solutions for Organizations of Any Size",
        description: "Scholar Clone adapts to the needs of schools, universities, and corporate training programs, seamlessly growing with expanding enrollments, staff, and operational demands."
      },
      {
        title: "AI-Driven Personalization",
        description: "With AI-powered learning paths tailored to individual needs, Scholar Clone enhances learning outcomes for students and professionals alike."
      },
      {
        title: "Unified Operations, Simplified Management",
        description: "A single platform connects academics, HR, and administration, streamlining workflows and reducing costs for education and enterprise."
      },
      {
        title: "Real-Time Insights for Better Decision-Making",
        description: "Scholar Clone provides data-driven analytics and performance tracking, enabling educators and organizations to make informed decisions and improve outcomes."
      }
    ].map((item, index) => (
      <div key={index} className="flex flex-col w-3/12 max-md:w-full">
        <div className="flex flex-col px-8 pt-20 pb-10 rounded-3xl shadow-[4px_4px_4px_rgba(0,0,0,0.25)] h-full"style={{
                    background: 'linear-gradient(180deg, #ffffff 0%, rgba(245, 245, 245, 1) 41%, rgba(153, 200, 244, 1) 100%)',
                  }}>
          <div className="self-start text-sm font-bold text-neutral-800">
            {item.title}
          </div>
          <div className="mt-8 text-xs text-black">
            {item.description}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  </>
  );
}