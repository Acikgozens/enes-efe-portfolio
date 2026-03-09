import ProjectCard from './ProjectCard';

const projects = [
    {
        title: "Python Studying Notebook",
        description: "A repository documenting my Python learning journey, covering basics to advanced concepts and algorithms.",
        tags: ["PYTHON", "MD"],
        githubUrl: "https://github.com/Acikgozens/my-Workspace/tree/main/Python_Studying_Notebook",
    },
    {
        title: "To-Do Application",
        description: "A robust task management tool designed to refine web development skills and command-line efficiency.",
        tags: ["PYTHON", "WEB"],
        status: "IN PROGRESS",
    },
    {
        title: "AI Trading Bot",
        description: "Intelligence agent for financial markets, focused on trend analysis and high-frequency data processing.",
        tags: ["PYTHON", "AI", "FIN"],
        status: "IN PROGRESS",
    },
    {
        title: "Mobile Game Concept",
        description: "Exploration of game mechanics, logic, and immersive character design for mobile platforms.",
        tags: ["C#", "UNITY"],
        status: "CONCEPT",
    }
];

export default function ProjectSection() {
    return (
        <section id="projects" className="w-full px-4 md:px-12 py-12 md:py-24 bg-[#050505]/50 border-y border-[#1a1a1a]">
            <div className="mx-auto max-w-6xl w-full flex flex-col items-center">

                {/* Retro Section Header */}
                <div className="mb-16 md:mb-24 text-center">
                    <h2 className="font-pressStart text-3xl md:text-5xl leading-loose md:leading-snug text-white uppercase tracking-tighter mb-4">
                        SELECT <span className="text-accent">YOUR</span> MISSION
                    </h2>
                    <div className="w-full flex justify-center gap-2 mt-6">
                        <div className="w-12 h-1 bg-accent"></div>
                        <div className="w-12 h-1 bg-[#222]"></div>
                        <div className="w-12 h-1 bg-[#222]"></div>
                    </div>
                </div>

                {/* Responsive Grid: 1 col on mobile, 2 col on md/lg */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl overflow-visible">
                    {projects.map((project, idx) => (
                        <ProjectCard
                            key={idx}
                            index={idx}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            githubUrl={project.githubUrl}
                            status={project.status}
                        />
                    ))}
                </div>

                {/* Bottom Footer for Section */}
                <div className="mt-16 font-pressStart text-[10px] text-gray-500 uppercase flex gap-4 animate-pulse">
                    <span>{">>"} SCANNING ARCHIVES ...</span>
                    <span className="hidden md:inline">SYSTEM: ONLINE</span>
                </div>
            </div>
        </section>
    );
}
