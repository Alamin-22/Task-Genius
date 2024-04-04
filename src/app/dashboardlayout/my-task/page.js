"use client"
import React, { useCallback, useEffect, useState } from 'react';
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
import useAxiosPublic from '@/Hook/useAxiosPublic';
import toast from 'react-hot-toast';



const MyTaskPage = () => {
    const { user } = useAuth();
    const userEmail = user?.email;
    const axiosPublic = useAxiosPublic();
    const [data, setData] = useState({});



    useEffect(() => {
        axiosPublic.get(`/get-task/${userEmail}`)
            .then((res) => {
                // console.log(res.data);
                setData(res.data);
            })
            .catch((error => {
                console.log(error);
            }))
    }, [axiosPublic, userEmail]);


    const handleAddTask = useCallback((e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const Task = form.get("Task");
        const Status = "ToDo";
        const TaskDetails = form.get("taskDetails");
        const email = userEmail;
        const postedDate = moment().format("MMM Do, YY");
        const TaskInfo = { email, Task, Status, TaskDetails, postedDate };

        axiosPublic.post("/post-task", TaskInfo)
            .then(res => {
                toast.success(`Task Successfully Added`);
                setData(prevData => ({
                    ...prevData,
                    ToDoTasks: [...prevData.ToDoTasks, TaskInfo]
                }));
                e.target.reset();
                document.getElementById('my_modal_3').close();
            })
            .catch(error => {
                console.log(error);
            });
    }, [axiosPublic, userEmail]);

    const handlePatchTask = useCallback((e, toDoData) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const updatedTask = form.get("patchTask");
        const updatedTaskDetails = form.get("PatchTaskDetails");

        const updatedToDoTasks = data.ToDoTasks.map(task => {
            if (task._id === toDoData._id) {
                return {
                    ...task,
                    Task: updatedTask,
                    TaskDetails: updatedTaskDetails
                };
            } else {
                return task;
            }
        });

        axiosPublic.patch(`/patch-task/${toDoData._id}`, { Task: updatedTask, TaskDetails: updatedTaskDetails })
            .then(res => {
                toast.success(`Task Successfully Updated`);
                setData(prevData => ({
                    ...prevData,
                    ToDoTasks: updatedToDoTasks
                }));
                e.target.reset();
                console.log(res);
                document.getElementById(`UpdateToDo_${toDoData._id}`).close();
            })
            .catch(error => {
                console.log(error);
            });
    }, [axiosPublic, data]);




    const UpdateProgress = useCallback((toDoData) => {
        const Status = "inProgress";
        axiosPublic.patch(`/patch-task/${toDoData?._id}`, { Status })
            .then(res => {
                if (res.data.modifiedCount) {
                    console.log("UpdateProgress: Task status has been updated.");
                    toast.success(`Task status has been updated.`);
                    setData(prevData => ({
                        ...prevData,
                        ToDoTasks: prevData.ToDoTasks.filter(task => task._id !== toDoData._id),
                        inProgressTasks: [...prevData.inProgressTasks, { ...toDoData, Status: "inProgress" }]
                    }));
                }
            })
            .catch(error => {
                console.log("UpdateProgress error:", error);
                toast.success(`Sorry Try again`);
            });
    }, [axiosPublic]);


    const handlePatchDoneTask = useCallback((inProgressData) => {
        const Status = "done";
        axiosPublic.patch(`/patch-task/${inProgressData?._id}`, { Status })
            .then(res => {
                if (res.data.modifiedCount) {
                    toast.success(`Task status has been updated.`);
                    setData(prevData => ({
                        ...prevData,
                        inProgressTasks: prevData.inProgressTasks.filter(task => task._id !== inProgressData._id),
                        doneTasks: [...prevData.doneTasks, inProgressData]
                    }));
                }
            })
            .catch(error => {
                console.log(error);
                toast.success(`Sorry Try again`);
            });
    }, [axiosPublic]);


    const handleDeleteTask = useCallback((toDoData, taskType) => {
        axiosPublic.delete(`/Delete-task/${toDoData?._id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    setData(prevData => ({
                        ...prevData,
                        [taskType]: prevData[taskType].filter(item => item._id !== toDoData?._id)
                    }));
                    toast.success('Task has been deleted.');
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, [axiosPublic]);


    // console.log(data.ToDoTasks);
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
                        <RiSoundModuleLine className='md:text-lg font-medium ' />
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
                            <h3 className="font-bold text-lg">Add your Task </h3>
                            <form onSubmit={handleAddTask} >
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-medium">What Is Your Task Title?</span>
                                    </div>
                                    <input type="text" name='Task' placeholder="Type here Your Task Name" className="input input-bordered w-full bg-white " />
                                </label>
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-medium">What Is Your Task ?</span>
                                    </div>
                                    <textarea name='taskDetails' rows={4} className="textarea textarea-bordered  bg-white"
                                        placeholder="Write About your Task here..."></textarea>
                                </label>
                                <button type='submit' className='btn mt-5 w-full bg-[#3ac43aee] hover:bg-[#46ac46] text-white '>
                                    Save Task
                                </button>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
            {/* task section */}
            <section className=' grid lg:grid-cols-3 gap-4 px-2  '>
                <div className='col-span-1   py-3 px-2 '>
                    <div className='rounded-lg bg-blue-100 space-y-4 py-2 '>
                        <h5 className='md:text-xl font-medium flex items-center gap-3 px-3'><MdOutlineAddBox /> To do  {data?.ToDoTasks?.length} Task</h5>
                        {
                            data && data.ToDoTasks && data.ToDoTasks?.map((toDoData, idx) =>
                                <div key={idx} className=''>
                                    <div className="mx-2  px-2 py-4 bg-gray-200 rounded-lg shadow-md ">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center ">
                                                    <Image priority={true} className="object-cover w-10 h-10  rounded-full sm:block"
                                                        src={user?.photoURL || Avatar} alt="avatar" width={40} height={40} />
                                                    <span className="ml-2 text-sm font-light text-gray-600 ">{toDoData?.postedDate}</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-3 items-center">
                                                <TbEdit onClick={() => document.getElementById(`UpdateToDo_${toDoData?._id}`).showModal()} className='md:text-xl cursor-pointer hover:text-red-400 transition delay-200 text-gray-600' />

                                                <dialog id={`UpdateToDo_${toDoData?._id}`} className="modal">
                                                    <div className="modal-box">
                                                        <form method="dialog">

                                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                        </form>
                                                        <h3 className="font-bold text-lg">Update your Task </h3>
                                                        <form onSubmit={(e) => {
                                                            e.preventDefault();
                                                            handlePatchTask(e, toDoData);
                                                        }} >
                                                            <label className="form-control w-full ">
                                                                <div className="label">
                                                                    <span className="label-text font-medium">What Is Your Task Title?</span>
                                                                </div>
                                                                <input type="text" name='patchTask' placeholder="Type here Your Task Name" className="input input-bordered w-full bg-white " defaultValue={toDoData?.Task} />
                                                            </label>
                                                            <label className="form-control w-full ">
                                                                <div className="label">
                                                                    <span className="label-text font-medium">What Is Your Task ?</span>
                                                                </div>
                                                                <textarea name='PatchTaskDetails' rows={4} className="textarea textarea-bordered  bg-white"
                                                                    defaultValue={toDoData?.TaskDetails} placeholder="Write About your Task here..."></textarea>
                                                            </label>
                                                            <button type='submit' className='btn mt-5 w-full bg-[#3ac43aee] hover:bg-[#46ac46] text-white '>
                                                                Update Task
                                                            </button>
                                                        </form>
                                                    </div>
                                                </dialog>
                                                <RiDeleteBin6Line onClick={() => handleDeleteTask(toDoData, "ToDoTasks")} className='md:text-xl cursor-pointer hover:text-red-400 transition delay-200 text-gray-600' />
                                                <button onClick={() => UpdateProgress(toDoData)} className='btn btn-xs btn-outline text-gray-600  hover:border-0 hover:bg-[#4bb14b]'>
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                        <h3 className='font-semibold text-gray-700'>{toDoData?.Task}</h3>
                                        <div className="mt-2">
                                            <p className="mt-2 text-gray-600 ">
                                                {toDoData?.TaskDetails}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
                {/*  inprogress */}
                <div className='col-span-1   py-3 px-2 '>
                    <div className='rounded-lg bg-orange-100 space-y-4 py-2 '>
                        <h5 className='md:text-xl font-medium flex items-center gap-3 px-3'>
                            <CgSandClock /> In Progress {data?.inProgressTasks?.length}
                        </h5>
                        {
                            data && data.inProgressTasks && data.inProgressTasks?.map((inProgressData, idx) =>
                                <div key={idx}>
                                    <div className="mx-2  px-2 py-4 bg-gray-200 rounded-lg shadow-md ">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center justify-between">

                                                <div className="flex items-center ">
                                                    <Image priority={true} className="object-cover w-10 h-10  rounded-full sm:block"
                                                        src={user?.photoURL || Avatar} alt="avatar" width={40} height={40} />
                                                    <span className="ml-2 text-sm font-light text-gray-600 ">
                                                        {inProgressData?.postedDate}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <RiDeleteBin6Line onClick={() => handleDeleteTask(inProgressData, "inProgressTasks")} className='md:text-xl cursor-pointer hover:text-red-400 transition delay-200 text-gray-600' />
                                                <button onClick={() => handlePatchDoneTask(inProgressData)} className='btn btn-xs btn-outline text-gray-600  hover:border-0 hover:bg-[#4bb14b] '>
                                                    Done
                                                </button>
                                            </div>
                                        </div>
                                        <h3 className='font-semibold text-gray-700'>{inProgressData?.Task}</h3>
                                        <div className="mt-2">
                                            <p className="mt-2 text-gray-600 dark:text-gray-300">
                                                {inProgressData?.TaskDetails}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }


                    </div>
                </div>
                <div className='col-span-1    py-3 px-2 '>
                    <div className='rounded-lg bg-green-100 space-y-4 py-2 '>
                        <h5 className='md:text-xl font-medium flex items-center gap-3 px-3'>
                            <MdOutlineDoneOutline /> Done {data?.doneTasks?.length}
                        </h5>
                        {
                            data && data.doneTasks && data.doneTasks?.map((completeTask, idx) =>
                                <div key={idx} className=''>
                                    <div className="mx-2  px-2 py-4 bg-gray-200 rounded-lg shadow-md ">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center justify-between">

                                                <div className="flex items-center ">
                                                    <Image priority={true} className="object-cover w-10 h-10  rounded-full sm:block"
                                                        src={user?.photoURL || Avatar} alt="avatar" width={40} height={40} />
                                                    <span className="ml-2 text-sm font-light text-gray-600 ">
                                                        {completeTask?.postedDate}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">

                                                <RiDeleteBin6Line onClick={() => handleDeleteTask(completeTask, "doneTasks")} className='md:text-xl cursor-pointer hover:text-red-400 transition delay-200 text-gray-600' />
                                            </div>
                                        </div>
                                        <h3 className='font-semibold text-gray-700'>{completeTask?.Task}</h3>
                                        <div className="mt-2">
                                            <p className="mt-2 text-gray-600 dark:text-gray-300">
                                                {completeTask?.TaskDetails}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }


                    </div>
                </div>
            </section>
        </div >
    );
};



export default MyTaskPage;