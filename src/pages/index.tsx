import Image from "next/image";
import { Inter } from "next/font/google";
import BentoGrid from "@/components/BentoGrid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`h-screen ${inter.className} bg-gray-900`}>
      <BentoGrid></BentoGrid>
    </main>
  );
}
