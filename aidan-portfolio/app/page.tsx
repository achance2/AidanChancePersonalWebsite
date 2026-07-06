"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { motion } from "motion/react";
import { animate, scroll } from "motion";
import { useEffect, useRef } from "react";
import ProjectCard from "@/components/projectcard";

export default function Home() {

  function ScrollProgressReveal({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!ref.current) return;

      const animation = animate(
        ref.current,
        {
          opacity: [0, 1],
          y: [100, 0],
          scale: [0.9, 1],
        },
        {
          duration: 1,
          ease: "easeOut",
        }
      );

      scroll(animation, {
        target: ref.current,
        offset: ["start end", "center center"],
      });

      return () => {
        animation.stop();
      };
    }, []);

    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden bg-[#55c0cf]">
          <iframe
            src="https://my.spline.design/watercopycopy-IPtHOMmCDqP39crbu2prbb2B-9qR/"
            className="pointer-events-none h-full w-full border-0"
            allow="fullscreen"
            loading="lazy"
          />
        </div>

        <div className="absolute left-[10%] top-1/2 z-10 -translate-y-1/2">
          <h1 className="text-5xl font-extrabold leading-tight text-white drop-shadow-md">
            Nice to meet you!
          </h1>

          <p className="mt-5 flex items-center gap-2 text-lg text-white/80 drop-shadow-md">
            Scroll or click to learn more about me
            <span className="animate-fish text-2xl">🐟</span>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-1.75xl text-white"
        >
          ↓
        </motion.div>
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-60 w-full bg-gradient-to-b from-transparent to-[#56bcd2]" />
      </section>

      <section className="relative min-h-screen overflow-hidden bg-[#FFFBE3]" id = "about">
        <div className="absolute inset-x-0 top-0 h-400 bg-gradient-to-b from-[#56bcd2] to-[#FFFBE3]" />

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 items-center gap-16 px-12 py-24">

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -right-30 top-10 z-20"
          >
            <Image
              src="/images/home_images/sun.svg"
              alt="sun"
              width={120}
              height={120}
            />
          </motion.div>

          <div className="justify-self-start">
            <ScrollProgressReveal>
              <Image
                src="/images/home_images/Aidan5.JPG"
                alt="Aidan Chance"
                width={500}
                height={600}
                className="rounded-3xl border-4 border-white/80 object-cover shadow-2xl transition duration-300 hover:-translate-y-2 hover:scale-105 hover:rotate-1"
              />
            </ScrollProgressReveal>
          </div>

          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold leading-tight text-white">
              Welcome to my Website!
            </h2>

            <p className="mt-6 text-xl leading-8 text-[#24535a]/80 font-bold">
              My Name is Aidan! I'm a junior at Texas A&M University pursuing a B.S. in Interdisciplinary Engineering with a
              focus in Computer Science and Biomedical Engineering.
            </p>

            <p className="mt-6 text-xl leading-8 text-[#24535a]/80 font-bold">
              Currently seeking internship opportunities in software development, data analysis, and research & development roles. Please feel free to contact me using the links at the top. Let's stay in touch!
            </p>
          </div>
        </div>

        <motion.div
          initial={{ x: -150 }}
          animate={{ x: "110vw" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute top-[760px] left-0 z-20 text-5xl"
        >
          <Image src="/images/home_images/airplane.svg" alt="Airplane" width={100} height={100} />
        </motion.div>
        
        <div className="relative mx-auto h-[2070px] w-full max-w-[1400px]">
          <ScrollProgressReveal className="absolute -left-10 top-60 h-[1000px] w-[450px]">
            <video
              src="/videos/bouldering.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="rounded-3xl border-2 border-white/80 bg-black object-cover shadow-2xl"
            />
          </ScrollProgressReveal>

          <ScrollProgressReveal className="absolute left-[430px] top-[200px]">
            <Image
              src="/images/home_images/gladash.JPG"
              alt="Gladash"
              width={550}
              height={550}
              className="rounded-3xl border-2 border-white/80 object-cover shadow-2xl"
            />
          </ScrollProgressReveal>

          <ScrollProgressReveal className="absolute -right-10 top-[630px]">
            <Image
              src="/images/home_images/volleyball.JPG"
              alt="Volleyball"
              width={550}
              height={550}
              className="rounded-3xl border-2 border-white/80 object-cover shadow-2xl"
            />
          </ScrollProgressReveal>

          <ScrollProgressReveal className="absolute left-130 top-[1400px]">
            <Image
              src="/images/home_images/graduation.jpg"
              alt="Graduation"
              width={450}
              height={450}
              className="rounded-3xl border-2 border-white/80 object-cover shadow-2xl"
            />
          </ScrollProgressReveal>

          <ScrollProgressReveal className="absolute -left-10 top-[1250px]">
            <Image
              src="/images/home_images/convention.JPG"
              alt="Convention"
              width={550}
              height={550}
              className="rounded-3xl border-2 border-white/80 object-cover shadow-2xl"
            />
          </ScrollProgressReveal>

          <ScrollProgressReveal className="absolute -right-10 top-[1070px] h-[550px] w-[450px]">
            <video
              src="/videos/pie.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="rounded-3xl border-2 border-white/80 bg-black object-cover shadow-2xl"
            />
          </ScrollProgressReveal>
        </div>
      </section>

      <section className="relative min-h-[130vh] overflow-hidden bg-[#FFFBE3]" id="projects">
        <div className="absolute inset-x-0 top-0 z-0 h-400 bg-gradient-to-b from-[#FFFBE3] to-[#EDBBBB]" />

        <div className="absolute left-1/2 bottom-5 z-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[#FFD67A]/70" />

        <svg
          className="absolute bottom-0 left-0 z-0 h-72 w-full"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path
            d="M0 280 L180 180 L320 250 L500 150 L700 260 L900 170 L1100 240 L1280 160 L1440 250 L1440 400 L0 400 Z"
            fill="#E7B8B8"
          />

          <path
            d="M0 320 L140 240 L300 300 L480 210 L650 320 L860 220 L1080 300 L1260 230 L1440 310 L1440 400 L0 400 Z"
            fill="#C98F9A"
          />
        </svg>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-4xl font-bold text-[#DD7E7E]">Projects</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="Personal Portfolio Website"
              date="05/2026"
              skills="Next.js, TypeScript, Tailwind CSS, Framer Motion, Vercel"
              description="Built a website to showcase my projects and experience!"
              image="/images/project_images/website.jpg"
              link="https://github.com/achance2/AidanChancePersonalWebsite"
            />

            <ProjectCard
              title="Accelerating the Discovery of Novel Metastable Photoacids"
              date="05/2025 - Present"
              skills="Python, RDKit, SMARTS, High Performance Computing, Computational Chemistry"
              description="Built a computational chemistry workflow to screen millions of molecules for photoacid candidates."
              image="/images/project_images/molecule.png"
              link="https://github.com/Tabor-Research-Group/metastable-photoacid-molecular-discovery"
            />

            <ProjectCard
              title="Strive"
              date="10/2025"
              skills="JavaScript, React Native, Node.js, Figma, Firebase"
              description="Schedule Management App to help students with navigating their classes and assignments."
              image="/images/project_images/strive.png"
              link="https://github.com/Strive-App/Strive"
            />
          </div>
        </div>
      </section>
    </main>
  );
}