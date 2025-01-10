import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-3">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-blue-400 text-xl font-semibold">X Token</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Building the future of digital transactions
          </p>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="text-white text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li className="hover:text-gray-200 cursor-pointer">Home</li>
            <li className="hover:text-gray-200 cursor-pointer">Features</li>
            <li className="hover:text-gray-200 cursor-pointer">Tokenomics</li>
            <li className="hover:text-gray-200 cursor-pointer">Roadmap</li>
            <li className="hover:text-gray-200 cursor-pointer">Rewards</li>
            <li className="hover:text-gray-200 cursor-pointer">FAQ</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © 2025 X Token. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
