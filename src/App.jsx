import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import "./App.css";
import Main from "./page/main";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/profile";
import Certificate from "./components/certificate";
import Project from "./components/project";
import Home from "./components/home";
import Skills from "./components/skills";
import Contact from "./components/contact";
import { motion } from "framer-motion";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  return (
    <>
      <div id="app" className=" w-screen ">
        <motion.div
          initial={{ x: -300, scale: 0 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className={` h-screen z-10 fixed ${isSidebarOpen ? "w-auto" : "hidden"
            } min-w-fit transition-all duration-300`}
        >
          <Main isSidebaropen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </motion.div>

        <div className=" h-screen w-full">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/project" element={<Project />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

        </div>

        <div className="fixed top-4 left-4 rounded-full z-30 bg-white">
          <button
            name="check-icon"
            id="check-icon"
            className="text-black p-2 focus:outline-none"
            onClick={() => {
              toggleSidebar();
            }}
          >
            {isSidebarOpen ? (
              <>
                <IoMdClose className="text-3xl font-bold md:text-5xl" />
              </>
            ) : (
              <>
                <CiMenuBurger className="text-3xl md:text-5xl font-bold" />
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );


}

export default App;