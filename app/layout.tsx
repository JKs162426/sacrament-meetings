import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavLinks from "@/components/NavLinks";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Sacrament Meeting Program",
  description: "Ward meeting management app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lora.variable}>
      <body>
        <Header />
        <NavLinks />
        <main className="min-h-screen px-6 py-8 max-w-4xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
