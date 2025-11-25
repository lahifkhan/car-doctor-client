import Image from "next/image";
import React from "react";

const MeatOurTeam = () => {
  return (
    <div className="w-11/12 mx-auto my-12">
      <div className="text-center space-y-3">
        <p className="text-primary font-bold text-xl">Team</p>
        <h1 className="text-3xl font-bold text-gray-800">Meet Our Team</h1>
        <p className="text-gray-600">
          Meet our expert team of certified mechanics and service specialists
          who work with dedication <br /> to keep your vehicle running at its
          best.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        <div className="card bg-base-100 shadow-sm rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <figure className="h-[40vh] bg-base-200 flex items-center justify-center overflow-hidden ">
            <div className="w-full h-full rounded-t-xl overflow-hidden">
              <Image
                src="/assets/images/team/1.jpg"
                alt="person image"
                width={640}
                height={540}
                className="object-cover w-full h-full"
              />
            </div>
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl text-[#444444]">
              Car Engine Plug
            </h2>
            <p className="text-[#737373] text-xl">Engine Expert</p>
            <div className="flex justify-center items-center gap-3">
              <Image
                src={"/assets/icons/social/1.png"}
                alt="facebook"
                height={40}
                width={40}
              ></Image>
              <Image
                src={"/assets/icons/social/2.png"}
                alt="facebook"
                height={40}
                width={40}
              ></Image>
              <Image
                src={"/assets/icons/social/3.png"}
                alt="facebook"
                height={40}
                width={40}
              ></Image>
              <Image
                src={"/assets/icons/social/4.png"}
                alt="facebook"
                height={40}
                width={40}
              ></Image>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <figure className="h-[40vh] bg-base-200 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full rounded-t-xl overflow-hidden">
              <Image
                src="/assets/images/team/2.jpg"
                alt="person image"
                width={640}
                height={540}
                className="object-cover w-full h-full"
              />
            </div>
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl text-[#444444]">
              Car Engine Plug
            </h2>
            <p className="text-[#737373] text-xl">Engine Expert</p>

            <div className="flex justify-center items-center gap-3">
              <Image
                src={"/assets/icons/social/1.png"}
                alt="facebook"
                height={40}
                width={40}
              ></Image>
              <Image
                src={"/assets/icons/social/2.png"}
                alt="facebook"
                height={40}
                width={40}
              ></Image>
              <Image
                src={"/assets/icons/social/3.png"}
                alt="facebook"
                height={40}
                width={40}
              ></Image>
              <Image
                src={"/assets/icons/social/4.png"}
                alt="facebook"
                height={40}
                width={40}
              ></Image>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <figure className="h-[40vh] bg-base-200 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full rounded-t-xl overflow-hidden">
              <Image
                src="/assets/images/team/3.jpg"
                alt="person image"
                width={640}
                height={540}
                className="object-cover w-full h-full"
              />
            </div>
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl text-[#444444]">
              Car Engine Plug
            </h2>
            <p className="text-[#737373] text-xl">Engine Expert</p>

            <div className="flex justify-center items-center gap-3">
              <Image
                src={"/assets/icons/social/1.png"}
                alt="facebook"
                height={40}
                width={40}
              ></Image>
              <Image
                src={"/assets/icons/social/2.png"}
                alt="facebook"
                height={40}
                width={40}
              ></Image>
              <Image
                src={"/assets/icons/social/3.png"}
                alt="facebook"
                height={40}
                width={40}
              ></Image>
              <Image
                src={"/assets/icons/social/4.png"}
                alt="facebook"
                height={40}
                width={40}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeatOurTeam;
