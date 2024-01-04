const PhotoGrid = () => {
  return (
    <section className="lg:min-h-screen">
      <div className={`photo-grid grid md:grid-cols-2 lg:grid-cols-4 gap-1`}>
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
          <p className={`text-sm font-light`}>{selectedProduct.description}</p>
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
  );
};

export default PhotoGrid;
