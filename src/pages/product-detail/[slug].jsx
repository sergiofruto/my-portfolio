import { useRouter } from "next/router";
import Image from "next/image";

const OnePlusLogo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 24">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M.998 3.75V24h20.25V12.438h-2.25v9.312H3.248V6h9.313V3.75H.998zM18.996 0v3.75h-3.75V6h3.75v3.75h2.25V6h3.75V3.75h-3.75V0h-2.25z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.56 18.75V8.875h-2c0 .68-.229 1.192-.576 1.496-.362.304-.911.441-1.548.441h-.25v1.626h2.124v6.312h2.25zm23.264-5.087c0-2.278-1.023-4.046-3.116-4.046s-3.163 1.768-3.163 4.046c0 2.263 1.07 4.031 3.163 4.031s3.116-1.768 3.116-4.03zm-8.642 0c0-3.41 2.14-5.942 5.511-5.942 3.372 0 5.496 2.533 5.496 5.942 0 3.41-2.124 5.927-5.496 5.927-3.37 0-5.511-2.517-5.511-5.927zm12.986-5.719h2.349l3.802 6.357c.367.62.798 1.593.798 1.593h.033s-.064-1.18-.064-1.976V7.944h2.284v11.39h-2.236l-3.899-6.292c-.367-.605-.814-1.577-.814-1.577h-.032s.064 1.195.064 1.991v5.879h-2.285V7.944zm11.836 0h8.403v1.943h-6.086v2.55h5.336v1.895H54.32v3.075h6.134v1.928h-8.451V7.944zm13.086 5.385h2.396c1.214 0 1.853-.67 1.853-1.705 0-1.067-.67-1.673-1.82-1.673h-2.43v3.378zm-2.4-5.385h5.017c1.326 0 2.316.382 2.987 1.068.64.653 1.023 1.545 1.023 2.596 0 2.15-1.422 3.6-3.818 3.6h-2.812v4.127h-2.396V7.945zm10.74 0h2.316v9.463h5.368v1.928H73.43V7.944zm8.912 7.726V7.945h2.317v7.727c0 1.178.59 2.007 2.14 2.007 1.47 0 2.157-.86 2.157-2.039V7.944h2.317v7.727c0 2.437-1.502 3.855-4.425 3.855-2.956 0-4.506-1.386-4.506-3.855zm10.56.144h2.269c.16 1.37.942 1.912 2.572 1.912 1.182 0 2.22-.414 2.22-1.466 0-1.115-1.085-1.338-2.827-1.736-2.045-.462-3.914-1.004-3.914-3.378 0-2.246 1.837-3.409 4.377-3.409 2.573 0 4.234 1.258 4.41 3.553h-2.221c-.128-1.148-1.022-1.721-2.205-1.721-1.246 0-2.06.526-2.06 1.338 0 .924.798 1.195 2.492 1.562 2.348.51 4.265 1.067 4.265 3.52 0 2.31-1.869 3.6-4.44 3.6-3.1 0-4.858-1.37-4.938-3.775z"
      />
    </svg>
  );
};

