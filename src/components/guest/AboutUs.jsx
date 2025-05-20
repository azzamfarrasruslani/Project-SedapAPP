/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function AboutUs() {
  const steps = [
    {
      image: "/guest/img/illustration-1.png",
      number: "01",
      title: "Select Restaurant",
      description:
        "Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.",
    },
    {
      image: "/guest/img/illustration-2.png",
      number: "02",
      title: "Select Menu",
      description:
        "Eu mi bibendum neque egestas congue quisque. Nulla facilisi morbi tempus iaculis urna id volutpat lacus.",
    },
    {
      image: "/guest/img/illustration-3.png",
      number: "03",
      title: "Wait for Delivery",
      description:
        "Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat nisl vel pretium lectus quam id leo.",
    },
  ];

  return (
    <div className="p-8 bg-slate-50">
      {/* Heading */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="font-poppins-extrabold mb-5 text-[48px] font-bold text-[#363636]">
          How It Works
        </h1>
        <p className="text-lg text-[#787878] max-w-[36rem] mx-auto">
          Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
          tellus in metus vulputate eu scelerisque felis.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="px-4 lg:px-24 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={step.image} alt={step.title} className="mb-6" />
              <h3 className="text-2xl text-gray-700 font-poppins-extrabold">
                <span className="text-gray-300 mr-2 text-[36px] font-extrabold">
                  {step.number}
                </span>
                {step.title}
              </h3>
              <p className="mt-4 text-[#787878] text-[16px] max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
