import React from 'react';

const IntroCard = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-slate-50 to-white" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 lg:p-16 border border-gray-100 max-w-4xl mx-auto relative -mt-20 md:-mt-32 lg:-mt-40 z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-accent mb-8 text-center leading-tight uppercase tracking-wide">
            Expert Air Duct Cleaning
            <span className="block text-primary text-2xl md:text-3xl lg:text-4xl font-normal mt-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Killeen, TX
            </span>
          </h2>

          <div className="text-center space-y-6 text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p className="font-light">
              Restore your indoor air quality with <strong className="text-gray-900 font-bold text-2xl">Air Duct Cleaning Killeen</strong>, 
              Central Texas&apos;s trusted HVAC hygiene specialists. We provide <strong className="text-primary font-bold">certified source removal</strong> 
              to ensure your home remains a healthy, dust-free sanctuary.
            </p>

            <p className="font-light">
              Using <strong className="text-primary font-bold">industrial-grade HEPA filtration</strong> and mechanical agitation, we eliminate 
              deep-seated allergens and pollutants, optimizing your system&apos;s airflow and <strong className="text-accent font-bold">reducing energy costs</strong>.
            </p>

            <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-4 border-gradient-to-r border-emerald-400/30 to-blue-400/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
              <p className="text-2xl md:text-3xl font-black text-gray-900 mb-4 uppercase tracking-wide drop-shadow-lg">
                Breathe Cleaner Today.
              </p>
              <p className="text-xl md:text-2xl font-semibold text-gray-700 drop-shadow-md">
                Experience the visible difference of a professionally sanitized HVAC system.
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12 mt-12 pt-12 border-t-4 border-gray-100">
            <img 
              src="/google.png" 
              alt="Google Reviews 5-Star Rated" 
              className="h-16 md:h-20 lg:h-24 w-auto hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-lg" 
            />
            <img 
              src="/angni.webp" 
              alt="Angi Super Service Award Winner" 
              className="h-16 md:h-20 lg:h-24 w-auto hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-lg" 
            />
            <img 
              src="/yelp.webp" 
              alt="Yelp 5-Star Reviews" 
              className="h-16 md:h-20 lg:h-24 w-auto hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-lg" 
            />
            <img 
              src="/logo2.webp" 
              alt="Certified Local Business" 
              className="h-16 md:h-20 lg:h-24 w-auto hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-lg" 
            />
            <img 
              src="/BBB.webp" 
              alt="BBB Accredited Business A+ Rating" 
              className="h-16 md:h-20 lg:h-24 w-auto hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-lg" 
            />
            <img 
              src="/logo5.png" 
              alt="Licensed &amp; Insured Air Duct Cleaning" 
              className="h-16 md:h-20 lg:h-24 w-auto hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroCard;
