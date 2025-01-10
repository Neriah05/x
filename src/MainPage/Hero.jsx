import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen text-white flex items-center justify-center">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/hero.mp4" // Replace with your video path
        autoPlay
        loop
        muted
      ></video>

      {/* Content */}
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold md:text-5xl lg:text-6xl text-[#62A5FA]">
          X Token Presale
        </h1>
        <p className="text-sm mt-4 md:text-lg lg:text-xl text-[#C0C3CB]">
          Join the future of digital finance with the official X token presale
          platform
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-4">
          <div className="flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg border border-transparent hover:border-blue-600 transition duration-300">
            <h2 className="text-xl md:text-2xl font-bold text-[#62A5FA]">
              $5.44
            </h2>
            <p className="text-xs md:text-sm text-[#C0C3CB]">Current Price</p>
          </div>
          <div className="flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg border border-transparent hover:border-blue-600 transition duration-300">
            <h2 className="text-xl md:text-2xl font-bold text-[#62A5FA]">
              8.2M+
            </h2>
            <p className="text-xs md:text-sm text-[#C0C3CB]">Tokens Sold</p>
          </div>
          <div className="flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg border border-transparent hover:border-blue-600 transition duration-300">
            <h2 className="text-xl md:text-2xl font-bold text-[#62A5FA]">
              3/5
            </h2>
            <p className="text-xs md:text-sm text-[#C0C3CB]">Stage</p>
          </div>
          <div className="flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg border border-transparent hover:border-blue-600 transition duration-300">
            <h2 className="text-xl md:text-2xl font-bold text-[#62A5FA]">
              $9.55
            </h2>
            <p className="text-xs md:text-sm text-[#C0C3CB]">Next Price</p>
          </div>
        </div>

        {/* Purchase Button */}
        <div className="flex justify-center mt-6">
          <button className="flex gap-2 items-center bg-gradient-to-r from-[#030713] via-[#62A5FA] to-[#030713] text-white font-bold py-3 px-6 rounded-lg border border-transparent hover:border-blue-300 transition duration-300">
            Purchase Tokens
            <span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-8">
          <div className="flex justify-between mt-2 text-xs px-6 md:px-14">
            <span>Total Progress</span>
            <span>80%</span>
          </div>
          <div className="relative w-full max-w-xs md:max-w-md h-2 bg-gray-700 mx-auto rounded-full">
            <div
              className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full"
              style={{ width: "82%" }}
            ></div>
          </div>
          <div className="flex justify-between text-xs px-6 md:px-14">
            <span>0 X</span>
            <span>10M X</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
