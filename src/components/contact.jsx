import "./components.css";

import instagram from "../photo/instagram.jpg";
import whatsapp from "../photo/whatsapp.png";
import github from "../photo/github.png";
import linkdin from "../photo/linkdin.png";
import twitter from "../photo/twitter.png";
import gmail from "../photo/gmail.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function Contact() {
    return (
        <>


            <motion.div className="flex flex-col content-center mt-6 md:mt-0 justify-center items-center text-white">
                <motion.div
                    animate={{ x: 0 }}

                    transition={{ duration: 1, delay: 0 }}
                    initial={{ x: 1000 }}
                    className=" cursor-pointer flex bg rounded-full w-72 md:w-96 px-8 m-5"
                >
                    <Link
                        to="https://www.instagram.com/sarveshs.yogi/"
                        className="flex items-center text-3xl"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="flex items-center gap-8">
                            <img src={instagram} className="w-16 md:w-20 rounded-full" alt="" />
                            <p className="text-center">Instagram </p>
                        </div>
                    </Link>
                </motion.div>
                <motion.div
                    animate={{ x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    initial={{ x: -1000 }}
                    className=" cursor-pointer flex bg px-8 w-72 md:w-96 rounded-full m-5"
                >
                    <Link
                        to="https://www.linkedin.com/in/sarvesh-yogi-9b07b3252/"

                        className="flex items-center text-3xl md:space-x-14  space-x-10"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkdin} className="w-16 md:w-20 rounded-full" alt="" />
                        <p className="text-center">Linkedin</p>
                    </Link>
                </motion.div>
                <motion.div
                    animate={{ x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    initial={{ x: 1000 }}
                    className=" cursor-pointer flex bg px-8 w-72 md:w-96 rounded-full m-5"
                >
                    <Link
                        to="https://api.whatsapp.com/send?phone=7588131774"
                        className="flex items-center text-3xl space-x-8 md:space-x-12"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={whatsapp} className="w-16 md:w-20 rounded-full" alt="" />
                        <span>whatsapp</span>
                    </Link>
                </motion.div>
                <motion.div
                    animate={{ x: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    initial={{ x: -1000 }}
                    className=" cursor-pointer flex bg px-8 w-72 md:w-96 rounded-full m-5"
                >
                    <Link
                        to="https://github.com/SARVESHYOGI"
                        className="flex items-center text-3xl space-x-11 md:space-x-16"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={github} className="w-16 md:w-20 rounded-full" alt="" />
                        <span>Github </span>
                    </Link>
                </motion.div>
                <motion.div
                    animate={{ x: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    initial={{ x: 1000 }}
                    className=" cursor-pointer flex bg px-8 w-72 md:w-96 rounded-full m-5"
                >
                    <Link
                        to="https://twitter.com/@SarveshYogi9305"
                        className="flex items-center text-3xl space-x-10 md:space-x-16"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={twitter} className="w-16 md:w-20 rounded-full" alt="" />
                        <span>Twitter </span>
                    </Link>
                </motion.div>
                <motion.div
                    animate={{ x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    initial={{ x: -1000 }}
                    className=" cursor-pointer flex bg px-8 w-72 md:w-96 rounded-full m-5"
                >
                    <Link
                        to="mailto:sarveshyogi2005@gmail.com"
                        className="flex items-center text-3xl space-x-10 md:space-x-16"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={gmail} className="w-16 md:w-20 rounded-full" alt="" />
                        <span>G-mail </span>
                    </Link>
                </motion.div>
            </motion.div>


        </>
    );
}

export default Contact;