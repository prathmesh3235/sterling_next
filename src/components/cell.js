import React from "react";
import Image from "next/image";

export default function Cell({ product }) {
	return (
		<>
			<div className="cell border-solid border-2 border-sky-500 text-center m-10">
				<Image src={product.imageURL} alt="category" width={500} height={500} />
				<h3>{product.name}</h3>
			</div>
		</>
	);
}
