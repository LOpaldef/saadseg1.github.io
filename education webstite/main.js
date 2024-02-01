window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>0)
})

// show les boxes 

const faqs= document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')


        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus'
        } else {
            icon.className= "uil uil-plus";
        }
    })
})
//
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-nav_menu");
const closeBtn = document.querySelector("#close");


menuBtn.addEventListener('click',()=>{
    menu.style.display="flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

