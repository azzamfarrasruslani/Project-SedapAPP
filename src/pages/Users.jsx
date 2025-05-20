import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((err) => {
        console.error(err);
        setError("Gagal mengambil data users.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Daftar Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Foto</th>
              <th className="px-4 py-2 border">Nama</th>
              <th className="px-4 py-2 border">Umur</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Telepon</th>
              <th className="px-4 py-2 border">Alamat</th>
              <th className="px-4 py-2 border">Perusahaan</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">{user.id}</td>
                <td className="px-4 py-2 border text-center">
                  <img src={user.image} alt={user.firstName} className="w-10 h-10 rounded-full mx-auto" />
                </td>
                <td className="px-4 py-2 border">{user.firstName} {user.lastName}</td>
                <td className="px-4 py-2 border text-center">{user.age}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">{user.phone}</td>
                <td className="px-4 py-2 border">
                  {user.address.address}, {user.address.city}, {user.address.state}
                </td>
                <td className="px-4 py-2 border">
                  {user.company.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
