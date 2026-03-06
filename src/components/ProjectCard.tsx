"use client";

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    githubUrl?: string;
    status?: string;
    index?: number;
}

export default function ProjectCard({ title, description, tags, githubUrl, status, index = 0 }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, zIndex: 50 }}
            style={{ zIndex: 40 - index }}
            className="group relative border-4 border-[#333] bg-[#0d0d0d] p-4 md:p-6 transition-all hover:border-accent hover:shadow-[0_0_20px_rgba(253,184,19,0.15)] flex flex-col h-full overflow-visible"
        >
            {/* Header with Title and Optional Status Badge */}
            <div className="flex justify-between items-start gap-4 mb-4 flex-wrap">
                <h3 className="font-pressStart text-sm md:text-base text-white uppercase leading-tight group-hover:text-accent transition-colors flex-1">
                    {title}
                </h3>
                {status && (
                    <div className="bg-accent text-black font-pressStart text-[10px] md:text-xs px-2 py-1 border-2 border-black shadow-lg shrink-0">
                        {status}
                    </div>
                )}
            </div>

            <p className="font-sans text-xs md:text-sm text-gray-400 mb-6 uppercase flex-grow">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="font-pressStart text-[8px] bg-[#1a1a1a] text-gray-400 px-2 py-1 border border-[#333] hover:text-white hover:border-accent transition-colors"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex gap-4">
                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-pressStart text-[9px] text-accent hover:text-white transition-colors"
                    >
                        <Github size={14} />
                        VIEW ON GITHUB
                    </a>
                )}
                {!githubUrl && status === 'IN PROGRESS' && (
                    <span className="flex items-center gap-2 font-pressStart text-[9px] text-gray-500 cursor-not-allowed">
                        LOCKED
                    </span>
                )}
            </div>
        </motion.div>
    );
}
