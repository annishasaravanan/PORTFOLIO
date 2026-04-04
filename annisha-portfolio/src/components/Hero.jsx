import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MousePointer2 } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Blobs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Hi, I'm <span className="gradient-text">Annisha Saravanan</span>
                    </h1>
                   <h2 className="text-2xl md:text-3xl font-medium text-slate-400 mb-8">
    Full Stack Developer 
</h2>
<p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed">
    Results-driven Full Stack Developer with hands-on experience in building scalable web applications using React.js, Python FastAPI, and PostgreSQL. Passionate about developing efficient, user-focused solutions and continuously learning modern technologies to deliver high-quality software.
</p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#projects" className="btn-primary group flex items-center gap-2">
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
                >
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
