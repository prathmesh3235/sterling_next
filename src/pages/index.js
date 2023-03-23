//pages/Home
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Categories from "@/components/categories";
import Navbar from "@/components/navbar";
import Slider from "@/components/slider";
import Footer from "@/components/footer";
import BestSellingSlider from "@/components/bestSellingSlider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Sterling</title>
			</Head>
			<div>
				<Navbar />
				<div className=" text-center mt-5">
					<h1>Shris Sterling</h1>
					<p>Tag line</p>
				</div>
				<div>
					<Slider />
				</div>
				<div>
					<Categories />
				</div>
				<div>
					<BestSellingSlider />
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</>
	);
}
