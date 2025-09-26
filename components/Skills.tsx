"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaJava, FaDocker, FaLinux } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiNestjs, SiSpringboot, SiMysql, SiPostgresql, SiPrisma, SiJsonwebtokens, SiNginx, SiArduino } from 'react-icons/si'

const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900 dark:text-white' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-700 dark:text-gray-300' },
    { name: 'NestJS', icon: SiNestjs, color: 'text-red-600' },
    { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-700' },
    { name: 'Java', icon: FaJava, color: 'text-orange-600' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
    { name: 'Prisma', icon: SiPrisma, color: 'text-gray-900 dark:text-white' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
    { name: 'Nginx', icon: SiNginx, color: 'text-green-600' },
    { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
]

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Skills & <span className="text-blue-600">Technologies</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Technologies I use to bring ideas to life
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300"
                        >
                            <skill.icon className={`text-4xl ${skill.color} mx-auto mb-4`} />
                            <h3 className="text-gray-900 dark:text-white font-medium">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}