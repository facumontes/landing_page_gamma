import utilitario from "../public/utilitario.jpg"
import Image from "next/image"

export default function About() {
    return (
        <section id="about" className="">
            <div className="flex items-center justify-between px-50">
                <div className="py-5 max-w-xl">
                    <h1 className="text-gamma text-3xl"> Gamma Logísitca </h1>
                    <p className="text-gamma text-justify">Soluciones logísticas para empresas de Córdoba y alrededores.</p>
                </div>
                <Image src={utilitario} alt="Utilitario de la empresa" width={400} className="px-15 py-5"></Image>
            </div>
        </section>
    )
}