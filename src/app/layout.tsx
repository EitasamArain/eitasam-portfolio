import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eitasam.dev"),
  title: "Eitasam — Full-Stack Developer & AI Automation Specialist",
  description:
    "Full-stack developer and AI automation specialist based in Karachi, Pakistan. Specializing in Next.js websites, n8n workflows, Zapier automation, and GoHighLevel CRM systems.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon-512.png",
  },
  openGraph: {
    title: "Eitasam — Full-Stack Developer & AI Automation Specialist",
    description:
      "Full-stack developer and AI automation specialist based in Karachi, Pakistan. Specializing in Next.js websites, n8n workflows, Zapier automation, and GoHighLevel CRM systems.",
    url: "https://eitasam.dev",
    siteName: "Eitasam Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eitasam — Full-Stack Developer & AI Automation Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eitasam — Full-Stack Developer & AI Automation Specialist",
    description:
      "Full-stack developer and AI automation specialist based in Karachi, Pakistan. Specializing in Next.js websites, n8n workflows, Zapier automation, and GoHighLevel CRM systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans animate-fade-in">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
