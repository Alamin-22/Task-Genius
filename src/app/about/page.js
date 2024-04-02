"use client"
import React from 'react';
import Image from 'next/image';
import { FaDownload } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import MyPic from "@/assets/Image/my-pic.jpg"
import ReactRotatingText from 'react-rotating-text';

const AboutPage = () => {
    return (
        <div>
            <section>
                <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
                    <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
                        <div className="flex flex-col items-start gap-2">
                            <div className="badge badge-outline   text-gray-800 font-semibold py-2">
                                <div className="mr-1 h-2 w-2 rounded-full bg-green-600"></div>
                                <p className="text-sm">Available for work</p>
                            </div>
                            <p className="text-sm text-[#808080] sm:text-xl">
                                <ReactRotatingText items={["MERN Stack Web Developer", "Junior Web Developer", "Front End Web Developer"]} /></p>
                            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:mb-8 ">Md. Al Amin Mollik</h1>
                            <p className="text-sm text-[#808080] sm:text-xl">
                                A MERN Stack Web Developer skilled in HTML, CSS, and JavaScript, with a specialization in React and Next.js . Dedicated to
                                delivering top-tier, user-centric web solutions. Eager to tackle challenging roles & contributing to
                                innovative projects and advancing my career in web development.
                            </p>
                            <div className="mb-8 mt-8 h-px w-full bg-black"></div>

                            <div className="flex flex-col gap-4 font-semibold sm:flex-row">
                                <button className='btn text-white bg-[#4bb14bdc]  hover:bg-[#58d458] '>
                                    <HiOutlineMail className='text-xl' />
                                    Contact Email
                                </button>
                                <button className='btn btn-outline hover:bg-[#4bb14bdc]'>
                                    <FaDownload className='text-lg' />
                                    Download Resume
                                </button>
                            </div>
                        </div>
                        <div className="min-h-[530px] overflow-hidden  rounded-md ">
                            <Image src={MyPic} className='mx-auto' alt="Image of Md. Al Amin Mollik" priority={true} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;