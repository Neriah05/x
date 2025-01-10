import React from "react";

const Reward = () => {
  return (
    <div className="bg-black text-white py-10 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold text-purple-500 text-center mb-3">
          Exclusive Rewards
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Unlock premium benefits as an early investor
        </p>

        {/* Reward Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Lifetime Free Transactions */}
          <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-lg text-center border border-gray-700 hover:shadow-purple-500 hover:scale-105 transition transform duration-300">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Lifetime Free Transactions
            </h3>
            <p className="text-gray-300">
              Never pay transaction fees again when you hold 10,000+ tokens
            </p>
          </div>
          {/* Priority Access */}
          <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-lg text-center border border-gray-700 hover:shadow-purple-500 hover:scale-105 transition transform duration-300">
            <div className="text-4xl mb-4">🎟️</div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Priority Access
            </h3>
            <p className="text-gray-300">
              Get early access to new features and exclusive ICO opportunities
            </p>
          </div>
          {/* Special Rewards */}
          <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-lg text-center border border-gray-700 hover:shadow-purple-500 hover:scale-105 transition transform duration-300">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Special Rewards
            </h3>
            <p className="text-gray-300">
              Earn additional tokens through our staking and referral programs
            </p>
          </div>
        </div>

        {/* Special Prize Pool */}
        <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Special Prize Pool
          </h3>
          <p className="text-gray-300 mb-6">
            Investors who acquire 3,000+ ✖ Tokens will be eligible to win
            exclusive rewards, including:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-b from-gray-800 to-black p-4 rounded-lg border border-gray-700 hover:shadow-purple-500 hover:scale-105 transition transform duration-300">
              VIP Access to Annual Investor Event
            </div>
            <div className="bg-gradient-to-b from-gray-800 to-black p-4 rounded-lg border border-gray-700 hover:shadow-purple-500 hover:scale-105 transition transform duration-300">
              Exclusive Merchandise Bundle
            </div>
            <div className="bg-gradient-to-b from-gray-800 to-black p-4 rounded-lg border border-gray-700 hover:shadow-purple-500 hover:scale-105 transition transform duration-300">
              One-on-One Consultation with Industry Experts
            </div>
            <div className="bg-gradient-to-b from-gray-800 to-black p-4 rounded-lg border border-gray-700 hover:shadow-purple-500 hover:scale-105 transition transform duration-300">
              Bonus Tokens for Future Transactions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
