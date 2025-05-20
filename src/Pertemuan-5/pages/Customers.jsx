
import React, { useState, useEffect } from "react";
import PageHeaderBaru from "../components/PageHeaderBaru";
// Pastikan path JSON file sesuai dengan lokasi file Anda
import ordersData from "../../data/customers_data.json"; 
export default function Customers() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Set data orders dari JSON
    setOrders(ordersData);
  }, []);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // Filter berdasarkan searchTerm dan selectedTag
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredOrders = orders.filter((order) => {
    // Mencocokkan searchTerm dengan CustomerName atau lainnya
    const matchesSearch =
      (order["Customer Name"] && order["Customer Name"].toLowerCase().includes(_searchTerm)) ||
      (order["Email"] && order["Email"].toLowerCase().includes(_searchTerm)) ||
      (order["Phone"] && order["Phone"].toLowerCase().includes(_searchTerm));
  
    // Mencocokkan selectedTag jika ada filter tag
    const matchesTag = dataForm.selectedTag
      ? order.Loyalty && order.Loyalty.toLowerCase() === dataForm.selectedTag.toLowerCase()
      : true;
  
    return matchesSearch && matchesTag;
  });
  // Mengambil tag loyalty untuk select filter
  const loyaltyTags = ["Gold", "Silver", "Bronze"];

  return (
    <div id="orders-container">
      <PageHeaderBaru
        title="Orders"
        breadcrumb={["dashboard", "orders"]}
        children=""
      />
      <div className="p-8 bg-white rounded-xl shadow-lg">
      

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
          {/* Input untuk Search */}
          <input
            type="text"
            placeholder="Search customer..."
            value={dataForm.searchTerm}
            name="searchTerm"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          {/* Select untuk filter Loyalty */}
          <select
            className="w-full p-2 border border-gray-300 rounded mb-4"
            value={dataForm.selectedTag}
            name="selectedTag"
            onChange={handleChange}
          >
            <option value="">All Loyalty</option>
            {loyaltyTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        {/* Tabel untuk menampilkan daftar pesanan berdasarkan filter */}
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Customer Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Loyalty</th>
            </tr>
          </thead>
          <tbody>
  {filteredOrders.map((order, index) => (
    <tr
      key={order["Customer ID"]}
      className={`border-b transition duration-200 ease-in-out hover:bg-gray-100 ${
        index % 2 === 0 ? "bg-white" : "bg-gray-50"
      }`}
    >
      <td className="px-6 py-4 text-sm text-gray-700 font-medium">{order["CustomerName"]}</td>
      <td className="px-6 py-4 text-sm text-gray-600">{order["Email"]}</td>
      <td className="px-6 py-4 text-sm text-gray-600">{order["Phone"]}</td>
      <td className="px-6 py-4 text-sm">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            order.Loyalty === "Gold"
              ? "bg-yellow-100 text-yellow-800"
              : order.Loyalty === "Silver"
              ? "bg-gray-200 text-gray-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {order.Loyalty}
        </span>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
}
