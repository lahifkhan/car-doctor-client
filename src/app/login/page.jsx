"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import toast from "react-hot-toast";

const login = () => {
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.error) {
      toast.error("Wrong email or password");
    } else {
      toast.success("successfully Login");
      window.location.href = "/";
    }
  };
  return (
    <div>
      <div className="container px-24 mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/assets/images/login/login.svg"
              height="540"
              width="540"
              alt="login image"
            />
          </div>
          <div className=" p-12">
            <h6 className="text-3xl font-semibold text-primary text-center mb-12">
              Log In
            </h6>
            <form onSubmit={handleLogin}>
              <label htmlFor="email">Email</label> <br />
              <input
                type="text"
                name="email"
                placeholder="your email"
                className="mt-3 w-full input input-bordered"
              />
              <br /> <br />
              <label htmlFor="password">Password</label> <br />
              <input
                type="password"
                name="password"
                placeholder="your password"
                className="w-full mt-3 input input-bordered"
              />
              <br />
              <button
                type="submit"
                className="w-full btn btn-primary mt-12 text-lg"
              >
                Log In
              </button>
            </form>
            <div>
              <h6 className="my-12 text-center">or Log in with</h6>

              <h6 className="my-12 text-center">
                not have account ?{" "}
                <Link className="text-primary font-semibold" href={"/register"}>
                  Register
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
