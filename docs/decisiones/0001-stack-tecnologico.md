# ADR 0001 — Stack tecnológico

**Estado:** Aceptado
**Fecha:** 2026-06-07
**Autores:** Genaro + Claude

---

## Contexto

Necesitamos elegir el stack para construir el sitio web del Nacional Fiat 128. El proyecto es real (sin fecha de entrega urgente) y se usa también como proyecto de aprendizaje. Tiene que alinearse con el stack que usan Marco (Zuzon) y Natalia (Training) para poder compartir conocimiento y eventualmente colaborar.

## Opciones evaluadas

| Opción | Pros | Contras |
|--------|------|---------|
| HTML + CSS + JS puro | Más simple, sin configuración | No escala, sin componentes reutilizables, sin tipado |
| Next.js + TypeScript + Tailwind | Estándar industrial, alineado con el equipo, excelente DX | Curva de aprendizaje más pronunciada para un principiante |
| Astro | Muy bueno para sitios de contenido estático | Diferente al stack del equipo, menos demanda laboral |

## Decisión

**Next.js 16 + TypeScript + Tailwind CSS** con App Router.

Inicializado con `create-next-app@latest` que configuró automáticamente:
- TypeScript
- Tailwind CSS
- ESLint
- App Router
- Turbopack (bundler más rápido)
- Import alias `@/*`

## Consecuencias

✅ Genaro aprende el stack más demandado del mercado actualmente
✅ Puede colaborar en el futuro con Marco y Natalia
✅ El proyecto escala bien si crece en funcionalidades
✅ Excelente documentación y comunidad
⚠️ Curva de aprendizaje más pronunciada que HTML/CSS puro — se mitiga con el enfoque tutor

## Supersede / supersedido por
_Ninguno_
