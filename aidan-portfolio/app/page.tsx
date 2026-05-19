import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className = "min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Hero />
    </main>
  );
}