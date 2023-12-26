import Image from "next/image";
import { Montserrat } from "next/font/google";
import BentoGrid from "@/components/BentoGrid";
import Header from "@/components/Tesla/Header";
import FullpageVideoModule from "@/components/Tesla/FullpageVideoModule";
import FeatureModule from "@/components/Tesla/FeatureModule";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${montserrat.className} bg-gray-900 relative`}>
      <Header></Header>
      <FullpageVideoModule></FullpageVideoModule>
      <FeatureModule></FeatureModule>
    </main>
  );
}
