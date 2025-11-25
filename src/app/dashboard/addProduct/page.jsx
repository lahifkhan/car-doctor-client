"use client";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

const AddProductPage = () => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const newProduct = {
      ...data,
      createdAt: new Date(),
      userEmail: session.user.email,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (res.ok) {
        toast.success("Product added successfully!");
        setTimeout(() => {
          window.location.href = "/dashboard/manageProduct";
        }, 2000);

        reset();
      } else {
        toast.error("Something went wrong.");
      }
    } catch (err) {
      toast.error("Failed to add product");
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="card bg-base-100 w-full  shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center mb-6 text-primary">
            Add Product for Sale
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset space-y-4">
              {/* Title */}
              <div>
                <label className="label text-black mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Product title"
                  className="input w-full"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
              </div>

              {/* Short Description */}
              <div>
                <label className="label text-black mb-2">
                  Short Description
                </label>
                <input
                  type="text"
                  placeholder="Short description"
                  className="input w-full"
                  {...register("shortDescription", {
                    required: "Short description is required",
                  })}
                />
                {errors.shortDescription && (
                  <p className="text-red-500 text-sm">
                    {errors.shortDescription.message}
                  </p>
                )}
              </div>

              {/* Full Description */}
              <div>
                <label className="label text-black mb-2">
                  Full Description
                </label>
                <textarea
                  placeholder="Full description"
                  className="textarea w-full"
                  {...register("fullDescription", {
                    required: "Full description is required",
                  })}
                ></textarea>
                {errors.fullDescription && (
                  <p className="text-red-500 text-sm">
                    {errors.fullDescription.message}
                  </p>
                )}
              </div>

              {/* Price */}
              <div>
                <label className="label text-black mb-2">Price</label>
                <input
                  type="number"
                  placeholder="Enter price"
                  className="input w-full"
                  {...register("price", { required: "Price is required" })}
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price.message}</p>
                )}
              </div>

              {/* Optional Image URL */}
              <div>
                <label className="label text-black mb-2">Image URL</label>
                <input
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  className="input w-full"
                  {...register("image", { required: "Image URL is required" })}
                />
                {errors.image && (
                  <p className="text-red-500 text-sm">{errors.image.message}</p>
                )}
              </div>

              {/* Submit */}
              <button className="btn btn-primary mt-4 w-full" type="submit">
                Add Product
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
