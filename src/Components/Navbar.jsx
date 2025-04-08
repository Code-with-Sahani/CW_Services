import React from 'react';
import img from '/Images/cws_logo.png';

const Navbar = () => {
    return (
        <nav className="bg-transparent w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                <div>
                    <img src={img} alt="CW Services Logo" className="h-10 w-auto" />
                </div>
                <ul className="hidden md:flex gap-12 text-black text-xl font-medium">
                    <li><a href="#home" className="hover:text-blue-400 transition duration-300">Home</a></li>
                    <li><a href="#about-us" className="hover:text-blue-400 transition duration-300">Mobile App Development</a></li>
                    <li><a href="#services" className="hover:text-blue-400 transition duration-300">Website Development</a></li>
                    <li><a href="#contact" className="hover:text-blue-400 transition duration-300">Logo Design</a></li>
                </ul>
                <div className="md:hidden">
                    <button className="text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
