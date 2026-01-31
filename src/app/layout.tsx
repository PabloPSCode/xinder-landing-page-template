import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "../styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-primary",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Xinder — Agência de Software",
  description:
    "A Xinder é uma agência de software especializada em produtos digitais, squads dedicados e soluções sob medida para operações críticas.",
  keywords: [
    "Xinder",
    "agência de software",
    "desenvolvimento sob medida",
    "squads dedicados",
    "produto digital",
    "UX/UI",
    "devops",
    "aplicativos mobile",
    "plataforma SaaS",
    "consultoria tecnológica",
  ],
  authors: [
    {
      name: "Xinder",
      url: "https://xinder.dev",
    },
  ],
  openGraph: {
    title: "Xinder — Agência de Software",
    description:
      "Soluções digitais sob medida com squads de alta performance para acelerar produtos e operações.",
    url: "https://xinder.dev",
    siteName: "Xinder",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Xinder — Agência de Software",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${poppins.variable} notranslate`}
      translate="no"
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
