// import { open_sans } from "../../fonts/fonts";
import Image from "next/image";
import { useRouter } from "next/router";
import { images } from "../../../next.config";
import FeatureFullImageAndText from "../../components/FeatureFullImageAndTextXL";
import TechFeatures from "../../components/TechFeatures";
import HeroVideo from "../../components/HeroVideo";
import Link from "next/link";
import PdpFooter from "../../components/PdpFooter";

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
    <header>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl 2xl:max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/akuto-studio-logo.png"
              width="160"
              height="30"
              alt="Akuto Logo"
            />
          </Link>
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
                <Link
                  href="/"
                  class="block py-2 px-3 text-black md:hover:text-orange-600 rounded md:bg-transparent md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
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
        <FeatureFullImageAndText
          imagePlacement="right"
          image="https://akutostudio.com/media/site/7ef4952bc2-1682000609/akuto-render-keyboard-1400x-q90.webp"
          title="EASY"
          title2="CHORDS"
          description="SWITCH BETWEEN 3 DIFFERENT KEYBOARD MODES TO PLAY CHORDS AND MELODIES (TONNETZ, ACCORDION, PIANO)"
          bottom="FEATURE 1/3"
          textColor="#ff3500"
        />
        <FeatureFullImageAndText
          title="TOUCH"
          title2="& PLAY"
          imagePlacement="left"
          image="/grid-assets/AK01-02.jpeg"
          description="ADD DEPTH TO YOUR TRACK BY USING THE SCREEN TO MIX UP TO 4 MIDI EFFECTS SIMULTANEOUSLY AND PLAY NOTES IN DIRECT, BIMANUAL OR STRUM MODE"
          bottom="FEATURE 2/3"
          textColor="#ff3500"
        />
        <FeatureFullImageAndText
          title="TONE"
          title2="SHIFTER"
          description="USE THE ROTARY KNOB TO SEAMLESSLY NAVIGATE THROUGH SEMITONES, OCTAVES AND CONTROL THE PITCH TO TRANSPOSE ANY TYPE OF CHORD"
          imagePlacement="right"
          image="/grid-assets/AK01-03.jpeg"
          bgColor="bg-white"
          textColor="#ff3500"
          bottom="FEATURE 3/3"
        />
      </div>
      <PdpFooter />
    </>
  );
}
