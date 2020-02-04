$(document).ready(function () {

	/*
	// GNB
	var ctrlObj = $('#gnb ul');
	var acMenu = $('#gnb>li.on');

	$('#gnb>li').on('focusin mouseenter', function() {
		$(this).addClass('on').siblings('li').removeClass();
	});
	$('#gnb').mouseleave(function() {
		$('#gnb>li').removeClass();
		$(acMenu).addClass('on');
	});
	$('#gnb>li>a').focus(function() {
		$(this).parent('li').addClass('on').siblings('li').removeClass('on');
	});
	*/
	
/*
	$('#gnb>li>a').click(function() {
		$('#header').animate({'top':'0'}, 'fast');
	});
*/
	$('#logo a').click(function(e) {
		e.preventDefault();
		$('body, html').animate({scrollTop: 0}, 300);
		return false;
	});

	// alert($('#container').children('div[id]').size());
	
});

// $(window).on('scroll', function () {
// 	// var wsT = $(this).scrollTop();
// 	console.log ($(this).scrollTop());
// 	if ($(this).scrollTop() < 500) {
// 		$('#header').fadeOut('fast');
// 	} else {
// 		$('#header').fadeIn('fast');
// 	}
// });