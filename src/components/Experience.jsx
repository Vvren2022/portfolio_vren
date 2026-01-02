import React from 'react';
import { profile } from '../data/profile';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="py-12 bg-surface">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Experience</h2>
                    <p className="text-text-secondary">My professional journey in AI/ML Engineering.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {profile.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-surface/50 hover:bg-surface p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/5"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">{exp.role}</h3>
                                    <h4 className="text-base text-text-secondary font-medium">{exp.company}</h4>
                                </div>
                                <span className="text-xs font-mono text-text-muted bg-white/5 px-2 py-1 rounded whitespace-nowrap ml-4">
                                    {exp.duration}
                                </span>
                            </div>

                            <div className="mb-4 text-xs text-text-muted flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                {exp.location}
                            </div>

                            {Array.isArray(exp.description) ? (
                                <ul className="list-disc list-outside ml-4 space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-text-secondary text-sm leading-relaxed opacity-90 pl-1">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-text-secondary leading-relaxed text-sm opacity-90">
                                    {exp.description}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
