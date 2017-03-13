$.noConflict();

// if the image in the window of browser when the page is loaded, show that image
jQuery(document).ready(function(){
    slideRight('.slide-right');
    slideLeft('.slide-left');
    slideLeftBig('.slide-left-big');
    slideLeftSubtle('.slide-left-subtle');
    slideRightBig('.slide-right-big');
    slidePriceRight('.slide-price-right');
    slidePriceLeft('.slide-price-left');
});

// if the image in the window of browser when scrolling the page, show that image
jQuery(window).scroll(function() {
    slideRight('.slide-right');
    slideLeft('.slide-left');
    slideLeftBig('.slide-left-big');
    slideLeftSubtle('.slide-left-subtle');
    slideRightBig('.slide-right-big');
    slidePriceRight('.slide-price-right');
    slidePriceLeft('.slide-price-left');
});



/* Mobile Menu
// –––––––––––––––––––––––––––––––––––––––––––––––––– */

function dropDown1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

function dropDown2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#menu-button1')) {
    // alert("hi");
    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('#menu-button2')) {
    // alert("hi");
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


/* Fade in
// –––––––––––––––––––––––––––––––––––––––––––––––––– */
function showImages(el) {
    var windowHeight = jQuery( window ).height();
    jQuery(el).each(function(){
        var thisPos = jQuery(this).offset().top;
        var topOfWindow = jQuery(window).scrollTop();
        var delay = 120;
        if (jQuery(this).hasClass("first")){
            delay += 0;
        }
        else if (jQuery(this).hasClass("second")){
            delay += 120;
        }
        else if (jQuery(this).hasClass("third")){
            delay += 240;
        }
        if (topOfWindow + windowHeight - delay > thisPos ) {
            jQuery(this).addClass("fade-subtle-action");
        }
    });
}

function showList(el) {
    var windowHeight = jQuery( window ).height();
    jQuery(el).each(function(){
        var thisPos = jQuery(this).offset().top;
        var topOfWindow = jQuery(window).scrollTop();
        var delay = 30;
        if (jQuery(this).hasClass("first")){
            delay += 0;
        }
        else if (jQuery(this).hasClass("second")){
            delay += 24;
        }
        else if (jQuery(this).hasClass("third")){
            delay += 48;
        }
        else if (jQuery(this).hasClass("third")){
            delay += 72;
        }
        else if (jQuery(this).hasClass("forth")){
            delay += 96;
        }
        else if (jQuery(this).hasClass("fifth")){
            delay += 120;
        }
        if (topOfWindow + windowHeight - delay > thisPos ) {
            jQuery(this).addClass("fade-list-action");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
jQuery(document).ready(function(){
    showImages('.fade-subtle');
    showList('.fade-list');
});

// if the image in the window of browser when scrolling the page, show that image
jQuery(window).scroll(function() {
    showImages('.fade-subtle');
    showList('.fade-list');
});


/* Slide in
// –––––––––––––––––––––––––––––––––––––––––––––––––– */
function slideRight(el) {
    var windowHeight = jQuery( window ).height();
    jQuery(el).each(function(){
        var thisPos = jQuery(this).offset().top;
        var topOfWindow = jQuery(window).scrollTop();
        var delay = 100;
        if (jQuery(this).hasClass("first")){
            delay += 0;
        }
        else if (jQuery(this).hasClass("second")){
            delay += 120;
        }
        else if (jQuery(this).hasClass("third")){
            delay += 240;
        }
        if (topOfWindow + windowHeight - delay > thisPos && !jQuery(this).is("slide-right-action") ) {
            jQuery(this).addClass("slide-right-action");
        }
    });
}

function slideRightBig(el) {
    var windowHeight = jQuery( window ).height();
    jQuery(el).each(function(){
        var thisPos = jQuery(this).offset().top;
        var topOfWindow = jQuery(window).scrollTop();
        var delay = 100;
        if (jQuery(this).hasClass("first")){
            delay += 0;
        }
        else if (jQuery(this).hasClass("second")){
            delay += 120;
        }
        else if (jQuery(this).hasClass("third")){
            delay += 240;
        }
        if (topOfWindow + windowHeight - delay > thisPos && !jQuery(this).is("slide-right-big-action")) {
            jQuery(this).addClass("slide-right-big-action");
        }
    });
}

function slideLeft(el) {
    var windowHeight = jQuery( window ).height();
    jQuery(el).each(function(){
        var thisPos = jQuery(this).offset().top;
        var topOfWindow = jQuery(window).scrollTop();
        var delay = 100;
        if (jQuery(this).hasClass("first")){
            delay += 0;
        }
        else if (jQuery(this).hasClass("second")){
            delay += 120;
        }
        else if (jQuery(this).hasClass("third")){
            delay += 240;
        }
        if (topOfWindow + windowHeight - delay > thisPos && !jQuery(this).is("slide-left-action")) {
            jQuery(this).addClass("slide-left-action");
        }
    });
}

function slideLeftBig(el) {
    var windowHeight = jQuery( window ).height();
    jQuery(el).each(function(){
        var thisPos = jQuery(this).offset().top;
        var topOfWindow = jQuery(window).scrollTop();
        var delay = 100;
        if (jQuery(this).hasClass("first")){
            delay += 0;
        }
        else if (jQuery(this).hasClass("second")){
            delay += 120;
        }
        else if (jQuery(this).hasClass("third")){
            delay += 240;
        }
        if (topOfWindow + windowHeight - delay > thisPos && !jQuery(this).is("slide-left-big-action")) {
            jQuery(this).addClass("slide-left-big-action");
        }
    });
}

function slideLeftSubtle(el) {
    var windowHeight = jQuery( window ).height();
    jQuery(el).each(function(){
        var thisPos = jQuery(this).offset().top;
        var topOfWindow = jQuery(window).scrollTop();
        var delay = 100;
        if (jQuery(this).hasClass("first")){
            delay += 0;
        }
        else if (jQuery(this).hasClass("second")){
            delay += 120;
        }
        else if (jQuery(this).hasClass("third")){
            delay += 240;
        }
        if (topOfWindow + windowHeight - delay > thisPos && !jQuery(this).is("slide-left-subtle-action")) {
            jQuery(this).addClass("slide-left-subtle-action");
        }
    });
}

function slidePriceRight(el) {
    var windowHeight = jQuery( window ).height();
    jQuery(el).each(function(){
        var thisPos = jQuery(this).offset().top;
        var topOfWindow = jQuery(window).scrollTop();
        var delay = 30;
        if (jQuery(this).hasClass("first")){
            delay += 0;
        }
        else if (jQuery(this).hasClass("second")){
            delay += 24;
        }
        else if (jQuery(this).hasClass("third")){
            delay += 48;
        }
        else if (jQuery(this).hasClass("third")){
            delay += 72;
        }
        else if (jQuery(this).hasClass("forth")){
            delay += 96;
        }
        else if (jQuery(this).hasClass("fifth")){
            delay += 120;
        }
        if (topOfWindow + windowHeight - delay > thisPos ) {
            jQuery(this).addClass("slide-price-right-action");
        }
    });
}

function slidePriceLeft(el) {
    var windowHeight = jQuery( window ).height();
    jQuery(el).each(function(){
        var thisPos = jQuery(this).offset().top;
        var topOfWindow = jQuery(window).scrollTop();
        var delay = 30;
        if (jQuery(this).hasClass("first")){
            delay += 0;
        }
        else if (jQuery(this).hasClass("second")){
            delay += 24;
        }
        else if (jQuery(this).hasClass("third")){
            delay += 48;
        }
        else if (jQuery(this).hasClass("third")){
            delay += 72;
        }
        else if (jQuery(this).hasClass("forth")){
            delay += 96;
        }
        else if (jQuery(this).hasClass("fifth")){
            delay += 120;
        }
        else if (jQuery(this).hasClass("halfsec")){
            delay += 500;
        }
        else if (jQuery(this).hasClass("sec")){
            delay += 1000;
        }
        if (topOfWindow + windowHeight - delay > thisPos ) {
            jQuery(this).addClass("slide-price-left-action");
        }
    });
}


// Backk to top button
jQuery(document).ready(function() {
    var offset = 250;
    var duration = 300;

    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".back-to-top").fadeIn(duration);
            jQuery("#a").fadeIn(duration);
        } else {
            jQuery(".back-to-top").fadeOut(duration);
            jQuery("#a").fadeOut(duration);
        }
    });

    jQuery(".back-to-top").click(function(event) {
        event.preventDefault();
        jQuery("html, body").animate({scrollTop: 0}, duration);
        return false;
    });
});

/* Grow
// –––––––––––––––––––––––––––––––––––––––––––––––––– */
function grow(el) {
    var windowHeight = jQuery( window ).height();
    jQuery(el).each(function(){
        var thisPos = jQuery(this).offset().top;
        var topOfWindow = jQuery(window).scrollTop();
        var delay = 130;
        if (jQuery(this).hasClass("first")){
            delay += 0;
        }
        else if (jQuery(this).hasClass("second")){
            delay += 120;
        }
        else if (jQuery(this).hasClass("third")){
            delay += 240;
        }
        if (topOfWindow + windowHeight - delay > thisPos && !jQuery(this).is("grow-action")) {
            jQuery(this).addClass("grow-action");
        }
    });
}

function growBig(el) {
    var windowHeight = jQuery( window ).height();
    jQuery(el).each(function(){
        var thisPos = jQuery(this).offset().top;
        var topOfWindow = jQuery(window).scrollTop();
        var delay = 240;
        if (jQuery(this).hasClass("first")){
            delay += 0;
        }
        else if (jQuery(this).hasClass("second")){
            delay += 120;
        }
        else if (jQuery(this).hasClass("third")){
            delay += 240;
        }
        if (topOfWindow + windowHeight - delay > thisPos && !jQuery(this).is("grow-big-action")) {
            jQuery(this).addClass("grow-big-action");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
jQuery(document).ready(function(){
    grow('.grow');
    growBig('.grow-big');
});

// if the image in the window of browser when the page is loaded, show that image
jQuery(document).scroll(function(){
    grow('.grow');
    growBig('.grow-big');
});
