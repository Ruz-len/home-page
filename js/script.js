document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});

document.querySelector('.menu__close').addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('active');
});