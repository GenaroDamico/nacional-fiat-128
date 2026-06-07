# Bitácora de sesiones — Nacional Fiat 128

Registro de qué se hizo y qué se aprendió en cada sesión.

---

## Sesión 1 — 2026-06-07

### Qué se hizo
- Decisión de usar Claude.ai (plan free) para esta etapa en lugar de Claude Code (requiere plan Pro)
- Instalación de Node.js v24.16.0 y npm v11.13.0
- Configuración de identidad de Git con email noreply de GitHub
- Creación del proyecto con `npx create-next-app@latest nacional-fiat-128`
- Resolución del error de PowerShell (Set-ExecutionPolicy RemoteSigned)
- Verificación del proyecto corriendo en localhost:3000
- Creación de rama `dev` 
- Creación del repositorio en GitHub y push de ambas ramas (`main` y `dev`)
- Creación de la estructura completa de documentación en `/docs/`

### Qué se aprendió
- Diferencia entre Claude.ai y Claude Code (y por qué se necesita plan Pro para Claude Code)
- Qué es Node.js, npm y npx — y la diferencia entre ellos
- Qué hace `create-next-app` y por qué existe
- Qué es y para qué sirve Git: commits, ramas, remotes
- Cómo funciona la rama `main` vs `dev`
- Qué es un ADR y por qué documentamos decisiones técnicas
- Convención Conventional Commits
- Cómo abrir la terminal integrada de VSCode con Ctrl + `

### Pendiente para próxima sesión
- Entender la estructura de archivos que creó Next.js (qué hace cada archivo)
- Empezar Fase 1: limpiar la página de bienvenida y crear el layout base
