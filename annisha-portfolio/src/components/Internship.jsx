import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Briefcase, FileText, ChevronDown, Download, Eye, X } from "lucide-react";
import certificatePdf from "../assets/images/Annisha S - Internship Certificate.pdf";
import code4xCertificatePdf from "../assets/images/Annisha S-Internship-Certification-Mar26.docx.pdf";

const Internship = () => {
    const [viewDetails, setViewDetails] = useState(false);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const experiences = [
        {
            company: "Atdoor Company",
            role: "Front-End Developer Intern",
            duration: "6 Months",
            description: "6-months Front-End Developer internship at Atdoor Company; developed responsive interfaces using React.js. Collaborated with designers to implement pixel-perfect designs and improved application performance by 20%.",
            skills: ["React.js", "Responsive Design", "UI/UX", "Component Development"]
        },
        {
            company: "Code4x",
            role: "Full Stack Developer",
            duration: "2 Months",
            description: "Completed a 2-month Full Stack Developer internship at Code4x, where I built an AI-powered social media management platform using React.js, Python FastAPI, and PostgreSQL for content automation, scheduling, and user engagement.",
            skills: ["React.js", "Python FastAPI", "PostgreSQL", "Full Stack Development"]
        }
    ];

    const internshipDetails = [
        { 
            icon: <FileText className="text-yellow-400" />,
            title: "Front-End Certificate", 
            description: "Completion certificate for Professional Front-End Development Internship - Atdoor Company",
            issuer: "Atdoor Company",
            year: "2024 - 2025",
            certificateUrl: certificatePdf,
            downloadName: "Annisha_S_Atdoor_Internship_Certificate.pdf"
        },
        { 
            icon: <FileText className="text-blue-400" />,
            title: "Full Stack Certificate", 
            description: "Completion certificate for Full Stack Developer Internship - Code4x",
            issuer: "Code4x",
            year: "2025",
            certificateUrl: code4xCertificatePdf,
            downloadName: "Annisha_S-Internship-Certification-Mar26.docx.pdf"
        }
    ];

    return (
        <section id="experience" className="py-24 bg-dark/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Professional Experience */}
                    <div>
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
                                <Briefcase className="text-indigo-400" /> Professional <span className="text-indigo-400">Experience</span>
                            </h2>
                            <button
                                onClick={() => setViewDetails(!viewDetails)}
                                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-sm"
                            >
                                {viewDetails ? "Hide" : "View"}
                                <ChevronDown size={18} className={`transition-transform duration-300 ${viewDetails ? "rotate-180" : ""}`} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-8">
                            {experiences.map((exp, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="glass-card p-8 relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

                                    <h3 className="text-2xl font-bold text-slate-100 mb-2">{exp.role}</h3>
                                    <p className="text-indigo-400 font-semibold text-lg mb-4">{exp.company}</p>
                                    <p className="text-slate-400 mb-6 leading-relaxed">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {exp.skills.map((skill, sIdx) => (
                                            <span key={sIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Internship Details - Expandable Certificate */}
                    <div>
                        <AnimatePresence>
                            {viewDetails && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
                                        <Award className="text-purple-400" /> Internship <span className="text-purple-400">Details</span>
                                    </h2>

                                    <div className="grid gap-6">
                                        {internshipDetails.map((detail, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="relative group overflow-hidden"
                                            >
                                                <div className="glass-card p-8 border-white/10 hover:border-yellow-500/50 transition-all duration-300">
                                                    {/* Background glow effect */}
                                                    <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                                                    <div className="relative z-10">
                                                        <div className="flex items-start justify-between mb-6">
                                                            <div className="p-4 bg-yellow-500/20 rounded-2xl text-yellow-400">
                                                                {detail.icon}
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <button 
                                                                    onClick={() => setSelectedPdf(detail.certificateUrl)}
                                                                    className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 flex items-center gap-2 group/btn"
                                                                >
                                                                    <Eye size={20} />
                                                                    <span className="text-sm font-semibold hidden sm:inline">View</span>
                                                                </button>
                                                                <a 
                                                                    href={detail.certificateUrl} 
                                                                    download={detail.downloadName || "Certificate.pdf"}
                                                                    className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 flex items-center gap-2 group/btn"
                                                                >
                                                                    <Download size={20} />
                                                                    <span className="text-sm font-semibold hidden sm:inline">Download</span>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <h3 className="text-2xl font-bold text-slate-100 mb-3">{detail.title}</h3>
                                                        
                                                        <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                                                            {detail.description}
                                                        </p>

                                                        <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                                                            <div>
                                                                <p className="text-slate-400 text-xs mb-1">Issued By</p>
                                                                <p className="text-slate-100 font-semibold text-base">{detail.issuer}</p>
                                                            </div>
                                                            <div className="border-l border-white/10 pl-6">
                                                                <p className="text-slate-400 text-xs mb-1">Year</p>
                                                                <p className="text-slate-100 font-semibold text-base">{detail.year}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {!viewDetails && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="h-full flex items-center justify-center min-h-96"
                            >
                                <div className="text-center">
                                    <div className="mb-6">
                                        <FileText className="text-slate-600 mx-auto mb-4" size={56} />
                                    </div>
                                    <p className="text-slate-400 text-lg font-semibold">Click "View" to see internship certificate</p>
                                    <p className="text-slate-500 text-sm mt-2">View and download your completion certificate</p>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
            {/* PDF Modal Popup */}
            <AnimatePresence>
                {selectedPdf && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedPdf(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            className="bg-slate-900 rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-slate-800/50">
                                <h3 className="text-lg font-semibold text-white">Certificate Viewer</h3>
                                <button
                                    onClick={() => setSelectedPdf(null)}
                                    className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="flex-1 w-full bg-slate-950 p-2">
                                <iframe 
                                    src={selectedPdf} 
                                    className="w-full h-full rounded-xl border-0"
                                    title="PDF Certificate viewer"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Internship;
