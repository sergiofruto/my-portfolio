// import { open_sans } from "../../fonts/fonts";
import { useRouter } from "next/router";
import { images } from "../../../next.config";
import FeatureFullImageAndText from "../../components/FeatureFullImageAndText";
import TechFeatures from "../../components/TechFeatures";

const products = [
  {
    id: 0,
    name: "NIKE AIR FORCE 1 07 REC (W)",
    price: "USD99.00",
    colors: ["white", "black", "red"],
    description:
      "Debuting in 1982, the AF1 was the first basketball shoe to house Nike Air, revolutionizing the game while rapidly gaining traction around the world. Today, the Air Force 1 stays true to its roots with the same soft and springy cushioning that changed sneaker history. The radiance lives on in the Nike Air Force 1 ’07, the b-ball icon that puts a fresh spin on what you know best",
    images: ["AK01-01.jpeg", "AK01-02.jpeg", "AK01-03.jpeg", "AK01-04.jpeg"],
    theme: "#",
  },
  {
    id: 1,
    name: "AKT-0.1",
    colors: ["white"],
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

export default function IdPage() {
  const router = useRouter();
  const { slug } = router.query;
  const selectedProduct = products[slug] || products[0];

  return (
    <>
      <div className="">
        <section className="lg:h-screen">
          <div className="photo-grid grid md:grid-cols-2 lg:grid-cols-4 gap-1">
            {selectedProduct.images.map((image) => (
              <div key={`${selectedProduct.id}-${image} `}>
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
          <div className="flex-1 product-details pt-10 pb-0 flex flex-col lg:grid lg:grid-cols-8 lg:grid-rows-2 lg:gap-2">
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
              <p className={`text-sm font-thin`}>
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
    </>
  );
}