const Header = () => {
  return (
    <header class="text-black body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          class="flex title-font items-center text-gray-900 mb-4 md:mb-0"
          style={{ width: "120px" }}
        >
          <OnePlusLogo />
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center text-sm">
          <a class="mr-5 hover:text-gray-900">First Link</a>
          <a class="mr-5 hover:text-gray-900">Second Link</a>
          <a class="mr-5 hover:text-gray-900">Third Link</a>
          <a class="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
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

const ProductDetail = () => {
  return (
    <>
      <Header />
      <section class="py-20 font-poppins dark:bg-gray-800">
        <div class="max-w-6xl px-4 mx-auto">
          <div class="flex flex-wrap mb-24 -mx-4">
            <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div class="sticky top-0 z-50 overflow-hidden ">
                <div class="relative mb-6 lg:mb-10 ">
                  <a
                    class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      ></path>
                    </svg>
                  </a>
                  <Image
                    class="object-cover w-full lg:h-1/2"
                    src="/one-plus/oneplus-11-promo-2.webp"
                    alt=""
                    width={1200}
                    height={800}
                  />
                  <a
                    class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div class="flex-wrap hidden -mx-2 md:flex">
                  <div class="w-1/2 p-2 sm:w-1/4">
                    <a
                      class="block border border-transparent hover:border-blue-400"
                      href="#"
                    >
                      <Image
                        class="object-cover w-full lg:h-32"
                        src="/one-plus/oneplus-11-promo-3.webp"
                        alt=""
                        width={1200}
                        height={800}
                      />
                    </a>
                  </div>
                  <div class="w-1/2 p-2 sm:w-1/4">
                    <a
                      class="block border border-transparent hover:border-blue-400"
                      href="#"
                    >
                      <Image
                        class="object-cover w-full lg:h-32"
                        src="/one-plus/oneplus-11-promo-1.webp"
                        alt=""
                        width={1200}
                        height={800}
                      />
                    </a>
                  </div>
                  <div class="w-1/2 p-2 sm:w-1/4">
                    <a
                      class="block border border-transparent hover:border-blue-400"
                      href="#"
                    >
                      <Image
                        class="object-cover w-full lg:h-32"
                        src="/one-plus/oneplus-11-promo-2.webp"
                        alt=""
                        width={1200}
                        height={800}
                      />
                    </a>
                  </div>
                  <div class="w-1/2 p-2 sm:w-1/4">
                    <a
                      class="block border border-transparent hover:border-blue-400"
                      href="#"
                    >
                      <Image
                        class="object-cover w-full lg:h-32"
                        src="/one-plus/oneplus-11-promo-1.webp"
                        alt=""
                        width={1200}
                        height={800}
                      />
                    </a>
                  </div>
                </div>
                <div class="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400 ">
                  <div class="flex items-center justify-center mt-6">
                    <span class="mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="w-5 h-5 text-blue-700 dark:text-gray-400 bi bi-chat-left-dots-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                      </svg>
                    </span>
                    <div>
                      <h2 class="text-sm font-bold text-gray-700 lg:text-lg dark:text-gray-400">
                        Have question about buying an Oneplus
                      </h2>
                      <a
                        class="text-xs text-blue-400 lg:text-sm dark:text-blue-200"
                        href="#"
                      >
                        Chat with an Oneplus specialist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2">
              <div class="lg:pl-20">
                <div class="mb-6 ">
                  <span class="text-white py-1 px-2 bg-red-500 rounded text-sm">
                    New
                  </span>
                  <h2 class="max-w-xl mt-2 mb-4 text-5xl font-bold md:text-6xl font-heading dark:text-gray-300">
                    Buy One Plus 8 Pro
                  </h2>
                  <p class="max-w-md mb-4 text-gray-500 dark:text-gray-400">
                    Get $100-$500 off when you trade in an one plus 6 or newer.
                  </p>
                  <a
                    href="#"
                    class="text-blue-500 hover:underline dark:text-gray-400"
                  >
                    See how trade-in works
                  </a>
                </div>
                <div class="">
                  <p class="mb-4 text-lg font-semibold dark:text-gray-400">
                    Choose your finish
                  </p>
                  <div class="grid grid-cols-2 gap-4 pb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                    <div>
                      <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                        <div>
                          <div class="w-8 h-8 mx-auto mb-2 rounded-full bg-emerald-400"></div>
                          <p class="text-xs text-center text-gray-700 dark:text-gray-400">
                            Pearl Green
                          </p>
                        </div>
                      </button>
                    </div>
                    <div>
                      <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                        <div>
                          <div class="w-8 h-8 mx-auto mb-2 bg-gray-700 rounded-full dark:bg-gray-600"></div>
                          <p class="text-xs text-center text-gray-700 dark:text-gray-400">
                            Mattee Black
                          </p>
                        </div>
                      </button>
                    </div>
                    <div>
                      <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                        <div>
                          <div class="w-8 h-8 mx-auto mb-2 bg-red-500 rounded-full"></div>
                          <p class="text-xs text-center text-gray-700 dark:text-gray-400">
                            Red
                          </p>
                        </div>
                      </button>
                    </div>
                    <div>
                      <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                        <div>
                          <div class="w-8 h-8 mx-auto mb-2 rounded-full bg-stone-200"></div>
                          <p class="text-xs text-center text-gray-700 dark:text-gray-400">
                            Silver
                          </p>
                        </div>
                      </button>
                    </div>
                    <div>
                      <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                        <div>
                          <div class="w-8 h-8 mx-auto mb-2 bg-blue-200 rounded-full"></div>
                          <p class="text-xs text-center text-gray-700 dark:text-gray-400">
                            Sierra Blue
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mt-6">
                  <p class="mb-2 text-lg font-semibold dark:text-gray-400">
                    Choose your Capacity
                  </p>
                  <a
                    href="#"
                    class="text-blue-500 hover:underline dark:text-gray-400"
                  >
                    How much capacity is right for you?
                  </a>
                  <div class="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                    <div>
                      <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                        <div>
                          <div class="mb-2 font-semibold dark:text-gray-400">
                            128 <span class="text-xs">GB</span>
                          </div>
                          <p class="px-2 text-xs font-medium text-center text-gray-700 dark:text-gray-400">
                            From $99 0r $41.62/mo. for 24 mo.
                          </p>
                        </div>
                      </button>
                    </div>
                    <div>
                      <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                        <div>
                          <div class="mb-2 font-semibold dark:text-gray-400">
                            256 <span class="text-xs">GB</span>
                          </div>
                          <p class="px-2 text-xs font-medium text-center text-gray-700 dark:text-gray-400">
                            From $99 0r $41.62/mo. for 24 mo.
                          </p>
                        </div>
                      </button>
                    </div>
                    <div>
                      <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                        <div>
                          <div class="mb-2 font-semibold dark:text-gray-400">
                            512 <span class="text-xs">GB</span>
                          </div>
                          <p class="px-2 text-xs font-medium text-center text-gray-700 dark:text-gray-400">
                            From $99 0r $41.62/mo. for 24 mo.
                          </p>
                        </div>
                      </button>
                    </div>
                    <div>
                      <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                        <div>
                          <div class="mb-2 font-semibold dark:text-gray-400">
                            1 <span class="text-xs">GB</span>
                          </div>
                          <p class="px-2 text-xs font-medium text-center text-gray-700 dark:text-gray-400">
                            From $99 0r $41.62/mo. for 24 mo.
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mt-6">
                  <p class="mb-4 text-lg font-semibold dark:text-gray-400">
                    Choose a payment option
                  </p>
                  <div class="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                    <div>
                      <button class="flex items-center justify-center w-full h-full px-2 py-6 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                        <div>
                          <p class="px-2 text-base font-semibold text-center text-gray-700 dark:text-gray-400">
                            Pay in full
                          </p>
                        </div>
                      </button>
                    </div>
                    <div>
                      <button class="flex items-center justify-center w-full h-full px-2 py-6 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                        <div>
                          <p class="px-2 text-base font-semibold text-center text-gray-700 dark:text-gray-400">
                            Pay monthly
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mt-6 ">
                  <div class="flex flex-wrap items-center">
                    <span class="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="w-4 h-4 text-gray-700 dark:text-gray-400 bi bi-truck"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                      </svg>
                    </span>
                    <h2 class="text-lg font-bold text-gray-700 dark:text-gray-400">
                      Delivery
                    </h2>
                  </div>
                  <div class="px-7">
                    <p class="mb-2 text-sm dark:text-gray-400">In Stock</p>
                    <p class="mb-2 text-sm dark:text-gray-400">Free Shipping</p>
                    <a
                      class="mb-2 text-sm text-blue-400 dark:text-blue-200"
                      href="#"
                    >
                      Get delivery dates
                    </a>
                  </div>
                </div>
                <div class="mt-6 ">
                  <div class="flex flex-wrap items-center">
                    <span class="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="w-4 h-4 text-gray-700 dark:text-gray-400 bi bi-bag"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path>
                      </svg>
                    </span>
                    <h2 class="text-lg font-bold text-gray-700 dark:text-gray-400">
                      Pickup
                    </h2>
                  </div>
                  <div class="px-7">
                    <a
                      class="mb-2 text-sm text-blue-400 dark:text-blue-200"
                      href="#"
                    >
                      Check availability
                    </a>
                  </div>
                </div>
                <div class="mt-6 ">
                  <button class="w-full px-4 py-2 font-bold text-white bg-blue-400 lg:w-96 hover:bg-blue-500">
                    Continue
                  </button>
                </div>
                <div class="flex items-center mt-6 ">
                  <div>
                    <h2 class="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                      Still deciding?
                    </h2>
                    <p class="mb-2 text-sm dark:text-gray-400">
                      {" "}
                      Add this item to a list and easily come back to it later{" "}
                    </p>
                  </div>
                  <span class="ml-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-600 dark:hover:text-blue-300 bi bi-bookmark dark:text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
