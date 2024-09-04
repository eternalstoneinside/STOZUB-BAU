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


let options = {
   root: null,
   rootMargin: '5px',
   threshold: 0.5
}

let callback = function (entries, observer) {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         console.log('find', entry);
         entry.target.classList.add('active')
         observer.unobserve(entry.target)
      }
   })
}

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.anim')
targets.forEach(target => {
   observer.observe(target);
})




window.addEventListener('load', () => {
   const preloader = document.querySelector('.preloader')
   if (preloader) {
      preloader.classList.add('done')
      setTimeout(() => preloader.parentElement.removeChild(preloader), 1000)

   }
})