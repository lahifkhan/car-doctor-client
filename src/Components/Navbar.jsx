"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data, status } = useSession();
  console.log({ data, status });

  const Links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/allProducts"}>All Products</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/patner"}>Partner</Link>
      </li>
      <li>
        <Link href={"/blog"}>Blog</Link>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm z-50  sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <Link href={"/"} className="text-xl">
          <Image
            src={"/assets/logo.svg"}
            width={70}
            height={80}
            alt="logo"
          ></Image>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end flex gap-3">
        {status == "authenticated" ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image
                    src={data.user.image || "/default-user.png"}
                    alt="User Avatar"
                    width={40}
                    height={40}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60"
              >
                <li className=" py-2">
                  <p className="font-semibold">{data.user.name}</p>
                  <p className="text-sm  text-gray-600">
                    {data.user.email.length > 25
                      ? data.user.email.slice(0, 25) + "..."
                      : data.user.email}
                  </p>
                </li>
                <li>
                  <Link href="/dashboard/addProduct">Add Product</Link>
                </li>
                <li>
                  <Link href="/dashboard/manageProduct">Manage Products</Link>
                </li>
                <li>
                  <button onClick={() => signOut()} className="text-red-500">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link href={"/login"} className="btn btn-outline">
              Log in
            </Link>
            <Link href={"/register"} className="btn btn-outline">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
