import About from "@/components/about";
import Services from "@/components/services";
import Experience from "@/components/experience";
import Contact from "@/components/contact";


export default function Home() {
  return (
    <div className="flex-1 p-4">
      <About />
      <Services />
      <Experience />
      <Contact />
    </div>
  );
}
