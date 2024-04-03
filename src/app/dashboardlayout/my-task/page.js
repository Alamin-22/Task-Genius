"use client"
import React from 'react';
import { HiArrowUturnLeft } from "react-icons/hi2";
import { HiArrowUturnRight } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { RiSoundModuleLine } from "react-icons/ri";
import { MdOutlineAddBox } from "react-icons/md";
import Image from 'next/image';
import useAuth from '@/Hook/useAuth';
import Avatar from "@/assets/Image/User_Avatar.png"
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CgSandClock } from "react-icons/cg";
import { MdOutlineDoneOutline } from "react-icons/md";
import moment from 'moment';


const MyTaskPage = () => {
    const { user } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const Task = form.get("Task");
        const Status = form.get("ToDo");
        const postedDate = moment().format("MMM Do, YY");


    };


    return (
        <div>
            {/* head section */}
            <div className='flex justify-between items-center gap-2'>
                <div className=''>
                    <h3 className='md:text-2xl font-semibold  ml-1 md:ml-3'> Tasks </h3>
                </div>
                <div className='flex  items-center gap-4'>
                    <div className='flex gap-4'>
                        <HiArrowUturnLeft className='md:text-lg font-medium  cursor-pointer hover:text-red-400 transition delay-200' />
                        <HiArrowUturnRight className='md:text-lg font-medium  cursor-pointer hover:text-red-400 transition delay-200' />
                        <FiUsers className='md:text-lg font-medium   ' />
                        <RiSoundModuleLine className='md:text-lg font-medium   ' />
                    </div>

                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className='btn  bg-[#3ac43aee] hover:bg-[#46ac46] text-white'>
                        New Task +
                    </button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click on ✕ button to close</p>
                        </div>
                    </dialog>
                </div>
            </div>
            {/* task section */}
            <section className=' grid lg:grid-cols-3 gap-4 px-2  '>
                <div className='col-span-1   py-3 px-2 '>
                    <div className='rounded-lg bg-blue-100 space-y-4 py-2 '>
                        <h5 className='md:text-xl font-medium flex items-center gap-3 px-3'><MdOutlineAddBox /> To do</h5>
                        <div className=''>
                            <div className="mx-2  px-2 py-4 bg-gray-200 rounded-lg shadow-md ">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between">

                                        <div className="flex items-center ">
                                            <Image className="object-cover w-10 h-10  rounded-full sm:block"
                                                src={user?.photoURL || Avatar} alt="avatar" width={40} height={40} />
                                            <span className="ml-2 text-sm font-light text-gray-600 ">Mar 10, 2019</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <TbEdit className='md:text-xl cursor-pointer hover:text-red-400 transition delay-200 text-gray-600' />
                                        <RiDeleteBin6Line className='md:text-xl cursor-pointer hover:text-red-400 transition delay-200 text-gray-600' />
                                        <button className='btn btn-xs btn-outline text-gray-600  hover:border-0 hover:bg-[#4bb14b] '>
                                            Next
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi</p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className="mx-2  px-2 py-4 bg-gray-200 rounded-lg shadow-md ">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between mt-1">

                                        <div className="flex items-center ">
                                            <Image className="object-cover w-10 h-10  rounded-full sm:block"
                                                src={user?.photoURL || Avatar} alt="avatar" width={40} height={40} />
                                            <span className="ml-2 text-sm font-light text-gray-600 ">Mar 10, 2019</span>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabIndex="0" role="button">Design</div>
                                </div>

                                <div className="mt-2">
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1   py-3 px-2 '>
                    <div className='rounded-lg bg-orange-100 space-y-4 py-2 '>
                        <h5 className='md:text-xl font-medium flex items-center gap-3 px-3'>
                            <CgSandClock /> In Progress
                        </h5>
                        <div className=''>
                            <div className="mx-2  px-2 py-4 bg-gray-200 rounded-lg shadow-md ">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between">

                                        <div className="flex items-center ">
                                            <Image className="object-cover w-10 h-10  rounded-full sm:block"
                                                src={user?.photoURL || Avatar} alt="avatar" width={40} height={40} />
                                            <span className="ml-2 text-sm font-light text-gray-600 ">Mar 10, 2019</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <TbEdit className='md:text-xl cursor-pointer hover:text-red-400 transition delay-200 text-gray-600' />
                                        <RiDeleteBin6Line className='md:text-xl cursor-pointer hover:text-red-400 transition delay-200 text-gray-600' />
                                        <button className='btn btn-xs btn-outline text-gray-600  hover:border-0 hover:bg-[#4bb14b] '>
                                            Done
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-span-1    py-3 px-2 '>
                    <div className='rounded-lg bg-green-100 space-y-4 py-2 '>
                        <h5 className='md:text-xl font-medium flex items-center gap-3 px-3'>
                            <MdOutlineDoneOutline /> Done
                        </h5>
                        <div className=''>
                            <div className="mx-2  px-2 py-4 bg-gray-200 rounded-lg shadow-md ">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between">

                                        <div className="flex items-center ">
                                            <Image className="object-cover w-10 h-10  rounded-full sm:block"
                                                src={user?.photoURL || Avatar} alt="avatar" width={40} height={40} />
                                            <span className="ml-2 text-sm font-light text-gray-600 ">Mar 10, 2019</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <TbEdit className='md:text-xl cursor-pointer hover:text-red-400 transition delay-200 text-gray-600' />
                                        <RiDeleteBin6Line className='md:text-xl cursor-pointer hover:text-red-400 transition delay-200 text-gray-600' />

                                    </div>
                                </div>

                                <div className="mt-2">
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div >
    );
};

export default MyTaskPage;