import React from 'react';

const TechnologiSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black">
       
      <div className="relative w-full">
        <img
          src="/Images/technologies.gif"
          alt="Technologies Background"
          className="w-full h-auto"
        />
      </div>
 
      <div className="absolute top-10 left-6 z-10">
        <div className="border-l-4 border-blue-500 pl-4">
          <h2 className="text-3xl md:text-5xl font-bold text-black drop-shadow-md">
            Our Chest of Technologies
          </h2>
        </div>
      </div>

    </section>
  );
};

export default TechnologiSection;
