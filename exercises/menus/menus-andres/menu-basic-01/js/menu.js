
const Bottom = document.getElementById('menu__cont-img')
const Menu = document.getElementById('menu__ul')

Bottom.addEventListener("click", () => {
    Menu.classList.toggle('menu__ul--show')
})