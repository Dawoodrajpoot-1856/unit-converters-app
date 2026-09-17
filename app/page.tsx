import Accordion from "@/components/Home/Accordian";
import ChooseConverts from "@/components/Home/ChooseConverts";
import Hero from "@/components/Home/Hero";
import PopularConverters from "@/components/Home/PopularConverters";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <Hero/>
      <ChooseConverts />
      <Accordion />
    </main>
  );
}
