export default function Footer() {
    return (
        <footer className="w-full p-8">
            <div className="flex flex-row flex-wrap items-center gap-y-6 bg-[#ADB9DC] text-center md:justify-between">
                <div>
                    <svg width={28} height={28}>
                        <use href="/sprite.svg#whatsapp"/>
                    </svg>
                    <svg width={28} height={28}>
                        <use href="/sprite.svg#instagram"/>
                    </svg>
                </div>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 px-3">
                    <li>
                        <a href="#about" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
                            Sobre nosotros
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a
                            href="#experience"
                            className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
                        >
                            Experiencia
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
                        >
                            Contactanos
                        </a>
                    </li>
                </ul>
            </div>
            <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4">
                Copyright © 2026&nbsp;
            </p>
        </footer>
    )
}