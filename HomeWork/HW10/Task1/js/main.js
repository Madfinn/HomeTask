	var tabs = $('.variants').find('a');
	$(tabs).on('click', function(event) {
		event.preventDefault();
		var blockShown = $(this).attr('href');
		$(tabs).removeClass('active-tab');
		$(this).addClass('active-tab').siblings().removeClass('active-tab');
		$(this).addClass('active-tab').siblings().removeClass('active-tab');
		$(blockShown).addClass('visible').siblings().addClass('hidden').removeClass('visible');
});
