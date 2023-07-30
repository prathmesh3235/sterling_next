import React from "react";
import { useState } from "react";
import Image from "next/image";
import items from "../assets/data/Items";
import Carousel from "better-react-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";
import data from "../assets/data/content";

export default function BestSellingSlider() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const categories = Object.keys(data);
  let bestSellingProducts = categories
    .map((cat) => {
      return [
        ...data[cat].map((subCat) => {
          return [
            ...subCat["products"].map((prod) => {
              if (prod.bestselling) {
                return prod;
              } else {
                return "";
              }
            }),
          ];
        }),
      ];
    })
    .flat(1);
  bestSellingProducts = bestSellingProducts.filter((products) => {
    if (products[0] != "") {
      return products;
    }
  });
  return (
    <div className="mx-6 text-center pb-10">
      <h1 className=" m-4 font-display text-center font-mono antialiased font-semibold tracking-wide text-black">
        Our Bestselling Products
      </h1>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className=" h-140 w-full"
        cols={3}
        rows={1}
        gap={20}
        loop
      >
        {bestSellingProducts.map((item) => (
          <Carousel.Item key={item.id}>
            <Image
              src={"/images/sliderbg6.jpg"}
              alt="slides"
              width={2000}
              height={2000}
              className=" w-fit h-fit"
            />

            {/* <Carousel.Caption className={styles.caption}>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
							<button className="btn btn-danger">Visit</button>
						</Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
