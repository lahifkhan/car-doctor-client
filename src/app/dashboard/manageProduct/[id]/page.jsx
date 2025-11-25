import Image from "next/image";
import Link from "next/link";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:4000/products/${id}`, {
    cache: "no-store", // always fetch fresh data
  });

  if (!res.ok) throw new Error("Failed to fetch product");

  const product = await res.json();
  const {
    title,
    shortDescription,
    fullDescription,
    price,
    image,
    userEmail,
    createdAt,
  } = product;

  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-lg shadow-lg">
      {/* Product Image */}
      {image && (
        <div className="flex justify-center mb-6 bg-gray-200">
          <Image
            src={image}
            alt={title}
            width={300} // approximate intrinsic width
            height={300} // approximate intrinsic height
            className="rounded-lg border shadow-sm"
          />
        </div>
      )}

      {/* Product Info */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600">{shortDescription}</p>
        <p className="text-gray-700">{fullDescription}</p>
        <p className="text-xl font-semibold text-rose-500">Price: ${price}</p>
        <p className="text-sm text-gray-500">Added by: {userEmail}</p>
        <p className="text-sm text-gray-500">
          Created at: {new Date(createdAt).toLocaleString()}
        </p>

        {/* Actions */}
        <div className="flex gap-4 mt-6">
          <a href="/dashboard/manageProduct" className="btn btn-primary btn-sm">
            Back to Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
