import { AiFillShopping } from "react-icons/ai";
import SedapLogo from "./SedapLogo";
import NavList from "./NavList";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="px-28 py-8 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-30">
          <SedapLogo />
          <div className="flex">
            <NavList />
          </div>
        </div>
        <div className="flex flex-row gap-3 itemm-center">
          <div className="bg-slate-50 px-3 py-3 rounded-lg shadow-xl">
            <AiFillShopping />
          </div>
          <div className="bg-hijau py-3 px-5 text-white rounded-xl">
            <Link to="/login"> Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
