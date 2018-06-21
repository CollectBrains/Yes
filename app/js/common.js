$(function() {

	var swiper = new Swiper('.swiper-container', {

		slidesPerView: 1,
		spaceBetween: 30,
		mousewheel: true,
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
		},
	});

	svg4everybody();

});
