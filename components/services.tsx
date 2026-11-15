const services = [
  {
    title: "Reparto diario en Córdoba capital",
    text: "Operamos todos los días en la ciudad con un utilitario mediano: traslados de mercadería programados para tu empresa.",
  },
  {
    title: "Viajes provinciales",
    text: "Llevamos tu mercadería a cualquier punto de la provincia de Córdoba.",
  },
  {
    title: "Viajes interprovinciales",
    text: "También viajamos a provincias cercanas cuando tu empresa lo necesita. Consultanos disponibilidad y fecha.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gamma-light">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
        <h2 className="text-2xl font-bold md:text-3xl">Logística provincial e interprovincial</h2>
        <p className="mt-3 max-w-prose leading-relaxed">
          Tercerizar tu logística es no tener que sostener vehículo, chofer ni mantenimiento propios.
          Nos encargamos de los viajes que tu empresa necesita.
        </p>
        <dl className="mt-10 grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="border-l-4 border-gamma pl-5">
              <dt className="text-lg font-semibold">{s.title}</dt>
              <dd className="mt-2 leading-relaxed">{s.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
