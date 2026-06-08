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

---

## Sesión 1 (continuación) — 2026-06-07

### Qué se hizo
- Lectura y comprensión de `app/page.tsx` y `app/layout.tsx`
- Actualización del metadata: título y `lang="es"`
- Reemplazo del template de Next.js por la página de inicio real
- Creación del componente `Navbar` en `components/navbar.tsx`
- Creación del componente `Footer` en `components/footer.tsx`
- Integración de Navbar y Footer en el layout raíz
- Creación de la página `/historia`
- Mejora visual de la home: gradiente, card de próximo encuentro, efectos hover

### Qué se aprendió
- Qué es un componente y por qué se separa en su propio archivo
- `export default` — cómo funciona y por qué Next.js lo necesita
- `children` en el layout — la ranura donde Next.js inserta cada página
- `Link` vs `<a>` — navegación sin recarga completa
- `@/` como alias de la raíz del proyecto
- `flex-1` para empujar el footer al fondo en páginas cortas
- Gradientes, opacidad con `/`, y `hover:` + `transition-` en Tailwind
- Separar datos del JSX usando un objeto `const`

### Pendiente para próxima sesión
- Dar contenido real a la página Historia (lista de ediciones anteriores)
- Crear página Galería con grilla de fotos
- Crear página Contacto

## Sesión 1 (cierre) — 2026-06-07

### Qué se hizo
- Historia: lista completa de ediciones con `.map()` sobre array de objetos
- Galería: grilla responsive con efecto hover en cada foto
- Contacto: info de contacto + formulario visual
- Actualización de `estado-fases.md`: Fase 1 cerrada, Fase 2 abierta

### Qué se aprendió
- `.map()` — recorrer un array y devolver JSX por cada elemento
- `key` en listas — por qué React lo necesita
- `grid grid-cols-N` — CSS Grid en Tailwind
- Breakpoints responsive: `sm:` `md:` para distintos tamaños de pantalla
- `group` y `group-hover:` — aplicar estilos a hijos cuando el padre tiene hover
- `aspect-square` — mantener proporción cuadrada sin fijar alto y ancho
- `focus:` — estilos cuando un campo de formulario está activo
- Formulario visual sin lógica (envío con `useState` queda para Fase 2)

### Pendiente para próxima sesión
- Fase 2: fotos reales en galería
- Formulario de contacto funcional (useState)
- Verificar responsive en celular