// import Image from "next/image";

// const FullPageHeroModule = ({ image, title, subtitle, paddingTop }) => {
//   const sectionStyle = {
//     backgroundImage: image ? `url(${image})` : "",
//     paddingTop: paddingTop ? `${paddingTop}` : "",
//     minHeight: "100vw",
//   };

//   return (
//     <section
//       className="w-full min-h-screen bg-top bg-cover bg-dunes bg-no-repeat"
//       style={sectionStyle}
//     >
//       <div>
//         <h1 className="text-center font-light text-4xl text-black py-6 px-2">
//           {title ? title : "Placeholder"}
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default FullPageHeroModule;

import Image from "next/image";

const FullPageHeroModule = ({
  image,
  title,
  subtitle,
  paddingTop,
  textColor,
}) => {
  const textColorClass = textColor ? textColor : "text-black";

  return (
    <section className="relative w-full min-h-screen">
      {image && (
        <Image
          src={image}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      )}
      <div
        className="absolute top-0 left-0 w-full h-full bg-dunes bg-no-repeat bg-cover"
        style={{ paddingTop: paddingTop ? `${paddingTop}` : "" }}
      >
        <div className="flex justify-center h-full">
          <h1
            className={`text-center font-light text-5xl text-black py-6 px-2 ${textColorClass}`}
          >
            {title ? title : "Placeholder"}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FullPageHeroModule;
