import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#151515] p-12 w-11/12 mx-auto mt-12 rounded-xl">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3  text-white">
        <div className="flex items-center gap-2">
          <div>
            <Image
              src={"/assets/images/contact/call.png"}
              alt="cellphone image"
              width={40}
              height={40}
            ></Image>
          </div>
          <div>
            <p>Have a question?</p>
            <p className="text-2xl font-bold">+2546 251 2658</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Image
              src={"/assets/images/contact/calender.png"}
              alt="calender image"
              width={40}
              height={40}
            ></Image>
          </div>
          <div>
            <p>We are open monday-friday</p>
            <p className="text-2xl font-bold">7:00 am - 9:00 pm</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Image
              src={"/assets/images/contact/location.png"}
              alt="location image"
              width={40}
              height={40}
            ></Image>
          </div>
          <div>
            <p>Need a repair? our address</p>
            <p className="text-2xl font-bold">Liza Street, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
