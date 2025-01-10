import React from "react";

const RevolutionComponent = () => {
  return (
    <div className="flex justify-center items-center py-9 bg-gradient-to-b from-black to-gray-900">
      <div className="bg-gradient-to-r from-blue-900 to-black text-white rounded-lg shadow-lg px-16 py-10 max-w-4xl text-center">
        <h1 className="text-3xl font-semibold text-blue-300">
          Join the Revolution
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Don't miss out on this opportunity to be part of the future of digital
          transactions.
        </p>
        <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          Buy Tokens Now →
        </button>
      </div>
    </div>
  );
};

export default RevolutionComponent;
