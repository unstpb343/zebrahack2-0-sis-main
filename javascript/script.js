const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

// Toggle menu on burger click
burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');

});