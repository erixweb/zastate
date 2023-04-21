import createState from "/lib/createState.js"
import useEffect from "/lib/useEffect.js"


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
