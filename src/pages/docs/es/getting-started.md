---
title: "Empezando"
layout: "../../../Layouts/DocsLayout.astro"
---
# Empezando

## ¿Qué es Zastate?

Zastate es una librería para manejar estados con JavaScript. En esta, puedes [pasar estados](#usar-esm) (con sus valores) usando EcmaScript Modules.

---

## Empieza con poco JS

📲 Para crear un estado en puedes empezar por menos de 1kB de JavaScript.

📲 Tres modos: `desarollo`, `separado + minificado`, `junto + minificado`.

---

## Modo desarollo & Producción

### Desarollo 

El primer modo que deberías instalar es el modo `desarollo`, en este podrás cambiar el código de la librería si surge algún problema.

:::caution
Este modo solo trairá problemas en producción.
:::?

### Separado & Minificado (Óptimo)

El modo óptimo para producción es el `separado + minificado`, en este, a la hora de pasar el proyecto de modo desarollo a producción, solo tendrás que instalar la version minificada.

Además, el JavaScript estará separado y se compilará en pequeñas partes.

:::caution
Este modo utilizará más recursos del servidor a la hora de procesar las peticiones.
:::?

### Junto & Minificado

Si quieres que tu JavaScript en producción este en un solo archivo para ahorrarte recursos del servidor, aunque no sea lo más óptimo a niveles de performance.

A la hora de cambiar de `desarollo` a `producción`, tendrás que cambiar el destino de tus imports.

Cuando se dice de que no es lo más óptimo para el performance:

🐢 El JavaScript es ejecutado cuando se compila todo, puede hacer que no se renderizén algunas secciones que usan estados.

🐢 Cambios de desarollo a producción

:::tip
Este modo es el más óptimo para servidores con recursos limitados. Solo tendrá que procesar una petición en vez de al menos 3, en el caso de los otros.
:::?