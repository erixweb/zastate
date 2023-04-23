import { useEffect, createState } from "./lib/zastate.min.js";

const myState = createState(false)

useEffect(value => {
    console.log(value)
}, myState)

myState.value = 242