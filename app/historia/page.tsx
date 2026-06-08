const ediciones = [
  { id: 1, año: 2011, sede: "Buenos Aires", provincia: "Buenos Aires" },
  { id: 2, año: 2012, sede: "Rosario", provincia: "Santa Fe" },
  { id: 3, año: 2013, sede: "Córdoba", provincia: "Córdoba" },
  { id: 4, año: 2014, sede: "Mendoza", provincia: "Mendoza" },
  { id: 5, año: 2015, sede: "Mar del Plata", provincia: "Buenos Aires" },
  { id: 6, año: 2016, sede: "Tucumán", provincia: "Tucumán" },
  { id: 7, año: 2017, sede: "Salta", provincia: "Salta" },
  { id: 8, año: 2018, sede: "Bariloche", provincia: "Río Negro" },
  { id: 9, año: 2019, sede: "Rosario", provincia: "Santa Fe" },
  { id: 10, año: 2022, sede: "Buenos Aires", provincia: "Buenos Aires" },
  { id: 11, año: 2023, sede: "Córdoba", provincia: "Córdoba" },
  { id: 12, año: 2024, sede: "Mendoza", provincia: "Mendoza" },
  { id: 13, año: 2025, sede: "Mar del Plata", provincia: "Buenos Aires" },
];

export default function Historia() {
  return (
    <main className="flex-1 bg-zinc-950">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <p className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-4">
          Historia
        </p>
        <h1 className="text-4xl font-bold text-white mb-4">
          Ediciones anteriores
        </h1>
        <p className="text-zinc-400 text-lg mb-16">
          Desde 2011, cada año la comunidad se reúne en una ciudad distinta de Argentina.
        </p>

        <div className="flex flex-col gap-3">
          {ediciones.map((edicion) => (
            <div
              key={edicion.id}
              className="flex items-center justify-between border border-zinc-800 rounded-xl px-6 py-4 hover:border-zinc-600 transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="text-red-500 font-bold text-lg w-12">
                  {edicion.año}
                </span>
                <span className="text-white font-medium">
                  {edicion.sede}
                </span>
              </div>
              <span className="text-zinc-500 text-sm">
                {edicion.provincia}
              </span>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}