"use client";
import useAuth from "@/Hook/useAuth";
import SocialLogin from "@/components/SocialLogIn/SocialLogin";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { Login } = useAuth();
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        // login
        Login(email, password)
            .then((res) => {
                const user = res.user;
                // console.log(user);
                toast.success(`User Successfully Logged in`);
                router.push("/");
            })
            .catch((error) => {
                console.log(error);
                const message = error.message;
                toast.error(`Error!, ${message.slice(10, 50)}`);
            });
    };

    return (
        <div>
            <div className="relative ">
                <div className="">
                    <Image
                        src="https://i.ibb.co/7v0W2My/giftbox.jpg"
                        className="absolute inset-0 object-contain "
                        width={1280}
                        height={1280}
                        alt="Cover"
                        priority={true}
                    />

                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div className="relative bg-opacity-75 bg-deep-purple-accent-700">

                    <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className=" hidden md:block w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-[#f3f0f0] sm:text-4xl sm:leading-none ">
                                    Log In and Explore Your
                                    <br className="hidden md:block" />
                                    Ultimate Task Management Solution
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                                    At Task Genius, we understand the importance of efficient task management in achieving your goals and maximizing productivity. Our platform offers a comprehensive set of features designed to streamline your workflow and empower you to conquer your tasks with ease. Whether you&amp;re managing personal projects, collaborating with a team, or overseeing complex initiatives, Task Genius has everything you need to stay organized and focused.
                                </p>
                            </div>
                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <div className="bg-[#dfebdf] rounded-xl shadow-2xl p-7 sm:p-10">
                                    <div>
                                        <SocialLogin></SocialLogin>
                                    </div>
                                    <h3 className="mb-4 text-xl font-semibold text-center sm:mb-6 sm:text-2xl">
                                        Welcome Back!
                                    </h3>
                                    <form onSubmit={handleLogin}>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="email"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Email Address
                                            </label>
                                            <input
                                                placeholder="xyz@gmail.com"
                                                required
                                                type="email"
                                                className="input input-bordered input-primary w-full max-w-sm"
                                                id="email"
                                                name="email"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2 relative">
                                            <label
                                                htmlFor="password"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Password
                                            </label>
                                            <input
                                                placeholder="*******"
                                                required
                                                type={showPassword ? "text" : "password"}
                                                className="input input-bordered input-primary w-full max-w-sm"
                                                id="password"
                                                name="password"
                                            />
                                            <span
                                                className="absolute right-5 top-10  cursor-pointer"
                                                onClick={() => {
                                                    setShowPassword(!showPassword);
                                                }}
                                            >
                                                {showPassword ? <p>Show</p> : <p> Hide</p>}
                                            </span>
                                            <label className="label flex justify-end">
                                                <a
                                                    href="#"
                                                    className="text-sm hover:text-blue-600 transition duration-300 delay-100 cursor-pointer underline"
                                                >
                                                    Forgot password?
                                                </a>
                                            </label>
                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <button
                                                type="submit"
                                                className="btn bg-[#4bb14b] hover:bg-[#4bb14bdc] w-full text-white"
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <div>
                                            <p className="text-sm">
                                                {" "}
                                                Don&amp;t have an account?{" "}
                                                <span className="text-blue-500 font-semibold text-lg">
                                                    <Link href={"/singUp"}>SingUp</Link>
                                                </span>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
