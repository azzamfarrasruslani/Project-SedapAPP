const RestaurantCard = ({
  name,
  image,
  tags,
  description,
  variant = "default",
}) => {
  return (
    <div
      className={`flex flex-row md:flex-col gap-4 p-10 bg-white rounded-xl shadow-md ${
        variant === "full" ? "md:col-span-2" : ""
      }`}
    >
        <div className="">
            
        </div>
      <img
        src={image}
        alt={name}
        className="w-full md:w-[100px] h-[100px] object-cover rounded-xl"
      />
      <div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm border font-sans border-yellow-500 text-yellow-500 px-2 py-1 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
