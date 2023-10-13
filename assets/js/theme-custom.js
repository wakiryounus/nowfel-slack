; (function ($) {

	$(document).on('click', '.header-area .navbar-wrapper ul li', function () {
		$('.header-area .navbar-wrapper ul li').removeClass('active');
		$(this).toggleClass('active');
	})
	$(document).on('click', '.header-area .navbar-wrapper ul > li.active', function () {
		$(this).removeClass('active');
	})

	$(document).on('click', '.header-area .menu-bar', function () {
		$('.header-area .navbar-wrapper').addClass('active');
	})
	$(document).on('click', '.header-area .navbar-wrapper .close-menu-bar', function () {
		$('.header-area .navbar-wrapper').removeClass('active');
	})


	// Testimonial Slider
	if ($('.testimonial-slider').length) {
		const swiper = new Swiper('.testimonial-slider', {
			// Optional parameters
			loop: true,
			spaceBetween: 30,

			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		});
	}


	if ($('.project-slider').length) {
		const swiper2 = new Swiper(".project-slider", {
			spaceBetween: 24,
			centeredSlides: true,
			autoHeight: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			breakpoints: {
				485: {
					// slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				}
			}
		});
	}

	if ($('#budget-value').length) {
		const value = document.querySelector("#budget-value");
		const input = document.querySelector("#pi_input");
		value.textContent = input.value;
		input.addEventListener("input", (event) => {
			value.textContent = event.target.value;
		});
	}


	if ($('.header-2').length) {
		$(window).scroll(function () {
			if ($(window).scrollTop() > 50) {
				$('.header-2').addClass('is-fixed');
			} else {
				$('.header-2').removeClass('is-fixed');
			}
		});
	}

	


})(jQuery)