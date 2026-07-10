"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { motion } from "motion/react";
import { animate, scroll } from "motion";
import { useEffect, useRef } from "react";
import ProjectCard from "@/components/projectcard";
import MobileAboutCollage from "@/components/mobilecollage";

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

      <section className="relative min-h-screen overflow-hidden bg-[#FFFBE3]" id="about">
        <div className="absolute inset-x-0 top-0 h-400 bg-gradient-to-b from-[#56bcd2] to-[#FFFBE3]" />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-12 md:py-24">          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute right-4 top-6 z-20 md:-right-30 md:top-10"
          >
            <Image
              src="/images/home_images/sun.svg"
              alt="sun"
              width={120}
              height={120}
              className="w-20 md:w-[120px]"
            />
          </motion.div>

          <div className="flex justify-center md:justify-self-start">
            <ScrollProgressReveal>
              <Image
                src="/images/home_images/Aidan5.JPG"
                alt="Aidan Chance"
                width={500}
                height={600}
                className="w-full max-w-[380px] rounded-3xl border-4 border-white/80 object-cover shadow-2xl transition duration-300 hover:-translate-y-2 hover:scale-105 hover:rotate-1 md:max-w-[500px]"
              />
            </ScrollProgressReveal>
          </div>

          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Welcome to my Website!
            </h2>

            <p className="mt-6 text-lg font-bold leading-8 text-[#24535a]/80 md:text-xl">
              My Name is Aidan! I'm a junior at Texas A&M University pursuing a B.S. in Interdisciplinary Engineering with a
              focus in Computer Science and Biomedical Engineering.
            </p>

            <p className="mt-6 text-lg font-bold leading-8 text-[#24535a]/80 md:text-xl">
              Currently seeking internship opportunities in software development, data analysis, and research & development roles. Please feel free to contact me using the links at the top. Let&apos;s stay in touch!
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

        <MobileAboutCollage />

        <div className="relative mx-auto hidden h-[2190px] w-full max-w-[1400px] md:block">
          <ScrollProgressReveal className="absolute -left-10 top-60 h-[1000px] w-[450px]">
            <video
              src="/videos/bouldering1.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="rounded-3xl border-2 border-white/80 bg-black object-cover shadow-2xl"
            />
          </ScrollProgressReveal>

          <div className="absolute -left-[40px] top-[1055px] w-[450px]">
            <div className="relative rounded-3xl bg-[#fffdf2] p-5 shadow-2xl">
              <div className="absolute -top-2 left-20 h-8 w-8 rotate-45 bg-[#fffdf2]" />

              <p className="relative z-10 text-lg leading-7 text-[#24535a]/80">
                I started bouldering during my 2024 study abroad trip in Seoul, South Korea. This video shows me completing a V5 difficulty route for the first time (they go up to V10). I'm excited to continue improving my skills and tackling my first V6!
              </p>
            </div>
          </div>

          <ScrollProgressReveal className="absolute left-[430px] top-[200px]">
            <Image
              src="/images/home_images/gladash.JPG"
              alt="Gladash"
              width={550}
              height={550}
              className="rounded-3xl border-2 border-white/80 object-cover shadow-2xl"
            />
          </ScrollProgressReveal>

          <div className="absolute left-[1000px] top-[300px] w-[450px]">
            <div className="relative rounded-3xl bg-[#fffdf2] p-5 shadow-2xl">
              <div className="absolute top-10 -left-2 h-8 w-8 rotate-45 bg-[#fffdf2]" />

              <p className="relative z-10 text-lg leading-7 text-[#24535a]/80">
                I ran the 2026 Spring Gladiator Dash hosted in Bryan, Texas with my friends. The Gladiator Dash is a 5k that involves overcoming obstacles and swimming. It was fun to work together with my friends to complete it. We all got covered in mud!              
              </p>
            </div>
          </div>

          <ScrollProgressReveal className="absolute -right-10 top-[630px]">
            <Image
              src="/images/home_images/volleyball.JPG"
              alt="Volleyball"
              width={550}
              height={550}
              className="rounded-3xl border-2 border-white/80 object-cover shadow-2xl"
            />
          </ScrollProgressReveal>

          <div className="absolute left-[425px] top-[750px] w-[450px]">
            <div className="relative rounded-3xl bg-[#fffdf2] p-5 shadow-2xl">
              <div className="absolute top-10 left-107 h-8 w-8 rotate-45 bg-[#fffdf2]" />

              <p className="relative z-10 text-lg leading-7 text-[#24535a]/80">
                This is a picture of me and my friends from our club, the Society of Asian Scientist and Engineers, playing intramural volleyball. We had a lot of fun playing and working together to win. We did lose this game though, but we had a great time!            
              </p>
            </div>
          </div>

          <ScrollProgressReveal className="absolute left-130 top-[1400px]">
            <Image
              src="/images/home_images/graduation.jpg"
              alt="Graduation"
              width={450}
              height={450}
              className="rounded-3xl border-2 border-white/80 object-cover shadow-2xl"
            />
          </ScrollProgressReveal>

          <div className="absolute left-[525px] top-[1175px] w-[450px]">
            <div className="relative rounded-3xl bg-[#fffdf2] p-5 shadow-2xl">
              <div className="absolute top-46 left-80 h-8 w-8 rotate-45 bg-[#fffdf2]" />

              <p className="relative z-10 text-lg leading-7 text-[#24535a]/80">
                In May 2026, my friend, Nick, graduated from Texas A&M University with a degree in Computer Science. We celeberated his graduation together and cheered him on as he walked across the stage. I wish him the best of luck and I know he will do great things!           
              </p>
            </div>
          </div>

          <ScrollProgressReveal className="absolute -left-10 top-[1250px]">
            <Image
              src="/images/home_images/convention.JPG"
              alt="Convention"
              width={550}
              height={550}
              className="rounded-3xl border-2 border-white/80 object-cover shadow-2xl"
            />
          </ScrollProgressReveal>

          <div className="absolute -left-[20px] top-[1685px] w-[500px]">
            <div className="relative rounded-3xl bg-[#fffdf2] p-5 shadow-2xl">
              <div className="absolute -top-2 left-20 h-8 w-8 rotate-45 bg-[#fffdf2]" />

              <p className="relative z-10 text-lg leading-7 text-[#24535a]/80">
                In Fall 2026, all of the SASE officers got the opportunity to attend the SASE national conference in Pittsburgh, Pennsylvania. We had a blast exploring the city and attending the conference with other SASE chapters. During the award ceremony, our chapter won honorable mention for best overall SASE chapter!
              </p>
            </div>
          </div>

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

          <div className="absolute left-[1000px] top-[1885px] w-[450px]">
            <div className="relative rounded-3xl bg-[#fffdf2] p-5 shadow-2xl">
              <div className="absolute -top-2 left-20 h-8 w-8 rotate-45 bg-[#fffdf2]" />

              <p className="relative z-10 text-lg leading-7 text-[#24535a]/80">
                In Spring 2026, SASE officers got pied in the face by other members to raise money for Scotty's House, a local charity that helps children affected by abuse. This is a video of me getting pied!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[145vh] overflow-hidden bg-[#FFFBE3]" id="projects">
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
              title="Jung Chance Fine Art Website"
              date="07/2026"
              skills="Next.js, TypeScript, Tailwind CSS, React, Sanity CMS, Formspree, Netlify"
              description="An interactive fine art portfolio website for my mother, Jung Chance, designed to showcase paintings, awards, galleries, and upcoming events. Built with Sanity CMS to allow artwork and event content to be updated dynamically, Formspree for secure contact submissions, and Netlify for deployment."
              image="/images/project_images/JungChanceWebsite.jpg"
              link="https://github.com/achance2/JungChanceFineArtWebsite"
            />

            <ProjectCard
              title="Personal Portfolio Website"
              date="05/2026"
              skills="Next.js, TypeScript, Tailwind CSS, Framer Motion, Vercel, Spline"
              description="An interactive personal portfolio website built to present my research, software projects, leadership experience, and technical background in a responsive website. Features animated page sections with Framer Motion, embedded 3D visuals using Spline, and deployed on Vercel."
              image="/images/project_images/websiteportfolio2.jpg"
              link="https://github.com/achance2/AidanChancePersonalWebsite"
            />

            <ProjectCard
              title="Accelerating the Discovery of Novel Metastable Photoacids"
              date="05/2025 - Present"
              skills="Python, RDKit, SMARTS, High Performance Computing, Computational Chemistry"
              description="A computational chemistry pipeline for discovering novel metastable photoacid candidates from large molecular libraries. Utilizes RDKit and SMARTS-based structural screening to filter 1,000,000,000+ molecules, generate candidate isomers, analyze relative energies, and prioritize candidates for downstream analysis on HPC supercomputers including Texas A&M's Grace and VISION (NVIDIA)."
              image="/images/project_images/molecule.png"
              link="https://github.com/Tabor-Research-Group/metastable-photoacid-molecular-discovery"
            />

            <ProjectCard
              title="Strive"
              date="10/2025"
              skills="JavaScript, React Native, Node.js, Figma, Firebase"
              description="A mobile schedule management app designed to help students organize classes, assignments, and deadlines. Built with React Native and Firebase."
              image="/images/project_images/strive.png"
              link="https://github.com/Strive-App/Strive"
            />
          </div>
        </div>
      </section>
    </main>
  );
}