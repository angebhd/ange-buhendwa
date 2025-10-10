"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { FaBars, FaTimes } from "react-icons/fa";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <>
      {/* Desktop Navigation */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "hidden md:flex max-w-fit fixed top-10 left-1/2 transform -translate-x-1/2 border-2 rounded-full backdrop-blur-xl bg-white/98 dark:bg-gray-900/98 border-gray-400 dark:border-gray-500 shadow-2xl shadow-black/30 dark:shadow-black/50 z-[4000] px-6 py-4 items-center justify-center divide-x divide-gray-300 dark:divide-gray-600",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <a
              key={`desktop-link-${idx}`}
              href={navItem.link}
              className="relative text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 items-center flex space-x-1 transition-all duration-200 text-sm font-semibold px-4 py-2 rounded-full first:pl-0 last:pr-0"
            >
              <span className="text-sm whitespace-nowrap">{navItem.name}</span>
            </a>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Mobile Hamburger Button */}
      <motion.button
        className="md:hidden fixed top-6 left-6 z-[5000] p-3 rounded-full bg-white/95 dark:bg-gray-900/95 border-2 border-gray-400 dark:border-gray-500 shadow-xl backdrop-blur-xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        whileTap={{ scale: 0.95 }}
        animate={{
          rotate: mobileMenuOpen ? 180 : 0,
        }}
      >
        {mobileMenuOpen ? (
          <FaTimes className="text-gray-800 dark:text-gray-200 text-lg" />
        ) : (
          <FaBars className="text-gray-800 dark:text-gray-200 text-lg" />
        )}
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-[4500] bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              className="absolute top-20 left-6 right-6 bg-white/98 dark:bg-gray-900/98 border-2 border-gray-400 dark:border-gray-500 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-2">
                {navItems.map((navItem, idx) => (
                  <motion.a
                    key={`mobile-link-${idx}`}
                    href={navItem.link}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all duration-200 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {navItem.icon && (
                      <span className="text-blue-600 dark:text-blue-400">
                        {navItem.icon}
                      </span>
                    )}
                    <span>{navItem.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
