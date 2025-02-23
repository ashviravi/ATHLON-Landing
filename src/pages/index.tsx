import React from 'react';

const IndexPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#ffffff] text-[#333333]">
      <h1 className="text-5xl font-bold mb-6">Welcome to Athlon!</h1>
      <p className="text-xl mb-12">The ultimate sports booking platform</p>

      <div className="flex gap-6">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
        <button className="bg-gray-200 text-black px-6 py-3 rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
