// import { open_sans } from "../../fonts/fonts";
import { useRouter } from "next/router";
import { images } from "../../../next.config";
import FeatureFullImageAndText from "../../components/FeatureFullImageAndText";
import TechFeatures from "../../components/TechFeatures";
import HeroVideo from "../../components/HeroVideo";
import { DiCompass } from "react-icons/di";

const products = [
  {
    id: 0,
    name: "NIKE AIR FORCE 1 07 REC (W)",
    price: "USD99.00",
    colors: ["white", "black", "red"],
    description:
      "Debuting in 1982, the AF1 was the first basketball shoe to house Nike Air, revolutionizing the game while rapidly gaining traction around the world. Today, the Air Force 1 stays true to its roots with the same soft and springy cushioning that changed sneaker history. The radiance lives on in the Nike Air Force 1 ’07, the b-ball icon that puts a fresh spin on what you know best",
    images: [
      "https://cdn.shopify.com/s/files/1/0564/0398/4463/files/AURORA_DD8959-113_PHSRH000-2000.png?v=1695632655",
      "https://cdn.shopify.com/s/files/1/0564/0398/4463/files/AURORA_DD8959-113_PHSYD002-2000.png?v=1695632655",
      "https://cdn.shopify.com/s/files/1/0564/0398/4463/files/AURORA_DD8959-113_PHCFH001-2000.png?v=1695632654",
      "AK01-04.jpeg",
    ],
    backgroundColor: "bg-white",
    theme: "white",
  },
  {
    id: 1,
    name: "AKT-0.1",
    colors: ["white"],
    backgroundColor: "white",
    price: "USD 599.00",
    description: `The Akuto Chord Machine AKT-0.1 is a minimalist MIDI controller keyboard that makes it easy to play chords and tune melodies. You can connect it to your personal computer via USB and use it with any software that can receive MIDI inputs, such as DAWs (Digital Audio Workstations) or game engines. It might have similar characteristics, but it's not a synthesiser and therefore does not generate sounds by itself and does not have built-in speakers.

The design is exquisite. The keyboard features sleek circular buttons and a rotary knob that draws you in to interact with the device, and the screen has a clean UI design that allows you to mix up MIDI effects.`,
    images: [
      "/grid-assets/AK01-01.jpeg",
      "/grid-assets/AK01-02.jpeg",
      "/grid-assets/AK01-03.jpeg",
      "/grid-assets/akuto_render_11-03-04.jpeg",
    ],
    theme: "#ff3500",
  },
];

