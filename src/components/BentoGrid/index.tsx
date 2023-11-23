import Image from "next/image";
import Link from "next/link";

import {
  BsGithub,
  BsStackOverflow,
  BsLinkedin,
  BsArrowUpRightCircle,
} from "react-icons/bs";

import BentoTextBlock from "../BentoTextBlock";

const items = [
  {
    name: "Analog Device",
    image: "/grid-assets/image-grid-analog.png",
    link: "https://www.analog.com/en/index.html",
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
    image: "/grid-assets/te-ab.png",
    link: "https://www.analog.com/en/index.html",
  },
  {
    name: "Shoe",
    image: "/grid-assets/image-grid-shoe.webp",
    link: "https://www.analog.com/en/index.html",
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
    <div className="grid grid-cols-12 grid-rows-7 gap-4 h-full p-6 rounded-xl overflow-hidden">
      <div className="col-span-3 row-span-3">
        <div className="relative h-full overflow-hidden">
          <Image
            src={items[0].image}
            alt={items[0].name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="absolute" // optional
          ></Image>
        </div>
      </div>
      <div className="col-span-3 row-span-2 col-start-4 bg-gray-950 rounded-xl overflow-hidden">
        <div className="relative h-full overflow-hidden">
          <Image
            src={items[1].image}
            alt={items[1].name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="absolute object-cover" // optional
          ></Image>
        </div>
      </div>
      <div className="col-span-3 row-span-2 col-start-7 bg-gray-950 rounded-xl overflow-hidden">
        <div className="relative h-full overflow-hidden">
          <Image
            src={items[2].image}
            alt={items[2].name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="absolute object-cover" // optional
          ></Image>
        </div>
      </div>
      <div className="col-span-3 col-start-1 row-start-4 rounded-xl overflow-hidden">
        <div className="relative h-full overflow-hidden">
          <Image
            src={items[3].image}
            alt={items[3].name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="absolute object-cover" // optional
          ></Image>
        </div>
      </div>
      <div className="col-span-6 row-span-2 col-start-4 row-start-3 bg-gray-950 rounded-xl overflow-hidden">
        <h1 className="p-6 text-xl">{`Hi, I'm Sergio -- Frontend Engineer. CSS Lover. UI Developer.`}</h1>
      </div>
      <div className="col-span-6 row-span-3 col-start-1 row-start-5">
        <div className="relative h-full overflow-hidden">
          <Image
            src={items[6].image}
            alt={items[6].name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="absolute object-cover" // optional
          ></Image>
        </div>
      </div>
      <div className="col-span-3 row-span-3 col-start-7 row-start-5 rounded-xl overflow-hidden">
        <div className="relative h-full overflow-hidden">
          <Image
            src={items[4].image}
            alt={items[4].name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="absolute object-cover" // optional
          ></Image>
        </div>
      </div>
      <div className="col-start-10 row-start-1 relative bg-gray-950 rounded-xl overflow-hidden">
        <div className="absolute w-full h-full flex justify-center items-center">
          <Link href="https://github.com/sergiofruto" target="_blank">
            <BsGithub size="1.2rem" color="var(--txt-color)"></BsGithub>
          </Link>
        </div>
      </div>
      <div className="col-start-11 row-start-1 relative bg-gray-950 rounded-xl overflow-hidden">
        <div className="absolute w-full h-full flex justify-center items-center">
          <Link
            href="https://www.linkedin.com/in/sergio-gabriel-fruto-41084645/"
            target="_blank"
          >
            <BsLinkedin size="1.2rem" color="var(--txt-color)"></BsLinkedin>
          </Link>
        </div>
      </div>
      <div className="col-start-12 row-start-1 relative bg-gray-950 rounded-xl overflow-hidden">
        <div className="absolute w-full h-full flex justify-center items-center">
          <Link href="https://stackoverflow.com/users/5463321/sergio-gabriel-fruto">
            <BsStackOverflow
              size="1.2rem"
              color="var(--txt-color)"
            ></BsStackOverflow>
          </Link>
        </div>
      </div>
      <div className="col-span-3 row-span-2 col-start-10 row-start-2 rounded-xl overflow-hidden bg-gray-950">
        <BentoTextBlock
          title="Get in touch"
          subtitle="Currently available for hire"
          link="/contact"
        />
      </div>
      <div className="col-span-3 row-span-2 col-start-10 row-start-4 rounded-xl overflow-hidden bg-gray-950">
        <BentoTextBlock
          title="Examples"
          subtitle="Collection of layout examples"
          link="/examples"
        />
      </div>
      <div className="col-span-3 row-span-2 col-start-10 row-start-6 rounded-xl overflow-hidden bg-gray-950">
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
