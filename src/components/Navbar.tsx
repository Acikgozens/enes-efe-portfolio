"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'projects', 'contact'];
            let current = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= (element.offsetTop - 200)) {
                    current = section;
                }
            }
            if (window.scrollY < 200) current = "hero";
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleJump = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        const targetId = href.replace('#', '');
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#222]">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo / Brand */}
                <Link
                    href="#hero"
                    className="font-pressStart text-xl text-accent hover:text-white transition-colors"
                    onClick={(e) => handleJump(e, '#hero')}
                >
                    EA.
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 font-pressStart text-xs uppercase tracking-widest text-gray-400">
                    {links.map((link) => {
                        const targetId = link.href.replace('#', '');
                        const isActive = activeSection === targetId;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleJump(e, link.href)}
                                className={`relative hover:text-white transition-colors py-2 px-1 ${isActive ? 'text-white' : ''}`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-active-indicator"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                                    />
                                )}
                                <span>{link.name}</span>
                            </Link>
                        );
                    })}

                    {/* Player Status Badge / HP Bar */}
                    <div className="flex flex-col gap-1 ml-4 border-l border-[#222] pl-6 group cursor-help">
                        <div className="flex justify-between items-center gap-4">
                            <span className="text-[8px] text-accent animate-pulse">LVL 23</span>
                            <span className="text-[6px] text-gray-500">HP 100%</span>
                        </div>
                        <div className="w-24 h-2 bg-[#1a1a1a] border border-[#333] relative overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="absolute top-0 left-0 h-full bg-[#39ff14] shadow-[0_0_8px_#39ff14]"
                            />
                        </div>
                        {/* Tooltip on hover */}
                        <div className="absolute top-16 right-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-accent text-black text-[7px] px-2 py-1 border border-black shadow-lg">
                            DEVELOPER STATUS: OPTIMAL
                        </div>
                    </div>
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden text-accent p-2 focus:outline-none flex items-center justify-center"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-20 left-0 w-full bg-[#0a0a0a] border-b border-[#222] shadow-xl"
                    >
                        <nav className="flex flex-col p-6 items-center gap-6 font-pressStart text-sm uppercase">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleJump(e, link.href)}
                                    className="w-full text-center py-4 text-gray-300 hover:text-accent hover:bg-[#111] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
