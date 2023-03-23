import React from "react";
import Category from "./category";
import data from "../assets/data/content";

export default function Categories() {
	const categories = Object.keys(data);
	const imageURLs = categories.map((cat) => {
		return data[cat][0]["products"][0]["imageURL"];
	});
	return (
		<>
			<div className="justify-center md:container md:mx-auto content-center p-5">
				<div className="h-56 grid grid-cols-3 gap-4 content-center">
					{categories.map((cat, idx) => {
						return <Category key={cat} items={cat} imageURL={imageURLs[idx]} />;
					})}
				</div>
			</div>
		</>
	);
}
