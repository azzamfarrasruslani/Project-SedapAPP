import frameworkData from "../../data/testimoni.json";

export default function TestimoniCard() {
  return (
    <div className="p-8 min-h-screen">
      
      <div className="">
        <h1 className="font-poppins-extrabold text-center mb-5 text-4xl font-bold text-hijau">
          Testimoni
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3">
        {frameworkData.map((item) => (
          <div className="  p-5 mb-4 rounded-lg shadow-md bg-white">
            <div key={item.id} className="flex ">
              <img
                className="w-20 h-20 rounded-full object-cover"
                src={item.image}
                alt={item.nama}
              />
              <div className="flex flex-col">
              <h2 className="text-lg font-bold text-gray-800">{item.nama}</h2>
              <p className="text-gray-600">{item.ulasan}</p>
               <p>⭐⭐⭐⭐⭐</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
