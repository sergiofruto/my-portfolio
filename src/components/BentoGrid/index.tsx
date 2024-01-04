import Image from "next/image";
import Link from "next/link";
import DateTimeComponent from "@/components/DateTimeComponent";
import {
  BsGithub,
  BsStackOverflow,
  BsLinkedin,
  BsArrowUpRightCircle,
} from "react-icons/bs";

import BentoTextBlock from "../BentoTextBlock";

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
    image: "/grid-assets/image-grid-phone.png",
    link: "https://www.analog.com/en/index.html",
  },
  {
    name: "Speaker",
    image: "/grid-assets/od11-4colors.jpeg",
    link: "https://www.analog.com/en/index.html",
  },
  {
    name: "Shoe",
    image: "/grid-assets/image-grid-shoe.webp",
    link: "/pdp/0",
  },
  {
    name: "Morph",
    image: "/grid-assets/morph-app.png",
    link: "https://www.analog.com/en/index.html",
  },
  {
    name: "Auth0",
    image: "/grid-assets/image-grid-auth0-card.png",
    link: "www.auth0.com",
  },
];

const BentoGrid = () => {
  return (
    <div className="dark grid grid-cols-2 md:grid-cols-12 md:grid-rows-8 gap-4 auto-rows-fr md:h-full p-6 md:overflow-hidden">
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
        </Link>
      </div>
      {/* box 2 */}
      <div className="md:col-span-3 md:row-span-2 md:col-start-4 bg-gray-950 rounded-xl h-[25vw] md:h-auto overflow-hidden">
        <div className="relative h-full overflow-hidden">
          <DateTimeComponent />
        </div>
      </div>
      {/* box 3 */}
      <div className="md:col-span-3 md:row-span-2 md:col-start-7 bg-gray-950 rounded-xl h-[25vw] md:h-auto overflow-hidden">
        <div className="relative h-full overflow-hidden bento-image-container">
          <Image
            src={items[2].image}
            alt={items[2].name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            className="absolute object-cover" // optional
          ></Image>
        </div>
      </div>
      {/* box 4 */}
      <div className="md:col-span-3 md:row-span-2 md:col-start-1 md:row-start-4 md:row-end-6 rounded-xl h-[25vw] md:h-auto bg-gray-950 overflow-hidden">
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
          </Link>
        </div>
      </div>
      {/* box 5 */}
      <div className="md:col-span-6 md:row-span-3 md:col-start-4 md:row-start-3 bg-gray-950 rounded-xl h-[25vw] md:h-auto overflow-hidden">
        <h1 className="p-6 text-4xl font-light dark:text-white tracking-wide">
          <span>{`Hi, I'm Sergio.`}</span>
          <br /> <span className="font-normal">Frontend Engineer.</span>
          <br /> CSS Lover. UI Developer.
        </h1>
      </div>
      {/* box 6 */}
      <div className="md:col-span-6 md:row-span-3 md:col-start-1 md:row-start-6 overflow-hidden rounded-xl h-[25vw] md:h-auto bg-gray-950">
        <div className="relative h-full bento-image-container overflow-hidden frosted-glass">
          {/* <Image
            // src={items[6].image}
            src={
              "https://assets-global.website-files.com/642bdda66b413ffbd3f47383/657487928e33e5e91347e07c_neon-icon01.png"
            }
            alt={items[6].name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%", transform: "scaleX(-1)" }}
            className="absolute object-cover" // optional
          ></Image> */}
          <Link href="https://webgl-shaders-seven.vercel.app/">
            <video
              src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
              loop={true}
              muted={true}
              autoPlay={true}
              playsInline={true}
            ></video>
          </Link>
        </div>
      </div>
      {/* box 7 */}
      <div className="md:col-span-3 md:row-span-3 md:col-start-7 md:row-start-6 rounded-xl overflow-hidden h-[25vw] md:h-auto bg-[#c791e1]">
        <div className="relative h-full overflow-hidden bento-image-container">
          <Link
            href={items[4].link}
            className="absolute w-full h-full overflow-hidden"
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
          </Link>
        </div>
      </div>
      {/* box 8 */}
      <div className="md:row-span-2 md:col-start-10 md:row-start-1 relative bg-gray-950 rounded-xl h-[25vw] md:h-auto overflow-hidden">
        <div className="absolute w-full h-full flex justify-center items-center">
          <Link href="https://github.com/sergiofruto" target="_blank">
            <BsGithub size="1.2rem" color="white"></BsGithub>
          </Link>
        </div>
      </div>
      {/* box 9 */}
      <div className="md:row-span-2 md:col-start-11 md:row-start-1 relative bg-gray-950 rounded-xl h-[25vw] md:h-auto overflow-hidden">
        <div className="absolute w-full h-full flex justify-center items-center">
          <Link
            href="https://www.linkedin.com/in/sergio-gabriel-fruto-41084645/"
            target="_blank"
          >
            <BsLinkedin size="1.2rem" color="white"></BsLinkedin>
          </Link>
        </div>
      </div>
      {/* box 10 */}
      <div className="md:row-span-2 md:col-start-12 md:row-start-1 relative bg-gray-950 rounded-xl h-[25vw] md:h-auto overflow-hidden">
        <div className="absolute w-full h-full flex justify-center items-center">
          <Link href="https://stackoverflow.com/users/5463321/sergio-gabriel-fruto">
            <BsStackOverflow size="1.2rem" color="white"></BsStackOverflow>
          </Link>
        </div>
      </div>
      {/* box 11 */}
      <div className="md:col-span-3 md:row-span-2 md:col-start-10 md:row-start-3 rounded-xl overflow-hidden h-[25vw] md:h-auto bg-gray-950">
        <BentoTextBlock
          title="Get in touch"
          subtitle="Currently available for hire"
          link="/contact"
        />
      </div>
      {/* box 12 */}
      <div className="md:col-span-3 md:row-span-2 md:col-start-10 md:row-start-5 rounded-xl overflow-hidden h-[25vw] md:h-auto bg-gray-950">
        <BentoTextBlock
          title="Examples"
          subtitle="Collection of layout examples"
          link="/examples"
        />
      </div>
      {/* box 13 */}
      <div className="md:col-span-3 md:row-span-2 md:col-start-10 md:row-start-7 rounded-xl overflow-hidden h-[25vw] md:h-auto bg-gray-950">
        <BentoTextBlock
          title="Experiments"
          subtitle="Testing some tech here"
          link="/experiments"
        />
      </div>
    </div>
  );
};

export default BentoGrid;
