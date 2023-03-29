import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DirectoryPath() {
	const router = useRouter();
	return (
		<>
			<div className="flex justify-center p-2 bg-slate-900 font-mono font-medium font top-0 right-0 w-full">
				{/* <div className="justify-around"> */}
				<Link
					className="text-purple-700 no-underline pr-1.5"
					href={{
						pathname: "/",
					}}
				>
					Home
				</Link>
				{router.query.cat && (
					<Link
						className="text-purple-700 no-underline pr-1.5"
						href={{
							pathname: "/" + router.query.cat,
						}}
					>
						<span className=" text-cyan-50"> {">"} </span>
						{router.query.cat}
					</Link>
				)}

				{router.query.subCat && (
					<Link
						className="text-purple-700 no-underline pr-1.5"
						href={{
							pathname: "/" + router.query.cat + "/" + router.query.subCat,
						}}
					>
						<span className=" text-cyan-50"> {">"} </span>
						{router.query.subCat}
					</Link>
				)}
				{router.query.id && (
					<Link
						className="text-purple-700 no-underline pr-1.5"
						href={{
							pathname:
								"/" +
								router.query.cat +
								"/" +
								router.query.subCat +
								"/" +
								router.query.id,
						}}
					>
						<span className=" text-cyan-50"> {">"} </span>
						{router.query.id}
					</Link>
				)}
				{/* </div> */}
			</div>
		</>
	);
}
