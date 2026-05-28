"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { motion } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const constraintsRef = useRef(null);
  return (
    <main>
      <Navbar />

      <section className="relative h-screen overflow-hidden">
        <iframe
          src="https://my.spline.design/hana3dtextcopycopy-uIXXEcDpyB5yP5yCVGEs9BCI-dhb/"
          className="absolute inset-0 h-full w-full border-0"
          allow="fullscreen"
        />

        <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-30 w-full bg-gradient-to-b from-transparent via-slate-900/60 to-slate-900" />

      </section>

      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 z-0 bg-[url('/images/home_images/background.jpg')] bg-cover bg-center" />
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-30 w-full bg-gradient-to-b from-slate-900 via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 z-0 bg-slate-900/40" />
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: -100, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center justify-center gap-4 bg-transparent px-4 py-4 text-white"
        >
          <Image
            src="/images/home_images/Aidan.JPG"
            alt="Aidan Photo"
            width={400}
            height={400}
            className="rounded-full border-4 border-slate-900 object-cover"
          />
        </motion.nav>

        <section className ="text-white">
          <h1 className ="-translate-y-25 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Aidan Chance
          </h1>
          <h2 className ="-translate-y-30 text-xl font-semibold text-center">
            ______________________________________
          </h2>
          <p className ="-translate-y-25 mx-auto max-w-3xl text-center">
            Welcome to my website! My name is Aidan, and I am currently a Junior at Texas A&M University majoring in Interdisciplinary Engineering with a focus on Biomedical Engineering and Computer Science.
          </p>
        </section>

        <section ref={constraintsRef} className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
          <motion.img
            src="/images/home_images/python.svg"
            alt="python"
            width ={100}
            height={100}
            drag
            dragMomentum={true}
            dragElastic={0.8}
            dragConstraints={constraintsRef}
            className="pointer-events-auto absolute right-210 bottom-10 z-50 cursor-grab active:cursor-grabbing"
          />

          <motion.img
            src="/images/home_images/C++.svg"
            alt="C++"
            width ={175}
            height={175}
            drag
            dragMomentum={true}
            dragElastic={0.8}
            dragConstraints={constraintsRef}
            className="pointer-events-auto absolute right-170 bottom-0 z-50 cursor-grab active:cursor-grabbing"
          />

          <motion.img
            src="/images/home_images/CSS.svg"
            alt="CSS"
            width ={100}
            height={100}
            drag
            dragMomentum={true}
            dragElastic={0.8}
            dragConstraints={constraintsRef}
            className="pointer-events-auto absolute right-150 bottom-10 z-50 cursor-grab active:cursor-grabbing"
          />

          <motion.img
            src="/images/home_images/javascript.svg"
            alt="javascript"
            width ={80}
            height={80}
            drag
            dragMomentum={true}
            dragElastic={0.8}
            dragConstraints={constraintsRef}
            className="pointer-events-auto absolute right-240 bottom-12.5 z-50 cursor-grab active:cursor-grabbing"
          />

          <motion.img
            src="/images/home_images/typescript.svg"
            alt="typescript"
            width ={80}
            height={80}
            drag
            dragMomentum={true}
            dragElastic={0.8}
            dragConstraints={constraintsRef}
            className="pointer-events-auto absolute right-125 bottom-12.5 z-50 cursor-grab active:cursor-grabbing"
          />
        </section>
      </section>
    </main>
  );
}