import Image from "next/image";

const ImageModuleWFull = ({ imageUrl }) => {
  return (
    <div className="flex w-full relative">
      {/* <Image
        src={imageUrl}
        alt="Picture of the author"
        fill
        style={{
          objectFit: "contain",
        }}
      /> */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt="image component"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default ImageModuleWFull;
