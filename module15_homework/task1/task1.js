let icon1 = document.querySelector('.icon1');
let icon2 = document.querySelector('.icon2');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
    icon1.classList.toggle('hidden');
    icon2.classList.toggle('hidden');
})