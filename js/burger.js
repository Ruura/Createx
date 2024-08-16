const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', (e) => {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('nav--sctive');
    overlay.classList.toggle('overlay--active');
    document.body.classList.toggle("scroll-off"); /*При клике по burger body добавится класс .scroll-off (в нем страница не будет пролистываться), а если этот класс уже у него есть,то он удалится*/
});