import React from "react";

export default function Category({ items }) {
	console.log("itme", items);
	return (
		<>
			<div className="cell border-solid border-2 border-sky-500 text-center">
				<h3>{items}</h3>
			</div>
		</>
	);
}
