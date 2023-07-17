import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cell({ productName, productURL, productImg }) {
  const route = window.location.href;
  return (
    <>
      <div
        style={{ maxHeight: "285px" }}
        className=" justify-center font-mono font-semibold border-inherit border-2 border-black text-white no-underline text-center mr-0 sm:mr-10 mb-5 mt-10 hover:scale-110 transition-all ease-in-out duration-700 animate-none"
      >
        <Link
          className="text-white no-underline text-center"
          href={{
            pathname: route + "/" + productURL,
          }}
        >
          <Image
            className="h-full"
            src={productImg}
            alt={productName}
            width={250}
          />
          <h2 className="text-black mt-2 bg-white border-gray-400 border-2 ">
            {productName}
          </h2>
        </Link>
      </div>
    </>
  );
}
