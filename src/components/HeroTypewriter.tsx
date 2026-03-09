"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroTypewriterProps {
    text: string;
}

export default function HeroTypewriter({ text }: HeroTypewriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, 60); // typing speed
            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return (
        <p className="font-pressStart text-[10px] md:text-xs lg:text-sm text-gray-800 dark:text-gray-400 leading-relaxed md:leading-snug w-full max-w-[600px] uppercase text-center mx-auto min-h-[60px] md:min-h-[40px]">
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-2 h-4 md:h-5 bg-gray-800 dark:bg-gray-400 ml-1 align-middle"
            />
        </p>
    );
}
