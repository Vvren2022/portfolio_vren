import React from 'react';
import { profile } from '../data/profile';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    {/* About Me Column */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">About Me</h2>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            {profile.bio}
                        </p>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Education</h2>
                        <div className="space-y-6">
                            {profile.education.map((edu, index) => (
                                <div key={index} className="group bg-surface/50 hover:bg-surface p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">{edu.institution}</h4>
                                        <span className="text-xs font-mono text-text-muted bg-white/5 px-2 py-1 rounded whitespace-nowrap ml-2">{edu.duration}</span>
                                    </div>
                                    <p className="text-text-secondary font-medium text-base mb-1">{edu.degree}</p>
                                    <p className="text-text-muted text-sm mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                        {edu.location}
                                    </p>
                                    <p className="text-text-secondary text-sm border-t border-white/5 pt-4 mt-2">
                                        <span className="text-primary text-xs uppercase tracking-wider font-bold mr-2">Focus:</span>
                                        {edu.focus}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
