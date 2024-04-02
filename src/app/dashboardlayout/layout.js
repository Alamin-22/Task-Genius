"use client";
import React from "react";
import { Inter } from "next/font/google";
import DashboardNav from "@/components/DashBoardNav/DashBoardNav";
const inter = Inter({ subsets: ["latin"] });

const DashboardLayout = ({ children }) => {
    return (
        <>
            <div className="flex min-h-screen flex-col md:flex-row mt-1">
                <div className="bg-red-300 ">
                    <DashboardNav></DashboardNav>
                </div>
                <div className="flex-1 border">{children}</div>
            </div>
        </>
    );
};

export default DashboardLayout;