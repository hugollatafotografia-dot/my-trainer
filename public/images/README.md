# Mapa de imagenes publicas

Estructura reorganizada por pagina y por subbloque visual para facilitar mantenimiento.

## Estructura principal (por pagina)

- `pages/hero/`
- `pages/tratamientos/`
- `pages/sobre-nosotros/`
- `pages/resultados/`
- `pages/contacto/`
- `pages/reservar/` (extra para la pagina de reserva)

## Subcarpetas por pagina

### `pages/hero/`
- `inicial/`: recurso principal del hero
- `primera-visita/`: recurso del bloque Primera visita
- `equipo/`: recursos asociados al bloque de equipo
- `proceso/`: recursos del bloque de proceso
- `metodo/`: recursos de metodo/editoriales
- `cta/`: recursos de cierre o CTA
- `cierre/`: recursos de cierre reutilizables

### `pages/tratamientos/`
- `hero/`
- `proceso/`
- `cierre/`

### `pages/sobre-nosotros/`
- `hero/`
- `equipo/`
- `historia/`
- `cierre/`

### `pages/resultados/`
- `hero/`
- `comparativas/`
- `confianza/`
- `cierre/`

### `pages/contacto/`
- `hero/`
- `asesoria/`
- `cierre/`

### `pages/reservar/`
- `hero/`
- `cabina/`

## Convencion de nombres

- Formato: `contexto-descripcion-clara.<jpg|mp4>`
- Minusculas y guiones
- Sin sufijos ambiguos (`real`, `placeholder`)
- En rutas locales (`/images/...`) no usar query string (`?v=...`) con `next/image`; si hace falta versionado, usar nombre de archivo/version en el propio filename.

## Nota

Todas las rutas del proyecto (`app/`, `components/`, `lib/`) ya apuntan a esta nueva estructura.
