import React from 'react';
import Newone from './NewOne';
import Header from '../Header/NavBar';
import MainContent from './MainContent';
import Client from './ClientSection';
import Contact from '../Contact/ContactCard';
import Scroll from '../ScrollToTop/Scroll';
import Footer from '../Footer/Footer';
import TestimonialSection from './TestimonialSection';
import BlogSection from './BlogCardsSection';
function UnlockPotential() {
  return (
    <div className="flex flex-col w-full max-w-[1920px] mx-auto overflow-x-hidden">
      <main className="text-xl">
      <Header />
      </main>
      <Newone />
      <TestimonialSection />
      <Client />
      {/* <BlogSection /> */}
      {/* Contact Us Section */}
      <div className="contact-us w-full mt-10">
        <h1 className="text-4xl font-bold font-noto text-center text-sky-500 mb-12">
        Contact Us
      </h1> 
        <Contact />
      </div>
      <Scroll />
      <Footer />
    </div>
  );
}

export default UnlockPotential;