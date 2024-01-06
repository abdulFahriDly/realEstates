const ul = document.querySelector('header nav ul'),
    log = document.querySelector('header nav #log'),
    menu = document.querySelector('header nav #menu');

menu.addEventListener('click', ()=>{
    ul.classList.toggle("list");
    ul.classList.toggle("ul");
    ul.style.transition = 'transform .5s ease-in-out';
    log.classList.toggle('log');
    log.classList.toggle('logn');
    log.style.transition = 'transform .5s ease-in-out';
})