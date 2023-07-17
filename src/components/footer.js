import React from "react";
import { CFooter, CLink } from "@coreui/react";

export default function Footer() {
  return (
    <>
      <CFooter className="flex bg-black p-10 text-center justify-around absolute right-0 w-full bottom-0 left-0 m-auto">
        <div className="text-white">
          <CLink className="text-white">Sterling</CLink>
          <span>&copy; Sterling 2023</span>
        </div>
        <div>
          <span className="text-white">Powered by </span>
          <CLink className="text-white">Sterling</CLink>
        </div>
      </CFooter>
    </>
  );
}
