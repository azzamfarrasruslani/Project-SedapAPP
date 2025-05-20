import React from 'react';

const SubscribeSection = () => {
  return (
    <section className="py-16 bg-[#fcfcfc]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Gambar ilustrasi */}
          <div
            className="lg:w-1/2 mb-10 lg:mb-0"
            data-aos="flip-up"
            data-aos-delay="200"
            data-aos-duration="300"
          >
            <div className="w-full">
              <img
                src="/guest/img/illustration-4.png"
                alt="Illustration"
                className="mx-auto"
              />
            </div>
          </div>

          {/* Form subscribe */}
          <div
            className="lg:w-5/12 lg:ml-auto"
            data-aos="flip-up"
            data-aos-delay="300"
            data-aos-duration="400"
          >
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
                Get the menu of your favorite restaurants every day
              </h2>
              <form className="relative">
                <i className="fa-regular fa-bell absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter email address"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button
                  type="submit"
                  className="mt-4 w-full bg-hijau text-white font-medium py-3 rounded-md hover:bg-yellow-600 transition duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
