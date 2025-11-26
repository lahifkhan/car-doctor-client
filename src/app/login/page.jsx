"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      toast.error("Wrong email or password");
    } else {
      toast.success("Successfully Logged In");
      window.location.assign("/");
    }
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <div>
      <div className="container w-11/12 mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/assets/images/login/login.svg"
              height="540"
              width="540"
              alt="login image"
            />
          </div>

          <div className="md:p-12">
            <h6 className="text-3xl font-semibold text-primary text-center mb-12">
              Log In
            </h6>

            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Email</label>
              <input
                type="text"
                className="mt-3 w-full input input-bordered"
                placeholder="your email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
              <br /> <br />
              <label>Password</label>
              <input
                type="password"
                className="mt-3 w-full input input-bordered"
                placeholder="your password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
              <button
                type="submit"
                className="w-full btn btn-primary mt-12 text-lg"
              >
                Log In
              </button>
            </form>

            <div>
              <h6 className="my-12 text-center">or Log in with</h6>
              <div className="flex justify-center">
                <button
                  onClick={handleGoogleLogin}
                  className="btn bg-white text-black border-[#e5e5e5] w-full"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </div>

              <h6 className="my-12 text-center">
                Not have an account?{" "}
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

export default Login;
