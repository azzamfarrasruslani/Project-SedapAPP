import { Link, NavLink } from "react-router-dom";

export default function NavList() {
  const listMenu = [
    { id: "menu-1", label: "Home", to: "/" },
    { id: "menu-2", label: "Member Check", to: "/member-check" },
  ];

  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center  p-4  space-x-2 
      ${
        isActive
          ? "text-hijau border-b-2 font-extrabold "
          : "text-gray-600 hover:text-hijau hover:font-extrabold transition-all duration-200 "
      }`;
  return (
    // <div className="flex gap-5">
    //   <a href="">Home</a>
    //   <a href="">Member Check</a>
    // </div>

    <ul id="menu-list" className="flex space-x-3">
      {listMenu.map((menu) => (
        <li>
          <NavLink id={menu.id} to={menu.to} className={menuClass}>
            <span>{menu.label}</span>
          </NavLink>
        </li>
      ))}
      
    </ul>
  );
}
