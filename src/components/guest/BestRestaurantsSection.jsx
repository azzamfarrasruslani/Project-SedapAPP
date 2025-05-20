/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const BestRestaurantsSection = () => {
  const restaurants = [
    {
      name: "Kennington Lane Cafe",
      image: "/guest/img/logos-1.jpg",
      tags: ["Breakfast", "Brunch", "Cafe"],
      description: "Small cafe serving English breakfast & sandwiches.",
    },
    {
      name: "The Wilmington",
      image: "/guest/img/logos-2.jpg",
      tags: ["Gastropub", "British"],
      description: "Modern gastropub with hearty mains & craft beers.",
    },
    {
      name: "Kings Arms",
      image: "/guest/img/logos-3.jpg",
      tags: ["Pub", "Historic"],
      description: "Traditional pub known for beers and Sunday roast.",
    },
  ];

  const RestaurantCard = ({
    name,
    image,
    tags,
    description,
    variant = "default",
    index,
  }) => {
    return (
      <motion.div
        className={`flex flex-row md:flex-col gap-4 p-10 bg-white rounded-xl shadow-md ${
          variant === "full" ? "md:col-span-2" : ""
        }`}
        initial={{ rotateX: 90, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src={image}
          alt={name}
          className="w-full md:w-[100px] h-[100px] object-cover rounded-xl"
        />
        <div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-sm border font-sans border-hijau text-hijau px-2 py-1 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="grid gap-6 px-20 py-20 bg-white">
      <div className="mt-20">
        <div className="mb-10 text-start lg:hidden lg:flex-col">
          <h2 className="text-[48px] max-w-[40rem] text-[#363636] font-poppins-extrabold mb-2">
            12 Best Restaurants in Your City
          </h2>
          <p className="text-gray-600">
            Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
            tellus in metus vulputate.
          </p>
        </div>

        <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="hidden mb-10 text-start lg:flex lg:flex-col">
            <h2 className="text-[48px] max-w-[40rem] text-[#363636] font-poppins-extrabold mb-2">
              12 Best Restaurants in Your City
            </h2>
            <p className="text-gray-600">
              Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
              tellus in metus vulputate.
            </p>
          </div>
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} index={index} {...restaurant} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="border-2 border-hijau text-hijau font-semibold py-3 px-8 rounded-lg hover:bg-hijau hover:text-white transition duration-300">
            SEE ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestRestaurantsSection;
