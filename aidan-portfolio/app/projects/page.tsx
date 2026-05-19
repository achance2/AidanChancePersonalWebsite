import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projectcard";

export default function Projects() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-bold">Projects</h1>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Photoacid Screening Pipeline"
            skills="Python, RDKit, SMARTS, HPC"
            description="Built a computational chemistry workflow to screen millions of molecules for photoacid candidates."
          />

          <ProjectCard
            title="Meningioma MRI Classifier"
            skills="Python, PyTorch, CNNs, Machine Learning"
            description="Trained a convolutional neural network to classify MRI brain tumor images."
          />

          <ProjectCard
            title="Personal Portfolio Website"
            skills="Next.js, TypeScript, Tailwind CSS, shadcn/ui"
            description="Built a modern personal portfolio website with reusable components and clean routing."
          />
        </div>
      </section>
    </main>
  );
}