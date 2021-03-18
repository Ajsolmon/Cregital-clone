// CUSTOMIZED CURSOR
let cursor = document.querySelector('.myCursor')
let cregitalLogoWrap = document.querySelector('.cregitalLogoWrap')
let menuItems = document.querySelector('.menuItems')
let openForm = document.querySelector('.openForm')
let learnMore = document.querySelector('.learnMore')
let dropALine = document.querySelector('.dropALine')
let picLinks = document.querySelectorAll('.picLinks')
let mainLinks = document.querySelectorAll('.mainLinks')



// CONTWOL THE CWOUD...CURSOR
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
//used the forEach method for the first time to loop through classes
    const cursorContent = document.createElement('P')
    const coursorContentText = document.createTextNode('VIEW')

    picLinks.forEach( picLink => {
        picLink.addEventListener('mouseenter', (e) =>{
    
            cursor.classList.add('pictureHover')
            cursor.appendChild(coursorContentText)
            cursor.style.transition = 'transform 0.1s'
        })
    
        picLink.addEventListener('mouseleave', (e) =>{
            cursor.classList.remove('pictureHover')
            cursor.removeChild(coursorContentText)
    
            setTimeout(() => {
                cursor.style.transition = ' 0.000001s'
            }, 110);
        })
    })


//five
    mainLinks.forEach(mainLink => {
        mainLink.addEventListener('mouseover', (e) =>{
            cursor.classList.add('hover')
            cursor.style.transition = '0.1s'
        })
        mainLink.addEventListener('mouseleave', (e) =>{
            cursor.classList.remove('hover')
            setTimeout(() => {
                cursor.style.transition = ' 0.000001s'
            }, 110);
        })
    })



//HIDING THE HIDEABLES
menuItems.addEventListener('click', () =>{
    if(learnMore.style.display === 'none'){
        learnMore.style.display = 'grid'
    
        setTimeout(() => {
            document.querySelector('.learnMore>h1').classList.add('moveUp')
        }, 1);
    }else{
        learnMore.style.display = 'none'
    
        document.querySelector('.learnMore>h1').classList.remove('moveUp')
    }
})

openForm.addEventListener('click', ()=>{
    if(dropALine.style.display === 'none'){
        dropALine.style.display = 'flex'
    
        setTimeout(() => {
            document.querySelector('.dropALine>h1').classList.add('moves')
            document.querySelector('.dropALine>p').classList.add('moves')
            document.querySelector('.sendMessageWrap').classList.add('moves')
        }, 1);
    }else{
        dropALine.style.display = 'none'
        
        document.querySelector('.dropALine>h1').classList.remove('moves')
        document.querySelector('.dropALine>p').classList.remove('moves')
        document.querySelector('.sendMessageWrap').classList.remove('moves')
    }
})