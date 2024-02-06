import React from "react";
import "./components.css";
import c from "../photo/c.png";
import cpp from "../photo/c++.png";
import java from "../photo/java.png";
import javascript from "../photo/javascript.png";
import bootstrap from "../photo/bootstrap.jpg";
import css from "../photo/css.jpg";
import html from "../photo/html.webp";
import tailwind from "../photo/tailwind.png";
import react from "../photo/react.png";
import mysql from "../photo/mysql.png";
import git from "../photo/git.png";
import figma from "../photo/figma.png";
import canva from "../photo/canva.png";
import node from "../photo/node.jpg";
import express from "../photo/express.png";
import { motion } from "framer-motion";

function Skills() {
    return (
        <div className="flex w-screen h-screen content-center justify-center items-center text-white">
            <div className="w-5/6">
                <motion.hr />

                <motion.div
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    initial={{ x: -1000, opacity: 0 }}
                    className="my-10 md:my-2 "
                >
                    <h1 className="text-2xl md:text-6xl mx-auto w-fit mt-2 mb-2">programming Language</h1>
                    <div className="flex justify-around">
                        <div>
                            <img src={c} className="w-10 md:w-20 bg" alt="" />
                        </div>
                        <div>
                            <img src={cpp} className="w-10 md:w-20 bg" alt="" />
                        </div>
                        <div>
                            <img src={java} className="w-10 md:w-20 bg" alt="" />
                        </div>
                    </div>
                </motion.div>

                <motion.hr />

                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0 }}
                    initial={{ opacity: 0, x: 1000 }}
                    className=" my-10 md:my-2 "
                >
                    <h1 className="text-2xl md:text-6xl mx-auto w-fit mt-2 mb-2"> frontend development</h1>
                    <div className="flex justify-around  ">
                        <div>
                            <img src={html} className="w-10 md:w-20 bg" alt="html" />
                        </div>
                        <div>
                            <img src={css} className="w-11 md:w-24 bg" alt="css" />
                        </div>
                        <div>
                            <img src={bootstrap} className="w-12 md:w-24 bg" alt="bootstrap" />
                        </div>
                        <div>
                            <img src={tailwind} className="w-10 md:w-20 bg" alt="" />
                        </div>
                        <div>
                            <img src={javascript} className="w-10 md:w-20 bg" alt="" />
                        </div>

                        <div>
                            <img src={react} className="w-12 md:w-28 bg" alt="" />
                        </div>
                    </div>
                </motion.div>

                <motion.hr />

                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    initial={{ opacity: 0, x: -1000 }}
                    className=" my-10 md:my-2 "
                >
                    <h1 className="text-2xl md:text-6xl mx-auto w-fit mt-2 mb-2">backend development</h1>
                    <div className="flex justify-around ">
                        <div>
                            <img src={node} className="w-10 md:w-20 bg" alt="" />
                        </div>
                        <div>
                            <img src={express} className="w-10 md:w-20 bg" alt="" />
                        </div>
                        <div>
                            <img src={mysql} className="w-10 md:w-20 bg" alt="" />
                        </div>
                    </div>
                </motion.div>

                <motion.hr />

                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    initial={{ opacity: 0, x: 1000 }}
                    className="my-10 md:my-2 "
                >
                    <h1 className="text-2xl md:text-6xl mx-auto w-fit mt-2 mb-2 ">framework</h1>
                    <div className="flex justify-around ">
                        <div>
                            <img src={git} className="w-10 md:w-20 bg" alt="" />
                        </div>
                        <div>
                            <img src={figma} className="w-10 md:w-20 bg" alt="" />
                        </div>
                        <div>
                            <img src={canva} className="w-10 md:w-20 bg" alt="" />
                        </div>
                    </div>
                </motion.div>
                <motion.hr />
            </div>
        </div>
    );
}

export default Skills;