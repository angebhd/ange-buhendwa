"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaTools, FaCode, FaRocket } from 'react-icons/fa'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
        {/* Additional geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute w-4 h-4 border border-blue-400/20 rotate-45"
            style={{
              left: `${15 + i * 12}%`,
              top: `${10 + (i % 4) * 25}%`,
            }}
            animate={{
              rotate: [45, 405],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* 3D Construction Icon */}
        <motion.div
          className="mb-8"
          initial={{ rotateY: 0, scale: 0.8 }}
          animate={{ rotateY: 360, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative inline-block">
            <motion.div
              className="text-8xl text-yellow-400 drop-shadow-2xl"
              animate={{
                rotateX: [0, 10, -10, 0],
                rotateZ: [0, 5, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <FaTools />
            </motion.div>
            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 text-8xl text-yellow-400 blur-xl opacity-50"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaTools />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Title with 3D effect */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
            transformStyle: "preserve-3d"
          }}
        >
          Under Construction
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          I&apos;m crafting something amazing for you! My blog is currently being built with cutting-edge technology.
        </motion.p>

        {/* Animated progress bar */}
        <motion.div
          className="w-full max-w-md mx-auto mb-8 bg-gray-800 rounded-full h-4 overflow-hidden shadow-inner"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="h-full bg-blue-600 rounded-full shadow-lg relative overflow-hidden"
            initial={{ width: "0%" }}
            animate={{ width: "35%" }}
            transition={{ delay: 2, duration: 2, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-blue-400/50 rounded-full"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, delay: 4 }}
            />
          </motion.div>

        </motion.div>

        {/* Features coming soon with enhanced animations */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          {[
            { icon: FaCode, title: "Tech Articles", desc: "Deep dives into coding" },
            { icon: FaRocket, title: "Project Stories", desc: "Behind the scenes" },
            { icon: FaTools, title: "Tutorials", desc: "Step-by-step guides" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 20, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 2.7 + i * 0.2, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                y: -5
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              >
                <item.icon className="text-3xl text-blue-400 mb-4 mx-auto" />
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Back to home button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <Link href="/">
            <motion.button
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg relative overflow-hidden group transition-colors duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                rotateX: -2
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">← Back to Portfolio</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Enhanced floating code symbols */}
        <div className="absolute inset-0 pointer-events-none">
          {['</>', '{}', '[]', '()', '&&', '||', 'fn', 'var', 'let', 'const'].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-400/20 font-mono text-2xl font-bold"
              style={{
                left: `${5 + i * 10}%`,
                top: `${15 + (i % 4) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 10, 0],
                rotate: [0, 360],
                opacity: [0.1, 0.4, 0.1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}