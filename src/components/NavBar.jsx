import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./static/images/logo_r.png";

import APIStatus from "./APIStatus";
import NavItem from "./NavItem";

function NavBar({ isActiveAPI }) {
  const [navItems, setNavItems] = useState([
    { name: "Terminals", path: "/terminals" },
    { name: "Chips", path: "/chips" },
    { name: "Stats", path: "/stats" },
    { name: "Settings", path: "/settings" },
  ]);

  return (
    <nav
      className="container mx-auto w-full h-20 top-7 px-16 py-4
                 flex flex-row justify-between
                 bg-gray-200 drop-shadow-lg rounded-3xl"
    >
      <Link to="/" className="w-16 h-16">
        <img src={logo} alt="logo" />
      </Link>
      <div className="flex self-center justify-center">
        <ul
          className="flex flex-row flex-nowrap items-center
                     list-none"
        >
          {navItems.map((tab, idx) => {
            return <NavItem key={idx} name={tab.name} path={tab.path} />;
          })}
        </ul>
        <APIStatus isActiveAPI={isActiveAPI} />
      </div>
    </nav>
  );
}

export default NavBar;
