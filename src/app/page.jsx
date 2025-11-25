import Image from "next/image";
import Services from "../Components/Services";
import Banner from "@/Components/Banner";
import Contact from "@/Components/Contact";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
}
