import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

interface BentoTextBlockProps {
  link: string;
  title: string;
  subtitle: string;
}

const BentoTextBlock: React.FC<BentoTextBlockProps> = ({
  link,
  title,
  subtitle,
}) => {
  return (
    <a href={link} className="flex flex-col h-full justify-center p-5">
      <h2 className="text-lg font-light mb-2 dark:text-white">{title}</h2>
      <span className="gap-2 items-center mb-2 dark:text-white inline-flex">
        <p className={"text-sm hidden md:flex items-center font-light"}>
          {subtitle}
          <GoChevronRight
            className="ml-1"
            style={{ transform: "translateY(1px)" }}
          />
        </p>
      </span>
    </a>
  );
};
export default BentoTextBlock;
