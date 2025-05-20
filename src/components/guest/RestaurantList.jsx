import RestaurantCard from "./RestaurantCard";

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

const RestaurantList = () => {
  return (
    <div className="grid gap-6 px-20">
      {/* Dua lainnya dalam grid 2 kolom */}
      <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="hidden mb-10 text-start lg:flex lg:flex-col">
        <h2 className="text-[48px] max-w-[40rem] font-poppins-extrabold mb-2">12 Best Restaurants in Your City</h2>
          <p className="text-gray-600">Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in metus vulputate.</p>
        </div>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
