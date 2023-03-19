import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Categories from "@/components/categories";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function AboutUs() {
	return (
		<>
			<Head>
				<title>Sterling</title>
			</Head>
			<div>
				<Navbar />
				<div>
					<h1>Contact</h1>
					<p>Tag line</p>
				</div>
			</div>
		</>
	);
}
