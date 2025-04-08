import React from 'react';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-[url('/Images/hero_1.jpg')]"
    >
    <Navbar/>
      <div className="absolute inset-0 bg-opacity-60"></div>
 
      <div className="relative z-10 flex flex-col items-start justify-center gap-4 h-full text-center px-4 text-black">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight max-w-3xl">
          Trust in Your Imagination
        </h1>
        <p className="mb-8 text-lg md:text-xl max-w-2xl">
          Our company provides best-in-class support, IT & staffing solutions.
        </p>
        <a
          href="tel:+917080855524"
          className="relative inline-block px-8 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition duration-300 shadow-lg"
        >
          Call Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
