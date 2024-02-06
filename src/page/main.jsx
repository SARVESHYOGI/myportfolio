import React from "react";
import "./main.css";
import sarvesh1 from "../photo/sarvesh1.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Main(isSidebaropen, toggleSidebar) {
    const closeSidebar = () => {
        if (isSidebaropen) {
            toggleSidebar();
        }
    };

    return (
        <motion.div className={` h-screen w-72 transition-all duration-300 `}>
            <div id="main" className="flex flex-col center justify-center z-10 align-middle items-center content-center ">
                <motion.div
                    className="mt-5 mb-8">
                    <motion.img
                        whileHover={{ scale: 0.95 }}

                        src={sarvesh1}
                        alt=""
                        className="w-36 rounded-full mt-6 bg"
                    />
                </motion.div>
                <Link to="/" onClick={closeSidebar} className="">
                    <motion.div
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 1.1 }}
                        className="w-52  mx-auto">

                        <div className="bg-[#030223]  hover:bg-transparent py-2 flex items-center justify-center text-white border border-white shadow-lg border-b-4 font-bold overflow-hidden relative px-4 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group align-middle bg-center w-full ">
                            <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            HOME
                        </div>
                    </motion.div>
                </Link>
                <Link to="https://drive.google.com/file/d/1RUKVGeoQrl6YrG34dhuGZfTS3MF52p7Z/view?usp=sharing">
                    <motion.div
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 1.1 }}
                        className="w-52  mx-auto">
                        <Link
                            className="-mx-1"
                            rel="noreferrer"
                            target="_blank"
                            to="https://drive.google.com/file/d/1RUKVGeoQrl6YrG34dhuGZfTS3MF52p7Z/view?usp=sharing"
                        >
                            <div className="bg-[#030223] hover:bg-transparent py-2 flex items-center justify-center text-white border border-white shadow-lg border-b-4 font-bold overflow-hidden relative px-4 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group align-middle bg-center w-full">

                                <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                RESUME
                            </div>
                        </Link>
                    </motion.div>
                </Link>

                <Link to="/project" onClick={closeSidebar} className="">
                    <motion.div
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 1.1 }}
                        className="w-52 mb-3 mx-auto">

                        <div className="bg-[#030223] hover:bg-transparent py-2 flex items-center justify-center text-white border border-white shadow-lg border-b-4 font-bold overflow-hidden relative px-4 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group align-middle bg-center w-full ">
                            <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            PROJECT
                        </div>
                    </motion.div>
                </Link>

                <Link to="/certificate" onClick={closeSidebar} className="">
                    <motion.div
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 1.1 }}
                        className="w-52 my-3 mx-auto">

                        <div className="bg-[#030223] hover:bg-transparent py-2 flex items-center justify-center text-white border border-white shadow-lg border-b-4 font-bold overflow-hidden relative px-4 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group align-middle bg-center w-full ">
                            <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            CERTIFICATE
                        </div>
                    </motion.div>

                </Link>

                <Link to="/skills" onClick={closeSidebar} className="">
                    <motion.div
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 1.1 }}
                        className="w-52 my-3 mx-auto">

                        <div className="bg-[#030223] hover:bg-transparent py-2 flex items-center justify-center text-white border border-white shadow-lg border-b-4 font-bold overflow-hidden relative px-4 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group align-middle bg-center w-full ">
                            <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            SKILLS
                        </div>
                    </motion.div>

                </Link>

                <Link to="/profile" onClick={closeSidebar} className="">
                    <motion.div
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 1.1 }}
                        className="w-52 my-3 mx-auto">

                        <div className="bg-[#030223] hover:bg-transparent py-2 flex items-center justify-center text-white border border-white shadow-lg border-b-4 font-bold overflow-hidden relative px-4 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group align-middle bg-center w-full ">
                            <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            ABOUT
                        </div>
                    </motion.div>

                </Link>

                <Link to="/contact" onClick={closeSidebar} className="">
                    <motion.div
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 1.1 }}
                        className="w-52 my-3 mx-auto">

                        <div className="bg-[#030223] hover:bg-transparent py-2 flex items-center justify-center text-white border border-white shadow-lg border-b-4 font-bold overflow-hidden relative px-4 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group align-middle bg-center w-full ">
                            <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            CONTACT
                        </div>
                    </motion.div>

                </Link>

            </div>




        </motion.div >
    );
}

export default Main;