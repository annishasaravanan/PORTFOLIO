import React from "react";
import { motion } from "framer-motion";
import {
    FaReact, FaNodeJs, FaJava, FaPython, FaHtml5, FaGithub, FaDatabase
} from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoJavascript } from "react-icons/bi";
import { SiMongodb, SiExpress } from "react-icons/si";
import { Award } from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
                { name: "JavaScript", icon: <BiLogoJavascript className="text-[#F7DF1E]" /> },
                { name: "Tailwind CSS", icon: <BiLogoTailwindCss className="text-[#38B2AC]" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
            ],
        },
        {
            title: "Backend & DB",
            skills: [
                { name: "MERN Stack", icon: <SiMongodb className="text-[#47A248]" /> },
                { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
                { name: "Express.js", icon: <SiExpress className="text-white" /> },
                { name: "MongoDB", icon: <FaDatabase className="text-[#47A248]" /> },
            ],
        },
        {
            title: "Languages",
            skills: [
                { name: "Java", icon: <FaJava className="text-[#007396]" /> },
                { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
                { name: "JavaScript", icon: <BiLogoJavascript className="text-[#F7DF1E]" /> },
            ],
        },
        {
            title: "Tools & Others",
            skills: [
                { name: "GitHub", icon: <FaGithub className="text-white" /> },
                { name: "REST APIs", icon: <Code className="text-slate-400" /> },
            ],
        },
    ];

    return (
        <section id="skills" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-indigo-400">Skills</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Hands-on experience in full stack development with expertise in React.js, FastAPI, and PostgreSQL, gained through internships and project-based learning.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 glass-card group hover:border-indigo-500/50 transition-all duration-300"
                        >
                            <h3 className="text-lg font-bold mb-6 text-slate-100 border-b border-white/5 pb-2">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="flex flex-col items-center gap-2 w-[calc(50%-0.5rem)]"
                                    >
                                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                            {skill.icon}
                                        </div>
                                        <span className="text-xs text-slate-400 font-medium">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Section */}
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            My <span className="text-pink-400">Certifications</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 glass-card hover:border-pink-500/50 transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                            <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-3">
                                <Award className="text-pink-400 shrink-0" /> Microsoft Azure AZ-900
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                Successfully earned Microsoft Azure AZ-900 Certification, demonstrating strong knowledge of cloud concepts, Azure services, security, and pricing.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 glass-card hover:border-indigo-500/50 transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                            <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-3">
                                <Award className="text-indigo-400 shrink-0" /> MERN Stack Credential
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                Earned a professional MERN Stack credential via Udemy, covering MongoDB, Express.js, React, and Node.js.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Internal utility to avoid import errors since I'm using icons mostly
const Code = ({ className, size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

export default Skills;
