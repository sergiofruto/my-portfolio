import Link from "next/link";
import ConnectThreeHeader from "@/components/ConnectThreeHeader";

const LinkList = () => {
  const links = [
    {
      url: "https://sergiofruto.github.io/staggered-animation/",
      text: "Staggered Animation",
    },
    {
      url: "https://sergiofruto.github.io/flex-panel-gallery/",
      text: "Flex Panel Gallery",
    },
    {
      url: "https://sergiofruto.github.io/fancy-slider/",
      text: "Fancy Slider",
    },
  ];

  return (
    <div className="relative bg-black overflow-hidden w-screen">
      <div className="content container absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-5xl font-light mb-4 text-white text-center pb-10">
          Experiments
        </h2>
        <ul className=" text-white text-center">
          {links.map((link, index) => (
            <li key={index} className="mb-2">
              <Link href={link.url}>
                <span className="text-lg font-light hover:underline cursor-pointer">
                  {link.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ConnectThreeHeader />
    </div>
  );
};

export default LinkList;
