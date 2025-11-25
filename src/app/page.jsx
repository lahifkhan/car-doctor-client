import Image from "next/image";
import Services from "../Components/Services";
import Banner from "@/Components/Banner";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
}
