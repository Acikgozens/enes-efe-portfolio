"use client";

import { motion } from "framer-motion";
import { FaPython, FaJsSquare } from "react-icons/fa";
import { SiSharp } from "react-icons/si";
export default function OrbitalAnimation() {
    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] flex items-center justify-center">

            {/* Center Core */}
            <div className="absolute w-3 h-3 bg-black dark:bg-accent/80 rounded-full z-10 shadow-[0_0_15px_rgba(0,0,0,0.8)] dark:shadow-[0_0_15px_rgba(253,184,19,0.8)]"></div>

            {/* --- Orbit 1: Inner (JavaScript) --- */}
            <div className="absolute w-[50%] h-[50%] border-[2px] border-dashed border-black dark:border-[#222] rounded-full"></div>
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ willChange: "transform" }}
                className="absolute w-[50%] h-[50%] flex justify-center items-start origin-center"
            >
                <motion.div
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{ willChange: "transform" }}
                    className="-translate-y-1/2"
                >
                    <FaJsSquare className="w-5 h-5 md:w-8 md:h-8 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                </motion.div>
            </motion.div>

            {/* --- Orbit 2: Middle (C#) --- */}
            <div className="absolute w-[75%] h-[75%] border border-black dark:border-[#333] rounded-full"></div>
            <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ willChange: "transform" }}
                className="absolute w-[75%] h-[75%] flex justify-start items-center origin-center"
            >
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{ willChange: "transform" }}
                    className="-translate-x-1/2"
                >
                    <SiSharp className="w-5 h-5 md:w-8 md:h-8 text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                </motion.div>
            </motion.div>

            {/* --- Orbit 3: Outer (Python) --- */}
            <div className="absolute w-[100%] h-[100%] border border-black dark:border-[#222] rounded-full"></div>
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                style={{ willChange: "transform" }}
                className="absolute w-[100%] h-[100%] flex justify-center items-end origin-center"
            >
                <motion.div
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    style={{ willChange: "transform" }}
                    className="translate-y-1/2"
                >
                    <FaPython className="w-5 h-5 md:w-8 md:h-8 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                </motion.div>
            </motion.div>

        </div>
    );
}
