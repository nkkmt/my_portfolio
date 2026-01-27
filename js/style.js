'use strict';

$(function() {
	const pageTopBtn = $('.page-top');

	pageTopBtn.hide();
	$(window).scroll(function (){
		if ($(this).scrollTop() > 100) {
			pageTopBtn.fadeIn();
		} else {
			pageTopBtn.fadeOut();
		}
	});

	pageTopBtn.click(function(e) {
		e.prevenrDefault();

		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
});