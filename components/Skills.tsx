"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaJava, FaDocker } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiNestjs, SiSpringboot, SiMysql, SiPostgresql, SiPrisma, SiNginx } from 'react-icons/si'
import { skills as skillsData } from '@/data'

const skillIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    'React': FaReact,
    'Next.js': SiNextdotjs,
    'TypeScript': SiTypescript,
    'Node.js': FaNodeJs,
    'Express': SiExpress,
    'NestJS': SiNestjs,
    'Spring Boot': SiSpringboot,
    'Java': FaJava,
    'TailwindCSS': SiTailwindcss,
    'MongoDB': SiMongodb,
    'PostgreSQL': SiPostgresql,
    'MySQL': SiMysql,
    'Prisma': SiPrisma,
    'Docker': FaDocker,
    'Nginx': SiNginx,
    'Git': FaGitAlt,
}

const skills = skillsData.map(skill => ({
    ...skill,
    icon: skillIcons[skill.name] || FaDatabase
}))

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

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
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