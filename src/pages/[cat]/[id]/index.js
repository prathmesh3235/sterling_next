import React from "react";
import { useRouter } from "next/router";

export default function ProductPage() {
	const router = useRouter();
	const data = router.query;
	return (
		<>
			<h1>ProductID: {data.id}</h1>
		</>
	);
}
