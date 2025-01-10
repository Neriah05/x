import React from "react";

const Privilege = () => {
  return (
    <div className="bg-black text-white py-10 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold text-purple-500 text-center mb-3">
          Elite Privileges
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Unprecedented access and exclusive opportunities
        </p>

        {/* Privilege Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Premium Member Access */}
          <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-lg text-center border border-gray-700 hover:shadow-purple-500 hover:scale-105 transition transform duration-300">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Premium Member Access
            </h3>
            <p className="text-gray-300">
              Invitation to exclusive investor and tech community events with
              keynote speakers and networking opportunities.
            </p>
          </div>
          {/* Tech Insider Benefits */}
          <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-lg text-center border border-gray-700 hover:shadow-purple-500 hover:scale-105 transition transform duration-300">
            <div className="text-4xl mb-4">🎟️</div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Tech Insider Benefits
            </h3>
            <p className="text-gray-300">
              Early access to new product features, beta testing opportunities,
              and direct feedback sessions with development teams.
            </p>
          </div>
          {/* VIP Perks */}
          <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-lg text-center border border-gray-700 hover:shadow-purple-500 hover:scale-105 transition transform duration-300">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              VIP Perks
            </h3>
            <p className="text-gray-300">
              Discounts on partner products and services, priority support, and
              exclusive merchandise.
            </p>
          </div>
        </div>

        {/* Exclusive Benefits Section */}
        <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Exclusive Benefits
          </h3>
          <p className="text-gray-300 mb-6">
            Premium token holders (50,000+ tokens) unlock additional privileges:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-b from-gray-800 to-black p-4 rounded-lg border border-gray-700 hover:shadow-purple-500 hover:scale-105 transition transform duration-300">
              Private Jet Access
            </div>
            <div className="bg-gradient-to-b from-gray-800 to-black p-4 rounded-lg border border-gray-700 hover:shadow-purple-500 hover:scale-105 transition transform duration-300">
              Luxury Car Test Drives
            </div>
            <div className="bg-gradient-to-b from-gray-800 to-black p-4 rounded-lg border border-gray-700 hover:shadow-purple-500 hover:scale-105 transition transform duration-300">
              AI Lab Tours
            </div>
            <div className="bg-gradient-to-b from-gray-800 to-black p-4 rounded-lg border border-gray-700 hover:shadow-purple-500 hover:scale-105 transition transform duration-300">
              Private Banking Services
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privilege;
