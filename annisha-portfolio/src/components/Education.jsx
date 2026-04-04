import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
    const education = [
        {
            degree: "MCA (Master of Computer Applications)",
            institution: "Kongu Engineering College",
            duration: "2023 - 2025",
            score: "CGPA 8.53",
            status: "Present",
        },
        {
            degree: "B.Sc Software Systems",
            institution: "College Name", // Placeholder for actual college from B.Sc
            duration: "2020 - 2023",
            score: "CGPA 8.13",
            status: "Completed",
        },
        {
            degree: "HSC (Class XII)",
            institution: "School Name",
            duration: "2019 - 2020",
            score: "72.5%",
            status: "Completed",
        },
        {
            degree: "SSLC (Class X)",
            institution: "School Name",
            duration: "2017 - 2018",
            score: "81.4%",
            status: "Completed",
        },
    ];

    return (
        <section id="education" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Education <span className="text-indigo-400">Timeline</span>
                    </h2>
                    <p className="text-slate-400">Academic foundation and achievements.</p>
                </div>

                <div className="max-w-3xl mx-auto relative border-l-2 border-indigo-500/20 pl-8 ml-4 sm:ml-auto">
                    {education.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="mb-12 relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[41px] top-0 w-5 h-5 bg-dark border-2 border-indigo-500 rounded-full z-10"></div>

                            <div className="glass-card p-6 border-white/5 hover:border-indigo-500/30 transition-colors">
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-3 text-indigo-400">
                                        <GraduationCap size={24} />
                                        <span className="text-sm font-bold uppercase tracking-widest">{item.status}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                                        <Calendar size={16} />
                                        {item.duration}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-100 mb-2">{item.degree}</h3>
                                <p className="text-indigo-300 font-medium mb-4">{item.institution}</p>
                                <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-md text-indigo-400 font-bold">
                                    {item.score}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
