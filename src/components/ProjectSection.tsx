"use client";

import { useLanguage } from './LanguageProvider';
import ProjectCard from './ProjectCard';

const projectMeta = [
    {
        tags: ["PYTHON", "MD"],
        githubUrl: "https://github.com/Acikgozens/my-Workspace/tree/main/Python_Studying_Notebook",
    },
    {
        tags: ["PYTHON", "WEB"],
        status: "IN PROGRESS",
    },
    {
        tags: ["PYTHON", "AI", "FIN"],
        status: "IN PROGRESS",
    },
    {
        tags: ["C#", "UNITY"],
        status: "CONCEPT",
    }
];


export default function ProjectSection() {
    const { dict } = useLanguage();

    return (
        <section id="projects" className="w-full px-4 md:px-12 py-12 md:py-24 bg-transparent">
            <div className="mx-auto max-w-6xl w-full flex flex-col items-center">

                {/* Retro Section Header */}
                <div className="mb-16 md:mb-24 text-center">
                    <h2 className="font-pressStart text-3xl md:text-5xl leading-loose md:leading-snug text-black dark:text-white uppercase tracking-tighter mb-4">
                        {dict.projects.sectionTitle.split(' ').map((word, i) =>
                            i === 1
                                ? <span key={i} className="text-accent"> {word} </span>
                                : <span key={i}>{i === 0 ? word : word}</span>
                        )}
                    </h2>
                    <div className="w-full flex justify-center gap-2 mt-6">
                        <div className="w-12 h-1 bg-accent"></div>
                        <div className="w-12 h-1 bg-[#222]"></div>
                        <div className="w-12 h-1 bg-[#222]"></div>
                    </div>
                </div>

                {/* Responsive Grid: 1 col on mobile, 2 col on md/lg */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl overflow-visible">
                    {dict.projects.items.map((item, idx) => (
                        <ProjectCard
                            key={idx}
                            index={idx}
                            title={item.title}
                            description={item.description}
                            tags={projectMeta[idx]?.tags ?? []}
                            githubUrl={projectMeta[idx]?.githubUrl}
                            status={projectMeta[idx]?.status}
                        />
                    ))}
                </div>

                {/* Bottom Footer for Section */}
                <div className="mt-16 font-pressStart text-[10px] text-gray-500 uppercase flex gap-4 animate-pulse">
                    <span>{dict.projects.scanning}</span>
                    <span className="hidden md:inline">{dict.projects.systemOnline}</span>
                </div>
            </div>
        </section>
    );
}
