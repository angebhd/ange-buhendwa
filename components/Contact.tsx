"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { personalInfo } from '@/data'

const socialLinks = [
    { icon: FaLinkedin, href: personalInfo.social.linkedin, label: "LinkedIn", color: "hover:text-blue-600 dark:hover:text-blue-400" },
    { icon: FaGithub, href: personalInfo.social.github, label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: FaTwitter, href: personalInfo.social.twitter, label: "Twitter/X", color: "hover:text-sky-500 dark:hover:text-sky-400" },
]

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Let&apos;s Work <span className="text-blue-600">Together</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-linear-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            I&apos;m always open to discussing new opportunities and interesting projects.
                        </p>

                        <motion.a
                            href={`mailto:${personalInfo.email}`}
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6 group"
                        >
                            <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
                                <FaEnvelope className="text-lg" />
                            </div>
                            <span className="font-medium">{personalInfo.email}</span>
                        </motion.a>

                        <div className="space-y-1">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">Find me on</p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        title={social.label}
                                        className={`p-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 transition-all duration-200 ${social.color}`}
                                    >
                                        <social.icon className="text-xl" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Your Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                            <textarea
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 resize-none"
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-6 py-3.5 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
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
