/*==================== MENU SHOW Y HIDDEN ====================*/


/*===== MENU SHOW =====*/
const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav_toggle','nav_menu');

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        };
    });
}
window.addEventListener('scroll',scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 200)header.classList.add('scroll-Header'); 
    else header.classList.remove('scroll-Header');
}
window.addEventListener('scroll',scrollHeader)


/*==================== SHOW SCROLL TOP ====================*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560)scrollTop.classList.add('show-scroll'); 
    else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollTop)

/*==================== MIXITUP FILTER PORTIFOLIO ====================*/
const mixer = mixitup('.portifolio_container', {
    selectors: {
        target: '.portfolio_content'
    },
    animation: {
        duration:400
    }
});
/* Link active portfolio */
const linkPortfolio = document.querySelectorAll('.portfolio_items');

function activePortfolio(){
   if(linkPortfolio){  
       linkPortfolio.forEach(l => l.classList.remove('active-portfolio'));
       this.classList.add('active-portfolio');
   }
}
linkPortfolio.forEach(l => l.addEventListener('click',activePortfolio));

/*==================== SWIPER CAROUSEL ====================*/
const swiper = new Swiper('.testimonial_container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
});
/*==================== GSAAP ANIMATION ====================*/

gsap.from('.home_img', {opacity :0, duration: 2, delay:.5, x: 60})
gsap.from('.home_data', {opacity :0, duration: 2, delay:.8, y: 25})
gsap.from('.home_greeting, .home_name, .home_profession, .home_buttom',
{opacity :0, duration: 2, delay:1, y: 25, ease:'expo.out', stagger: .2})

gsap.from('.nav_logo, .nav_toggle',{opacity :0, duration: 2, delay:1.5, y: 25, ease:'expo.out', stagger: .2})
gsap.from('.nav_items',{opacity :0, duration: 2, delay:1.8, y: 25, ease:'expo.out', stagger: .2})

gsap.from('.home_social-icons',{opacity :0, duration: 2, delay:2.3, y: 25, ease:'expo.out', stagger: .2})
/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
 
/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 