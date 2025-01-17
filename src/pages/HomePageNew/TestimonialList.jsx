import React from "react";
import TestimonialCard from "./TestimonialCardNew";

const testimonials = [
  {
    quote: `"We align our success with the success of our customers which is why our offering transcends our software"`,
    author: "Jackline Fare",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bdf20214f8476a3bc80a6c0810190d847058a449f1e7009a14e00f52db6e190?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    ratingImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/93b2b4ce7d0590a7504a3bc2e3c85b655b2e6cb8456deda8ee8b8c2c94afe81d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8ffc7676fe9fce198f93f396cbfbbd6a55d54d36fcc88fa092e03bc0f8b966b?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
  },
  {
    quote: `"The platform has transformed how we handle our business operations and customer relationships"`,
    author: "Michael Chen",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bdf20214f8476a3bc80a6c0810190d847058a449f1e7009a14e00f52db6e190?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    ratingImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/93b2b4ce7d0590a7504a3bc2e3c85b655b2e6cb8456deda8ee8b8c2c94afe81d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8ffc7676fe9fce198f93f396cbfbbd6a55d54d36fcc88fa092e03bc0f8b966b?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
  },
  {
    quote: `"Outstanding support team and innovative solutions that keep us ahead in the market"`,
    author: "Sarah Johnson",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bdf20214f8476a3bc80a6c0810190d847058a449f1e7009a14e00f52db6e190?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    ratingImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/93b2b4ce7d0590a7504a3bc2e3c85b655b2e6cb8456deda8ee8b8c2c94afe81d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8ffc7676fe9fce198f93f396cbfbbd6a55d54d36fcc88fa092e03bc0f8b966b?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
  }
];

export default function TestimonialList() {
  const testimonialWidth = 660; // Width of each testimonial card
  const containerWidth = testimonialWidth * testimonials.length; // Total width of all testimonials

  return (
    <section className="flex flex-col w-full">
      <div className="mt-0 max-md:mt-10 relative w-full">
        {/* Testimonial container with smooth scrolling animation */}
        <div
          className="flex relative gap-5 top-0 left-0 h-full animate-scroll"
          style={{
            width: `${containerWidth * 2}px`, // Container width to accommodate both the original and duplicate sets
          }}
        >
          {/* First set of testimonials */}
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.author + index} className="">
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                authorImage={testimonial.authorImage}
                ratingImage={testimonial.ratingImage}
                companyLogo={testimonial.companyLogo}
              />
            </div>
          ))}

          {/* Duplicate the testimonials to create a continuous loop */}
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author + "-duplicate" + index}
              className=""
            >
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                authorImage={testimonial.authorImage}
                ratingImage={testimonial.ratingImage}
                companyLogo={testimonial.companyLogo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
