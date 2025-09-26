"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { projects } from '@/data'

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Featured <span className="text-blue-600">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Some of my recent work that showcases my skills
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 flex items-center justify-center">
                                <span className="text-gray-600 dark:text-gray-300 font-medium">Project Preview</span>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                                    <motion.a 
                                        href={project.liveUrl}
                                        whileHover={{ scale: 1.1 }}
                                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                                        title="Live Demo"
                                    >
                                        <FaExternalLinkAlt className="text-white" />
                                    </motion.a>
                                    <motion.a 
                                        href={project.githubUrl}
                                        whileHover={{ scale: 1.1 }}
                                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                                        title={project.backendUrl ? "Frontend Code" : "Source Code"}
                                    >
                                        <FaGithub className="text-white" />
                                    </motion.a>
                                    {project.backendUrl && (
                                        <motion.a 
                                            href={project.backendUrl}
                                            whileHover={{ scale: 1.1 }}
                                            className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                                            title="Backend Code"
                                        >
                                            <FaGithub className="text-white text-sm" />
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.status && (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400">
                                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-1.5"></span>
                                                {project.status}
                                            </span>
                                        )}
                                        {project.type && (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400">
                                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></span>
                                                {project.type}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span 
                                            key={tech}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}