import React, { useState } from 'react';

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className=" py-25 px-4 min-h-[80vh]" id="contact">
      <div className="max-w-7xl mx-auto">
    
        <div className="flex flex-col md:flex-row items-start gap-10"> 
          <div
            className="relative w-full md:w-1/2 flex justify-center items-start"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="/Images/envelop_front.webp"
              alt="Envelope"
              className="w-full h-auto rounded-xl shadow-xl"
            />
            <form
              className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-in-out ${
                isHovered ? 'top-[-50%]' : 'top-[-20%]'
              } w-full px-4`}
            >
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
                <p className="text-gray-800 mb-4 text-sm sm:text-base">
                  <strong>Dear Cogent Web Services...</strong>
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  My name is{' '}
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="border-b border-gray-400 px-2 outline-none bg-transparent w-1/2"
                    required
                  />{' '}
                  and my contact no. is{' '}
                  <input
                    type="text"
                    placeholder="+91"
                    className="border-b border-gray-400 px-2 outline-none bg-transparent w-12"
                    required
                  />{' '}
                  <input
                    type="tel"
                    placeholder="9876543210"
                    className="border-b border-gray-400 px-2 outline-none bg-transparent w-1/3"
                    required
                  />{' '}
                  I would like to:{' '}
                  <textarea
                    className="border-b border-gray-400 px-2 outline-none bg-transparent w-full mt-2 resize-none"
                    rows="2"
                    placeholder="Start a website project, ask for quotation, etc."
                    required
                  ></textarea>
                </p>
                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
 
          <div className="w-full md:w-1/2 flex flex-col gap-12 mt-6 md:mt-0">
            <h3 className="text-4xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-4">
              Contact Us
            </h3>
            <p className="text-gray-600 text-lg">
              Let's Start Our First Project Together, Call Now.
            </p>

            <div className="flex flex-col sm:flex-row gap-8">
              <a
                href="tel:+911234567890"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow transition w-max"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md shadow transition w-max"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
