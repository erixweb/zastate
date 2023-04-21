---
title: "useEffect"
layout: "../../../Layouts/DocsLayout.astro"
---
# useEffect

:::caution
useEffect no es recomendable ya que createState ya posee una función propia llamada [.listen()](/docs/es/createState#listen)
:::?

## ¿Qué es useEffect?

useEffect es la manera de escuchar a cambios en un estado. Este ya existe en muchas otras librerías como `React`.

La diferencia, es que este useEffect pesa muchísimo menos que ne otras librerías. Este pesa menos de `1kB`

## ¿Cómo podemos aplicarlo?

Para utilizar useEffect es necesario pasarle dos argumentos:

### Función

Necesitarás la función que se tiene que ejecutar cuando hay un cambio en un estado.

### El estado sujeto

Necesitarás indicar el estado al que se tiene que escuchar.

### API

```
useEffect(fn, state)
```

## Empezar a aplicarlo

Ahora que sabes como se puede aplicar, empezemos a aplicarlo.

```
const profile = createState({
    name: "Erik",
    mail: "erik@gmail.com",
    followers: 18,
})
console.log(profile.value)

useEffect(d => {
    console.log(`Profile updated, new data:`)
    console.log(d)
}, profile)

profile.value = {
    name: "Erik",
    mail: "erik@gmail.com",
    followers: 24,
}
```

:::tip
En este ejemplo hemos usado un parametro en la función del useEffect. Este parametro indica el nuevo valor del estado.
:::?