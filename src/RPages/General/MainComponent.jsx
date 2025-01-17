import * as React from "react";
import Content1 from "./blogs/BlogsPage";
import Content2 from "./blogs1/BlogsPage";
import Content3 from "./blogs2/BlogsPage";
import Content4 from "./blogs3/BlogsPage";
import Header from "../../pages/Header/NavBar";
import Footer from "../../pages/Footer/Footer";
import NavigationBar from "./NavigationBar";
export default function HeroSection() {
  const content1Ref = React.useRef(null);
  const content2Ref = React.useRef(null);
  const content3Ref = React.useRef(null);
  const content4Ref = React.useRef(null);
  const [showScrollTopBtn, setShowScrollTopBtn] = React.useState(false);
  const scrollToSection = (section) => {
    switch (section) {
      case "blogs":
        content1Ref.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "case-studies":
        content2Ref.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "faqs":
        content3Ref.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "newsletters":
        content4Ref.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTopBtn(true); 
      } else {
        setShowScrollTopBtn(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col w-full max-w-full mx-auto overflow-x-hidden">
    <main className='text-xl'>
    <Header />
    </main>
    <div className="flex overflow-hidden relative flex-col items-end w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:max-w-full"style={{
        backgroundImage: 'url("Resources_Images/Group 395 (1).png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
      }}
      >
      <div className="flex overflow-hidden flex-col lg:pt-36 lg:pr-4 sm:pt-32 max-w-full h-full bg-white bg-opacity-10 text-white bg-opacity-0 lg:w-[600px] sm:w-full max-md:px-5 backdrop-blur-md max-md:pb-24">
        <h1 className="text-4xl font-intersemibold text-center max-md:max-w-full max-md:text-4xl">
          Your Partner in Innovation And Excellence
        </h1>
        <button 
      className="self-center px-5 py-2 mt-12 mb-0 text-lg font-inter bg-sky-500 rounded-3xl max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
      onClick={() => {}}
      tabIndex={0}
      aria-label="Book Your Demo Now"
    >
      Book Your Demo Now!
    </button>
      </div>
    </div>
    <NavigationBar onNavigate={scrollToSection} />
    <div ref={content1Ref}>
      <Content1 />
    </div>
    <div ref={content2Ref}>
      <Content2 />
    </div>
    <div ref={content3Ref}>
      <Content3 />
    </div>
    <div ref={content4Ref}>
      <Content4 />
    </div>
    <Footer />
    {showScrollTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-32 right-10 mb-5 px-1 mt-8 bg-white rounded-full h-[40px] shadow-[0px_0px_15px_rgba(0,0,0,0.3)] w-[40px] max-md:mt-6 transition-all duration-300 hover:bg-sky-400"
          aria-label="Scroll to Top"
        >
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/be76f4743b073701bfb29abc287c6251dd378a6500dcd2427b7e508322a0e015?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3" alt="" className="object-contain w-full h-full aspect-[0.75]" />
        </button>
      )}
    </div>
  );
}