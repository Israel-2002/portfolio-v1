let toggle = document.querySelector(`.nav__toggle`);
let navBar = document.querySelector(`.nav`)
let navLinks = document.querySelector(`.links`);

toggle.addEventListener(`click`, function () {
    navBar.classList.toggle(`show__nav-items`)
})

navLinks.addEventListener(`click`, function () {
    navBar.classList.remove(`show__nav-items`)
})


window.addEventListener(`scroll`, function () {
    let scrollHeight = window.pageYOffset
})