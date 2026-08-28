import Image from "next/image";
import logo from "../public/gamma_logo.png";

export default function Header() {
    return (
        <header className="sticky top-0 flex items-center justify-between px-12 py-1 shadow-md bg-[#ADB9DC]">
            <Image src={logo} alt="Logo de Gamma" width={100} height={50}/>
            <nav className="flex items-center gap-8">
                <a href="#about" className="text-gamma transition-opacity hover:opacity-60">
                    Quiénes somos
                </a>
                <a href="#services" className="text-gamma transition-opacity hover:opacity-60">
                    Servicios
                </a>
                <a href="#experience" className="text-gamma transition-opacity hover:opacity-60">
                    Experiencia
                </a>
                <a href="#contact" className="text-gamma transition-opacity hover:opacity-60">
                    Contacto
                </a>
            </nav>
</header>
    )
}

