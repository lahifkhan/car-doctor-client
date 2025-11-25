"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:4000/user", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });

    if (res.status === 200) {
      toast.success("Successfully registered");
      window.location.assign("/");
      reset();
    } else {
      toast.error("Something went wrong");
    }
  };

  const handleGoogleLogin = async () => {
    const res = await signIn("google", { callbackUrl: "/" });
    console.log(res);
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

        <div className="p-12">
          <h6 className="text-3xl font-semibold text-primary text-center mb-12">
            Register
          </h6>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input
              type="text"
              className="mt-3 w-full input input-bordered"
              placeholder="Your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
            <br />

            <label>Email</label>
            <input
              type="email"
              className="mt-3 w-full input input-bordered"
              placeholder="Your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            <br />

            <label>Profile Image URL</label>
            <input
              type="text"
              className="mt-3 w-full input input-bordered"
              placeholder="Image URL"
              {...register("image", { required: "Image URL is required" })}
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
            <br />

            <label>Password</label>
            <input
              type="password"
              className="mt-3 w-full input input-bordered"
              placeholder="Your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <br />

            <button className="w-full btn btn-primary mt-12 text-lg">
              Register
            </button>
          </form>

          <div>
            <h6 className="my-12 text-center">or sign in with</h6>

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
              Already have an account?{" "}
              <Link href={"/login"} className="text-primary font-semibold">
                Log in
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
