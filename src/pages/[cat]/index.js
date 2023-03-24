import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import data from "../../assets/data/content";
import Categories from "@/components/categories";
import Cell from "@/components/cell";

export default function CategoryPage() {
	const router = useRouter();
	const category = data[router.query.cat];
	return (
		<>
			<div className=" h-screen">
				<Navbar />
				<div className="flex flex-wrap">
					{category && [
						...category.map((subCat) => {
							return subCat["products"].map((product) => {
								return <Cell key={product.id} product={product} />;
							});
						}),
					]}
				</div>
				<Footer />
			</div>
		</>
	);
}
