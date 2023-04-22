const aside = document.querySelector(".right-aside").querySelector(".links")
const leftAside = document.querySelector(".left-aside").querySelector(".links")
const navLinks = document.querySelector(".floating-menu").querySelector("div")

const documentationList = [
    '<a href="/docs/es/getting-started">Empezando</a>',
    '<a href="/docs/es/install">Instalación</a>',
    '<a href="/docs/es/createState">createState</a>',
    '<a href="/docs/es/useEffect">useEffect</a>',
    '<h2>API Ref</h2>'
]

documentationList.forEach(item => {
    leftAside.innerHTML = leftAside.innerHTML + item
    navLinks.innerHTML = navLinks.innerHTML + item
})

document.querySelector("main").querySelectorAll("h2, h3").forEach(item => {
    let fontSize, marginLeft,toURL

    toURL = item.innerHTML.toString()
        .normalize("NFD")
        .replaceAll(/[\u0300-\u036f]/g, "")
        .replaceAll("&amp;", "y")
        .replaceAll("?", "")
        .replaceAll("¿", "")
        .replaceAll(".", "")
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll(" ", "-")
        .toLowerCase()

    item.id = toURL

    item.nodeName == "H2" ? 
        fontSize = 18 :
    fontSize = 14


    console.log(marginLeft)

    aside.innerHTML = aside.innerHTML + `<a href="#${toURL}" style='font-size: ${fontSize}px; margin-left: ${marginLeft}px'>${item.innerHTML}</a>`

})  

document.body.innerHTML = document.body.innerHTML.replaceAll(":::caution", "<section class='caution'><p>")
document.body.innerHTML = document.body.innerHTML.replaceAll(":::tip", "<section class='tip'><p>")

document.body.innerHTML = document.body.innerHTML.replaceAll(":::?", "</p></section>")

const copyButtonLabel = `<svg xmlns="http://www.w3.org/2000/svg" fill="#25252d" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
</svg>
`;

let blocks = document.querySelectorAll("pre");

blocks.forEach(block => {
  if (navigator.clipboard) {
    let button = document.createElement("button")

    button.innerHTML = copyButtonLabel
    block.appendChild(button)

    button.addEventListener("click", async () => {
        await navigator.clipboard.writeText(block.innerText)
      
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
        </svg>
        `
        setTimeout(() => {
            button.innerHTML = copyButtonLabel
        }, 1200);
    })
  }
});

document.addEventListener("keydown", e => {
    e.stopPropagation()

    if (e.ctrlKey && e.key === "k") {
        const Menu = document.querySelector(".floating-menu")   
        e.preventDefault()

        return Menu.style["display"] == "none" ?
            Menu.style["display"] = "flex"
            :
            Menu.style["display"] = "none"
    }
})
document.querySelector(".floating-menu").addEventListener("click", e => {
    const Menu = document.querySelector(".floating-menu")   

    return e.target != document.querySelector(".menu-content") ? (
        document.querySelector(".floating-menu").style["display"] == "flex" ? Menu.style["display"] = "none" : null
    ) : null
})