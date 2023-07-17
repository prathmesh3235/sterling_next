import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DirectoryPath() {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center p-2 bg-black font-mono font-medium font top-0 right-0 w-full mb-3">
        {/* <div className="justify-around"> */}
        <Link
          className="text-white no-underline pr-1.5"
          href={{
            pathname: "/",
          }}
        >
          Home
        </Link>
        {router.query.cat && (
          <Link
            className="text-white no-underline pr-1.5"
            href={{
              pathname: "/" + router.query.cat,
            }}
          >
            <span className=" text-white"> {">"} </span>
            {router.query.cat}
          </Link>
        )}

        {router.query.subCat && (
          <Link
            className=" text-white no-underline pr-1.5"
            href={{
              pathname: "/" + router.query.cat + "/" + router.query.subCat,
            }}
          >
            <span className=" text-white"> {">"} </span>
            {router.query.subCat}
          </Link>
        )}
        {router.query.id && (
          <Link
            className=" text-white no-underline pr-1.5"
            href={{
              pathname:
                "/" +
                router.query.cat +
                "/" +
                router.query.subCat +
                "/" +
                router.query.id,
            }}
          >
            <span className=" text-white"> {">"} </span>
            {router.query.id}
          </Link>
        )}
        {/* </div> */}
      </div>
    </>
  );
}
