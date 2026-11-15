import About from "@/components/about";
import Services from "@/components/services";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex-1">
      <About />
      <Services />
      <Experience />
      <Contact />
    </main>
  );
}
