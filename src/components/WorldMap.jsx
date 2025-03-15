import React from 'react';

const WorldMap = () => {
  const countries = {
    'Europe': ['France', 'United Kingdom', 'Poland', 'Croatia', 'Romania'],
    'Asia': ['Kazakhstan', 'China', 'Saudi Arabia'],
    'Americas': ['United States', 'Chile', 'Brazil'],
    'Africa': ['Egypt', 'Algeria'],
    'Oceania': ['Australia']
  };

  return (
    <section className="bg-gradient-to-b py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            We work with these countries
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With our global presence, we've served a vast number of customers and delivered vehicles internationally.
            USA car and get a car directly to your destination!
          </p>
        </div>

        <div className="relative">
          {/* World Map Container */}
          <div className="w-full h-[400px] md:h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Map Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000")',
                opacity: '0.15'
              }}
            />
            
            {/* Animated Routes */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
                {/* North America to Europe */}
                <path
                  d="M250,180 C400,150 500,170 650,160"
                  className="stroke-yellow-400 stroke-[3] fill-none animate-dash"
                  strokeLinecap="round"
                  strokeDasharray="5,5"
                />
                {/* North America to Asia */}
                <path
                  d="M200,200 C400,180 600,190 800,170"
                  className="stroke-yellow-400 stroke-[3] fill-none animate-dash [animation-delay:500ms]"
                  strokeLinecap="round"
                  strokeDasharray="5,5"
                />
                {/* Europe to Asia */}
                <path
                  d="M650,160 C700,165 750,170 800,170"
                  className="stroke-yellow-400 stroke-[3] fill-none animate-dash [animation-delay:1000ms]"
                  strokeLinecap="round"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>

            {/* Location Markers */}
            <div className="absolute inset-0">
              {/* North America */}
              <div className="absolute left-[25%] top-[36%]">
                <div className="relative">
                  <div className="w-4 h-4">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute inset-0 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              {/* Europe */}
              <div className="absolute left-[65%] top-[30%]">
                <div className="relative">
                  <div className="w-4 h-4">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute inset-0 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              {/* Asia */}
              <div className="absolute left-[80%] top-[34%]">
                <div className="relative">
                  <div className="w-4 h-4">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute inset-0 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center md:text-left">
          {Object.entries(countries).map(([region, countryList]) => (
            <div key={region} className="space-y-4">
              <h3 className="text-xl font-semibold text-yellow-500">{region}</h3>
              <ul className="space-y-2">
                {countryList.map((country) => (
                  <li 
                    key={country} 
                    className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-200 ease-in-out"
                  >
                    {country}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldMap;