"use client"
import Image from 'next/image';
import TaskManage from "@/assets/Image/TaskMange.jpg"

import React from "react";
import ReactTextRotator from "react-text-rotator";


export default function Home() {
  const ReactRotatingText = require('react-rotating-text');


  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <Image
            src={TaskManage}
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div>
            <h1 className="text-5xl mb-3 text-gray-700 font-bold">The Ultimate Task Management Solution
              <br />
              For <span><ReactRotatingText items={["Web Developer", "Programmer", "Students", "Designers", "Entrepreneurs"]} /></span>

            </h1>

            <button className=" btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
