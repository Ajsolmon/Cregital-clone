// CUSTOMIZED CURSOR
let cursor = document.querySelector('.myCursor')
let cregitalLogoWrap = document.querySelector('.cregitalLogoWrap')
let menuItems = document.querySelector('.menuItems')
let openForm = document.querySelector('.openForm')
let picLinks = document.querySelector('.picLinks')

// CONTWOL THE KOSUR
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX  + 'px';
    cursor.style.top = e.clientY + 'px';

});

// MAKE THE CURSOR DISAPPEAR AFTER LEAVING THE VIEWPORT
document.body.addEventListener('mouseenter', (e) =>{
    cursor.style.display = 'grid'
})
document.body.addEventListener('mouseleave', (e) =>{
    cursor.style.display = 'none'
})


//HOVER INTERACTIONS WITH THE CURSOR
//one
cregitalLogoWrap.addEventListener('mouseover', (e) =>{
    cursor.classList.add('hover')
})
cregitalLogoWrap.addEventListener('mouseleave', (e) =>{
    cursor.classList.remove('hover')
})

//two
menuItems.addEventListener('mouseover', (e) =>{
    cursor.classList.add('hover')
})
menuItems.addEventListener('mouseleave', (e) =>{
    cursor.classList.remove('hover')
})

//three
openForm.addEventListener('mouseover', (e) =>{
    cursor.classList.add('hover')
})
openForm.addEventListener('mouseleave', (e) =>{
    cursor.classList.remove('hover')
})

//four
picLinks.addEventListener('mouseenter', (e) =>{
    cursor.classList.add('hover')
})
picLinks.addEventListener('mouseleave', (e) =>{
    cursor.classList.remove('hover')
})

