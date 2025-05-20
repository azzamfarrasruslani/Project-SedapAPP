/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function OrderSection() {
  return (
    <section className="font-poppins bg-gradient-to-br from-[#FFF7ED] via-[#FEEEEE] to-[#FFF7ED] py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Image with Tags */}
        <motion.div
          className="flex flex-col lg:flex-row"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full flex justify-center">
            <img
              src="/guest/img/photo-3.png"
              alt="Happy Woman"
              className="w-[300px] md:w-[600px] relative z-10"
            />

            <div className="absolute right-40 top-[20%] flex flex-col gap-3 text-right">
              <span className="bg-white px-4 py-1 rounded-lg text-sm shadow">
                Burgers
              </span>
              <span className="bg-white px-4 py-1 rounded-lg text-sm shadow">
                Steaks
              </span>
              <span className="bg-white px-4 py-1 rounded-lg text-sm shadow">
                Pizza
              </span>
            </div>
          </div>

          {/* Right Text */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left font-poppins"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-poppins-extrabold md:text-4xl  text-gray-800 leading-tight mb-6">
              Food from your <br /> favorite restaurants <br /> to your table
            </h1>
            <p className="text-gray-500 mb-6">
              Pretium lectus quam id leo in vitae turpis massa sed. Lorem donec
              massa sapien faucibus et molestie. Vitae elementum curabitur vitae
              nunc.
            </p>
            <button className="bg-hijau text-white px-6 py-3 rounded-md shadow-md font-medium hover:border-hijau hover:border-2 transition">
              ORDER NOW
            </button>
          </motion.div>
        </motion.div>
      </div>
     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mt-20">
  {/* Judul Kiri */}
  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight md:w-1/3">
    Service <br /> shows good <br /> taste.
  </h2>

  {/* Stats Section */}
  <motion.div
    className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-2/3"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Card 1 */}
    <div className="bg-white px-8 py-8 rounded-xl shadow-md flex items-center">
      <p className="text-5xl font-bold text-hijau mr-4">976</p>
      <div className="text-gray-600 text-sm leading-tight">
        <p>Satisfied</p>
        <p>Customer</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white px-8 py-8 rounded-xl shadow-md flex items-center">
      <p className="text-5xl font-bold text-hijau mr-4">12</p>
      <div className="text-gray-600 text-sm leading-tight">
        <p>Best</p>
        <p>Restaurants</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white px-8 py-8 rounded-xl shadow-md flex items-center">
      <p className="text-5xl font-bold text-hijau mr-4">1K+</p>
      <div className="text-gray-600 text-sm leading-tight">
        <p>Food</p>
        <p>Delivered</p>
      </div>
    </div>
  </motion.div>
</div>

    </section>
  );
}
