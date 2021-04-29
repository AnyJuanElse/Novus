const arrowMenu = document.querySelector('.arrow_menu');
let menuOpen = false;
/*Menu desplegable*/
const menu_desplegable = document.querySelector('.menu_desplegable');

arrowMenu.addEventListener('click', () => {
    if(!menuOpen){
        arrowMenu.classList.add('open');
        menu_desplegable.classList.add('active');
        menuOpen = true;
    } else {
        arrowMenu.classList.remove('open');
        menu_desplegable.classList.remove('active');
        menuOpen = false;
    }
});

