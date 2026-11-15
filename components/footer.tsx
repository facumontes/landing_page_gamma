import { INSTAGRAM_URL, PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";

const links = [
  { href: "#about", label: "Sobre nosotros" },
  { href: "#services", label: "Servicios" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contactanos" },
];

export default function Footer() {
  return (
    <footer className="bg-gamma-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-4">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de Gamma">
            <svg width={28} height={28} aria-hidden="true">
              <use href="/sprite.svg#whatsapp" />
            </svg>
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Gamma">
            <svg width={28} height={28} aria-hidden="true">
              <use href="/sprite.svg#instagram" />
            </svg>
          </a>
          <span className="text-sm">{PHONE_DISPLAY}</span>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm hover:opacity-60">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="border-t border-gamma/20 py-3 text-center text-sm">
        © {new Date().getFullYear()} Gamma Logística y Gestión · Córdoba, Argentina
      </p>
    </footer>
  );
}
