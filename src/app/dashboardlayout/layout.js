"use client";
import React from "react";
import { Inter } from "next/font/google";
import DashboardNav from "@/components/DashBoardNav/DashBoardNav";
const inter = Inter({ subsets: ["latin"] });

const DashboardLayout = ({ children }) => {
    return (
        <><h2></h2>
            <div className="flex min-h-screen flex-col md:flex-row mt-1">

                <div className="">
                    <DashboardNav></DashboardNav>
                </div>
                <div className="flex-1 ">{children}</div>
            </div>
        </>
    );
};

export default DashboardLayout;