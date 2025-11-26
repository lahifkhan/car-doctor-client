import Image from "next/image";
import React from "react";

const WhyChoseUs = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center space-y-3">
        <p className="text-primary font-bold text-xl">Core Features</p>
        <h1 className="text-3xl font-bold text-gray-800">Why Choose Us</h1>
        <p className="text-gray-600">
          Meet our expert team of certified mechanics and service specialists
          who work with dedication <br /> to keep your vehicle running at its
          best.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center my-6">
        <div className=" h-[156px] shadow-2xl flex justify-center items-center flex-col gap-1 hover:bg-primary hover:text-white rounded-2xl">
          <Image
            src={"/assets/icons/group.svg"}
            alt="group"
            width={75}
            height={53}
          ></Image>
          <p className="font-bold  hover:text-white">Expert Team</p>
        </div>
        <div className=" h-[156px] shadow-2xl flex justify-center items-center flex-col gap-1 hover:bg-primary hover:text-white rounded-2xl">
          <Image
            src={"/assets/icons/deliveryt.svg"}
            alt="group"
            width={75}
            height={53}
          ></Image>
          <p className="font-bold  hover:text-white">Timely Delivery</p>
        </div>
        <div className=" h-[156px] shadow-2xl flex justify-center items-center flex-col gap-1 hover:bg-primary hover:text-white rounded-2xl">
          <Image
            src={"/assets/icons/person.svg"}
            alt="group"
            width={55}
            height={13}
          ></Image>
          <p className="font-bold  hover:text-white">24/7 Support</p>
        </div>

        <div className=" h-[156px] shadow-2xl flex justify-center items-center flex-col gap-1 hover:bg-primary hover:text-white rounded-2xl">
          <Image
            src={"/assets/icons/check.svg"}
            alt="group"
            width={55}
            height={13}
          ></Image>
          <p className="font-bold  hover:text-white">100% Guranty</p>
        </div>
        <div className=" h-[156px] shadow-2xl flex justify-center items-center flex-col gap-1 hover:bg-primary hover:text-white rounded-2xl">
          <Image
            src={"/assets/icons/Wrench.svg"}
            alt="group"
            width={55}
            height={53}
          ></Image>
          <p className="font-bold  hover:text-white">Best Equipment</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;
