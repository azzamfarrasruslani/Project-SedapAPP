import Alert from "../../components/guest/Alert";
import InputMember from "../../components/guest/InputMember";
import { useState } from "react";
import customersData from "../../data/customers_data.json"; 
const MemberCheck = () => {
  const [email, setEmail] = useState("");
  const [foundMember, setFoundMember] = useState(null);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Cari member berdasarkan email (case-insensitive)
    const member = customersData.find(
      (item) => item.Email.toLowerCase() === inputEmail.toLowerCase()
    );

    setFoundMember(member || null);
  };

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="font-poppins-extrabold text-2xl font-semibold text-center mb-4 text-gray-700">
          Lihat Status Member
        </h2>

        <div className="mb-4">
          <InputMember
            label="Email"
            type="email"
            placeholder="Masukkan Email"
            onChange={handleEmailChange}
          />
        </div>

        {/* Kondisi alert */}
        {!email ? (
          <Alert tipe="error" pesan="Silakan masukkan email terlebih dahulu." />
        ) : foundMember ? (
          <Alert
            tipe="success"
            pesan={`Selamat! ${foundMember.CustomerName} memiliki status loyalitas: ${foundMember.Loyalty}.`}
          />
        ) : (
          <Alert tipe="error" pesan="Email tidak ditemukan dalam database member." />
        )}
      </div>
    </div>
  );
};

export default MemberCheck;
