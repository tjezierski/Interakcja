$(document).ready(function(){
	$('.hamb__icon').on('click', function(){
		$(this).toggleClass('clicked');
	  $('.hamb__menu--overlay').toggleClass('on');
		$('.hamb__menu--underlay').toggleClass('underlay');
	});
	$('.hamb__menu--underlay').on('click', function(e) {
		if (this == event.target) {
			hideOverlay();
		}
	});
});


function hideOverlay() {
	$('.hamb__menu--overlay').removeClass('on');
	$('.hamb__menu--underlay').removeClass('underlay');
	$('.hamb__icon').removeClass('clicked');
}
