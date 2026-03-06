"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });

        // Optimization: Clean up the listener
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    className="fixed bottom-8 right-8 z-[100]"
                >
                    <button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="group relative bg-accent border-4 border-black p-3 md:p-4 
                     shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000]
                     hover:translate-x-[2px] hover:translate-y-[2px]
                     active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
                     transition-all duration-75 outline-none"
                    >
                        {/* Pixel Art Style Arrow */}
                        <div className="flex flex-col items-center">
                            <ChevronUp className="w-6 h-6 md:w-8 md:h-8 text-black" strokeWidth={3} />
                            {/* Optional tiny text for retro feel */}
                            <span className="font-pressStart text-[6px] md:text-[8px] text-black mt-1 leading-none">
                                TOP
                            </span>
                        </div>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
