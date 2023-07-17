import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import DirectoryPath from "@/components/directoryPath";
import data from "../../../../assets/data/content";
import { useState } from "react";

export default function ProductPage() {
  const [show, setShow] = useState(false);
  if (show) {
    setInterval(function () {
      setShow(false);
    }, 5000);
  }
  const share = useRouter();
  const base = "http://localhost:3000";

  const links = base + share.asPath;
  const copylink = (e) => {
    navigator.clipboard.writeText(links);
    setShow(true);
  };
  const router = useRouter();
  const product = data[router.query.cat]
    ? data[router.query.cat]
        .filter((subCat) => {
          if (subCat.name === router.query.subCat) {
            return subCat;
          }
        })[0]
        ["products"].filter((prod) => {
          if (prod.id === router.query.id) {
            return prod;
          }
        })[0]
    : {};
  return (
    <>
      <div className=" bg-my_bg_image2 content-between absolute min-h-screen w-screen">
        <Navbar />
        <div className=" text-center">
          <DirectoryPath />
          <h1>{product.description}</h1>
          <div className="flex justify-center p-6 flex-col sm:flex-row">
            <div className="">
              <Image
                className="m-auto border-hidden rounded-lg scale-95 border-8 border-inherit hover:scale-110 transition-all ease-in-out duration-700"
                src={product.imageURL}
                alt={product.id}
                width={350}
                height={350}
              />
            </div>
            <div
              style={{ padding: "30px" }}
              className="justify-evenly flex flex-col"
            >
              {/* <div>
                <h1>Description: </h1>
                <h1>{product.description}</h1>
              </div> */}
              <div>
                {/* <h1>Features: </h1> */}
                <ul className="text-left pl-0">
                  {product.features &&
                    product.features.map((feature) => {
                      return <li key={feature}> {feature} </li>;
                    })}
                  <li className="text-xl"> Price: {product.price}$</li>
                </ul>
              </div>
              <h1 onClick={copylink} className="btn btn-danger">
                Share this Product
              </h1>
              {show && <h3>Copied Link to Clipboard</h3>}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
