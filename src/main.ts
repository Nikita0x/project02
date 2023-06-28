const openMenu = document.querySelector('#open-menu') as HTMLButtonElement;
const closeMenu = document.querySelector('#close-menu') as HTMLButtonElement;
const mobileOverlay = document.querySelector('#mobile-overlay') as HTMLButtonElement;
const mobileMenu = document.querySelector('#mobile-menu') as HTMLButtonElement;


let mobileMenuOpen = false;

openMenu.addEventListener('click', () => {
    if(mobileMenuOpen === false) {
        mobileOverlay.classList.remove('-translate-x-full')
        mobileMenuOpen = true;
    }
    console.log('open menu')
})

closeMenu.addEventListener('click', () => {
    if(mobileMenuOpen === true) {
        mobileOverlay.classList.add('-translate-x-full')
        mobileMenuOpen = false;
    }
    console.log(mobileMenuOpen)
    console.log('close menu')
})

mobileOverlay.addEventListener('click', (e) => {
    e.stopPropagation();
    if(mobileMenuOpen === true) {
        mobileOverlay.classList.add('-translate-x-full')
        mobileMenuOpen = false;
        console.log(e.currentTarget)
    }
})

mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
})