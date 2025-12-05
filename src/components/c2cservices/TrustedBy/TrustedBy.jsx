import React, { useState, useEffect } from "react";
import college1 from "../../../assets/Images/Colleges/1 (1).jpg";
import college2 from "../../../assets/Images/Colleges/1 (2).jpg";
import college3 from "../../../assets/Images/Colleges/1 (3).jpg";
import college4 from "../../../assets/Images/Colleges/1 (4).jpg";
import college5 from "../../../assets/Images/Colleges/1 (5).jpg";
import college6 from "../../../assets/Images/Colleges/1 (6).jpg";
import college7 from "../../../assets/Images/Colleges/1 (7).jpg";
import college8 from "../../../assets/Images/Colleges/1 (8).jpg";
import college9 from "../../../assets/Images/Colleges/1 (9).jpg";

const CollegeClients = () => {
  const clients = [
    { id: 1, name: 'Educational Partner 1', src: college1 },
    { id: 2, name: 'Educational Partner 2', src: college2 },
    { id: 3, name: 'Educational Partner 3', src: college3 },
    { id: 4, name: 'Educational Partner 4', src: college4 },
    { id: 5, name: 'Educational Partner 5', src: college5 },
    { id: 6, name: 'Educational Partner 6', src: college6 },
    { id: 7, name: 'Educational Partner 7', src: college7 },
    { id: 8, name: 'Educational Partner 8', src: college8 },
    { id: 9, name: 'Educational Partner 9', src: college9 },
  ];
  const [centerIndex, setCenterIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % clients.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [clients.length]);

  const goToSlide = (index) => {
    setCenterIndex(index);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1a365d]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal-400 opacity-5"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-purple-500 opacity-5"></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-[0.03]"
          style={{
            backgroundSize: "20px 20px",
            backgroundImage:
              "linear-gradient(to right, gray 1px, transparent 1px), linear-gradient(to bottom, gray 1px, transparent 1px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-4">
            Trusted By
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            Our Educational Partners
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto"></div>
          <p className="mt-6 text-blue-100/80 max-w-2xl mx-auto">
            We're proud to collaborate with leading educational institutions that trust our services to empower their digital presence.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="mx-auto text-center">
            <div className="flex justify-center items-center space-x-4 overflow-hidden">
              {clients.map((client, index) => {
                const isCenter = index === centerIndex;
                const isVisible = Math.abs(index - centerIndex) <= 2 || 
                                (centerIndex <= 1 && index >= clients.length - 2) ||
                                (centerIndex >= clients.length - 2 && index <= 1);
                
                return (
                  <div 
                    key={client.id} 
                    className={`transition-all duration-700 cursor-pointer ${
                      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    } ${
                      isCenter ? 'scale-110 z-10' : 'scale-95'
                    }`}
                    onClick={() => goToSlide(index)}
                  >
                    <div
                      className={`relative overflow-hidden rounded-xl transition-all duration-700 ${
                        isCenter
                          ? "bg-gradient-to-b from-blue-800/30 to-teal-800/20 shadow-lg shadow-teal-900/20"
                          : "bg-blue-900/20"
                      }`}
                      style={{
                        width: "150px",
                        height: "150px",
                      }}
                    >
                      <div
                        className={`flex flex-col items-center transition-all duration-700 ${
                          isCenter ? "scale-100 opacity-100" : "scale-90 opacity-70"
                        }`}
                      >
                        <div
                          className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-800/50 to-teal-700/30 p-[3px]"
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div className="w-full h-full overflow-hidden flex items-center justify-center bg-blue-950 rounded-lg">
                            <img
                              src={client.src}
                              alt={client.name}
                              className={`h-full w-full object-cover transition-all duration-700 ${
                                isCenter ? "scale-110" : "scale-100"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-1.5">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === centerIndex ? "bg-teal-400 w-6" : "bg-blue-600/40 hover:bg-blue-500/60 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeClients;