let buttonIcon = document.querySelector(".burger_menu");


buttonIcon.onclick = function(){
   document.querySelector(".menu__icon").classList.toggle("menu__icon__active");
   document.querySelector(".menu__mobile").classList.toggle("menu__mobile__active");
};
