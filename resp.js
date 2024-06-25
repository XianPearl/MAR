burger=document.querySelector('.burger')
navList=document.querySelector('.navList')
rightNav=document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class')
    navList.classList.toggle('v-class')
})