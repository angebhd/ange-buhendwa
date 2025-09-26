"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaAward, FaTrophy, FaMedal } from 'react-icons/fa'

const certifications = [
    {
        title: "Agile Project Management",
        issuer: "Google",
        date: "Aug 2024",
        credential: "U7UL021NFGH3",
        link: "https://www.coursera.org/account/accomplishments/verify/U7UL021NFGH3"
    },
    {
        title: "Advanced Network Operations",
        issuer: "Internet Society",
        date: "Apr 2024",
        credential: "",
        link: "https://certificates.isoc.org/50db0a66-3e96-49c1-9e81-6ac5f9319947#gs.8f69tg"
    },
    {
        title: "Junior Software Development",
        issuer: "BAG Technologies",
        date: "Feb 2024",
        credential: "",
        link: "https://app.bag.work/certificate/303767cc-9d18-4b82-ada7-ac4a52b0f215"
    },
    {
        title: "Network Security",
        issuer: "Cisco Networking Academy",
        date: "Oct 2023",
        credential: "",
        link: "https://www.credly.com/badges/29a1b73d-ac83-48cb-a089-a9f543f1b4a3/public_url"
    },
    {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "Apr 2023",
        credential: "",
        link: "https://www.freecodecamp.org/certification/angebhd/responsive-web-design"
    }
]

const achievements = [
    {
        title: "2nd Place at PicoCTF Africa",
        description: "Undergraduate National Level Cybersecurity Competition",
        year: "2024"
    },
    {
        title: "Gender & Family Innovation Challenge Finalist",
        description: "Organized by RISA, UN Women, and Ministry of Gender",
        year: "2024"
    }
]

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
                                    Software Development Training
                                </h3>
                                <p className="text-blue-600 font-medium mb-2">the-gym Rwanda</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">Nov 2024 – Present (~11 months)</p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Rwanda's most intense software development program - a 12-month intensive training 
                                    covering React.js, Node.js, TailwindCSS, Test Driven Development, CI/CD pipelines, 
                                    agile methodologies, and professional communication skills. Includes project work, 
                                    algorithm training, and one-on-one coaching sessions with international developers.
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