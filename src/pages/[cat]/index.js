import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import data from "../../assets/data/content";
import Categories from "@/components/categories";
import Cell from "@/components/cell";
import DirectoryPath from "@/components/directoryPath";

export default function CategoryPage() {
  const router = useRouter();
  const category = data[router.query.cat];
  return (
    <>
      <div className="bg-contain relative">
        <Navbar />
        <DirectoryPath />
        <div
          style={{ paddingBottom: "30px", minHeight: "73vh" }}
          className="bg-cover flex flex-wrap justify-center"
        >
          {category && [
            ...category.map((subCat) => {
              return (
                <Cell
                  key={subCat.name}
                  productName={subCat.name}
                  productURL={subCat.name}
                  productImg={subCat["products"][0].imageURL}
                />
              );
            }),
          ]}
        </div>
        <Footer />
      </div>
    </>
  );
}
