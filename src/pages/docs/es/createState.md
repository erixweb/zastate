---
title: "createState"
layout: "../../../Layouts/DocsLayout.astro"
---
# createState

## ¿Qué es createState?

`createState()` es la forma para crear estados en Zastate. En vez de usar `useEffect()`, createState ya tiene [su propia función](#listen).

```
const isLiked = createState(false)
``` 

:::caution
Zastand tiene un useEffect() pero no es recomendado. En cambio, se recomienda usar .listen()
:::?

## Propiedades

### value

Para retornar o cambiar el valor de un estado, usamos `.value`. Este, actua como una variable. Aquí tendrías un ejemplo. 

```
const isLiked = createState(true)

console.log(
    isLiked.value
) // retorna true

isLiked.value = false

console.log(
    isLiked.value
) // retorna false
```

### .listen()

Para escuchar cambios en un estado, usamos .listen(). También conocido como `useEffect` en otras librerías.

```
const isLiked = createState(true)

isLiked.listen(() => {
    console.log(
        "El valor de isLiked ha cambiado"
    )
})

isLiked.value = false
```

Si queremos usar el nuevo valor, podemos ponerle un parametro a la función.

```
const isLiked = createState(true)

isLiked.listen((val) => {
    console.log(
        `El valor de isLiked ha cambiado, ahora es: ${val}`
    )
})

isLiked.value = false
```