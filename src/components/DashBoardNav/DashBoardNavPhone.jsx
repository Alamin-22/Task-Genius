"use client"
import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import useAuth from '@/Hook/useAuth';
import Image from 'next/image';
import avatar from "@/assets/Image/User_Avatar.png";



const DashboardNavPhone = ({ links }) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const { user } = useAuth();
    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            {/* Drawer init and show button */}


            <button className=''
                onClick={toggleDrawer}>
                <MdKeyboardArrowRight className='text-4xl' />
            </button>


            {/* Drawer component */}
            <div
                id="drawer-navigation"
                className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    } bg-white w-64 dark:bg-gray-800`}
                tabIndex="-1"
                aria-labelledby="drawer-navigation-label"
            >
                <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
                    Menu
                </h5>
                <button
                    type="button"
                    onClick={toggleDrawer}
                    aria-controls="drawer-navigation"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="shadow-lg rounded-2xl dark:bg-gray-800 p-4">
                    <div className="flex-row gap-2 flex justify-center items-center">
                        <div className="flex-shrink-0">
                            {user?.photoURL ? (
                                <Image
                                    className="mx-auto object-cover rounded-full"
                                    src={user?.photoURL || avatar}
                                    alt={user?.displayName}
                                    width={64}
                                    height={64}
                                />
                            ) : (
                                <Image
                                    className="mx-auto object-cover rounded-full"
                                    src={avatar}
                                    alt={user?.displayName}
                                    width={64}
                                    height={64}
                                />
                            )}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-medium text-gray-600 dark:text-white">
                                {user?.displayName}
                            </span>
                        </div>
                    </div>
                </div>
                <nav>{links}</nav>
            </div>
        </>
    );
};

export default DashboardNavPhone;