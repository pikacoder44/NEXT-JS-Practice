import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-2 bg-slate-800 text-white ">
      <div className="logo font-sans text-3xl pl-8  hover:cursor-default ">My Next App</div>
      <ul className="flex ">
        <Link className="hover:bg-slate-900 hover:text-blue-300 rounded-md px-3  py-3" href="/">
          <li>Home</li>
        </Link >
        <Link className="hover:bg-slate-900 hover:text-blue-300 rounded-md px-3  py-3" href="/about">
          <li>About</li>
        </Link>
        <Link className="hover:bg-slate-900 hover:text-blue-300 rounded-md px-3  py-3" href="/contact">
          <li>Contact</li>
        </Link>
        <Link className="hover:bg-slate-900 hover:text-blue-300 rounded-md px-3  py-3" href="/users">
          <li>Users</li>
        </Link>
        <Link className="hover:bg-slate-900 hover:text-blue-300 rounded-md px-3  py-3" href="/products">
          <li>Products</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
