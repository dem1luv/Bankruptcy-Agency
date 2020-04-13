"use strict";

$(document).ready(function() {
	$('.proc__slider').owlCarousel({
		loop:true,
		nav:true,
		items: 1,
		dots: true,
		navText:false,
		autoHeight:true,
		dotsContainer: '.proc__dots',
		autoplay:true,
		autoplayTimeout:6000,
		autoplayHoverPause:true,
	})
	
	$('.proc__dot').click(function () {
		$(".proc__slider").trigger('to.owl.carousel', [$(this).index(), 300]);
	});
	
	$('.exp__slider').owlCarousel({
		loop:true,
		nav:true,
		dots: false,
		navText:false,
		autoHeight:true,
		autoplay:true,
		autoplayTimeout:1200,
		autoplayHoverPause:true,
		responsive : {
			0 : {
				items: 2,
			},
			480 : {
				items: 2,
			},
			768 : {
				items: 3,
			}
		},
	});
})

$('.homescreen__slider').owlCarousel({
    loop:true,
	nav:true,
	items: 1,
	dots: true,
	navText:false,
	autoHeight:true,
	startPosition:1,
	autoplay:true,
	autoplayTimeout:2500,
	autoplayHoverPause:true,
})

// ajax
$(document).ready(function () {
	$(".form,.popup__form").submit(function () {
		$.ajax({
			type: "POST",
			url: 'feedback.php',
			data: $(this).serialize(),
			success: function (data) {
				// when success
			},
			error: function (jqXHR, text, error) {
				// when error
			}
		});
	$.fancybox.close($("#popup-back-call"));
	return false;
	});
});

// inputmask
$(document).ready(function(){
	$(".input-tel").inputmask({"mask": "+7|8 (999) 999-99-99"})
});

// lazy load the yandex map
let easy_top = $(".easy").offset().top;
$(window).bind("scroll", function(){
	let window_top = $(this).scrollTop();
	if (window_top > easy_top) {
		$('.find__yandex-map').attr("src", "https://yandex.ru/map-widget/v1/?um=constructor%3Ae76448dc00502589a731d1b1acc6d3bfff486633a59454702d0dd739c487ace2&amp;source=constructor");
		$(window).unbind("scroll");
	}
});