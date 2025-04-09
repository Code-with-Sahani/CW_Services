import React, { useState } from 'react';
import img from '/Images/cws_logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-gradient-to-r from-blue-100 via-white to-blue-100 w-full shadow-md z-50 relative">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <div>
                        <img src={img} alt="CW Services Logo" className="h-10 w-auto" />
                    </div>

                    <ul className="hidden md:flex gap-10 text-gray-800 text-base font-medium">
                        <li><a href="#home" className="hover:text-blue-600 transition duration-300">Home</a></li>
                        <li><a href="#about-us" className="hover:text-blue-600 transition duration-300">Mobile App Development</a></li>
                        <li><a href="#services" className="hover:text-blue-600 transition duration-300">Website Development</a></li>
                        <li><a href="#contact" className="hover:text-blue-600 transition duration-300">Logo Design</a></li>
                    </ul>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
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
            </nav>

            <div className={`absolute top-[64px] left-0 w-full bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 z-40 transition-all duration-300 ease-in-out overflow-hidden md:hidden ${
                isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <ul className="flex flex-col gap-6 text-gray-900 font-semibold p-6">
                    <li><a href="#home" onClick={toggleMenu} className="hover:text-blue-700 transition duration-300">Home</a></li>
                    <li><a href="#about-us" onClick={toggleMenu} className="hover:text-blue-700 transition duration-300">Mobile App Development</a></li>
                    <li><a href="#services" onClick={toggleMenu} className="hover:text-blue-700 transition duration-300">Website Development</a></li>
                    <li><a href="#contact" onClick={toggleMenu} className="hover:text-blue-700 transition duration-300">Logo Design</a></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
