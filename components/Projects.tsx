"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa'
import { projects } from '@/data'

const projectGradients = [
    {
        bg: "from-blue-50 via-blue-100 to-indigo-100 dark:from-blue-900/30 dark:via-blue-800/30 dark:to-indigo-900/30",
        overlay: "from-blue-600/60 via-indigo-600/40 to-transparent",
        accent: "text-blue-400",
    },
    {
        bg: "from-emerald-50 via-teal-100 to-cyan-100 dark:from-emerald-900/30 dark:via-teal-800/30 dark:to-cyan-900/30",
        overlay: "from-emerald-600/60 via-teal-600/40 to-transparent",
        accent: "text-emerald-400",
    },
    {
        bg: "from-purple-50 via-violet-100 to-pink-100 dark:from-purple-900/30 dark:via-violet-800/30 dark:to-pink-900/30",
        overlay: "from-purple-600/60 via-violet-600/40 to-transparent",
        accent: "text-purple-400",
    },
]

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
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Featured <span className="text-blue-600">Projects</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-linear-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                        Recent projects showcasing my technical skills and problem-solving approach
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        const gradient = projectGradients[index % projectGradients.length]
                        const hasLiveUrl = project.liveUrl && project.liveUrl !== '#'
                        const hasGithubUrl = project.githubUrl && project.githubUrl !== '#'
                        const hasBackendUrl = project.backendUrl && project.backendUrl !== '#'

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-600"
                            >
                                <div className={`relative h-52 bg-linear-to-br ${gradient.bg} flex items-center justify-center overflow-hidden`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className={`font-mono font-bold text-5xl opacity-10 select-none ${gradient.accent}`}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <span className={`font-semibold text-sm relative z-10 ${gradient.accent} opacity-60`}>
                                        {project.title}
                                    </span>

                                    <div className={`absolute inset-0 bg-linear-to-t ${gradient.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3`}>
                                        {hasLiveUrl && (
                                            <motion.a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.15 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-1.5 px-3 py-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white transition-colors shadow-lg text-xs font-semibold text-gray-800 dark:text-gray-200"
                                                title="Live Demo"
                                            >
                                                <FaExternalLinkAlt className="text-blue-600 dark:text-blue-400 text-xs" />
                                                <span>Live</span>
                                            </motion.a>
                                        )}
                                        {hasGithubUrl && (
                                            <motion.a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.15 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-1.5 px-3 py-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white transition-colors shadow-lg text-xs font-semibold text-gray-800 dark:text-gray-200"
                                                title={hasBackendUrl ? "Frontend Code" : "Source Code"}
                                            >
                                                <FaGithub className="text-gray-800 dark:text-gray-200" />
                                                <span>{hasBackendUrl ? "Frontend" : "Code"}</span>
                                            </motion.a>
                                        )}
                                        {hasBackendUrl && (
                                            <motion.a
                                                href={project.backendUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.15 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-1.5 px-3 py-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white transition-colors shadow-lg text-xs font-semibold text-gray-800 dark:text-gray-200"
                                                title="Backend Code"
                                            >
                                                <FaCode className="text-gray-700 dark:text-gray-300" />
                                                <span>Backend</span>
                                            </motion.a>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {project.status && (
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-1.5 animate-pulse"></span>
                                                    {project.status}
                                                </span>
                                            )}
                                            {project.type && (
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                                                    {project.type}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 leading-relaxed line-clamp-3">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-lg border border-blue-100 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
