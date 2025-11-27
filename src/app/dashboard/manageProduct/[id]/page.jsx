import Image from "next/image";
import Link from "next/link";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
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
        <div className="relative w-full h-64 md:h-96 mb-6 bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center"
          />
        </div>
      )}

      {/* Product Info */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-primary">{title}</h1>
        <p className="text-gray-600">{shortDescription}</p>
        <p className="text-gray-700">{fullDescription}</p>
        <p className="text-xl font-semibold text-primary">Price: ${price}</p>
        <p className="text-sm text-gray-500">Added by: {userEmail}</p>
        <p className="text-sm text-gray-500">
          Created at: {new Date(createdAt).toLocaleString()}
        </p>

        {/* Actions */}
        <div className="flex gap-4 mt-6">
          <Link
            href="/dashboard/manageProduct"
            className="btn btn-primary btn-sm"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
