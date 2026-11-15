import Image from "next/image";
import utilitario from "../public/utilitario.jpg";
import { whatsappUrl } from "@/lib/contact";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Logística tercerizada para empresas de Córdoba
          </h1>
          <p className="mt-5 max-w-prose text-lg leading-relaxed">
            Hace más de 20 años resolvemos los traslados de mercadería de empresas dentro de la
            ciudad, en la provincia y hacia otras provincias. Vos te ocupás de tu negocio; nosotros,
            del viaje.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-md bg-gamma px-6 py-3 font-semibold text-white transition-opacity hover:opacity-85"
            >
              Pedir cotización
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border-2 border-gamma px-6 py-3 font-semibold transition-colors hover:bg-gamma-soft"
            >
              Escribinos por WhatsApp
            </a>
          </div>
        </div>
        <Image
          src={utilitario}
          alt="Utilitario mediano de Gamma"
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