const Header = () => {
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl 2xl:max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/akuto-studio-logo.png" class="h-8" alt="Akuto Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default function IdPage() {
  const router = useRouter();
  const { slug } = router.query;
  const selectedProduct = products[slug] || products[0];

  return (
    <>
      <Header />
      <HeroVideo />
      <div className="">
        <section className="lg:min-h-screen">
          <div
            className={`photo-grid grid md:grid-cols-2 lg:grid-cols-4 gap-1`}
          >
            {selectedProduct.images.map((image) => (
              <div
                className={`${
                  selectedProduct.backgroundColor
                    ? selectedProduct.backgroundColor
                    : "bg-white"
                }`}
                key={`${selectedProduct.id}-${image} `}
              >
                <img src={image} alt="" className="w-full object-cover" />
              </div>
            ))}
            {/* <div className="photo-grid__item bg-slate-200"></div> */}
            {/* <div className="photo-grid__item bg-slate-200">
              <img
                src="https://cdn.shopify.com/s/files/1/0564/0398/4463/files/AURORA_DD8959-113_PHSRH000-2000.png?v=1695632655"
                alt=""
                className="w-full object-cover"
              />
            </div>
            <div className="photo-grid__item bg-slate-200">
              <img
                src="https://cdn.shopify.com/s/files/1/0564/0398/4463/files/AURORA_DD8959-113_PHSYD002-2000.png?v=1695632655"
                alt=""
                className="w-full object-cover"
              />
            </div>
            <div className="photo-grid__item bg-slate-200">
              <img
                src="https://cdn.shopify.com/s/files/1/0564/0398/4463/files/AURORA_DD8959-113_PHCTH001-2000.png?v=1695632655"
                alt=""
                className="w-full object-cover"
              />
            </div>
            <div className="photo-grid__item bg-slate-200">
              <img
                src="https://cdn.shopify.com/s/files/1/0564/0398/4463/files/AURORA_DD8959-113_PHCFH001-2000.png?v=1695632654"
                alt=""
                className="w-full object-cover"
              />
            </div> */}
          </div>
          <div className="flex-1 product-details py-4 lg:py-10 flex flex-col lg:grid lg:grid-cols-8 lg:grid-rows-2 lg:gap-2">
            <div className="product-details__headline col-span-4 row-span-2 px-4">
              <h1 className="text-5xl font-bold max-w-[90%] mt-0 mb-4">
                {selectedProduct.name}
              </h1>
              {selectedProduct.colors ? (
                <div className="flex flex-row mb-4">
                  {selectedProduct.colors.map((color) => (
                    <span className="font-thin" key={color}>
                      {color}
                    </span>
                  ))}
                </div>
              ) : (
                ""
              )}
              <TechFeatures></TechFeatures>
              {/* <p className="text-base"></p> */}
            </div>
            <div className="product-details__info px-4 py-4 lg:py-0 font-sans col-span-2 row-span-2 col-start-5">
              <h2 className="text-lg text-bold font-sans mb-4">
                {selectedProduct.price}
              </h2>
              <p className={`text-sm font-light`}>
                {selectedProduct.description}
              </p>
            </div>
            <div className="sticky font-sans col-span-2 row-span-2 col-start-7">
              <div className="flex flex-col px-4">
                <div className="relative mb-6 flex items-center after:w-[8px] after:h-[8px] after:border-black/70 after:border-b after:border-r after:transform after:rotate-45 after:absolute after:right-3">
                  <select
                    required
                    className="block w-full text-sm text-black/70 bg-white px-3 py-2 transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30"
                  >
                    <option value="" disabled selected>
                      Select an size
                    </option>
                    <option value="option-1">LG</option>
                    <option value="option-2">XL</option>
                    <option value="option-3">XXL</option>
                  </select>
                </div>
                {selectedProduct.theme ? (
                  <>
                    <button className="text-sm mb-6 bg-transparent hover:bg-white text-white hover:text-orange-700 py-2 px-4 border border-orange-600 hover:border-transparent rounded">
                      Add To Wishlist
                    </button>
                    <button className="text-sm mb-6 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded">
                      Add to Cart
                    </button>
                  </>
                ) : (
                  <>
                    <button className="text-sm mb-6 bg-transparent hover:bg-white text-white hover:text-blue-700 py-2 px-4 border border-blue-600 hover:border-transparent rounded">
                      Add To Wishlist
                    </button>
                    <button className="text-sm mb-6 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                      Add to Cart
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
        <FeatureFullImageAndText
          imagePlacement="right"
          image="https://akutostudio.com/media/site/7ef4952bc2-1682000609/akuto-render-keyboard-1400x-q90.webp"
          bgColor="bg-orange-600"
        />
        <FeatureFullImageAndText
          imagePlacement="left"
          image="/grid-assets/AK01-02.jpeg"
        />
        <FeatureFullImageAndText
          imagePlacement="right"
          image="/grid-assets/AK01-03.jpeg"
          bgColor="bg-white"
          txtColor="text-black"
        />
      </div>
      {/* <Footer></Footer> */}
      <footer class="text-white body-font bg-black">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <DiCompass size="2rem" />
              <span class="ml-3 text-xl">The Company</span>
            </a>
            <p class="mt-2 text-sm text-white font-light">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-light text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10 text-sm">
                <li>
                  <a class="text-white hover:text-gray-200 font-thin">
                    First Link
                  </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200 font-thin">
                    Second Link
                  </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200 font-thin">
                    Third Link
                  </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200 font-thin">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-light text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10 text-sm">
                <li>
                  <a class="text-white hover:text-gray-200 font-thin">
                    First Link
                  </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200 font-thin">
                    Second Link
                  </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200 font-thin">
                    Third Link
                  </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200 font-thin">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-light text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10 text-sm">
                <li>
                  <a class="text-white hover:text-gray-200 font-thin">
                    First Link
                  </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200 font-thin">
                    Second Link
                  </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200 font-thin">
                    Third Link
                  </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200 font-thin">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-light text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10 text-sm">
                <li>
                  <a class="text-white hover:text-gray-200 font-thin">
                    First Link
                  </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200 font-thin">
                    Second Link
                  </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200 font-thin">
                    Third Link
                  </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200 font-thin">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        {/* <div class="bg-gray-100">
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
        </div> */}
      </footer>
    </>
  );
}
