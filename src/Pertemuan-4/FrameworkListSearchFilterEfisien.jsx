import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilterEfisien() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");

  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    /*Tambah state lain beserta default value*/
  });

  // Handle perubahan nilai input form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];
  return (
    // Input dan Select Untuk Select dan Filter
    <div className="p-8">
      <h1 className="text-center text-3xl font-bold mb-5">Framework List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
        <input
          type="text"
          placeholder="Search framework..."
          value={dataForm.searchTerm}
          name="searchTerm"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <select
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={dataForm.selectedTag}
          name="selectedTag"
          onChange={handleChange}
        >
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3">
        {/*  */}
        {filteredFrameworks.map((item, index) => (
          <div
            key={item.id}
            className="border  p-5 mb-4 rounded-lg shadow-md bg-white"
          >
            <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className=" text-sm text-gray-600">
              Developed by: {item.details.developer} ({item.details.releaseYear}
              )
            </p>
            <a
              className="text-blue-500 underline mb-2"
              href={item.details.officialWebsite}
            >
              Visit Website
            </a>

            <br />
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
