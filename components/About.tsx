"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaServer, FaDatabase, FaCode, FaTools } from 'react-icons/fa'
import { about } from '@/data'

const categoryConfig: Record<string, { icon: React.ComponentType<{ className?: string }>, border: string, text: string, bg: string }> = {
    "Backend & APIs": { icon: FaServer, border: "border-blue-500", text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
    "Database & Storage": { icon: FaDatabase, border: "border-green-500", text: "text-green-600 dark:text-green-400", bg: "bg-green-50 dark:bg-green-900/20" },
    "Frontend (Supporting)": { icon: FaCode, border: "border-indigo-500", text: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-50 dark:bg-indigo-900/20" },
    "DevOps & Hardware": { icon: FaTools, border: "border-cyan-500", text: "text-cyan-600 dark:text-cyan-400", bg: "bg-cyan-50 dark:bg-cyan-900/20" },
}

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        About <span className="text-blue-600">Me</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-linear-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            {about.title}
                        </h3>
                        {about.description.map((paragraph) => (
                            <p key={paragraph.slice(0, 30)} className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {about.techStacks.map((stack, i) => {
                            const config = categoryConfig[stack.category] ?? {
                                icon: FaCode,
                                border: "border-blue-500",
                                text: "text-blue-600 dark:text-blue-400",
                                bg: "bg-blue-50 dark:bg-blue-900/20"
                            }
                            const Icon = config.icon
                            return (
                                <motion.div
                                    key={stack.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -3 }}
                                    className={`bg-white dark:bg-gray-700 p-5 rounded-xl shadow-sm border-l-4 hover:shadow-md transition-all duration-300 ${config.border}`}
                                >
                                    <div className={`flex items-center gap-2 mb-2 ${config.text}`}>
                                        <div className={`p-1.5 rounded-lg ${config.bg}`}>
                                            <Icon className="text-base" />
                                        </div>
                                        <h4 className="text-sm font-semibold">{stack.category}</h4>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                                        {stack.technologies}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
