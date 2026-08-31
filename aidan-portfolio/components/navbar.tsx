"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="absolute z-[9999] brightness-0 invert">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex flex-col items-start justify-center gap-4 bg-transparent px-4 py-4 text-white"
      >
        <NavLink href="/">Home</NavLink>
        <NavLink href="/#about">About Me</NavLink>        
        <NavLink href="/#projects">Projects</NavLink>
        <NavLink href="/images/resume/Resume19.pdf" target="_blank">Resume</NavLink>

        <IconLink href="https://github.com/achance2">
          <Image
            src="/images/home_images/github.svg"
            alt="GitHub"
            width={28}
            height={28}
          />
        </IconLink>

        <IconLink href= "https://www.linkedin.com/in/aidan-chance">
          <Image
            src="/images/home_images/linkedin.svg"
            alt="LinkedIn icon"
            width={28}
            height={28}
          />
        </IconLink>

        <IconLink href= "mailto:adchance2019@gmail.com">
          <Image
            src="/images/home_images/email.svg"
            alt="email icon"
            width={28}
            height={28}
          />
        </IconLink>

        <IconLink href= "tel:+1-346-719-1543">
          <Image
            src="/images/home_images/phone.svg"
            alt="phone icon"
            width={28}
            height={28}
          />
        </IconLink>
      </motion.nav>
    </div>
  );
}

function NavLink({href, children, target,}: {href: string; children: React.ReactNode; target?: string;}) {
  return (
    <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 1.25 }} transition={{ type: "spring", stiffness: 200, damping: 10 }}>
      <Link
        href={href}
        target={target}
        className="group relative text-sm font-medium text-white transition-colors duration-300 hover:text-white-300"
      >
        {children}

        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white-300 transition-all duration-300 group-hover:w-full" />
      </Link>
    </motion.div>
  );
}

function IconLink({href, children,}: {href: string; children: React.ReactNode;}) {
  return (
    <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 1.25 }} transition={{ type: "spring", stiffness: 200, damping: 10 }}>
      <Link href={href} target="_blank" className="block">
        {children}
      </Link>
    </motion.div>
  );
}