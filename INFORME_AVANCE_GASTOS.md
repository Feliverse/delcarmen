# Informe de Avance y Gastos Pendientes

**Proyecto:** Sitio web parroquial "Nuestra Senora del Carmen y San Maximiliano Kolbe"

**Fecha de corte:** 16 de marzo de 2026

## 1. Objetivo del informe

Presentar de manera clara:
- Lo que ya se construyo y esta funcional.
- Lo que falta para publicar con dominio propio.
- Los gastos pendientes estimados para completar y operar el sitio.

## 2. Resumen ejecutivo

A la fecha, el proyecto ya cuenta con una web moderna en React + TypeScript, con secciones pastorales completas, contenido estructurado, integraciones de contacto (WhatsApp/Formspree) y modulo "Palabra del Dia" conectado a API.Bible.

La aplicacion esta preparada para desplegarse (build + deploy), incluso con opcion de publicacion en GitHub Pages. Para pasar a "sitio institucional en produccion con dominio propio", el componente critico pendiente es la contratacion/configuracion de dominio y cierre operativo (cuentas externas, monitoreo y mantenimiento).

## 3. Avances realizados (trabajo ejecutado)

### 3.1 Base tecnica implementada
- Frontend construido con React 19 + TypeScript + Vite.
- Estilos con Tailwind CSS y componentes reutilizables.
- Scripts de desarrollo, build, lint y despliegue definidos en `package.json`.
- Soporte de despliegue en GitHub Pages (`gh-pages`).

### 3.2 Estructura y funcionalidades funcionales
- Navbar y Footer institucionales.
- Hero con carrusel y bloque de "Proxima misa".
- Seccion "Palabra del Dia" (Evangelio + mensaje inspirador).
- Horarios de misas y confesiones.
- Tramites/sacramentos.
- Noticias y eventos.
- Grupos parroquiales con detalle.
- Capillas con informacion ampliada.
- Modal de donaciones (QR).
- Contacto por formulario (Formspree) y acceso directo a WhatsApp.

### 3.3 Contenido y configuracion
- Datos de grupos y capillas cargados en el proyecto.
- Enlaces institucionales parametrizados por variables de entorno.
- Configuracion por `.env` para API.Bible, contacto y enlaces externos.

## 4. Estado actual de avance (estimado)

- **Diseno y frontend:** 90%
- **Contenido parroquial base:** 85%
- **Integraciones externas:** 75%
- **Infraestructura para dominio propio:** 40%
- **Operacion y mantenimiento formal:** 35%

**Avance global estimado del proyecto:** **80%**

> Nota: El porcentaje global representa un criterio tecnico-operativo, no solo visual.

## 5. Gastos pendientes para salida con dominio propio

Los montos son rangos de referencia para planificacion. Se recomienda validar con proveedor final antes de aprobar presupuesto.

## 5.1 Costos unicos (setup)

| Rubro | Rango estimado USD | Rango estimado BOB (aprox.) | Observaciones |
|---|---:|---:|---|
| Registro de dominio anual (.com/.org) | 12 - 30 | 85 - 210 | Pago por 1 ano, renovable. |
| Dominio local (.bo, si aplica) | 35 - 80 | 245 - 560 | Puede variar por categoria y proveedor local. |
| Configuracion tecnica inicial (DNS, SSL, publicacion final) | 0 - 120 | 0 - 835 | Si lo hace el equipo interno puede ser 0. |
| Ajustes finales de contenido/QA pre-lanzamiento | 50 - 250 | 350 - 1,740 | Revision final antes de publicacion oficial. |

## 5.2 Costos recurrentes (mensuales/anuales)

| Rubro | Rango estimado | Frecuencia | Observaciones |
|---|---:|---|---|
| Hosting estatico (GitHub Pages/Netlify/Vercel) | 0 USD | mensual | Puede mantenerse en plan gratuito al inicio. |
| Correo institucional | 0 - 8 USD por cuenta | mensual | Segun proveedor y numero de cuentas. |
| Formulario (Formspree) | 0 - 10 USD | mensual | Segun volumen de mensajes. |
| Servicio API.Bible | 0 - 20 USD | mensual | Depende del plan/uso y terminos vigentes. |
| Renovacion de dominio | 12 - 80 USD | anual | Segun extension elegida. |
| Soporte y mantenimiento tecnico | 30 - 200 USD | mensual | Backups, cambios menores, monitoreo. |

## 6. Escenarios de presupuesto recomendado

## 6.1 Escenario minimo (salida economica)
- Dominio .com/.org.
- Hosting gratuito.
- Formulario y API en plan gratuito.
- Mantenimiento ad-hoc.

**Costo inicial estimado:** 12 - 80 USD

**Costo mensual estimado:** 0 - 30 USD

## 6.2 Escenario recomendado (institucional estable)
- Dominio + configuracion profesional.
- Hosting gratuito o bajo costo, con buenas practicas de monitoreo.
- Correo institucional para administracion.
- Mantenimiento mensual basico.

**Costo inicial estimado:** 80 - 300 USD

**Costo mensual estimado:** 20 - 90 USD

## 6.3 Escenario consolidado (operacion formal)
- Dominio institucional.
- Correo para multiples responsables.
- Planes pagos para formularios/API segun trafico.
- Mantenimiento continuo y mejoras.

**Costo inicial estimado:** 200 - 600 USD

**Costo mensual estimado:** 70 - 250 USD

## 7. Principales pendientes no economicos (gestion)

- Definir dominio final (ejemplo: `.org`, `.com`, `.bo`).
- Crear y validar cuentas de servicios externos definitivas (Formspree, API, correo).
- Cerrar contenido final (textos, horarios especiales, eventos vigentes).
- Realizar prueba completa en moviles y escritorio antes del lanzamiento.
- Definir responsable interno para actualizacion de noticias y mensajes.

## 8. Riesgos si no se cubren los pendientes

- Publicacion sin dominio propio reduce confianza institucional.
- Sin mantenimiento, los datos pueden quedar desactualizados.
- Sin monitoreo, fallos en formularios/API pueden pasar desapercibidos.
- Sin responsable editorial, la seccion de noticias pierde utilidad pastoral.

## 9. Recomendacion final

Aprobar como minimo el **escenario recomendado** para asegurar presencia institucional confiable con dominio propio y continuidad operativa.

Prioridad de gasto sugerida:
1. Dominio y configuracion tecnica final.
2. Cierre de contenido y QA de lanzamiento.
3. Mantenimiento mensual basico.
4. Escalamiento progresivo de servicios pagos segun uso real.

## 10. Anexo: checklist de salida a produccion

- [ ] Dominio comprado y DNS configurado.
- [ ] Variables de entorno definitivas cargadas.
- [ ] Formulario de contacto probado extremo a extremo.
- [ ] WhatsApp con numero oficial validado.
- [ ] Seccion Palabra del Dia validada con API key real.
- [ ] Prueba en celular/tablet/escritorio completada.
- [ ] Responsable de contenido designado.
- [ ] Plan de mantenimiento definido.
