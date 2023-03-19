import React from "react";
import Link from "next/link";

export default function Navbar() {
	return (
		<>
			<div className="navbar">
				<Link href="/">Home</Link>
				<Link href="/contact">Contact</Link>
				<Link href="/about">About Us</Link>
			</div>
		</>
	);
}
