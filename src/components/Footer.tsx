export default function Footer() {
  return (
    <footer className="border-t border-surface-light/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          &copy; {new Date().getFullYear()} Eitasam. All rights reserved.
        </p>
        <p className="text-muted text-sm font-mono">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
