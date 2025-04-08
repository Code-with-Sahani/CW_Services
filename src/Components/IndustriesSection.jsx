import React from 'react';
import cow_house_app from '/Images/cow_house_app.png';
import cow_house from '/Images/cow_house.png';

import food_delivery_app from '/Images/food_delivery_app.png';
import food_delivery from '/Images/food_delivery.png';

import taxi_app from '/Images/taxi_app.png';
import taxi from '/Images/taxi.png';

const IndustriesSection = () => {
  const industryData = [
    {
      title: 'COW HOUSE',
      desc: 'CWS is the leading mobile app development company that offers custom app development services to clients globally. Our aim is to revolutionize the operations of farmers, commercial cattle operators, helping them completely eliminate paper-based processes.',
      caseStudy: 'View Case Study',
      bgImg: cow_house,
      fgImg: cow_house_app,
      reverse: false
    },
    {
      title: 'FOOD DELIVERY',
      desc: 'CW Services builds seamless and scalable food delivery applications with real-time tracking, order management, and secure payments — empowering restaurants and food chains to deliver customer satisfaction instantly.',
      caseStudy: 'View Case Study',
      bgImg: food_delivery,
      fgImg: food_delivery_app,
      reverse: true
    },
    {
      title: 'TAXI BOOKING',
      desc: 'We provide innovative taxi app development solutions that streamline the process of booking rides, managing drivers, real-time tracking, and ensuring seamless customer experience — all in one app.',
      caseStudy: 'View Case Study',
      bgImg: taxi,
      fgImg: taxi_app,
      reverse: false
    }
  ];

  return (
    <section className="py-16 bg-white px-4 space-y-24">
      {industryData.map((industry, index) => (
        <div
          key={index}
          className={`max-w-7xl mx-auto flex flex-col ${industry.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 animate-fade-up transition-opacity duration-1000 ease-out`}
        >
          {/* Text Card */}
          <div className="md:w-1/2">
            <div className="bg-[#f6f9ff] p-8 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                {industry.title}
              </h2>
              <p className="text-gray-600 text-lg mb-4">{industry.desc}</p>
              <p className="text-blue-600 text-lg font-semibold underline cursor-pointer">
                {industry.caseStudy}
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="md:w-1/2 relative flex justify-center">
            <img
              src={industry.bgImg}
              alt={`${industry.title} Background`}
              className="w-64 md:w-80 rounded-xl shadow-xl z-0 transform hover:scale-105 transition-transform duration-500"
            />
            <img
              src={industry.fgImg}
              alt={`${industry.title} App`}
              className="w-40 md:w-52 absolute top-6 right-6 md:right-10 z-10 rounded-xl shadow-2xl border-4 border-white transform hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default IndustriesSection;
