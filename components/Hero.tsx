"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa6'

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4 relative overflow-hidden">
            {/* Enhanced Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div 
                    className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
                    animate={{ 
                        y: [0, -30, 0],
                        x: [0, 10, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                    className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"
                    animate={{ 
                        y: [0, 25, 0],
                        x: [0, -15, 0],
                        scale: [1, 0.9, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                    className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/15 rounded-full blur-2xl"
                    animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            delay: i * 0.5
                        }}
                    />
                ))}
            </div>
            
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    
                    <motion.h1 
                        className="text-6xl md:text-8xl font-bold mb-6 text-gray-900 dark:text-white leading-tight"
                        initial={{ opacity: 0, y: 20, rotateX: -15 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
                        style={{ perspective: "1000px" }}
                    >
                        Hi, I'm{" "}
                        <motion.span 
                            className="text-blue-600 inline-block"
                            whileHover={{ 
                                scale: 1.05,
                                rotateY: 5,
                                textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Ange
                        </motion.span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Software & Electronics Engineer
                    </motion.p>
                    
                    <motion.p 
                        className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        I build modern web applications with React, Next.js, and full-stack technologies. 
                        Final year IT student passionate about development and cybersecurity.
                    </motion.p>
                    
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        <motion.a 
                            href="#projects"
                            whileHover={{ 
                                scale: 1.05, 
                                y: -3,
                                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                                rotateX: -2
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.6 }}
                            />
                            <span className="relative z-10">View My Work</span>
                            <motion.span 
                                className="ml-1 relative z-10"
                                animate={{ x: [0, 3, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </motion.a>
                        <motion.a 
                            href="#contact"
                            whileHover={{ 
                                scale: 1.05, 
                                y: -3,
                                boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)",
                                rotateX: -2
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-blue-600 origin-left"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                Get In Touch
                            </span>
                        </motion.a>
                    </motion.div>
                    
                    <motion.div 
                        className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                    >
                        <motion.span 
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-default"
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            React
                        </motion.span>
                        <motion.span 
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-default"
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            Next.js
                        </motion.span>
                        <motion.span 
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-default"
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            Node.js
                        </motion.span>
                        <motion.span 
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-default"
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            Spring Boot
                        </motion.span>
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Bottom arrow with proper spacing */}
            <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <FaArrowDown className="text-gray-400 text-xl" />
            </motion.div>
        </section>
    )
}