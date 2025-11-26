import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-md w-[340px] h-[260px]">
            <Image
              src="/assets/images/about_us/person.jpg"
              alt="Professional Mechanic"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute bottom-[-35px] right-[-10] md:right-[-30px]  rounded-xl overflow-hidden shadow-xl w-[220px] h-[160px] bg-white">
            <Image
              src="/assets/images/about_us/parts.jpg"
              alt="Car Service Tools"
              width={250}
              height={180}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div>
          <p className="text-primary font-bold text-xl mb-2">About Us</p>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-4">
            We are qualified <br /> & experienced <br /> in car servicing
          </h2>

          <p className="text-gray-600 mb-4">
            We provide reliable and professional car servicing with a team of
            certified mechanics. From engine diagnostics to brake repairs, we
            ensure your vehicle gets the best care using advanced tools and
            modern servicing techniques.
          </p>

          <p className="text-gray-600 mb-6">
            Our goal is to keep your car running smoothly and safely. We follow
            a transparent process, explain every required service, and make sure
            you receive the highest quality maintenance.
          </p>

          <button className="btn btn-primary text-white px-6">
            Get More Info
          </button>
        </div>
      </div>
    </section>
  );
}
