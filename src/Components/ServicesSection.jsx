import React from 'react';
import imgA from '/Images/Laptop.png';
import imgB from '/Images/Mobile.png';
import imgC from '/Images/Soft_setting.png';
import imgD from '/Images/Graphics.png';
import imgE from '/Images/Game.png';

const ServicesSection = () => {
  const services = [
    { img: imgA, title: 'Website Development & Maintenance' },
    { img: imgB, title: 'Mobile App Development & Maintenance' },
    { img: imgC, title: 'Software Development' },
    { img: imgD, title: 'Graphics & UI/UX Designing' },
    { img: imgE, title: '2D/3D Game Development' },
  ];

  return (
    <section className="py-16 bg-white px-4" id="services bg-green-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-50 flex flex-col items-center"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
