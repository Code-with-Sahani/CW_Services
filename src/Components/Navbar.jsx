import React, { useState } from 'react';
import img from '/Images/cws_logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white w-full shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <div>
                    <img src={img} alt="CW Services Logo" className="h-10 w-auto" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 text-black text-base font-medium">
                    <li><a href="#home" className="hover:text-blue-500 transition duration-300">Home</a></li>
                    <li><a href="#about-us" className="hover:text-blue-500 transition duration-300">Mobile App Development</a></li>
                    <li><a href="#services" className="hover:text-blue-500 transition duration-300">Website Development</a></li>
                    <li><a href="#contact" className="hover:text-blue-500 transition duration-300">Logo Design</a></li>
                </ul>

                {/* Mobile Toggle Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-white px-6 pb-4 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col gap-4 text-black text-base font-medium">
                    <li><a href="#home" className="hover:text-blue-500 transition duration-300">Home</a></li>
                    <li><a href="#about-us" className="hover:text-blue-500 transition duration-300">Mobile App Development</a></li>
                    <li><a href="#services" className="hover:text-blue-500 transition duration-300">Website Development</a></li>
                    <li><a href="#contact" className="hover:text-blue-500 transition duration-300">Logo Design</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
