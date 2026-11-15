import Image from "next/image";
import logo from "../public/gamma_logo.png";

const links = [
  { href: "#about", label: "Quiénes somos" },
  { href: "#services", label: "Servicios" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gamma-soft shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1 md:px-8">
        <a href="#about" aria-label="Gamma, ir al inicio">
          <Image src={logo} alt="Logo de Gamma" width={56} height={56} priority />
        </a>
        <nav aria-label="Principal" className="flex items-center gap-4 text-sm md:gap-8 md:text-base">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-opacity hover:opacity-60 ${
                link.href === "#about" || link.href === "#experience" ? "hidden sm:inline" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
