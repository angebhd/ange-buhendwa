"use client"

import { useScroll, motion } from "framer-motion"

export function ScrollProgress() {
    const { scrollYProgress } = useScroll()
    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 origin-left z-[9999]"
            style={{ scaleX: scrollYProgress }}
        />
    )
}
