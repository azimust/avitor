

let burger = document.getElementsByClassName('burger')[0];
let show = document.getElementsByClassName('navbar__group')[0];


burger.addEventListener('click', () =>{
  burger.classList.toggle('show-menu')
  show.classList.toggle('show')
  
});



document.addEventListener("DOMContentLoaded", function () {
  let scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal"]').addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click', function () {
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
  });
});
