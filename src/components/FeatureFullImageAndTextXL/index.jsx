import Image from "next/image";

const FeatureFullImageAndText = ({
  title,
  title2,
  description,
  bottom,
  image,
  imagePlacement,
  bgColor,
  textColor,
}) => {
  const isImageOnLeft = imagePlacement === "left";
  const bgColorClass = bgColor ? bgColor : "bg-white";
  const txtColorClass = `textColor` ? textColor : "text-black";

  return (
    <div className={`md:h-screen mx-auto flex flex-col lg:flex-row mb-4`}>
      <div
        className={`flex flex-col lg:flex-row px-4 md:px-8 w-full lg:w-1/2 
        ${bgColorClass}
        ${isImageOnLeft ? "order-1" : "order-2"}`}
      >
        <div className="content flex flex-col max-w-xl">
          <h2
            className={`text-4xl md:text-4xl lg:text-9xl font-bold mb-4 md:mb-8 tracking-wide ${txtColorClass}`}
          >
            {title}
            {title2 ? (
              <span style={{ color: `${textColor}` }}>
                <br />
                {`${title2}`}{" "}
              </span>
            ) : (
              ""
            )}
          </h2>
          <div className="mt-auto">
            <p className={`text-md font-bold mb-4 ${txtColorClass} mt-auto`}>
              {description}
            </p>
            {/* <button
              className={`pb-2 text-xl font-thin underline ${txtColorClass}`}
            >
              Buy this
            </button> */}
            <span
              className="text-md font-bold mb-4 mt-auto"
              style={{ color: `${textColor}` }}
            >
              {bottom}
            </span>
          </div>
        </div>
      </div>
      <div
        className={`w-full lg:w-1/2 p-4 md:p-2 ${
          isImageOnLeft ? "md:order-2" : "md:order-1"
        }`}
      >
        <Image
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-3xl"
          width="1920"
          height="1920"
        />
      </div>
    </div>
  );
};

export default FeatureFullImageAndText;
