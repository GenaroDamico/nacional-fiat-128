# CLAUDE.md — Nacional Fiat 128

## Stack
Next.js 16 · TypeScript · Tailwind CSS · App Router

## Estructura de docs
- `/docs/README.md` → índice y orden de lectura
- `/docs/estado-fases.md` → dónde estamos ahora
- `/docs/bitacora.md` → historial de sesiones
- `/docs/decisiones/` → ADRs (decisiones técnicas)
- `/docs/glosario.md` → términos técnicos nuevos
- `/docs/git-comandos.md` → cheat sheet de Git
- `AGENTS.md` → guía para agentes AI (generado por Next.js, no editar)

## Reglas del proyecto
- Conventional Commits: `feat:` `fix:` `docs:` `chore:` `refactor:`
- Ramas: `main` (estable) → `dev` (desarrollo) → `feature/*` (funcionalidades)
- NO deployar a Vercel sin autorización de Marco
- Explicar antes de implementar
- Cada término nuevo → agregarlo al glosario

## Comandos frecuentes
```bash
npm run dev       # servidor de desarrollo en localhost:3000
npm run build     # build de producción
npm run lint      # verificar errores de código
git status        # ver qué cambió
git log --oneline # historial de commits
```
