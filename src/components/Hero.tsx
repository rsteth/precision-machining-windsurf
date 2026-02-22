const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-metal-50 to-industrial-50">
      <div className="absolute inset-0 bg-grid-metal-100/50 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-metal-900">
            <span className="block">Precision. Reliability.</span>
            <span className="block bg-gradient-to-r from-industrial-600 to-industrial-800 bg-clip-text text-transparent">
              Local Expertise.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-metal-600 max-w-3xl mx-auto leading-relaxed">
            Serving industrial and commercial clients across the Bow Valley, we specialize in high-quality machining 
            and mechanical services—both in-shop and on-site. From precision components to critical repairs, our 
            experienced team is dedicated to keeping your equipment running smoothly and efficiently.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#services"
              className="px-8 py-4 bg-industrial-600 hover:bg-industrial-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white hover:bg-metal-50 text-industrial-600 font-semibold rounded-lg shadow-lg hover:shadow-xl border-2 border-industrial-600 transform hover:-translate-y-1 transition-all duration-200"
            >
              Get Quote
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-industrial-600 mb-2">6+ Tonnes</div>
            <div className="text-metal-600">Crane Lifting Capacity</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-industrial-600 mb-2">52"</div>
            <div className="text-metal-600">Lathe Swing Diameter</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-industrial-600 mb-2">3500 PSI</div>
            <div className="text-metal-600">Hydraulic Test Capacity</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-metal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
