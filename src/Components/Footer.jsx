import Image from "next/image";
import React from "react";
import { FaGoogle, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#151515]  text-white p-10">
        <aside>
          <Image
            src={"/assets/logo.svg"}
            alt="car doctor logo"
            height={80}
            width={80}
          ></Image>
          <p className="text-2xl font-bold">Car Doctor</p>
          <p> Keeping your car healthy and reliable</p>
          <div className="flex gap-2 items-center">
            <FaGoogle size={20} />
            <FaXTwitter size={20} />
            <FaLinkedin size={20} />

            <BsInstagram size={20} />
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
