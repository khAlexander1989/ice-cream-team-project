!function(){var e=document.querySelector(".header-burger"),t=document.querySelector(".header-menu"),o=document.querySelector(".header-menu-btn-close"),n=document.querySelector("body");e.addEventListener("click",(function(o){e.classList.toggle("active"),t.classList.toggle("active"),n.classList.toggle("lock")})),o.addEventListener("click",(function(){console.log("close menu"),t.classList.toggle("active"),n.classList.toggle("lock")})),window.matchMedia("(min-width: 1200px)").addEventListener("change",(function(e){e.matches&&n.classList.remove("lock")}))}();var pageHeader=document.querySelector("header");document.addEventListener("DOMContentLoaded",(function(e){window.scrollY<1&&(pageHeader.style.backgroundColor="transparent")})),window.addEventListener("scroll",(function(e){window.scrollY>0?pageHeader.style.backgroundColor="#ffb8ca":pageHeader.style.backgroundColor="transparent"}));
//# sourceMappingURL=index.df32b7f7.js.map