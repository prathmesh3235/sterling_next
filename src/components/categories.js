import React from "react";
import Category from "./category";
import data from "../assets/data/content";

export default function Categories() {
	const categories = Object.keys(data);
	return (
		<>
			<div className="justify-center md:container md:mx-auto content-center">
				<div className="h-56 grid grid-cols-3 gap-4 content-center">
					{categories.map((cat) => {
						return <Category key={cat} items={cat} />;
					})}
				</div>
			</div>
		</>
	);
}
