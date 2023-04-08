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
	return (
		<>
			<div className=" h-screen content-between">
				<Navbar />
				<div className=" text-center">
					<DirectoryPath />
					<h1>{product.description}</h1>
					<div className="flex justify-center">
						<Image
							src={product.imageURL}
							alt={product.id}
							width={250}
							height={250}
						/>
						<h2 className=""> Price: {product.price}</h2>
					</div>
					<h1>Share this Product</h1>
					<div>
						<h1>Description: </h1>
						<h1>{product.description}</h1>
					</div>
					<div>
						<h1>Features: </h1>
						<ul>
							{product.features &&
								product.features.map((feature) => {
									return <li key={feature}> {feature} </li>;
								})}
						</ul>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
