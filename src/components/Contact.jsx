import React from 'react';
import { profile } from '../data/profile';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-12 bg-surface relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Ready to build something impactful?</h2>
                    <p className="text-text-secondary text-lg">
                        Whether you're looking for a technical co-founder, an AI lead, or just want to chat about Agentic AI.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <a
                        href={profile.social.email}
                        className="group flex items-center gap-4 px-8 py-5 bg-background border border-white/5 rounded-xl hover:border-primary/50 transition-all w-full md:w-auto"
                    >
                        <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                            <FaEnvelope className="text-2xl text-text-secondary group-hover:text-primary" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-text-muted">Email Me</p>
                            <p className="text-text-primary font-medium">vrenvaviya2022@gmail.com</p>
                        </div>
                    </a>

                    <a
                        href={profile.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 px-8 py-5 bg-background border border-white/5 rounded-xl hover:border-primary/50 transition-all w-full md:w-auto"
                    >
                        <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                            <FaLinkedin className="text-2xl text-text-secondary group-hover:text-primary" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-text-muted">Connect on</p>
                            <p className="text-text-primary font-medium">LinkedIn</p>
                        </div>
                    </a>

                    <a
                        href={profile.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 px-8 py-5 bg-background border border-white/5 rounded-xl hover:border-primary/50 transition-all w-full md:w-auto"
                    >
                        <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                            <FaGithub className="text-2xl text-text-secondary group-hover:text-primary" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-text-muted">Follow on</p>
                            <p className="text-text-primary font-medium">GitHub</p>
                        </div>
                    </a>
                </div>

                <div className="mt-20 text-center border-t border-white/5 pt-8">
                    <p className="text-text-muted text-sm">
                        &copy; {new Date().getFullYear()} Viren Vaviya. Built with React, Tailwind & Agentic AI.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
