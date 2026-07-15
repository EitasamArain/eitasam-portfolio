import Link from "next/link";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "../app/globals.css";

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

export default function NotFound() {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans bg-background text-foreground flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <div className="rounded-xl border border-surface-light bg-surface/40 backdrop-blur-sm p-8 sm:p-10">
            <div className="font-mono text-left">
              <p className="text-muted text-sm mb-1">
                <span className="text-foreground/70">eitasam@portfolio</span>
                <span className="text-muted">:</span>
                <span className="text-accent">~</span>
                <span className="text-muted">$</span>{" "}
                <span className="text-foreground">curl -s https://eitasam.dev/this-page</span>
              </p>
              <p className="text-red-400 text-sm sm:text-base mb-4">
                bash: page-not-found: No such file or directory
              </p>
              <p className="text-muted text-sm mb-6">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex px-6 py-3 rounded-lg bg-accent text-background font-semibold text-sm tracking-wide hover:bg-accent/90 transition-all hover:shadow-[0_0_20px_#F59E0B30]"
            >
              Back to Home
            </Link>
          </div>

          <p className="font-mono text-xs text-muted mt-6">
            <span className="text-accent">▊</span>
          </p>
        </div>
      </body>
    </html>
  );
}
