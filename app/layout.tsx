import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import InteractionTracker from "@/components/InteractionTracker";
import Navbar from "@/components/Navbar";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Centres Ideal Illa Carlemany",
    template: "%s | Centres Ideal Illa Carlemany",
  },
  description:
    "Clínica estética premium en Illa Carlemany con diagnóstico facial y corporal, protocolos personalizados y seguimiento profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${jakarta.variable} antialiased`}>
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <FloatingActions />
        <InteractionTracker />
      </body>
    </html>
  );
}
