"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from './LanguageProvider';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const { lang, setLang, dict, mounted } = useLanguage();

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const sections = ['hero', 'about', 'projects', 'contact'];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" });

        sections.forEach(sec => {
            const el = document.getElementById(sec);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const links = [
        { name: mounted ? dict.nav.about   : 'About',    href: '#about' },
        { name: mounted ? dict.nav.projects : 'Projects', href: '#projects' },
        { name: mounted ? dict.nav.contact  : 'Contact',  href: '#contact' },
    ];

    const handleJump = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        const targetId = href.replace('#', '');
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 left-0 w-full z-[100] bg-white/70 dark:bg-[#0a0a0a]/90 text-black dark:text-[#e5e5e5] backdrop-blur-md border-b border-gray-200 dark:border-[#222]">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo / Brand */}
                <a
                    href="#hero"
                    className="font-pressStart text-xl text-accent hover:text-black dark:hover:text-white transition-colors"
                    onClick={(e) => handleJump(e, '#hero')}
                >
                    EA.
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 font-pressStart text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400">
                    {links.map((link) => {
                        const targetId = link.href.replace('#', '');
                        const isActive = activeSection === targetId;
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleJump(e, link.href)}
                                className={`relative hover:text-black dark:hover:text-white transition-colors py-2 px-1 ${isActive ? 'text-black dark:text-white' : ''}`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-underline"
                                        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.5 }}
                                        className="absolute bottom-[-4px] h-[2px] w-full bg-accent"
                                    />
                                )}
                                <span>{link.name}</span>
                            </a>
                        );
                    })}

                    {/* Controls: Theme + Language + HP Bar */}
                    <div className="flex items-center gap-6 ml-4 border-l border-gray-200 dark:border-[#222] pl-6">
                        <ThemeToggle />

                        {/* Language Toggle — only shown after mount to avoid hydration mismatch */}
                        {mounted && (
                            <button
                                onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
                                aria-label="Toggle language"
                                className="flex items-center justify-center w-10 h-10 rounded-md text-foreground bg-transparent border-none outline-none focus:outline-none focus:ring-0 hover:bg-accent hover:text-accent-foreground transition-colors font-bold text-xs"
                            >
                                {lang === 'en' ? 'TR' : 'EN'}
                            </button>
                        )}

                        <div className="flex flex-col gap-1 group cursor-help flex-shrink-0 min-w-[140px]">
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-[8px] text-accent animate-pulse whitespace-nowrap">{dict.ui.lvl}</span>
                                <span className="text-[6px] text-[#171717] dark:text-gray-500 whitespace-nowrap">{dict.ui.hp}</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#333] relative overflow-hidden">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="absolute top-0 left-0 h-full bg-[#39ff14] shadow-[0_0_8px_#39ff14]"
                                />
                            </div>
                            {/* Tooltip on hover */}
                            <div className="absolute top-16 right-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-accent text-black text-[7px] px-2 py-1 border border-black shadow-lg">
                                {dict.ui.devStatus}
                            </div>
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
                        className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-[#222] shadow-xl"
                    >
                        <nav className="flex flex-col p-6 items-center gap-6 font-pressStart text-sm uppercase">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleJump(e, link.href)}
                                    className="w-full text-center py-4 text-gray-600 dark:text-gray-300 hover:text-accent hover:bg-gray-100 dark:hover:bg-[#111] transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center gap-4 mt-4">
                                <ThemeToggle />
                                {mounted && (
                                    <button
                                        onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
                                        aria-label="Toggle language"
                                        className="flex items-center justify-center w-10 h-10 rounded-md text-foreground bg-transparent border-none outline-none focus:outline-none focus:ring-0 hover:bg-accent hover:text-accent-foreground transition-colors font-bold text-xs"
                                    >
                                        {lang === 'en' ? 'TR' : 'EN'}
                                    </button>
                                )}
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
