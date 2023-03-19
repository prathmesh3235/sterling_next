import React from "react";
import Image from "next/image";

export default function Category({ items }) {
	console.log("itme", items);
	return (
		<>
			<div className="cell border-solid border-2 border-sky-500 text-center">
				<Image src={imageUrl} alt="category" width={500} height={500} />
				<h3>{items}</h3>
			</div>
		</>
	);
}
