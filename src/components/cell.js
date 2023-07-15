import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cell({ productName, productURL, productImg }) {
	const route = window.location.href;
	return (
		<>
			<div className=" justify-center font-mono font-semibold cell border-double rounded-lg scale-95 border-4 border-black text-black no-underline text-center mr-10 mb-5 mt-10 hover:scale-110 transition-all ease-in-out duration-700 animate-none">
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
