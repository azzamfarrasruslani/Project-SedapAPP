import { Outlet } from "react-router-dom";
import Navbar from "../components/guest/Navbar";
import Footer from "../components/guest/Footer";
export default function GuestLayout() {
  return (
    <div className=" bg-gradient-to-r from-[#FFF7E7] to-[#F8F8FC] min-h-screen flex">
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 ">
          <Outlet />
        </div>
        <Footer/>
      </div>
    </div>
  );
}
