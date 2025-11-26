"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    review:
      "Amazing service! The car was handled professionally and returned spotless!",
    userName: "John Doe",
    user_email: "john@example.com",
    user_photoURL: "/assets/images/reviewer/1.png",
  },
  {
    id: 2,
    review: "Very friendly staff and excellent quality. Highly recommended!",
    userName: "Sarah Khan",
    user_email: "sarah@example.com",
    user_photoURL: "/assets/images/reviewer/2.png",
  },
  {
    id: 3,
    review: "Fast, reliable and affordable price. Will come again soon!",
    userName: "Michael Smith",
    user_email: "michael@example.com",
    user_photoURL: "/assets/images/reviewer/1.png",
  },
];

const ReviewSection = () => {
  return (
    <div className="my-24 w-11/12 mx-auto">
      <div className="text-center mb-10 space-y-3">
        <p className="text-primary font-bold text-xl">Testimonial</p>
        <h1 className="text-3xl font-bold text-gray-800">
          What Our Customers Say
        </h1>
        <p className="text-gray-600">
          Real experiences that show the quality of our service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 rounded-2xl shadow-md h-full flex flex-col"
          >
            <FaQuoteLeft className="text-4xl text-primary/50 mb-3" />

            <p className="text-gray-600 leading-relaxed mb-4">
              {review.review}
            </p>

            <div className="border-dashed border-t border-gray-300 my-4"></div>

            <div className="flex items-center gap-3 mt-auto">
              <Image
                src={review.user_photoURL}
                alt={review.userName}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />

              <div>
                <h3 className="font-bold text-primary text-lg">
                  {review.userName}
                </h3>
                <p className="text-sm text-gray-600">{review.user_email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
