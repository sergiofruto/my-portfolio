import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import ImageModuleWFull from "../../components/ImageModuleWfull";
import TechSpecsModule from "../../components/TechSpecsModule";
import CentralTextModule from "../../components/CentralTextModule";

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

const Header = () => {
  const logoUrl = "https://example.com/minimalist-icon.png";
  return (
    <header class="text-white body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            id="logo-88"
            width="30"
            height="31"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="ccustom"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.7146 0.516113C11.4582 0.516113 9.2943 1.41245 7.69881 3.00794L0 10.7067V14.2307C0 16.7204 1.06944 18.9603 2.77401 20.5161C1.06944 22.0719 0 24.3118 0 26.8015V30.3255L7.69881 38.0243C9.2943 39.6198 11.4582 40.5161 13.7146 40.5161C16.2043 40.5161 18.4442 39.4467 20 37.7421C21.5558 39.4467 23.7957 40.5161 26.2854 40.5161C28.5418 40.5161 30.7057 39.6198 32.3012 38.0243L40 30.3255V26.8015C40 24.3118 38.9306 22.0719 37.226 20.5161C38.9306 18.9603 40 16.7204 40 14.2307V10.7067L32.3012 3.00794C30.7057 1.41245 28.5418 0.516113 26.2854 0.516113C23.7957 0.516113 21.5558 1.58555 20 3.29012C18.4442 1.58555 16.2043 0.516113 13.7146 0.516113ZM25.7588 20.5161C25.6629 20.4286 25.5688 20.3387 25.4766 20.2465L20 14.7699L14.5234 20.2465C14.4312 20.3387 14.3371 20.4286 14.2412 20.5161C14.3371 20.6036 14.4312 20.6935 14.5234 20.7857L20 26.2623L25.4766 20.7857C25.5688 20.6935 25.6629 20.6036 25.7588 20.5161ZM22.2222 30.3255L22.2222 32.0085C22.2222 34.2525 24.0414 36.0717 26.2854 36.0717C27.363 36.0717 28.3965 35.6436 29.1585 34.8816L35.5556 28.4845V26.8015C35.5556 24.5575 33.7364 22.7383 31.4924 22.7383C30.4148 22.7383 29.3813 23.1664 28.6193 23.9284L22.2222 30.3255ZM17.7778 30.3255L11.3807 23.9284C10.6187 23.1664 9.58524 22.7383 8.50762 22.7383C6.26359 22.7383 4.44444 24.5575 4.44444 26.8015V28.4845L10.8415 34.8816C11.6035 35.6436 12.637 36.0717 13.7146 36.0717C15.9586 36.0717 17.7778 34.2525 17.7778 32.0085V30.3255ZM17.7778 9.02373V10.7067L11.3807 17.1038C10.6187 17.8658 9.58524 18.2939 8.50762 18.2939C6.26359 18.2939 4.44444 16.4747 4.44444 14.2307V12.5477L10.8415 6.15063C11.6035 5.38864 12.637 4.96056 13.7146 4.96056C15.9586 4.96056 17.7778 6.7797 17.7778 9.02373ZM28.6193 17.1038L22.2222 10.7067L22.2222 9.02373C22.2222 6.7797 24.0414 4.96056 26.2854 4.96056C27.363 4.96056 28.3965 5.38864 29.1585 6.15063L35.5556 12.5477V14.2307C35.5556 16.4747 33.7364 18.2939 31.4924 18.2939C30.4148 18.2939 29.3813 17.8658 28.6193 17.1038Z"
              fill="#FF630B"
            ></path>
          </svg>
          <span class="ml-3 text-xl text-white">The Brand</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-sm font-thin justify-center">
          <a class="mr-5 hover:text-gray-900">First Link</a>
          <a class="mr-5 hover:text-gray-900">Second Link</a>
          <a class="mr-5 hover:text-gray-900">Third Link</a>
          <a class="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <button class="inline-flex items-center bg-orange-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

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
      <Header></Header>
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
      <TechSpecsModule></TechSpecsModule>
      {/* <Footer></Footer> */}
    </main>
  );
};

export default Gallery;
