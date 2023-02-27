
 const bottom = document.getElementById('menu__container-img')

 const menu = document.getElementById('menu__ul')

 bottom.addEventListener("click", () => {
    menu.classList.toggle('menu__ul--show')
 })