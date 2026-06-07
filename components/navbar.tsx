import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="font-bold text-lg tracking-tight">
          Nacional Fiat 128
        </Link>

        <nav className="flex gap-6 text-sm text-zinc-400">
          <Link href="/" className="hover:text-white transition-colors">
            Inicio
          </Link>
          <Link href="/historia" className="hover:text-white transition-colors">
            Historia
          </Link>
          <Link href="/galeria" className="hover:text-white transition-colors">
            Galería
          </Link>
          <Link href="/contacto" className="hover:text-white transition-colors">
            Contacto
          </Link>
        </nav>

      </div>
    </header>
  );
}