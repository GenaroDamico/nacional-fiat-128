# Git — Cheat Sheet

Comandos de uso frecuente en este proyecto.

---

## Navegación y estado

```bash
git status              # qué archivos cambiaron
git log --oneline       # historial de commits (compacto)
git branch              # qué ramas existen y en cuál estoy
git diff                # qué cambió exactamente en los archivos
```

## Trabajo diario

```bash
git add .                        # agregar todos los cambios al "stage"
git add src/componente.tsx        # agregar un archivo específico
git commit -m "feat: descripcion" # guardar una foto con mensaje
git push                          # subir commits a GitHub
git pull                          # bajar cambios de GitHub
```

## Ramas

```bash
git checkout dev                  # cambiarme a la rama dev
git checkout -b feature/galeria   # crear y moverme a una rama nueva
git merge dev                     # traer cambios de dev a la rama actual
```

## Convención de commits (Conventional Commits)

| Prefijo | Cuándo usarlo |
|---------|--------------|
| `feat:` | Nueva funcionalidad |
| `fix:` | Corrección de bug |
| `docs:` | Solo documentación |
| `chore:` | Mantenimiento (dependencias, config) |
| `refactor:` | Mejora de código sin cambiar funcionalidad |

Ejemplos:
```bash
git commit -m "feat: add hero section to homepage"
git commit -m "fix: correct contact form validation"
git commit -m "docs: update glosario with new terms"
git commit -m "chore: update dependencies"
```

## Workflow de ramas de este proyecto

```
main (estable)
  └── dev (desarrollo diario)
        └── feature/nombre (funcionalidad nueva)
```

1. Trabajás en `dev` (o en una rama `feature/`)
2. Cuando algo funciona y está prolijo → merge a `dev`
3. Cuando `dev` está estable → merge a `main`
4. **Nunca trabajar directo en `main`**

## Comandos de emergencia

```bash
git checkout -- .        # descartar todos los cambios no commiteados
git stash               # guardar cambios temporalmente sin commitear
git stash pop           # recuperar los cambios guardados con stash
```
