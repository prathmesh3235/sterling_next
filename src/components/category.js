import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Category({ items, imageURL }) {
	return (
		<>
			<Link
				href={{
					pathname: "/" + items,
				}}
			>
				<div className="cell border-solid border-2 border-sky-500 text-center m-10">
					<Image src={imageURL} alt="category" width={500} height={500} />
					<h3>{items}</h3>
				</div>
			</Link>
		</>
	);
}
