import FadeIn from "@/components/fade-in";

const proximoEncuentro = {
  edicion: "XV",
  año: 2026,
  sede: "San Martin de los Andes",
  fecha: "Por confirmar",
  descripcion: "Seguí las novedades en nuestras redes.",
};

export default function Home() {
  return (
    <main className="flex flex-col">

      <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <FadeIn>
            <span className="text-red-500 font-semibold tracking-widest uppercase text-sm border border-red-500/30 px-4 py-1 rounded-full">
              Encuentros Nacionales
            </span>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              Fiat 128
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-zinc-400 text-xl max-w-md leading-relaxed">
              La comunidad argentina que mantiene vivo el auto del pueblo.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="w-16 h-px bg-red-500 mt-2" />
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <p className="text-red-500 font-semibold tracking-widest uppercase text-sm text-center mb-12">
              Próximo encuentro
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-1">
                    Edición {proximoEncuentro.edicion}
                  </h2>
                  <p className="text-zinc-500">{proximoEncuentro.año}</p>
                </div>
                <span className="bg-red-500/10 text-red-400 text-sm font-medium px-3 py-1 rounded-full border border-red-500/20">
                  Próximamente
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900 rounded-xl p-4">
                  <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Sede</p>
                  <p className="text-white font-medium">{proximoEncuentro.sede}</p>
                </div>
                <div className="bg-zinc-900 rounded-xl p-4">
                  <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Fecha</p>
                  <p className="text-white font-medium">{proximoEncuentro.fecha}</p>
                </div>
              </div>
              <p className="text-zinc-500 text-sm mt-6 text-center">
                {proximoEncuentro.descripcion}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}