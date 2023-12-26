import Image from "next/image";
import { Inter, Montserrat, Inconsolata, Open_Sans } from "next/font/google";
import BentoGrid from "@/components/BentoGrid";

const montserrat = Montserrat({ subsets: ["latin"] });
const incon = Inconsolata({ subsets: ["latin"] });
const open = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`md:h-screen ${open.className} bg-gray-900`}>
      <BentoGrid></BentoGrid>
    </main>
  );
}
