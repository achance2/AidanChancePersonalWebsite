import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projectcard";

export default function Projects() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-4xl font-bold">Projects</h1>

        <div className="mt-8 space-y-6 grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Personal Portfolio Website"
            date="05/2026"
            skills="Next.js, TypeScript, Tailwind CSS, Framer Motion, Vercel"
            description="Built a website to showcase my projects and experience!"
            image = "/images/project_images/website.jpg"
            link = "https://github.com/achance2/AidanChancePersonalWebsite"
          />

          <ProjectCard
            title="Accelerating the Discovery of Novel Metastable Photoacids"
            date ="05/2025 - Present"
            skills="Python, RDKit, SMARTS, High Performance Computing, Computational Chemistry"
            description="Built a computational chemistry workflow to screen millions of molecules for photoacid candidates."
            image = "/images/project_images/molecule.png"
            link = "https://github.com/Tabor-Research-Group/metastable-photoacid-molecular-discovery"
          />

          <ProjectCard
            title="Strive"
            date="10/2025"
            skills="JavaScript, React Native, Node.js, Figma, Firebase"
            description="Schedule Management App to help students with navigating their classes and assignments."
            image = "/images/project_images/strive.png"
            link = "https://github.com/Strive-App/Strive"
          />
        </div>
      </section>
    </main>
  );
}