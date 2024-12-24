const form=document.querySelectorAll('form')
let progressBar=document.querySelector('.progressBar')
const nextToform2=(()=>{
    form[0].style.left='-100%'
    form[1].style.left='-0'
    progressBar.style.width='66%'

})
const prevToform1=(()=>{
    form[0].style.left='0'
    form[1].style.left='100%'
    progressBar.style.width='33%'

})
const nextToform3=(()=>{
     form[2].style.left='0'
    form[1].style.left='-100%'
    progressBar.style.width='100%'

})
const prevToform2=(()=>{
    form[2].style.left='100%'
    form[1].style.left='0'
    progressBar.style.width='66%'

})
