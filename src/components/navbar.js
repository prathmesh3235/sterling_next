import React from "react";
import Link from "next/link";

export default function Navbar() {
	return (
		<>
			<div className="flex justify-around p-2 bg-slate-900 font-mono font-medium font top-0 right-0 w-full">
				<div className="">
					<input type="string" placeholder=" Search" className=" p-1.5" />
				</div>
				{/* <div className="justify-around"> */}
				<Link className="text-purple-700 no-underline" href="/">
					Home
				</Link>
				<Link className="text-purple-700 no-underline" href="/contact">
					Contact
				</Link>
				<Link className="text-purple-700 no-underline" href="/about">
					About Us
				</Link>
				{/* </div> */}
			</div>
		</>
	);
}
