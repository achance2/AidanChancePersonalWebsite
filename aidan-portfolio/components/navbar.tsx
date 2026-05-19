"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <div className = "sticky top-0 z-50 flex justify-center p-6">
        <motion.nav
            initial = {{ y: -80, opacity: 0 }}
            animate = {{ y: 0, opacity: 1 }}
            transition = {{ duration: 0.6, ease: "easeInOut" }}
            className="flex items-center justify-center gap-6 rounded-full border border-slate-800 bg-slate-950/80 px-8 py-4 text-white backdrop-blur-md"
        >
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/images/resume/Resume.pdf" target="_blank">Resume</NavLink>
        </motion.nav>
    </div>
  );
}

function NavLink({ href, children, target }: { href: string; children: React.ReactNode; target?: string; }) {
    return (
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
        <Link
            href = {href}
            target = {target}
            className="group relative text-sm text-slate-300 transition-colors duration-300 hover:text-white"
        >
            {children}

            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
        </Link>
        </motion.div>
    );
}