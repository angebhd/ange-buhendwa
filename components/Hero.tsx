"use client"

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa6'
import { personalInfo, skills as allSkills } from '@/data'

const terminalSkills = ['TypeScript', 'Spring Boot', 'NestJS', 'PostgreSQL', 'MongoDB', 'Next.js', 'Docker', 'AWS']
    .map(name => allSkills.find(s => s.name === name)?.name ?? name)

const TypewriterText = ({ text, className }: { text: string; className?: string }) => {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(text.slice(0, currentIndex + 1))
                setCurrentIndex(currentIndex + 1)
            }, 100)
            return () => clearTimeout(timeout)
        }
    }, [currentIndex, text])

    return (
        <span className={`relative whitespace-nowrap ${className ?? ''}`}>
            {displayText}
            <motion.span
                className="ml-1 w-[3px] bg-cyan-400 inline-block"
                style={{ height: '0.85em', verticalAlign: 'middle' }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
            />
        </span>
    )
}

export default function Hero() {
    const { scrollY } = useScroll()
    const bgY = useTransform(scrollY, [0, 600], [0, 180])

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4 relative overflow-hidden">
            {/* Geeky Matrix-style Background */}
            <motion.div className="absolute inset-0 overflow-hidden" style={{ y: bgY }}>
                {/* Matrix rain */}
                {[...Array(14)].map((_, i) => (
                    <motion.div
                        key={`matrix-${i}`}
                        className="absolute text-green-500/30 font-mono text-xs select-none"
                        style={{
                            left: `${i * 7}%`,
                            top: '-15%'
                        }}
                        animate={{
                            y: ['0vh', '120vh'],
                            opacity: [0, 1, 0.5, 0]
                        }}
                        transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: "linear"
                        }}
                    >
                        {Array.from({ length: 15 }, (_, j) => (
                            <div key={j} className="mb-1">
                                {Math.random() > 0.7 ? Math.floor(Math.random() * 16).toString(16).toUpperCase() : (Math.random() > 0.5 ? '1' : '0')}
                            </div>
                        ))}
                    </motion.div>
                ))}

                {/* Floating code symbols with glow */}
                {['<div>', '{...}', 'async', 'await', 'const'].map((symbol, i) => (
                    <motion.div
                        key={`symbol-${i}`}
                        className="absolute text-cyan-400/40 font-mono text-sm font-bold"
                        style={{
                            left: `${5 + i * 9}%`,
                            top: `${15 + (i % 4) * 20}%`,
                            filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.4))'
                        }}
                        animate={{
                            y: [0, -25, 0],
                            rotate: [0, 180, 360],
                            scale: [0.8, 1.3, 0.8],
                            opacity: [0.2, 0.8, 0.2]
                        }}
                        transition={{
                            duration: 5 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3
                        }}
                    >
                        {symbol}
                    </motion.div>
                ))}

                {/* Pulsing circuit lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
                    {[...Array(8)].map((_, i) => (
                        <motion.path
                            key={`circuit-${i}`}
                            d={`M${i * 125},0 L${i * 125},${200 + i * 50} L${(i + 1) * 125},${200 + i * 50} L${(i + 1) * 125},1000`}
                            stroke="url(#gradient)"
                            strokeWidth="1"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.6 }}
                            transition={{
                                duration: 3,
                                delay: i * 0.5,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />
                    ))}
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Glowing orbs with enhanced effects */}
                <motion.div
                    className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-green-400/30 to-blue-500/30 rounded-full blur-2xl"
                    animate={{
                        y: [0, -40, 0],
                        x: [0, 30, 0],
                        scale: [1, 1.5, 1],
                        rotate: [0, 360]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"
                    animate={{
                        y: [0, 35, 0],
                        x: [0, -35, 0],
                        scale: [1, 0.7, 1],
                        rotate: [360, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating geometric shapes */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={`geo-${i}`}
                        className={`absolute w-4 h-4 border-2 border-blue-400/30 ${i % 2 === 0 ? 'rotate-45' : 'rounded-full'}`}
                        style={{
                            left: `${20 + i * 12}%`,
                            top: `${30 + (i % 2) * 40}%`
                        }}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 360],
                            scale: [1, 1.5, 1],
                            borderColor: ['rgba(59, 130, 246, 0.3)', 'rgba(139, 92, 246, 0.6)', 'rgba(59, 130, 246, 0.3)']
                        }}
                        transition={{
                            duration: 6 + i,
                            repeat: Infinity,
                            delay: i * 0.8
                        }}
                    />
                ))}

                {/* Terminal cursor blink enhanced */}
                <motion.div
                    className="absolute top-10 right-20 w-3 h-6 bg-green-400 shadow-lg shadow-green-400/50"
                    animate={{
                        opacity: [1, 0, 1],
                        boxShadow: ['0 0 10px rgba(34, 197, 94, 0.5)', '0 0 20px rgba(34, 197, 94, 0.8)', '0 0 10px rgba(34, 197, 94, 0.5)']
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            </motion.div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >


                    <motion.div className="relative">
                        {/* Terminal-style prompt */}
                        <motion.div
                            className="font-mono text-green-500 text-xs flex items-center justify-center"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                        >
                            <span className="mr-2">$</span>
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: "auto" }}
                                transition={{ delay: 0.3, duration: 1.5 }}
                                className="overflow-hidden whitespace-nowrap"
                            >
                                whoami --verbose
                            </motion.span>
                            <motion.span
                                className="ml-1 w-1 h-3 bg-green-500"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                        </motion.div>

                        <motion.div
                            className="flex justify-center mt-1 mb-1"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-mono font-medium">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Hi, I&apos;m
                            </span>
                        </motion.div>

                        <motion.div
                            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight relative text-center"
                            initial={{ opacity: 0, y: 20, rotateX: -15, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                            transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 100 }}
                            style={{ perspective: "1000px" }}
                        >
                            <div className="relative">
                                <TypewriterText
                                    text={personalInfo.name}
                                    className="bg-linear-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                                />
                            </div>

                            {/* Holographic scan line */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-1"
                                animate={{
                                    y: ['-100%', '100%']
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 4,
                                    ease: "linear"
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    <motion.p
                        className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        {personalInfo.title}
                    </motion.p>

                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        {personalInfo.description}
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        <motion.a
                            href="/blog"
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                                rotateX: -2
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.6 }}
                            />
                            <span className="relative z-10">Read My Blog</span>
                            <motion.span
                                className="ml-1 relative z-10"
                                animate={{ x: [0, 3, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </motion.a>
                        <motion.a
                            href={personalInfo.cvLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                                boxShadow: "0 15px 30px rgba(34, 197, 94, 0.2)",
                                rotateX: -2
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group flex items-center justify-center gap-2"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-green-600 origin-left"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <svg className="w-5 h-5 relative z-10 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                Download CV
                            </span>
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
                            className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group flex items-center justify-center"
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

                    {/* Enhanced Terminal output with hacker vibes */}
                    <motion.div
                        className="font-mono text-sm bg-gray-900/80 dark:bg-black/80 rounded-lg p-5 border-2 border-green-400/60 backdrop-blur-md relative overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {/* Terminal header */}
                        <div className="flex items-center mb-3 text-xs">
                            <div className="flex space-x-1 mr-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-gray-400">terminal@ange-dev:~</span>
                        </div>

                        <div className="text-green-400 mb-3 flex items-center">
                            <motion.span
                                className="mr-2"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                $
                            </motion.span>
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: "auto" }}
                                transition={{ delay: 1.3, duration: 1 }}
                                className="overflow-hidden whitespace-nowrap"
                            >
                                ls /skills | sort -u
                            </motion.span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                            {terminalSkills.map((tech, i) => (
                                <motion.div
                                    key={tech}
                                    className="flex items-center space-x-2 text-cyan-300"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.5 + i * 0.1 }}
                                >
                                    <motion.span
                                        className="text-green-400"
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                                    >
                                        {'>'}
                                    </motion.span>
                                    <motion.span
                                        whileHover={{ scale: 1.05, color: '#00ff00', textShadow: '0 0 10px #00ff00' }}
                                        className="cursor-default"
                                    >
                                        {tech}
                                    </motion.span>
                                    <motion.span
                                        className="text-green-500"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.8 + i * 0.1 }}
                                    >
                                        ✓
                                    </motion.span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Scanning line effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent w-full h-1"
                            animate={{
                                y: [0, '100%', 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatDelay: 2
                            }}
                        />
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