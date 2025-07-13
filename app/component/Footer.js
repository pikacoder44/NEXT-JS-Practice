import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-around bg-secondary text-primary text-xs py-4">
      <div className="text-center">
        Copyright ©️ Facebook | All rights reserved
      </div>
      <ul className="flex gap-2 text-sm">
        <Link href="/">
          <li className="text-xs">Home</li>
        </Link>
        <Link href="/about">
          <li className="text-xs">About</li>
        </Link>
        <Link href="/contact">
          <li className="text-xs">Contact</li>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
