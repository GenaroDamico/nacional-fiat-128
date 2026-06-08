"use client";

import { useState, useEffect } from "react";

const FECHA_ENCUENTRO = new Date("2029-11-15T09:00:00");

function calcularTiempo() {
  const ahora = new Date();
  const diferencia = FECHA_ENCUENTRO.getTime() - ahora.getTime();

  if (diferencia <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  }

  return {
    dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diferencia / (1000 * 60)) % 60),
    segundos: Math.floor((diferencia / 1000) % 60),
  };
}

export default function Countdown() {
  const [tiempo, setTiempo] = useState(calcularTiempo());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 w-full">
      {[
        { valor: tiempo.dias, label: "Días" },
        { valor: tiempo.horas, label: "Horas" },
        { valor: tiempo.minutos, label: "Min" },
        { valor: tiempo.segundos, label: "Seg" },
      ].map((item) => (
        <div key={item.label} className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800 w-full">
          <p className="text-2xl font-bold text-white tabular-nums">
            {String(item.valor).padStart(2, "0")}
          </p>
          <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}