"use client"
import useAuth from '@/Hook/useAuth';
import useAxiosPublic from '@/Hook/useAxiosPublic';
import React, { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CompletedTask = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [data, setData] = useState(null);
    const DoneTask = data?.doneTasks;
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    const fetchTaskData = useCallback(() => {
        setIsLoading(true);
        axiosPublic.get(`/get-task/${user?.email}`)
            .then((res) => {
                setData(res.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, [axiosPublic, user?.email]);

    useEffect(() => {
        fetchTaskData();
    }, [fetchTaskData]);

    const handlePagination = (direction) => {
        if (direction === 'prev' && currentPage > 0) {
            setCurrentPage(currentPage - 1);
        } else if (direction === 'next' && (currentPage + 1) * itemsPerPage < DoneTask.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const paginatedTasks = DoneTask ? DoneTask.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage) : [];

    const handleDeleteTask = (task) => {
        axiosPublic.delete(`/Delete-task/${task._id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    fetchTaskData();
                    toast.success('Task has been deleted.');
                }
            })
            .catch(error => {
                console.log(error)
            })
    };

    if (isLoading || data === null) {
        return (
            <div className="flex flex-col lg:flex-row gap-4 px-2">
                <h2>Loading</h2>
            </div>
        );
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead className='bg-[#eaecea]'>
                        <tr>
                            <th>Serial No</th>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Task Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            paginatedTasks.map((task, idx) => (
                                <tr key={idx}>
                                    <td>{currentPage * itemsPerPage + idx + 1}</td>
                                    <td>{task.Task}</td>
                                    <td>{task.TaskDetails}</td>
                                    <td>{task.postedDate}</td>
                                    <td>
                                        <RiDeleteBin6Line onClick={() => handleDeleteTask(task)} className='md:text-xl cursor-pointer hover:text-red-400 transition delay-200 text-gray-600' />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center mt-5 w-full'>
                <div className="join grid grid-cols-3">
                    <button onClick={() => handlePagination('prev')} className="join-item btn btn-outline  hover:bg-[#46ac46]">Previous page</button>
                    <button className="join-item btn btn-outline  hover:bg-[#46ac46]">{currentPage + 1}</button>
                    <button onClick={() => handlePagination('next')} className="join-item btn btn-outline  hover:bg-[#46ac46]">Next</button>
                </div>
            </div>
        </div>
    );
};

export default CompletedTask;
