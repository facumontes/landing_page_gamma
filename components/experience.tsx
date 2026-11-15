import Image from "next/image";
import logo from "../public/gamma_logo.png";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
        <Image
          src={logo}
          alt=""
          width={200}
          height={200}
          className="mx-auto h-40 w-40 md:h-52 md:w-52"
        />
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Más de 20 años en la provincia</h2>
          <p className="mt-3 max-w-prose leading-relaxed">
            En todo este tiempo trabajamos con distintas empresas de Córdoba. Nuestro objetivo es
            facilitar la gestión de tu logística, con la flexibilidad que necesitás cuando surge un
            viaje.
          </p>
        </div>
      </div>
    </section>
  );
}
