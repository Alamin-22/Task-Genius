import Link from 'next/link';
import React from 'react';

const Navbar = () => {



    const links = <>
        <li className='font-medium text-gray-600'><Link href={"/"}> Home </Link></li>
        <li className='font-medium text-gray-600'><Link href={"/about"}> About </Link></li>
        <li className='font-medium text-gray-600' ><Link href={"/dashboardlayout"}> Dashboard </Link></li>
    </>


    return (
        <div>
            <div className="navbar  shadow-md ">
                <div className='navbar  w-full max-w-7xl mx-auto '>
                    <div className="navbar-start">
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
                    <div className="navbar-end">
                        <a className="btn btn-outline hover:bg-[#4bb14bdc] hover:border-0  btn-sm">Login </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;