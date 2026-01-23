"use client"

import React from 'react'
import { motion } from 'framer-motion'

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
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        About <span className="text-blue-600">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Bridging Hardware & Software Innovation
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            With a foundation in both Electrical Engineering and Information Technology, I bring
                            a unique perspective to software development. This dual background helps me build
                            systems that balance scalability with hardware constraints and performance considerations.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Focused on backend development with modern technologies, creating clean and maintainable
                            code. Currently expanding my skills in microservices architecture and system design
                            through hands-on projects and continuous learning.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                            <h4 className="text-lg font-semibold text-blue-600 mb-2">Frontend & Mobile</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                React, Next.js, React Native, TypeScript, TailwindCSS, HTML
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                            <h4 className="text-lg font-semibold text-blue-600 mb-2">Backend & Database</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Node.js, Express, NestJS, Spring Boot, MySQL, PostgreSQL, MongoDB
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                            <h4 className="text-lg font-semibold text-blue-600 mb-2">DevOps & Hardware</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Docker, Nginx, Git, Linux, Active Directory
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}