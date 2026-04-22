import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative min-h-[calc(100svh-90px)] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundImage: `url('/hero-vans.jpeg')` }}
      role="banner"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto w-full py-12 md:py-20 lg:py-28 text-white">
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide leading-tight drop-shadow-2xl">
            Killeen Air Duct Cleaning &amp; Vent Cleaning Services
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl font-semibold opacity-95 drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
            Professional Air Duct &amp; Vent Cleaning in Killeen, Texas
          </p>

          <div className="bg-yellow-400/90 text-gray-900 rounded-2xl p-6 md:p-8 max-w-md mx-auto shadow-2xl drop-shadow-2xl border-4 border-yellow-300/50">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1">
              Rated 4.9⭐ out of 5 Stars
            </h2>
            <p className="text-lg md:text-xl font-medium opacity-90">
              Based On 30+ Customer Reviews
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 max-w-2xl mx-auto pt-4">
            <a 
              href="tel:+12549983484" 
              className="bg-accent text-white text-lg md:text-xl font-bold py-5 px-8 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 uppercase tracking-wide flex-1 text-center border-2 border-white/20 hover:bg-red-700"
              aria-label="Call (254) 998-3484"
            >
              CALL NOW: (254) 998-3484
            </a>
            
            <a 
              href="#quote"
              className="bg-white/20 backdrop-blur-sm text-white text-lg md:text-xl font-bold py-5 px-8 rounded-2xl hover:bg-white/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 uppercase tracking-wide flex-1 text-center border-2 border-white/30 hover:border-white"
              aria-label="Schedule service"
            >
              SCHEDULE NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
