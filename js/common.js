$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

//MOBILE MNU
jQuery(document).ready(function($) {
	$(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                              
            });
	$(".u-vmenu").vmenuModule({
		Speed: 200,
		autostart: false,
		autohide: true
	});


	$('.button-close').click(function () {
		$.sidr('close', 'sidr');
	});

	$('#menu-button').sidr('toogle', 'sidr');

	$(".sect-with-header .sect-header").animated("fadeIn");
});