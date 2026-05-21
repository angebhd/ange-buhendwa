"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { personalInfo } from '@/data'

const socialLinks = [
    { icon: FaLinkedin, href: personalInfo.social.linkedin, label: "LinkedIn", color: "hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20" },
    { icon: FaGithub, href: personalInfo.social.github, label: "GitHub", color: "hover:border-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800" },
    { icon: FaTwitter, href: personalInfo.social.twitter, label: "Twitter/X", color: "hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20" },
]

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Let&apos;s Work <span className="text-blue-600">Together</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-linear-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-lg leading-relaxed">
                        Have a project in mind? I&apos;m always open to new opportunities and interesting collaborations.
                    </p>
                </motion.div>

                {/* Email CTA */}
                <motion.a
                    href={`mailto:${personalInfo.email}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-4 px-8 py-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-800 dark:text-gray-200 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 mb-12 group"
                >
                    <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/60 transition-colors">
                        <FaEnvelope className="text-xl" />
                    </div>
                    <span className="font-semibold text-lg">{personalInfo.email}</span>
                </motion.a>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium uppercase tracking-widest">
                        Find me on
                    </p>
                    <div className="flex justify-center gap-4">
                        {socialLinks.map((social, i) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.45 + i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.08, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                title={social.label}
                                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 font-medium text-sm transition-all duration-200 ${social.color}`}
                            >
                                <social.icon className="text-lg" />
                                <span>{social.label}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
                >
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Ange Buhendwa. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
