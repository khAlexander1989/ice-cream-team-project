!function(){var e=document.querySelector(".img-slider"),i=document.querySelectorAll(".gallery-img"),t=document.querySelector(".img-slider-close-btn"),l=document.querySelector("body"),n=new Swiper(e,{navigation:{nextEl:".img-slider-btn-next",prevEl:".img-slider-btn-prev"},pagination:{el:".img-slider-pagination",clickable:!0,type:"bullets"},keyboard:{enable:!0,onlyInViewport:!0},mousewheel:{sensitivity:2,invert:!0},effect:"fade",grabCursor:!0});console.log(n.bulletClass),t.addEventListener("click",(function(i){e.classList.remove("is-open"),l.classList.remove("no-scroll")}));var o=!0,r=!1,s=void 0;try{for(var a,c=i[Symbol.iterator]();!(o=(a=c.next()).done);o=!0){a.value.addEventListener("click",(function(i){n.slideTo(+i.target.id,0),e.classList.add("is-open"),l.classList.add("no-scroll")}))}}catch(e){r=!0,s=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw s}}window.matchMedia("(min-width: 768px)").addEventListener("change",(function(i){i.matches||(l.classList.remove("no-scroll"),e.classList.remove("is-open"),n.slideTo(0,0))}))}();
//# sourceMappingURL=index.b8239e04.js.map
