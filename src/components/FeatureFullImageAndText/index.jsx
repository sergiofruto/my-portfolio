const FeatureFullImageAndText = ({
  image,
  imagePlacement,
  bgColor,
  txtColor,
}) => {
  const isImageOnLeft = imagePlacement === "left";
  const bgColorClass = bgColor ? bgColor : "bg-black";
  const txtColorClass = txtColor ? txtColor : "text-white";

  return (
    <div className={`h-screen mx-auto flex flex-col lg:flex-row`}>
      <div
        className={`flex flex-col lg:flex-row items-center justify-center px-8 w-full lg:w-1/2 
        ${bgColorClass}
        ${isImageOnLeft ? "order-1" : "order-2"}`}
      >
        <div className="content flex flex-col items-center">
          <h2 className={`text-4xl font-thin mb-8 ${txtColorClass}`}>
            Feature Full Image and Text
          </h2>
          <p className={`text-sm font-thin mb-4 ${txtColorClass}`}>
            OD-11 is compatible with all music and connectivity services,
            including AirPlay 2, for multiroom and stereo pairing. Stream your
            favorite music at home, bring it on your holiday and listen offline
            in cabin mode. Connect any instrument, turntable, gaming console or
            TV, for a rich sound experience.
          </p>
          <button
            className={`pb-2 text-xl font-thin underline ${txtColorClass}`}
          >
            Buy this
          </button>
        </div>
      </div>
      <div
        className={`w-full lg:w-1/2 ${isImageOnLeft ? "order-2" : "order-1"}`}
      >
        <img src={image} alt="" className="h-full object-cover" />
      </div>
    </div>
  );
};

export default FeatureFullImageAndText;
