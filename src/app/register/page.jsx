"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const register = () => {
  const handleRegister = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const res = await fetch("http://localhost:4000/user", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.status === 200) {
      event.target.reset();
    }
  };
  return (
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
            Register
          </h6>
          <form onSubmit={handleRegister}>
            <label htmlFor="email">Name</label> <br />
            <input
              type="text"
              name="name"
              required
              placeholder="your name"
              className="mt-3 w-full input input-bordered"
            />
            <br /> <br />
            <label htmlFor="email">Email</label> <br />
            <input
              type="text"
              name="email"
              required
              placeholder="your email"
              className="mt-3 w-full input input-bordered"
            />
            <br /> <br />
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              name="password"
              required
              placeholder="your password"
              className="w-full mt-3 input input-bordered"
            />
            <br />
            <button
              type="submit"
              className="w-full btn btn-primary mt-12 text-lg"
            >
              Register
            </button>
          </form>
          <div>
            <h6 className="my-12 text-center">or sign in with</h6>

            <h6 className="my-12 text-center">
              Already have account ?{" "}
              <Link className="text-primary font-semibold" href={"/login"}>
                Log in
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
