import React from "react";
import Category from "./category";
import data from "../assets/data/content";

export default function Categories() {
  const categories = Object.keys(data);
  const imageURLs = categories.map((cat) => {
    return data[cat][0]["products"][0]["imageURL"];
  });
  console.log(imageURLs);
  return (
    <>
      <div className="justify-center content-center bg-inherit">
        <h1 className=" m-1 font-display text-7xl text-center font-mono antialiased font-semibold tracking-wide text-white">
          {" "}
          Categories{" "}
        </h1>
        <div className=" text-white flex flex-wrap content-center text-center justify-evenly p-4">
          {categories.map((cat, idx) => {
            return (
              <Category
                key={cat}
                items={cat}
                imageURL={"/images/" + cat + "/" + cat + "dp.png"}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
