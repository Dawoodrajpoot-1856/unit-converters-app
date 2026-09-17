import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex md:flex-row justify-between items-center px-10 flex-col h-24  border-gray-300 border-t  mt-5 ">
      <div>
        <h1 className="text-[16px]">
          © 2026{" "}
          <span className="text-gray-800 hover:text-gray-600">
            UnitX Converter
          </span>
          . All rights reserved.
        </h1>
      </div>
      <div className="flex md:flex-row list-none gap-5 flex-col">
        <Link href="/">
          <li className="text-[17px] text-gray-600 font-semibold mt-1">Home</li>
        </Link>
        <Link href="/all-converters">
          <li className="text-[17px] text-gray-600 font-semibold mt-1">
            Converters
          </li>
        </Link>
        <Link href="/about-us">
          <li className="text-[17px] text-gray-600 font-semibold mt-1">
            About
          </li>
        </Link>

        <Link href="/disclaimer">
          <li className="text-[17px] text-gray-600 font-semibold mt-1">
            Disclaimer
          </li>
        </Link>

        <Link href="/privacy">
          <li className="text-[17px] text-gray-600 font-semibold mt-1">
            Privacy
          </li>
        </Link>

        <Link href="/terms">
          <li className="text-[17px] text-gray-600 font-semibold mt-1">
            Terms
          </li>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
