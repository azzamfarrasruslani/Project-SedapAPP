import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const [isRestaurantOpen, setIsRestaurantOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(
    "Choose a Restaurant"
  );

  const restaurantList = ["Restaurant A", "Restaurant B"];

  return (
    <section className="min-h-screen py-16">
  <motion.div
    className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Bagian kiri */}
    <motion.div
      className="max-w-xl"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-poppins-extrabold text-gray-800 leading-tight mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        The Best Restaurants In Your Home Azzam
      </motion.h1>

      <motion.p
        className="text-gray-500 text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </motion.p>

      {/* Dropdown dan tombol */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <div className="relative w-full sm:w-auto">
          <motion.button
            className="min-w-[400px] px-4 py-3 border border-gray-200 shadow-md rounded-lg text-lg font-normal font-poppins text-gray-400 bg-white flex justify-between items-center"
            onClick={() => setIsRestaurantOpen((prev) => !prev)}
            whileTap={{ scale: 0.97 }}
          >
            {selectedRestaurant}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>

          <AnimatePresence>
            {isRestaurantOpen && (
              <motion.ul
                className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {restaurantList.map((res, i) => (
                  <li
                    key={i}
                    className="px-5 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                    onClick={() => {
                      setSelectedRestaurant(res);
                      setIsRestaurantOpen(false);
                    }}
                  >
                    {res}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          className="bg-hijau hover:bg-hijau text-white px-6 py-3 rounded-lg font-thin shadow-md transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ORDER NOW
        </motion.button>
      </motion.div>
    </motion.div>

    {/* Bagian kanan */}
    <motion.div
      className="relative w-full max-w-4xl mt-16"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <div className="absolute -top-4 right-24 w-[32rem] h-full bg-green-100 rotate-12 rounded-[50px] z-0" />
      <img
        src="/guest/img/deliveryguy.png"
        alt="Delivery Guy"
        className="relative z-10 w-[60rem] object-contain"
      />

      <motion.div
        className="absolute top-12 right-10 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3 z-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <div className="w-4 h-4 rounded-full bg-hijau"></div>
        <div className="text-sm">
          <strong>12 Restaurant</strong>
          <div className="text-xs text-gray-400">In Your city</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-4 z-20"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <img
          src="/guest/img/restaurant.jpg"
          alt="Restaurant"
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div className="text-sm">
          <div className="text-gray-400 text-xs">Restaurant of the Month</div>
          <strong className="text-base">The Wilmington</strong>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
</section>
  );
}
