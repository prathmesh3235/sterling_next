import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Categories from "@/components/categories";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function AboutUs() {
	return (
		<>
			<Head>
				<title>Sterling</title>
			</Head>
			<div className="relative min-h-screen">
				<Navbar />
				<div>
					<h1 className="text-3xl font-bold p-40 font-abc">About Us</h1>
					<p>Tag line</p>
				</div>
				<Footer/>
			</div>
		</>
	);
}
