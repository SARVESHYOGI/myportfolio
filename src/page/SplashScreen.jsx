
import { motion } from "framer-motion";

const SplashScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 2000 }}
            transition={{ duration: 1, delay: 2 }}
            className="h-screen w-screen flex items-center justify-center bg-transparent fixed top-0 left-0 z-50"
        >
            <h1 className="text-white text-5xl md:text-8xl font-bold">

                <div className="md:flex gap-7">
                    <motion.div initial={{ x: 300 }} animate={{ x: 0 }} transition={{ delay: 0 }} className="">Hey </motion.div>
                    <motion.div initial={{ y: 300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="">There ,</motion.div>
                    <motion.div initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="">Explore</motion.div>
                    <motion.div initial={{ y: -300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9 }} className="">My </motion.div>
                    <motion.div initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.2 }} className="">Work</motion.div>
                </div>


            </h1>
        </motion.div>
    );
};

export default SplashScreen;