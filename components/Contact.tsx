"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

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
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Let&apos;s Work <span className="text-blue-600">Together</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
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
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            I&apos;m always open to discussing new opportunities and interesting projects.
                        </p>
                        
                        <div className="space-y-4">
                            <motion.a 
                                href="mailto:mickaelbhd@gmail.com"
                                whileHover={{ x: 5 }}
                                className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                            >
                                <FaEnvelope className="text-xl" />
                                <span>mickaelbhd@gmail.com</span>
                            </motion.a>
                            
                            <div className="flex space-x-4 pt-4">
                                {[
                                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/angebhd/" },
                                    { icon: FaGithub, href: "https://github.com/angebhd" },
                                    { icon: FaTwitter, href: "https://x.com/angebhd" }
                                ].map((social, index) => (
                                    <motion.a 
                                        key={index}
                                        href={social.href}
                                        whileHover={{ scale: 1.1 }}
                                        className="text-gray-500 hover:text-blue-600 transition-colors"
                                    >
                                        <social.icon className="text-2xl" />
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
                        className="space-y-6"
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                            />
                        </div>
                        <div>
                            <textarea
                                rows={5}
                                placeholder="Your Message"
                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
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
                    <p className="text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} Ange Buhendwa. Built with Next.js and Tailwind CSS.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}