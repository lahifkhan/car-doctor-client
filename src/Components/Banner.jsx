"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const banners = [
  {
    id: 1,
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages available, but the majority have suffered alteration in some form",
    image: "/assets/images/banner/1.jpg",
  },
  {
    id: 2,
    title: "Quality Car Repairs You Can Trust",
    description:
      "Professional mechanics with years of experience ensuring your car runs smoothly",
    image: "/assets/images/banner/2.jpg",
  },
  {
    id: 3,
    title: "Fast & Reliable Service",
    description:
      "We provide quick and reliable car maintenance without compromising quality",
    image: "/assets/images/banner/3.jpg",
  },
  {
    id: 4,
    title: "Your Car Deserves the Best",
    description:
      "High-quality service with affordable pricing for every car owner",
    image: "/assets/images/banner/4.jpg",
  },
];

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto mt-4">
      <div className="relative w-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-[500px] md:h-[500px] "
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative w-full h-full ">
                {/* Background Image */}
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="object-cover rounded-2xl"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

                {/* Text Content */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6 md:px-12">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {banner.title}
                  </h1>
                  <p className="text-sm md:text-lg mb-6">
                    {banner.description}
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <button className="btn btn-primary">Discover More</button>
                    <button className="btn btn-outline text-white hover:text-black">
                      Latest Project
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
