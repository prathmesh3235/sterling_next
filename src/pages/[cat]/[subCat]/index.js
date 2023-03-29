import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import data from "../../../assets/data/content";
import Categories from "@/components/categories";
import Cell from "@/components/cell";
import DirectoryPath from "@/components/directoryPath";

export default function CategoryPage() {
	const router = useRouter();
	const subCategory = data[router.query.cat].filter((subCat) => {
		if (subCat.name === router.query.subCat) {
			return subCat;
		}
	});

	return (
		<>
			<div className=" h-screen">
				<Navbar />
				<DirectoryPath />
				<div className="flex flex-wrap">
					{subCategory && [
						...subCategory[0]["products"].map((prod) => {
							return (
								<Cell
									key={prod.id}
									productName={prod.id}
									productURL={prod.id}
									productImg={prod.imageURL}
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
