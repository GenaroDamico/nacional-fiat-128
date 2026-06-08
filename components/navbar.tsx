"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/historia", label: "Historia" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="font-bold text-lg tracking-tight">
          Nacional Fiat 128
        </Link>

        {/* Links — solo visibles en sm y más grande */}
        <nav className="hidden sm:flex gap-6 text-sm text-zinc-400">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botón hamburger — solo visible en celular */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="sm:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuAbierto ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuAbierto ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuAbierto ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </div>

      {/* Menú desplegable — solo en celular cuando está abierto */}
      {menuAbierto && (
        <nav className="sm:hidden border-t border-zinc-800 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuAbierto(false)}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}