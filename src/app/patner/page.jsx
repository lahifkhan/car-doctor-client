import Image from "next/image";
import { FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
export const metadata = {
  title: "Our Partners | Car Doctor",
  description:
    "Meet the brands and companies that collaborate with Car Doctor to deliver quality service and products.",
};

const partners = [
  { id: 1, name: "BMW", logo: "/assets/images/patner/bmw.png" },
  { id: 2, name: "Ferrari", logo: "/assets/images/patner/ferrari.png" },
  { id: 3, name: "Ford", logo: "/assets/images/patner/ford.png" },
  { id: 4, name: "Porsche", logo: "/assets/images/patner/porsche.png" },
  { id: 5, name: "Tesla", logo: "/assets/images/patner/tesla.png" },
];

const socialLinks = [
  { name: "Facebook", icon: <FaSquareFacebook size={22} /> },
  { name: "Instagram", icon: <FaInstagramSquare size={22} /> },
  { name: "Twitter", icon: <FaTwitter size={22} /> },
];

export default function OurPartners() {
  return (
    <section className="py-16 bg-white">
      <div className="w-11/12  mx-auto px-4 text-center">
        <p className="text-primary font-bold text-xl">Partner</p>

        <h2 className="text-3xl font-semibold text-gray-800 uppercase ">
          Our Trusted Partners
        </h2>
        <div className="w-28 mx-auto h-1 bg-primary mt-2 mb-12 rounded"></div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 justify-center items-center">
          {partners.map((brand) => (
            <div
              key={brand.id}
              className="w-32 h-32 flex items-center justify-center border border-primary rounded-xl hover:shadow-xl transition bg-white"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={90}
                height={90}
                className="object-contain opacity-80 group-hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>

        <h3 className="text-sm font-medium tracking-wider uppercase text-gray-600 mt-20 mb-6">
          Follow Us on Social Media
        </h3>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 border border-primary px-6 py-2 rounded-full cursor-pointer hover:bg-gray-50 transition"
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
