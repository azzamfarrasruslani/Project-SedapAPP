import React, { useState, useEffect } from "react";
import PageHeaderBaru from "../components/PageHeaderBaru";
import DynamicForm from "../components/DynamicForm"; // pastikan path sesuai
import ordersData from "../data/orders_data.json";

export default function Orders() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedStatus: "",
  });

  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});

  const fields = [
    { name: "CustomerName", label: "Customer Name", type: "text" },
    { name: "Email", label: "Email", type: "email" },
    { name: "Phone", label: "Phone", type: "text" },
    {
      name: "Loyalty",
      label: "Loyalty",
      type: "select",
      options: ["Silver", "Gold", "Platinum"],
    },
  ];

  useEffect(() => {
    setOrders(ordersData);
  }, []);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleFormChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    setShowModal(false);
  };

  const handleAddClick = () => {
    // misalnya ambil data pertama untuk prefill, atau kosongkan
    const prefillData = orders[0] || {
      CustomerName: "",
      Email: "",
      Phone: "",
      Loyalty: "",
    };
    setFormData(prefillData);
    setShowModal(true);
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.CustomerName &&
      order.CustomerName.toLowerCase().includes(_searchTerm);

    const matchesStatus = dataForm.selectedStatus
      ? order.Status.toLowerCase() === dataForm.selectedStatus.toLowerCase()
      : true;

    return matchesSearch && matchesStatus;
  });

  const statusOptions = ["Pending", "Completed", "Cancelled"];

  return (
    <div id="orders-container">
      <PageHeaderBaru
        title="Orders"
        breadcrumb={["dashboard", "orders"]}
        onAddClick={handleAddClick}
      />

      <div className="p-8 bg-white rounded-xl shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
          <input
            type="text"
            placeholder="Search customer..."
            value={dataForm.searchTerm}
            name="searchTerm"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <select
            name="selectedStatus"
            value={dataForm.selectedStatus}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">All Status</option>
            {statusOptions.map((status, idx) => (
              <option key={idx} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-2 text-left">Customer Name</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Total Price</th>
                <th className="px-4 py-2 text-left">Order Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.OrderID}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2">{order.CustomerName}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        order.Status === "Cancelled"
                          ? "bg-red-100 text-red-800"
                          : order.Status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.Status}
                    </span>
                  </td>
                  <td className="px-4 py-2">${order.TotalPrice.toFixed(2)}</td>
                  <td className="px-4 py-2">{order.OrderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center  bg-gray-100/80  z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Tambah Customer</h2>
            <DynamicForm
              fields={fields}
              formData={formData}
              onChange={handleFormChange}
              onSubmit={handleFormSubmit}
            />
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 text-sm text-gray-600 underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
