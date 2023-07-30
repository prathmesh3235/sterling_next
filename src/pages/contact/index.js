import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
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
      <div>
        <Navbar />
        <div
          className="bg-my_bg_contactUs bg-center"
          style={{ minHeight: "90vh" }}
        ></div>
        <Footer />
      </div>
    </>
  );
}
