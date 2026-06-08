const fotos = [
  { id: 1, titulo: "Encuentro 2024 — Mendoza" },
  { id: 2, titulo: "Desfile de autos 2023" },
  { id: 3, titulo: "Encuentro 2023 — Córdoba" },
  { id: 4, titulo: "Participantes 2022" },
  { id: 5, titulo: "Encuentro 2022 — Buenos Aires" },
  { id: 6, titulo: "Restauración premiada 2024" },
  { id: 7, titulo: "Camino a Mendoza 2024" },
  { id: 8, titulo: "Fiat 128 familiar 2023" },
  { id: 9, titulo: "Detalle motor 2022" },
];

export default function Galeria() {
  return (
    <main className="flex-1 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 py-24">

        <p className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-4">
          Galería
        </p>
        <h1 className="text-4xl font-bold text-white mb-4">
          Fotos de los encuentros
        </h1>
        <p className="text-zinc-400 text-lg mb-16">
          Momentos de cada edición nacional.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {fotos.map((foto) => (
            <div
              key={foto.id}
              className="group relative aspect-square bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium">
                  {foto.titulo}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}