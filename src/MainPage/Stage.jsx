import React from "react";

const Stage = () => {
  return (
    <div className="bg-black text-white p-8">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-purple-400">
          Stage 3 is Active
        </h2>
        <p className="text-sm md:text-lg text-gray-400 mt-2">
          Limited time opportunity to join early
        </p>
      </div>

      {/* Price and Progress */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-400">Current Price</p>
          <h3 className="text-2xl font-bold">1 𝕏 = $5.44 USD</h3>
        </div>
        <div className="w-full md:w-2/3 mt-4 md:mt-0">
          <div className="flex justify-between text-gray-400 text-sm">
            <span>Progress</span>
            <span>82%</span>
          </div>
          <div className="relative bg-gray-700 h-2 rounded-full mt-2">
            <div
              className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              style={{ width: "82%" }}
            ></div>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <a href="https://x-coinpro.com/dashboard/login.php">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-6 rounded-lg text-white font-semibold hover:opacity-80">
              Buy Now →
            </button>
          </a>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Card 1 */}
        <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="text-blue-500 p-3 rounded-full">
              <ion-icon name="shield-outline" class="text-5xl"></ion-icon>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-white text-center">
            Secure Infrastructure
          </h4>
          <p className="text-gray-400 text-sm mt-2 text-center">
            Military-grade encryption and secure blockchain technology
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="text-blue-500 p-3 rounded-full">
              <ion-icon name="sparkles-outline" class="text-5xl"></ion-icon>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-white text-center">
            AI Integration
          </h4>
          <p className="text-gray-400 text-sm mt-2 text-center">
            Advanced AI capabilities for smart transactions and analytics
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="text-blue-500 p-3 rounded-full">
              <ion-icon name="ribbon-outline" class="text-5xl"></ion-icon>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-white text-center">
            Exclusive Benefits
          </h4>
          <p className="text-gray-400 text-sm mt-2 text-center">
            Special rewards and privileges for early adopters
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stage;
