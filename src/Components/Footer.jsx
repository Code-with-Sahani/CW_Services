import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#111827] text-white pt-12 pb-6 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Links Column */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">Quick Links</h2>
                    <div className="flex flex-col gap-2 text-base">
                        {[
                            { label: 'Home', href: '#home' },
                            { label: 'About Us', href: '#about-us' },
                            { label: 'Graphic Designing', href: '#graphic-designing' },
                            { label: 'Mobile Application Development', href: '#mobile-app-development' },
                            { label: 'Website Development', href: '#website-development' },
                            { label: 'Web To App Converter', href: '#web-to-app' },
                            { label: 'Game Development', href: '#game-development' },
                            { label: 'UI Design', href: '#ui-design' },
                            { label: 'Poster Design', href: '#poster-design' },
                            { label: 'Logo Design', href: '#logo-design' },
                            { label: 'Custom CRM / ERP', href: '#custom-crm' },
                            { label: 'Maintenance Services', href: '#maintenance' },
                            { label: 'Contact Us', href: '#contact' },
                            { label: 'Payments', href: '#payments' }
                        ].map((item, idx) => (
                            <a key={idx} href={item.href} className="hover:text-blue-400 transition duration-300">
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Address Column */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">Our Address</h2>
                    <p className="text-base leading-7">
                        Cogent Web Services <br />
                        Assotech Business Cresterra, <br />
                        Sector-135, Noida, Uttar Pradesh, India, 201304
                    </p>

                    <div className="mt-4 text-base">
                        <p className="mb-2">
                            📞: <a href="tel:+917080855524" className="hover:text-blue-400 transition duration-300">+91-7080855524</a>
                        </p>
                        <p>
                            💬: <a href="mailto:inquiry@cwservices.co.in" className="hover:text-blue-400 transition duration-300">inquiry@cwservices.co.in</a>
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex gap-4 flex-wrap">
                        <a href="tel:+917080855524" className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition duration-300 ease-out border border-blue-500 rounded-xl shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out blur-sm"></span>
                            <span className="relative z-10 text-white">Call Now</span>
                        </a>
                        <a href="mailto:inquiry@cwservices.co.in" className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition duration-300 ease-out border border-blue-500 rounded-xl shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out blur-sm"></span>
                            <span className="relative z-10 text-white">Mail Now</span>
                        </a>
                    </div>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">Follow Us</h2>
                    <div className="flex gap-4">
                        <a href="#"><img src="/Images/Linkedin@3x.png" alt="LinkedIn" className="h-6 hover:scale-110 transition duration-300" /></a>
                        <a href="#"><img src="/Images/behance.png" alt="Behance" className="h-6 hover:scale-110 transition duration-300" /></a>
                        <a href="#"><img src="/Images/facebook.png" alt="Facebook" className="h-6 hover:scale-110 transition duration-300" /></a>
                        <a href="#"><img src="/Images/Icon awesome-instagram@3x.png" alt="Instagram" className="h-6 hover:scale-110 transition duration-300" /></a>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400">
                © 2025 Cogent Web Services. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
