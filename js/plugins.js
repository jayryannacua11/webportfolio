$(document).ready(function(){ 
   	$(".owl-carousel").owlCarousel({
		items: 3,
		nav: false,
		dots: true,
		loop: false,
		margin:10,
		responsive : {
		291 : {
			items:1
		},
		801 : {
			items:2
		},
		1025 : {
			items:4
		}
	}
	});
});