import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Student Management System",
            description: "A comprehensive system built with React and Spring Boot for efficient student data management, reporting, and administration.",
            tech: ["React", "JAVA", "PGSQL"],
            github: "https://github.com/annishasaravanan/STUDENT-MANAGEMENT-SYSTEM-TASK",
            demo: "#",
            type: "Full Stack"
        },
        {
            title: "Velmart Department Store",
            description: "An e-commerce platform for department stores with real-time inventory updates, product search, and intuitive user interface.",
            tech: ["React", "NODEJS", "MongoDB"],
            github: "https://github.com/annishasaravanan/Velmart-mini-project",
            demo: "#",
            type: "E-commerce"
        },
        {
            title: "AI English Learning Chatbot",
            description: "An intelligent chatbot that helps users learn English through natural conversation, grammar correction, and vocabulary exercises.",
            tech: ["React", "NODEJS", "MongoDB"],
            github: "https://github.com/annishasaravanan/english-aibot ",
            demo: "#",
            type: "AI / Web"
        },
        {
            title: "KitchenWorx",
            description: "A specialized inventory and sales management system for kitchenware department stores, streamlining stock tracking.",
            tech: ["MERN","RESTAPI", "TAILWINDCSS"],
            github: "https://github.com/annishasaravanan/kitchenworx-project",
            demo: "#",
            type: "Inventory"
        },
        {
            title: "Task Management System",
            description: "A full-stack task management application using Python FastAPI and React JS with JWT-based authentication, implementing RESTful APIs with database integration to enable secure CRUD operations and seamless frontend–backend communication.",
            tech: ["FastAPI", "React", "Python", "JWT", "REST API"],
            github: "https://github.com/annishasaravanan/TASK-MANAGEMENT-SYSTEM",
            demo: "#",
            type: "Full Stack"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-dark/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Featured <span className="text-indigo-400">Projects</span>
                        </h2>
                        <p className="text-slate-400 max-w-xl">
                            Showcasing my technical journey through practical applications and problem-solving.
                        </p>
                    </div>
                    <a href="https://github.com/annishasaravanan" className="text-indigo-400 font-semibold flex items-center gap-2 hover:underline">
                        View All GitHub <ExternalLink size={18} />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card overflow-hidden group hover:border-indigo-500/30 transition-all duration-500"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                                        <Code2 size={24} />
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                                            <Github size={22} />
                                        </a>
                                        <a href={project.demo} className="text-slate-400 hover:text-white transition-colors">
                                            <ExternalLink size={22} />
                                        </a>
                                    </div>
                                </div>

                                <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-2 block">
                                    {project.type}
                                </span>
                                <h3 className="text-2xl font-bold mb-4 text-slate-100 group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
