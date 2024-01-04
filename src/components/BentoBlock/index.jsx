import React from "react";
import Container from "@/components/Container";
// import { ContactIcon } from "./Icons";
import { FadeIn } from "@/components/FadeIn";
// import Socials from "./Socials";

const images = [
  {
    src: "https://images.unsplash.com/photo-1627300008477-8b9b5b5e9b9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnRlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    alt: "placeholder",
  },
  {
    src: "https://images.unsplash.com/photo-1627300008477-8b9b5b5e9b9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnRlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    alt: "placeholder",
  },
];

function BentoBlock() {
  return (
    <Container id="home">
      <FadeIn>
        <div className="grid gap-x-2 gap-y-2 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">
          <div className="flex w-full max-w-[746px] flex-col items-start gap-x-8 gap-y-8 bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
            <img src="placeholder" alt="" />
            <h1 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em] text-6xl font-medium">
              sai pranay
              <br />
              frontend developer{" "}
              <span className="text-[#8a8a93]">
                {" "}
                who build things for the web.
              </span>
            </h1>
          </div>
          <div className="flex flex-col justify-between items-stretch gap-x-8 gap-y-8 bg-[#131315] text-center p-12 rounded-3xl max-md:p-8">
            <div className="flex flex-col justify-center items-center mb-8 gap-3 max-md:mb-4">
              {/* <ContactIcon className="w-[112px] h-[112px] flex-[0_0_auto]" /> */}
              <h2 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em] text-6xl">
                Have a project in mind?
              </h2>
            </div>
            <a
              href="mailto:saipranayadepu@gmail.com"
              className="min-h-[96px] bg-[#ff5e1a] transition-[background-color] duration-300 ease-[ease-out] text-[40px] leading-[48px] font-medium text-center tracking-[-0.01em] px-8 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-white"
            >
              hey@pranay.com
              {/* <span className=" animate-pulse">👋</span> */}
            </a>
          </div>
        </div>
      </FadeIn>
      <FadeIn>{/* <Socials /> */}</FadeIn>
      <FadeIn>
        <div className="flex w-full flex-col items-start gap-x-8 gap-y-8 bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
          <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em] text-5xl">
            I am a passionate full-stack developer with a love for frontend and
            design,I manage a 100k+ follower Instagram page where I share web
            development insights.{" "}
            <span className="text-[#8a8a93]">
              {" "}
              join me to explore my unique projects and creative solutions.
            </span>
          </h3>
        </div>
      </FadeIn>
      <div className="grid auto-rows-[192px] grid-cols-3 gap-4 py-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-3xl p-4 bg-[#131315]${
              i === 3 || i === 6 ? "col-span-2" : ""
            }`}
          ></div>
        ))}
      </div>
    </Container>
  );
}

export default BentoBlock;
