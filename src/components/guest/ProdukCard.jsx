import frameworkData from "../../data/products.json";
export default function ProdukCard() {
  return (
    <div className="p-8 min-h-screen">
      <div className="">
        <h1 className="font-poppins-extrabold text-center mb-5 text-4xl font-bold text-hijau">
          Best Product
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3">
        {frameworkData.map((item) => (
          <div className="  p-5 mb-4 rounded-lg shadow-md bg-white">
            <div key={item.id} className="">
              <img
                className="w-70 h-50 object-cover"
                src={item.image}
                alt={item.title}
              />
              <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              {/* <p>⭐{item.rating}</p> */}
              <p className="">${item.price}</p>
              {/* <p className=" text-sm text-gray-600">
              Developed by: {item.details.developer} ({item.details.releaseYear}
              )
            </p>
            <a
              className="text-blue-500 underline mb-2"
              href={item.details.officialWebsite}
            >
              Visit Website
            </a> */}

              {/* <br />
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
                >
                  {tag}
                </span>
              ))} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
