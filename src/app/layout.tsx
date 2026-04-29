import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Site que Vende | Criação de Sites em Itumbiara e todo Brasil",
  description:
    "Especialistas em criação de sites em Itumbiara e em todo o Brasil. Criamos landing pages e sites estratégicos focados em conversão. Transforme seu site em uma máquina de vendas. Entrega em 5 dias!",
  keywords: [
    "site que vende",
    "criação de sites Itumbiara",
    "landing page Itumbiara",
    "desenvolvimento de sites Brasil",
    "página de vendas",
    "agência de marketing Itumbiara",
    "site profissional whatsapp",
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png" },
    ],
  },
  openGraph: {
    title: "Site que Vende | Criação de Sites em Itumbiara e todo Brasil",
    description: "Transformamos seu site em uma máquina de clientes. Fale conosco agora!",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import LivingSnakes from "./components/LivingSnakes";
import Particles from "./components/Particles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased bg-white text-gray-900">
        <LivingSnakes />
        <Particles />
        {children}
      </body>
    </html>
  );
}

