"use client";
import React, { JSX, useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState<string>("");

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

  useEffect(() => {
    const sectionIds = navItems
      .map((item) => item.link.replace("#", ""))
      .filter((id) => id && !id.startsWith("/"));

    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, [navItems]);

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
            "hidden md:flex max-w-fit fixed top-10 left-1/2 transform -translate-x-1/2 border border-gray-200 dark:border-gray-700 rounded-2xl backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 shadow-lg z-4000 px-2 py-2 items-center justify-center gap-1",
            className
          )}
        >
          {navItems.map((navItem, idx) => {
            const sectionId = navItem.link.replace("#", "");
            const isActive = activeSection === sectionId && sectionId !== "";
            return (
              <a
                key={`desktop-link-${idx}`}
                href={navItem.link}
                className="relative items-center flex space-x-1 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200"
                style={{ color: isActive ? undefined : undefined }}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active-pill"
                    className="absolute inset-0 bg-blue-50 dark:bg-blue-900/30 rounded-xl"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 whitespace-nowrap transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {navItem.name}
                </span>
              </a>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Mobile Hamburger Button */}
      <motion.button
        className="md:hidden fixed top-6 right-6 z-5000 p-3 rounded-2xl bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 shadow-lg backdrop-blur-xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        animate={{
          rotate: mobileMenuOpen ? 90 : 0,
        }}
      >
        {mobileMenuOpen ? (
          <FaTimes className="text-gray-800 dark:text-gray-200 text-xl" />
        ) : (
          <FaBars className="text-gray-800 dark:text-gray-200 text-xl" />
        )}
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-4500 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              className="absolute top-24 left-6 right-6 bg-white/98 dark:bg-gray-900/98 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-3">
                {navItems.map((navItem, idx) => (
                  <motion.a
                    key={`mobile-link-${idx}`}
                    href={navItem.link}
                    className="flex items-center space-x-3 px-5 py-4 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all duration-200 font-semibold text-base"
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {navItem.icon && (
                      <span className="text-blue-600 dark:text-blue-400 text-lg">
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
