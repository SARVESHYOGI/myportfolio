import { motion } from "framer-motion";

function Profile() {
    return (
        <div className="">
            <div className="flex content-center items-center align-middle h-screen justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg text-white rounded-3xl md:rounded-full md:w-3/4 font-bold text-xl md:text-2xl text-center self-center items-center flex p-5 md:p-20"
                >
                    As a second-year student pursuing a degree in Computer Engineering at
                    Thadomal Shahani Engineering College, I am on a journey of knowledge
                    and innovation. With my graduation anticipated in 2026, I am actively
                    engaged in honing my skills and expertise in the dynamic field of
                    computer engineering. This chapter of my academic odyssey is just
                    beginning, and I eagerly look forward to transforming my experiences
                    and achievements into a compelling portfolio that showcases my growth,
                    passion, and dedication in the world of technology.
                </motion.div>
            </div>
            <motion.div
                animate={{ x: [10, 1300] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="hidden md:block w-12 h-12 rounded-full bg-white absolute top-10"
            ></motion.div>
            <motion.div
                animate={{ y: [10, 600] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="hidden md:block w-12 h-12 rounded-full bg-white absolute right-10 top-10 "
            ></motion.div>
            <motion.div
                animate={{ x: [0, -1300] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="hidden md:block w-12 h-12 rounded-full bg-white absolute right-10 bottom-10"
            ></motion.div>
            <motion.div
                animate={{ y: [10, -600] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="hidden md:block w-12 h-12 rounded-full bg-white absolute bottom-10 left-10"
            ></motion.div>
        </div>
    );
}

export default Profile;