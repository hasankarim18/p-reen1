$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
	autoplay:true,
	autoplayTimeout:4000,
	
    responsiveClass:true,
	
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
	
})


$(document).ready(function(){
  $("#sreach_icon").click(function(){
    $(this).hide();
	 $("#search_box").show();
  });
  
});









//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



/**navber sticky js code goes down here */

  //initiating jQuery
              jQuery(function($) {
    $(document).ready(function () {
      //enabling stickUp on the '.navbar-wrapper' class
      $('.navbar-wrapper').stickUp();
    });
              });

/**navber sticky js code goes up here */




$('.c1').animationCounter({
  
  start: 0,

  end: 1100,

  step: 1,
  
  delay:0.1

  


});

$('.c2').animationCounter({

  start: 0,

  end: 2000,

  step: 2,

  delay: 0.1




});
$('.c3').animationCounter({

  start: 0,

  end: 3000,

  step: 3,

  delay: 1



});



/**mix it up code goes here */

var mixer = mixitup('.portfolio');
$(function () {
  $('.Container').mixItUp();
});



/**********
 * aos
 * 
 * ****** */

AOS.init();


/***************
 * 
 * progress scroll bar
 */

// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



// particle .js conde goes here

/*

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);


*/

/*******************************
 * swiper slide init code goes here
 * 
 * 
 */

var swiper = new Swiper('.swiper-container', {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});