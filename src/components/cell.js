import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cell({ product }) {
	const route = window.location.href;
	return (
		<>
			<div className="cell border-solid border-2 border-sky-500 text-center m-10 h-65">
				<Link
					href={{
						pathname: route + "/" + product.id,
						query: {
							productID: product.id,
						},
					}}
				>
					<Image
						src={product.imageURL}
						alt={product.imageURL}
						width={250}
						height={250}
					/>
					<h3>{product.name}</h3>
				</Link>
			</div>
		</>
	);
}
