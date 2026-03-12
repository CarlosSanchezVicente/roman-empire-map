# La expansión de Roma: De la República al Imperio

> Narrativa cartográfica interactiva sobre el crecimiento territorial del mundo romano desde el año 500 a.C. hasta el 117 d.C.

---

## Descripción

Este proyecto es un **scrollytelling** — una narrativa impulsada por scroll — que relata la expansión del Imperio Romano en quince capítulos cronológicos. Al desplazarse por la página, el mapa vuela automáticamente a cada escenario histórico mostrando el territorio controlado por Roma en ese momento, sincronizado con texto histórico e imágenes de época.

El recorrido abarca desde los orígenes de la República Romana en el Lacio hasta la máxima extensión imperial bajo Trajano, pasando por hitos como las Guerras Púnicas, la conquista de la Galia, la invasión de Britania y las Guerras Dacias.

---

## Demo

🌐 [Ver la narrativa interactiva](https://carlossanchezvicente.github.io/roman-empire-map/)

---

## Capítulos

| # | Fecha | Hito histórico |
|---|-------|----------------|
| 1 | 500 a.C. | La Aurora de la República |
| 2 | 338 a.C. | La Unión del Lacio |
| 3 | 298 a.C. | El Desafío Samnita |
| 4 | 290 a.C. | El Control de Italia Central |
| 5 | 272 a.C. | La Capitulación de Tarento |
| 6 | 264 a.C. | Hacia el Primer Conflicto Púnico |
| 7 | 218 a.C. | La Invasión de Aníbal |
| 8 | 133 a.C. | El Legado de Átalo |
| 9 | 60 a.C. | El Primer Triunvirato |
| 10 | 16 d.C. | La Consolidación de Augusto |
| 11 | 47 d.C. | La Conquista de Britania |
| 12 | 69 d.C. | La Dinastía Flavia |
| 13 | 84 d.C. | Las Fronteras del Norte |
| 14 | 102 d.C. | Las Guerras Dacias |
| 15 | 117 d.C. | La Cúspide de Trajano |

---

## Tecnologías utilizadas

- **[Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/)** v3.8.0 — renderizado del mapa con estilo Standard, terreno 3D e iluminación atmosférica
- **[Scrollama.js](https://github.com/russellsamora/scrollama)** — detección de scroll y sincronización con el mapa
- **HTML5 / CSS3** — diseño visual completo embebido, sin frameworks externos
- **Google Fonts** — tipografías [Cinzel](https://fonts.google.com/specimen/Cinzel) (títulos) y [EB Garamond](https://fonts.google.com/specimen/EB+Garamond) (cuerpo)

---

## Estructura del proyecto

```
/
├── index.html        # Motor de presentación y estilos visuales
├── config.js         # Datos de capítulos, textos y configuración del mapa
├── README.md         # Este archivo
├── LICENSE.txt       # Licencia BSD 3-Clause (Mapbox Storytelling)
└── assets/
    ├── order0_500ac.webp
    ├── order3_298ac.webp
    ├── order6_218ac.webp
    ├── order7_133ac.jpg
    ├── order8_60ac.jpg
    ├── order11_69dc.webp
    └── order14_102dc.webp
```

---

## Fuentes de datos

| Recurso | Fuente |
|---------|--------|
| Capas GeoJSON (territorios, calzadas, ciudades, fortificaciones) | [Repositorio "roman-empire"](https://github.com/siriusbontea/roman-empire) |
| Imágenes históricas | *National Geographic Historia* — atribución individual en cada capítulo |

---

## Licencia

El código base de Mapbox Storytelling está bajo licencia **BSD 3-Clause**. Ver archivo [`LICENSE.txt`](https://github.com/CarlosSanchezVicente/roman-empire-map/blob/main/LICENSE).

El contenido histórico (textos e imágenes) pertenece a sus respectivos autores y fuentes, citadas individualmente en cada capítulo.
