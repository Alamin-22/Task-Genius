"use client"
import React from "react";
import Image from 'next/image';
import TaskManage from "@/assets/Image/TaskMange.png"
import Lottie from "lottie-react";
import animation from "@/assets/animation.json"
import meeting from "@/assets/Image/meeting.png"
import time from "@/assets/Image/time.png"
import { useRouter } from "next/navigation";

export default function Home() {
  const ReactRotatingText = require('react-rotating-text');
  const router = useRouter();


  return (
    <div>
      {/* Banner Section */}
      <div className="hero min-h-[70vh]">
        <div className="hero-content flex-col-reverse md:flex-row-reverse">
          <Image
            src={TaskManage}
            className="mx-auto w-[90%] md:W-[300px] lg:w-[700px]"
            alt="Picture of the author"
            priority={true}
          />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-3 text-center md:text-left text-gray-700 font-bold">The Ultimate Task Management Solution
              <br />
              For <span><ReactRotatingText items={["Web Developer", "Programmer", "Students", "Designers", "Entrepreneurs"]} /></span>

            </h1>
            <div className="text-center md:text-left">
              <button onClick={() => router.push("/singIn")} className=" btn btn-primary text-white">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="mb-10">
          <div className="divider divider-primary ">
            <p className=" text-lg md:text-4xl text-gray-700 font-bold text-center ">
              How Task Genius Benefit Users
            </p>
          </div>
          <p className="md:text-xl font-semibold text-gray-600 my-8 text-center mx-auto px-3 max-w-5xl">
            Are you constantly struggling to keep track of your tasks and projects? Do you find yourself overwhelmed by deadlines and responsibilities? If so, it&amp;s time to discover the transformable benefits of task management websites. Whether you&amp;re a busy professional, a student juggling multiple assignments, or a freelancer managing various projects, task management websites offer invaluable solutions to streamline your workflow and boost your productivity.
          </p>
          <div>
            {/* Task Management */}
            <div className=" flex flex-col md:flex-row justify-evenly items-center gap-3">

              <figure className="">
                <Lottie animationData={animation} className="mx-auto w-[90%]"></Lottie>
              </figure>
              <div className=" p-4 font-medium text-gray-600 md:max-w-96 lg:max-w-screen-sm ">
                <span className="text-lg md:text-2xl text-gray-800 font-semibold">Organized Task Management:</span>
                <br /> One of the primary benefits of Task Genius is the ability to organize your tasks efficiently. With intuitive interfaces and customizable features, these platforms allow you to create task lists, set deadlines, and prioritize assignments with ease. Say goodbye to scattered sticky notes. Task Genius provide a centralized hub for all your tasks and projects, ensuring nothing slips through the cracks.
              </div>
            </div>
            {/* Time Management */}
            <div className=" flex flex-col md:flex-row-reverse justify-evenly items-center gap-3">

              <figure className="px-2">
                <Image
                  src={time}
                  className=" mx-auto w-[80%] md:W-[250px] lg:w-[300px]"
                  alt="Picture of the author"
                  priority={true}
                />
              </figure>
              <div className=" p-4 font-medium text-gray-600  md:max-w-96 lg:max-w-screen-sm ">
                <span className="text-lg md:text-2xl text-gray-800 font-semibold ">Improved Time Management:</span>
                <br /> Time is a precious resource, and effective time management is key to achieving your goals. Task management websites offer tools such as calendars, reminders, and time-tracking functionalities to help you manage your time more effectively. By scheduling tasks, allocating time slots for specific activities, and tracking your progress, you can optimize your workflow and make the most of every minute.
              </div>
            </div>
            {/* Enhanced Collaboration */}
            <div className=" flex flex-col md:flex-row justify-evenly items-center gap-3">

              <figure className="px-2 ">
                <Image
                  src={meeting}
                  className=" mx-auto w-[80%]  md:W-[250px] lg:w-[300px]"
                  alt="Picture of the author"
                  priority={true}
                />
              </figure>
              <div className=" p-4 font-medium text-gray-600  md:max-w-96 lg:max-w-screen-sm ">
                <span className="text-lg md:text-2xl text-gray-800 font-semibold ">Enhanced Collaboration:</span>
                <br /> If you&amp;re part of a team or working on collaborative projects, task management websites facilitate seamless communication and collaboration. Features such as shared task lists, commenting, and file attachments enable team members to collaborate in real-time, regardless of their location. Say goodbye to endless email chains and missed updates – task management websites keep everyone on the same page and promote collaboration efficiency.
              </div>
            </div>
          </div>
        </div>


      </section >


    </div >
  );
}


