import Image from "next/image";
import Link from "next/link";
import React from "react";

const serviceDetails = async ({ params }) => {
  const p = await params;
  console.log(p);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service/${p.id}`);
  const services = await res.json();
  console.log(services);
  const { _id, title, description, img, price, facility } = services;

  return (
    <div className="w-11/12 mx-auto my-10">
      <div>
        <div className="relative  h-72">
          <Image
            className="absolute h-72 w-full left-0 top-0 object-cover"
            src={img}
            alt="service"
            width={1920}
            height={1080}
            style={{ width: "90vw" }}
          />
        </div>

        <div className="p-10 bg-gray-100">
          <h2 className="text-3xl font-bold text-primary">{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="my-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-6">
            {facility.map((item, index) => (
              <div
                className="bg-rose-100 p-4 border-t-4 border-t-rose-500 rounded-xl"
                key={index}
              >
                <h2 className="text-xl font-bold">{item?.name}</h2>
                <p>{item?.details}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gray-100">
            <Image
              className="w-full object-cover h-40"
              src={"/assets/images/checkout/checkout.png"}
              alt="checkout service"
              width={400}
              height={400}
            />
            <div className="flex my-4">
              <h2 className="text-xl font-bold ">Price: </h2>
              <p className="text-2xl text-rose-500"> ${price}</p>
            </div>

            <button className="bg-primary text-white px-3 py-2 rounded-lg mt-2 w-full">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default serviceDetails;
