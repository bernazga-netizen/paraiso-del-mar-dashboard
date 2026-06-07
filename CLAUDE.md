# Paraíso del Mar — Dashboard Admin

## Stack
- HTML + CSS + JavaScript vanilla (sin frameworks)
- Deploy en Vercel, producción en branch `main`
- Preview automática en cualquier otro branch

## Archivos
- `index.html` — menú principal / landing
- `dashboard-admin.html` — panel inhouse (huéspedes, check-in/out, auditoría)
- `historial-acceso.html` — historial de entradas por punto de acceso
- `registro-form.html` — formulario público de registro de huéspedes
- `calendario.html` — calendario de ocupación (read-only)
- `docs/` — reglamentos en PDF (casas/condos, ES/EN)

## Backend
- URL producción: `https://paraiso-del-mar-backend.onrender.com`
- Todos los fetch apuntan a esa URL
- Auth: header `Authorization: Bearer <token>` en cada request protegido
- Token: `sessionStorage.getItem('pdm_acceso_token')`

## Paleta de colores — usar siempre estas variables
```css
--teal:      #007c89;   /* acentos principales */
--teal-lt:   #71aeb7;   /* textos secundarios */
--teal-pale: #e8f4f6;   /* fondos suaves */
--navy:      #003660;   /* header, botones primarios */
--navy-lt:   #0a4a7a;   /* hover de navy */
--emerald:   #006b35;   /* guardar, confirmaciones */
--dust:      #f2efec;   /* fondo general */
--ink:       #1a2e3a;   /* texto principal */
--ink-mid:   #3d5a66;   /* texto secundario */
--border:    #c2d8dd;   /* bordes */
--warn:      #c87533;   /* advertencias */
```

## Tipografía
- Cormorant Garamond — numerales
- Jost — texto de UI

## Logo
- Archivo: `PDM_Logo_Transparent.png` (ruta relativa)

## Iconos
- Sistema: Tabler Icons (`ti ti-*`)

## Reglas críticas
- Los tipos de huésped se muestran como texto pero se guardan como letra:
  H → Propietario, R → Renta, G → Invitado, P → Residente Permanente
- Esta traducción es solo en JS — nunca cambiar los valores en BD
- Fechas: usar `.substring(0,10)` sobre strings ISO — nunca concatenar `T00:00:00`
- Tipo P tiene `fecha_salida: null` — no asumir que es error
- `edificio` se deriva del prefijo de la unidad (ej: `A-103` → edificio `A`)
