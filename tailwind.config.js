/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      racing: ["'Racing Sans One', 'cursive'"],

      display: ["Oswald"],
      body: ["Open Sans"],
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        my_bg_image: "url('../../public/images/bgimg1.jpg')",
        my_bg_image2: "url('../../public/images/bg2.jpeg')",
        my_bg_contactUs: "url('../../public/images/contactUsBg.jpg')",
        my_bg_aboutUs: "url('../../public/images/aboutUsBg.jpeg')",
        my_bg_aboutUs2: "url('../../public/images/aboutUsBg2.jpeg')",
      },
    },
  },
  plugins: [],
};
