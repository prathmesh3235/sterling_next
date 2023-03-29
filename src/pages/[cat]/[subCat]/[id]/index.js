import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import DirectoryPath from "@/components/directoryPath";
import data from "../../../../assets/data/content";

export default function ProductPage() {
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
	console.log("Product", product);
	return (
		<>
			<div className=" h-screen">
				<Navbar />
				<div className=" text-center">
					<DirectoryPath />
					<h1>{product.description}</h1>
					<div className=" text-center">
						<Image
							src={product.imageURL}
							alt={product.id}
							width={250}
							height={250}
						/>
						<h2> Price: {product.price}</h2>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
