import Image from "next/image";
import Link from "next/link";

const Services = async () => {
  const res = await fetch("http://localhost:4000/service");
  const services = await res.json();
  console.log(services);
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Our Service Area</h2>
        <p className="text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {services.map((item, index) => (
          <div key={index} className="card card-compact bg-base-100 shadow-xl">
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
                  <button className="btn btn-primary">View Details</button>
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
