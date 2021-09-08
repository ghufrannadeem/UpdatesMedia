$(function(){


$('.workSlider').slick({
	centerMode:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	centerPadding: '20%',
	// variableWidth: true,
	dots: false,
	arrows: false,
	autoplay: false,
	autoplaySpeed: 2000,
});


$('.updateSlider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	prevArrow:"<svg class='slick-prev' viewBox='0 0 65 22' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g id='Main' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'><g id='Updates-Media-Home' transform='translate(-1012.000000, -5446.000000)' stroke='#000000'><g id='Social-Media-update' transform='translate(292.264296, 4544.000000)'><g id='Group-12' transform='translate(627.735704, 903.000000)'><g id='V-arrow-right' transform='translate(92.500000, 0.000000)'><line x1='62' y1='10' x2='-1.27342581e-13' y2='10' id='Path'></line><polyline id='Path' points='54 0 64 10 54 20'></polyline></g></g></g></g></g></svg>",
	nextArrow:"<svg class='slick-next' viewBox='0 0 65 22' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g id='Main' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'><g id='Updates-Media-Home' transform='translate(-1012.000000, -5446.000000)' stroke='#000000'><g id='Social-Media-update' transform='translate(292.264296, 4544.000000)'><g id='Group-12' transform='translate(627.735704, 903.000000)'><g id='V-arrow-right' transform='translate(92.500000, 0.000000)'><line x1='62' y1='10' x2='-1.27342581e-13' y2='10' id='Path'></line><polyline id='Path' points='54 0 64 10 54 20'></polyline></g></g></g></g></g></svg>",
});




$('.homeBlogSlider').slick({
	centerMode:true,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerPadding: '200px',
	prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-left' aria-hidden='true'></i></button>"
});



}); //--- Main Function Close