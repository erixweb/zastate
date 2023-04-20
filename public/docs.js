const aside = document.querySelector(".right-aside").querySelector(".links")

document.querySelectorAll("h1").forEach(item => {
    let h1 = item

    aside.innerHTML = aside.innerHTML + `<a href="#${h1.innerHTML}">${h1.innerHTML}</a>`
})