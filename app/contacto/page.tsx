const contacto = [
  { id: 1, label: "Email", valor: "info@nacionalfiat128.com.ar" },
  { id: 2, label: "Instagram", valor: "@nacionalfiat128" },
  { id: 3, label: "Facebook", valor: "Nacional Fiat 128" },
];

export default function Contacto() {
  return (
    <main className="flex-1 bg-zinc-950">
      <div className="max-w-2xl mx-auto px-6 py-24">

        <p className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-4">
          Contacto
        </p>
        <h1 className="text-4xl font-bold text-white mb-4">
          Hablemos
        </h1>
        <p className="text-zinc-400 text-lg mb-16">
          ¿Querés participar, colaborar o tenés alguna consulta?
        </p>

        {/* Info de contacto */}
        <div className="flex flex-col gap-3 mb-16">
          {contacto.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border border-zinc-800 rounded-xl px-6 py-4"
            >
              <span className="text-zinc-500 text-sm uppercase tracking-wider">
                {item.label}
              </span>
              <span className="text-white font-medium">
                {item.valor}
              </span>
            </div>
          ))}
        </div>

        {/* Formulario — envío próximamente */}
        <div className="border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-white font-bold text-xl mb-6">
            Envianos un mensaje
          </h2>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-zinc-400 text-sm">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-zinc-400 text-sm">Email</label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-zinc-400 text-sm">Mensaje</label>
              <textarea
                placeholder="Tu mensaje..."
                rows={4}
                className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
              />
            </div>

            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition-colors">
              Enviar mensaje
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}