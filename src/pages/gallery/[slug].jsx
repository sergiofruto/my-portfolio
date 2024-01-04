import { useRouter } from "next/router";
import Link from "next/link";
import HeaderVariant from "../../components/HeaderVariant";
import Image from "next/image";
import ImageModuleWFull from "../../components/ImageModuleWfull";
import TechSpecsModule from "../../components/TechSpecsModule";
import CentralTextModule from "../../components/CentralTextModule";
import FullPageHeroModule from "../../components/FullPageHeroModule";

const products = [
  {
    title: "OD-11 Speaker",
    subtitle: "999 USD",
    body: "Wireless loudspeaker made to play all your music, from any device. The unmistakably warm and relaxed Carlsson sound has returned. Pair two or more together for wireless stereo.",
    images: [
      "https://images.prismic.io/teenageengineering/82d95d47-e511-4407-a439-30822f28c28a_1x1-OD-11-black-front-2.png?auto=compress&w=4096&h=1",
      "https://images.prismic.io/teenageengineering/07d93c44-5907-4027-8099-ecb8beec7c95_OD-11_black_closeup.jpg?auto=compress&w=4096&h=1",
      "https://images.prismic.io/teenageengineering/30f14dec-4ff1-4c12-bf73-c4003a1bd363_1x1-OD-11-white-top.png?auto=compress&w=4096&h=1",
      "https://images.prismic.io/teenageengineering/58edadfb-23cd-4717-84f7-8108affdbe7c_1x1-OD-11-noshell-front-1.png?auto=compress&w=4096&h=1",
      "https://images.prismic.io/teenageengineering/c57c5da2-e873-400f-bf4a-263c33962283_1x1-OD-11-white-room.png?auto=compress&w=4096&h=1",
      "https://images.prismic.io/teenageengineering/dbdd7c29-a934-44a5-9868-d57d9e0cb2ff_1x1-ortho-remote-detail.jpg?auto=compress&w=4096&h=1",
    ],
  },
  {
    title: "Smartphone X",
    subtitle: "799 USD",
    body: "The latest smartphone with an AI-powered camera, a high-resolution display, and fast processing speed. Capture your moments with exceptional clarity.",
    images: [
      "https://source.unsplash.com/800x600/?smartphone",
      "https://source.unsplash.com/800x600/?technology",
      "https://source.unsplash.com/800x600/?gadgets",
      "https://source.unsplash.com/800x600/?mobile",
      "https://source.unsplash.com/800x600/?electronics",
      "https://source.unsplash.com/800x600/?screen",
    ],
  },
  {
    title: "Ultra HD TV",
    subtitle: "1499 USD",
    body: "Immerse yourself in stunning visuals with our Ultra HD TV. Experience vibrant colors, sharp contrast, and a cinema-like viewing experience in the comfort of your home.",
    images: [
      "https://source.unsplash.com/800x600/?tv",
      "https://source.unsplash.com/800x600/?television",
      "https://source.unsplash.com/800x600/?homeentertainment",
      "https://source.unsplash.com/800x600/?4k",
      "https://source.unsplash.com/800x600/?livingroom",
      "https://source.unsplash.com/800x600/?electronics",
    ],
  },
  {
    title: "Smartwatch Pro",
    subtitle: "299 USD",
    body: "Stay connected and track your fitness with our Smartwatch Pro. Featuring a sleek design, advanced health monitoring, and long-lasting battery life.",
    images: [
      "https://source.unsplash.com/800x600/?smartwatch",
      "https://source.unsplash.com/800x600/?wearable",
      "https://source.unsplash.com/800x600/?technology",
      "https://source.unsplash.com/800x600/?gadgets",
      "https://source.unsplash.com/800x600/?fitness",
      "https://source.unsplash.com/800x600/?health",
    ],
  },
  {
    title: "Gaming Laptop",
    subtitle: "1999 USD",
    body: "Take your gaming experience to the next level with our high-performance Gaming Laptop. Featuring a powerful GPU, high refresh rate display, and customizable RGB lighting.",
    images: [
      "https://source.unsplash.com/800x600/?gaminglaptop",
      "https://source.unsplash.com/800x600/?gaming",
      "https://source.unsplash.com/800x600/?technology",
      "https://source.unsplash.com/800x600/?laptop",
      "https://source.unsplash.com/800x600/?electronics",
      "https://source.unsplash.com/800x600/?gamer",
    ],
  },
  {
    title: "Wireless Earbuds",
    subtitle: "129 USD",
    body: "Enjoy wireless freedom with our premium Wireless Earbuds. With noise-canceling technology and a comfortable fit, immerse yourself in your favorite music without distractions.",
    images: [
      "https://source.unsplash.com/800x600/?earbuds",
      "https://source.unsplash.com/800x600/?audio",
      "https://source.unsplash.com/800x600/?technology",
      "https://source.unsplash.com/800x600/?gadgets",
      "https://source.unsplash.com/800x600/?music",
      "https://source.unsplash.com/800x600/?wireless",
    ],
  },
];

const Footer = () => {
  return (
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
          <p class="mt-2 text-sm text-gray-500">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
            © 2020 Tailblocks —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              class="text-gray-600 ml-1"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

const Gallery = () => {
  const router = useRouter();
  const { slug } = router.query;
  const selectedProduct = products[slug] || products[0];

  return (
    <main>
      <HeaderVariant bgColor="bg-transparent" fontWeight="font-light" />
      <FullPageHeroModule
        image={
          "https://teenage.engineering/_img/57c69be2d8866f0300aa1a92_4096.jpg"
        }
        title={"experience the warm and natural carlsson sound."}
        paddingTop="48px"
        textColor="text-white"
      />
      <section className="text-white body-font bg-black">
        <div className="container px-5 pt-20 pb-4 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-5xl text-2xl title-font text-white lg:w-1/3 lg:mb-0 mb-4 font-thin">
              {selectedProduct.title}
              <br />
              {selectedProduct.subtitle}
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base font-thin">
              {selectedProduct.body}
            </p>
          </div>
          <div className="w-full block h-2 my-1"></div>
          <div className="flex flex-wrap w-full">
            {selectedProduct.images.map((image, index) => (
              <div key={index} className="md:w-1/2 w-full p-2">
                <Image
                  alt={`gallery-${index}`}
                  className="w-full h-full object-cover object-center block"
                  src={image}
                  width={800}
                  height={600}
                />
              </div>
            ))}
          </div>
          {/* <div className="w-full block h-2 my-1"></div> */}
        </div>
        <CentralTextModule></CentralTextModule>
        <ImageModuleWFull
          imageUrl={
            "https://teenage.engineering/_img/548f02e73512d502006312a0_4096.jpg"
          }
        />
      </section>
      <TechSpecsModule backgroundColor="bg-black" textColor="text-white" />
      {/* <Footer></Footer> */}
    </main>
  );
};

export default Gallery;
