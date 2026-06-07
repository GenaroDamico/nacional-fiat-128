# Glosario — Nacional Fiat 128

Términos técnicos en orden de aparición. Cada término se agrega cuando aparece por primera vez en el proyecto.

---

## Node.js
Entorno que permite ejecutar JavaScript en la computadora (no solo en el navegador). Necesario para correr Next.js y npm.

## npm (Node Package Manager)
Gestor de paquetes de JavaScript. Permite instalar librerías externas con `npm install <nombre>`. Viene incluido con Node.js.

## npx
Compañero de npm. En lugar de instalar una herramienta permanentemente, la descarga y ejecuta en el momento. Ejemplo: `npx create-next-app@latest`.

## Dependencia
Librería externa que el proyecto usa. Se listan en `package.json`. Next.js, React y Tailwind son dependencias de este proyecto.

## Git
Sistema de control de versiones. Guarda una "foto" del proyecto en cada commit, permitiendo volver a cualquier estado anterior.

## Repositorio (repo)
La carpeta del proyecto bajo control de Git. Puede existir localmente (en tu compu) y remotamente (en GitHub).

## Commit
Una "foto" guardada del proyecto en un momento determinado. Tiene un mensaje descriptivo y un ID único (hash).

## Conventional Commits
Convención para escribir mensajes de commit con prefijos que indican el tipo de cambio: `feat:` (nueva funcionalidad), `fix:` (corrección), `docs:` (documentación), `chore:` (mantenimiento), `refactor:` (mejora de código).

## Rama (branch)
Versión paralela del código. Permite trabajar en algo nuevo sin afectar el código estable. Ejemplo: `main`, `dev`, `feature/galeria`.

## main
Rama principal. Representa la versión estable / "en producción" del proyecto.

## dev
Rama de desarrollo. Aquí se trabaja antes de pasar cambios a `main`.

## HEAD
Puntero que indica en qué commit/rama estás parado actualmente.

## Remote / origin
Nombre que Git le da al repositorio remoto (GitHub). `origin` es el nombre por defecto.

## Push
Subir commits locales al repositorio remoto (GitHub).

## Pull
Bajar cambios del repositorio remoto a tu máquina local.

## TypeScript (TS)
JavaScript con tipado estático. Te avisa errores antes de ejecutar el código. Los archivos tienen extensión `.ts` o `.tsx`.

## TSX
TypeScript + JSX. Permite escribir HTML dentro de TypeScript. Es el formato que usan los componentes de React en este proyecto.

## Next.js
Framework de React que agrega ruteo automático, renderizado del lado del servidor (SSR) y optimizaciones. Las páginas se definen como archivos dentro de `/app`.

## App Router
Sistema de ruteo de Next.js 13+. Cada carpeta dentro de `/app` con un archivo `page.tsx` se convierte en una ruta. Ejemplo: `/app/galeria/page.tsx` → ruta `/galeria`.

## Tailwind CSS
Framework de CSS basado en utilidades. En vez de escribir CSS en archivos separados, aplicás clases directamente en el HTML/TSX. Ejemplo: `className="text-blue-500 font-bold"`.

## Servidor de desarrollo (dev server)
Servidor local que corre mientras desarrollás. Se inicia con `npm run dev` y sirve el proyecto en `http://localhost:3000`.

## localhost
Dirección que apunta a tu propia computadora. Puerto 3000 = el servidor de desarrollo de Next.js.

## Terminal / CLI
Interfaz de línea de comandos. Ventana donde le das órdenes a la computadora en texto. Ejemplos: cmd, PowerShell, la terminal integrada de VSCode.

## ADR (Architecture Decision Record)
Documento que registra una decisión técnica importante: contexto, opciones evaluadas, decisión tomada y consecuencias. Son inmutables — si cambia la decisión, se crea un ADR nuevo.
