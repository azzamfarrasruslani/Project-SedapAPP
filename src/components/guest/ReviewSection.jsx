import React, { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";

const ReviewSection = () => {
  const reviews = [
    {
      text: `"Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Mauris a diam maecenas sed enim. Egestas diam in arcu cursus euismod quis. Quam quisque id diam vel".`,
      name: "Thomas Adamson",
      image: "https://bslthemes.com/html/quickeat/assets/img/photo-5.jpg",
    },
    {
      text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus."`,
      name: "Jessica Bright",
      image: "https://bslthemes.com/html/quickeat/assets/img/photo-5.jpg",
    },
    {
      text: `"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vel ante a orci tempus eleifend ut et magna."`,
      name: "Michael Doe",
      image: "https://bslthemes.com/html/quickeat/assets/img/photo-5.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <motion.section
      className="py-16 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // agar hanya animasi sekali saat masuk viewport
    >
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Side - Testimonial Content */}
        <div className="w-full lg:w-1/2">
          <motion.h2
            className="text-4xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What customers say <br /> about us
          </motion.h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-gray-600 text-lg italic mb-6">
                {reviews[currentIndex].text}
              </p>

              <div className="flex items-center gap-4 mb-6">
                <motion.img
                  src={reviews[currentIndex].image}
                  alt={reviews[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="text-gray-800 font-semibold">
                  {reviews[currentIndex].name}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Circles */}
          <div className="flex gap-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gray-800 border-gray-800"
                    : "bg-transparent border-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Image with animation */}
        <motion.div
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative inline-block">
            <img
              src="https://bslthemes.com/html/quickeat/assets/img/photo-4.png"
              alt="Customer looking at phone"
              className="rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ReviewSection;
