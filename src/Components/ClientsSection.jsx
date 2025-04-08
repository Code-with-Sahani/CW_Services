import React, { useEffect, useRef } from 'react';

const ClientsSection = () => {
  const clients = [
    '/Images/Cleint1.jpg',
    '/Images/Cleint3.jpg',
    '/Images/Cleint4.png',
    '/Images/Cleint5.jpg',
    '/Images/Cleint6.jpg',
    '/Images/Cleint7.jpg',
    '/Images/Cleint8.jpg',
    '/Images/Cleint9.jpg'
  ];

  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += 1;
          if (
            scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
            scrollContainer.scrollWidth
          ) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 20);
    };

    startAutoScroll();

    const handleMouseEnter = () => clearInterval(intervalRef.current);
    const handleMouseLeave = () => startAutoScroll();

    const handleMouseDown = (e) => {
      isDragging.current = true;
      scrollContainer.classList.add('scrolling');
      startX.current = e.pageX - scrollContainer.offsetLeft;
      scrollLeft.current = scrollContainer.scrollLeft;
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX.current) * 2;
      scrollContainer.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      scrollContainer.classList.remove('scrolling');
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('mouseenter', handleMouseEnter);
      scrollContainer.addEventListener('mouseleave', handleMouseLeave);
      scrollContainer.addEventListener('mousedown', handleMouseDown);
      scrollContainer.addEventListener('mousemove', handleMouseMove);
      scrollContainer.addEventListener('mouseup', handleMouseUp);
      scrollContainer.addEventListener('mouseleave', handleMouseUp);
    }

    return () => {
      clearInterval(intervalRef.current);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('mousedown', handleMouseDown);
        scrollContainer.removeEventListener('mousemove', handleMouseMove);
        scrollContainer.removeEventListener('mouseup', handleMouseUp);
        scrollContainer.removeEventListener('mouseleave', handleMouseUp);
      }
    };
  }, []);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 pl-4 border-l-8 border-blue-500 inline-block">
            Our Clients
          </h2>
        </div> 
        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap scroll-smooth cursor-grab scrollbar-hide select-none"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex gap-8 w-max">
            {[...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className=" w-[260px] h-[260px] bg-white border-2 border-black shadow-md rounded-xl flex items-center justify-center p-4"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-[200px] w-[200px] object-contain pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
 
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrolling {
          cursor: grabbing;
          user-select: none;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
