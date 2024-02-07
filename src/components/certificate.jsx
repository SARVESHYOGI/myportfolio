import htmlcss from "../photo/htmlcss.jpeg";
import nextcomp from "../photo/nextcomp.jpeg";
import techminiachive from "../photo/techminiachive.jpeg";
import techminiparti from "../photo/techminiparti.png";
import nextparti from "../photo/nextparti.jpeg";
import "./components.css";
import { motion } from "framer-motion";


function Certificate() {

    return (
        <div className="sticky">
            <div className="flex flex-col content-center justify-center items-center">
                <div className="flex m-4 flex-col md:flex-row">
                    <motion.div
                        whileHover={{ opacity: 2, scale: 1.1 }}
                        transition={{ delay: 0 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        initial={{ opacity: 0, scale: 0 }}
                        className="  bg-black  my-2 md:my-0  text-gray-100 md:mx-20 bg-cover border-4 rounded-xl border-white"
                    >
                        <img src={nextparti} alt="c" className="h-80 rounded-lg " />
                    </motion.div>
                    <motion.div
                        whileHover={{ opacity: 2, scale: 1.1 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        transition={{ delay: 0 }}
                        initial={{ opacity: 0, scale: 0 }}
                        className=" bg-black my-2 md:my-0 text-gray-100 md:mx-20 bg-cover border-4 rounded-xl border-white"
                    >
                        <img src={nextcomp} alt="c" className="h-80 rounded-lg" />
                    </motion.div>
                </div>
                <div className="flex m-4 flex-col md:flex-row">
                    <motion.div
                        whileHover={{ opacity: 2, scale: 1.1 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        transition={{ delay: 0 }}
                        initial={{ opacity: 0, scale: 0 }}
                        className=" bg-black my-2 md:my-0 text-gray-100 md:mx-20 bg-cover border-4 rounded-xl border-white"
                    >
                        <img src={techminiparti} alt="c" className="h-80 rounded-lg" />
                    </motion.div>

                    <motion.div
                        whileHover={{ opacity: 2, scale: 1.1 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        transition={{ delay: 0 }}
                        initial={{ opacity: 0, scale: 0 }}
                        className=" bg-black my-2 md:my-0 text-gray-100 md:mx-20 bg-cover border-4 rounded-xl border-white"
                    >
                        <img src={techminiachive} alt="c" className="h-80 rounded-lg" />
                    </motion.div>
                </div>
                <div className="flex m-4">
                    <motion.div
                        whileHover={{ opacity: 2, scale: 1.1 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        transition={{ delay: 0 }}
                        initial={{ opacity: 0, scale: 0 }}
                        className=" bg-black text-gray-100 md:mx-20 bg-cover  border-4 rounded-xl border-white"
                    >
                        <img src={htmlcss} alt="c" className="h-80 rounded-lg" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Certificate;