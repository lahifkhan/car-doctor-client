import Image from "next/image";
import Services from "../Components/Services";
import Banner from "@/Components/Banner";
import Contact from "@/Components/Contact";
import MeatOurTeam from "@/Components/MeatOurTeam";
import WhyChoseUs from "@/Components/WhyChoseUs";
import ReviewSection from "@/Components/CustomerReview";

export const metadata = {
  title: "Car Doctor - Home",
  description: "Car service, products, and repair booking platform.",
};

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Contact></Contact>
      <MeatOurTeam></MeatOurTeam>
      <WhyChoseUs></WhyChoseUs>
      <ReviewSection></ReviewSection>
    </div>
  );
}
