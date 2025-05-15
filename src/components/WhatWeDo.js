import React from "react";

const WhatWeDo = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-white">
    <p className="pl-2 text-xs text-black ">
          <span className="text-xs align-super mr-1">*</span>
          Move37 Capital is a trading name of Laven Advisors LLP which is authorised by the Financial Conduct Authority.
    </p>
    
    <section className=" pt-20 pb-20 px-4 md:px-6 lg:px-8">
      {/* Disclosure in top-left with * mark */}
      <div className="max-w-5xl mx-auto">
        

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 tracking-wide text-center">
          What We Do
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-6 leading-relaxed tracking-wide text-center">
          <strong className="text-blue-500 font-medium">Move37</strong>  is named after the legendary 37th move made by DeepMind’s AlphaGo in its historic match against world champion Lee Sedol. That move—unexpected and brilliantly unconventional—revealed AI’s potential to go beyond replication and optimization: to surprise, to create, and to challenge established thinking.

        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-6 leading-relaxed tracking-wide text-center">
          At <strong className="text-blue-500 font-medium">Move37</strong>, we embrace that spirit—leveraging AI to uncover unconventional insights and make high-conviction decisions in global financial markets.
        </p>
      </div>
    </section>
    </div>
  );
};

export default WhatWeDo;
