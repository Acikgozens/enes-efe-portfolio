"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalAboutProps {
    text: string;
}

export default function TerminalAbout({ text }: TerminalAboutProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, 30); // Typing speed
            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return (
        <div className="w-full max-w-2xl border-2 border-gray-300 dark:border-[#333] bg-white dark:bg-[#0a0a0a] shadow-2xl relative overflow-hidden">
            {/* Terminal Header Bar */}
            <div className="bg-gray-100 dark:bg-[#1a1a1a] border-b-2 border-gray-300 dark:border-[#333] px-4 py-2 flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="font-pressStart text-[8px] text-black dark:text-gray-500 uppercase tracking-widest">
                    system_profile.sh
                </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm md:text-base text-black dark:text-gray-300 leading-relaxed min-h-[200px]">
                <div className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">$</span>
                    <p className="uppercase whitespace-pre-wrap">
                        {displayedText}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            className="inline-block w-2 h-5 bg-accent ml-1 align-middle"
                        />
                    </p>
                </div>
            </div>
        </div>
    );
}
