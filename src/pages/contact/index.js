import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
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
          <Image src="../../../public/images/bg1.jpg" />
          <div className="bg-my_bg_image2"></div>
          <h1>Contact</h1>
          <p>Tag line</p>
        </div>
      </div>
    </>
  );
}
