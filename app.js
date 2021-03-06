// CUSTOMIZED CURSOR
let cursor = document.querySelector('.myCursor')

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX  + 'px';
    cursor.style.top = e.clientY + 'px';
});