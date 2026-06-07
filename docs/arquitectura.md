# Arquitectura del proyecto

## Stack

| Capa | Tecnología | Por qué |
|------|-----------|---------|
| Framework | Next.js 16 (App Router) | Ruteo automático, SSR, estándar de la industria |
| Lenguaje | TypeScript | Tipado estático, menos bugs en runtime |
| Estilos | Tailwind CSS | Utilidades inline, rápido de iterar |
| Deploy | Pendiente — requiere autorización de Marco | — |

## Estructura de carpetas

```
nacional-fiat-128/
├── app/                  → páginas y layouts (App Router de Next.js)
│   ├── layout.tsx        → layout raíz: HTML base, fuentes, navegación global
│   ├── page.tsx          → página de inicio (ruta "/")
│   └── globals.css       → estilos globales + configuración de Tailwind
├── public/               → assets estáticos: imágenes, íconos, favicon
├── docs/                 → toda la documentación del proyecto
├── CLAUDE.md             → índice para agentes AI (este repo)
├── AGENTS.md             → guía técnica Next.js para agentes (no editar)
├── next.config.ts        → configuración de Next.js
├── tailwind.config.ts    → configuración de Tailwind CSS
├── tsconfig.json         → configuración de TypeScript
└── package.json          → dependencias y scripts del proyecto
```

## Decisiones técnicas
Ver [`/docs/decisiones/`](./decisiones/README.md) para los ADRs completos.
