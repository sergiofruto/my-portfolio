import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DateTimeComponent from "@/components/DateTimeComponent";
import BentoTextBlock from "../BentoTextBlock";
import { BsGithub, BsStackOverflow, BsLinkedin } from "react-icons/bs";
import BadgeText from "@/components/BadgeText";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

const items = [
  // {
  //   name: "Analog Device",
  //   image: "/grid-assets/image-grid-analog.png",
  //   link: "https://www.analog.com/en/index.html",
  // },
  {
    name: "AK 01",
    image: "/grid-assets/AK01-01.jpeg",
    link: "/pdp/1",
  },
  {
    name: "Keyboard",
    image: "/grid-assets/image-grid-keyboard.png",
    link: "https://www.analog.com/en/index.html",
  },
  {
    name: "Phone",
    image: "/one-plus/oneplus-11-promo-1.webp",
    link: "https://www.analog.com/en/index.html",
  },
  {
    name: "Speaker",
    image: "/grid-assets/od11-4colors.jpeg",
    link: "https://www.analog.com/en/index.html",
  },
  {
    name: "Decentraland",
    image: "/grid-assets/decentraland-grid.png",
    link: "https://decentraland-hackaton.vercel.app/",
  },
  {
    name: "Develop",
    image: "/grid-assets/big-grid-asset-2.png",
    link: "https://www.analog.com/en/index.html",
  },
  {
    name: "Auth0",
    image: "/grid-assets/image-grid-auth0-card.png",
    link: "www.auth0.com",
  },
];

