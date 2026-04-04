import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-8 text-center">Contact Information</h3>
                        <div className="space-y-6">
                            {[
                                { icon: <Mail />, title: "Email", value: "annishasaravanan83@gmail.com", link: "mailto:annishasaravanan83@gmail.com" },
                                { icon: <Phone />, title: "Phone", value: "+91 93611 12081", link: "tel:+919361112081" },
                                { icon: <MapPin />, title: "Location", value: "Tamil Nadu, India", link: "#" },
                            ].map((info, idx) => (
                                <a
                                    key={idx}
                                    href={info.link}
                                    className="flex items-center gap-6 p-4 glass-card border-white/5 hover:border-indigo-500/30 transition-all group"
                                >
                                    <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:scale-110 transition-transform">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm mb-1">{info.title}</p>
                                        <p className="text-slate-100 font-semibold">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="mt-12">
                            <div className="flex justify-center gap-4">
                                {[
                                    { icon: <Github />, link: "https://github.com/annishasaravanan" },
                                    { icon: <Linkedin />, link: "https://linkedin.com/in/annisha-saravanan" },
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center glass-card hover:bg-indigo-600 transition-colors text-slate-300 hover:text-white"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>


                </div>
            </div>
        </section>
    );
};

export default Contact;
