(function($) {
	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});



		// Menu.
			$('#tmenu')
				.append('<a href="#tmenu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

	});

})(jQuery);

$("#accordion > li > div").click(function(){
	if(false == $(this).next().is(':visible')) {
		$('#accordion ul').slideUp(300);
	}
	$(this).next().slideToggle(300);
});
 
$('#accordion ul:eq(0)').hide();

$("#menu_subs > li > div").click(function(){
	if(false == $(this).next().is(':visible')) {
		$('#menu_subs ul').slideUp(300);
	}
	$(this).next().slideToggle(300);
});
 
$('.main_menu_links').hide();
