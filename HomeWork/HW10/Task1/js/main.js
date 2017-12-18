var quickStart = $('.quick-start');
var fullReset = $('.full-reset');
var familyBlock = $('.family-block');
var allIncluded = $('.all-included');
$('.tab-1').on('click', function(event) {
	event.preventDefault();
	$('.tab-1').addClass('active-tab').siblings().removeClass('active-tab');
	$(quickStart).removeClass('hidden').addClass('visible');
	$(quickStart).siblings().removeClass('visible').addClass('hidden');
});
$('.tab-2').on('click', function(event) {
	event.preventDefault();
	$('.tab-2').addClass('active-tab').siblings().removeClass('active-tab');
	$(fullReset).removeClass('hidden').addClass('visible');
	$(fullReset).siblings().removeClass('visible').addClass('hidden');
});
$('.tab-3').on('click', function(event) {
	event.preventDefault();
	$('.tab-3').addClass('active-tab').siblings().removeClass('active-tab');
	$(familyBlock).removeClass('hidden').addClass('visible');
	$(familyBlock).siblings().removeClass('visible').addClass('hidden');
});
$('.tab-4').on('click', function(event) {
	event.preventDefault();
	$('.tab-4').addClass('active-tab').siblings().removeClass('active-tab');
	$(allIncluded).removeClass('hidden').addClass('visible');
	$(allIncluded).siblings().removeClass('visible').addClass('hidden');
});