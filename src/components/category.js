import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Category({ items, imageURL }) {
  return (
    <>
      <Link
        className="text-white m-4 no-underline"
        href={{
          pathname: "/" + items,
        }}
      >
        <div className="cell scale-95 border-inherit border-2 border-black text-white no-underline text-center m-2 hover:scale-110 transition-all ease-in-out duration-700 animate-none">
          <Image src={imageURL} alt="category" width={300} height={300} />
          <h3>{items}</h3>
        </div>
      </Link>
    </>
  );
}
