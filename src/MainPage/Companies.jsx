import React from "react";

const Companies = () => {
  const companies = [
    { name: "OpenAI", logo: "/Openai.png" },
    { name: "X", logo: "/logo2.png" },
    { name: "Binance", logo: "/Binance.png" },
    { name: "Tesla", logo: "/tesla.png" },
    { name: "JPMorgan Chase & Co.", logo: "/Jp.png" },
    { name: "Squarespace", logo: "/squarespace.png" },
    { name: "Coinbase", logo: "/coinbase.png" },
    { name: "SpaceX", logo: "/SpaceX.png" },
    { name: "Bitcoin Foundation", logo: "/bitcoin.png" },
  ];

  return (
    <div className="bg-black text-white py-12 px-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-bold text-blue-400">
          Trusted By Industry Leaders
        </h2>
        <p className="text-sm md:text-base text-gray-400 mt-2">
          Partnering with global technology innovators
        </p>
      </div>

      {/* Company Cards */}
      <div className="mt-8">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300"
            >
              <div className="text-center">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-16 h-16 object-contain mb-3"
                />
                <p className="text-sm text-gray-300">{company.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
