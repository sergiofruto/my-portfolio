const FullpageVideoModule = () => {
  return (
    <section className="body-font">
      <div className="relative flex justify-center h-screen mb-12 overflow-hidden">
        <div className="relative z-30 mt-28 flex flex-col">
          <h1 className="text-4xl text-center mb-3 font-medium">
            Solar Panels for Your Home
          </h1>
          <p className="text-md text-center font-medium">
            Lowest Cost Solar Panels in America
          </p>
          <div className="flex flex-wrap md:space-y-0 space-y-6 mt-auto">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="">
                <h2 className="text-white text-md font-medium mb-3">
                  Guaranteed Lowest Price in America
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="">
                <h2 className="text-white text-md font-medium mb-3">
                  Integrated Product Ecosystem
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="">
                <h2 className="text-white text-md font-medium mb-3">Neptune</h2>
              </div>
            </div>
          </div>
          <div className="flex">
            <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-sm">
              Order Now
            </button>
            <button className="flex mx-auto text-white bg-transparent border-spacing-1 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-sm">
              Learn More
            </button>
          </div>
        </div>
        {/* <div className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"></div> */}
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/solar-panels-hero-video-desktop.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default FullpageVideoModule;
