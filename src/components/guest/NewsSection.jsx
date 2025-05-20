/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const flipVariant = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const NewsSection = () => {
  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-poppins-extrabold mb-10 text-[#363636]">
          Latest news and <br />
          events
        </h2>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Kolom Kiri */}
          <motion.div
            className="lg:w-1/2 bg-white rounded-3xl shadow-md p-6 space-y-5"
            variants={flipVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-5">
              <div className="relative w-full">
                <img
                  src="https://bslthemes.com/html/quickeat/assets/img/photo-8.jpg"
                  alt="man"
                  className="rounded-3xl w-full"
                />

                <div className="absolute top-2 left-2 flex gap-2">
                  <div className="rounded-lg bg-hijau px-4 py-1 text-normal text-white">
                    news
                  </div>
                  <div className="rounded-lg  bg-hijau  px-4 py-1 text-normal text-white">
                    quickeat
                  </div>
                </div>
              </div>

              <div className="flex gap-2 text-sm text-hijau font-medium">
                <a href="#">news</a>
                <a href="#">quickeat</a>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                We Have Received An Award For The Quality Of Our Work
              </h3>
              <p className="text-gray-600">
                Donec adipiscing tristique risus nec feugiat in fermentum...
              </p>
              <a
                href="#"
                className="text-hijau font-medium flex items-center gap-1"
              >
                Read More <i className="fa-solid fa-arrow-right"></i>
              </a>
              <ul className="flex flex-wrap gap-4 text-gray-500 text-sm mt-2">
                <li className="flex items-center gap-1">
                  <i className="fa-solid fa-user"></i>
                  <h6>by Quickeat</h6>
                </li>
                <li className="flex items-center gap-1">
                  <i className="fa-regular fa-calendar-days"></i>
                  <h6>01.Jan. 2022</h6>
                </li>
                <li className="flex items-center gap-1">
                  <i className="fa-solid fa-eye"></i>
                  <h6>132</h6>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Kolom Kanan */}
          <motion.div
            className="lg:w-1/2 space-y-10"
            variants={flipVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Berita 1, 2, 3 (dapat dijadikan map juga) */}
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                className="flex gap-4"
                initial={{ rotateY: -90, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={`https://bslthemes.com/html/quickeat/assets/img/food-${
                    i + 1
                  }.jpg`}
                  alt="food-img"
                  className="w-36 h-36 object-cover rounded-md"
                />
                <div>
                  <div className="flex flex-wrap gap-2 text-sm text-white mb-1">
                    <a
                      href="#"
                      className="bg-hijau px-3 py-1 rounded-lg font-medium"
                    >
                      restaurants
                    </a>
                    <a
                      href="#"
                      className="bg-hijau px-3 py-1 rounded-lg font-medium"
                    >
                      cooking
                    </a>
                  </div>

                  <h6 className="font-semibold text-gray-800">
                    <a href="#">Sample Headline {i + 1}</a>
                  </h6>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
                  <ul className="flex flex-wrap gap-3 text-gray-500 text-sm mt-1">
                    <li className="flex items-center gap-1">
                      <i className="fa-solid fa-user"></i>by Quickeat
                    </li>
                    <li className="flex items-center gap-1">
                      <i className="fa-regular fa-calendar-days"></i>01.Jan.
                      2022
                    </li>
                    <li className="flex items-center gap-1">
                      <i className="fa-solid fa-eye"></i>132
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
