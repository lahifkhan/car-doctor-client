"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import Link from "next/link";
import Swal from "sweetalert2";

const ManageProductsPage = () => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;

  const {
    data: products = [],
    refetch,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["userProducts", userEmail],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?userEmail=${userEmail}`,
        { cache: "no-store" }
      );

      if (!res.ok) throw new Error("Failed to fetch products");

      return res.json();
    },
  });

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
          {
            method: "DELETE",
          }
        );

        if (res.ok) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch(); // Refresh your product list
        } else {
          toast.error("Failed to delete.");
        }
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong.");
      }
    }
  };

  if (isPending)
    return <p className="text-center py-10 text-lg">Loading products...</p>;

  if (isError)
    return (
      <p className="text-center py-10 text-red-600">Failed to load products.</p>
    );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-primary text-center">
        Manage My Products
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-primary text-white">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Price</th>
              <th>Created</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr key={product._id} className="hover:bg-base-300">
                <th>{index + 1}</th>

                <td>{product.title}</td>

                <td>${product.price}</td>

                <td>{new Date(product.createdAt).toLocaleDateString()}</td>

                <td>{product.userEmail}</td>

                <td className="flex gap-4">
                  {/* 👁 View */}
                  <Link href={`/dashboard/manageProduct/${product._id}`}>
                    <FaEye className=" cursor-pointer" size={20} />
                  </Link>

                  {/* ✏ Edit */}
                  <FaEdit className=" cursor-pointer" size={20} />

                  {/* 🗑 Delete */}
                  <FaTrash
                    onClick={() => handleDelete(product._id)}
                    className=" cursor-pointer"
                    size={20}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {products.length === 0 && (
          <p className="text-center py-5 text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ManageProductsPage;
