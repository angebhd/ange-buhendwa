"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaAward, FaMedal } from 'react-icons/fa'
import { experience, certifications, achievements } from '@/data'

export default function Experience() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4">
                {/* Experience */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                        <span className="text-blue-600">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                        <div className="flex items-start space-x-4">
                            <FaGraduationCap className="text-blue-600 text-2xl mt-1" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {experience.training.title}
                                </h3>
                                <a 
                                    href={experience.training.companyLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 font-medium mb-2 hover:text-blue-800 transition-colors"
                                >
                                    {experience.training.company}
                                </a>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{experience.training.period}</p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {experience.training.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                        <span className="text-blue-600">Certifications</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
                    
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-start space-x-3">
                                    <FaAward className="text-blue-600 text-xl mt-1" />
                                    <div>
                                        <a 
                                            href={cert.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="font-bold text-gray-900 dark:text-white mb-1 hover:text-blue-600 transition-colors"
                                        >
                                            <h3>{cert.title}</h3>
                                        </a>
                                        <p className="text-blue-600 text-sm font-medium">{cert.issuer}</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.date}</p>
                                        {cert.credential && (
                                            <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">
                                                ID: {cert.credential}
                                            </p>
                                        )}
                                        <a 
                                            href={cert.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-block mt-2 text-xs text-blue-600 hover:text-blue-800 transition-colors"
                                        >
                                            Verify Certificate →
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
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                        <span className="text-blue-600">Achievements</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <FaMedal className="text-yellow-600 text-2xl mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-2">
                                            {achievement.description}
                                        </p>
                                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
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