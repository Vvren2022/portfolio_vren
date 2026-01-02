import React from 'react';
import { profile } from '../data/profile';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="pt-32 pb-12 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 text-center max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center max-w-4xl mx-auto"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
                        Available for new opportunities
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary mb-4 leading-tight">
                        {profile.name}
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-primary font-medium mb-6">
                        {profile.title}
                    </h2>



                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-lg font-medium transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            View Projects <FaArrowRight size={14} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-text-primary rounded-lg font-medium transition-all flex items-center justify-center"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
