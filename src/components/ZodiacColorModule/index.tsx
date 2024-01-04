import React from "react";

interface ZodiacSign {
  Sign: string;
  Colors: string[];
  Element: string;
  Planet: string;
}

interface ZodiacColorComponentProps {
  sign: ZodiacSign;
}

const ZodiacColorComponent: React.FC<ZodiacColorComponentProps> = ({
  sign,
}) => {
  // return (
  //   <div
  //     style={{
  //       width: "100%",
  //       backgroundColor: sign.Colors[0],
  //       padding: "20px",
  //       textAlign: "center",
  //     }}
  //   >
  //     <h2>{sign.Sign}</h2>
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "space-between",
  //         marginTop: "0px",
  //       }}
  //     >
  //       {sign.Colors.map((color, index) => (
  //         <div
  //           key={index}
  //           style={{ flex: 1, backgroundColor: color, height: "50px" }}
  //         ></div>
  //       ))}
  //     </div>
  //     {/* <p>
  //       Element: {sign.Element} | Planet: {sign.Planet}
  //     </p> */}
  //   </div>
  // );
  const combinedColors = sign.Colors.join(",");

  return (
    <div
      style={{
        width: "100%",
        background: `linear-gradient(90deg, ${combinedColors})`,
        padding: "20px",
        textAlign: "center",
        height: "100px",
      }}
    >
      <h2>{sign.Sign}</h2>
      {/* <p>
        Element: {sign.Element} | Planet: {sign.Planet}
      </p> */}
    </div>
  );
};

export default ZodiacColorComponent;
