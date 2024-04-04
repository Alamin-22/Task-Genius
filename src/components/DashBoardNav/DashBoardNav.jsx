'use client'
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";
import useAuth from "@/Hook/useAuth";
import { MdOutlineDoneOutline } from "react-icons/md";



import { GrTask } from "react-icons/gr";
const DashboardNav = () => {
    const { user, logOut } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logOut()
            .then(() => {
                router.push('/');
            })
            .catch();
    };

    const handleLinkClick = (path) => {
        router.push(path);
    };

    const links = (
        <>
            <p className="text-lg font-semibold text-center mb-6">Welcome Back </p>


            <div>
                <div className="w-full mt-4 border-b-2 border-white"></div>
                <p
                    onClick={() => handleLinkClick("/dashboardlayout/my-task")}
                    className="flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100 cursor-pointer"
                >
                    <GrTask className="text-xl" />
                    <span className="mx-4 font-medium">My Tasks</span>
                </p>
                <div className="w-full mb-4 border-b-2 border-white"></div>
                <p
                    onClick={() => handleLinkClick("/dashboardlayout/completedTask")}
                    className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                    <MdOutlineDoneOutline className="text-2xl" />
                    <span className="mx-2 font-medium">Completed Task</span>
                </p>

                <div className="w-full mt-4 border-b-2 border-white"></div>

                {
                    user &&
                    <p
                        onClick={handleLogout}
                        className="cursor-pointer flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100"
                    >
                        <FiLogOut className="text-xl text-red-600" />
                        <span className="mx-4 text-red-600 font-medium">Log Out</span>
                    </p>
                }

            </div>

        </>
    );

    return (
        <>
            <div className=" hidden md:block bg-[#eaecea] h-full">
                <aside className="flex flex-col w-64 h-full px-4 py-2 overflow-y-auto   ">

                    <div className="flex flex-col justify-between flex-1 mt-6 ">
                        <nav>{links}</nav>
                    </div>
                </aside>
            </div>
        </>
    );
};

export default DashboardNav;
