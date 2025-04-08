import React from 'react';
import img3 from '/Images/workflow.svg';
import img4 from '/Images/strategy.gif';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            We Provide Quality Services
          </h2>
          <p className="text-gray-600 text-lg">
            CW Services is committed to delivering top-notch business services including BPO, IT support, manpower outsourcing, and more. We help companies improve efficiency and reduce costs.
          </p>
          <p className="text-gray-600 text-lg">
            Our experienced team ensures quality, reliability, and excellence in every project we handle. Partner with us for the best results.
          </p>
          <img
            src={img3}
            alt="Workflow Illustration"
            className="rounded-xl shadow-lg "
          />
        </div>

        <div className="md:w-1/2">
          <img
            src={img4}
            alt="Strategy Gif"
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
