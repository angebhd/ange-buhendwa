"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaJava, FaDocker } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiNestjs, SiSpringboot, SiMysql, SiPostgresql, SiPrisma, SiNginx, SiGraphql, SiJest } from 'react-icons/si'
import { skills as skillsData } from '@/data'

const skillIcons: { [key: string]: React.ComponentType<{ className?: string }> | string } = {
    'React': FaReact,
    'Next.js': SiNextdotjs,
    'TypeScript': SiTypescript,
    'TailwindCSS': SiTailwindcss,
    'Node.js': FaNodeJs,
    'Express': SiExpress,
    'NestJS': SiNestjs,
    'Jest': SiJest,
    'Java': FaJava,
    'Spring Boot': SiSpringboot,
    'GraphQL': SiGraphql,
    'Socket.IO': '/socketio.png',
    'MongoDB': SiMongodb,
    'PostgreSQL': SiPostgresql,
    'MySQL': SiMysql,
    'Prisma': SiPrisma,
    'WebSockets': '/websocket.png',
    'Docker': FaDocker,
    'Nginx': SiNginx,
    'Git': FaGitAlt,
}

const skillGroups = [
    { label: "Frontend", names: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'] },
    { label: "Backend", names: ['Node.js', 'Express', 'NestJS', 'Java', 'Spring Boot', 'GraphQL', 'Socket.IO', 'WebSockets', 'Jest'] },
    { label: "Database", names: ['MongoDB', 'PostgreSQL', 'MySQL', 'Prisma'] },
    { label: "DevOps & Tools", names: ['Docker', 'Nginx', 'Git'] },
]

const groupColors: Record<string, { label: string; dot: string }> = {
    "Frontend": { label: "text-purple-600 dark:text-purple-400", dot: "bg-purple-500" },
    "Backend": { label: "text-blue-600 dark:text-blue-400", dot: "bg-blue-500" },
    "Database": { label: "text-green-600 dark:text-green-400", dot: "bg-green-500" },
    "DevOps & Tools": { label: "text-orange-600 dark:text-orange-400", dot: "bg-orange-500" },
}

const skillsByName = Object.fromEntries(skillsData.map(s => [s.name, s]))

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
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Skills & <span className="text-blue-600">Technologies</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                        Technologies and tools I work with
                    </p>
                </motion.div>

                <div className="space-y-10">
                    {skillGroups.map((group, groupIndex) => {
                        const colors = groupColors[group.label]
                        const groupSkills = group.names
                            .map(name => ({ ...(skillsByName[name] ?? { name, color: 'text-gray-500' }), icon: skillIcons[name] ?? FaDatabase }))

                        return (
                            <motion.div
                                key={group.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <span className={`w-2.5 h-2.5 rounded-full ${colors.dot} flex-shrink-0`}></span>
                                    <h3 className={`text-sm font-bold uppercase tracking-widest ${colors.label}`}>
                                        {group.label}
                                    </h3>
                                    <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800"></div>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                    {groupSkills.map((skill, skillIndex) => {
                                        const totalDelay = groupIndex * 0.1 + skillIndex * 0.06
                                        return (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.4, delay: totalDelay }}
                                                viewport={{ once: true }}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center hover:shadow-md border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 group"
                                            >
                                                {typeof skill.icon === 'string' ? (
                                                    <div className="w-10 h-10 mx-auto mb-3 relative">
                                                        <Image
                                                            src={skill.icon}
                                                            alt={skill.name}
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                ) : (
                                                    <skill.icon className={`text-3xl ${skill.color} mx-auto mb-3`} />
                                                )}
                                                <h3 className="text-gray-700 dark:text-gray-300 font-medium text-xs group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{skill.name}</h3>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