const BentoGrid = () => {
  const isBrowser = typeof window !== "undefined";

  // Check if running in a browser and localStorage is available
  const canUseLocalStorage =
    isBrowser && typeof window.localStorage !== "undefined";

  // Check if theme preference is stored in localStorage
  const storedTheme = canUseLocalStorage ? localStorage.getItem("theme") : null;

  const [isDarkTheme, setIsDarkTheme] = useState(
    storedTheme ? JSON.parse(storedTheme) : true
  );

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    // Store the theme preference in localStorage
    canUseLocalStorage &&
      localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  // Add useEffect to update the theme on initial load
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <section className="w-full md:h-screen bg-gray-400 dark:bg-gray-900">
      <div className="grid grid-cols-2 md:grid-cols-12 md:grid-rows-8 gap-4 auto-rows-fr md:h-full p-6 md:overflow-hidden">
        {/* box 1 */}
        <div className="relative md:col-span-3 md:row-span-3 rounded-xl h-[25vw] md:h-auto overflow-hidden bento-image-container">
          <Link
            href={items[0].link}
            className="absolute w-full h-full overflow-hidden"
          >
            <Image
              src={items[0].image}
              alt={items[0].name}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              className="absolute object-cover" // optional
            />
            <BadgeText text="Product" theme="light" />
          </Link>
        </div>
        {/* box 2 */}
        <div className="md:col-span-3 md:row-span-2 md:col-start-4 bg-gray-100 dark:bg-gray-950 rounded-xl h-[25vw] md:h-auto overflow-hidden">
          <div className="relative h-full overflow-hidden">
            <DateTimeComponent />
          </div>
        </div>
        {/* box 3 */}
        <div className="md:col-span-3 md:row-span-2 md:col-start-7 bg-gray-100 dark:bg-gray-950 rounded-xl h-[25vw] md:h-auto overflow-hidden">
          <div className="relative h-full overflow-hidden bento-image-container">
            <Link
              href="/product-detail/0"
              className="absolute w-full h-full overflow-hidden"
            >
              <Image
                src={items[2].image}
                alt={items[2].name}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                className="absolute object-cover" // optional
              />
            </Link>
            <BadgeText text="Product" theme="light" />
          </div>
        </div>
        {/* box 4 */}
        <div className="md:col-span-3 md:row-span-2 md:col-start-1 md:row-start-4 md:row-end-6 rounded-xl h-[25vw] md:h-auto bg-gray-100 dark:bg-gray-950 overflow-hidden">
          <div className="relative h-full overflow-hidden bento-image-container">
            <Link
              href="/gallery/0"
              className="absolute w-full h-full overflow-hidden"
            >
              <Image
                src={items[3].image}
                alt={items[3].name}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                className="absolute object-cover" // optional
              />
              <BadgeText text="Product" theme="light" />
            </Link>
          </div>
        </div>
        {/* box 5 */}
        <div className="bento-title-block md:col-span-6 md:row-span-3 md:col-start-4 md:row-start-3 bg-gray-100 dark:bg-gray-950 rounded-xl h-[25vw] md:h-auto overflow-hidden flex flex-col justify-center border border-transparent dark:border-white/5 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h1 className="bento-title p-8 md:p-10 text-3xl md:text-5xl font-light text-black dark:text-white tracking-tight relative z-10 leading-[1.1]">
            <span>{`Sergio Gabriel Fruto`}</span>
            <br /> <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-fuchsia-500">Product Engineer AI Oriented.</span>
            <br /> <span className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mt-4 block font-normal tracking-wide">10+ Years Building Scalable Products. <br/>Shipping AI-first applications with automated pipelines.</span>
          </h1>
          <span className="text-xl font-light text-white px-6">
            Building robust backends and beautiful interfaces.
          </span>
        </div>
        {/* Worked With row */}
        <div className="md:col-span-6 md:col-start-4 md:row-start-6 flex flex-row items-center justify-center gap-8 bg-gray-100 dark:bg-gray-950 rounded-xl h-[10vw] md:h-auto p-4 shadow-sm">
          <span className="text-sm text-gray-700 dark:text-gray-300 mr-2">Worked with:</span>
          <Image src="/my-work-assets/auth0-image-small.jpg" alt="Auth0" width={60} height={30} style={{objectFit: 'contain'}} />
          <Image src="/my-work-assets/scale01-image-small.jpg" alt="Scale" width={60} height={30} style={{objectFit: 'contain'}} />
          <Image src="/grid-assets/image-grid-auth0-logo.png" alt="MercadoLibre" width={60} height={30} style={{objectFit: 'contain'}} />
        </div>
        {/* box 6 */}
        <div className="md:col-span-6 md:row-span-3 md:col-start-1 md:row-start-6 overflow-hidden rounded-xl h-[25vw] md:h-auto bg-gray-100 dark:bg-gray-950">
          <div className="relative h-full bento-image-container overflow-hidden">
            <Link href="https://webgl-shaders-seven.vercel.app/" title="ThreeJS WebGL Demo: Custom shaders and 3D rendering">
              {/* <video
              src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
              loop={true}
              muted={true}
              autoPlay={true}
              playsInline={true}
            ></video> */}
              <Image
                src={items[5].image}
                alt={items[5].name}
                width={1890}
                height={898}
                style={{ backgroundSize: "cover", height: "100%" }}
                className="absolute object-cover" // optional
              ></Image>
              <BadgeText text="ThreeJS · Fullstack" theme="light" />
            </Link>
          </div>
        </div>
        {/* box 7 */}
        <div className="md:col-span-3 md:row-span-3 md:col-start-7 md:row-start-6 rounded-xl overflow-hidden h-[25vw] md:h-auto bg-[#c791e1]">
          <div className="relative h-full overflow-hidden bento-image-container">
            <Link
              href={items[4].link}
              className="absolute w-full h-full overflow-hidden"
              target="_blank"
              title="Decentraland Landing Page: React, Next.js, API integration"
            >
              <Image
                src={items[4].image}
                alt={items[4].name}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                className="absolute object-cover" // optional
              />
              <BadgeText text="Landing Page · Frontend" theme="light" />
            </Link>
          </div>
        </div>
        {/* box 8 */}
        <div className="md:row-span-1 md:col-start-10 md:row-start-1 relative bg-gray-100 dark:bg-gray-950 rounded-xl h-[25vw] md:h-auto overflow-hidden">
          <div className="absolute w-full h-full flex justify-center items-center">
            <Link href="https://github.com/sergiofruto" target="_blank">
              <BsGithub
                size="1.2rem"
                className="text-black dark:text-white"
              ></BsGithub>
            </Link>
          </div>
        </div>
        {/* box 9 */}
        <div className="md:row-span-1 md:col-start-11 md:row-start-1 relative bg-gray-100 dark:bg-gray-950 rounded-xl h-[25vw] md:h-auto overflow-hidden">
          <div className="absolute w-full h-full flex justify-center items-center">
            <Link
              href="https://www.linkedin.com/in/sergio-gabriel-fruto-41084645/"
              target="_blank"
            >
              <BsLinkedin
                size="1.2rem"
                className="text-black dark:text-white"
              ></BsLinkedin>
            </Link>
          </div>
        </div>
        {/* box 10 */}
        <div className="md:row-span-1 md:col-start-12 md:row-start-1 relative bg-gray-100 dark:bg-gray-950 rounded-xl h-[25vw] md:h-auto overflow-hidden">
          <div className="absolute w-full h-full flex justify-center items-center">
            <Link href="https://stackoverflow.com/users/5463321/sergio-gabriel-fruto">
              <BsStackOverflow
                size="1.2rem"
                className="text-black dark:text-white"
              ></BsStackOverflow>
            </Link>
          </div>
        </div>
        {/* box 11 */}
        <div className="md:col-span-3 md:row-span-2 md:col-start-10 md:row-start-2 rounded-xl overflow-hidden h-[25vw] md:h-auto bg-gray-100 dark:bg-gray-950">
          <BentoTextBlock
            title="Let's Connect"
            subtitle="Open to fullstack and frontend opportunities"
            link="mailto:fruto.sergio@gmail.com"
          />
        </div>
        {/* box 12 */}
        <div className="md:col-span-3 md:row-span-2 md:col-start-10 rounded-xl overflow-hidden h-[25vw] md:h-auto bg-gray-100 dark:bg-gray-950 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 pointer-events-none"></div>
          <BentoTextBlock
            title="Experience"
            subtitle="Scale AI, Mercado Libre, Auth0"
            link="/my-work"
          />
        </div>
        {/* box 13 */}
        <div className="md:col-span-3 md:row-span-2 md:col-start-10 rounded-xl overflow-hidden h-[25vw] md:h-auto bg-gray-100 dark:bg-gray-950 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 pointer-events-none"></div>
          <BentoTextBlock
            title="Skills & AI"
            subtitle="Copilot, Cursor, Modern Stack"
            link="/skills"
          />
        </div>
        {/* dark/light theme switch */}
        <div
          id="theme-switch"
          className={`cursor-pointer theme-switch bg-gray-100 dark:bg-gray-950 rounded-xl md:col-span-1 flex items-center justify-center`}
          onClick={toggleTheme}
        >
          <div className="switch-wrapper">
            {isDarkTheme ? (
              <IoSunnySharp size="1rem" className="dark:text-white " />
            ) : (
              <IoMoonSharp size="1rem" className="dark:text-white" />
            )}
          </div>
        </div>
        <div className="theme-switch bg-gray-100 dark:bg-gray-950 rounded-xl md:col-span-2 flex items-center justify-end px-4">
          <span className="text-xs text-black dark:text-white">
            Designed & built by Sergio Fruto. © {getYear()}.
          </span>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
