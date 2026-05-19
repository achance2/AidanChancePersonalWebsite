import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-400">
        Engineering Honors · Texas A&amp;M University
      </p>

      <h1 className="max-w-4xl text-5xl font-bold md:text-7xl">
        Hi, I&apos;m Aidan Chance.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-300">
        I build software, automation tools, and computational research pipelines
        across biomedical engineering, chemistry, and computer science.
      </p>
    </section>
  );
}