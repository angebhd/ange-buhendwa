"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaAward, FaMedal, FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa'
import { experience, certifications, achievements } from '@/data'

function SectionHeader({ title, accent }: { title: string; accent: string }) {
    return (
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                <span className="text-blue-600">{accent}</span>{title}
            </h2>
            <div className="w-24 h-1.5 bg-linear-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </div>
    )
}

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4">

                {/* Experience */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <SectionHeader title="" accent="Experience" />

                    <div className="relative">
                        <motion.div
                            className="absolute left-6 top-0 w-px bg-linear-to-b from-blue-500 via-blue-300 to-transparent hidden sm:block"
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 1.4, ease: "easeOut" }}
                            viewport={{ once: true }}
                        />

                        <div className="space-y-6">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="sm:pl-16 relative"
                                >
                                    <div className="hidden sm:flex absolute left-0 top-6 w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500 items-center justify-center">
                                        {exp.type === 'work' ? (
                                            <FaBriefcase className="text-blue-600 dark:text-blue-400 text-lg" />
                                        ) : (
                                            <FaGraduationCap className="text-blue-600 dark:text-blue-400 text-lg" />
                                        )}
                                    </div>

                                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="sm:hidden shrink-0 w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500 flex items-center justify-center">
                                                {exp.type === 'work' ? (
                                                    <FaBriefcase className="text-blue-600 dark:text-blue-400" />
                                                ) : (
                                                    <FaGraduationCap className="text-blue-600 dark:text-blue-400" />
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                        {exp.title}
                                                    </h3>
                                                    <span className="text-xs font-medium px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-800/50 whitespace-nowrap">
                                                        {exp.period}
                                                    </span>
                                                </div>
                                                <a
                                                    href={exp.companyLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium mb-3 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm"
                                                >
                                                    {exp.company}
                                                    <FaExternalLinkAlt className="text-xs opacity-60" />
                                                </a>
                                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <SectionHeader title="" accent="Certifications" />

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -3 }}
                                className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                                        <FaAward className="text-blue-600 dark:text-blue-400 text-lg" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm leading-snug">{cert.title}</h3>
                                        <p className="text-blue-600 dark:text-blue-400 text-xs font-medium mb-0.5">{cert.issuer}</p>
                                        <p className="text-gray-400 dark:text-gray-500 text-xs mb-2">{cert.date}</p>
                                        {cert.credential && (
                                            <p className="text-gray-500 dark:text-gray-400 text-xs mb-2 font-mono">
                                                ID: {cert.credential}
                                            </p>
                                        )}
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
                                        >
                                            Verify Certificate
                                            <FaExternalLinkAlt className="text-xs opacity-60" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Achievements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <SectionHeader title="" accent="Achievements" />

                    <div className="grid md:grid-cols-2 gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -3 }}
                                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-yellow-200 dark:hover:border-yellow-800/50 hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 w-11 h-11 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center">
                                        <FaMedal className="text-yellow-500 dark:text-yellow-400 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                                            {achievement.description}
                                        </p>
                                        <span className="inline-block px-3 py-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 text-xs font-semibold rounded-full border border-yellow-100 dark:border-yellow-800/50">
                                            {achievement.year}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
