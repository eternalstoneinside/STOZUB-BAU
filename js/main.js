let header = document.getElementById('header')
let headerH = document.getElementById('header').clientHeight

document.onscroll = function () {
   let scroll = window.scrollY;

   if (scroll > headerH + 560) {
      header.classList.add('fixed');
      document.body.style.paddingTop = headerH + 'px'

   } else {
      header.classList.remove('fixed');
      document.body.removeAttribute('style');
   }
}




const menuLinks = document.querySelectorAll('.menu__link[data-goto]')

if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;

      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}