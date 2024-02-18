var typed = new Typed('#element', {
    strings: ['Mobile App Developer', 
        '&amp; Flutter Developer'
    ],
    typeSpeed: 50,

    loop: true
});

let bar = document.getElementById('menu-bar')
let menu = document.querySelector('.nav-menu')
let ham = document.querySelector('.hamburger')

ham.onclick = () => {
    menu.style.display = "block"
}
bar.onclick = () => {
    menu.style.display = "none"
}