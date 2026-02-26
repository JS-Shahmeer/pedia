// SubscribeCTA.jsx
import React from "react";

const SubscribeCTA = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-20 flex justify-start items-center"
      style={{
        backgroundImage: `url('https://fixolab.github.io/wonted/one-page-version/assets/images/ctav5.jpg')`,
      }}
    >
      <div className="global-container">
        <div className="bg-[#f9f2ef] p-10 rounded-xl max-w-md w-full shadow-lg">
          <p className="text-sm text-[#8b6b5a] uppercase mb-2">Subscribe Now</p>
          <h2 className="text-3xl font-bold text-[#1f3342] mb-6">
            Get a free chapter of this book
          </h2>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6b5a]"
            />
            <button
              type="submit"
              className="bg-[#8b6b5a] text-white px-6 py-3 rounded-md hover:bg-[#7a5f51] transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-600 mt-3">
            * eBook includes iBooks, PDF & ePub versions
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscribeCTA;
