import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { montserrat } from "@/fonts";

export const metadata: Metadata = {
  title: "Gamma Logística y Gestión | Córdoba",
  description:
    "Más de 20 años tercerizando la logística de empresas en Córdoba: viajes en la ciudad, provinciales e interprovinciales.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased bg-gamma-bg text-gamma`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
