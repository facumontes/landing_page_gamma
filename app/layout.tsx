import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { montserrat } from "@/fonts";

export const metadata: Metadata = {
  title: "Gamma",
  description: "Landing page of Gamma logistic enterprise",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body className={`${montserrat.className} antialiased bg-gamma-bg`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
