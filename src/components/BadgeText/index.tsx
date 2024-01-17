import React from "react";

interface BadgeAnimatedGradientBorderProps {
  text: string;
  theme: "light" | "dark";
}

const BadgeAnimatedGradientBorder: React.FC<
  BadgeAnimatedGradientBorderProps
> = ({ text, theme }) => {
  return (
    <span className="absolute bottom-4 right-4 inline-block overflow-hidden rounded-full p-[1px]">
      <span className="absolute inset-[-150%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-light text-white backdrop-blur-3xl">
        {text}
      </div>
    </span>
  );
};

export default BadgeAnimatedGradientBorder;
