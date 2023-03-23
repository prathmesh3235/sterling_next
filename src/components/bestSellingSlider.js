import React from "react";
import { useState } from "react";
import Image from "next/image";
import items from "../assets/data/Items";
import { Carousel } from "react-bootstrap";
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
	console.log("BEstSelling", bestSellingProducts);
	return (
		<>
			<Carousel activeIndex={index} onSelect={handleSelect}>
				{bestSellingProducts.map((item) => (
					<Carousel.Item key={item.id} className={styles.itemP} interval={1000}>
						<Image src={item.imageURL} alt="slides" width={500} height={500} />
						<Carousel.Caption className={styles.caption}>
							{/* <h3>{item.title}</h3> */}
							<p>{item.description}</p>
							<button className="btn btn-danger">Visit Docs</button>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</>
	);
}
