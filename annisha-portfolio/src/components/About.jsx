import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code } from "lucide-react";
import profileImg from "../assets/images/download.jpg";

const About = () => {
    const highlights = [
        {
            icon: <GraduationCap className="text-indigo-400" />,
            title: "Education",
            description: "MCA Student at Kongu Engineering College",
        },
        {
            icon: <Briefcase className="text-purple-400" />,
            title: "Experience",
            description: "8 Months Internship Completed",
        },
        {
            icon: <Code className="text-pink-400" />,
            title: "Interests",
            description: "Web Tech & Data Structures",
        },
    ];

    return (
        <section id="about" className="py-24 bg-dark/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Main card container */}
                        <div className="relative z-10 aspect-square rounded-3xl overflow-hidden border border-white/10 w-full max-w-md shadow-2xl">
                            <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 flex items-center justify-center backdrop-blur-md">
                                <img
                                    src={profileImg}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-indigo-400">Me</span>
                        </h2>
                        <p className="text-slate-300 leading-relaxed mb-8 text-lg text-justify">
                            To obtain a Software Development role where I can leverage my full-stack development 
                            skills and 8 months of internship experience to build scalable and efficient applications. 
                            I aim to continuously learn new technologies, enhance my problem-solving abilities, 
                            and contribute effectively to organizational growth while delivering high-quality solutions.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-6">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="p-4 glass-card hover:bg-white/10 transition-colors">
                                    <div className="mb-3">{item.icon}</div>
                                    <h3 className="font-semibold text-slate-100 mb-1 text-sm">{item.title}</h3>
                                    <p className="text-xs text-slate-400 leading-tight">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
