const aside = document.querySelector(".right-aside").querySelector(".links")

document.querySelectorAll("h2").forEach(item => {
    let h1 = item


    let toURL = h1.innerHTML.toString()
        .normalize("NFD")
        .replaceAll(/[\u0300-\u036f]/g, "")
        .replaceAll("&amp;", "y")
        .replaceAll("?", "")
        .replaceAll("¿", "")
        .replaceAll(" ", "-")
        .toLowerCase()

    console.log(toURL)
    h1.id = toURL

    aside.innerHTML = aside.innerHTML + `<a href="#${toURL}">${h1.innerHTML}</a>`

})  

document.body.innerHTML = document.body.innerHTML.replaceAll(":::caution", "<section class='caution'>")
document.body.innerHTML = document.body.innerHTML.replaceAll(":::tip", "<section class='tip'>")

document.body.innerHTML = document.body.innerHTML.replaceAll(":::?", "</section>")
