import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import AlertBox from "../components/AlertBox";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import GenericTable from "../components/GenericTable";
import { productAPI } from "../services/productAPI";

const CATEGORIES = ["Elektronik", "Pakaian", "Makanan", "Peralatan", "Lainnya"];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [dataForm, setDataForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image_url: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loadProducts = async () => {
    setLoading(true);
    const { data, error } = await productAPI.getAll();
    if (error) {
      setError("Gagal memuat data produk");
    } else {
      setProducts(data || []);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (editingId) {
        const { error } = await productAPI.update(editingId, dataForm);
        if (error) throw error;
        setSuccess("Produk berhasil diperbarui");
      } else {
        const { error } = await productAPI.create(dataForm);
        if (error) throw error;
        setSuccess("Produk berhasil ditambahkan");
      }

      setDataForm({
        name: "",
        description: "",
        price: "",
        stock: "",
        image_url: "",
        category: "",
      });
      setEditingId(null);
      loadProducts();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus produk ini?")) return;
    setLoading(true);
    const { error } = await productAPI.remove(id);
    if (error) {
      setError("Gagal menghapus produk");
    } else {
      setSuccess("Produk berhasil dihapus");
      loadProducts();
    }
    setLoading(false);
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setDataForm({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      image_url: product.image_url,
      category: product.category,
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Manajemen Produk</h2>

      {error && <AlertBox type="error">{error}</AlertBox>}
      {success && <AlertBox type="success">{success}</AlertBox>}

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {editingId ? "Edit Produk" : "Tambah Produk Baru"}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "description", "price", "stock", "image_url"].map((field) => (
            <input
              key={field}
              type={field === "price" || field === "stock" ? "number" : "text"}
              name={field}
              value={dataForm[field]}
              onChange={handleChange}
              placeholder={field.replace("_", " ").toUpperCase()}
              required={field !== "image_url"}
              className="w-full p-3 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              disabled={loading}
            />
          ))}

          <select
            name="category"
            value={dataForm.category}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full p-3 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">Pilih Kategori</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-2xl hover:bg-emerald-700 transition"
            disabled={loading}
          >
            {loading ? "Memproses..." : editingId ? "Perbarui Produk" : "Tambah Produk"}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
        {loading && <LoadingSpinner text="Memuat produk..." />}
        {!loading && products.length === 0 && !error && <EmptyState text="Belum ada produk." />}
        {!loading && products.length > 0 && (
          <GenericTable
            columns={["#", "Nama", "Kategori", "Harga", "Stok", "Aksi"]}
            data={products}
            renderRow={(item, index) => (
              <>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">Rp {Number(item.price).toLocaleString()}</td>
                <td className="px-6 py-4">{item.stock}</td>
                <td className="px-6 py-4 flex space-x-2">
                  <button onClick={() => handleEdit(item)} disabled={loading}>
                    <BiEdit className="text-blue-500 text-xl hover:text-blue-700" />
                  </button>
                  <button onClick={() => handleDelete(item.id)} disabled={loading}>
                    <AiFillDelete className="text-red-500 text-xl hover:text-red-700" />
                  </button>
                </td>
              </>
            )}
          />
        )}
      </div>
    </div>
  );
}
