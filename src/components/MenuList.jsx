import Icon from "./Icon";
import { Link, NavLink } from "react-router-dom";
export default function MenuList() {
  const listMenu = [
    { id: "menu-1", label: "Dashboard", icon: "home", to: "/dashboard" },
    { id: "menu-2", label: "Orders", icon: "newspaper", to: "/orders" },
    { id: "menu-3", label: "Customers", icon: "people", to: "/customers" },
    { id: "menu-4", label: "Users", icon: "user", to: "/users" },
    { id: "menu-5", label: "Error 404", icon: "error", to: "/error/404" },
    { id: "menu-6", label: "Error 403", icon: "error", to: "/error/403" },
    { id: "menu-7", label: "Error 401", icon: "error", to: "/error/401" },
  ];

  // const menuClass = `flex cursor-pointer items-center rounded-xl p-4 space-x-2
  //   text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold`;

  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
      ${
        isActive
          ? "text-hijau bg-green-200 font-extrabold"
          : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
      }`;

  return (
    <ul id="menu-list" className="space-y-3">
      {listMenu.map((menu) => (
        <li>
          <NavLink id={menu.id} to={menu.to} className={menuClass}>
            <Icon name={menu.icon} className="mr-4 text-xl" />{" "}
            <span>{menu.label}</span>
          </NavLink>
        </li>
      ))}
      {/* <li className="border-2 border-hijau/20 rounded-xl">
        <div
          id="menu-1"
          className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
        >
          <Icon name="home" className="mr-4 text-xl" />
           <span>Dashboard</span>
        </div>
      </li>
      <li className="border-2 border-hijau/20 rounded-xl">
        <div
          id="menu-2"
          className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
        >
          <LuNewspaper className="mr-4 text-xl" /> <span>Orders</span>
        </div>
      </li>
      <li className="border-2 border-hijau/20 rounded-xl">
        <div
          id="menu-3"
          className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
        >
          <IoPeopleOutline className="mr-4 text-xl" /> <span>Customers</span>
        </div>
      </li> */}
    </ul>
  );
}
