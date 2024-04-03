"use client"
import useAuth from '@/Hook/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Avatar from "@/assets/Image/User_Avatar.png"
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const router = useRouter();


    const links = <>
        <li className='font-medium text-gray-600'><Link href={"/"}> Home </Link></li>
        <li className='font-medium text-gray-600'><Link href={"/about"}> About </Link></li>
        <li className='font-medium text-gray-600' ><Link href={"/dashboardlayout/my-task"}> Dashboard </Link></li>
        <div className='md:hidden '>
            {
                user && <li className='font-medium text-gray-600 ' ><Link href={"/dashboardlayout/my-task"}>My Task</Link></li>
            }
            {
                user && <li className='font-medium text-gray-600 ' ><Link href={"/dashboardlayout/completedTask"}>
                    Completed Task </Link></li>
            }
        </div>
    </>
    const handleLogout = () => {
        logOut()
            .then(() => {
                router.push("/");
            })
            .catch();
    };




    return (
        <div>
            <div className="navbar  shadow-md ">
                <div className='navbar  w-full max-w-7xl mx-auto '>

                    <div className=" navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  ">
                                {links}
                            </ul>
                        </div>
                        <p className="hidden md:block btn btn-ghost text-xl pt-2.5 ">Task Genius</p>
                    </div>
                    <p className="block md:hidden btn btn-ghost text-xl pt-2.5 ">Task Genius</p>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    {
                        user ?
                            <>
                                <div className='navbar-end'>
                                    <div className=" dropdown dropdown-end z-10 ">
                                        <label tabIndex={0} className="cursor-pointer">
                                            <div className="avatar online">
                                                <div className="w-10 rounded-full">
                                                    <Image
                                                        src={user?.photoURL || Avatar}
                                                        alt="Picture of the user"
                                                        width={100} height={100}
                                                    />
                                                </div>
                                            </div>
                                        </label>
                                        <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow
                                         bg-[#d1eed1] rounded-box w-52  font-semibold">
                                            <p className="px-4 py-2 hover:bg-[#4bb14b57] rounded-lg"> {user.displayName}</p>

                                            <Link href="/dashboardlayout/my-task" className="px-4 py-2 hover:bg-[#4bb14b57] rounded-lg">
                                                DashBoard
                                            </Link>

                                            <div onClick={handleLogout}
                                                className="cursor-pointer text-red-500 px-4 py-2 hover:bg-[#4bb14b57] rounded-lg">
                                                Logout
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                            :
                            <>
                                <div className="navbar-end">
                                    <Link href={"/singIn"} className="btn btn-outline hover:bg-[#4bb14bdc] hover:border-0  btn-sm">Login </Link>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;