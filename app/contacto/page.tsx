"use client";

import { useState } from "react";
import FadeIn from "@/components/fade-in";

const contacto = [
  { id: 1, label: "Email", valor: "info@nacionalfiat128.com.ar" },
  { id: 2, label: "Instagram", valor: "@nacionalfiat128" },
  { id: 3, label: "Facebook", valor: "Nacional Fiat 128" },
];

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit() {
    if (!nombre || !email || !mensaje) return;
    setEnviado(true);
  }

  if (enviado) {
    return (
      <main className="flex-1 bg-zinc-950 flex items-center justify-center">
        <FadeIn>
          <div className="text-center">
            <p className="text-5xl mb-6">✅</p>
            <h2 className="text-white text-2xl font-bold mb-2">¡Mensaje enviado!</h2>
            <p className="text-zinc-400">Te respondemos a la brevedad.</p>
            <button
              onClick={() => {
                setNombre("");
                setEmail("");
                setMensaje("");
                setEnviado(false);
              }}
              className="mt-8 text-red-500 text-sm hover:text-red-400 transition-colors"
            >
              Enviar otro mensaje
            </button>
          </div>
        </FadeIn>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-zinc-950">
      <div className="max-w-2xl mx-auto px-6 py-24">

        <FadeIn>
          <p className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-4">
            Contacto
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">Hablemos</h1>
          <p className="text-zinc-400 text-lg mb-16">
            ¿Querés participar, colaborar o tenés alguna consulta?
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-col gap-3 mb-16">
            {contacto.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border border-zinc-800 rounded-xl px-6 py-4"
              >
                <span className="text-zinc-500 text-sm uppercase tracking-wider">{item.label}</span>
                <span className="text-white font-medium">{item.valor}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-white font-bold text-xl mb-6">Envianos un mensaje</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-zinc-400 text-sm">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-zinc-400 text-sm">Email</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-zinc-400 text-sm">Mensaje</label>
                <textarea
                  placeholder="Tu mensaje..."
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                disabled={!nombre || !email || !mensaje}
              >
                Enviar mensaje
              </button>
            </div>
          </div>
        </FadeIn>

      </div>
    </main>
  );
}