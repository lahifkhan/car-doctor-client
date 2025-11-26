import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Services = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service`);
  const services = await res.json();
  console.log(services);
  return (
    <div className="w-11/12 mx-auto mt-12">
      <div className="text-center">
        <p className="text-primary font-bold text-xl">Service</p>
        <h2 className="text-3xl font-bold text-gray-800 ">Our Service Area</h2>
        <p className="text-gray-600 mt-2">
          We provide professional auto repair, maintenance, and diagnostic
          services to ensure your vehicle stays safe and <br /> performs at its
          best. From basic checkups to advanced repairs — we have got you
          covered
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="card card-compact bg-base-100 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <figure className="overflow-hidden h-[30vh]">
              <Image height={240} width={640} src={item.img} alt={item.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <div className="card-actions justify-between items-center">
                <h6 className="text-primary font-semibold">
                  Price : ${item.price}
                </h6>
                <Link href={`/services/${item._id}`}>
                  <FaArrowRightLong className="text-primary" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
