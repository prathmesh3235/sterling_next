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
        <div
          className="bg-my_bg_aboutUs2 bg-center"
          style={{ minHeight: "80vh" }}
        ></div>
        <Footer />
      </div>
    </>
  );
}
