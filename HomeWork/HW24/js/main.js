$(document).ready(function() {
	$('.modal-menu a').on('click', function(e){
		/*e.preventDefault();*/
		$('.modal').addClass('hidden');
		$('body').removeClass('modal');/*modal('hide')*/
		/*$('body').removeClass('modal-open');*/
		
		$(this).attr('href').show();

	})
});