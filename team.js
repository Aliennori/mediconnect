const hamburger= document.querySelector('.hamburger');
const sidenav= document.querySelector('.sidenav');
const close = document.querySelector('.close');
const navList= document.querySelector('header nav ul');
const mobile = document.querySelector('.mobile-flex');
const hero = document.querySelector('.hero');


hamburger.addEventListener('click', (e) => {
    sidenav.classList.toggle('active');
    navList.classList.toggle('active');
    mobile.classList.toggle('active');
    hero.classList.toggle('active');

});
close.addEventListener('click', (e) => {
    sidenav.classList.remove('active');
    navList.classList.remove('active');
    mobile.classList.remove('active');
    hero.classList.toggle('active');
});