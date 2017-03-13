$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	if(scroll>=-1){
		$('.navbar-default').addClass('navbar-color');
		$('.navbar-brand').addClass('navbar-image');
		$('.nav-link').addClass('navbar-link-blue');
		$('.navbar').addClass('navbar-border');
	} else {
		$('.navbar-default').removeClass('navbar-color');
		$('.navbar-brand').removeClass('navbar-image');
		$('.nav-link').removeClass('navbar-link-blue');
		$('.navbar').removeClass('navbar-border');
	}
});
