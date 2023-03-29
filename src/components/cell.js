import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cell({ productName, productURL, productImg }) {
	const route = window.location.href;
	return (
		<>
			<div className="cell border-solid border-2 border-sky-500 text-center m-10 h-65">
				<Link
					href={{
						pathname: route + "/" + productURL,
					}}
				>
					<Image src={productImg} alt={productName} width={250} height={250} />
					<h3>{productName}</h3>
				</Link>
			</div>
		</>
	);
}
