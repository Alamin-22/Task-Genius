"use client";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import useAuth from "@/Hook/useAuth";

const SingUpPage = () => {
    const { CreateUser, UpdateProfile } = useAuth();

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);


    const handleSingUp = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const displayName = form.get("FullName");
        const email = form.get("email");
        const password = form.get("password");
        const ConfirmPassword = form.get("ConfirmPassword");

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!0-9]).{8,}$/;

        if (!passwordRegex.test(password)) {
            toast.error(
                "Password should be at least 8 characters long and include a combination of uppercase letters, lowercase letters, special characters, and numbers."
            );
            return;
        }

        // Confirm password
        if (password !== ConfirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        const UserInfo = { displayName, email, password, }
        // console.log(UserInfo);

        CreateUser(email, password)
            .then((result) => {
                // Signed up
                const user = result.user;

                // console.log(user);

                UpdateProfile(displayName)
                    .then(() => {
                        // save data to the server
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const message = error.message;
                toast.error(`Error!, ${message.slice(10, 50)}`);
                console.log(errorCode, message);
                // ..
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
                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <div className="bg-[#dfebdf] rounded-xl shadow-2xl p-7 sm:p-10">
                                    <div>
                                        {/* <SocialLogin></SocialLogin> */}
                                    </div>
                                    <h3 className="mb-4 text-xl font-semibold text-center sm:mb-6 sm:text-2xl">
                                        Sing Up Now!
                                    </h3>
                                    <form onSubmit={handleSingUp}>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="FullName"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                placeholder="Your Full Name here..."
                                                required
                                                type="text"
                                                className="input input-bordered input-primary w-full max-w-sm"
                                                id="FullName"
                                                name="FullName"
                                            />
                                        </div>
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
                                        </div>
                                        <div className="mb-1 sm:mb-2 relative">
                                            <label
                                                htmlFor="ConfirmPassword"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Confirm Password
                                            </label>
                                            <input
                                                placeholder="Re-Type your password here..."
                                                required
                                                type={showPassword2 ? "text" : "password"}
                                                className="input input-bordered input-primary w-full max-w-sm"
                                                id="ConfirmPassword"
                                                name="ConfirmPassword"
                                            />
                                            <span
                                                className="absolute right-5 top-10  cursor-pointer"
                                                onClick={() => {
                                                    setShowPassword2(!showPassword2);
                                                }}
                                            >
                                                {showPassword2 ? <p>Show</p> : <p> Hide</p>}
                                            </span>
                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <button
                                                type="submit"
                                                className="btn bg-[#4bb14b] hover:bg-[#4bb14bdc] w-full text-white"
                                            >
                                                SingUp
                                            </button>
                                        </div>
                                        <div>
                                            <p className="text-sm">
                                                {" "}
                                                Already have a account?{" "}
                                                <span className="text-blue-500 font-semibold text-lg">
                                                    <Link href={"/singIn"}>LogIn </Link>
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

export default SingUpPage;
