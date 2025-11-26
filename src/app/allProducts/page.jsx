"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { ScaleLoader } from "react-spinners";

const AllProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen w-full ">
        <ScaleLoader></ScaleLoader>
      </div>
    );

  if (error)
    return <p className="text-red-500 text-center">Failed to load products.</p>;

  // Filter products based on search query
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-11/12 mx-auto">
      {/* Page Title */}
      <div className="text-center my-10">
        <p className="text-primary font-bold text-xl">Products</p>

        <h1 className="text-3xl font-bold text-gray-800">
          Explore All Products
        </h1>
        <p className="text-gray-600 mt-2">
          Browse our entire collection of high-quality items. <br />
          Each product is added by verified users and includes detailed
          descriptions, photos, and pricing.
        </p>
      </div>

      {/* Search Input */}
      <div className="flex justify-between mb-6 ">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
        <div className="flex items-center gap-2">
          <MdCategory className="text-primary text-xl" />
          <select className="select select-bordered select-sm rounded-full">
            <option value="">Filter by price</option>
            <option value="Low to high"> Low to High</option>
            <option value="Low to high"> High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {filteredProducts.map((item) => (
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
      ) : (
        <p className="text-center mt-10 text-gray-500">
          No products found matching,{searchQuery}
        </p>
      )}
    </div>
  );
};

export default AllProductsPage;
