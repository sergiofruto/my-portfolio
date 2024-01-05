import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";

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
    <a href={link} className="flex flex-col h-full justify-center p-6">
      <h2 className="text-xl mb-2 dark:text-white">{title}</h2>
      <span className="gap-2 items-center mb-2 dark:text-white flex">
        <p className={"text-md hidden md:flex"}>{subtitle}</p>
        <BsArrowUpRightCircle className={"w-6 dark:text-white"} />
      </span>
    </a>
  );
};
export default BentoTextBlock;
