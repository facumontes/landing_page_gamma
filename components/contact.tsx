"use client";

import { FormEvent } from "react";
import { PHONE_DISPLAY, EMAIL, whatsappUrl } from "@/lib/contact";

const field =
  "mt-1 w-full rounded-md border border-gamma/30 bg-white px-3 py-2 text-gamma placeholder:text-gamma/50";

export default function Contact() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") ?? "").trim();
    const empresa = String(data.get("empresa") ?? "").trim();
    const ruta = String(data.get("ruta") ?? "").trim();
    const carga = String(data.get("carga") ?? "").trim();

    const message =
      `Hola, soy ${nombre}${empresa ? ` de ${empresa}` : ""}. Quiero cotizar un traslado.\n` +
      `Origen y destino: ${ruta}\n` +
      `Carga: ${carga}`;

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="bg-gamma-light">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:px-8 md:py-16">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Contanos qué necesitás trasladar</h2>
          <p className="mt-3 max-w-prose leading-relaxed">
            Completá los datos y te respondemos por WhatsApp con la cotización.
          </p>
          <p className="mt-6">
            Teléfono / WhatsApp:{" "}
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
              {PHONE_DISPLAY}
            </a>
          </p>
          {EMAIL && (
            <p className="mt-2">
              Mail:{" "}
              <a href={`mailto:${EMAIL}`} className="font-semibold underline">
                {EMAIL}
              </a>
            </p>
          )}
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <label className="block">
            Nombre
            <input name="nombre" required autoComplete="name" className={field} />
          </label>
          <label className="block">
            Empresa (opcional)
            <input name="empresa" autoComplete="organization" className={field} />
          </label>
          <label className="block">
            Origen y destino
            <input name="ruta" required placeholder="Ej: Córdoba capital a Río Cuarto" className={field} />
          </label>
          <label className="block">
            Qué hay que trasladar
            <textarea name="carga" required rows={3} placeholder="Tipo de carga, cantidad aproximada, fecha" className={field} />
          </label>
          <button
            type="submit"
            className="rounded-md bg-gamma px-6 py-3 font-semibold text-white transition-opacity hover:opacity-85"
          >
            Enviar consulta por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
