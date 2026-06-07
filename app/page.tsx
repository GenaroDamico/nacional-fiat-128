export default function Home() {
  return (
    <main className="flex flex-col">

      {/* Hero — sección principal */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-6">
        <p className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-4">
          Encuentros Nacionales
        </p>
        <h1 className="text-6xl font-bold mb-6">
          Fiat 128
        </h1>
        <p className="text-zinc-400 text-xl max-w-md">
          La comunidad argentina que mantiene vivo el auto del pueblo.
        </p>
      </section>

      {/* Próximo encuentro */}
      <section className="flex flex-col items-center justify-center py-24 px-6 bg-zinc-50 text-center">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Próximo encuentro
        </h2>
        <p className="text-zinc-500 text-lg">
          Fecha y sede por confirmar — seguí las novedades acá.
        </p>
      </section>

    </main>
  );
}