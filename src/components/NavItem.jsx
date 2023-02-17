import React from "react";
import { Link } from "react-router-dom";

function NavItem({ name, path }) {
  return (
    <Link to={path}>
      <li
        className="px-5 py-2 mx-3 rounded-xl shadow-mg
    hover:bg-gray-300 font-bold
    text-gray-600"
      >
        {name}
      </li>
    </Link>
  );
}

export default NavItem;
