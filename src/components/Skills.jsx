import React from 'react';
import { profile } from '../data/profile';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Technical Arsenal</h2>
                    <p className="text-text-secondary">Technologies I use to build production-grade systems.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(profile.skills).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors"
                        >
                            <h3 className="text-xl font-semibold text-text-primary mb-6 border-b border-white/5 pb-2">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-white/5 text-text-secondary text-sm rounded-md border border-white/5 hover:bg-white/10 hover:text-primary transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
