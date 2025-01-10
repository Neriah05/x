import React from "react";

const Tokenomics = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-purple-500">Tokenomics</h2>
        <p className="text-gray-400 mt-4">
          Strategic token distribution for sustainable growth
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-12">
        {/* Token Distribution */}
        <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h3 className="text-xl font-bold mb-6">Token Distribution</h3>
          <div className="space-y-4">
            {[
              { label: "Public Sale", percentage: 40, color: "bg-blue-500" },
              { label: "Development", percentage: 25, color: "bg-purple-500" },
              {
                label: "Team & Advisors",
                percentage: 15,
                color: "bg-gray-500",
              },
              { label: "Marketing", percentage: 10, color: "bg-pink-500" },
              { label: "Reserve", percentage: 10, color: "bg-cyan-500" },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <span>{item.label}</span>
                  <span>{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                  <div
                    className={`${item.color} h-2 rounded-full`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Token Details */}
        <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h3 className="text-xl font-bold mb-6">Token Details</h3>
          <ul className="space-y-4">
            {[
              { label: "Token Name", value: "X Token" },
              { label: "Token Symbol", value: "X" },
              { label: "Total Supply", value: "1,000,000,000 X" },
              { label: "Initial Price", value: "$5.44" },
              { label: "Soft Cap", value: "5,000,000 USD" },
              { label: "Hard Cap", value: "20,000,000 USD" },
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-gray-400"
              >
                <span>{item.label}</span>
                <span className="text-white">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
