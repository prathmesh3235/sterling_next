import React from "react";
import Link from "next/link";
import { GiDiamondRing } from "react-icons/gi";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-around p-4 m-2 w-auto bg-black font-mono font-medium font">
        <div className="">
          {/* <input type="string" placeholder=" Search" className=" p-1.5" /> */}
        </div>
        {/* <div className="justify-around"> */}
        <h3 className="text-white no-underline">
          {" "}
          <GiDiamondRing />{" "}
        </h3>
        <Link className="text-white no-underline" href="/">
          Home
        </Link>
        <Link className="text-white no-underline" href="/contact">
          Contact
        </Link>
        <Link className="text-white no-underline" href="/about">
          About Us
        </Link>
        {/* </div> */}
      </div>
    </>
  );
}
