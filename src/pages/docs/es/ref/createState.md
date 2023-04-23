---
title: "createState"
layout: "../../../../Layouts/DocsLayout.astro"
---

# createState

createState es el hook que te permite crear estados en Zastate.

```
const myState = createState(initialValue)
```

## Devuelve

Si creas un estado y haces un `console.log`, te devolverá los componentes que forman este estado, no el valor.

Para devolver el valor de un estado debemos usar `.value` de la siguiente forma:

```
console.log(myState.value)
``` 

## get & set value

### get

Para ver el valor de un estado simplmente tienes que usar `myState.value`

#### API

```
get value () {
    return this.aInternal
}
```

### set

Para poner el valor simplemente tienes que usar `myState.value = newValue`.

#### API

```
set value (val) {
    this.aInternal = val
    this.aListener(val)
},
``` 

## .listen()

Listen es usado para escuchar cambios en el valor de un estado.

[También, useEffect](/docs/es/useEffect)

#### API

```
listen: function(listener) {
    this.aListener = listener
},
```