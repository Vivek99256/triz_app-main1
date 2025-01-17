import * as React from "react";

export default function Benefits() {
  return (
    <div className="flex flex-col items-center w-full"style={{
      backgroundImage: 'url("Design_three_images/Group 1321314646.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      height: '75vh',
    }}
    >
      {/* Title and Image */}
      <div className="flex flex-wrap max-w-full w-full items-center justify-center mt-7">
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a01d2ff03122fcb4356ad5aa57d62ccd3614043e31b1884e14d1b249ce38cc8?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
          className="object-contain shrink-0 w-40 self-start max-w-full aspect-[0.87]"
        /> */}
        <div className="my-auto text-center justify-center text-3xl font-inter"style={{
            color:'rgba(28, 81, 161, 1)'
    }}>
          Benefits Your School Will Unlock
        </div>
      </div>

      {/* Benefits Section */}
      <div className="flex justify-center items-center mt-20 w-full max-w-screen-xl">
        <div className="flex flex-wrap gap-5 justify-center">
          {/* First Benefit */}
          <div className="flex flex-col w-2/12 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-start text-zinc-900 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac8b68ae8abaccf7237e848803058bff6e6ef2516e1a468a260b49f924708d4a?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
                className="object-contain aspect-[0.94] w-[31px]"
              />
              <div className="mt-4 text-lg font-inter leading-none">Save Time</div>
              <div className="self-stretch mt-4 text-sm leading-7 opacity-70">
                Automate repetitive tasks so staff can focus on higher priorities.
              </div>
            </div>
          </div>

          {/* Second Benefit */}
          <div className="flex flex-col w-3/12 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-start text-zinc-900 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8b25abdb6a05b130ca8fe2212057b446dbe4738c1db769c2cf80aaf22b6a585?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
                className="object-contain aspect-square w-[35px]"
              />
              <div className="mt-4 text-lg font-inter leading-none">Increased Security</div>
              <div className="self-stretch mt-4 text-sm leading-7 opacity-70">
                Monitor all campus entries and exits in real time.
              </div>
            </div>
          </div>

          {/* Third Benefit */}
          <div className="flex flex-col w-3/12 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-start text-zinc-900 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba69191c2e7288386e587eeaab79d3a1d24a07cc58d30638ec5fbc815f132c6c?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
                className="object-contain aspect-[0.9] w-[27px]"
              />
              <div className="mt-4 text-lg font-inter leading-none">Organized Data</div>
              <div className="self-stretch mt-4 text-sm leading-7 opacity-70">
                Consolidate visitor, appointment, and inquiry records in one easily accessible platform.
              </div>
            </div>
          </div>

          {/* Fourth Benefit */}
          <div className="flex flex-col w-3/12 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-start text-zinc-900 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9dd92f847233d9ee8ceccb6a2e0441767490b48ffd28f79a15b3af04c5a967d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
                className="object-contain aspect-[1.03] w-[31px]"
              />
              <div className="mt-4 text-lg font-inter leading-none">Streamlined Communication</div>
              <div className="mt-4 text-sm  opacity-70 leading-7 w-[350px]">
                Instantly notify staff about updates or schedule changes
              </div>
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/51cc2cfbbc5bc8277ca8533c79b52b50ff4b337d26817c779f1e6e082cbcba51?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
                className="object-contain self-end mt-16 max-w-full aspect-[1.19] w-[220px] max-md:mt-10"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
