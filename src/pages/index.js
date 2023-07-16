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
import { images } from "../../next.config";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sterling</title>
      </Head>
      <div className=" bg-contain bg-no-repeat relative">
        <Navbar />

        <div>
          <h1 className=" text-6xl text-center mt-4 font-bold font-racing track tracking-wide text-black ">
            Shri's Sterling
          </h1>
          <p className=" text-2xl text-center mt-1 font-racing text-black">
            Jewellary and More{" "}
          </p>
        </div>

        <div>
          <Slider />
        </div>
        {/* <div class="parallax"></div> */}
        <div className="m-1.5 bg-inherit parallax">
          <Categories />
        </div>
        <div className=" w-full bg-inherit">
          <BestSellingSlider />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
