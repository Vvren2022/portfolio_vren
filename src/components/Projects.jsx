import React from 'react';
import { profile } from '../data/profile';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="py-12 bg-surface">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Featured Projects</h2>
                    <p className="text-text-secondary">Real-world systems demonstrating Agentic AI capabilities.</p>
                </motion.div>

                <div className="space-y-24">
                    {profile.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
                        >
                            {/* Project Info */}
                            <div className="lg:col-span-5 lg:sticky lg:top-24">


                                <h3 className="text-3xl font-bold text-text-primary mb-2">{project.title}</h3>
                                <p className="text-lg text-text-secondary mb-6">{project.role}</p>

                                <p className="text-text-muted mb-8 text-lg leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-background text-text-secondary text-sm rounded border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-text-primary hover:text-primary transition-colors font-medium group"
                                >
                                    <FaGithub size={20} />
                                    <span>View Source</span>
                                    <FaExternalLinkAlt size={12} className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-0.5" />
                                </a>
                            </div>

                            {/* Project Details Card */}
                            <div className="lg:col-span-7 bg-background rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors">
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                            The Problem
                                        </h4>
                                        <p className="text-text-secondary leading-relaxed pl-4 border-l border-white/5">
                                            {project.problem}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                                            My Approach
                                        </h4>
                                        <p className="text-text-secondary leading-relaxed pl-4 border-l border-white/5">
                                            {project.approach}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                            The Impact
                                        </h4>
                                        <p className="text-text-secondary leading-relaxed pl-4 border-l border-white/5">
                                            {project.impact}
                                        </p>
                                    </div>
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
