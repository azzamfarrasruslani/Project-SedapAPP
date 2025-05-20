/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const flipXVariant = {
  hidden: { rotateY: 90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const PartnershipSection = () => {
  return (
    <section className="py-16 bg-[#363636]">
      <div className="container mx-auto px-4">
        {/* Judul */}
        <h2 className="text-white text-4xl font-bold text-center mb-12">
          Want to Join Partnership?
        </h2>

        {/* Card Container */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Card Join Courier */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={flipXVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative rounded-2xl border-[4px] border-hijau overflow-hidden">
              <img
                src="https://bslthemes.com/html/quickeat/assets/img/photo-6.jpg"
                alt="Join Courier"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end items-start p-6 bg-black/20">
                <h3 className="text-white text-2xl font-bold mb-4">
                  Join Courier
                </h3>
                <a
                  href="become-partner.html"
                  className="bg-hijau text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-hijau transition"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card Join Merchant */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={flipXVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative rounded-2xl border-[4px] border-hijau overflow-hidden">
              <img
                src="https://bslthemes.com/html/quickeat/assets/img/photo-7.jpg"
                alt="Join Merchant"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end items-start p-6 bg-black/20">
                <h3 className="text-white text-2xl font-bold mb-4">
                  Join Merchant
                </h3>
                <a
                  href="become-partner.html"
                  className="bg-hijau text-white text-sm font-semibold px-6 py-3 left- rounded-md hover:bg-hijau transition"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
