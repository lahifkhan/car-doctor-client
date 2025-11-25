"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const AllProductsPage = () => {
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    },
  });

  if (isLoading)
    return <p className="text-center mt-10">Loading products...</p>;

  if (error)
    return <p className="text-red-500 text-center">Failed to load products.</p>;

  return (
    <div>
      <div className="text-center w-11/12 mx-auto my-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Explore All Products
        </h1>
        <p className="text-gray-600 mt-2">
          Browse our entire collection of high-quality items. <br />
          Each product is added by verified users and includes detailed
          descriptions, photos, and pricing.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 w-11/12 mx-auto">
        {products.map((item) => (
          <div
            key={item._id}
            className="card card-compact bg-base-100 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <figure className="overflow-hidden h-[30vh]">
              <Image
                src={item.image}
                alt={item.title}
                width={640}
                height={240}
                className="object-cover w-full h-full"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="text-gray-600 text-sm">
                {item.shortDescription?.slice(0, 80)}...
              </p>

              <div className="card-actions justify-between items-center mt-2">
                <h6 className="text-primary font-semibold">
                  Price: ${item.price}
                </h6>
                <Link href={`/allProducts/${item._id}`}>
                  <FaArrowRightLong className="text-primary text-xl" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
