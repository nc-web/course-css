
const Button = document.getElementById('menu__cont-img')
const Menu = document.getElementById('menu__ul')

console.log(Bottom)
console.log(Menu)

Button.addEventListener("click", () => {
    Menu.classList.toggle('menu__ul--show')
})